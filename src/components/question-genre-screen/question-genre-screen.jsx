import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import {QuestionType, GenreType} from '../../constants/constants';
import {GameHeader} from "../game-screens-header/game-screens-header.jsx";
import {AudioPlayer} from "../audio-player/audio-player.jsx";

export class QuestionGenreScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: null,
    };
    this._clickButtonHandler = this._clickButtonHandler.bind(this);
    this._submitHandler = this._submitHandler.bind(this);
  }

  render() {
    const {question: {answers, genre}} = this.props;

    return (
      <Fragment>
        <GameHeader/>
        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks" onSubmit={this._submitHandler}>
            {answers.map((it, i) => <div className="track" key={`answer-${i}`}>
              {this._getAudioPlayer(it, i)}
              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`}
                  id={`answer-${i}`}/>
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
  }

  _getAudioPlayer(audio, index) {
    const onPlayButtonClick = () => this._clickButtonHandler(index);
    return (
      <div className="game__track">
        <AudioPlayer
          src={audio.src}
          onPlayButtonClick={onPlayButtonClick}
          isPlaying={index === this.state.activePlayer}
        />
      </div>
    );
  }

  _clickButtonHandler(active) {
    this.setState({activePlayer: active === this.state.activePlayer ? null : active});
  }

  _submitHandler(evt){
    evt.preventDefault();
    this.props.onAnswer();
  }
}

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
