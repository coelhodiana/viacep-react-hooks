import React, { useState, useEffect } from 'react';

const InputCep = () => {
    const [ cep, setCep] = useState();
    const [addressData, setAddressData] = useState({});

    const getAddress = () =>{
      console.log(cep)
      async function fetchData() {
        const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
  
        setAddressData(data);
      }
      fetchData(cep);
      
    }

    useEffect(() => {
      getAddress();
    }, []);


    return ( 
        <>
                <form>
                    <label>CEP</label>
                    <input type="number" placeholder="CEP" onChange={e => {
        setCep(e.target.value)
      }}></input>
                    <button onClick={ getAddress }>Buscar</button>
                </form>
                <p>
                  CEP: {addressData.cep} <br/>
                  CIDADE: {addressData.localidade} <br/>
                  UF: {addressData.uf} <br/>
                </p>
        </>
     );
}
 
export default InputCep;