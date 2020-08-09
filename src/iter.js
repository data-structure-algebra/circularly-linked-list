import _iter from './_iter';
/**
 * Generator of nodes in list in order.
 *
 * @param {Node} first - First node of the list (can be null).
 * @return {Iterable}
 */
export default function* iter(first) {
	if (first !== null) yield* _iter(first);
}
