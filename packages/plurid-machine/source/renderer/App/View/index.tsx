// #region imports
    // #region libraries
    import React from 'react';

    import { AnyAction } from 'redux';
    import { connect } from 'react-redux';
    import { ThunkDispatch } from 'redux-thunk';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #endregion libraries


    // #region external
    import {
        PluridGlobalStyles,
        GlobalStyles,
    } from '~renderer-services/styled';

    import Servers from '~source/renderer/modules/containers/Servers';
    import Server from '~source/renderer/modules/components/Server';

    import { AppState } from '~renderer-services/state/store';
    import StateContext from '~renderer-services/state/context';
    import selectors from '~renderer-services/state/selectors';
    // import actions from '~renderer-services/state/actions';
    // #endregion external
// #endregion imports



// #region module
export interface ViewOwnProperties {
}

export interface ViewStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateGeneralView: string;
}

export interface ViewDispatchProperties {
}

export type ViewProperties =
    & ViewOwnProperties
    & ViewStateProperties
    & ViewDispatchProperties;


const View: React.FC<ViewProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        stateGeneralView,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region render
    const view = stateGeneralView === '/'
        ? (<Servers />)
        : (<Server />);

    return (
        <>
            <PluridGlobalStyles
                theme={stateGeneralTheme}
            />

            <GlobalStyles
                theme={stateGeneralTheme}
                gradient={true}
            />

            {view}
        </>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): ViewStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateGeneralView: selectors.views.getGeneralView(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ViewDispatchProperties => ({
});


const ConnectedView = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(View);
// #endregion module



// #region exports
export default ConnectedView;
// #endregion exports
