import { Alliance, Point } from "../index";

/**
 * A data structure that contains a subset of the fields of `Unit`. The "TS" is short for
 * "TypeScript", since this data structure is not generated by the game.
 */
export interface TSUnit {
  alliance: Alliance;
  pos: Point;
  unitType: number;
}
