import React from 'react';
import {useJsonFetch} from "../App";


export const Data = () => {
    const {data, error, loading} = useJsonFetch("http://localhost:7070", "data" );

    return <>
        {!error?
            <div>{JSON.stringify(data)}</div> : <div>Error!!!</div>
        }
    </>
}

