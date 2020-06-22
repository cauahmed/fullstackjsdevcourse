import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Feedback = (props) => {
  return(
    <div>
      <h1>{props.header}</h1>
      <br/>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
    )
  }

const Statistics = (props) => {
  if(props.allClicks ===0){
    return(
      <div>
      <h1>{props.header}</h1>
      <br/>
      <p>No feedback received</p>
      </div>
    )
  }
  else{
  return(
    <div>
      <h1>{props.header}</h1>
      <br/>
      <table>
        <tbody>
          <Statistic value={props.good} text='good' sign=''/>
          <Statistic value={props.neutral} text='neutral' sign=''/>
          <Statistic value={props.bad} text='bad' sign=''/>
          <Statistic value={props.allClicks} text='all' sign=''/>
          <Statistic value={props.total/props.allClicks} text='average' sign=''/>
          <Statistic value={(props.good/props.allClicks)*100} text='positive' sign='%'/>
        </tbody>
      </table>
    </div>
  )
}
}


const Statistic = (props) => {
  if (isNaN(props.value)){
    return(<div>{props.text} {0} {props.sign}</div>)
  }
  else{

  return(
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
        <td>{props.sign}</td>
      </tr>
  )
}
}

const App = () => {
  // save clicks of each button to own state
  const mainheader = "give feedback"
  const statsheader = "statistics"
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const [total, setTotal] = useState(0)


  
  const handleGoodClick = () => {
    setGood(good+1)
    setAll(allClicks + 1)
    setTotal(total + 1)
    
  }

  const handleNeutralClick = () => {
    setNeutral(neutral+1)
    setAll(allClicks + 1)
    setTotal(total)
   
  }

  const handleBadClick = () => {
    setBad(bad+1)
    setAll(allClicks + 1)
    setTotal(total - 1)
   
  }



  return (
    <div>
      <Feedback header = {mainheader}/>
      <Button handleClick={handleGoodClick} text='good'/>
      <Button handleClick={handleNeutralClick} text='neutral'/>
      <Button handleClick={handleBadClick} text='bad'/>
      <Statistics header = {statsheader} good = {good} neutral = {neutral} 
      bad = {bad} allClicks = {allClicks} total = {total}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)