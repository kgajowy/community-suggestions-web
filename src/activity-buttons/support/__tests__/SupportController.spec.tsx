import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
// @ts-ignore
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { emptySuggestion } from "../../../__tests-utils__/factories/suggestion";
import SupportButton from "../SupportButton";
import { SupportController } from "../SupportController";

const mockStore = configureMockStore([thunk]);
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
