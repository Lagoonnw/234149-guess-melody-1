import React from 'react';
import ReactDom from 'react-dom';
import {App} from "./components/app/app.jsx";
import {questions} from "./mocks/questions";
import {gameConfig} from "./mocks/game-config";

const rootElement = document.querySelector(`.main`);

const init = () => {
  ReactDom.render(<App {...gameConfig} questions={questions}/>, rootElement);
};

init();
