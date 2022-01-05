import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const abortCtrl = new AbortController();

    const fetchData = async () => {
      setIsPending(true)

      try {
        const res = await fetch(url, { signal: abortCtrl.signal})
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()

        setIsPending(false)
        setData(data)
        setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")
        } else {
          setIsPending(false)
          setError('Could not fetch data')
        }
      }
    }

    fetchData()

    return () => {
      abortCtrl.abort();
    }
  }, [url])

  return { data, isPending, error }
}