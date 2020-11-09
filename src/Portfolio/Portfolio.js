import { React, Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Portfolio.css';
import {Container, Row, Col, Button} from "react-bootstrap";
import Icon from "../images/cap.jpg";
import woundaid from "../videos/woundaid.mp4";
import gmailvisualizer from "../images/gmail-visualizer.jpg";

class Portfolio extends Component{

  render(){
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
                  <p>使用技術：Swift, Chainer, Pytorch</p>
                </div>
                <div className="avatar"><video src={woundaid} alt="デモ動画" controls ></video></div>
                <p>
                  <a href=""><Button className="btn-github">コードは現在非公開</Button></a>
                </p>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className={"item"}>
                <div className={"title-header"}>
                  <h3>gmail-visualizer</h3>
                  <p>Gmailを差出人，日付ごとにまとめるアプリ（ハッカソン）</p>
                  <p>使用技術：React, Laravel</p>
                </div>
                <div className="avatar"><img src={gmailvisualizer} alt="アプリの画面" /></div>
                <p>
                  <a href="https://github.com/punipuni21/gmail-visualizer"><Button className="btn-github">View Code</Button></a>
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <div className={"item"}>
                <div className={"title-header"}>
                  <h3>otsumami-recommender</h3>
                  <p>お酒の写真を送るとお酒に合うおつまみを提案するアプリ（リリースまで少々お待ちください）</p>
                  <p>使用技術：React, Django</p>
                </div>
                <div className="avatar"><img src={Icon} alt="アプリの画面" /></div>
                <p>
                  <a href="https://github.com/punipuni21/otsumami-recommender"><Button className="btn-github">View Code</Button></a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Portfolio;