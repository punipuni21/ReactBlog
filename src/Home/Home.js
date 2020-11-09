import { React, Component } from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import "bootstrap/dist/css/bootstrap.min.css";
import './Home.css';
import myIcon from "../images/punipuni.jpg"

class Home extends Component{
  render(){
    return(
      <Row>
        <Col xs={12} md={8}>

          <div className="profile">
            <p>ここにプロフィールとか</p>
        
          </div>
        </Col>




        <Col xs={12} md={4}>

          <div className="myProfile">
            <div className="myIcon">
              <img src={myIcon} alt="ぷにぷにのアイコン"></img>
              <div id="social-icon">
                <a href="https://twitter.com/puni_kyopro"><i class="fa fa-twitter fa-lg"></i></a>
                <a href="https://github.com/punipuni21"><i class="fab fa-github"></i></a>
              </div>
            </div>
            <div className="brief-profile">
              <p>横浜国立大学大学院生（M1）</p>s
              <p>競プロとかいろいろ</p>
            </div>
            </div>
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="puni_kyopro"
              options={{height: 1000}}
            />
        </Col>


      </Row>
    );
  }
}

export default Home;