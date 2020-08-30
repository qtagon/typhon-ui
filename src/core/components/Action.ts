import { Component } from '../Component';
import { SIZE } from '../enums/index';
import { Icon } from './Icon';

export class Action extends Component {
  type: string = 'action';
  url: string = '';
  protected icon?: Icon;

  constructor(title: string, size: SIZE = SIZE.NONE) {
    super();
    this.title = title;
    this.size = size;
    this.url = '';
  }

  /**
   *
   * @param {string} title
   */
  public setIcon(title: string = ''): Icon {
    const icon = new Icon(title);
    this.icon = icon;
    return icon;
  }

  /**
   *
   * @param {string} url
   */
  public setUrl(url: string = ''): this {
    this.url = url;
    return this;
  }
}
