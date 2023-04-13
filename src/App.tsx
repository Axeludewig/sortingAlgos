import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BubbleSortDemo from "./components/bubbleSortDemo";
import MergeSortDemo from "./components/mergeSortDemo";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<div className="flex justify-center">
				<a
					href="https://vitejs.dev"
					target="_blank"
				>
					<img
						src={viteLogo}
						className="logo"
						alt="Vite logo"
					/>
				</a>
				<a
					href="https://react.dev"
					target="_blank"
				>
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<h1>Sorting algorithms by Axel Ramírez</h1>
			<div className="card flex justify-center gap-4 ">
				<button onClick={() => setCount((count) => count + 1)}>
					Count is {count}
				</button>
				<button onClick={() => setCount(0)}>Reset count</button>
			</div>
			<div className="md:flex justify-center items-center flex-col gap-4">
				<BubbleSortDemo />
				<MergeSortDemo />
			</div>
		</div>
	);
}

export default App;
