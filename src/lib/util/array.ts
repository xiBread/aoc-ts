export const cut = <A>(xs: A[][]): A[][] => from(xs[0].length, (_, i) => xs.map((x) => x[i]));

export const from = <A, B>(n: int, f: (x: A, i: int) => B): B[] => Array.from({ length: n }, f);

export const partition = <A>(xs: A[], f: (x: A, i: int) => bool): [A[], A[]] => [
	xs.filter(f),
	reject(xs, f),
];

export const product = <A>(...xs: A[][]) =>
	xs.reduce<A[][]>((ys, a) => ys.flatMap((b) => a.map((x) => [...b, x])), [[]]);

export const range = (n: int, m: int, s = 1): int[] => from((m - n) / s + 1, (_, i) => n + i * s);

export const rangeR = (n: int, m: int, s = 1): int[] => range(n, m, s).reverse();

export const reject = <A>(xs: A[], f: (x: A, i: int) => bool): A[] => xs.filter((x, i) => !f(x, i));

export const rotate = <A>(xs: A[], n = 1): A[] => [...xs.slice(-n, xs.length), ...xs.slice(0, -n)];

export const sort = (xs: int[]): int[] => [...xs].sort((a, b) => a - b);

export const split = <A>(xs: A[], n: int): A[][] =>
	xs.reduce<A[][]>(
		(ys, x, i) => (i % n ? [...ys.slice(0, -1), [...ys.at(-1)!, x]] : [...ys, [x]]),
		[]
	);

export const tails = <A>(xs: A[]): A[][] => from(xs.length + 1, (_, i) => xs.slice(i));

export const zip = <A>(...xs: A[][]): A[][] =>
	xs.reduce((a, b) => (a.length < b.length ? a : b)).map((_, i) => xs.map((x) => x[i]));

export const windows = <A>(xs: A[], n: int): A[][] =>
	from(xs.length - n + 1, (_, i) => xs.slice(i, i + n));

export function permutations<A>(xs: A[]): A[][] {
	const length = xs.length;
	const result = [xs.slice()];
	const c = new Array(length).fill(0);
	let i = 1;
	let k;
	let p;

	while (i < length) {
		if (c[i] < i) {
			k = i % 2 && c[i];
			p = xs[i];
			xs[i] = xs[k];
			xs[k] = p;
			++c[i];
			i = 1;
			result.push(xs.slice());
		} else {
			c[i] = 0;
			++i;
		}
	}
	return result;
}
