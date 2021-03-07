import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import {baseIP, port} from "../api/chatStats-api"

const WebsocketStats = () => {
  const [chatStats, setChatStats] = useState("");
  const ENDPOINT = `http://${baseIP}:${port}/`;

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      setChatStats(data);
    });
  }, []);

  return [chatStats];
};

export default WebsocketStats;