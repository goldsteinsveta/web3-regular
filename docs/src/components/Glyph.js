import * as React from 'react'
import { useState } from 'react'

import {
  glyphWrap,
  glyphItem,
  clipping,
  clipNotification
} from './Glyph.module.css'

const Glyph = ({ glyph }) => {

  const [isJustClipped, setIsJustClipped] = useState(false);

  const toClipboard = (str) => () => {
    setIsJustClipped(true)
    setTimeout(() => setIsJustClipped(false), 800)
    navigator.clipboard.writeText(str)
  }

  return (
    <>
      <div
        className={glyphWrap + ' ' + (isJustClipped ? clipping : '')}
        onClick={toClipboard(glyph)}
      >
        <div className={glyphItem}>{glyph}</div>
        <h4>{glyph}</h4>
      </div>
      {isJustClipped &&
        <div className={clipNotification}>
          Copied <span className={glyphItem}>{glyph}</span> ({glyph}) to clipboard
        </div>
      }
    </>
  );
}

export default Glyph;
