// #region imports
    // #region libraries
    import styled from 'styled-components';

    import {
        Theme,
    } from '@plurid/plurid-themes';
    // #region libraries
// #region imports



// #region module
export interface IStyledServersList {
    theme: Theme;
}

export const StyledServersList = styled.div<IStyledServersList>`
`;


export const StyledServersListItems = styled.div`
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
