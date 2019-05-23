import React from 'react';
import renderer from 'react-test-renderer';
import {QuestionArtistScreen} from './question-artist-screen.jsx';
import {createNodeMock} from '../../__mocks__/create-mock-node';

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `path.mp3`,
    },
    answers: [
      {
        picture: `path.jpg`,
        artist: `John Snow`,
      },
      {
        picture: `path.jpg`,
        artist: `Jack Daniels`,
      },
      {
        picture: `path.jpg`,
        artist: `Jim Beam`,
      },
    ],
  },
};

describe(`ArtistQuestionScreen render`, () => {
  test(`Should render ArtistQuestionScreen correctly`, () => {
    const {question} = mock;
    const options = {createNodeMock};
    const tree = renderer.create(
        <QuestionArtistScreen
          onAnswer={jest.fn()}
          question={question}
        />, options).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
