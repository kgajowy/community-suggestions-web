import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import SupportButton, { Loader } from "../SupportButton";

describe("when button is in pending state", () => {
  let wrapper: ShallowWrapper;
  let onClick: jest.Mock;

  beforeEach(() => {
    onClick = jest.fn();
    wrapper = shallow(
      <SupportButton onClick={onClick} pending={true}>
        Click
      </SupportButton>
    );
  });

  it("shall render", () => {
    expect(wrapper).toBeTruthy();
  });

  it("shall be disabled", () => {
    expect(wrapper.prop("disabled")).toEqual(true);
  });

  it("shall render spinner instead of child", () => {
    expect(wrapper.find(Loader).length).toEqual(1);
  });
});

describe("when button is in ready state", () => {
  let wrapper: ShallowWrapper;
  let onClick: jest.Mock;
  const children = "Click";

  beforeEach(() => {
    onClick = jest.fn();
    wrapper = shallow(
      <SupportButton onClick={onClick} pending={false}>
        {children}
      </SupportButton>
    );
  });

  it("shall render", () => {
    expect(wrapper).toBeTruthy();
  });

  it("shall not be disabled", () => {
    expect(wrapper.prop("disabled")).toEqual(false);
  });

  it("shall render children", () => {
    expect(wrapper.text()).toEqual(children);
  });

  it("shall call onClick fn when clicked", () => {
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
