import { React, Component } from 'react';
import { InlineTex, Tex } from 'react-tex';
import "bootstrap/dist/css/bootstrap.min.css";
import './Blogs.css';

class Blogs extends Component{
  render(){
    let latexString = "\int_{a}^{b} f(x)dx = F(b) - F(a)";
    return(
      <div>
        <Tex texContent={latexString}/>
        <br/>
        <InlineTex texContent={latexString}/>
      </div>
    )
  }
}

export default Blogs;