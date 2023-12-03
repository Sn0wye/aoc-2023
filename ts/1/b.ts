const input = await Deno.readTextFile('input.txt');
const lines = input.split('\n');

let sumOfCalibrationValues = 0;

const dict = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

for (const line of lines) {
  const numbers: number[] = [];

  for (let i = 0; i < line.length; i++) {
    for (const [word, number] of Object.entries(dict)) {
      if (line.slice(i, i + word.length).toLowerCase() === word) {
        numbers.push(number);
      }
    }

    if (!isNaN(+line[i])) {
      numbers.push(parseInt(line[i], 10));
    }
  }

  const sum = String(numbers[0]) + String(numbers[numbers.length - 1]);
  console.log(sum);
  sumOfCalibrationValues += Number(sum);
}

console.log('sum', sumOfCalibrationValues);
