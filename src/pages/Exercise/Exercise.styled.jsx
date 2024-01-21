import styled from '@emotion/styled';

export const ExerciseContainer = styled.main`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
`;

export const Text = styled.p`
    color: var(--primary-text-color);
    text-align: center;
    font-weight: 700;
    line-height: 1.71;
    letter-spacing: 0.2px;
`;

export const ExerciseOption = styled.div`
    width: 172px;
    height: 365px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
`;

export const ExerciseOptionContainer = styled.div`
    display: flex;
    gap: 15px;
    margin: 15px;
`;