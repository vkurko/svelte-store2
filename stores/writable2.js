import {writable} from 'svelte/store';

/**
 * Writable store with get() method
 *
 * @param value - initial value
 * @param start - start and stop notifications for subscriptions
 */
export function writable2(value, start) {
    let {set: _set, subscribe} = writable(value, start);

    function set(newValue) {
        value = newValue;
        _set(value);
    }

    return {
        set,
        update: fn => set(fn(value)),
        subscribe,
        get: () => value,
    };
}
