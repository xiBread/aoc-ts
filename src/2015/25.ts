let current = 20_151_125;

for (let i = 18_331_559; i--; ) {
	current = (current * 252_533) % 33_554_393;
}

export const day25 = () => current;
