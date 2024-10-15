import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { modifier } from 'ember-modifier';

export default class Thing extends Component {
  @tracked something = null;

  thing = modifier(() => {
    if (!this.something) {
      this.something = 'something';
    }
  });
}
