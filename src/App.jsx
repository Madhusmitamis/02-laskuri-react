import { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)
const App = () => {
const [ counter, setCounter ] = useState(0)
console.log('rendering with counter value', counter)

const increaseByOne = () => {
  console.log('increasing, value before', counter)
  setCounter(counter + 1)
}

const decreaseByOne = () => {
  console.log('decreasing, value before', counter)
  setCounter(counter - 1)
}

const setToZero = () => {
  console.log('resetting to zero, value before', counter)
  setCounter(0)
}

const handleClick = () => {
  console.log('clicked')
}

// setTimeout(
//   () => setCounter(counter + 1),
//   1000
// )
console.log('rendering...', counter)

// const {counter} = props
  return (
    <div>
      {/* <div>{counter}</div> */}
      {/* <button onClick={()=> setCounter(counter + 1)}>
      <button onClick={increaseByOne}>
        plus
      </button>
       <button onClick={() => setCounter(0)}>  
      <button onClick={setToZero}>
        zero
      </button> */}
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text='plus'/>
      <Button onClick={setToZero} text='zero'/>     
      <Button onClick={decreaseByOne} text='minus'/>           
    </div>
  )
}

export default App