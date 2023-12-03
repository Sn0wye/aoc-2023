const input = await Deno.readTextFile('input.txt');
const lines = input.split('\n');

let sumOfCalibrationValues = 0;

for (const line of lines) {
  const lineNumbers: number[] = [];
  const chars = line.split('');

  for (const char of chars) {
    const parsed = Number(char);
    if (Number.isNaN(parsed)) {
      continue;
    }

    lineNumbers.push(parsed);
  }

  const sum =
    lineNumbers[0].toString() + lineNumbers[lineNumbers.length - 1].toString();

  sumOfCalibrationValues += Number(sum);
}

console.log('sum', sumOfCalibrationValues);
