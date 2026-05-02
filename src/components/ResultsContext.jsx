import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();

const baseUrl = {
  search: {
    url: "https://google-search74.p.rapidapi.com",
    options: {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3e18e82d8emsh1748de9059c7180p1dbee4jsn1938946c6a76",
        "x-rapidapi-host": "google-search74.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    },
  },
  news: {
    url: "https://google-news-api1.p.rapidapi.com",
    options: {
      method: "GET",
      headers: {
        "x-rapidapi-key": "3e18e82d8emsh1748de9059c7180p1dbee4jsn1938946c6a76",
        "x-rapidapi-host": "google-news-api1.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    },
  },
  videos: {
    url: "https://www.googleapis.com/youtube/v3",
    options: {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    },
  },
  images: {
    url: "https://api.pexels.com/v1",
    options: {
      method: "GET",
      headers: {
        Authorization: "1EcK0xmLdZEiO7P0OsfTEpE6zse0jFi0fAykIvBwkTT9VjEbAzeAUNfD",
      },
    },
  },
};

const ResultsContext = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("Elon Musk");
  const [error, setError] = useState(null);

  const getResults = async (pathUrl, type) => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${pathUrl.url}${type}`, pathUrl.options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setResults(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ResultContext.Provider
      value={{
        results,
        loading,
        searchTerm,
        setSearchTerm,
        error,
        getResults,
        baseUrl,
      }}>
      {children}
    </ResultContext.Provider>
  );
};

export default ResultsContext;
export const useResultContext = () => useContext(ResultContext);