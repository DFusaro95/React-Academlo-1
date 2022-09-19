
import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import color from './utils/color'



function App() {


  const getIndexRandom = arr => Math.floor(Math.random() * arr.length)
  
  //Calculo de los indices
  const firstQuote = quotes[getIndexRandom(quotes)]
  const firstColor = color[getIndexRandom(color)]

  const [randomColor, setRandomColor] = useState(firstColor)
  const [randomQuote, setRandomQuote] = useState(firstQuote)

  const backgroundObj = {
    backgroundColor: randomColor
  }

  //Calculo de quotes y colores random
  const getRandomAll = () => {
    setRandomQuote(quotes[getIndexRandom(quotes)])
    setRandomColor(color[getIndexRandom(color)])
  }

  return (
    <div className="App" style={backgroundObj}>
      <QuoteBox 
      randomQuote={randomQuote} 
      randomColor={randomColor} 
      getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
