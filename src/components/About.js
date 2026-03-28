import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>Software Engineer</b> at
        <a href="https://duytan.edu.vn/"> Duy Tan University</a>, where I am building
        a strong foundation in software development and modern technologies.
        I have a strong passion for the <b>Apple</b> ecosystem and iOS development,
        and I enjoy exploring how technology can create seamless and elegant user experiences.
      </p>
    );
    const two = (
      <p>
        Outside of my studies, I’m really into tech gadgets, especially Apple products.
        I also enjoy gaming and listening to music in my free time.
        <br /><br />
        <a href="https://www.apple.com/careers/" target="_blank" rel="noopener noreferrer">
          One day, I aspire to work at Apple and contribute to building meaningful products.
        </a>
      </p>
    );

    const tech_stack = [
      "Python",
      "Swift",
      "Dart",
      "UIKiT",
      "JavaScript"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Mai Phuc" src={"/assets/me2.jpeg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
