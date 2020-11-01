import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Portfolio.css';
import {Container, Row, Col, Button} from "react-bootstrap";


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
              <div className="avatar"><img src="./cap.jpg" alt="" /></div>
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

 // Item Layout

//  var Portfolio = React.createClass({
//   getInitialState() {
//     return {
//       infos : infos
//     };
//   },
//   render() {
//     // var showDemo = this.showDemo;
//     // var showCode = this.showCode;
//     var items = this.state.infos.map(function(info) {
//       return (
//         <Col xs={12} md={4} key={info.filename}>
//           <div className={"item"}>
//             <div className={"title-header"}>
//               <h3>タイトル</h3>
//               <p>名前</p>
//             </div>
//             <div className={"avatar"}><img src={info.imgUrl} alt="" /></div>
//             <p>
//               <Button className={"btn btn-demo"} title={"./cap.JPG"}>View Demo</Button>
//               <Button className={"btn-github"}>View Code</Button>
//             </p>
//           </div>
//         </Col>
//       );
//     });
//     return (
//       <Container>
//         <Row>
//           {items}
//         </Row>
//       </Container>
//     )
//   }
// });

export default Portfolio;