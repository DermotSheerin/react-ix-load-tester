import React, { useState } from "react";
import useChatParameters from "../hooks/useChatParameters";
//import useChangeChatParameters from '../hooks/useChangeChatParameters'
import ChatParameters from "../../components/chatParameters";

const ChatParametersPage = () => {
  const [chatParameters] = useChatParameters();

  return chatParameters ? (
    <ChatParameters chatParameters={chatParameters} />
  ) : (
    <h3>
      IX Chat Parameters is Not Available .....please ensure nodeJS Generator is
      running
    </h3>
  );
};

export default ChatParametersPage;
