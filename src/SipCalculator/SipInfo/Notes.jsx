import React from 'react'
import '../SipInfo/Notes.css'

function Notes() {
  return (
 <>
 <div className="notes">
    <div className="note1">
    <h2>What is SIP?</h2>
 <p>SIP (Systematic Investment Plan): A method of investing a fixed amount regularly in mutual funds or other investment vehicles.</p>
 <p>It allows investors to buy units of a mutual fund at regular intervals (monthly, quarterly, etc.).</p>
    </div>
  <div className="note2"><h2>Important Notes:</h2>
 <p>Investment Duration: Longer investment horizons generally yield better returns due to compounding.
 <p>Market Risks: All investments are subject to market risks; past performance is not indicative of future results.</p>   
 <p>Review Investments: Regularly review your investment portfolio to ensure it aligns with your financial goals.</p>
 <p>Tax Implications: Understand the tax consequences of your investments, especially for capital gains.</p></p>
 </div>
 <div className="note3">
 <h2>Calculation Formula</h2>
 <p>To calculate the future value of a SIP, you can use the formula:</p>
 <p>M = P *([1 + i]^n - 1 / i) * (1 + i)</p> 
 <p>M = Future Value of the investment
    
P = Monthly investment amount

i = Monthly interest rate (annual rate divided by 12, expressed as a decimal)

n = Total number of investments (in months)</p>
 </div>
 
 </div>
 </>

  )
}

export default Notes