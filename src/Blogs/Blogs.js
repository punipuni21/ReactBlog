import { React, Component } from 'react';
import { InlineTex, Tex } from 'react-tex';
import "bootstrap/dist/css/bootstrap.min.css";
import './Blogs.css';
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex';

class Blogs extends Component{
  render(){
    let latexString = "\int_{a}^{b} f(x)dx = F(b) - F(a)";
    return(
      <div>
        ここにブログを書く
      </div>
    )
  }
}

export default Blogs;