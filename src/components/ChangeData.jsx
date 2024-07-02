/* eslint-disable react/prop-types */

const ChangeData = ({
  movies,
  setMovies,
  editIndex,
  setEditIndex,
  newMovie,
  setNewMovie,
}) => {
  const addMovie = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedMovies = movies.map((movie) =>
        movie.id === newMovie.id ? newMovie : movie
      );
      setMovies(updatedMovies);
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
      setEditIndex(null);
    } else {
      const updatedMovies = [...movies, { id: movies.length + 1, ...newMovie }];
      setMovies(updatedMovies);
      localStorage.setItem("movies", JSON.stringify(updatedMovies));
    }
    setNewMovie(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevState) => ({
      ...prevState,
      [name]: name === "year" || name === "duration" ? Number.parseInt(value) : value,
    }));
  };
  return (
    <>
      {newMovie && (
        <div className="w-full flex flex-col items-center justify-center h-full fixed left-0 bg-gray-700 backdrop-blur-md top-0 bg-opacity-40 text-white">
          <h2 className="font-bold text-2xl">
            {editIndex !== null ? "Edit Movie" : "Add a new movie"}
          </h2>
          <form
            onSubmit={addMovie}
            className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-wrap w-1/2"
          >
            <div className="mb-4 p-2">
              <label
                htmlFor="title"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Judul
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                value={newMovie.title}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 p-2">
              <label
                htmlFor="genre"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Genre
              </label>
              <input
                type="text"
                name="genre"
                id="genre"
                placeholder="Genres"
                value={newMovie.genre}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 p-2">
              <label
                htmlFor="duration"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Durasi
              </label>
              <input
                type="number"
                name="duration"
                id="duration"
                placeholder="100"
                value={newMovie.duration}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 p-2">
              <label
                htmlFor="year"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Tahun
              </label>
              <input
                type="number"
                name="year"
                id="year"
                placeholder="Year"
                value={newMovie.year}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4 p-2">
              <label
                htmlFor="synopsis"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Sinopsis
              </label>
              <textarea
                name="synopsis"
                id="synopsis"
                placeholder="Sinopsis"
                value={newMovie.synopsis}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                rows="4"
              ></textarea>
            </div>
            <div className="mb-6 p-2">
              <label
                htmlFor="poster"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                URL Poster
              </label>
              <input
                type="text"
                name="poster"
                id="poster"
                placeholder="Poster URL"
                value={newMovie.poster}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex justify-around items-center mb-4 p-2">
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {editIndex !== null ? "Update" : "Add"} Movie
              </button>
              <button
                onClick={() => setNewMovie(null)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default ChangeData;
