import { useState, useEffect } from 'react';
import axios from 'axios';
export type ApiResponse = {
    userId: number;
    id: number;
    title: string;
  };
function useApiCall(url:string) {
  const [data, setData] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
      setLoading(true)
      setData([]);
      axios.get(url)
      .then(res => {
        setData(res.data)
        setLoading(false);
      })
      .catch(err => {
          setLoading(false)
          setError(true)
      })
  }, [url])
  return { data, loading, error }
}

export default useApiCall;