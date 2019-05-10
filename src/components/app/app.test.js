import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

const mock = {
  gameTime: 5,
  errorCount: 3,
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          src: `song.mp3`,
          genre: `rock`,
        }
      ],
    },
    {
      type: `artist`,
      song: {
        artist: `Jim Beam`,
        src: `path.mp3`,
      },
      answers: [
        {
          picture: `path.jpg`,
          artist: `John Snow`,
        }
      ],
    },
  ]
};
describe(`App correctly renders after relaunch`, () => {
  test(`should correctly render`, () => {
    const tree = renderer.create(<App {...mock} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
