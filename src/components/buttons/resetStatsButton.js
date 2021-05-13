import React from "react";
import { resetChatStats } from "../api/chatStats-api";

const ResetStatsButton = () => {
  const handleClick = () => {
    resetChatStats();
  };

  return (
    <button className="btn w-10 btn-secondary" onClick={handleClick}>
      Reset Stats
    </button>
  );
};

export default ResetStatsButton;
