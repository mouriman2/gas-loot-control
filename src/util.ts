import { NAME_TABLE_SHEET, USER_NUM } from "./const";

const ROW_START_INDEX = 2;
const NAME_INDEX = 3;
const NICK_NAME_INDEX = 4;
const JOB_INDEX = 5;
const ROLE_INDEX = 2;

const getValueArray = (name: string, col: number): string[] => {
  const list = NAME_TABLE_SHEET?.getRange(
    ROW_START_INDEX,
    col,
    USER_NUM
  ).getValues() as string[][];
  const result = list.map((internalAray) => internalAray[0]);
  console.log(name, result);
  return result;
};

const getUserNameList = (): string[] => {
  return getValueArray("name", NAME_INDEX);
};

export { getUserNameList };
