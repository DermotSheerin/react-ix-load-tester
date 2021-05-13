import { useEffect, useState } from "react";
import { getChatParameters } from "../api/chatStats-api";

const useChatParameters = () => {
  const [chatParameters, setChatParameters] = useState(null);

  useEffect(() => {
    getChatParameters().then((chatParameters) => {
      setChatParameters(chatParameters);
    });
  }, []);
  return [chatParameters, setChatParameters];
};

export default useChatParameters;
