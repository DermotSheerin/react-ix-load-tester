import React from "react";
//import useChatStats from '../hooks/useChatStats'
import ChatStats from '../../components/chatStats'
import WebsocketStats from "../websocketStats";
//import ToggleStartButton from "../buttons/toggleStartButton";


const ChatStatsPage = () => {
  // retrieve chatStats retrieved from the server using SocketIO
  const [chatStats, usedMem] = WebsocketStats();
  console.log(typeof usedMem)


    return chatStats ?   (
         <ChatStats chatStats={chatStats} usedMem={usedMem} /> 
    ) :
    <h3>IX Chat Stats Not Available Yet .....please ensure nodeJS Generator is running</h3>

};

export default ChatStatsPage;
 