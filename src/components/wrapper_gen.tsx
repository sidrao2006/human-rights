import React from "react";

const Element = React.lazy(() =>
  import("react-scroll").then(({ Element }) => ({ default: Element }))
);

class WrapperGen extends React.Component<Props> {
  render() {
    let content: JSX.Element[] = [];
    this.props.items.forEach((_, index) => {
      content.push(
        <Element name={this.props.items[index].target} key={index}>
          {this.props.items[index].content}
        </Element>
      );
    });

    return content;
  }
}

interface Props {
  items: TargetLabelContent[];
}

export interface TargetLabelContent {
  target: string;
  label: string;
  content: JSX.Element;
}

export default WrapperGen;
