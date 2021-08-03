import { BoardState, Color, Piece } from "./interfaces";

export const initialBoardState: BoardState = { 
  tiles: [
    {
      id: 0,
      row: 1,
      column: 1,
      piece: {
        id: 0,
        moved: false,
        piece: Piece.ROOK,
        pieceColor: Color.BLACK
      },
      tileColor: Color.WHITE
    },
    {
      id: 1,
      row: 1,
      column: 2,
      piece: {
        id: 1,
        moved: false,
        piece: Piece.KNIGHT,
        pieceColor: Color.BLACK
      },
      tileColor: Color.BLACK
    },
    {
      id: 2,
      row: 1,
      column: 3,
      piece: {
        id: 2,
        moved: false,
        piece: Piece.BISHOP,
        pieceColor: Color.BLACK
      },
      tileColor: Color.WHITE
    },
    {
      id: 3,
      row: 1,
      column: 4,
      piece: {
        id: 3,
        moved: false,
        piece: Piece.QUEEN,
        pieceColor: Color.BLACK
      },
      tileColor: Color.BLACK
    },
    {
      id: 4,
      row: 1,
      column: 5,
      piece: {
        id: 4,
        moved: false,
        piece: Piece.KING,
        pieceColor: Color.BLACK
      },
      tileColor: Color.WHITE
    },
    {
      id: 5,
      row: 1,
      column: 6,
      piece: {
        id: 5,
        moved: false,
        piece: Piece.BISHOP,
        pieceColor: Color.BLACK
      },
      tileColor: Color.BLACK
    },
    {
      id: 6,
      row: 1,
      column: 7,
      piece: {
        id: 6,
        moved: false,
        piece: Piece.KNIGHT,
        pieceColor: Color.BLACK
      },
      tileColor: Color.WHITE
    },
    {
      id: 7,
      row: 1,
      column: 8,
      piece: {
        id: 7,
        moved: false,
        piece: Piece.ROOK,
        pieceColor: Color.BLACK
      },
      tileColor: Color.BLACK
    },
    {
      id: 8,
      row: 2,
      column: 1,
      piece: {
        id: 8,
        moved: false,
        piece: Piece.PAWN,
        pieceColor: Color.BLACK
      },
      tileColor: Color.BLACK
    },
    {
      id: 9,
      row: 2,
      column: 2,
      piece: {
        id: 9,
        moved: false,
        piece: Piece.PAWN,
        pieceColor: Color.BLACK
      },
      tileColor: Color.WHITE
    },
    {
      id: 10,
      row: 2,
      column: 3,
      piece: {
        id: 10,
        moved: false,
        piece: Piece.PAWN,
        pieceColor: Color.BLACK
      },
      tileColor: Color.BLACK
    },
    {
      id: 11,
      row: 2,
      column: 4,
      piece: {
        id: 11,
        moved: false,
        piece: Piece.PAWN,
        pieceColor: Color.BLACK
      },
      tileColor: Color.WHITE
    },
    {
      id: 12,
      row: 2,
      column: 5,
      piece: {
        id: 12,
        moved: false,
        piece: Piece.PAWN,
        pieceColor: Color.BLACK
      },
      tileColor: Color.BLACK
    },
    {
      id: 13,
      row: 2,
      column: 6,
      piece: {
        id: 13,
        moved: false,
        piece: Piece.PAWN,
        pieceColor: Color.BLACK
      },
      tileColor: Color.WHITE
    },
    {
      id: 14,
      row: 2,
      column: 7,
      piece: {
        id: 14,
        moved: false,
        piece: Piece.PAWN,
        pieceColor: Color.BLACK
      },
      tileColor: Color.BLACK
    },
    {
      id: 15,
      row: 2,
      column: 8,
      piece: {
        id: 15,
        moved: false,
        piece: Piece.PAWN,
        pieceColor: Color.BLACK
      },
      tileColor: Color.WHITE
    },
    {
      id: 16,
      row: 3,
      column: 1,
      piece: null,
      tileColor: Color.WHITE
    },
    {
      id: 17,
      row: 3,
      column: 2,
      piece: null,
      tileColor: Color.BLACK
    },
    {
      id: 18,
      row: 3,
      column: 3,
      piece: null,
      tileColor: Color.WHITE
    },
    {
      id: 19,
      row: 3,
      column: 4,
      piece: null,
      tileColor: Color.BLACK
    },
    {
      id: 20,
      row: 3,
      column: 5,
      piece: null,
      tileColor: Color.WHITE
    },
    {
      id: 21,
      row: 3,
      column: 6,
      piece: null,
      tileColor: Color.BLACK
    },
    {
      id: 22,
      row: 3,
      column: 7,
      piece: null,
      tileColor: Color.WHITE
    },
    {
      id: 23,
      row: 3,
      column: 8,
      piece: null,
      tileColor: Color.BLACK
    },
    {
      id: 24,
      row: 4,
      column: 1,
      piece: null,
      tileColor: Color.BLACK
    },
    {
      id: 25,
      row: 4,
      column: 2,
      piece: null,
      tileColor: Color.WHITE
    },
    {
      id: 26,
      row: 4,
      column: 3,
      piece: null,
      tileColor: Color.BLACK
    },
    {
      id: 27,
      row: 4,
      column: 4,
      piece: null,
      tileColor: Color.WHITE
    },
    {
      id: 28,
      row: 4,
      column: 5,
      piece: null,
      tileColor: Color.BLACK
    },
    {
      id: 29,
      row: 4,
      column: 6,
      piece: null,
      tileColor: Color.WHITE
    },
    {
      id: 30,
      row: 4,
      column: 7,
      piece: null,
      tileColor: Color.BLACK
    },
    {
      id: 31,
      row: 4,
      column: 8,
      piece: null,
      tileColor: Color.WHITE
    },
    {
      id: 32,
      row: 5,
      column: 1,
      piece: null,
      tileColor: Color.WHITE
    },
    {
      id: 33,
      row: 5,
      column: 2,
      piece: null,
      tileColor: Color.BLACK
    },
    {
      id: 34,
      row: 5,
      column: 3,
      piece: null,
      tileColor: Color.WHITE
    },
    {
      id: 35,
      row: 5,
      column: 4,
      piece: null,
      tileColor: Color.BLACK
    },
    {
      id: 36,
      row: 5,
      column: 5,
      piece: null,
      tileColor: Color.WHITE
    },
    {
      id: 37,
      row: 5,
      column: 6,
      piece: null,
      tileColor: Color.BLACK
    },
    {
      id: 38,
      row: 5,
      column: 7,
      piece: null,
      tileColor: Color.WHITE
    },
    {
      id: 39,
      row: 5,
      column: 8,
      piece: null,
      tileColor: Color.BLACK
    },
    {
      id: 40,
      row: 6,
      column: 1,
      piece: null,
      tileColor: Color.BLACK
    },
    {
      id: 41,
      row: 6,
      column: 2,
      piece: null,
      tileColor: Color.WHITE
    },
    {
      id: 42,
      row: 6,
      column: 3,
      piece: null,
      tileColor: Color.BLACK
    },
    {
      id: 43,
      row: 6,
      column: 4,
      piece: null,
      tileColor: Color.WHITE
    },
    {
      id: 44,
      row: 6,
      column: 5,
      piece: null,
      tileColor: Color.BLACK
    },
    {
      id: 45,
      row: 6,
      column: 6,
      piece: null,
      tileColor: Color.WHITE
    },
    {
      id: 46,
      row: 6,
      column: 7,
      piece: null,
      tileColor: Color.BLACK
    },
    {
      id: 47,
      row: 6,
      column: 8,
      piece: null,
      tileColor: Color.WHITE
    },
    {
      id: 48,
      row: 7,
      column: 1,
      piece: {
        id: 16,
        moved: false,
        piece: Piece.PAWN,
        pieceColor: Color.WHITE
      },
      tileColor: Color.WHITE
    },
    {
      id: 49,
      row: 7,
      column: 2,
      piece: {
        id: 17,
        moved: false,
        piece: Piece.PAWN,
        pieceColor: Color.WHITE
      },
      tileColor: Color.BLACK
    },
    {
      id: 50,
      row: 7,
      column: 3,
      piece: {
        id: 18,
        moved: false,
        piece: Piece.PAWN,
        pieceColor: Color.WHITE
      },
      tileColor: Color.WHITE
    },
    {
      id: 51,
      row: 7,
      column: 4,
      piece: {
        id: 19,
        moved: false,
        piece: Piece.PAWN,
        pieceColor: Color.WHITE
      },
      tileColor: Color.BLACK
    },
    {
      id: 52,
      row: 7,
      column: 5,
      piece: {
        id: 20,
        moved: false,
        piece: Piece.PAWN,
        pieceColor: Color.WHITE
      },
      tileColor: Color.WHITE
    },
    {
      id: 53,
      row: 7,
      column: 6,
      piece: {
        id: 21,
        moved: false,
        piece: Piece.PAWN,
        pieceColor: Color.WHITE
      },
      tileColor: Color.BLACK
    },
    {
      id: 54,
      row: 7,
      column: 7,
      piece: {
        id: 22,
        moved: false,
        piece: Piece.PAWN,
        pieceColor: Color.WHITE
      },
      tileColor: Color.WHITE
    },
    {
      id: 55,
      row: 7,
      column: 8,
      piece: {
        id: 23,
        moved: false,
        piece: Piece.PAWN,
        pieceColor: Color.WHITE
      },
      tileColor: Color.BLACK
    },
    {
      id: 56,
      row: 8,
      column: 1,
      piece: {
        id: 24,
        moved: false,
        piece: Piece.ROOK,
        pieceColor: Color.WHITE
      },
      tileColor: Color.BLACK
    },
    {
      id: 57,
      row: 8,
      column: 2,
      piece: {
        id: 25,
        moved: false,
        piece: Piece.KNIGHT,
        pieceColor: Color.WHITE
      },
      tileColor: Color.WHITE
    },
    {
      id: 58,
      row: 8,
      column: 3,
      piece: {
        id: 26,
        moved: false,
        piece: Piece.BISHOP,
        pieceColor: Color.WHITE
      },
      tileColor: Color.BLACK
    },
    {
      id: 59,
      row: 8,
      column: 4,
      piece: {
        id: 27,
        moved: false,
        piece: Piece.QUEEN,
        pieceColor: Color.WHITE
      },
      tileColor: Color.WHITE
    },
    {
      id: 60,
      row: 8,
      column: 5,
      piece: {
        id: 28,
        moved: false,
        piece: Piece.KING,
        pieceColor: Color.WHITE
      },
      tileColor: Color.BLACK
    },
    {
      id: 61,
      row: 8,
      column: 6,
      piece: {
        id: 29,
        moved: false,
        piece: Piece.BISHOP,
        pieceColor: Color.WHITE
      },
      tileColor: Color.WHITE
    },
    {
      id: 62,
      row: 8,
      column: 7,
      piece: {
        id: 30,
        moved: false,
        piece: Piece.KNIGHT,
        pieceColor: Color.WHITE
      },
      tileColor: Color.BLACK
    },
    {
      id: 63,
      row: 8,
      column: 8,
      piece: {
        id: 31,
        moved: false,
        piece: Piece.ROOK,
        pieceColor: Color.WHITE
      },
      tileColor: Color.WHITE
    }
  ]
}