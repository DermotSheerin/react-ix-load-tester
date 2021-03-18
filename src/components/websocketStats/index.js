import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import {baseIP, port} from "../api/chatStats-api"

const WebsocketStats = () => {
  const [chatStats, setChatStats] = useState("");

  // retrieve SUT IP and Port from chatStats-api 
  const ENDPOINT = `http://${baseIP}:${port}/`;

  // connect to the socket server on component mount with useEffect. Then, we save each new incoming message in the component's state.
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setChatStats(data);
    });
    // the logic for cleaning up timers and listeners in JavaScript is paramount to avoid memory leaks in the frontend. We need also to close the connection when the component disappears from the DOM. To do so, we return a function from useEffect, with a call to disconnect() on the client
    return () => {
      socket.disconnect();
    };
  }, []);

  return [chatStats];
};

export default WebsocketStats;