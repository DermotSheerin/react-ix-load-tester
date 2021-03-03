import React, { useState } from "react";
import useChatParameters from '../hooks/useChatParameters'
import useChangeChatParameters from '../hooks/useChangeChatParameters'
import ChatParameters from '../../components/chatParameters'


const ChatParametersPage = () => {
  const [chatParameters] = useChatParameters();


  return chatParameters && (
      <ChatParameters chatParameters={chatParameters} />
  );
};

export default ChatParametersPage;