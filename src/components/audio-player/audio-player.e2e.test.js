import React from 'react';
import {mount} from 'enzyme';
import {AudioPlayer} from './audio-player.jsx';

const mock = {
  src: `hahaha.mp3`,
  onPlayButtonClick: jest.fn()
};

describe(`Audio-player callback test`, () => {
  test(`Should change state on button click`, () => {
    const component = mount(<AudioPlayer {...mock}/>);
    component.instance()._audioRef.current.pause = () => jest.fn();
    component.instance()._audioRef.current.play = () => jest.fn();
    component.setState({isLoading: false});
    component.find(`.track__button`).simulate(`click`);
    expect(component.state(`isPlaying`)).toBeTruthy();
    component.find(`.track__button`).simulate(`click`);
    expect(component.state(`isPlaying`)).toBeFalsy();
  });
});
