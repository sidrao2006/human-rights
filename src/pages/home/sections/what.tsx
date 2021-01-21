import React from "react";

import LazyLoader from "components/lazy_loader";

import ImageSources from "../utils/image_sources";
import TextSources from "../utils/text_sources";
import $ from "../utils/jquery_mock";
import Section from "../utils/section";

class What extends React.Component implements Section {
  targetId = "what-text";

  render() {
    return (
      <LazyLoader
        backgroundImageSrc={ImageSources.what.source}
        backgroundImageAlt={ImageSources.what.alternateText}
        id="what"
        className="light section-content-container"
        lazyLoad={false}
      >
        <div id={this.targetId}>
            <h3 className="display-3">{TextSources.what.header}</h3>

          <div
            style={{
              padding: "5%",
            }}
          >
            {TextSources.what.content.map((value, index) => (
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
          start: "top center",
          syncToScroll: false,
        })
      )
    );
  }
}

export default What;
