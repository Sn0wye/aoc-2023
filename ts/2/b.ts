const input = await Deno.readTextFile('input.txt');
const games = input.split('\n');

type ColorCount = {
  red: number;
  green: number;
  blue: number;
};

const minimumPowers: number[] = [];

for (const game of games) {
  const [_, colorDataString] = game.split(':');

  const colorSets = colorDataString.trim().split(';');

  const colorData: ColorCount[] = colorSets.map(set => {
    const colors = set.trim().split(',');
    const colorCount: ColorCount = { red: 0, green: 0, blue: 0 };

    colors.forEach(color => {
      const [quantity, colorName] = color.trim().split(' ');
      colorCount[colorName as keyof ColorCount] = parseInt(quantity, 10);
    });

    return colorCount;
  });

  const minPossible = colorData.reduce(
    (acc, cd) => {
      if (cd.blue > acc.blue) {
        acc.blue = cd.blue;
      }

      if (cd.red > acc.red) {
        acc.red = cd.red;
      }

      if (cd.green > acc.green) {
        acc.green = cd.green;
      }

      return acc;
    },
    {
      blue: 0,
      green: 0,
      red: 0
    }
  );

  minimumPowers.push(minPossible.red * minPossible.blue * minPossible.green);
}

const sumOfMinimumPowers = minimumPowers.reduce((a, b) => a + b);
console.log('sumOfMinimumPowers', sumOfMinimumPowers);
