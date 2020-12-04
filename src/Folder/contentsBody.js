import { React } from "react";

class Contents extends React.Component {
  constructor() {
    super();
    this.state = {
      content: "my body content",
    };
  }
  componentDidMount() {
    this.state({ content: "Ajay Singla" });
  }
  render() {
    return <div><p>this is body contents</p></div>;
  }
}

export default Contents;
