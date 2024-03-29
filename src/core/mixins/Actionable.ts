import { Action } from '../components/Action';
import { Button } from '../components/Button';
import { SIZE } from '../enums/index';
import { Constructor } from './Constructor';

/**
 * Actionable
 *
 * Specifies if component has actions or buttons
 */
function Actionable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    public actions: Array<Action> = [];
    public iactions: Map<string, Action> = new Map();

    public buttons: Array<Button> = [];
    public ibuttons: Map<string, Button> = new Map();

    /**
     * Set actions that the component has
     * @param {string} title - title of action
     * @param {SIZE} size - size of action
     */
    public setAction(title: string = '', size: SIZE = SIZE.SMALL): Action {
      const action = new Action(title, size);
      this.actions.push(action);
      this.iactions.set(action.identifier, action);
      return action;
    }

    /**
     * Set buttons that the component has
     * @param {string} title - button title
     * @param {SIZE} size - size of button
     */
    public setButton(title: string = '', size: SIZE = SIZE.SMALL): Button {
      const button = new Button(title, size);
      this.buttons.push(button);
      this.ibuttons.set(button.identifier, button);
      return button;
    }
  };
}

export { Actionable };
