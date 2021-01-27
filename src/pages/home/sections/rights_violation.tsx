import React from "react";

import LazyLoader from "components/lazy_loader";

import ImageSources from "../utils/image_sources";
import TextSources from "../utils/text_sources";
import type Section from "../utils/section";

const Button = React.lazy(() => import("react-bootstrap/Button"));

class RightsViolation extends React.Component implements Section {
  state = {
    shouldPlayVideo: false,
  };

  targetId = "rights-violation-text";

  render() {
    return (
      <LazyLoader
        backgroundImageSrc={ImageSources.rightsViolation.source}
        backgroundImageAlt={ImageSources.rightsViolation.alternateText}
        backgroundImageStyle={{
          filter: "brightness(0.7)",
        }}
        shouldUseCustomBackground={this.state.shouldPlayVideo}
        customBackground={style => (
          <video
            title={ImageSources.rightsViolationSecondBg.alternateText}
            src={ImageSources.rightsViolationSecondBg.source}
            preload="auto"
            controls
            style={{
              top: "0px",
              left: "0px",
              ...style,
            }}
            onEnded={() => this.setState({ shouldPlayVideo: false })}
          ></video>
        )}
        className="light"
      >
        {!this.state.shouldPlayVideo ? (
          <>
            <div id={this.targetId}>
              <h3 className="display-3">
                {TextSources.rightsViolation.header}
              </h3>

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
            <div style={{ position: "absolute", bottom: "5%", right: "5%" }}>
              <Button
                style={{ margin: 5 }}
                onClick={() => this.setState({ shouldPlayVideo: true })}
              >
                Watch a video
              </Button>
              <Button
                variant="link"
                style={{
                  backgroundColor: "#f8f9fa",
                  margin: 5,
                }}
                onClick={() => window.open("https://blacklivesmatter.com")}
              >
                #BlackLivesMatter
              </Button>
            </div>
          </>
        ) : null}
      </LazyLoader>
    );
  }

  componentDidMount() {
    Array.from(document.getElementById(this.targetId)?.children!).forEach(
      (value, index) =>
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
