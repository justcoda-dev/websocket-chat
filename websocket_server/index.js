import http from "http";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {WebSocketServer} from "ws";

import {database} from "./database/api.js";

const app = express();
app.use(cors());
// app.use(bodyParser.json());

app.post("/login", bodyParser.json(), async (req, res) => {
    const {name, password} = req.body;

    console.log(req.body);

    const user = await database.getUserBy({name, password});

    console.log(user);

    res.send("text");
});

const httpServer = http.createServer(app);
const wsServer = new WebSocketServer({server: httpServer});

const createWsResponse = (topic, payload) => JSON.stringify({topic, payload});

const wsTopics = {
    addUser: (ws) => async () => {
    },

    messages: (ws) => async () => {
        const messages = await database.getAllMessages();
        ws.send(createWsResponse("messages", messages));
    },
    userStartTyping:
        (ws) =>
            ({userId, toUser}) => {
                ws.send(createWsResponse("userStartTyping", {userId,toUser}));
            },
    userEndTyping:
        (ws) =>
            ({userId,toUser}) => {
                ws.send(createWsResponse("userEndTyping", {userId,toUser}));
            },
    addMessage:
        (ws) =>
            async ({userId, message, toUser}) => {
                await database.addMessage(userId, message, toUser);
                const messages = await database.getAllMessages();
                ws.send(createWsResponse("messages", messages));
            },
    editMessage:
        (ws) =>
            async ({messageId, message}) => {
                await database.editMessage(messageId, message);

                const messages = await database.getAllMessages();
                ws.send(createWsResponse("messages", messages));
            },
    removeMessage:
        (ws) =>
            async ({messageId}) => {
                await database.removeMessage(messageId);

                const messages = await database.getAllMessages();
                ws.send(createWsResponse("messages", messages));
            },
};

const handleWsMessage = ({binary, ws}) => {
    try {
        const message = JSON.parse(binary.toString());

        const data = {
            topic: message.topic,
            payload: null,
            ...message,
        };
        if (wsTopics[data.topic]) {
            wsTopics[data.topic](ws)(data.payload);
        }
    } catch (error) {
        ws.send(createWsResponse("error", error.message));
    }
};

wsServer.on("connection", (ws) => {
    console.log("Client connected");
    ws.on("message", (binary) => {
        return handleWsMessage({binary, ws})
    });

    ws.on("error", (e) => {
        console.log("WS server error", e);
    });
});

httpServer.listen(4000, () => console.log("WS server started"));
