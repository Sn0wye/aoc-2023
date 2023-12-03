const input = await Deno.readTextFile('input.txt');
const games = input.split('\n');

type ColorCount = {
  red: number;
  green: number;
  blue: number;
};

const maxPossibleAtOnce: ColorCount = {
  red: 12,
  green: 13,
  blue: 14
};

const validGameIds: number[] = [];

for (const game of games) {
  const [gameId, colorDataString] = game.split(':');

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

  const gameIsValid = colorData.map(cd => {
    if (cd.blue > maxPossibleAtOnce.blue) {
      return false;
    }

    if (cd.green > maxPossibleAtOnce.green) {
      return false;
    }

    if (cd.red > maxPossibleAtOnce.red) {
      return false;
    }

    return true;
  });

  if (!gameIsValid.includes(false)) {
    console.log('game:', gameId);
    const id = gameId.split(' ');
    validGameIds.push(+id[1]);
  }
}

const sumOfValidGameIds = validGameIds.reduce((a, b) => a + b);
console.log('sumOfValidGameIds', sumOfValidGameIds);
