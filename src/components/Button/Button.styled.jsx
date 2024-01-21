import styled from '@emotion/styled';

export const MainButton = styled.button`
    display: flex;
    width: 360px;
    height: 50px;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;


    border-radius: 12px;
    opacity: ${props => ( props.disabled ? 0.3 : 1)};
    background-color: var(--accent-color);
    color: var(--text-button-color);
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.44;
    letter-spacing: 0.2px;
    transition: background-color var(--transition);

    &:hover,
    &:focus {
        background-color: var(--hover-color);
    }

`;