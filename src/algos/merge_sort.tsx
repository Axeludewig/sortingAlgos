// MergeSort.ts
function merge_sort(arr: number[]): number[] {
	// Base case: if the input array has length 1 or 0, it is already sorted
	if (arr.length < 2) {
		return arr;
	}

	// Divide the array in half and recursively sort each half
	const mid = Math.floor(arr.length / 2);
	const left = merge_sort(arr.slice(0, mid));
	const right = merge_sort(arr.slice(mid));

	// Merge the sorted halves into a single sorted array
	const sortedArr = [];
	let i = 0;
	let j = 0;
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			sortedArr.push(left[i]);
			i++;
		} else {
			sortedArr.push(right[j]);
			j++;
		}
	}
	return sortedArr.concat(left.slice(i)).concat(right.slice(j));
}

export default merge_sort;
