export enum Piece {
  ROOK="ROOK",
  BISHOP="BISHOP",
  KNIGHT="KNIGHT",
  KING="KING",
  QUEEN="QUEEN",
  PAWN="PAWN"
}

export enum Color {
  BLACK,
  WHITE
}

export interface ChessPiece {
  id: number;
  piece: Piece;
  pieceColor: Color;
  moved: boolean;
}

export interface TileState {
  id: number;
  row: number;
  column: number;
  piece: ChessPiece | null;
  tileColor: Color;
}

export interface BoardState {
  tiles: Array<TileState>;
}