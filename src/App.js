import { useState } from "react";

function App() {
	{/* 
		-- VARIABLE DECLARATION -- 
	*/}
	{/*State Variables*/}
    const [calc,setCalc] = useState(""); {/* used for calculations */}
	const [result,setResult] = useState(""); {/* used for the result calculation */}
	{/*List Variables*/}
	const ops = ['/','*','+','-','.']; {/* Operators */}

	{/*
		-- FUNCTIONS -- 
	*/}
	{/* This function sets the value of the calculator after each button is pressed */}
	const updateCalc = value =>{
		if((ops.includes(value) && calc === '') || (ops.includes(value) && ops.includes(calc.slice(-1))))
		{
			return;
		}

		setCalc(calc + value);

		if(!ops.includes(value)){
			setResult(eval(calc+value).toString());
		}
	}
	{/* A for loop to create the 10 digits of the calculator instead of 
		hard coding them */}
	const createDigits = () => {
		const digits = [];
		for (let i=1; i<10; i++){
			digits.push(
				<button 
					onClick={()=> updateCalc(i.toString())} 
					key={i}>
					{i}
				</button>
			)
		}
		return digits;
	}
	{/* Prints the result after pressing the "=" button */}
	const calculate = () => {
		setCalc(eval(calc).toString())
	}
	{/* Deletes the last number or operator after pressing the "DEL" button
		using .slice() on calc */}
	const deleteLast = () =>{
		if (calc === ''){
			return;
		}
		const value = calc.slice(0,-1);
		setCalc(value);
	}

	return (
		<div className="App">
				<div className="headerTitle">
					<div className="title">
						<p>My Calculator</p>
					</div>
				</div>
				<div className="calculator">
					<div className="display">
						{result ? <span>({result})</span> : ''}&nbsp;
						{calc || "0"}
					</div>
					<div className="operators">
						<button onClick={()=> updateCalc('/')}>/</button>
						<button onClick={()=> updateCalc('*')}>*</button>
						<button onClick={()=> updateCalc('+')}>+</button>
						<button onClick={()=> updateCalc('-')}>-</button>

						<button onClick={deleteLast}>DEL</button>
					</div>

					<div className="digits">
					{ createDigits() }
					<button onClick={()=> updateCalc('0')}>0</button>
					<button onClick={()=> updateCalc('.')}>.</button>

					<button onClick={calculate}>=</button>
				</div>

				</div>
		</div>
	);
}

export default App;
