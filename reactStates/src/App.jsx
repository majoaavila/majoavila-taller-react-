import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState('')
  const incrementByOne = () => setCounter(counter + 1)
  const decrementByOne = () => setCounter(counter - 1)
  const resetToZero = () => setCounter(0)

  let toRender 
  if(isLoading) {
    toRender = (<h1>Loading data...</h1>)
  } else {
    toRender = (<p>{data}</p>)
  }

  //intervalo que va a incrementar el  contador en 1, cada 1000 milisegundos
  // setInterval (
  //   () => setCounter(counter + 1),
  //   1000
  // )

  setTimeout(
    () => {
      setData('Llegaron los datos')
      setIsLoading(false)
    },
    9000
  )
return(
  <div>
    {toRender}
    <div>{counter}</div>
    <button onClick={incrementByOne} disabled= {counter >= 10}>Increment</button>
    <button onClick={decrementByOne} >Decrement</button>
    <button onClick={resetToZero}>RESET</button>
    </div>

  )
}

export default App
