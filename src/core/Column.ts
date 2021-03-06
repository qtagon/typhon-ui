import { Row } from './Row';
import { Component } from './Component';
import { Scrollable } from './mixins/Scrollable';

export class Column extends Scrollable(Component) {
  type: string = 'column';

  public rows: Array<Row>;
  private irows: Map<string, Row>;

  constructor(identifier: string = '') {
    super();
    this.identifier = identifier;
    this.rows = [];
    this.irows = new Map();
  }

  /**
   * Get all rows of column
   */
  public getRows(): Array<Row> {
    return this.rows;
  }

  /**
   * Get all irows of column
   */
  public getIndexedRows(): Map<string, Row> {
    return this.irows;
  }

  /**
   * Set column row
   * @param {string} identifier
   */
  public setRow(identifier: string = ''): Row {
    const row = new Row(identifier);
    this.rows.push(row);
    this.irows.set(row.identifier, row);
    return row;
  }

  /**
   * Get column row
   * @param {string} identifier
   */
  public onRow(identifier: string = ''): Row | undefined {
    const row = this.irows.get(identifier);
    return row;
  }

  /**
   * Clear all rows
   */
  public clear(): this {
    this.rows = [];
    this.irows.clear();
    return this;
  }
}
