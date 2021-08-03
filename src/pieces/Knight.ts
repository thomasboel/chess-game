import { BoardState, ChessPiece, TileState } from "../util/interfaces";
import { getTileAtOffset } from "./PieceUtil";

export const getKnightMoveOptions = (knight: ChessPiece, board: BoardState) => {
  const tileIndex: number | undefined = board.tiles.findIndex(t => t.piece?.id === knight.id);
  const tile: TileState = board.tiles[tileIndex];

  // Tiles where the Pawn can move to
  let moveOptions: Array<TileState> = [];
  // Tiles where the Pawn can attack
  let attackOptions: Array<TileState> = [];
  
  if (!tile) return { moveOptions, attackOptions };
  
  let options: Array<TileState> = [];

  // ===== Moves =====
  let option1 = getTileAtOffset(board, tile, 1, -2);
  if (option1) options.push(option1);
  let option2 = getTileAtOffset(board, tile, -1, -2);
  if (option2) options.push(option2);
  let option3 = getTileAtOffset(board, tile, 1, 2);
  if (option3) options.push(option3);
  let option4 = getTileAtOffset(board, tile, -1, 2);
  if (option4) options.push(option4);
  let option5 = getTileAtOffset(board, tile, 2, -1);
  if (option5) options.push(option5);
  let option6 = getTileAtOffset(board, tile, -2, -1);
  if (option6) options.push(option6);
  let option7 = getTileAtOffset(board, tile, 2, 1);
  if (option7) options.push(option7);
  let option8 = getTileAtOffset(board, tile, -2, 1);
  if (option8) options.push(option8);
  
  for (let option of options) {
    if (option.piece && option.piece.pieceColor !== knight.pieceColor) {
      attackOptions.push(option);
    }
    else if (option.piece && option.piece.pieceColor === knight.pieceColor) {
      // Don't take your own pieces!
    }
    else {
      moveOptions.push(option);
    }
  }

  return { moveOptions, attackOptions };
}