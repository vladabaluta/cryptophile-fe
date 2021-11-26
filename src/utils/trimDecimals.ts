export const trimDecimals = (numberToTrim: number, numberOfDecimals: number) => {
	return Number(numberToTrim.toFixed(numberOfDecimals));
};
