import React, { useState } from 'react';
import styled from 'styled-components';

import Tile from '../components/Tile';

import { BoardState, Piece, TileState } from '../util/interfaces';
import { getPawnMoveOptions, initialBoardState, movePieceToTile } from '../util/util';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto auto;
  grid-template-rows: auto auto auto auto auto auto auto auto;
  grid-gap: 4px;
`;

const Board = () => {
  const [ board, setBoard ] = useState<BoardState>(initialBoardState);
  const [ activeTile, setActiveTile ] = useState<TileState | null>(null);
  const [ highlightedMoveTiles, setHighlitedMoveTiles ] = useState<Array<TileState>>([]);
  const [ highlightedAttackTiles, setHighlitedAttackTiles ] = useState<Array<TileState>>([]);

  const resetActive = () => {
    setActiveTile(null);
    setHighlitedMoveTiles([]);
    setHighlitedAttackTiles([]);
  }

  const pressTile = (tile: TileState) => {
    if (tile.piece) {
      if (highlightedAttackTiles.includes(tile)) {
        if (!activeTile) return;
        const newBoard = movePieceToTile(board, activeTile, tile)
        setBoard(newBoard);
        resetActive();
        return;  
      }
      if (activeTile === tile) {
        resetActive();
      }
      else {
        setActiveTile(tile);
        showMoveOptions(tile);
      }
    }
    else {
      if (highlightedMoveTiles.includes(tile)) {
        if (!activeTile) return;
        const newBoard = movePieceToTile(board, activeTile, tile)
        setBoard(newBoard);
        resetActive();
      } 
      else {
        resetActive();
      }
    }
  }

  const showMoveOptions = (tile: TileState) => {
    if (tile.piece === null) {
      setHighlitedMoveTiles([]);
      setHighlitedAttackTiles([]);
      return;
    }

    switch (tile.piece.piece) {
      case Piece.PAWN:
        let tileOptions: {
          moveOptions: Array<TileState>,
          attackOptions: Array<TileState>,
        } = getPawnMoveOptions(tile.piece, board);
        setHighlitedMoveTiles(tileOptions.moveOptions);
        setHighlitedAttackTiles(tileOptions.attackOptions);
        break;
      default:
        setHighlitedMoveTiles([]);
        break;
    }
  }

  return (
    <Wrapper>
      {board.tiles.map((tile, index) => (
        <Tile 
          key={index}
          tile={tile}
          active={activeTile === tile}
          handleTilePress={() => pressTile(tile)}
          highlighted={highlightedMoveTiles.find(t => t.id === tile.id) ? true : false}
          highlightedAttack={highlightedAttackTiles.find(t => t.id === tile.id) ? true : false}
          column={index % 8 + 1}
          row={Math.ceil((index + 1) / 8)}
        />
      ))}
    </Wrapper>
  );
}

export default Board;