import React, { useState } from 'react'
import 'calculator.css'
function Calculator() {
    const[monInvest,setMonInvest] =useState(null)
   const[rate,setRate] =useState(null)
   const[year,setYear] =useState(null)
   const [display,setDisplay]=useState(null)
   const [totalInvest,setTotalInvest]=useState(null)
   const [estvalueal,setEstValue]=useState(null)
  
   function handleclick(){
    const n=year*12
    const i = rate /100/12
    console.log(n);
    
    setTotalInvest(monInvest*n)
    const m = monInvest * ((Math.pow(1 + i, n) - 1) / i) * (1 + i)
    setDisplay(m.toFixed(0))      
    setEstValue(m.toFixed(0)-monInvest*n)
   }
 
  return (
    <>
     <div className="container">
        <div className="img-container">
        </div>
        <div className="calculator-container">
            <h2>SIP Calculator</h2>
            <div className="input-container">
            <div className="input1">
            <label  htmlFor="invest-amt">Monthly investment : </label>
            <input type="number"    id='invest-amt' onChange={(e)=>{setMonInvest(e.target.value)}} />
            </div>
            <div className="input2">
            <label htmlFor="rate-per">Expected return rate : </label>
            <input type="number" id='rate-per'   onChange={(e)=>{setRate(e.target.value)}}/>
            </div>
            <div className="input3">
            <label htmlFor="time-per">Time period : </label>
            <input type="number" id='time-per '  onChange={(e)=>{setYear(e.target.value)}}/>
            </div> 
            <div className="btn-container">
            <button id='btn' onClick={handleclick}>Calculate</button>
            </div>
            </div>
            <div className="dis-container">
                <div className="dis1">
                <label htmlFor="tolinv">Investment amount</label>
                <h3 id='tolinv'>{totalInvest}</h3>
                </div>
                <div className="dis2">
                <label htmlFor="estval">Est.retuns</label>
                <h3 id='estval'>{estvalueal}</h3>
                </div>
                <div className="dis3">
                <label htmlFor="tolamt">Total amount</label>
                <h3 id='tolamt'>{display}</h3>
                </div>
                
        
            </div>
        </div>
     </div>
    
    </>
  )
}

export default Calculator