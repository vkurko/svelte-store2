# Svelte store2
Sometimes you need to retrieve the value of a store outside of component or to which you're not subscribed. For this Svelte provides [get()](https://svelte.dev/docs#get) function, but it works by creating a temporary subscription which may not be what you would expect.

Store2 provides `writable2`, `derived2` and `readable2` stores, each of which has a `get()` method to retrieve the current value of the store.

## Usage
Install the package:
```bash
npm install --save-dev svelte-store2
```
Then you can just replace the original Svelte stores with `writable2`, `derived2` or `readable2` and benefit from using the `get()` method:
```js
import {writable2, derived2} from 'svelte-store2';

const w = writable2(0);
const d = derived2(w, $w => $w * 2);

w.get();  // 0
d.get();  // 0

w.set(2);
w.get();  // 2
d.get();  // 4
```