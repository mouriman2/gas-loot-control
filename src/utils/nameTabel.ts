import { NAME_TABLE_SHEET, USER_NUM } from "../const";
import { getValueArray } from "./util";
const ROW_START_INDEX = 2;
const NAME_INDEX = 3;
const NICK_NAME_INDEX = 4;
const JOB_INDEX = 5;
const ROLE_INDEX = 2;

const getUserNameList = (): string[] => {
  return getValueArray(
    "name",
    NAME_TABLE_SHEET,
    ROW_START_INDEX,
    NAME_INDEX,
    USER_NUM
  );
};

const getNickNameList = (): string[] => {
  return getValueArray(
    "name",
    NAME_TABLE_SHEET,
    ROW_START_INDEX,
    NICK_NAME_INDEX,
    USER_NUM
  );
};

const getROLEList = (): string[] => {
  return getValueArray(
    "name",
    NAME_TABLE_SHEET,
    ROW_START_INDEX,
    JOB_INDEX,
    USER_NUM
  );
};

const getJOBList = (): string[] => {
  return getValueArray(
    "name",
    NAME_TABLE_SHEET,
    ROW_START_INDEX,
    ROLE_INDEX,
    USER_NUM
  );
};

export { getUserNameList, getNickNameList, getROLEList, getJOBList };
