import { useState } from "react"

export default function UserInput(){
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue){
        setUserInput(prevUserInput =>{
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        })
    }


    return <section id="user-input">
        <div className="input-group">
            <p>
                <label >Initial Investment</label>
                <input type="number" required onChange={(e) => handleChange('initialInvestment', e.target.value)} value={userInput.initialInvestment}/>
            </p>
            <p>
                <label >Anual Investment</label>
                <input type="number" required onChange={(e) => handleChange('annualInvestment', e.target.value)} value={userInput.annualInvestment}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label >Expected Return</label>
                <input type="number" required onChange={(e) => handleChange('expectedReturn', e.target.value)} value={userInput.expectedReturn}/>
            </p>
            <p>
                <label >Duration</label>
                <input type="number" required onChange={(e) => handleChange('duration', e.target.value)} value={userInput.duration}/>
            </p>
        </div>
    </section>
}