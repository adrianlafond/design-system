import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {
  TEXT_HEADER_1
} from '../global'

@customElement('heading-1')
export class Heading1 extends LitElement {
  static styles = css`
    :host {
      ${TEXT_HEADER_1}
    }
  `

  @property({ reflect: true })
  role: string = 'heading'

  @property({ type: Number, reflect: true, attribute: 'aria-level' })
  ariaLevel: string = '1'

  render() {
    return html`<slot></slot>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "heading-1": Heading1,
  }
}
