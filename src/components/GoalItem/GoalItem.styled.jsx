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
    &:hover + div,
    :focus + div {
        box-shadow:  var(--shadow);
    }

    + div {
        display: flex;
    align-items: center;
    justify-content: start;     
    width: 172px;
    height: 172px;

    border-radius: 20.848px;
    border: 1.042px solid var(--borders-color);
    background-image: url( ${props => props.src }), var(--grad);
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    cursor: pointer;
    }
`;

export const Text = styled.p`
    color: var(--primary-text-color);
    font-size: 16.679px;
    font-weight: 500;
    line-height: 1.37; 
    letter-spacing: 0.208px;
    width: 83px;
    margin-left: 10.42px;
`;