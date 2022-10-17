export const count = <A>(xs: Iterable<A>, f: (x: A) => bool): int => [...xs].filter(f).length;

export const difference = <A>(xs: Iterable<A>, ys: Iterable<A>): A[] =>
	[...xs].filter((x) => ![...ys].includes(x));

export const intersection = <A>(xs: Iterable<A>, ys: Iterable<A>): A[] =>
	[...xs].filter((x) => [...ys].includes(x));

export const max = (xs: Iterable<int>): int => Math.max(...xs);

export const min = (xs: Iterable<int>): int => Math.min(...xs);

export const minmax = (xs: Iterable<int>): [int, int] => [min(xs), max(xs)];

export const sum = (xs: Iterable<int>): int => [...xs].reduce((a, b) => a + b, 0);

export const keys = (xs: Dict<PropertyKey, unknown>): str[] => Object.keys(xs);

export const values = <A>(xs: Dict<PropertyKey, A>): A[] => Object.values(xs);
