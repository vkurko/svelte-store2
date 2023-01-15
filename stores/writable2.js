import {writable} from 'svelte/store';

/**
 * Writable store with get() method
 */
export function writable2(value, start) {
    let storeValue = value;
    let {set, ...rest} = writable(value, start);

    return {
        ...rest,
        set: value => {
            storeValue = value;
            set(value);
        },
        update: fn => {
            storeValue = fn(value);
            set(storeValue);
        },
        get: () => storeValue,
    };
}
