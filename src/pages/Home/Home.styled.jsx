import styled from '@emotion/styled';

export const HomeContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    // gap: 50px;
    align-items: center;
    justify-content: center;
    min-height: 500px;
`;

export const Title = styled.h1`
    color: var(--primary-text-color);
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 100px;
`;


export const Text = styled.p`
    margin-bottom: 15px;
    color: var(--primary-text-color);
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.71;
    letter-spacing: 0.5px;
`;