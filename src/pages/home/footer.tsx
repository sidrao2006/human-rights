import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          color: "#515154",
          fontSize: "12px",
          fontWeight: 400,
          padding: "1%",
          paddingLeft: "17%",
          backgroundColor: "#f5f5f7",
        }}
      >
        <h6 style={{ color: "#1d1d1f" }}>{"Attributions and Credits"}</h6>
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

        <a href="https://github.com/sidrao2006/human-rights">
          <img
            src="./images/github-mark.png"
            alt="Github mark"
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
