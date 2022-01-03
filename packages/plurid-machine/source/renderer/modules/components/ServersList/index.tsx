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
        PluridIconAdd,
        PluridIconValid,
        PluridIconInvalid,
    } from '@plurid/plurid-icons-react';

    import {
        PluridLink,
    } from '@plurid/plurid-react';
    // #endregion libraries


    // #region external
    import {
        PluridLinkButton,
    } from '~renderer-services/styled';

    import { AppState } from '~renderer-services/state/store';
    import StateContext from '~renderer-services/state/context';
    import selectors from '~renderer-services/state/selectors';
    // import actions from '~renderer-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledServersList,
        StyledServersListItems,
        StyledServerItem,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
export interface ServersListOwnProperties {
    name: string;
    servers: string[];
    style?: React.CSSProperties;
}

export interface ServersListStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface ServersListDispatchProperties {
}

export type ServersListProperties =
    & ServersListOwnProperties
    & ServersListStateProperties
    & ServersListDispatchProperties;


const ServersList: React.FC<ServersListProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region own
        name,
        servers,
        style,
        // #endregion own

        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        // #endregion state
    } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledServersList
            theme={stateGeneralTheme}
            style={{
                ...style,
            }}
        >
            <h2>
                {name}
            </h2>

            <StyledServersListItems>
                {servers.map(server => {
                    return (
                        <StyledServerItem
                            key={server}
                        >
                            <PluridIconAdd
                                theme={stateGeneralTheme}
                            />

                            <PluridLink
                                route={`/server/${encodeURIComponent(server)}`}
                            >
                                <PluridLinkButton
                                    text={server}
                                    atClick={() => {}}
                                    theme={stateGeneralTheme}
                                    inline={true}
                                />
                            </PluridLink>
                        </StyledServerItem>
                    );
                })}
            </StyledServersListItems>
        </StyledServersList>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): ServersListStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ServersListDispatchProperties => ({
});


const ConnectedServersList = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(ServersList);
// #endregion module



// #region exports
export default ConnectedServersList;
// #endregion exports
