export const shuffleArray = <T>([...arr]: T[]): T[] => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const convertTo2d = <T>([...arr]: T[], size: number): T[][] => {
  const newArr = Array.from(new Array(size), () => new Array(size));
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      newArr[i][j] = arr[i * size + j];
    }
  }
  return newArr;
};

export const makeBingoAnswer = (size: number) => {
  const answer = [];
  const arr = Array.from(new Array(size * size), (_, i) => i);
  const board = convertTo2d(arr, size);
  const diagonal_down = [];
  const diagonal_up = [];

  const labels = [];
  for (let i = 0; i < 5; i++) {
    answer.push([...board]);
    labels.push(`${i + 1}번째 행`);
    const cols = Array.from(new Array(size), (_, idx) => board[idx][i]);
    console.log(cols, 'cols');
    answer.push(cols);
    labels.push(`${i + 1}번째 행`);
    diagonal_down.push(board[i][i]);
    diagonal_up.push(board[i][size - 1 - i]);
  }

  return {
    indexes: [...answer, diagonal_down, diagonal_up],
    labels: [...labels, '하향 대각선', '상향 대각선'],
  };
};
