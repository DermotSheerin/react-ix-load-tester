import axios from "axios";
import FrameworkChoice from "../frameworkChoice";

export const baseIP = "10.134.45.26";
export const port = "8001";

// export const expressPort = 8001;
// export const fastifyPort = 8002;
// export let port = FrameworkChoice.framework;
// FrameworkChoice.framework === "Fastify" ? port = fastifyPort : port = expressPort;

console.log(`React using port: ${port}`);

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const startTest = async () => {
  return await axios.get(`http://${baseIP}:${port}/startTest`);
};

export const stopTest = async () => {
  return await axios.get(`http://${baseIP}:${port}/stopTest`);
};

export const changeChatParameters = async (data) => {
  return await axios.post(
    `http://${baseIP}:${port}/changeChatParameters`,
    JSON.stringify(data),
    config
  );
};

export const getChatParameters = async () => {
  return await axios.get(`http://${baseIP}:${port}/getChatParameters`);
};

export const resetChatStats = async () => {
  return await axios.get(`http://${baseIP}:${port}/resetStats`);
};

// export const toggleStart = async (toggle) => {
//   return await axios.post(
//     `http://localhost:3000/genStartStop/${toggle}`
//   )
// };
