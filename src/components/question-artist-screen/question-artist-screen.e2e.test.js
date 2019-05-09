import React from "react";
import {mount} from "enzyme";
import {QuestionArtistScreen} from "./question-artist-screen.jsx";

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
      }
    ],
  },
};

describe(`ArtistQuestion button click`, () => {
  test(`Should not send form when user answers artist question`, () => {
    const {question} = mock;
    const onAnswer = jest.fn();
    const component = mount(
        <QuestionArtistScreen
          onAnswer={onAnswer}
          question={question}
        />
    );

    const form = component.find(`form`);
    const formSendPrevention = jest.fn();
    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });
});
