import React from "react";

import LazyLoader from "components/lazy_loader";

import ImageSources from "../utils/image_sources";
import TextSources from "../utils/text_sources";
import type Section from "../utils/section";

class India extends React.Component implements Section {
  targetId = "india-text";

  render() {
    return (
      <LazyLoader
        backgroundImageSrc={ImageSources.india.source}
        backgroundImageAlt={ImageSources.india.alternateText}
        className="light section-content-container"
      >
        <div id={this.targetId}>
          <h3 className="display-3">{TextSources.india.header}</h3>'{" "}
          <div
            style={{
              padding: "5%",
            }}
          >
            {TextSources.india.content.map((value, index) => (
              <p key={value} id={`${this.targetId}-${index}`}>
                {value}
              </p>
            ))}
          </div>
        </div>
      </LazyLoader>
    );
  }

  componentDidMount() {
    Array.from(document.getElementById(this.targetId)?.children!).forEach(
      (value, index) => {
        import("components/text_enter_tween").then(({ setTextEnterTween }) =>
          setTextEnterTween({
            targetId: this.targetId,
            element: value,
            index: index,
          })
        );
      }
    );
  }
}

export default India;
