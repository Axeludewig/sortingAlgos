import React, { useState } from "react";
import merge_sort from "../algos/merge_sort";

const MergeSortDemo = () => {
	const [inputArr, setInputArr] = useState("");
	const [sortedArr, setSortedArr] = useState<number[]>([]);

	const handleSort = () => {
		const unsortedArr = inputArr
			.split(",")
			.map((num) => Number(num.trim()));
		const sorted = merge_sort([...unsortedArr]);
		setSortedArr(sorted);
	};

	const handleReset = () => {
		setInputArr("");
		setSortedArr([]);
	};

	return (
		<div className="flex flex-col justify-center border-2 p-8 border-violet-400">
			<div className="flex-col justify-center">
				<h1 className="m-4">Merge Sort!</h1>
				<label>
					<span className="text-2xl">Input:&nbsp;</span>
					<input
						type="text"
						value={inputArr}
						onChange={(e) => setInputArr(e.target.value)}
						className="border-2 border-slate-600 rounded-full  hover:border-violet-800 p-4 focus:ring-violet-800  focus:border-violet-800 focus:ring-1 focus:outline-none"
					/>
				</label>
				<button
					onClick={handleSort}
					className="font-semibold border-2 border-violet-400 hover:ring-violet-500 m-4"
				>
					Sort
				</button>
				<button
					onClick={handleReset}
					className="font-semibold border-2 border-violet-400 hover:ring-violet-500 m-4"
				>
					Reset
				</button>
				{sortedArr.length > 0 && (
					<p className="border-2 mt-4 border-green-500 font-semibold">
						Sorted array: {sortedArr.join(", ")}
					</p>
				)}
			</div>
		</div>
	);
};

export default MergeSortDemo;
