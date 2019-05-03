import React from 'react';
import renderer from 'react-test-renderer';
import {WelcomeScreen} from "./welcome-screen";

describe(`welcome screen correctly renders`, () => {
  test(`renders with default props`, () => {
    const tree = renderer.create(<WelcomeScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
