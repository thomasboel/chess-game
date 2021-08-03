import React, { useState } from 'react';
import styled from 'styled-components';

import Tile from '../components/Tile';

import { movePieceToTile } from '../pieces/PieceUtil';
import { getPawnMoveOptions } from '../pieces/Pawn';
import { getKnightMoveOptions } from '../pieces/Knight';
import { getKingMoveOptions } from '../pieces/King';

import { BoardState, Color, Piece, TileState } from '../util/interfaces';
import { initialBoardState } from '../util/boardStates';
import { attackLog, moveLog } from '../util/util';

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
  const [ colorToMove, setColorToMove ] = useState(Color.WHITE);

  const resetActive = () => {
    setActiveTile(null);
    setHighlitedMoveTiles([]);
    setHighlitedAttackTiles([]);
  }
  
  const move = (from: TileState, to: TileState) => {
    // Also save some info and do checks
    const newBoard = movePieceToTile(board, from, to);
    setBoard(newBoard);
    resetActive();
    setColorToMove(colorToMove === Color.WHITE ? Color.BLACK : Color.WHITE);
  }
  
  const attack = (attacker: TileState, target: TileState) => {
    // Also save some info and do checks
    move(attacker, target);
  }

  const pressTile = (tile: TileState) => {
    // ===== Choosing the active tile =====
    if (!activeTile) {
      if (tile.piece && tile.piece.pieceColor === colorToMove) {
        setActiveTile(tile);
        showMoveOptions(tile);
      }
    }
    if (tile !== activeTile && tile.piece && tile.piece.pieceColor === colorToMove) {
      setActiveTile(tile);
      showMoveOptions(tile);
    }

    // If activeTile is not set at this point, the tile pressed was not a {colorToMove} piece
    if (!activeTile) return;
    
    // ===== Attacking the enemy =====
    if (highlightedAttackTiles.includes(tile)) {
      attackLog(activeTile, tile);
      attack(activeTile, tile);
      return;
    }

    // ===== Moving your piece =====
    else if (highlightedMoveTiles.includes(tile)) {
      moveLog(activeTile, tile);
      move(activeTile, tile);
    }
  }

  const showMoveOptions = (tile: TileState) => {
    if (tile.piece === null) {
      setHighlitedMoveTiles([]);
      setHighlitedAttackTiles([]);
      return;
    }
    
    if (colorToMove !== tile.piece.pieceColor) return;

    let tileOptions: { 
      moveOptions: Array<TileState>, 
      attackOptions: Array<TileState> 
    } = { moveOptions: [], attackOptions: [] };

    switch (tile.piece.piece) {
      case Piece.PAWN:
        tileOptions = getPawnMoveOptions(tile.piece, board);
        break;
      case Piece.KNIGHT:
        tileOptions = getKnightMoveOptions(tile.piece, board);
        break;
      case Piece.KING:
        tileOptions = getKingMoveOptions(tile.piece, board);
        break;
    }

    setHighlitedMoveTiles(tileOptions.moveOptions);
    setHighlitedAttackTiles(tileOptions.attackOptions);
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