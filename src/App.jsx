import { useState } from "react";
import "./App.css";

function App() {
const [timeUsed, setTimeUsed] = useState({days:"--", months:"--", years:"--"})
const calculateAge = (e) =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const {day, month, year} = Object.fromEntries(formData)

    const inputDate = new Date(year, month -1, day);
    const currentDate = new Date();

    let usedYears = currentDate.getFullYear() - inputDate.getUTCFullYear() ;
    let usedMonths = currentDate.getMonth() - inputDate.getUTCMonth();
    let usedDays = currentDate.getDate() - inputDate.getUTCDay();

    // Adjust for cases where the day or month in the inputDate is greater than the current date
    if (usedDays < 0){
      usedMonths--;
      usedDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }
    if (usedMonths < 0){
      usedYears--;
      usedMonths +=12;
    }
    setTimeUsed({
      days:usedDays,
      months: usedMonths,
      years: usedYears
    })
}
  return (
    <div className="body" >
      <div className="bodyBox" >
        <div className="header">
          <h1>Age Calculator</h1>
        </div>
        <form className="form" onSubmit={calculateAge}>
          <div className="formDiv">
            <label htmlFor="day">DAY</label>
            <input type="number" name="day" id="day" placeholder="DD" />
          </div>
          <div className="formDiv">
            <label htmlFor="month">MONTH</label>
            <input type="number" name="month" id="month"  placeholder="MM"/>
          </div>
          <div className="formDiv">
            <label htmlFor="year">YEAR</label>
            <input type="number" name="year" id="year" placeholder="YYYY"/>
          </div>
            <div className="btn">
              <button type="submit" className="btn">Submit</button>
            </div>
        </form>
        
        <section>
          <p>You are {timeUsed.years !== "--" ? timeUsed.years : "--"} years, {" "} {timeUsed.months !== "--" ? timeUsed.months : "--"} months {" "} and {" "} {timeUsed.days !== "--" ? timeUsed.days : "--"} days.</p>
        </section>
      </div>

    </div>
  )
}

export default App
