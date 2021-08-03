import { BoardState, TileState } from "../util/interfaces";

export const getTileAtOffset = (board: BoardState, reference: TileState, columnOffset: number, rowOffset: number): TileState | undefined => {
  return board.tiles.find(tile => tile.column === reference.column + columnOffset && tile.row === reference.row + rowOffset);
}

export const movePieceToTile = (board: BoardState, from: TileState, to: TileState) => {
  let draft = Object.assign({}, board);
  let tileFromIndex = draft.tiles.findIndex(t => t.id === from.id);
  let tileToIndex = draft.tiles.findIndex(t => t.id === to.id);

  draft.tiles[tileToIndex].piece = Object.assign({}, draft.tiles[tileFromIndex].piece, { moved: true });
  draft.tiles[tileFromIndex].piece = null;

  return draft;
}