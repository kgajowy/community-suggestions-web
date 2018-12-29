import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { LinkElement } from "../../LinkElement";
import { LoginLink } from "../LogInLink";

describe("when onClick is provided", () => {
  let wrapper: ShallowWrapper;
  let onClick: jest.Mock;

  beforeEach(() => {
    onClick = jest.fn();
    wrapper = shallow(<LoginLink logIn={onClick} />);
  });

  it("shall render", () => {
    expect(wrapper).toBeTruthy();
  });

  it("shall call the provided callback", () => {
    wrapper
      .find(LinkElement)
      .props()
      .onClick({} as any);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
