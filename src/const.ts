const SHEET_NAMES = {
  nameTable: "nameSheet",
};

const USER_NUM = 8;

const NAME_TABLE_SHEET = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
  SHEET_NAMES.nameTable
);

export { SHEET_NAMES, NAME_TABLE_SHEET, USER_NUM };
