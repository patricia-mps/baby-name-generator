const trimNameObject = (names: any, gender: 'FEMALE' | 'MALE'): string[][] => {
  const namesArray = names.reduce((finalArray: string[][], item: any) => {
    if (item.gender === gender) return [...finalArray, [item.name, item.rank]];
    return finalArray;
  }, []);

  return namesArray;
};

export default trimNameObject;
