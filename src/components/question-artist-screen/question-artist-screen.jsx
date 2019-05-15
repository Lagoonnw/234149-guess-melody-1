import React, {PureComponent, Fragment} from "react";
import PropTypes                        from "prop-types";
import {QuestionType}                   from "../../constants/constants";
import {GameHeader}                     from "../game-screens-header/game-screens-header.jsx";
import {AudioPlayer}                    from "../audio-player/audio-player.jsx";

export class QuestionArtistScreen extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      isPlaying: false,
    };
    this._submitHandler = this._submitHandler.bind(this);
  }
  render() {
    const {question: {song, answers}} = this.props;
    const {isPlaying} = this.state;


    return (
      <Fragment>
        <GameHeader/>
        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <AudioPlayer
              isPlaying={isPlaying}
              onPlayButtonClick={() => this.setState({isPlaying: !isPlaying})}
              src={song.src}
            />
          </div>

          <form className="game__artist" onSubmit={this._submitHandler}>
            {answers.map((it, i) => <div className="artist" key={i}>
              <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${i}`}
                id={`artist-${i}`}/>
              <label className="artist__name" htmlFor={`artist-${i}`}>
                <img className="artist__picture" src={it.picture} alt={it.artist}/>
                {it.artist}
              </label>
            </div>)}
          </form>
        </section>
      </Fragment>
    );
  }

  _submitHandler(evt) {
    evt.preventDefault();
    this.props.onAnswer();
  }
}


QuestionArtistScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.oneOf([QuestionType.GENRE, QuestionType.ARTIST]).isRequired,
  }).isRequired,
};

