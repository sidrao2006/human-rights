import React from "react";
import ErrorBoundary from "components/error_boundary";
import NavLink from "components/nav_link";
import "css/components/navbar.css";

const Nav = React.lazy(() => import("react-bootstrap/Nav"));

NavLink.defaultProps = {
  spy: true,
  smooth: true,
  duration: 500,
  offset: 0,
};

class NavBar extends React.Component<NavBarProps> {
  renderLoader = () => <div className="loader"></div>;

  render() {
    return (
      <ErrorBoundary>
        <React.Suspense fallback={this.renderLoader()}>
          <Nav className="flex-column sideNav">
            {this.props.targetLabels.map(targetLabel => (
              <NavLink
                key={this.props.targetLabels.indexOf(targetLabel)}
                activeClass="active"
                to={targetLabel.target}
                className={`navLink ${this.props.dark ? "dark" : ""}`}
              >
                <span>{targetLabel.label}</span>
              </NavLink>
            ))}
          </Nav>
        </React.Suspense>
      </ErrorBoundary>
    );
  }
}

interface NavBarProps {
  targetLabels: TargetLabel[];
  dark: boolean;
}

export interface TargetLabel {
  target: string;
  label: string;
}

export default NavBar;
