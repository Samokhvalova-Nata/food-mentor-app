import { MainButton } from "./Button.styled";

const Button = ({ text, handler, disabled=false }) => {
    return (
        <MainButton type="button" onClick={handler} disabled={disabled}>{text}</MainButton>
    );
};

export default Button;