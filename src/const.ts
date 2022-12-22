const SHEET_NAMES = {
  nameTable: "nameSheet",
  lootMemo: "ロット記録",
};

const USER_NUM = 8;

const NAME_TABLE_SHEET = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
  SHEET_NAMES.nameTable
);

const LOOT_MEMO_SHEET = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
  SHEET_NAMES.lootMemo
);

export { SHEET_NAMES, NAME_TABLE_SHEET, USER_NUM, LOOT_MEMO_SHEET };
