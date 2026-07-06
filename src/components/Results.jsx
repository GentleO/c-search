import React, { useEffect } from "react";
import { useResultContext } from "./ResultsContext";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { results, getResults, loading, error, searchTerm, baseUrl } = useResultContext();

  useEffect(() => {
    if (searchTerm) {
      if (location.pathname === "/videos") {
        getResults(baseUrl.videos, `/search?part=snippet&q=${searchTerm}&type=video&maxResults=100&key=AIzaSyD3jzvNUKXbSWU6bWj7gu3SLjPimj8EXrw`);
      } else if (location.pathname === "/images") {
        getResults(baseUrl.images, `/search?query=${searchTerm}&per_page=80`);
      } else if (location.pathname === "/news") {
        getResults(baseUrl.news, `/search`);
      } else {
        getResults(baseUrl.search, `/?query=${searchTerm}&limit=100&related_keywords=true`);
      }
    }
  }, [searchTerm, location.pathname]);

  if (loading) return (
    <div className="flex items-center justify-center min-h-100px">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-600"></div>
    </div>
  );

  if (error) return (
    <div className="flex items-center justify-center min-h-100px">
      <p className="text-red-500 text-center">{error}</p>
    </div>
  );

  switch (location.pathname) {
    case "/search":
      return (
        <div className="flex flex-col gap-4 py-4">
          {results?.results?.map((result, index) => (
            <div key={index} className="p-4 rounded-xl bg-white dark:bg-violet-900 shadow-sm hover:shadow-md transition-shadow duration-200">
              <a
                href={result.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group">
                <p className="text-xs text-green-700 dark:text-green-400 mb-1">{result.url}</p>
                <p className="text-lg font-semibold text-violet-700 dark:text-violet-300 group-hover:underline">
                  {result.title}
                </p>
              </a>
              <p className="text-sm text-gray-600 dark:text-violet-200 mt-2 leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      );

    case "/images":
      return (
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 py-4">
          {results?.photos?.map((result) => (
            <div key={result.id} className="mb-4 break-inside-avoid rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
              <img
                src={result.src.medium}
                alt={result.alt}
                className="w-full object-cover"
              />
              <div className="p-2 bg-white dark:bg-violet-900">
                <p className="text-xs text-gray-500 dark:text-violet-300">{result.photographer}</p>
              </div>
            </div>
          ))}
        </div>
      );

    case "/videos":
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
          {results?.items?.map((result) => (
            <div key={result.id.videoId} className="rounded-xl overflow-hidden bg-white dark:bg-violet-900 shadow-sm hover:shadow-md transition-shadow duration-200">
              <iframe
                src={`https://www.youtube.com/embed/${result.id.videoId}`}
                width="100%"
                height="200px"
                allowFullScreen
                title={result.snippet.title}
                className="w-full"
              />
              <div className="p-3">
                <p className="font-semibold text-sm text-gray-800 dark:text-violet-100 line-clamp-2">
                  {result.snippet.title}
                </p>
                <p className="text-xs text-gray-500 dark:text-violet-300 mt-1">
                  {result.snippet.channelTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      );

    case "/news":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
          {results?.news?.map(({ title, link, source, description, date }, index) => (
            <div key={index} className="p-4 rounded-xl bg-white dark:bg-violet-900 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-2">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-700 dark:text-violet-300 font-semibold hover:underline line-clamp-2">
                {title}
              </a>
              <p className="text-xs font-medium text-violet-500 dark:text-violet-400">{source}</p>
              <p className="text-sm text-gray-600 dark:text-violet-200 line-clamp-3">{description}</p>
              <p className="text-xs text-gray-400 dark:text-violet-400 mt-auto">{date}</p>
            </div>
          ))}
        </div>
      );

    default:
      break;
  }

  return (
    <div className="flex items-center justify-center min-h-100px">
      <p className="text-gray-500 dark:text-violet-300">No results found.</p>
    </div>
  );
};

export default Results;