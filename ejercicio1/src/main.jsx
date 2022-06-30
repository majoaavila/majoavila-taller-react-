import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

//!sin refactorizar
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return(
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

//!creacion de componentes
const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
    )
  
}

//!intento 1
// const Content = ({parts}, {exercises}) => {
//   return(
//     <div>
//       <h2>{parts}</h2>
//     <ul>
//         <li>{exercises}</li>
//     </ul>
//     </div>
//   )
// }

//!en arreglo
// const Content = ({parts, exercises}) => {
//   return(
//     <div>
//       {parts.map(part => {
//         return(
//           <h2>{part}</h2>
//         )
//       })}
//           <ul>
//             {exercises.map(exercise => {
//               return(
//                 <li>{exercise}</li>
//               )
//             })}
//           </ul>
//     </div>
//   )
// }


//! intento 2
const Content = ({part1, exercises1, part2, exercises2, part3, exercises3}) => {
  return(
    <div>
      <h2>{part1}</h2>
    <ul>
        <li>{exercises1}</li>
    </ul>
      <h2>{part2}</h2>
      <ul>
        <li>{exercises2}</li>
    </ul>
    <h2>{part3}</h2>
      <ul>
        <li>{exercises3}</li>
    </ul>
    </div>
  )
}

const Total = ({total}) => {
    return(
      <div>
      <p>{total}</p>
      </div>
    )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercises = [10, 7, 14]
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  return(
    <div>
      <Header course = {course}/>
      {/* con arreglo */}
      {/* <Content parts = {parts} exercises = {exercises}/> */}
      {/* sin arreglo */}
      <Content part1= {part1} part2={part2} part3={part3} exercises1 = {exercises1} exercises2={exercises2} exercises3={exercises3}/>
      <Total total = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
