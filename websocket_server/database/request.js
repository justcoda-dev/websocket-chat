import axios from "axios";

const HTTP_METHOD = {
  GET: "GET",
  POST: "POST",
  DELETE: "DELETE",
  PATCH: "PATCH",
  PUT: "PUT",
};

export const createHttpClient = (config) => {
  const http = axios.create(config);
  const request = async (url, options) => {
    try {
      const { data } = await http.request({ url, ...options });
      return data;
    } catch (e) {
        console.log('error')
      throw e;
    }
  };

  request.get = (path, params, options) => {
    return request(path, { method: HTTP_METHOD.GET, params, ...options });
  };

  request.post = (path, data, options) =>
    request(path, {
      method: HTTP_METHOD.POST,
      data: { createdAt: Date.now(), updatedAt: null, ...data },
      ...options,
    });

  request.delete = (path, params, options) =>
    request(path, { method: HTTP_METHOD.DELETE, params, ...options });

  request.put = (path, data, options) =>
    request(path, {
      method: HTTP_METHOD.PUT,
      data: { updatedAt: Date.now(), ...data },
      ...options,
    });

  request.patch = (path, data, options) =>
    request(path, {
      method: HTTP_METHOD.PATCH,
      data: { updatedAt: Date.now(), ...data },
      ...options,
    });

  return request;
};
