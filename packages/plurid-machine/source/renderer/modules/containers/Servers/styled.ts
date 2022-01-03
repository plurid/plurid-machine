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

    font-family: ${
        ({
            theme,
        }: IStyledServers) => theme.fontFamilySansSerif
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
// #region module
