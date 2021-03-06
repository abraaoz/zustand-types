import { Destroy, EqualityChecker, GetState, SetState, State, StateCreator, StateSelector, StoreApi, Subscribe } from 'zustand/vanilla';
export * from 'zustand/vanilla';
export interface UseStore<T extends State> {
    (): T;
    <U>(selector: StateSelector<T, U>, equalityFn?: EqualityChecker<U>): U;
    setState: SetState<T>;
    getState: GetState<T>;
    subscribe: Subscribe<T>;
    destroy: Destroy;
}
export default function create<TState extends State>(createState: StateCreator<TState> | StoreApi<TState>): UseStore<TState>;
