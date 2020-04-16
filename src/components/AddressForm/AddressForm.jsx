import React, {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap');

  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
  max-width: 700px;
  height: 600px;
  margin: 0 auto;
  text-align: center;
  font-height: 1.4rem;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
`

export const SearchArea = styled.div`
    padding: 60px;
    box-sizing: border-box;
`

export default function AddressForm(){
  const [cep, setCep] = useState()
  const [consulta, setConsulta] = useState({ })
  const [display, setDisplay] = useState(false)

  const getCepDetails = () =>{
    console.log(cep)
    axios
    .get(`http://viacep.com.br/ws/${cep}/json/`)
    .then(({ data }) => {
      setConsulta(data);
      setDisplay(true)
    })
    .catch(function(err) {
      console.error(err);
    })
  }
  
  return(
    <Container>
      <SearchArea>
        <h1>Consulta CEP</h1>
        <input
          type='text'
          onChange={e => {
            setCep(e.target.value)
          }}
        />
        <button onClick={getCepDetails}>Buscar</button>
      </SearchArea>
      { display &&
        <div>
          <div>
            <label>CEP: </label>
            <label>{consulta.cep}</label>
          </div>
        
          <div>
            <label>Logradouro: </label>
            <label>{consulta.logradouro}</label>
            
          </div>

          <div>
            <label>Bairro: </label>
            <label>{consulta.bairro}</label>
          </div>

          <div>
            <label>Localidade: </label>
            <label>{consulta.localidade}</label>
          </div>

          <div>
            <label>UF: </label>
            <label>{consulta.uf}</label>
          </div>

        </div>
      }    
    </ Container>
  )
}
