import { useState, useCallback } from "react";

const useHttp = () => {
    const [process, setProcess] = useState('waiting');

    const onRequest = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        setProcess('loading');

        try {
            const response = await fetch(url, {method, body, headers});

            if(!response.ok) {
                throw new Error('Something went wrong');
            }

            const data = await response.json();

            return data;

        } catch(e) {
            setProcess('error');
        }      
    }, []);

    const clearError = useCallback(() => setProcess('loading'), []);

    return {
        onRequest,
        clearError,
        process,
        setProcess
    }
}

export default useHttp;