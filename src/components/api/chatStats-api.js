import axios from 'axios';

// const baseIP = "10.134.45.26"
// const port = 8000;

export const baseIP = "135.123.73.56"
export const port = 8000;


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