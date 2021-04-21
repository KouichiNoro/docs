import 'Frontend/demo/init'; // hidden-full-source-line
import '@vaadin/flow-frontend/contextMenuConnector.js'; // hidden-full-source-line
import './example-cleanup'; // hidden-full-source-line

import { html, LitElement, customElement } from 'lit-element';
import '@vaadin/vaadin-cookie-consent/vaadin-cookie-consent';

@customElement('cookie-consent-theming')
export class Example extends LitElement {
  // tag::snippet[]
  connectedCallback() {
    document.documentElement.classList.add('themable');
    super.connectedCallback();
  }
  // end::snippet[]

  // tag::snippet[]
  render() {
    return html`<vaadin-cookie-consent></vaadin-cookie-consent>`;
  }
  // end::snippet[]
}