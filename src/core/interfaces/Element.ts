import type { ALIGNMENT, POSITION, SIZE } from '../enums';

/**
 * Interface for every component in the system
 */
export interface Element {
  /**
   * Properties
   */
  identifier: string;
  type: string;
  title: string;
  label: string;
  classified: string;
  alignment: ALIGNMENT;
  position: POSITION;
  size: SIZE;
  style: string;
  placeholder: boolean;

  /**
   * Methods
   */
  setIdentifier(identifier: string): this;
  setType(type: string): this;
  setTitle(title: string): this;
  setLabel(label: string): this;
  setClassified(title: string): this;
  setAlignment(alignment: ALIGNMENT): this;
  setPosition(position: POSITION): this;
  setSize(size: SIZE): this;
  setStyle(style: string): this;
  setPlaceholder(enabled: boolean): this;
}
