const input = [254032, 789860];

const passwords = [0, 0];

for (let i = input[0]; i < input[1]; i++) {
	passwords[0] += +/^(?=1*2*3*4*5*6*7*8*9*$).*(\d)\1/.test(i + "");
	passwords[1] += +/^(?=1*2*3*4*5*6*7*8*9*$).*(\d)(?<!(?=\1)..)\1(?!\1)/.test(i + "");
}

export const day04 = () => passwords;
