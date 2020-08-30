import { Component } from '../Component';
import { SIZE } from '../enums/index';
import { Image } from './Image';
import { Actionable } from '../mixins/Actionable';

export class Media extends Actionable(Component) {
  type: string = 'media';
  subtitle: string = '';
  protected image?: Image;

  /**
   *
   * @param {string} title
   * @param {string} subtitle
   */
  constructor(title: string, subtitle: string) {
    super();
    this.title = title;
    this.subtitle = subtitle;
  }

  /**
   *
   * @param {string} url
   * @param {SIZE} size
   */
  public setImage(url: string = '', size: SIZE = SIZE.NONE): Image {
    const image = new Image(url, size);
    this.image = image;
    return image;
  }
}
