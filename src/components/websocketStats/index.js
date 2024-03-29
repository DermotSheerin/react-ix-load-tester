import { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { baseIP, port } from "../api/chatStats-api";

const WebsocketStats = () => {
  const [chatStats, setChatStats] = useState("");
  const [graphData, setGraphData] = useState([]);

  // retrieve SUT IP and Port from chatStats-api
  const ENDPOINT = `http://${baseIP}:${port}/`;

  // connect to the socket server on component mount with useEffect. Then, we save each new incoming message in the component's state.
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", (data) => {
      setChatStats(data);
      // setGraphData can not only take a value but it can also take a callback
      // currentData (callback) will grab the current value stored in state when this callback is invoked, I then append this array each time with the resource values passed in i.e., 'data.graphData'
      setGraphData((currentData) => [...currentData, data.graphData]);
    });
    // the logic for cleaning up timers and listeners in JavaScript is paramount to avoid memory leaks in the frontend. We need also to close the connection when the component disappears from the DOM. To do so, we return a function from useEffect, with a call to disconnect() on the client
    return () => {
      socket.disconnect();
    };
  }, []);

  return [chatStats, graphData];
};

export default WebsocketStats;
