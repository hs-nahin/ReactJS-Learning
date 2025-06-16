import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [comments, setComments] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 10;

  const getComments = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=${limit}`);
      const data = await response.json();
      setComments(prev => [...prev, ...data]);
    } catch (error) {
      console.error("Error fetching comments:", error);
      setErrorMsg("Failed to load comments.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getComments();
  }, [page]);

  const handleRetry = () => {
    getComments();
  };

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Comments</h1>

      {errorMsg && (
        <div className="text-red-500 mb-4">
          {errorMsg}
          <button onClick={handleRetry} className="ml-4 btn btn-sm btn-error">
            Retry
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {comments.map(comment => (
          <div key={comment.id} className="border-blue-50 p-4 rounded shadow bg-blue-100">
            <h2 className="font-semibold">{comment.name}</h2>
            <p className="text-sm text-gray-600 mb-2">{comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>

      {loading && (
        <div className="mt-4 text-center">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      )}

      {!loading && !errorMsg && (
        <div className="mt-6 text-center">
          <button
            onClick={handleLoadMore}
            className="btn btn-primary cursor-pointer bg-blue-300 text-black p-5"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
