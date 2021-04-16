import axios from 'axios';
import FrameworkChoice from '../frameworkChoice'

export const baseIP = "135.123.64.84"
export const port = "8001"

// export const expressPort = 8001;
// export const fastifyPort = 8002;
// export let port = FrameworkChoice.framework;
// FrameworkChoice.framework === "Fastify" ? port = fastifyPort : port = expressPort;

console.log(`React using port: ${port}`)

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

  // export const getStats = async () => {
  //   return await axios.get(
  //     `http://localhost:3000/getStats`
  //   )
  // };


  // export const getStats = () => {
  //   return fetch(
  //     `http://localhost:3000/getStats`
  //   )
  //     .then((res) => res.json())
  //     .then((json) => json.results);
  // };


  // removed and now using websockets via socket.io
  // export const getStats = async () => {
  //   return await axios.get(
  //     `http://${baseIP}:${port}/getStats`
  //   )
  // };

  export const startTest = async () => {
    return await axios.get(
      `http://${baseIP}:${port}/startTest`
    )
  };

  export const stopTest = async () => {
    return await axios.get(
      `http://${baseIP}:${port}/stopTest`
    )
  };

  export const changeChatParameters = async (data) => {
    return await axios.post(
      `http://${baseIP}:${port}/changeChatParameters`, JSON.stringify(data), config
    )
  };

  export const getChatParameters = async () => {
    return await axios.get(
      `http://${baseIP}:${port}/getChatParameters`
    )
  };

  // export const toggleStart = async (toggle) => {
  //   return await axios.post(
  //     `http://localhost:3000/genStartStop/${toggle}`
  //   )
  // };