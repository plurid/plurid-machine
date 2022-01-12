// #region imports
    // #region libraries
    import {
        createStore,
        applyMiddleware,
        Store,
    } from 'redux';

    import thunk from 'redux-thunk';
    // #endregion libraries


    // #region external
    import rootReducer from '../reducers';
    // #endregion external
// #endregion imports



// #region module
export type AppState = ReturnType<typeof rootReducer>;

const store = (
    preloadedState: any,
) => {
    const _store: Store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunk,
        ),
    );

    _store.subscribe(
        () => {
            const state = _store.getState();
            const {
                product,
                themes,
            } = state;

            const newLocalStorageState = {
                product: {
                    ui: {
                        ...product.ui,
                    },
                    language: product.language,
                },
                themes: {
                    ...themes,
                },
            };
        },
    );

    return _store;
}
// #endregion module



// #region exports
export default store;
// #endregion exports
