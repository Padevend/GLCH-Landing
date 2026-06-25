import { useEffect } from "react";
import { useState } from "react";

const cacheStore = {};

export function useSmartQuery(key, fetchFn){
    const [data, setData] = useState(cacheStore[key] || null);
    const [isLoading, setIsLoading] = useState(!cacheStore[key]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        if(cacheStore[key]){
            setIsFetching(true);

            fetchFn().then(freshData => {
                cacheStore[key] = freshData;
                if(isMounted){
                    setData(freshData);
                    setIsFetching(false);
                }
            }).catch(err => {
                if(isMounted){
                    setError(err);
                    setIsFetching(false);
                }
            });

            return;
        }

        setIsLoading(true);

        fetchFn().then(fetchedData => {
            cacheStore[key] = fetchedData;
            if(isMounted){
                setData(fetchedData);
                setIsLoading(false);
            }
        }).catch(err => {
            if(isMounted){
                setError(err);
                setIsLoading(false);
            }
        });

        return () => {
            isMounted = false;
        }
    }, [key]);

    return { data, isLoading, isFetching, error };
}