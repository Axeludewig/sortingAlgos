function quickSort(array: number[]): number[] {
	if (array.length <= 1) {
		return array;
	}

	const pivot = array[Math.floor(Math.random() * array.length)];
	const less = [];
	const equal = [];
	const greater = [];

	for (const element of array) {
		if (element < pivot) {
			less.push(element);
		} else if (element === pivot) {
			equal.push(element);
		} else {
			greater.push(element);
		}
	}

	return [...quickSort(less), ...equal, ...quickSort(greater)];
}

export default quickSort;
