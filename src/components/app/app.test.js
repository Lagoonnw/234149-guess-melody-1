import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

describe(`App correctly renders after relaunch`, () => {
  test(`should correctly render`, () => {
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
