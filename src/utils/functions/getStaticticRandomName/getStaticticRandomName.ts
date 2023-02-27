/**
 * This is the getStaticticRandomName function
 * @param items
 * @param statistics
 * @returns returns a Array of string
 */

const getStaticticRandomName = (items: string[][]): string[] => {
  const statistics = items.map((item: string[]): any => item.at(-1));
  const names = items.map((item: string[]): any => item.at(-3));

  /**
   * Prepare the array of cumulative weights for each name.
   * The array will have the same number of elements as the original statistics array.
   */
  const cumulativeStatistics: number[] = statistics.reduce(
    (cumulative: number[], statistic: string, index: number): any => {
      return [...cumulative, Number(statistic) + Number(cumulative[index - 1]) || 0];
    },
    []
  );

  /**
   * Get random number between zero and the maxCumulative number
   */
  const maxCumulativeStatistics: number = cumulativeStatistics[cumulativeStatistics.length - 1];
  const randomNumber: number = maxCumulativeStatistics * Math.random();

  /**
   * Pick the first element of the cumulativeStatistics which is higher or equal to the randomNumber.
   * The index of such element is used to pick the name from the names array.
   */
  const result = names.find(
    (item: string[], index: number): boolean => cumulativeStatistics[index] >= randomNumber
  );

  return [result];
};

export default getStaticticRandomName;
