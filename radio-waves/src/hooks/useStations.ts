import { useState, useEffect, useCallback } from 'react';
import { Station } from 'radio-browser-api';

type FetchData = {
  stations: Station[];
  isLoading: boolean;
  error: Error | null;
};

export const useStations = (url: string): FetchData => {
  const [stations, setStations] = useState<Station[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setStations(jsonData);
      setIsLoading(false);
    } catch (error: any) {
      setError(error);
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { stations, isLoading, error };
};
