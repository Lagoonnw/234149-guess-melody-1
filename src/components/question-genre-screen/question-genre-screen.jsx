import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {QuestionType, GenreType} from '../../constants/constants';
import {GameHeader} from "../game-screens-header/game-screens-header.jsx";

export const QuestionGenreScreen = ({question, onAnswer}) => {
  const {answers, genre} = question;
  const submitHandler = (evt) => {
    evt.preventDefault();
    onAnswer();
  };

  return (
    <Fragment>
      <GameHeader/>
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={submitHandler}>
          {answers.map((it, i) => <div className="track" key={`answer-${i}`}>
            <button className="track__button track__button--play" type="button"/>
            <div className="track__status">
              <audio />
            </div>
            <div className="game__answer">
              <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`} />
              <label className="game__check" htmlFor={`answer-${i}`}>
                Отметить
              </label>
            </div>
          </div>)}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </Fragment>
  );
};

QuestionGenreScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.oneOf([GenreType.ROCK, GenreType.JAZZ, GenreType.BLUES]).isRequired,
    })).isRequired,
    genre: PropTypes.oneOf([GenreType.ROCK, GenreType.JAZZ, GenreType.BLUES]).isRequired,
    type: PropTypes.oneOf([QuestionType.GENRE, QuestionType.ARTIST]).isRequired,
  }).isRequired,
};
