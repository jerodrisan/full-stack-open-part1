
import {useState} from 'react';


//1 .- Ejemplo edades:
/*const Hello = (props)=>{  
  const {name, age} = props
  const bornYear =()=>   new Date().getFullYear() - age
  return (
   <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

  const App = ()=>{
  const name = 'Peter'
  const age = 10
   return (  
    <div>
      <Hello name ="manolo" age={25+10}/>
      <Hello name={name} age={age} />
    </div>
  )   
  } */








  //2. - Ejemplo contador: Uso de de un solo setState 
  /* const App =() =>{
    const [cont , setCont] = useState(0);

    const resetCounter= ()=> setCont(0)
    const decreaseCounter= ()=> setCont(cont-1)
    function increaseCounter(){
        setCont(cont+1);
    }
    
    return (
      <div>
         <Display cont = {cont} />
         <Button accion ={increaseCounter}  text="incrementar"/>
         <Button accion ={resetCounter} text="resetear"/>
         <Button accion ={decreaseCounter} text="decrementar"/>
      </div>     
    )
  }
  const Display = (props)=> <div>El contador es : {props.cont}</div> 
  const Button = (props) => <button onClick={props.accion}>{props.text}</button> */






  //3.- Uso de setState varias veces en un stado mas complelo:
  const App =()=>{  

    // En vez de usar dos estados, podemos hacerlo con un solo estado  usando un objeto en el estado: 
   /*  const [clicks, setClicks] = useState({left:0, right:0});
    const handleClicksLeft =()=>{              
        setClicks({...clicks, left:clicks.left+1});
    }
    const handleClicksRight =()=>{                
      setClicks({...clicks,right:clicks.right+1 });
    } */

    //Usando dos estados
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleClicksRight = ()=>{
      setRight(right+1)
      setAll(allClicks.concat('R'))
    }

    const handleClicksLeft = ()=>{
      setLeft(left+1)
      setAll(allClicks.concat('L'))
    }
    
    return (

      <div>
        {/* Usando dos estados: */}         
          <Button onclick={handleClicksLeft} text={left}/>
          <Button onclick={handleClicksRight} text={right}/>        
          <History allClicks={allClicks}/>


        {/* usando Un estado con objetos */}
       {/*  {clicks.left}
        <button onClick={handleClicksLeft }>left</button> 
        <button onClick={handleClicksRight }>left</button> 
        {clicks.right} */}  
      </div>

    )
  }

  const Button = ({onclick, text})=>{       
    return(
        <>
            {text}
            <button onClick={onclick}>left</button>            
        </>     
    )
  }

  const History =(props) =>{
      if (props.allClicks.length ===0){
        return(
          <p>Hay que pulsar los botones</p>
        )                 
      }     
      return(
        <p>{props.allClicks.join(' ')}</p>
      )   
  }



export default App;
