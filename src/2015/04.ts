import { createHash } from "crypto";

const input = "bgvyzdsv";

function mine(n = 5) {
	for (let i = 0; ; i++) {
		if (
			createHash("md5")
				.update(input + i)
				.digest("hex")
				.startsWith("0".repeat(n))
		) {
			return i;
		}
	}
}

export const day04 = () => [mine(), mine(6)];
