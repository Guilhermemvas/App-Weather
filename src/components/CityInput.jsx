
import { useState } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";

const InputWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const Input = styled.input`
    padding: 10px;
    font-size: 1rem;
`;

const Button = styled.button`
    padding: 10px;
    margin-left: 10px;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const CityInput = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        onSearch(city);
    }


  return (
    <InputWrapper>
        <Input
            type="text"
            placeholder="Digite o nome da cidade"
            value={city}
            onChange={(e) => {setCity(e.target.value)}}
        />
        <Button onClick={handleSearch}>Buscar</Button>
    </InputWrapper>
  )
}

CityInput.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

export default CityInput;