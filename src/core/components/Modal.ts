import { Component } from '../Component';
import Actionable from '../mixins/Actionable';

export class Modal extends Actionable(Component) {
  type: string = 'modal';

  protected subtitle: string = '';
  protected visible: boolean = false;

  /**
   *
   * @param {string} title
   * @param {string} subtitle
   */
  constructor(title: string = '', subtitle: string = '') {
    super();
    this.title = title;
    this.subtitle = subtitle;
  }

  /**
   * visible setter
   * @param {boolean} visible
   */
  public setVisible(visible: boolean = false): this {
    this.visible = visible;
    return this;
  }
}
