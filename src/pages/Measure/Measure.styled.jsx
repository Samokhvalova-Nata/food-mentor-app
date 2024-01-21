import styled from '@emotion/styled';

export const MeasureContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`;

export const InputMeasureWrap = styled.div`
    position: relative;
    width: 360px;
    margin-top: 10px;
    &:last-of-type {
        margin-bottom: 159px;
    }
`;

export const InputMeasureText = styled.p`
    position: absolute;
    top: 22px;
    left: 15px;
`;

export const InputMeasure = styled.input`
    width: 100%;
    height: 64px;
    padding: 20px 15px;
    border-radius: 10px;
    border: 1px solid var(--borders-color);
    background-color: transparent;

    color: var(--primary-text-color);
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.71;
    letter-spacing: 0.25px;
    text-align: right;

    &::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
        margin: 0;
        }
    &:hover,
    :focus {
        border-color: var(--hover-color);
        outline: 0;
        }
`;