import { Component } from '../Component';

export class Input extends Component {
  type: string = 'input';

  /**
   *
   * @param {string} title
   */
  constructor(title: string) {
    super();
    this.title = title;
  }
}
