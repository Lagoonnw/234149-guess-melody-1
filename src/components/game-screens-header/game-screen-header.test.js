import React from 'react';
import renderer from 'react-test-renderer';
import {GameHeader} from "./game-screens-header.jsx";

describe(`Game-screens header render`, () => {
  test(`Should render the header correctly`, () => {
    const tree = renderer.create(<GameHeader/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
