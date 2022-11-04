import React, {useEffect, useState} from 'react';
import './App.css';
import {Data} from "./components/Data";
import {Loading} from "./components/Loading";
import {Error} from "./components/Error";


export const useJsonFetch = (url, opts) => {

  const [data, setData] = useState({})
  const [error, setError] = useState(false)
  const [loading , setLoading ] = useState(false)

  useEffect( () => {
    setLoading(true)
    fetch(`${url}/${opts}`)
        .then(res => res.ok ? res.json() : setError(true))
        .then(json => {
          setData(json)
          setLoading(false)
        })

  }, [url, opts])

  return {data, error, loading}
}


function App() {
  return (
    <div>
      <Data/>
      <Loading/>
      <Error/>
    </div>
  );
}

export default App;
