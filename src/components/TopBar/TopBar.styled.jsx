import styled from '@emotion/styled';

export const TopBarContainer = styled.header`
    display: flex;
    height: 50px;
    padding: 8px 0px 9px 0px;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`;

export const Text = styled.p`
    margin-left: 10px;
    color: 'var(--logo-text-color)';
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.45px;
`;

export const iconStyles = {
    fill: 'var(--hover-color)',
    cursor: 'pointer',
};