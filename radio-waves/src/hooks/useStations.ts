import { Station } from 'radio-browser-api';
import { useState, useEffect } from 'react';

type FetchData = {
  stations: Station[];
  isLoading: boolean;
  error: Error | null;
};

export const useStations = (url: string): FetchData => {
  const [stations, setStations] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  /* To be used when https call is fixed

  let api: RadioBrowserApi;
  api = new RadioBrowserApi('My Radio App');

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const stationsData = await api.searchStations({
          language: 'english',
          tag: selectedGenre,
          limit: 50,
        });
        setStations(stationsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStations();
  }, [api, selectedGenre]);
  */

  useEffect(() => {
    const fetchData = async () => {
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
    };

    fetchData();

    return () => {
      // Cleanup function if needed
    };
  }, [url]);

  return { stations, isLoading, error };
};