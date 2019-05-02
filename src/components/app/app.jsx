import React from 'react';
import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";

const gameConfig = {
  minutes: 7,
  mistakes: 4
};

export const App = () => {
  return <WelcomeScreen {...gameConfig}/>;
};
