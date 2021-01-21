import React from "react";

import LazyLoader from "components/lazy_loader";

import TextSources from "../utils/text_sources";
import $ from "../utils/jquery_mock";
import Section from "../utils/section";

class Origin extends React.Component implements Section {
  targetId = "origin-text";

  render() {
    return (
      <LazyLoader
        backgroundImageSrc=""
        backgroundImageAlt=""
        shouldUseCustomBackground={true}
        customBackground={style => (
          <video
            src="./videos/origin-background.mp4"
            preload="auto"
            autoPlay
            loop
            muted
            style={{
              top: "0px",
              left: "0px",
              ...style,
            }}
          ></video>
        )}
        className="light section-content-container"
      >
        <div id={this.targetId}>
          <h3 className="display-3">{TextSources.origin.header}</h3>

          <div
            style={{
              padding: "5%",
            }}
          >
            {TextSources.origin.content.map((value, index) => (
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

export default Origin;
