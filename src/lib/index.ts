import fs from "node:fs";
import yaml from "yaml";

export * from "./structures";
export * from "./util";

export default { load };

function load<T = str>(fn?: (line: str) => T): T[] {
	const ref = Error.prepareStackTrace;
	Error.prepareStackTrace = (_, callSites) => callSites;

	const caller = (new Error().stack as unknown as NodeJS.CallSite[])[1];
	Error.prepareStackTrace = ref;

	const [, year, day] = caller.getFileName()!.match(/(\d{4})\/0?(\d+)/)!;
	const file = fs.readFileSync(`${process.cwd()}/inputs/${year}.yaml`, "utf8");
	const input = yaml.parse(file)[day];

	return input.raw.split(input.sep ?? "\n").map(fn ?? ((x: any) => x));
}

declare global {
	// I'm lazy; don't judge me
	type str = string;
	type int = number;
	type bool = boolean;
	type unit = undefined;

	type Dict<K extends PropertyKey, V> = Record<K, V>;
}
