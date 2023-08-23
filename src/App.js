import {useState} from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const [steps,setSteps]=useState(1);
  const handleprv=function(){
    if(steps > 1) setSteps(steps -1)
  }
  const handlenxt=function(){
  if(steps < 3)  setSteps(steps + 1)
  }
  return <div className="steps">
    <div className="numbers">
      <div className={`${steps >= 1?"active":''}`}>1</div>
      <div className={`${steps >= 2?"active":''}`}>2</div>
      <div className={`${steps >= 3?"active":''}`}>3</div>
    </div>
    <p className="message">
      steps{steps}:{messages[steps-1]}
    </p>
    <div className="buttons" >
      <button style={{backgroundColor:'#7950F2',color:'#FFF'}}
      onClick={handleprv}>Previous</button>
      <button style={{backgroundColor:'#7950F2',color:'#FFF'}}
      onClick={handlenxt}>Next</button>
      
    </div>
  </div>
}


