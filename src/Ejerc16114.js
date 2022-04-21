

import React, {useState} from "react";


const Button =(props) => <button onClick={props.handleclick} >{props.text}</button>

const Statistics  = ({values})=>{     
    const {good, neutral, bad} = values
    const all = ()=> good+neutral+bad 
    const average = () =>{
         const total =  (good-bad)/all()
         return isNaN(total) ? 0 : total 
    }              
    const positive =() =>{
        const positive =  (good / all())*100   
        return isNaN(positive) ? 0 :positive
    }
    return (
        <table>
            <tbody>
                <Statistic text="good" value={good}/>
                <Statistic text="neutral" value={neutral}/>
                <Statistic text="bad" value={bad}/>
                <Statistic text="all" value={all()}/>
                <Statistic text="average" value={average()}/>
                <Statistic text="positive" value={positive()}/>
            </tbody>
        </table>
    )  
}

const Statistic = (props)=>{     
    const text = props.text
    const value = props.text ==="positive"?  `${props.value} %` : props.value
    return(            
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>
    )
}


const App1 =()=> {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleClickGood = ()=> setGood(good+1)
    const handleClickNeutral = ()=> setNeutral(neutral+1)
    const handleClickBad = ()=> setBad(bad+1)   
     
    
    const str = <div>no feedback given</div>
    const stadisticas = <Statistics values = {{good, neutral, bad}}/>                     
    
    const botones= <div>                        
                        <Button handleclick={handleClickGood} text="good"/>    
                        <Button handleclick={handleClickNeutral} text="neutral"/> 
                        <Button handleclick={handleClickBad} text="bad"/> 
                    </div>   
        return(
            <>
                <h1>give feedback</h1>     
                {botones}
                <h1>statics</h1>              
                {good+neutral+bad === 0 ? str : stadisticas}
            </> 
        ) 
}

export default App1;

