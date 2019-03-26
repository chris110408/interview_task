/**
 * Created by leichen on 12/02/2018.
 */
import "whatwg-fetch";
import { notification } from "antd";

const codeMessage = {
  200: "ok",
  201: "201",
  202: "202",
  204: "204",
  400: "400 server problem",
  401: "401",
  403: "403",
  404: "no record",
  406: "wrong format",
  410: "410",
  422: "422",
  500: "server error",
  502: "502",
  503: "server done",
  504: "504"
};

async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const str = await response.text();

  let emailError;
  if (str.indexOf("duplicate key ") > 1) {
    emailError =
      "email address should be unique,Please use a different email address";
  }
  const errortext = codeMessage[response.status] || response.statusText;
  notification.error({
    message: `Error ${response.status}: ${response.url}`,
    description: emailError ? emailError : errortext,
    duration: 8
  });
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

export default async function request(url, options) {
  const defaultOptions = {
    credentials: "include"
  };
  const newOptions = { ...defaultOptions, ...options };
  if (
    newOptions.method === "POST" ||
    newOptions.method === "PUT" ||
    newOptions.method === "DELETE"
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        ...newOptions.headers
      };
      newOptions.body = JSON.stringify(newOptions.body);
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: "application/json",
        ...newOptions.headers
      };
    }
  }
  try {
    const response = await fetch(url, newOptions);
    const checkedRes = await checkStatus(response);
    if (newOptions.method === "DELETE" || checkedRes.status === 204) {
      const str = await checkedRes.text();
      return str;
    }
    const Json = await checkedRes.json();
    return Json;
  } catch (e) {
    /* eslint-disable */
    console.log(e);
  }
  // const response= await fetch(url, newOptions)
  //   // .then(checkStatus)
  //   .then(response => {
  //     if (newOptions.method === 'DELETE' || response.status === 204) {
  //       return response.text()
  //     }
  //     return response.json()
  //   })
  //   .catch(e => {
  //     console.log(e)
  //     console.log(e.toString())
  //     const status = e.name
  //     if (status === 401) {
  //       console.log('logout')
  //       return
  //     }
  //     if (status === 403) {
  //       console.log(403)
  //       return
  //     }
  //     if (status <= 504 && status >= 500) {
  //       console.log(500)
  //       return
  //     }
  //     if (status >= 404 && status < 422) {
  //       console.log(404)
  //     }
  //   })
}
