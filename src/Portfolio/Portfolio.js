import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Portfolio.css';
import {Container, Row, Col, Button} from "react-bootstrap";
import Icon from "../images/cap.jpg";

var infos = [
  {
    title: '1. Fade-in Highlight Style',
    filename: '01_fadein-highlight.html',
    imgUrl: 'assets/img/01.png'
  },
]

function Portfolio(){

  return(

    <div className="portfolio">
      <p>ここに作成したものたちを載せる</p>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className={"item"}>
              <div className={"title-header"}>
                <h3>名前</h3>
                <p>ファイル名</p>
              </div>
              <div className="avatar"><img src={Icon} alt="キャプションの画像" /></div>
              <p>
                <Button className="btn btn-demo">View Demo</Button>
                <Button className="btn-github">View Code</Button>
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className={"item"}>
              <div className={"title-header"}>
                <h3>名前</h3>
                <p>ファイル名</p>
              </div>
              <div className="avatar"><img src="./cap.jpg" alt="" /></div>
              <p>
                <Button className="btn btn-demo">View Demo</Button>
                <Button className="btn-github">View Code</Button>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default Portfolio;