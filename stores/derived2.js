import {derived, get} from 'svelte/store';
import {is_function} from 'svelte/internal';

/**
 * Derived store with get() method
 *
 * @param stores - input stores
 * @param fn - function callback that aggregates the values
 * @param value - initial value, when used asynchronously
 */
export function derived2(stores, fn, value) {
    let hasSubscribers = false;
    let auto = fn.length < 2;
    let fn2 = (_, set) => {
        hasSubscribers = true;
        let cleanup;
        if (auto) {
            value = fn(_);
            set(value);
        } else {
            cleanup = fn(_, newValue => {
                value = newValue;
                set(value);
            });
        }
        return () => {
            if (is_function(cleanup)) {
                cleanup();
            }
            hasSubscribers = false;
        };
    };
    let store = derived(stores, fn2, value);

    return {
        ...store,
        get: () => hasSubscribers ? value : get(store)
    };
}
