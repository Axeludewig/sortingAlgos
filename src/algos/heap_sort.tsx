function heapSort(array: number[]): number[] {
	buildHeap(array); // Build a heap from the array

	for (let end = array.length - 1; end > 0; end--) {
		// Extract the maximum element from the heap and put it at the end of the array
		swap(array, 0, end);
		heapifyDown(array, 0, end);
	}

	return array;
}

function buildHeap(array: number[]) {
	const firstParentIndex = getParentIndex(array.length - 1);
	for (let i = firstParentIndex; i >= 0; i--) {
		heapifyDown(array, i, array.length);
	}
}

function heapifyDown(array: number[], index: number, heapSize: number) {
	while (index < heapSize) {
		const leftChildIndex = getLeftChildIndex(index);
		const rightChildIndex = getRightChildIndex(index);
		let largestIndex = index;

		if (
			leftChildIndex < heapSize &&
			array[leftChildIndex] > array[largestIndex]
		) {
			largestIndex = leftChildIndex;
		}

		if (
			rightChildIndex < heapSize &&
			array[rightChildIndex] > array[largestIndex]
		) {
			largestIndex = rightChildIndex;
		}

		if (largestIndex === index) {
			return;
		}

		swap(array, index, largestIndex);
		index = largestIndex;
	}
}

function getParentIndex(index: number): number {
	return Math.floor((index - 1) / 2);
}

function getLeftChildIndex(index: number): number {
	return 2 * index + 1;
}

function getRightChildIndex(index: number): number {
	return 2 * index + 2;
}

function swap(array: number[], i: number, j: number) {
	const temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

export default heapSort;
