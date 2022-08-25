import { shallow } from "enzyme";
import React from "react";

const Foo = props => (
  <div>
    <button onClick={() => props.onButtonClick && props.onButtonClick()} />
  </div>
);
const MyComponent = props => (
  <div>
    <Foo />
    <Foo />
    <Foo />
    <div className="icon-star"></div>
    {props.children}
  </div>
);

describe("<MyComponent />", () => {
  it("renders three <Foo /> components", () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(Foo)).toHaveLength(3);
  });

  it("renders an `.icon-star`", () => {
    const wrapper = shallow(<MyComponent />);
    expect(wrapper.find(".icon-star")).toHaveLength(1);
  });

  it("renders children when passed in", () => {
    const wrapper = shallow(
      <MyComponent>
        <div className="unique" />
      </MyComponent>
    );
    expect(wrapper.contains(<div className="unique" />)).toEqual(true);

    expect(wrapper).toMatchInlineSnapshot(`
      <div>
        <Foo />
        <Foo />
        <Foo />
        <div
          className="icon-star"
        />
        <div
          className="unique"
        />
      </div>
    `);
  });

  it("simulates click events", () => {
    const onButtonClick = jest.fn();
    const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    wrapper.find("button").simulate("click");
    expect(onButtonClick).toHaveBeenCalledTimes(1);
  });
});
