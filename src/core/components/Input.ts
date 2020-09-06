import { Component } from '../Component';

export class Input extends Component {
  type: string = 'input';
  typed: string = 'text';
  description: string = '';

  /**
   *
   * @param {string} title
   */
  constructor(title: string = '', description: string = '') {
    super();
    this.title = title;
    this.description = description;
    this.typed = 'text';
  }

  /**
   * typed setter
   * @param {string} typed
   */
  public setTyped(typed: string = 'text'): this {
    this.typed = typed;
    return this;
  }
}
