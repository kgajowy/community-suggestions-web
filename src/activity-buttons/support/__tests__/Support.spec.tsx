import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
// @ts-ignore
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { emptySuggestion } from "../../../__tests-utils__/factories/suggestion";
import { i18nTest } from "../../../__tests-utils__/utils/i18n";
import { Support } from "../Support";

const mockStore = configureMockStore([thunk]);
const t = (k: string | string[]) => k;

describe("when user is not logged in", () => {
  let wrapper: ShallowWrapper;
  let support: jest.Mock;
  let showToast: jest.Mock;
  const suggestion = emptySuggestion();
  const initialState = {
    auth: { loggedIn: false, currentUser: null },
    suggestion: {},
  };
  const store = mockStore(initialState);

  beforeEach(() => {
    support = jest.fn();
    showToast = jest.fn();
    wrapper = shallow(
      <Support
        support={support}
        showToast={showToast}
        loggedIn={false}
        currentUser={null}
        i18n={i18nTest}
        tReady={true}
        t={t}
        pending={false}
        suggestion={suggestion}
      />
    );
  });

  it("shall render", () => {
    expect(wrapper).toBeTruthy();
    console.log(wrapper.debug());
  });
});
