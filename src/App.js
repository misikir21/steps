const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  const steps=2;
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
      <button style={{backgroundColor:'#7950F2',color:'#FFF'}}>Previous</button>
      <button style={{backgroundColor:'#7950F2',color:'#FFF'}}>Next</button>
      
    </div>
  </div>
}


