import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { emptySuggestion } from "../../../__tests-utils__/factories/suggestion";
import { emptyUser } from "../../../__tests-utils__/factories/user";
import Suggestion from "../../../shared/interfaces/suggestion";
import SupportButton from "../SupportButton";
import { SupportController } from "../SupportController";

const t = (k: string | string[]) => k;

describe("when user is not logged in", () => {
  let wrapper: ShallowWrapper;
  let support: jest.Mock;
  let showToast: jest.Mock;
  const suggestion = emptySuggestion();
  beforeEach(() => {
    support = jest.fn();
    showToast = jest.fn();
    wrapper = shallow(
      <SupportController
        suggestion={suggestion}
        support={support}
        showToast={showToast}
        loggedIn={false}
        currentUser={null}
        pending={false}
        t={t}
      />
    );
  });

  it("shall render", () => {
    expect(wrapper).toBeTruthy();
  });

  it("shall call showToast on tap", () => {
    wrapper.find(SupportButton).simulate("click");
    expect(showToast).toHaveBeenCalled();
    expect(support).not.toHaveBeenCalled();
  });

  it("should have 'suggestion.support' translation key on Button", () => {
    expect(wrapper.find(SupportButton).props().children).toEqual(
      "suggestion.support"
    );
  });
});

describe("when user is logged in", () => {
  let wrapper: ShallowWrapper;
  let support: jest.Mock;
  let showToast: jest.Mock;
  let suggestion: Suggestion;
  let user;

  beforeEach(() => {
    support = jest.fn();
    showToast = jest.fn();
    user = emptyUser();
    suggestion = emptySuggestion();
    wrapper = shallow(
      <SupportController
        suggestion={suggestion}
        support={support}
        showToast={showToast}
        loggedIn={true}
        currentUser={user}
        pending={false}
        t={t}
      />
    );
  });

  it("shall render", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should have 'suggestion.support' translation key on Button", () => {
    expect(wrapper.find(SupportButton).props().children).toEqual(
      "suggestion.support"
    );
  });

  describe("when user has not supported the suggestion yet", () => {
    it("shall call support on tap", () => {
      wrapper.find(SupportButton).simulate("click");
      expect(showToast).not.toHaveBeenCalled();
      expect(support).toHaveBeenCalledWith(suggestion);
    });
  });

  describe("when user has supported the suggestion already", () => {
    beforeEach(() => {
      suggestion = emptySuggestion();
      user = emptyUser({ suggestions: [suggestion] });
      support = jest.fn();
      showToast = jest.fn();
      wrapper = shallow(
        <SupportController
          suggestion={suggestion}
          support={support}
          showToast={showToast}
          loggedIn={true}
          currentUser={user}
          pending={false}
          t={t}
        />
      );
    });

    it("shall render", () => {
      expect(wrapper).toBeTruthy();
    });

    it("should have 'suggestion.supported' translation key on Button", () => {
      expect(wrapper.find(SupportButton).props().children).toEqual(
        "suggestion.supported"
      );
    });

    it("shall not call support on tap", () => {
      wrapper.find(SupportButton).simulate("click");
      expect(support).not.toHaveBeenCalled();
      expect(showToast).toHaveBeenCalled();
    });
  });
});
