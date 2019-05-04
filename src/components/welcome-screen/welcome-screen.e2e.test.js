import React from "react";
import {shallow} from "enzyme";
import {WelcomeScreen} from "./welcome-screen.jsx";

describe(`Welcome screen button test`, () => {
  test(`should call clickHandler on button click`, () => {
    const clickHandler = jest.fn();
    const component = shallow(<WelcomeScreen onClick={clickHandler}/>);
    const btn = component.find(`.welcome__button`);
    btn.simulate(`click`);
    expect(clickHandler).toHaveBeenCalled();
  });
});
