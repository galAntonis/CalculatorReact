import { useState } from "react";

function App() {
	return (
		<div className="App">
				<div className="headerTitle">
					<span><p>My Calculator</p></span>
				</div>
				<div className="calculator">
					<div className="display">
						{0 ? <span>0</span> : ''}&nbsp;

					</div>

				</div>
		</div>
	);
}

export default App;
