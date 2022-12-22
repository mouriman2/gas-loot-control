import { getUserNameList } from "./utils/nameTabel";
import { getWeaponLootList } from "./utils/lootMemo";

(global as any).getUserNameList = getUserNameList;
(global as any).getWeaponLootList = getWeaponLootList;
