import {derived, get} from 'svelte/store';

/**
 * Derived store with get() method
 */
export function derived2(stores, fn, initValue) {
    let storeValue = initValue;
    let hasSubscribers = false;
    let auto = fn.length < 2;
    let fn2 = (_, set) => {
        hasSubscribers = true;
        if (auto) {
            storeValue = fn(_, set);
            set(storeValue);
        } else {
            fn(_, value => {
                storeValue = value;
                set(value);
            });
        }
        return () => {
            hasSubscribers = false;
        };
    };
    let store = derived(stores, fn2, initValue);

    return {
        ...store,
        get: () => hasSubscribers ? storeValue : get(store)
    };
}
