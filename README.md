# Zustand Types

## Motivation

Be able to import Zustand's types (TypeScript) into any project.

### Example

```javascript
// ❌ does not work!
import { PersistOptions } from "zustand/middleware";

// ✔️ works!
import { PersistOptions } from "zustand-types/middleware";
```

## How this repository was made

1. Set the version of Zustand and the repository itself in `package.json` of this repo
2. Delete the `node_modules` folder and `yarn.lock` file from the root of this repo
3. Run the `yarn` command on the root of this repo
4. Copy all `.d.ts` files from the `node_modules/zustand` folder to the root of this repo
5. Replace all occurrences of `from './` with `from 'zustand/`
6. Replace all occurrences of the `^declare type` regex with `export declare type`
7. Commit and publish

## How to use

1. Run `yarn add zustand-types@3.5.13 --dev`.

   Your `package.json` should looks like:

   ```json
   {
     "dependencies": {
       "zustand": "3.5.13"
     },
     "devDependencies": {
       "zustand-types": "3.5.13"
     }
   }
   ```

   **WARNING: keep the same version for `zustand` and `zustand-types`**

2. Import any Zustand type definition from zustand-types, like this:

   ```javascript
   import {
     NamedSet,
     Combine,
     DeepPartial,
     StateStorage,
     StorageValue,
     PersistOptions,
   } from "zustand-types/middleware";

   import {
     State,
     PartialState,
     StateSelector,
     EqualityChecker,
     StateListener,
     StateSliceListener,
     SetState,
     GetState,
     Destroy,
     StateCreator,
   } from "zustand-types/vanilla";
   ```
