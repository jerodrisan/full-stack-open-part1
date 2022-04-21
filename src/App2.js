

const Header = (props)=> {
    const {name}  = props.course
    return  <h1>{name}</h1>
} 

const Part=  (props) =>{
  const part = props.part 
  const exercise = props.exercises
  return <p>{part} {exercise}</p>

} 

const Content = (props)=>{   
  const parts = props.curso.parts      
  const partes = parts.map(parte=>{    
    const part = parte.name
    const exercise = parte.exercises
    return  <Part part={part} exercises={exercise}/>
  })
  return <div>{partes}</div>

}  

const Total = (props)=> <p>Number of exercises {props.total}</p> 

const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    const curso = {
      name: course,
      parts:[
        {name:part1, exercises: exercises1},
        {name:part2, exercises: exercises2},
        {name:part3, exercises: exercises3}
      ]
    }
    
    
    return (
      <div>
        <Header course={curso} />
        {/*<Content part={[part1,part2,part3]} exercises={[exercises1,exercises2,exercises3]} />*/}
        <Content curso={curso}  />     
        <Total total = {exercises1 + exercises2 + exercises3} />
       
      </div>
    )
  }
  
  export default App