import React from "react";
import { shallow } from "enzyme";

test("getting started", () => {
  const CustomComponent = () => <div></div>;
  const wrapper = shallow(<CustomComponent />);
  expect(wrapper).toMatchInlineSnapshot(`<div />`);
});
