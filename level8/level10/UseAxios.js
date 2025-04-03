import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';


const cache = new Map();

const useAxios = (url, config = {}, forceRefresh = false) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const cancelTokenSource = useRef(null);

   
    const fetchData = useCallback(async () => {
        setLoading(true);
        setError(null);

        if (cancelTokenSource.current) {
            cancelTokenSource.current.cancel('Request canceled due to new request or unmounting.');
        }

        cancelTokenSource.current = axios.CancelToken.source();

        if (cache.has(url) && !forceRefresh) {
            setData(cache.get(url));
            setLoading(false);
            return;
        }

        try {
            const response = await axios.get(url, {
                ...config,
                cancelToken: cancelTokenSource.current.token,
            });

            cache.set(url, response.data);
            setData(response.data);
        } catch (err) {
            if (!axios.isCancel(err)) {
                setError('Failed to fetch data.');
            }
        } finally {
            setLoading(false);
        }
    }, [url, config, forceRefresh]); // 

    useEffect(() => {
        fetchData(); // 
        return () => {
            if (cancelTokenSource.current) {
                cancelTokenSource.current.cancel();
            }
        };
    }, [fetchData]); 

    const refresh = () => {
        cache.delete(url);
        fetchData();
    };

    return { data, loading, error, refresh };
};

export default useAxios;
