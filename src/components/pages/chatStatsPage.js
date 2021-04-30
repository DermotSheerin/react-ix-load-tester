import React from "react";
//import useChatStats from '../hooks/useChatStats'
import ChatStats from '../../components/chatStats'
import WebsocketStats from "../websocketStats";
//import ToggleStartButton from "../buttons/toggleStartButton";


const ChatStatsPage = () => {
  // retrieve chatStats received from the server using SocketIO
  const [chatStats, graphData] = WebsocketStats();


    return chatStats ?   (
         <ChatStats chatStats={chatStats} graphData={graphData} /> 
    ) :
    <h3>IX Chat Stats Not Available Yet .....please ensure nodeJS Generator is running</h3>

};

export default ChatStatsPage;
 