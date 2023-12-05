function rand(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
let kint = [rand(-10, 10), rand(-10, 10), rand(-10, 10)];
let count = new Array(3).fill(0);

//ka cia irasyti?
if (kint[0] > 0) count[0]++;
else if (kint[0] < 0) count[1]++;
else count[2]++;

if (kint[1] > 0) count[0]++;
else if (kint[1] < 0) count[1]++;
else count[2]++;

if (kint[2] > 0) count[0]++;
else if (kint[2] < 0) count[1]++;
else count[2]++;

let minus = `<green>${count[0]}<green>`, nulis = `<red>${count[0]}<red>`, plius = `<blue>${count[0]}<blue>`;

document.write(count[0], count[1], count[2])

console.log(`Skaičių 0 - ${count[0]}\t 1 - ${count[1]}\t 2 - ${count[2]}`);