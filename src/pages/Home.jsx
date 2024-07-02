import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-gray-900">
      <h1 className="text-5xl font-bold mb-8">Welcome to PUB-Flix</h1>
      <p className="text-xl mb-4">Explore the latest movies and discover your favorites.</p>
      <Link to="/film" className="bg-slate-300 text-gray-900 px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition duration-300">Explore Movies</Link>
    </div>
  );
};

export default Home;
