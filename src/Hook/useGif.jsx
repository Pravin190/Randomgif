import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';




const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(tag) {

  

    const [gif,setgif] = useState("");

    const [loading,setLoading] = useState(false);

      async function fetchData(tag) {

        setLoading(true);

        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);

        const output = data.data.images.downsized.url;

        setgif(output);

        setLoading(false);
    
    }

    useEffect(() => {

        fetchData('car');

    },[])


    return {gif,loading,fetchData}

}

export default useGif