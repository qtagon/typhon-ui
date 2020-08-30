import { Component } from '../Component';
import { SIZE } from '../enums/index';

export class Image extends Component {
  type: string = 'image';
  url: string = '';

  constructor(url: string, size: SIZE = SIZE.NONE) {
    super();
    this.size = size;
    this.url = url;
    this.placeholder = false;
  }
}
