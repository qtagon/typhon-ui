import { Component } from '../Component';
import { Actionable, Eventable } from '../mixins/index';

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
