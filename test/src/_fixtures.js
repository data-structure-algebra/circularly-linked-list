export function str(any) {
	const s = JSON.stringify(any);
	if (s <= 40) return s;
	return s.slice(0, 19) + '..' + s.slice(-19);
}
