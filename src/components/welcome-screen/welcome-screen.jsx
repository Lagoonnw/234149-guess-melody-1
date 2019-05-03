import React from 'react';
import PropTypes from 'prop-types';

export const WelcomeScreen = ({minutes = 5, mistakes = 3, onClick}) => {
  return (
    <section className="welcome">
      <div className="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
      <button className="welcome__button" onClick={onClick}><span className="visually-hidden">Начать игру</span></button>
      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>За {minutes} минут нужно ответить на все вопросы.</li>
        <li>Можно допустить {mistakes} ошибки.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  );
};

WelcomeScreen.propTypes = {
  minutes: PropTypes.number,
  mistakes: PropTypes.number,
  onClick: PropTypes.func
};


