
import React, { useState } from 'react'

const App2 = () => {
    const [selected, setSelected] = useState(0) 
    const [votes, setVotes] = useState({
       0:0,
       1:0,
       2:0,
       3:0,
       4:0,
       5:0
    })   

    const generate = () =>{
        const random =   Math.floor(Math.random()*(anecdotes.length))       
        setSelected(random)
       
    }

    const votar =()=>{        
        const value = votes[selected]        
        setVotes({...votes,[selected]:value+1}) //ver computed properties       
    }
      
    const mayor =()=>{ 
       //Si lo queremos usar con bucle for: 
       /*  const values = Object.values(votes)  //sacamos los valores
        const max = Math.max(...values)      //sacamos el maximo de los valores  
        for (let key in votes){
            if(votes[key]===max){
                const anecdota = anecdotes[key] //pillamos la anecdota con mas votos
                const numMax = max              //valor del maximo numero de votos    
                return {anecdota, numMax}       //devolvemos en objeto
            }
        } */

        //Si lo queremos sin usar bucle for :
        const objeto = ()=>{
          const max = Math.max(...Object.values(votes))
          const key = Object.keys(votes).find(key => votes[key]===max)          
          return {anecdota: anecdotes[key], numMax: max}         
        }         
        return objeto()
    }



  
    return (
      <div>        
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}<br/>
        <span>has {votes[selected]} votes</span><br/>
        <button onClick={votar}>vote</button>
        <button onClick={generate}>next anecdote</button>
        <h1>Anecdote with most votes</h1>       
        <div>{mayor().anecdota}</div>
        <div>has {mayor().numMax} votes</div>

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

  //funcion sumar: 
  

  export default App2;


