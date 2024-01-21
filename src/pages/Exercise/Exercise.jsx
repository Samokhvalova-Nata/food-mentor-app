import { Helmet } from "react-helmet";
import TopBar from "components/TopBar/TopBar";
import Banner from "components/Banner/Banner";
import ExerciseItem from "components/ExerciseItem/ExerciseItem";
import { ExerciseContainer, ExerciseOption, ExerciseOptionContainer, Text } from "./Exercise.styled";
import { activeGirl } from  '../../images';


const exerciseData = [{
    text: 'Hardly at all',
}, {
    text: 'Fitness 1-2 times a week',
}, {
    text: 'Fitness 3-5 times a week',
}, {
    text: 'Fitness 5-7 times a week',
}
];

const Exercise = () => {
    return (
            <>
                <Helmet>
                    <title>Exercise</title>
                </Helmet>
                <TopBar address={'behavior'}/>
                <ExerciseContainer>
                    <Banner title={'Physical exercise'} 
                    text={'Physical exercise means a lot for a woman who wants to lose kilos and works at the office'}/>
                    <Text>How active are you during the day?</Text>
                    <ExerciseOptionContainer>
                        <img src={activeGirl} alt="active-girl" width="173px"/>
                        <ExerciseOption>
                            {exerciseData.map(({text}) => (
                                <ExerciseItem key={text} text={text}/>
                            ))}
                        </ExerciseOption>
                    </ExerciseOptionContainer>
                </ExerciseContainer>
            </>
    );
};

export default Exercise;