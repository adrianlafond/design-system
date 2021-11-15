import { css } from 'lit'
import {
  FONT_HEADER,
  LINE_HEIGHT,
  LETTER_SPACING_HEADER,
} from './vars'

export const TEXT_LG = css`22px`
export const TEXT_MD = css`18px`
export const TEXT_SM = css`14px`

export const TEXT_HEADER = css`
  display: block;
  font-family: ${FONT_HEADER};
  line-height: ${LINE_HEIGHT};
  font-weight: bold;
  letter-spacing: ${LETTER_SPACING_HEADER};
  line-height: 1;
`

export const TEXT_HEADER_01 = css`
  ${TEXT_HEADER}
  font-size: 40px;
`
