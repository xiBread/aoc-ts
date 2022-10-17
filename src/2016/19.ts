const input = 3017957;

let i = 1;

for (; i * 3 < input; i *= 3);

export const day19 = () => [parseInt(input.toString(2).slice(1) + 1, 2), input - i];
