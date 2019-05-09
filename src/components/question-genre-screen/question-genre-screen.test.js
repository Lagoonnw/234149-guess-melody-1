import React from 'react';
import renderer from 'react-test-renderer';
import {QuestionGenreScreen} from './question-genre-screen';

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `test.mp3`,
        genre: `rock`,
      },
      {
        src: `test.mp3`,
        genre: `blues`,
      },
      {
        src: `test.mp3`,
        genre: `jazz`,
      },
      {
        src: `test.mp3`,
        genre: `rock`,
      },
    ],
  },
};

describe(`QuestionGenreScreen render`, () => {
  test(`Should render QuestionGenreScreen correctly`, () => {
    const {question} = mock;
    const tree = renderer.create(
        <QuestionGenreScreen
          onAnswer={jest.fn()}
          question={question}
        />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
