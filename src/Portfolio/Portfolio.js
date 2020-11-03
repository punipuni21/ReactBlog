import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Portfolio.css';
import {Container, Row, Col, Button} from "react-bootstrap";
import Icon from "../images/cap.jpg";
import woundaid from "../videos/woundaid.mp4";
import gmailvisualizer from "../images/gmail-visualizer.jpg";

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
      <p>作成したプロダクト：個人，ハッカソン，アルバイト等（守秘義務のため一部非公開にしてあります．ご了承ください）</p>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className={"item"}>
              <div className={"title-header"}>
                <h3>WoundAid</h3>
                <p>創傷画像の重症度診断アプリ（個人）</p>
              </div>
              <div className="avatar"><video src={woundaid}  controls ></video></div>
              <p>
                <Button className="btn-github">コードは現在非公開</Button>
              </p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className={"item"}>
              <div className={"title-header"}>
                <h3>gmail-visualizer</h3>
                <p>Gmailを差出人，日付ごとにまとめるアプリ（ハッカソン）</p>
              </div>
              <div className="avatar"><img src={gmailvisualizer} alt="キャプションの画像" /></div>
              <p>
                <Button className="btn-github">View Code</Button>
              </p>
            </div>
          </Col>
         
        </Row>
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