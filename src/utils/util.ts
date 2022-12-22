const getValueArray = (
  name: string,
  sheet: GoogleAppsScript.Spreadsheet.Sheet | null,
  row: number,
  col: number,
  num: number
): string[] => {
  const list = sheet?.getRange(row, col, num).getValues() as string[][];
  if (!list) {
    return [];
  }
  const result = list?.map((internalAray) => internalAray[0]);
  console.log(name, result);
  return result;
};

export { getValueArray };
