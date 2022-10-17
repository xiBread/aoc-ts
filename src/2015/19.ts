import aoc from "../lib";

const input = aoc.load((line) => line.split(" => "));

const [, [molecule]] = input.splice(-2, 2);

const distinct = new Set<str>();

for (const [atom, replacement] of input) {
	for (let i = molecule.length; i--; ) {
		if (molecule.slice(i, i + atom.length) === atom) {
			distinct.add(molecule.slice(0, i) + replacement + molecule.slice(i + atom.length));
		}
	}
}

const atoms = ~-molecule.match(/[A-Z]/g)!.length;

export const day19 = () => [
	distinct.size,
	atoms - molecule.match(/Ar|Rn/g)!.length - 2 * molecule.match(/Y/g)!.length,
];
