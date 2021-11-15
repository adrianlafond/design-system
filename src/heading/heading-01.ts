import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  TEXT_HEADER_01
} from '../global'

@customElement('heading-01')
export class Heading01 extends LitElement {
  static styles = css`
    :host {
      ${TEXT_HEADER_01}
    }
  `

  @property({ reflect: true })
  role?: string = 'heading'

  @property({ type: Number, reflect: true, attribute: 'aria-level' })
  ariaLevel: string = '1'

  render() {
    return html`<slot></slot>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "heading-01": Heading01,
  }
}
