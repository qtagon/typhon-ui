import { Event } from '../Event';
import { Constructor } from './Constructor';

/**
 * Eventable
 *
 * Specifies if component has actions or buttons
 */
function Eventable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    public event: Event = new Event();

    /**
     * Set event of the component
     * @param {string} name - name of the event to be emitted
     * @param {any} parameters - parameters of the event that should be forwarded
     */
    public setEvent(name: string = '', parameters: any = ''): this {
      this.event = new Event(name, parameters);
      return this;
    }
  };
}

export { Eventable };
