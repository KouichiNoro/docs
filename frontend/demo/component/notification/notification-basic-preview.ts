import 'Frontend/demo/init'; // hidden-full-source-line
import { html, LitElement } from 'lit-element';
import '@vaadin/vaadin-button/vaadin-button';
import '@vaadin/vaadin-lumo-styles/icons';
import '@vaadin/vaadin-notification/vaadin-notification';
import { applyTheme } from 'Frontend/generated/theme';

export class Example extends LitElement {
  constructor() {
    super();
    applyTheme(this.shadowRoot);
  }

  render() {
    return html`
      <vaadin-notification-card slot="middle">
        <div>Financial report generated</div>
        <vaadin-button theme="tertiary-inline">
          <iron-icon icon="lumo:cross"></iron-icon>
        </vaadin-button>
      </vaadin-notification-card>
    `;
  }
}