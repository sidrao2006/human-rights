import React from "react";

import LazyLoader from "../../../components/lazy_loader";

import ImageSources from "../utils/image_sources";
import TextSources from "../utils/text_sources";
import $ from "../utils/jquery_mock";
import Section from "../utils/section";

const Button = React.lazy(() => import("react-bootstrap/Button"));

class UNDeclarations
  extends React.Component<{
    onEnterViewport?: VoidFunction;
    onExitViewport?: VoidFunction;
  }>
  implements Section {
  state = {
    shouldPlayVideo: false,
  };

  targetId = "un-declarations-text";

  render() {
    return (
      <LazyLoader
        backgroundImageSrc={ImageSources.unDeclarations.source}
        backgroundImageAlt={ImageSources.unDeclarations.alternateText}
        id="un_declarations"
        className="dark section-content-container"
        backgroundImageStyle={{
          objectFit: "contain",
        }}
        shouldUseCustomBackground={this.state.shouldPlayVideo}
        customBackground={style => (
          <video
            src="./videos/un-declaration-learn-more.mp4"
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
      >
        {!this.state.shouldPlayVideo ? (
          <div>
            <div id={this.targetId}>
              <h3 className="display-3">{TextSources.unDeclarations.header}</h3>

              <div
                style={{
                  padding: "5%",
                }}
              >
                {TextSources.unDeclarations.content.map((value, index) => (
                  <p key={value} id={`${this.targetId}-${index}`}>
                    {value}
                  </p>
                ))}
              </div>
            </div>
            <Button
              variant="outline-secondary"
              style={{
                position: "absolute",
                bottom: "5%",
                right: "5%",
              }}
              onClick={() => this.setState({ shouldPlayVideo: true })}
            >
              Learn More
            </Button>
          </div>
        ) : null}
      </LazyLoader>
    );
  }

  componentDidMount() {
    import(
      "components/set_viewport_toggle_action"
    ).then(({ setViewportToggleAction }) =>
      setViewportToggleAction(
        this.props.onEnterViewport!,
        this.props.onExitViewport!
      )
    );

    Array.from($(`#${this.targetId}`)?.children ?? [])?.forEach(
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

export default UNDeclarations;
