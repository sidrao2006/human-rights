import React from "react";

import LazyLoader from "components/lazy_loader";

import ImageSources from "../utils/image_sources";
import TextSources from "../utils/text_sources";
import $ from "../utils/jquery_mock";
import Section from "../utils/section";

const Button = React.lazy(() => import("react-bootstrap/Button"));

class RightsViolation extends React.Component implements Section {
  targetId = "rights-violation-text";

  render() {
    return (
      <LazyLoader
        backgroundImageSrc={ImageSources.rightsViolation.source}
        backgroundImageAlt={ImageSources.rightsViolation.alternateText}
        backgroundImageStyle={{
          filter: "brightness(0.7)",
        }}
        className="light section-content-container"
      >
        <div id={this.targetId}>
          <h3 className="display-3">{TextSources.rightsViolation.header}</h3>

          <div
            style={{
              padding: "5%",
            }}
          >
            {TextSources.rightsViolation.content.map((value, index) => (
              <p key={value} id={`${this.targetId}-${index}`}>
                {value}
              </p>
            ))}
          </div>
        </div>

        <Button
          variant="link"
          style={{
            position: "absolute",
            bottom: "5%",
            right: "5%",
            backgroundColor: "#f8f9fa",
          }}
          onClick={() => window.open("https://blacklivesmatter.com")}
        >
          #BlackLivesMatter
        </Button>
      </LazyLoader>
    );
  }

  componentDidMount() {
    Array.from($(`#${this.targetId}`)?.children!).forEach((value, index) =>
      import("components/text_enter_tween").then(({ setTextEnterTween }) =>
        setTextEnterTween({
          targetId: this.targetId,
          element: value,
          index: index,
        })
      )
    );
  }
}

export default RightsViolation;
