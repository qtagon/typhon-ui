import { Component } from '../Component';
import { Actionable } from '../mixins/index';
import { Input } from './Input';

export class Form extends Actionable(Component) {
  type: string = 'form';
  subtitle: string = '';
  description: string = '';
  
  public inputs: Array<Input> = [];
  public iinputs: Map<string, Input> = new Map();

  /**
   *
   * @param {string} title
   * @param {string} subtitle
   * @param {string} description
   */
  constructor(title: string, subtitle: string, description: string) {
    super();
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
  }

  public setInput(title: string = ''): Input {
    const input = new Input(title);
    this.inputs.push(input);
    this.iinputs.set(input.identifier, input);
    return input;
  }
}
