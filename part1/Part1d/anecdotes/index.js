import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>
      {text}
    </button>
    )
  }


//source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
//for generating a random number between 0 and 5 for anecdotes array  
function getRandomInt(first, second){
  first = Math.ceil(first);
  second = Math.floor(second);
  return Math.floor(Math.random() * (second - first + 1)) + first;
}

const votes = new Array(6).fill(0)
const copy = [...votes]




const App = (props) => {
  const [selected, setSelected] = useState(0)
  const maxVotes = Math.max(...copy)
  //console.log(selected)
  //console.log(copy)
  //console.log(votes)


  const nextHandleClick = () => {
    setSelected(getRandomInt(0, 5))
  }


  const upVote = () => {
    copy[selected] += 1
    console.log(copy[selected])
    console.log(copy)
  }

  


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {copy[selected]} votes</p>
      <p><Button handleClick = {upVote} text='vote'/>
         <Button handleClick = {nextHandleClick} text='next anecdote'/>
      </p>
      <h1>Anecdote with most votes</h1>
      {props.anecdotes[maxVotes]}
      
    </div>
  )
}



const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes}/>,
  document.getElementById('root')
)