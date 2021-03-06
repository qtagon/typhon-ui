import { Helper } from './Helper';

export class Event {
  identifier: string;
  name: string;
  parameters: any;

  constructor(name: string = '', parameters: any = '') {
    this.identifier = new Helper().guid();
    this.name = name;
    this.parameters = parameters;
  }
}
