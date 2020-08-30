import { Component } from '../Component';
import { Actionable } from '../mixins/Actionable';
import { Eventable } from '../mixins/Eventable';

export class Search extends Eventable(Actionable(Component)) {
  type: string = 'search';

  /**
   *
   * @param {string} title
   */
  constructor(title: string) {
    super();
    this.title = title;
  }
}
