import React from "react";
import GameWrapper from "components/organisms/GameWrapper";
import Profile from "components/organisms/Profile";
import InnerBox from "../InnerBox";

const GameContainer = () => {
  return (
    <InnerBox>
      <Profile />
      <GameWrapper />
    </InnerBox>
  );
};

export default GameContainer;
