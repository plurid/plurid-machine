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
        StyledServers,
        StyledServersList,
    } from './styled';
    // #endregion internal
// #endregion imports



// #region module
const infrastructureServers = [
    'plurid.cloud/delog',
    'plurid.cloud/messager',

    'plurid.api/gateway',
    'plurid.api/global',

    'plurid.api/authentication',
    'plurid.api/authorization',
    'plurid.api/event',
    'plurid.api/logging',
    // 'plurid.api/payment',
    // 'plurid.api/deserver',
    // 'plurid.api/mailer',
    'plurid.api/memory',
    // 'plurid.api/conductor',

    'plurid.api/upload',
    'plurid.api/images',
    'plurid.api/videos',
    'plurid.api/sounds',
    'plurid.api/scenes',
    'plurid.api/files',
    // 'plurid.api/data/core',
];


const productsServers = [
    'plurid.com/www',
    'plurid.com/account',

    // 'plurid.com/deback',
    // 'plurid.com/decode',
    'plurid.com/defile',
    'plurid.com/deform',
    // 'plurid.com/degene',
    // 'plurid.com/delook',
    // 'plurid.com/deloss',
    // 'plurid.com/demail',
    // 'plurid.com/demand',
    // 'plurid.com/demint',
    // 'plurid.com/denews',
    'plurid.com/denote',
    // 'plurid.com/depack',
    'plurid.com/depict',
    // 'plurid.com/derive',
    // 'plurid.com/deseek',
    // 'plurid.com/deself',
    // 'plurid.com/desite',
    'plurid.com/detime',
    'plurid.com/detool',
    // 'plurid.com/detour',
    'plurid.com/detune',
    'plurid.com/deturn',
    'plurid.com/deveil',
    // 'plurid.com/devert',
    'plurid.com/deview',
    'plurid.com/dewiki',
];


export interface ServersOwnProperties {
}

export interface ServersStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface ServersDispatchProperties {
    dispatchSetGeneralView: typeof actions.views.setGeneralView;
}

export type ServersProperties =
    & ServersOwnProperties
    & ServersStateProperties
    & ServersDispatchProperties;


const Servers: React.FC<ServersProperties> = (
    properties,
) => {
    // #region properties
    const {
        // #region state
        stateGeneralTheme,
        // stateInteractionTheme,
        // #endregion state

        // #region dispatch
        dispatchSetGeneralView,
        // #endregion dispatch
    } = properties;
    // #endregion properties


    // #region render
    return (
        <StyledServers
            theme={stateGeneralTheme}
        >
            <h1>
                servers
            </h1>

            <div
                style={{
                    marginBottom: '4rem',
                }}
            >
                <h2>
                    infrastructure
                </h2>

                <StyledServersList>
                    {infrastructureServers.map(infrastructureServer => {
                        return (
                            <PluridLinkButton
                                key={infrastructureServer}
                                text={infrastructureServer}
                                atClick={() => {
                                    dispatchSetGeneralView(infrastructureServer);
                                }}
                                theme={stateGeneralTheme}
                                inline={true}
                            />
                        );
                    })}
                </StyledServersList>
            </div>

            <div>
                <h2>
                    ∂products
                </h2>

                <StyledServersList>
                    {productsServers.map(productsServer => {
                        return (
                            <PluridLinkButton
                                key={productsServer}
                                text={productsServer}
                                atClick={() => {
                                    dispatchSetGeneralView(productsServer);
                                }}
                                theme={stateGeneralTheme}
                                inline={true}
                            />
                        );
                    })}
                </StyledServersList>
            </div>
        </StyledServers>
    );
    // #endregion render
}


const mapStateToProperties = (
    state: AppState,
): ServersStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ServersDispatchProperties => ({
    dispatchSetGeneralView: (
        payload,
    ) => dispatch(
        actions.views.setGeneralView(payload),
    ),
});


const ConnectedServers = connect(
    mapStateToProperties,
    mapDispatchToProperties,
    null,
    {
        context: StateContext,
    },
)(Servers);
// #endregion module



// #region exports
export default ConnectedServers;
// #endregion exports
