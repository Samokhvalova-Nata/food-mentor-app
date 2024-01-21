import styled from '@emotion/styled';

export const Input = styled.input`
    position: absolute;
	z-index: -1;
	opacity: 0;
	margin: 10px 0 0 7px;
    &:checked + div {
        box-shadow:  var(--shadow);
        border-color: var(--hover-color);
    }
    &:hover + div {
        box-shadow:  var(--shadow);
    }

    + div {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 172px;
    height: 60px;
    padding: 12px 24px 12px 15px;
    border-radius: 15px;
    border: 1px solid var(--borders-color);
    background: var(--text-button-color);
    cursor: pointer;
    }
`;

export const Text = styled.p`
    color: var(--primary-text-color);
    font-size: 12px;
    line-height: 1.5; 
    letter-spacing: 0.3px;
    width: 93px;
    margin-left: 10.42px;
`;