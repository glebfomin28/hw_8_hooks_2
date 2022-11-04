import React from 'react';
import {useJsonFetch} from "../App";


export const Error = () => {
    const {data, error, loading} = useJsonFetch("http://localhost:7070", "error" );

    return (
        <>
            {error? <div>Error 500</div> : <div>{JSON.stringify(data)}</div>}
        </>
    );
}
