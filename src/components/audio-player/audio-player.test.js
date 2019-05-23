import React from 'react';
import renderer from 'react-test-renderer';
import {AudioPlayer} from "./audio-player.jsx";

function createNodeMock(element) {
  if (element.type === `audio`) {
    return {};
  }
  return null;
}

const mock = {
  src: `bla-bla.mp3`,
  onPlayButtonClick: jest.fn()
};

describe(`Audio-player snapshot test`, () => {
  test(`Should render player correctly`, () => {
    const options = {createNodeMock};
    const tree = renderer.create(<AudioPlayer {...mock}/>, options).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


