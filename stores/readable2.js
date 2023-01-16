import {writable2} from './writable2';

/**
 * Readable store with get() method
 *
 * @param value - initial value
 * @param start - start and stop notifications for subscriptions
 */
export function readable2(value, start) {
    let {subscribe, get} = writable2(value, start);

    return {
        subscribe,
        get
    };
}
