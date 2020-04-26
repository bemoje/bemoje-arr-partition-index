(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/arr-swap'), require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/arr-swap', '@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-partition-index'] = factory(global.arrSwap, global.assertArgs, global.assertType));
}(this, (function (arrSwap, assertArgs, assertType) { 'use strict';

	arrSwap = arrSwap && Object.prototype.hasOwnProperty.call(arrSwap, 'default') ? arrSwap['default'] : arrSwap;
	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

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

	return arrPartitionIndex;

})));
