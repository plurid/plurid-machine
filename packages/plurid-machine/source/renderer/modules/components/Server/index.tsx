// #region imports
    // #region libraries
    import React from 'react';

    import { AnyAction } from 'redux';
    import { connect } from 'react-redux';
    import { ThunkDispatch } from 'redux-thunk';


    import {
        Theme,
    } from '@plurid/plurid-themes';

    import {
        PluridPlaneComponentProperty,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import { AppState } from '~renderer-services/state/store';
    import StateContext from '~renderer-services/state/context';
    import selectors from '~renderer-services/state/selectors';
    // import actions from '~renderer-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledServer,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface ServerOwnProperties {
    plurid: PluridPlaneComponentProperty,
}

export interface ServerStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface ServerDispatchProperties {
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
        // #region own
        plurid,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        // #endregion state
    } = properties;

    const serverName = decodeURIComponent(plurid.plane.parameters.name);
    // #endregion properties


    // #region render
    return (
        <StyledServer
            theme={stateGeneralTheme}
        >
            <h1>
                {serverName}
            </h1>
        </StyledServer>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): ServerStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ServerDispatchProperties => ({
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
