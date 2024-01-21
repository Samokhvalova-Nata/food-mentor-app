import { BannerContainer, Text, Title } from './Banner.styled';

const Banner = ({ title, text }) => {
    return (
        <BannerContainer>
            <Title>{title}</Title>
            <Text>{text}</Text>
        </BannerContainer>
    );
};

export default Banner;