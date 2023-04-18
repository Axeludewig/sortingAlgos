function radixSort(arr: number[]): number[] {
	const maxDigitCount = getMaxDigitCount(arr);

	for (let i = 0; i < maxDigitCount; i++) {
		const buckets: number[][] = Array.from({ length: 10 }, () => []);

		for (let j = 0; j < arr.length; j++) {
			const digit = getDigit(arr[j], i);
			buckets[digit].push(arr[j]);
		}

		arr = buckets.flat();
	}

	return arr;
}

function getMaxDigitCount(arr: number[]): number {
	let maxDigitCount = 0;

	for (let i = 0; i < arr.length; i++) {
		const digitCount = countDigits(arr[i]);
		if (digitCount > maxDigitCount) {
			maxDigitCount = digitCount;
		}
	}

	return maxDigitCount;
}

function countDigits(num: number): number {
	if (num === 0) {
		return 1;
	}

	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num: number, i: number): number {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

export default radixSort;
