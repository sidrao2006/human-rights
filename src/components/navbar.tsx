import React from "react";
import ErrorBoundary from "components/error_boundary";
import NavLink from "components/nav_link";
import Navbar from "react-bootstrap/Navbar";
import "css/components/navbar.css";

const Nav = React.lazy(() => import("react-bootstrap/Nav"));

class NavBar extends React.Component<NavBarProps> {
  renderLoader = () => <div className="loader"></div>;

  render() {
    return (
      <ErrorBoundary>
        <React.Suspense fallback={this.renderLoader()}>
          <CustomizableNavBar
            bsNavStyle={this.props.bsNavStyle}
            isBsNavBar={this.props.isBsNavBar}
            bsNavBrand={this.props.bsNavBrand}
          >
            {this.props.customBsNavElement?.(this.props.targetLabels) ??
              this.props.targetLabels.map(targetLabel => (
                <NavLink
                  key={
                    this.props.targetLabels.indexOf(targetLabel) +
                    targetLabel.toString()
                  }
                  activeClass="active"
                  to={targetLabel.target}
                  className={`navLink ${this.props.dark ? "dark" : ""}`}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span>{targetLabel.label}</span>
                </NavLink>
              ))}
          </CustomizableNavBar>
        </React.Suspense>
      </ErrorBoundary>
    );
  }
}

const CustomizableNavBar = (
  props: React.PropsWithChildren<{
    children: JSX.Element[];
    bsNavStyle?: React.CSSProperties;
    isBsNavBar?: boolean;
    bsNavBrand?: JSX.Element;
  }>
) => {
  return props.isBsNavBar ?? false ? (
    <Navbar style={props.bsNavStyle} expand="lg" className="topNav">
      {props.bsNavBrand}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>{props.children}</Navbar.Collapse>
    </Navbar>
  ) : (
    <Nav className="flex-column sideNav">{props.children}</Nav>
  );
};

interface NavBarProps {
  targetLabels: TargetLabel[];
  dark: boolean;
  bsNavStyle?: React.CSSProperties;
  isBsNavBar?: boolean;
  bsNavBrand?: JSX.Element;
  customBsNavElement?: (targetLabels: TargetLabel[]) => JSX.Element[];
}

export interface TargetLabel {
  target: string;
  label: string;
}

export default NavBar;
