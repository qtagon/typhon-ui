import { Component } from '../Component';
import { Option } from './Option';

export class Navigation extends Component {
  type: string = 'naviagtion';

  private options: Array<Option>;
  private ioptions: Map<string, Option>;

  /**
   * @param {string} title
   * @param {string} label
   */
  constructor(title: string, label: string) {
    super();
    this.title = title;
    this.label = label;
    this.options = [];
    this.ioptions = new Map();
  }

  /**
   * @param {string} title
   */
  public setOption(title: string = ''): Option {
    const option = new Option(title);
    this.options.push(option);
    this.ioptions.set(option.identifier, option);
    return option;
  }
}
