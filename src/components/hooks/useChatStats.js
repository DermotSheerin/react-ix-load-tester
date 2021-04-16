import { useEffect, useState } from "react";
import { getStats } from "../api/chatStats-api";

// no longer needed as now using webhooks
const useChatStats = () => {
  // const [chatStats, setChatStats] = useState(null);
  // useEffect(() => {
  //   setInterval( () =>
  //   getStats().then((stats) => {
  //     setChatStats(stats.data);
  //   }),5000);
  // }, []);
  // return [chatStats, setChatStats];
};

export default useChatStats;