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
    import ServersList from '~source/renderer/modules/components/ServersList';

    import { AppState } from '~renderer-services/state/store';
    import StateContext from '~renderer-services/state/context';
    import selectors from '~renderer-services/state/selectors';
    // import actions from '~renderer-services/state/actions';
    // #endregion external


    // #region internal
    import {
        StyledServers,
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
    'plurid.com/admin',

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

    'plurid.com/deon',
    // 'plurid.com/deos',
    'plurid.com/pluridoc',
    'plurid.com/viewer',
];


const tertiaryServers = [
    'user.custom/service',
];



export interface ServersOwnProperties {
}

export interface ServersStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

export interface ServersDispatchProperties {
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

            <ServersList
                name="infrastructure"
                servers={infrastructureServers}
                style={{
                    marginBottom: '4rem',
                }}
            />

            <ServersList
                name="∂products"
                servers={productsServers}
                style={{
                    marginBottom: '4rem',
                }}
            />

            <ServersList
                name="tertiary"
                servers={tertiaryServers}
            />
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
