export const reduce = <A, B>(xs: Dict<PropertyKey, A>, f: (xs: B, e: [str, A]) => B, v: B) =>
	Object.entries(xs).reduce(f, v);

export const withDef = <A>(f: (k: str) => A) =>
	new Proxy<Dict<PropertyKey, A>>({}, { get: (xs, k) => (xs[k] ??= f(k.toString())) });
