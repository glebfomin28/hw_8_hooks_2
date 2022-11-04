import React from 'react';
import {useJsonFetch} from "../App";


export const Loading = () => {
    const {data, error, loading} = useJsonFetch("http://localhost:7070", "loading" );

    return (
        <>
            {loading? <div>Загрузка ...</div> : <div>Загрузка завершена</div>}
        </>
    );
}
