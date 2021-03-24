import {writable} from 'svelte/store';

/**
 * Writable store with get() method
 */
export function writable2(value, start) {
    let storeValue = value;
    let {set, ...rest} = writable(value, start);

    return {
        set: value => {
            storeValue = value;
            set(value);
        },
        get: () => storeValue,
        ...rest
    };
}
