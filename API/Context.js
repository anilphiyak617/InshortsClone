import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI, getSourceAPI } from "./api";

export const NewsContext = createContext();

const Context = ({ children }) => {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState("general");
    const [source, setSource] = useState();
    const [index, setIndex] = useState(1);
    const [darkTheme, setDarkTheme] = useState(true);
    const fetchNews = async (reset = category) => {
        try {
            const { data } = await axios.get(getNewsAPI(reset)); // Axios automatically converts response/json to JS Objects
            setNews(data);
            setIndex(1);
        }
        catch {
            console.log(error);
        }
    }

    const fetchNewsFromSource = async () => {
        try {
            const { data } = await axios.get(getSourceAPI(source));
            setNews(data);
            setIndex(1);
        }
        catch
        {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchNews();
    }, [category])

    useEffect(() => {
        fetchNewsFromSource();
    }, [source])

    return <NewsContext.Provider value={{ news, index, setIndex, category, setCategory, source, setSource, fetchNews, darkTheme, setDarkTheme }}>
        {children}
    </NewsContext.Provider>
}

export default Context;