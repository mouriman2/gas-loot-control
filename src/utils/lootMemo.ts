import { LOOT_MEMO_SHEET, USER_NUM } from "../const";
import { getValueArray } from "./util";
// ROW
const ROW_START_INDEX = 4;
// COL
const WEAPON_INDEX = 2;
const HEAD_INDEX = 3;
const BODY_INDEX = 4;
const HAND_INDEX = 5;
const LEDGE_INDEX = 6;
const BOOTS_INDEX = 7;
const EAR_INDEX = 8;
const NECK_INDEX = 9;
const BRACELET_INDEX = 10;
const RING_INDEX = 11;

const getRingLootList = (): string[] => {
  return getValueArray(
    "weapon",
    LOOT_MEMO_SHEET,
    ROW_START_INDEX,
    RING_INDEX,
    USER_NUM
  );
};

const getBraceletLootList = (): string[] => {
  return getValueArray(
    "weapon",
    LOOT_MEMO_SHEET,
    ROW_START_INDEX,
    BRACELET_INDEX,
    USER_NUM
  );
};

const getNeckLootList = (): string[] => {
  return getValueArray(
    "weapon",
    LOOT_MEMO_SHEET,
    ROW_START_INDEX,
    NECK_INDEX,
    USER_NUM
  );
};

const getEarLootList = (): string[] => {
  return getValueArray(
    "weapon",
    LOOT_MEMO_SHEET,
    ROW_START_INDEX,
    EAR_INDEX,
    USER_NUM
  );
};

const getBootsLootList = (): string[] => {
  return getValueArray(
    "weapon",
    LOOT_MEMO_SHEET,
    ROW_START_INDEX,
    BOOTS_INDEX,
    USER_NUM
  );
};

const getLedgeLootList = (): string[] => {
  return getValueArray(
    "weapon",
    LOOT_MEMO_SHEET,
    ROW_START_INDEX,
    LEDGE_INDEX,
    USER_NUM
  );
};

const getHandLootList = (): string[] => {
  return getValueArray(
    "weapon",
    LOOT_MEMO_SHEET,
    ROW_START_INDEX,
    HAND_INDEX,
    USER_NUM
  );
};

const getBodyLootList = (): string[] => {
  return getValueArray(
    "weapon",
    LOOT_MEMO_SHEET,
    ROW_START_INDEX,
    BODY_INDEX,
    USER_NUM
  );
};

const getWeaponLootList = (): string[] => {
  return getValueArray(
    "weapon",
    LOOT_MEMO_SHEET,
    ROW_START_INDEX,
    WEAPON_INDEX,
    USER_NUM
  );
};

const getHeadLootList = (): string[] => {
  return getValueArray(
    "weapon",
    LOOT_MEMO_SHEET,
    ROW_START_INDEX,
    HEAD_INDEX,
    USER_NUM
  );
};

export {
  getWeaponLootList,
  getHeadLootList,
  getBodyLootList,
  getBraceletLootList,
  getBootsLootList,
  getEarLootList,
  getHandLootList,
  getLedgeLootList,
  getNeckLootList,
  getRingLootList,
};
