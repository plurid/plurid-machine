// #region imports
    // #region external
    import {
        AppState,
    } from '~renderer-services/state/store';
    // #endregion external
// #endregion imports



// #region module
const getData = (state: AppState) => state.data;


const selectors = {
    getData,
};
// #endregion module



// #region exports
export default selectors;
// #endregion exports
