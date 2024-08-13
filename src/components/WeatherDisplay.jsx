import styled from "styled-components"
import PropTypes from 'prop-types';


const WeatherWrapper = styled.div`
    text-align: center;
    margin-top: 20px;
`;

const Temperature = styled.p`
    font-size:1.5rem;
    margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;

const WeatherDisplay = ({weather}) => {
    if(!weather) return null;

    return (
        <WeatherWrapper>
            <Temperature>{weather.temp}°C</Temperature>
            <Description>{weather.description}</Description>
        </WeatherWrapper>
  )
}


WeatherDisplay.propTypes = {
    weather: PropTypes.shape({
      temp: PropTypes.number,
      description: PropTypes.string,
    }),
  };

export default WeatherDisplay