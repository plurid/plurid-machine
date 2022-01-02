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

    @media (max-width: 600px) {
        margin: 2rem 0.5rem;
        width: calc(100% - 1rem);
    }
`;


export const StyledServersList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    justify-items: left;

    @media (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;


export const StyledServerItem = styled.div`
    display: flex;
    align-items: center;
    justi-content: space-between;
    gap: 0.7rem;
`;
// #region module
