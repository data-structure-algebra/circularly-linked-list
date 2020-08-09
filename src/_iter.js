import assert from 'assert';

/**
 * Generator of nodes in list in order.
 *
 * @param {Node} first - First node of the list.
 * @return {Iterable}
 */
export default function* _iter(first) {
	assert(first !== null);
	let next = first;

	do {
		const x = next;
		next = x.next; // Compute next before yielding.
		yield x; // Necessary ?
	} while (next !== first);
}
