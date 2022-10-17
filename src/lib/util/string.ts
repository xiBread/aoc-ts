export const ALPHA_LOWER = "abcdefghijklmnopqrstuvwxyz";
export const ALPHA_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const chr = (n: int): str => String.fromCharCode(n);

export const lines = (s: str): str[] => s.split("\n");

export const ord = (c: str, n = 0): int => c.charCodeAt(n);

export const tr = (s: str, a: str, b: str): str =>
	s.replace(new RegExp(`[${a}]`, "g"), (c) => b[a.indexOf(c)]);

export const words = (s: str): str[] => s.split(/\s+/);

export function succ(s: str): str {
	if (!/\w/.test(s.charAt(s.length - 1))) return s;

	let lastCharCode = ord(s, s.length - 1) + 1;

	if (lastCharCode === 123 || lastCharCode === 91 || lastCharCode === 58) {
		lastCharCode === 58 ? (lastCharCode -= 10) : (lastCharCode -= 26);

		const lastChar = chr(lastCharCode);
		const next = s.slice(0, s.length - 1);

		return next.length > 0
			? succ(next) + lastChar
			: lastChar === "0"
			? `1${lastChar}`
			: lastChar + lastChar;
	}

	return s.slice(0, s.length - 1) + chr(lastCharCode);
}

const alphabet: Dict<str, str> = {
	"0110\n1001\n1001\n1111\n1001\n1001": "A",
	"1110\n1001\n1110\n1001\n1001\n1110": "B",
	"0110\n1001\n1000\n1000\n1001\n0110": "C",
	"1111\n1000\n1110\n1000\n1000\n1111": "E",
	"1111\n1000\n1110\n1000\n1000\n1000": "F",
	"0110\n1001\n1000\n1011\n1001\n0111": "G",
	"1001\n1001\n1111\n1001\n1001\n1001": "H",
	"0111\n0010\n0010\n0010\n0010\n0111": "I",
	"0011\n0001\n0001\n0001\n1001\n0110": "J",
	"1001\n1010\n1100\n1010\n1010\n1001": "K",
	"1000\n1000\n1000\n1000\n1000\n1111": "L",
	"0110\n1001\n1001\n1001\n1001\n0110": "O",
	"1110\n1001\n1001\n1110\n1000\n1000": "P",
	"1110\n1001\n1001\n1110\n1010\n1001": "R",
	"0111\n1000\n1000\n0110\n0001\n1110": "S",
	"1001\n1001\n1001\n1001\n1001\n0110": "U",
	"1000\n1000\n0101\n0010\n0010\n0010": "Y",
	"1111\n0001\n0010\n0100\n1000\n1111": "Z",
};

export function ocr(xs: int[][]): str {
	const text = xs.map((row) => row.join("")).join("\n");
	const letters = [];

	for (let i = 0; i < text.length; i += 5) {
		const rows = [];

		for (const row of xs) {
			rows.push(row.slice(i, i + 4).join(""));
		}

		letters.push(alphabet[rows.join("\n")]);
	}

	return letters.join("");
}
