import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  emptySuggestion,
  suggestionState,
} from "../../../__tests-utils__/factories/suggestion";
import { ToastActionType } from "../../../actions/toast";
import { AuthState } from "../../../reducers/auth";
import { SuggestionsState } from "../../../reducers/suggestions";
import SupportController from "../SupportController";

const mockStore = configureMockStore([thunk]);
const t = (k: string | string[]) => k;

describe("when component is connected to Store", () => {
  let wrapper: ShallowWrapper;
  const suggestion = emptySuggestion();
  const initialState: {
    auth: Partial<AuthState>;
    suggestions: Partial<SuggestionsState>;
  } = {
    auth: { loggedIn: false, currentUser: undefined },
    suggestions: {
      suggestions: [suggestion],
      suggestionStates: [
        { ...suggestionState(suggestion), changePending: true },
      ],
    },
  };
  const store = mockStore(initialState);
  const dispatch = jest.fn(store.dispatch);

  beforeEach(() => {
    store.dispatch = dispatch;
    wrapper = shallow(
      <SupportController store={store} suggestion={suggestion} />
    );
  });

  it("shall render", () => {
    expect(wrapper).toBeTruthy();
  });

  it("should pass direct props", () => {
    expect(wrapper.prop("suggestion")).toEqual(suggestion);
    expect(wrapper.prop("loggedIn")).toEqual(false);
    expect(wrapper.prop("currentUser")).toEqual(undefined);
    expect(wrapper.prop("pending")).toEqual(true);
  });

  it("should pass dispatch fn", () => {
    expect(wrapper.prop("support")).toBeTruthy();
    expect(wrapper.prop("showToast")).toBeTruthy();
  });

  it("should dispatch showToast action when called", () => {
    (wrapper.prop("showToast") as (msg: string) => any)("msg");
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.getActions().length).toEqual(1);
    expect(store.getActions()[0].type).toEqual(ToastActionType.Show);
  });
});
