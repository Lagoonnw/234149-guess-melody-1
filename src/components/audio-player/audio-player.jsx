import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import {PlayButtonText} from '../../constants/constants';

export class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
    };
    this._audioRef = createRef();
    this._handleButtonClick = this._handleButtonClick.bind(this);
  }

  componentDidMount() {
    const {src} = this.props;
    const audio = this._audioRef.current;
    this._initAudioPlayer({audio, src});
  }

  componentDidUpdate() {
    const audio = this._audioRef.current;

    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  componentWillUnmount() {
    const audio = this._audioRef.current;
    this._resetAudioPlayer(audio);
  }

  render() {
    const {src, controls} = this.props;
    const {isLoading, isPlaying} = this.state;

    return (
      <React.Fragment>
        <button
          className={`track__button track__button--${isPlaying ? PlayButtonText.PAUSE : PlayButtonText.PLAY}`}
          type="button"
          disabled={isLoading}
          onClick={this._handleButtonClick}
        />
        <div className="track__status">
          <audio
            src={src}
            controls={controls}
            ref={this._audioRef}
          />
        </div>
      </React.Fragment>
    );
  }

  _initAudioPlayer({audio, src}) {
    audio.src = src;

    audio.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    audio.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    audio.onpause = () => this.setState({
      isPlaying: false,
    });

    audio.ontimeupdate = () => this.setState({
      progress: audio.currentTime
    });
  }

  _resetAudioPlayer(audio) {
    audio.oncanplaythrough = null;
    audio.onplay = null;
    audio.onpause = null;
    audio.ontimeupdate = null;
    audio.src = ``;
  }

  _handleButtonClick() {
    this.props.onPlayButtonClick();
    this.setState({isPlaying: !this.state.isPlaying});
  }
}

AudioPlayer.propTypes = {
  isPlaying: PropTypes.bool,
  src: PropTypes.string.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  controls: PropTypes.bool
};

AudioPlayer.defaultProps = {
  isPlaying: false,
  controls: false
};


