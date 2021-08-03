import { TileState } from "./interfaces";

export const columnToLetter = (int: number) => {
  switch (int) {
    case 1: return 'a';
    case 2: return 'b';
    case 3: return 'c';
    case 4: return 'd';
    case 5: return 'e';
    case 6: return 'f';
    case 7: return 'g';
    case 8: return 'h';
  }
}

export const rowIndexConvert = (int: number) => {
  switch (int) {
    case 1: return 8;
    case 2: return 7;
    case 3: return 6;
    case 4: return 5;
    case 5: return 4;
    case 6: return 3;
    case 7: return 2;
    case 8: return 1;
  }
}

export const moveLog = (from: TileState, to: TileState) => {
  from && to && console.log("" + columnToLetter(from.column) + rowIndexConvert(from.row) + " to " + columnToLetter(to.column) + rowIndexConvert(to.row))
}

export const attackLog = (from: TileState, to: TileState) => {
  from && to && console.log("" + columnToLetter(from.column) + rowIndexConvert(from.row) + " takes on " + columnToLetter(to.column) + rowIndexConvert(to.row))
}