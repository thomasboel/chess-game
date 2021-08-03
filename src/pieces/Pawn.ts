import { BoardState, ChessPiece, Color, TileState } from "../util/interfaces";
import { getTileAtOffset } from "./PieceUtil";

export const getPawnMoveOptions = (pawn: ChessPiece, board: BoardState) => {  
  const tileIndex: number | undefined = board.tiles.findIndex(t => t.piece?.id === pawn.id);
  const tile: TileState = board.tiles[tileIndex];
  
  // Tiles where the Pawn can move to
  let moveOptions: Array<TileState> = [];
  // Tiles where the Pawn can attack
  let attackOptions: Array<TileState> = [];
  
  if (!tile) return { moveOptions, attackOptions };

  // Used when getting the tiles that the pawn can move to. It is multiplied with a row offset, whites move up the board, hence offset * -1.
  const colorModifier = pawn.pieceColor === Color.WHITE ? -1 : 1;

  let moveOption1 = getTileAtOffset(board, tile, 0, colorModifier * 1);
  if (moveOption1 && moveOption1.piece === null) moveOptions.push(moveOption1);

  let attackOption1 = getTileAtOffset(board, tile, 1, colorModifier * 1);
  let attackOption2 = getTileAtOffset(board, tile, -1, colorModifier * 1);
  if (attackOption1 && attackOption1.piece && attackOption1.piece.pieceColor !== pawn.pieceColor) attackOptions.push(attackOption1);
  if (attackOption2 && attackOption2.piece && attackOption2.piece.pieceColor !== pawn.pieceColor) attackOptions.push(attackOption2);
  
  // Pawns can only move 1 foward after they have moved before
  if (pawn.moved) return { moveOptions, attackOptions };
  
  // If there is a piece in the way blocking the pawn to take 2 steps
  if (moveOption1 && moveOption1.piece !== null) return { moveOptions, attackOptions };

  let moveOption2 = getTileAtOffset(board, tile, 0, colorModifier * 2);
  if (moveOption2 && moveOption2.piece === null) moveOptions.push(moveOption2);

  return { moveOptions, attackOptions };
}