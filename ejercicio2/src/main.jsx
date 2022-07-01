import React, { useState }  from 'react'
import ReactDOM from 'react-dom/client'

const Header = (props) => {
  return (
  <h1>{props.title1}</h1>
  )
}

const SecondHeader = (props) => {
  return (
    <h1>{props.title2}</h1>
  )
}

const App = () => {
  //save clicks of each button to its own state, as counters
  //headers
  const header = 'Give feedback'
  const secondHeader = 'Statistics'
  //botones
  const [good, setGood] = useState(0)
  const goodIncrement = () => setGood(good + 1)
  const [neutral, setNeutral] = useState(0)
  const neutralIncrement = () => setNeutral(neutral + 1)
  const [bad, setBad] = useState(0)
  const badIncrement = () => setBad(bad + 1)
  //statistics
  const all = good + bad + neutral
  const average = (good-bad)/all | 0
  const positive = (good * 100) / all | 0

  return(
    <div>
      <Header title1 = {header}/>
      <button onClick={goodIncrement}>Good</button>
      <button onClick={neutralIncrement}>Neutral</button>
      <button onClick={badIncrement}>Bad</button>
      <SecondHeader title2 = {secondHeader}/>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

//en clase
// const Statistics = (props) => {
//   const {good, neutral, bad} = props
//   const total = good + neutral + bad
//   const score = good - bad
//   // | 0, por si la primera condicion no se cumple, regresa 0
//   const average = score / total | 0
//   const positive = good / total * 100 | 0

//   return (
//     <div>
//       <p>All: {total}</p>
//       <p>Average: {average}</p>
//     </div>
//   )

// }

export default App

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
