import Node from './Node.js';
import _append from './_append.js';

/**
 * Creates a list from an input iterable.
 *
 * @param {Iterable} iterable - The input iterable.
 */
export default function from(iterable) {
	const it = iterable[Symbol.iterator]();
	const event = it.next();

	if (event.done) return null;

	const first = new Node(event.value);

	for (const value of it) _append(first, new Node(value));

	return first;
}
