import { quotes as Data } from './assets/quotes.json';
import React from 'react'
import './App.css'

const quotesArray = Data

const color = ['rgb(155, 89, 182)', 'rgb(71, 46, 50)', 'rgb(119, 177, 169)', 'rgb(231, 76, 60)', 'rgb(251, 105, 100)','rgb(189, 187, 153)', 'rgb(39, 174, 96)', 'rgb(115, 168, 87)'];

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      quotes : quotesArray[Math.floor(Math.random() * quotesArray.length)],
      bgColor : color[Math.floor(Math.random() * color.length)],
      visibility : false
    }

  }
   handleClick () {
    let randomColor = color[Math.floor(Math.random() * color.length)]
    let randomQuotes = quotesArray[Math.floor(Math.random() * quotesArray.length)]

    while (color.indexOf(this.state.bgColor) === color.indexOf(randomColor) || quotesArray.indexOf(this.state.quote) == quotesArray.indexOf(randomQuotes)){
      randomQuotes = quotesArray[Math.floor(Math.random() * quotesArray.length)]
      randomColor = color[Math.floor(Math.random() * color.length)]
    }
    return this.setState({
      quotes : randomQuotes,
      bgColor : randomColor,
      visibility : !this.state.visibility
    });
  }

  render(){
  document.body.style.backgroundColor = this.state.bgColor;
    return (
        <>
        <div id="quote-box">
          <div id = 'text' className={this.state.visibility ? 'fade' : 'repeat-fade'} style = {{color : this.state.bgColor}}>"{this.state.quotes.quote}</div>
          <div id = 'author' className={this.state.visibility ? 'fade' : 'repeat-fade'} style = {{color : this.state.bgColor}} >{this.state.quotes.author}</div>
          <Button link = {this.state.quotes.quote} handleClick = {this.handleClick.bind(this)} color = {this.state.bgColor} />
        </div>
        </>
    )
  }
}


class Button extends React.Component{
  constructor(){
    super();
  }
  render(){
  let link = `https://twitter.com/intent/tweet?text=${this.props.link}`
    return(
      <div className='container'>
      <div className='social-media'>
      <a id="tweet-quote" target="_blank" href={link} style = {{backgroundColor : this.props.color}}><i className="fa-brands fa-twitter"></i></a>
      </div>
      <button id="new-quote" onClick={this.props.handleClick} style = {{backgroundColor : this.props.color}}>New Quote</button>
      </div>
    )
  }
}


export default App
