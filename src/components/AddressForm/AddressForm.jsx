import React, { useState, useEffect } from 'react';

const AddressForm = () => {
    const [ address, setAddress] = useState([null]);

    useEffect(() => {
        async function fetchData() {
          // You can await here
          const response = await fetch('http://viacep.com.br/ws/04120110/json/');
          const data = await response.json();
    
          setAddress(data);
        }
        fetchData();
      }, []);


    return ( 
        <>
          <p>{address}</p>
        </>
     );
}
 
export default AddressForm;