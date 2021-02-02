import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `Hello, this is my personal website where you can find some projects I've worked on 
  and also a collection of resources I found helpful along the way.`,
  paraTwo: `Currently I work mostly with Javascript technologies like ReactJS and NodeJS. I also
    have hands on experience working with cloud infrastructures like <b>AWS/GCP</b> and have deployed applications
    keeping scalability in mind. Docker, Kubernetes, Jenkins, SonarQube are some of the cool
    tools I use for <b>CI/ CD</b>. I'm always a learner and a self taught programmer.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Kyle', 'Knickerbocker', 'Austin', 'Game Development', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="mathematic.svg"
            height={60}
            alt="data image"
            textH4="Data and Statistical Analysis"
            textH3="R, MATLAB, JMP"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="electromagnetic.svg"
            alt="frontend image"
            textH4="Frontend Web Development"
            textH3="React, Redux, Context, JS, JSX, HTML, CSS"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="cube.svg"
            alt="backend image"
            textH4="Backend Development"
            textH3="Node.js, Python, Git, MySQL, MongoDB"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="triangle.svg"
            alt="map image"
            textH4="GIS and Spatial Analysis"
            textH3="ArcGIS, ArcGIS Online, Mapbox"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="buckyball.svg"
            alt="game image"
            textH4="Video Game Development"
            textH3="Unity, HTML5/JS, C#"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="atom.svg"
            alt="education image"
            textH4="Masters of Science"
            textH3="Urban and Regional Planning UTSA (2015)"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
