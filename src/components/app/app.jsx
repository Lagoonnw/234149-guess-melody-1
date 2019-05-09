import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";
import {QuestionGenreScreen} from "../question-genre-screen/question-genre-screen.jsx";
import {QuestionArtistScreen} from "../question-artist-screen/question-artist-screen.jsx";
import {QuestionType} from "../../constants/constants";

export class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  _getScreen(question, onClick) {
    switch (question.type) {
      case QuestionType.GENRE:

        return (
          <QuestionGenreScreen
            question={question}
            onAnswer={onClick}
          />
        );

      case QuestionType.ARTIST:

        return (
          <QuestionArtistScreen
            question={question}
            onAnswer={onClick}
          />
        );
    }

    return null;
  }

  render() {
    const {questions, errorCount, gameTime} = this.props;
    const {question} = this.state;
    const buttonClickHandler = () =>
      this.setState({question: (question + 1 >= questions.length) ? -1 : question + 1});

    if (!questions[question]) {
      return (
        <WelcomeScreen
          errorCount={errorCount}
          gameTime={gameTime}
          onClick={buttonClickHandler}
        />);
    }

    return (
      <section className={`game ${QuestionType.ARTIST}`}>
        {this._getScreen(questions[question], buttonClickHandler)}
      </section>
    );
  }
}

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

