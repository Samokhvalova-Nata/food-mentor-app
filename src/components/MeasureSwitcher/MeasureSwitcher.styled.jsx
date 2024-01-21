import styled from '@emotion/styled';

export const MeasureContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 360px;
    border-radius: 10px;
    border: 1px solid var(--accent-color);
`;

export const Label = styled.label`
    width: 50%;
`;

export const InputMeasure = styled.input`
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:checked + div {
        background: rgba(95, 203, 57, 0.2);
    }
    &:hover + div,
    :focus + div {
        // background: rgba(95, 203, 57, 0.2);
        box-shadow:  var(--shadow);
    }

+ div {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    height: 32px;
    border-top-left-radius: ${props => (props.option ? "10px" : "0px")};
    border-bottom-left-radius: ${props => (props.option ? "10px" : "0px")};
    border-top-right-radius: ${props => (!props.option ? "10px" : "0px")};
    border-bottom-right-radius: ${props => (!props.option ? "10px" : "0px")};
}
`;

export const Text = styled.p`
    text-align: center;
    color: var(--accent-color);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 2.5px;
    text-transform: uppercase;
`;