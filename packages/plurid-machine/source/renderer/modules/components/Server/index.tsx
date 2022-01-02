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
        PluridLinkButton,
    } from '~renderer-services/styled';

    import { AppState } from '~renderer-services/state/store';
    import StateContext from '~renderer-services/state/context';
    import selectors from '~renderer-services/state/selectors';
    import actions from '~renderer-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledServer,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface ServerOwnProperties {
}

export interface ServerStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateGeneralView: string;
}

export interface ServerDispatchProperties {
    dispatchSetGeneralView: typeof actions.views.setGeneralView;
}

export type ServerProperties =
    & ServerOwnProperties
    & ServerStateProperties
    & ServerDispatchProperties;


const Server: React.FC<ServerProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        stateGeneralView,
        // #endregion state

        // #region dispatch
        dispatchSetGeneralView,
        // #endregion dispatch
    } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledServer
            theme={stateGeneralTheme}
        >
            <PluridLinkButton
                text="servers"
                atClick={() => {
                    dispatchSetGeneralView('/');
                }}
                theme={stateGeneralTheme}
            />

            Server
        </StyledServer>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): ServerStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateGeneralView: selectors.views.getGeneralView(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ServerDispatchProperties => ({
    dispatchSetGeneralView: (
        payload,
    ) => dispatch(
        actions.views.setGeneralView(payload),
    ),
});


const ConnectedServer = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Server);
// #endregion module



// #region exports
export default ConnectedServer;
// #endregion exports
