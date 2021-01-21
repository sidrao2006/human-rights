import React from "react";

import ErrorBoundary from "components/error_boundary";
import TextSources from "./utils/text_sources";
import { TargetLabelContent } from "components/wrapper_gen";

import "styles/pages/home/sections.css";

const NavBar = React.lazy(() => import("components/navbar"));
const Row = React.lazy(() => import("react-bootstrap/Row"));
const Col = React.lazy(() => import("react-bootstrap/Col"));
const Container = React.lazy(() => import("react-bootstrap/Container"));
const WrapperGen = React.lazy(() => import("components/wrapper_gen"));

const What = React.lazy(() => import("./sections/what"));
const Why = React.lazy(() => import("./sections/why"));
const Origin = React.lazy(() => import("./sections/origin"));
const UNDeclarations = React.lazy(() => import("./sections/un_declarations"));
const India = React.lazy(() => import("./sections/india"));
const RightsViolation = React.lazy(() => import("./sections/rights_violation"));

const Footer = React.lazy(() => import("./footer"));

class HomePage extends React.Component {
  state = {
    dark: false,
  };

  renderLoader = () => <div className="loader"></div>;

  updateNavBarTextColor = (shouldSwitchToDark: boolean) => {
    this.setState({
      dark: shouldSwitchToDark,
    });
  };

  items: TargetLabelContent[] = [
    {
      target: "what",
      label: TextSources.what.header,
      content: <What />,
    },
    {
      target: "why",
      label: TextSources.why.header,
      content: <Why />,
    },
    {
      target: "origin",
      label: TextSources.origin.header,
      content: <Origin />,
    },
    {
      target: "un_declarations",
      label: TextSources.unDeclarations.header,
      content: (
        <UNDeclarations
          onEnterViewport={() => this.updateNavBarTextColor(true)}
          onExitViewport={() => this.updateNavBarTextColor(false)}
        />
      ),
    },
    {
      target: "india",
      label: TextSources.india.header,
      content: <India />,
    },
    {
      target: "case_studies",
      label: TextSources.rightsViolation.header,
      content: <RightsViolation />,
    },
  ];

  render() {
    return (
      <ErrorBoundary>
        <React.Suspense fallback={this.renderLoader()}>
          <Container fluid>
            <Row>
              <NavBar targetLabels={this.items} dark={this.state.dark} />
              {/* Styles  declared in index.css */}
              <Col id="content-container">
                <WrapperGen items={this.items} />
                <Footer />
              </Col>
            </Row>
          </Container>
        </React.Suspense>
      </ErrorBoundary>
    );
  }

  componentDidMount = () =>
    import("react-scroll").then(Scroll => Scroll.scrollSpy.update());
}

export default HomePage;
