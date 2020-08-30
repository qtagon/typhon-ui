import { Component } from '../Component';
import { Icon } from './Icon';
import { Eventable } from '../mixins/Eventable';

export class Option extends Eventable(Component) {
  type: string = 'option';
  public icon?: Icon;

  constructor(title: string) {
    super();
    this.title = title;
  }

  /**
   *
   * @param {string} url
   */
  public setIcon(title: string = ''): Icon {
    const icon = new Icon(title);
    this.icon = icon;
    return icon;
  }
}
