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
        text-align: center;
        margin-top: 0rem;
        margin-bottom: 3rem;
    }

    h2 {
        text-align: center;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 900px) {
        margin: 2rem;
        width: calc(100% - 4rem);
    }
`;


export const StyledServersList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    justify-items: left;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;
// #region module
