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
        <Tex texContent="\int_{a}^{b} f(x)dx = F(b) - F(a)"/>
        <br/>
        <BlockMath math="\int_0^\infty x^2 dx"/>
        <br/>
        <InlineTex texContent="$$\int_{a}^{b} f(x)dx = F(b) - F(a)$$"/>
        <br/>
        <InlineMath>\int_0^\infty x^2 dx</InlineMath>
      </div>
    )
  }
}

export default Blogs;