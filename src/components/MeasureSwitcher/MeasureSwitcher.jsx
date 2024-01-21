import { InputMeasure, Label, MeasureContainer, Text } from './MeasureSwitcher.styled';

const MeasureSwitcher = ({ handleUnit, unit }) => {

    const handleInputChange = e => {
        const { value } = e.target;
        localStorage.setItem("unit", JSON.stringify(value));
        if (value === "imperial") {
            handleUnit('imperial');
        } else {
            handleUnit('metric');
        }
    };

    return (
        <MeasureContainer>
            <Label>
                <InputMeasure type="radio" name="measure" value="imperial" option  
                checked={unit === "imperial"}
                onChange={ handleInputChange}/>
                <div>
                    <Text>Imperial</Text>
                </div>
            </Label>
            <Label>
                <InputMeasure type="radio" name="measure" value="metric" onChange={handleInputChange}
                    checked={unit === "metric"}/>
                <div>
                    <Text>Metric</Text>
                </div>
            </Label>
        </MeasureContainer>
    );
};

export default MeasureSwitcher;