/**
 * Base node class.
 *
 * @class
 * @param {any} value The value to hold.
 */
export default function Node(value) {
	/** @member {any} The value/key held by this node. */
	this.value = value;
	/** @member {Node} Pointer to previous (left) sibling */
	this.prev = this;
	/** @member {Node} Pointer to next (right) sibling */
	this.next = this;
}
