# Svelte store2
Sometimes you need to get a store value outside of a component or component that you are not subscribed to. Svelte provides a [get()](https://svelte.dev/docs#get) function for this, but it works by creating a temporary subscription, which may not be what you expect.

Store2 provides `writable2`, `derived2` and `readable2` stores, each with a `get()` method to retrieve the current store value.

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