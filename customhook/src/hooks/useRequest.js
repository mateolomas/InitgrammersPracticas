
import {useState, useEffect} from 'react';

import axios from 'axios'

const initialState = {
    data: undefined,
    loading: true,
    error: undefined
  }


function useRequest(){

const [requestData, setRequestData] = useState(initialState);

useEffect(() => {
  axios.get('http://localhost:3006/people')
    .then(response => {
      setRequestData({
        data: response.data,
        loading: false,
        error: undefined
      })
    })
    .catch(error => {
      setRequestData({
        data: undefined,
        loading: false,
        error: error
      })
    })}, [])

    return requestData;

}

export default useRequest;

