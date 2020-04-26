import arrPartitionIndex from '../src/arr-partition-index'

describe('arrPartitionIndex', () => {
	test('works', () => {
		expect(arrPartitionIndex([1, 2, 3, 4], 1, 2)).toBe(1)
	})
})
