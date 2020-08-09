export default function Node(value) {
	this.value = value; // Key
	this.prev = this; // Pointer to previous (left) sibling
	this.next = this; // Pointer to next (right) sibling
}
