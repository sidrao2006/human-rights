import React from "react";

import TextSources from "./utils/text_sources";

import type { TargetLabelContent } from "components/wrapper_gen";
import type { TargetLabel } from "components/navbar";

import "bootstrap/dist/css/bootstrap.css";
import "css/pages/home/sections.css";

import NavLink from "components/nav_link";
import ErrorBoundary from "components/error_boundary";
import ImageSources from "./utils/image_sources";

const NavBar = React.lazy(() => import("components/navbar"));
const NavbarBrand = React.lazy(() =>
  import("react-bootstrap/Navbar").then(Navbar => ({
    default: Navbar.default.Brand,
  }))
);

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

  sideNavItems: TargetLabelContent[] = [
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

  topNavItems: TargetLabel[] = this.sideNavItems.map(sideNavItems => ({
    target: sideNavItems.target,
    label: sideNavItems.label,
  }));

  render() {
    return (
      <ErrorBoundary>
        <React.Suspense fallback={this.renderLoader()}>
          <Container fluid>
            <NavBar
              targetLabels={this.topNavItems}
              isBsNavBar={true}
              bsNavStyle={{ background: "rgba(255,255,255,0.8)" }}
              customBsNavElement={buildNavLinks}
              bsNavBrand={
                <NavbarBrand style={{ padding: "0 1%" }}>
                  <img
                    key={ImageSources.logo.alternateText}
                    src={ImageSources.logo.source}
                    alt={ImageSources.logo.alternateText}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />
                </NavbarBrand>
              }
              dark={false}
            />
            <Row>
              <NavBar targetLabels={this.sideNavItems} dark={this.state.dark} />
              {/* Styles  declared in index.css */}
              <Col id="content-container">
                <WrapperGen items={this.sideNavItems} />
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

function buildNavLinks(targetLabels: TargetLabel[]) {
  return targetLabels.map(targetLabel => (
    <NavLink
      key={
        targetLabels.indexOf(targetLabel) + targetLabel.toString() + "topNav"
      }
      activeClass="active"
      to={targetLabel.target}
      className=""
      spy={false}
      smooth={true}
      duration={500}
    >
      <span>{targetLabel.label}</span>
    </NavLink>
  ));
}

export default HomePage;
