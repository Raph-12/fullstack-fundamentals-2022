### Tuesday 8/26/2022
Square(n) Sum exercise, using Typescript
|-----------------------------------|
export function squareSum(numbers: number[]): number {
    let sum = 0
    for(const num of numbers) {
        sum += num * num
    }
    return sum
}

A Wolf In Sheep's Clothing exercise, using Typescript
|----------------------------|
export function warnTheSheep(queue: string[]): string {
  const wolfPosition = queue.indexOf('wolf');
  if (wolfPosition == queue.length - 1)
    return 'Pls go away and stop eating my sheep';
  return `Oi! Sheep number ${Math.abs(
    wolfPosition + 1 - queue.length
  )}! You are about to be eaten by a wolf!`;
}
