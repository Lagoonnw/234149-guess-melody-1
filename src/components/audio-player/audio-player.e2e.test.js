import React         from 'react';
import {mount}     from 'enzyme';
import {AudioPlayer} from './audio-player.jsx';

const mock = {
  src: `hahaha.mp3`,
  onPlayButtonClick: jest.fn()
};

describe(`Audio-player callback test`, () => {
  test(`Should change state on button click`, () => {
    const component = mount(<AudioPlayer {...mock} />);
    const btn = component.find(`button`);
    btn.simulate(`click`);
    expect(component.state(`isPlaying`)).toEqual(true);
  });
});
