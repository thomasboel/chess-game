import { BoardState, ChessPiece, Color, TileState } from "../util/interfaces";
import { getTileAtOffset } from "./PieceUtil";

export const getKingMoveOptions = (king: ChessPiece, board: BoardState) => {  
  const tileIndex: number | undefined = board.tiles.findIndex(t => t.piece?.id === king.id);
  const tile: TileState = board.tiles[tileIndex];
  
  // Tiles where the Pawn can move to
  let moveOptions: Array<TileState> = [];
  // Tiles where the Pawn can attack
  let attackOptions: Array<TileState> = [];
  
  if (!tile) return { moveOptions, attackOptions };

  let moveOption1 = getTileAtOffset(board, tile, 0, 1);
  let moveOption2 = getTileAtOffset(board, tile, 1, 1);
  let moveOption3 = getTileAtOffset(board, tile, 1, 0);
  let moveOption4 = getTileAtOffset(board, tile, 1, -1);
  let moveOption5 = getTileAtOffset(board, tile, 0, -1);
  let moveOption6 = getTileAtOffset(board, tile, -1, -1);
  let moveOption7 = getTileAtOffset(board, tile, -1, 0);
  let moveOption8 = getTileAtOffset(board, tile, -1, 1);
  
  if (moveOption1) 
    if (moveOption1.piece === null) moveOptions.push(moveOption1);
    else if (moveOption1.piece.pieceColor !== king.pieceColor) attackOptions.push(moveOption1);

  if (moveOption2) 
    if (moveOption2.piece === null) moveOptions.push(moveOption2);
    else if (moveOption2.piece.pieceColor !== king.pieceColor) attackOptions.push(moveOption2);

  if (moveOption3) 
    if (moveOption3.piece === null) moveOptions.push(moveOption3);
    else if (moveOption3.piece.pieceColor !== king.pieceColor) attackOptions.push(moveOption3);

  if (moveOption4) 
    if (moveOption4.piece === null) moveOptions.push(moveOption4);
    else if (moveOption4.piece.pieceColor !== king.pieceColor) attackOptions.push(moveOption4);

  if (moveOption5) 
    if (moveOption5.piece === null) moveOptions.push(moveOption5);
    else if (moveOption5.piece.pieceColor !== king.pieceColor) attackOptions.push(moveOption5);

  if (moveOption6) 
    if (moveOption6.piece === null) moveOptions.push(moveOption6);
    else if (moveOption6.piece.pieceColor !== king.pieceColor) attackOptions.push(moveOption6);

  if (moveOption7) 
    if (moveOption7.piece === null) moveOptions.push(moveOption7);
    else if (moveOption7.piece.pieceColor !== king.pieceColor) attackOptions.push(moveOption7);

  if (moveOption8) 
    if (moveOption8.piece === null) moveOptions.push(moveOption8);
    else if (moveOption8.piece.pieceColor !== king.pieceColor) attackOptions.push(moveOption8);

  return { moveOptions, attackOptions };
}