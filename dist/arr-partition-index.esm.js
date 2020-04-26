import arrSwap from '@bemoje/arr-swap';
import assertArgs from '@bemoje/assert-args';
import assertType from '@bemoje/assert-type';

/**
 * Linear-time Partitioning. Runtime: O(n). Chooses a pivot and re-arrages the array so that everything on the left is <= pivot and everything on the right is > pivot
 * @param {Array} arr
 * @param {number} lo start index
 * @param {number} hi end index
 * @returns {number} pivot index
 */
function arrPartitionIndex(arr, lo, hi) {
	assertArgs(arr, lo, hi);
	assertType(Array, arr);
	assertType(Number, lo);
	assertType(Number, hi);

	const pivot = lo;
	let pivotFinal = pivot;

	for (let curr = pivot + 1; curr <= hi; curr++) {
		if (arr[curr] < arr[pivot]) {
			pivotFinal += 1;
			arrSwap(arr, curr, pivotFinal);
		}
	}

	arrSwap(arr, pivot, pivotFinal);

	return pivotFinal
}

export default arrPartitionIndex;
