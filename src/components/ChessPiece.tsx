import React from 'react';
import styled from 'styled-components';

import { ChessPiece, Piece } from '../util/interfaces';
import { colors } from '../util/theme';

import { Bishop, Pawn, Queen, Rook, King, Knight } from '../assets/icons';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface ChessPieceProps {
  piece: ChessPiece;
}

const ChessPieceComponent = ({ piece }: ChessPieceProps) => {
  const renderPiece = () => {
    switch(piece.piece) {
      case Piece.ROOK:
        return <Rook color={piece.pieceColor} />;
      case Piece.QUEEN:
        return <Queen color={piece.pieceColor} />;
      case Piece.KING:
        return <King color={piece.pieceColor} />;
      case Piece.KNIGHT:
        return <Knight color={piece.pieceColor} />;
      case Piece.BISHOP:
        return <Bishop color={piece.pieceColor} />;
      case Piece.PAWN:
        return <Pawn color={piece.pieceColor} />;
    }
  }

  return (
    <Wrapper>
      {renderPiece()}
    </Wrapper>
  );
}

export default ChessPieceComponent;