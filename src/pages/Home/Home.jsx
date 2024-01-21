import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Button from "components/Button/Button";
import { HomeContainer, Text, Title } from "./Home.styled";


const Home = () => {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/goal')
    };

    return (
        <>
            <Helmet>
                <title>Food Mentor</title>
            </Helmet>
            <HomeContainer>
                <Text>Welcome to</Text>
                <Title>Food Mentor</Title>
            <Button text={'Get started'} handler={handleStart}/>
            </HomeContainer>
        </>    
    );
};

export default Home;
