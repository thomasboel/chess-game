import React, { useState } from 'react';
import styled from 'styled-components';

import { Color, TileState } from '../util/interfaces';
import { colors } from '../util/theme';
import { columnToLetter, rowIndexConvert } from '../util/util';
import ChessPiece from './ChessPiece';

interface WrapperProps {
  backgroundColor: string;
  borderColor: string;
}

const Wrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  position: relative;

  width: calc(100vh / 8 - 16px);
  height: calc(100vh / 8 - 16px);

  background-color: ${props => props.backgroundColor};
  border: 3px solid ${props => props.borderColor};
  border-radius: 8px;

  &:hover {
    opacity: .8;
  }
`;

const ColumnInfo = styled.div`
  position: absolute;
  bottom: 4px;
  right: 6px;
  font-size: 12px;
  user-select: none;
`;

const RowInfo = styled.div`
  position: absolute;
  top: 4px;
  left: 6px;
  font-size: 12px;
  user-select: none;
`;

const HighlightCircle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, .5);
`;

interface TileProps {
  tile: TileState;
  active: boolean;
  handleTilePress: Function;
  highlighted: boolean;
  row: number;
  column: number;
}

const Tile = ({ tile, active, handleTilePress, highlighted, row, column }: TileProps) => {
  return (
    <Wrapper
      backgroundColor={tile.tileColor === Color.BLACK ? colors.blackTile : colors.whiteTile}
      borderColor={active ? '#505050' : colors.tileBorder}
      onClick={() => handleTilePress()}
    >
      {tile.piece && (
        <ChessPiece 
          piece={tile.piece}
        />
      )}

      {/* ===== HIGHLIGHT ===== */}
      {highlighted && (
        <HighlightCircle />
      )}

      {/* ===== COLUMN & ROW INFO ===== */}
      {column === 1 && (
        <RowInfo>
          {rowIndexConvert(row)}
        </RowInfo>
      )}
      {row === 8 && (
        <ColumnInfo>
          {columnToLetter(column)}
        </ColumnInfo>
      )}
    </Wrapper>
  );
}

export default Tile;