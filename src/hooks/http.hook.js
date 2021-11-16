import { useState, useCallback } from "react";

const useHttp = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const onRequest = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
        setLoading(true);

        try {
            const response = await fetch(url, {method, body, headers});

            if(!response.ok) {
                throw new Error('Something went wrong');
            }

            const data = await response.json();
            setLoading(false);

            return data;

        } catch(e) {
            setLoading(false);
            setError(e.message);
        }      
    }, []);

    const clearError = useCallback(() => setError(null), []);

    return {
        error,
        loading,
        onRequest,
        clearError,
    }
}

export default useHttp;