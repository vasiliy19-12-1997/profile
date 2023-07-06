import { Component } from "react";
type testClassProps = {
  props: any;
};
export default class TestClass extends Component {
  protected name = "Vasya";
  constructor(props: testClassProps) {
    super(props);
  }
  render() {
    return <div>TestClass</div>;
  }
}
