import {writable2} from './writable2';

/**
 * Readable store with get() method
 */
export function readable2(value, start) {
    let {subscribe, get} = writable2(value, start);

    return {
        subscribe,
        get
    };
}
