import React from "react";

import ImageSources from "./utils/image_sources";

import "css/pages/home/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          fontSize: "12px",
          fontWeight: 400,
          padding: "1%",
          paddingLeft: "17%",
          backgroundColor: "#f5f5f7",
        }}
      >
        <h6>{"Attributions and Credits"}</h6>
        {"Webpage designed and developed by "}
        <a href="https://github.com/sidrao2006" title="Aneesh Rao">
          {"Aneesh Rao"}
        </a>
        <br />
        {"Icons made by "}
        <a href="https://www.flaticon.com/authors/lyolya" title="Lyolya">
          {"Lyolya "}
        </a>
        {"from "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
        <hr />
        {"Copyright © 2021 Aneesh Rao. All rights reserved."}

        <a
          href="https://github.com/sidrao2006/human-rights/tree/1.0/LICENSE"
          style={{
            margin: "0 10%",
          }}
        >
          License
        </a>

        <a href="https://github.com/sidrao2006/human-rights">
          <img
            src={ImageSources.githubMark.source}
            alt={ImageSources.githubMark.alternateText}
            height="16px"
            style={{
              position: "absolute",
              height: "20px",
              right: "5%",
              alignmentBaseline: "middle",
            }}
          />
        </a>
      </footer>
    );
  }
}

export default Footer;
