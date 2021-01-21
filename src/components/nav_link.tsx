import React from "react";
import ErrorBoundary from "components/error_boundary";
import { ScrollLink } from "react-scroll";
import "styles/components/nav_link.css";

const Link = React.lazy(() => import("react-bootstrap/NavLink"));

class NavLink extends React.Component<NavLinkProps> {
  renderLoader = () => <div className="loader"></div>;

  render() {
    return (
      <ErrorBoundary>
        <React.Suspense fallback={this.renderLoader()}>
          <Link {...this.props}>{this.props.children}</Link>
        </React.Suspense>
      </ErrorBoundary>
    );
  }
}

export interface NavLinkProps {
  activeClass: string;
  className: string;
  to: string;
  spy?: boolean;
  smooth?: boolean | string;
  duration?: number;
}

export default ScrollLink(NavLink);
