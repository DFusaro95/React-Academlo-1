import React from 'react'
import './QuoteBox.css'
import { ImQuotesLeft } from "react-icons/im";
import { TbArrowBigRightLines } from "react-icons/tb";
import QuoteText from './QuoteText';


const QuoteBox = ({ randomColor, getRandomAll, randomQuote }) => {

  const colorObj = {
    color: randomColor
  }
  const backgroundObj = {
    backgroundColor: randomColor
  }

  return (
    <article className='card animate__animated animate__fadeIn' style={colorObj}>
      <ImQuotesLeft size='3rem' className='animate__animated animate__fadeInDown' />
      <QuoteText randomQuote={randomQuote} />
      <button className="card__btn animate__animated animate__fadeInRight"
      style={backgroundObj}
      onClick={getRandomAll}>Next Quote
        <i className='btn__icon' style={colorObj}><TbArrowBigRightLines /></i>
      </button>
    </article>
  )
}

export default QuoteBox