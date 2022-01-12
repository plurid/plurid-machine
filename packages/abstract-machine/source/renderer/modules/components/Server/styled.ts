// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledServer {
    theme: Theme;
}

export const StyledServer = styled.div<IStyledServer>`
    padding: 2rem;

    font-family: ${
        ({
            theme,
        }: IStyledServer) => theme.fontFamilySansSerif
    };

    h1 {
        font-size: 2rem;
    }
`;
// #region module
