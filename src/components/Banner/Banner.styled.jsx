import styled from '@emotion/styled';

export const BannerContainer = styled.div`
    display: flex;
    width: 1440px;
    padding: 15px;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    color: var(--primary-text-color);
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
`;

export const Text = styled.p`
    width: 330px;
    color: var(--secondary-text-color);
    text-align: center;
    line-height: 1.71;
`;