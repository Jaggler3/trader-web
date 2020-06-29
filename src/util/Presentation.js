export function AddCommas(num) {
	let str = num.toString();

	let decimalIndex = str.indexOf(".");

	if (decimalIndex === -1) {
		decimalIndex = str.length;
	}

	for (let i = decimalIndex - 3; i >= 0; i -= 3) {
		str = str.substring(0, i) + "," + str.substring(i)
	}

	return str;
}