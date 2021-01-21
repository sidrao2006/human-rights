import React from "react";

import LazyLoader from "components/lazy_loader";

import TextSources from "../utils/text_sources";
import $ from "../utils/jquery_mock";
import Section from "../utils/section";
import ImageSources from "../utils/image_sources";
import Button from "react-bootstrap/esm/Button";

class Origin extends React.Component implements Section {
  state = { hideText: false };

  targetId = "origin-text";

  render() {
    return (
      <LazyLoader
        backgroundImageSrc=""
        backgroundImageAlt=""
        shouldUseCustomBackground={true}
        customBackground={style => (
          <video
            title={ImageSources.origin.alternateText}
            src={ImageSources.origin.source}
            preload="auto"
            autoPlay
            loop
            muted
            controls={this.state.hideText}
            style={{
              top: "0px",
              left: "0px",
              ...style,
            }}
          ></video>
        )}
        className="light section-content-container"
      >
        {!this.state.hideText ? (
          <div>
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
            <Button
              variant="outline-light"
              style={{
                position: "absolute",
                bottom: "5%",
                right: "5%",
              }}
              onClick={() => this.setState({ hideText: true })}
            >
              Hide Text
            </Button>
          </div>
        ) : null}
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
