import React from "react";
import {mount} from "enzyme";
import {QuestionGenreScreen} from "./question-genre-screen.jsx";

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path`,
        genre: `rock`,
      }
    ],
  },
};

describe(`GenderQuestion button click`, () => {
  test(`Should not send form when user answers genre question`, () => {
    const {question} = mock;
    const onAnswer = jest.fn();
    const genreQuestion = mount(
        <QuestionGenreScreen
          onAnswer={onAnswer}
          question={question}
        />
    );

    const form = genreQuestion.find(`form`);
    const formSendPrevention = jest.fn();
    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });
});


