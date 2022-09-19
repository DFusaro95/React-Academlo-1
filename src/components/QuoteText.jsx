import React from 'react'
import './QuoteText.css'


const QuoteText = ({randomQuote}) => {
  return (
    <article>
      <p className='card__quote animate__animated animate__fadeInLeft'>{randomQuote.quote}</p>
      <h1 className="card__author animate__animated animate__fadeInLeft">{randomQuote.author}</h1>
    </article>
  )
}

export default QuoteText