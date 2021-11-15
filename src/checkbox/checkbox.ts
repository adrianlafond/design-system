import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import {
  NAMESPACE,
  EXACT_OVERLAY,
  FGCOLOR,
  BGCOLOR,
  FOCUS_OUTLINE,
  TEXT_MD,
  FONT_BODY,
} from '../global'

@customElement(`${NAMESPACE}-checkbox`)
export class Checkbox extends LitElement {
  static styles = css`
    .root {
      display: inline-flex;
      align-items: center;
      width: fit-content;
      width: fit-content;
      font-family: ${FONT_BODY};
      font-size: ${TEXT_MD};
    }
    .root--block {
      display: flex;
    }
    .root__box {
      position: relative;
      display: inline-block;
      width: 18px;
      height: 18px;
      margin: 2px 6px 1px 0;
    }
    .root__box--right {
      margin: 2px 0 1px 6px;
    }
    .root__element {
      ${EXACT_OVERLAY}
      opacity: 0;
      left: -3px;
      top: -3px;
    }
    .root__graphic {
      ${EXACT_OVERLAY}
      width: 14px;
      height: 14px;
      border-width: 3px 1px 1px 3px;
      border-color: ${FGCOLOR};
      border-style: solid;
      background-color: ${BGCOLOR};
    }
    .root__element:checked + .root__graphic::after {
      content: '';
      position: absolute;
      left: 2px;
      top: 2px;
      width: 10px;
      height: 10px;
      background-color: ${FGCOLOR};
    }
    .root__element:focus + .root__graphic {
      outline: ${FOCUS_OUTLINE}
    }
  `

  @property({ type: Boolean })
  block?: string

  @property({ type: Boolean })
  right?: string;

  render() {
    return html`
      <label class=${classMap({ root: true, 'root--block': !!this.block })}>
        ${this.right ? html`<slot></slot>` : null}
        <div class=${classMap({ 'root__box': true, 'root__box--right': !!this.right })}>
          <input class="root__element" type="checkbox">
          <div class="root__graphic"></div>
        </div>
        ${this.right ? null : html`<slot></slot>`}
      </label>
    `
  }
}

const TAG = `${NAMESPACE}-checkbox` as const
declare global {
  interface HTMLElementTagNameMap {
    [TAG]: Checkbox,
  }
}
