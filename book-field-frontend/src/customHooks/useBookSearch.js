import { useState } from 'react';

export function useBookSearch( searchParams ) {
    const [searchData, setSearchData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
    function search( searchParams ) {
        console.log("doing fetch request");
        const URL="https://www.googleapis.com/books/v1/volumes?q=" + searchParams;

        fetch(URL)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            setSearchData(data);
            console.log(data);
        })
        .catch((err) => {
            setError(err);
        })
        .finally(() => {
            setLoading(false)
        });
        
    }
    return {searchData, error, loading, search};
}