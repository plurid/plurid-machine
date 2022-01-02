// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledServers {
    theme: Theme;
}

export const StyledServers = styled.div<IStyledServers>`
    width: 800px;
    margin: 2rem auto;
    padding: 2rem;

    background-color: ${
        ({
            theme,
        }: IStyledServers) => theme.backgroundColorSecondary
    };
    box-shadow: ${
        ({
            theme,
        }: IStyledServers) => theme.boxShadowUmbra
    };

    h1 {
        margin-bottom: 3rem;
    }
`;


export const StyledServersList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
`;
// #region module
