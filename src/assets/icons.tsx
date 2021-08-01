import React from 'react';
import { Color } from '../util/interfaces';
import { colors } from '../util/theme';

interface ChessPieceIconProps {
  color: Color;
}

export const Queen = ({ color }: ChessPieceIconProps) => (
  <svg width="80" height="7vh" viewBox="0 0 80 80">
    <path 
      id="Icon_awesome-chess-queen"
      data-name="Icon awesome-chess-queen"
      d="M40,17.5a8.75,8.75,0,1,0-8.75-8.75A8.75,8.75,0,0,0,40,17.5ZM67.5,70h-55A2.5,2.5,0,0,0,10,72.5v5A2.5,2.5,0,0,0,12.5,80h55A2.5,2.5,0,0,0,70,77.5v-5A2.5,2.5,0,0,0,67.5,70ZM78.886,28.775l-4.455-2.487a2.556,2.556,0,0,0-3.483.731,7.436,7.436,0,0,1-7.38,2.848A7.778,7.778,0,0,1,57.5,22.094,2.094,2.094,0,0,0,55.406,20H49.348a2.033,2.033,0,0,0-2.009,1.548,7.5,7.5,0,0,1-14.678,0A2.026,2.026,0,0,0,30.652,20H24.594A2.094,2.094,0,0,0,22.5,22.094a7.772,7.772,0,0,1-6.98,7.889A7.422,7.422,0,0,1,9.03,26.991a2.532,2.532,0,0,0-3.452-.709l-4.464,2.5a2.5,2.5,0,0,0-.85,3.2L16.288,65H63.713L79.736,31.973a2.5,2.5,0,0,0-.85-3.2Z"
      transform="translate(0)"
      fill={color === Color.BLACK ? colors.blackPiece : colors.whitePiece}
    />
  </svg>
);

export const Pawn = ({ color }: ChessPieceIconProps) => (
  <svg width="53" height="7vh" viewBox="0 0 53 80">
    <path 
      id="Icon_awesome-chess-pawn"
      data-name="Icon awesome-chess-pawn"
      d="M17.407,34.25H13.25a2.658,2.658,0,0,0-2.65,2.667V42.25a2.658,2.658,0,0,0,2.65,2.667H15.9v.915c0,7.333-.686,14.433-3.975,20.418h29.15C37.781,60.265,37.1,53.165,37.1,45.832v-.915h2.65A2.658,2.658,0,0,0,42.4,42.25V36.917a2.658,2.658,0,0,0-2.65-2.667H35.593a17.225,17.225,0,1,0-18.186,0ZM50.35,71.583H2.65A2.658,2.658,0,0,0,0,74.25v5.333A2.658,2.658,0,0,0,2.65,82.25h47.7A2.658,2.658,0,0,0,53,79.583V74.25A2.658,2.658,0,0,0,50.35,71.583Z"
      transform="translate(0 -2.25)"
      fill={color === Color.BLACK ? colors.blackPiece : colors.whitePiece}
    />
  </svg>
);

export const King = ({ color }: ChessPieceIconProps) => (
  <svg width="69.992" height="7vh" viewBox="0 0 69.992 80">
    <path 
      id="Icon_awesome-chess-king"
      data-name="Icon awesome-chess-king"
      d="M62.5,70H7.5A2.5,2.5,0,0,0,5,72.5v5A2.5,2.5,0,0,0,7.5,80h55A2.5,2.5,0,0,0,65,77.5v-5A2.5,2.5,0,0,0,62.5,70ZM65,25H40V17.5h6.25a1.25,1.25,0,0,0,1.25-1.25V8.75a1.25,1.25,0,0,0-1.25-1.25H40V1.25A1.25,1.25,0,0,0,38.748,0h-7.5A1.25,1.25,0,0,0,30,1.25V7.5h-6.25A1.25,1.25,0,0,0,22.5,8.75v7.5a1.25,1.25,0,0,0,1.25,1.25H30V25H5A5,5,0,0,0,.229,31.491L11.648,65h46.7L69.767,31.491A5,5,0,0,0,65,25Z"
      transform="translate(-0.002)"
      fill={color === Color.BLACK ? colors.blackPiece : colors.whitePiece}
    />
  </svg>
);

export const Knight = ({ color }: ChessPieceIconProps) => (
  <svg width="64" height="7vh" viewBox="0 0 64 80">
    <path 
      id="Icon_awesome-chess-knight"
      data-name="Icon awesome-chess-knight"
      d="M3.167,42.328l6.772,3.01a5.333,5.333,0,0,0,4.147.078l2.13-.853a5.333,5.333,0,0,0,3.127-3.417l1.537-5.108A4,4,0,0,1,22.97,33.43l3.687-1.847v8.388a8,8,0,0,1-4.423,7.157L12.7,51.9A13.333,13.333,0,0,0,5.333,63.83v2.42h53.31v-32a32,32,0,0,0-31.987-32H2a2,2,0,0,0-2,2A2.817,2.817,0,0,0,.3,5.513L2.667,10.25l-1.5,1.5A4,4,0,0,0,0,14.583V37.452a5.333,5.333,0,0,0,3.167,4.877Zm5.5-24.078a3.333,3.333,0,1,1-3.333,3.333A3.333,3.333,0,0,1,8.667,18.25ZM61.333,71.583H2.667A2.667,2.667,0,0,0,0,74.25v5.333A2.667,2.667,0,0,0,2.667,82.25H61.333A2.667,2.667,0,0,0,64,79.583V74.25A2.667,2.667,0,0,0,61.333,71.583Z"
      transform="translate(0 -2.25)"
      fill={color === Color.BLACK ? colors.blackPiece : colors.whitePiece}
    />
  </svg>
);

export const Bishop = ({ color }: ChessPieceIconProps) => (
  <svg width="50" height="7vh" viewBox="0 0 50 80">
    <path 
      id="Icon_awesome-chess-bishop"
      data-name="Icon awesome-chess-bishop"
      d="M1.25,44.981C1.25,53.05,4.709,56.517,10,58.2V65H40V58.2c5.291-1.683,8.75-5.156,8.75-13.219,0-4.783-1.677-10.484-4.17-16.025L28.906,44.633a1.25,1.25,0,0,1-1.767,0l-1.767-1.767a1.25,1.25,0,0,1,0-1.767L42.23,24.234c-3.25-5.923-7.261-11.266-11.073-14.467A4.929,4.929,0,0,0,35,5a5,5,0,0,0-5-5H20a5,5,0,0,0-5,5,4.936,4.936,0,0,0,3.844,4.767C10.6,16.688,1.25,33.516,1.25,44.981ZM47.5,70H2.5A2.5,2.5,0,0,0,0,72.5v5A2.5,2.5,0,0,0,2.5,80h45A2.5,2.5,0,0,0,50,77.5v-5A2.5,2.5,0,0,0,47.5,70Z"
      fill={color === Color.BLACK ? colors.blackPiece : colors.whitePiece}
    />
  </svg>
);

export const Rook = ({ color }: ChessPieceIconProps) => (
  <svg width="64" height="7vh" viewBox="0 0 64 80">
    <path 
      id="Icon_awesome-chess-rook"
      data-name="Icon awesome-chess-rook"
      d="M61.333,2.25H52a2.667,2.667,0,0,0-2.667,2.667v8h-8v-8A2.667,2.667,0,0,0,38.667,2.25H25.333a2.667,2.667,0,0,0-2.667,2.667v8H14.683v-8A2.667,2.667,0,0,0,12.017,2.25H2.667A2.667,2.667,0,0,0,0,4.917V34.25l10.667,5.333a138.964,138.964,0,0,1-2.2,26.667h47.07a139.578,139.578,0,0,1-2.2-26.667L64,34.25V4.917A2.667,2.667,0,0,0,61.333,2.25Zm-24,48H26.667V39.583a5.333,5.333,0,1,1,10.667,0Zm24,21.333H2.667A2.667,2.667,0,0,0,0,74.25v5.333A2.667,2.667,0,0,0,2.667,82.25H61.333A2.667,2.667,0,0,0,64,79.583V74.25A2.667,2.667,0,0,0,61.333,71.583Z"
      transform="translate(0 -2.25)"
      fill={color === Color.BLACK ? colors.blackPiece : colors.whitePiece}
    />
  </svg>
);
