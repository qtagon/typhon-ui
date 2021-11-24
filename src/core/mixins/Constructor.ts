/**
 * Constructor
 *
 * Specifies constructor for mixin classes
 */
type Constructor<T = {}> = new (...args: any[]) => T;

export { Constructor };
