import React, { useState } from "react";
import insertionSort from "../algos/insertion_sort";

function InsertionSortDemo() {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState<number[]>([]);

	function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
		setInput(e.target.value);
	}

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const arr = input.split(",").map((s) => Number(s.trim()));
		console.log("Unsorted array:", arr);
		insertionSort(arr);
		console.log("Sorted array:", arr);
		setOutput(arr);
	}

	return (
		<div className="flex flex-col justify-center border-2 p-8 border-violet-400">
			<div className="flex justify-center">
				<form onSubmit={handleSubmit}>
					<h1 className="m-4">Insert Sort</h1>
					<label>
						<span className="text-2xl">Input:&nbsp;</span>
						<input
							type="text"
							value={input}
							onChange={handleInput}
							className="border-2 border-slate-600 rounded-full  hover:border-violet-800 p-4 focus:ring-violet-800  focus:border-violet-800 focus:ring-1 focus:outline-none"
						/>
					</label>
					<button
						type="submit"
						className="font-semibold border-2 border-violet-400 hover:ring-violet-500 m-4"
					>
						Sort
					</button>
					<button
						onClick={() => {
							setInput("");
						}}
						className="font-semibold border-2 border-violet-400 hover:ring-violet-500 m-4"
					>
						Reset
					</button>
				</form>
			</div>
			{output.length > 0 && (
				<div>
					<div className="border-2 mt-4 border-green-500">
						<p className="font-semibold">
							Sorted array:{" "}
							<span className="text-green-500">
								{output.join(", ")}
							</span>
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default InsertionSortDemo;
