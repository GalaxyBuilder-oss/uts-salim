import { useState } from "react";
import ChangeData from "../components/ChangeData";
import { Heart } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Info } from "lucide-react";
import { PenBox } from "lucide-react";
import { Search } from "lucide-react";

const initialData = [
  {
    id: 1,
    title: "Parasite",
    genre: "Thriller, Drama",
    duration: 132,
    year: 2020,
    synopsis:
      "A poor family, the Kims, con their way into becoming the servants of a rich family, the Parks. But their easy life gets complicated when their deception is threatened with exposure.",
    poster:
      "https://cdn1-production-images-kly.akamaized.net/36erhjY2QjOUVM07pM1OoWsTPVA=/41x60:631x847/640x853/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3039297/original/018279700_1580696032-Parasite__7_.jpg",
    like: false,
  },
  {
    id: 2,
    title: "Tenet",
    genre: "Action, Sci-Fi",
    duration: 150,
    year: 2020,
    synopsis:
      "Armed with only one word, Tenet, and fighting for the survival of the world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    poster:
      "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1608177229/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1__qjn50w.jpg",
    like: false,
  },
  {
    id: 3,
    title: "Soul",
    genre: "Animation, Adventure, Comedy",
    duration: 100,
    year: 2020,
    synopsis:
      "A musician who has lost his passion for music is transported out of his body and must find his way back with the help of an infant soul learning about herself.",
    poster:
      "https://cdn1-production-images-kly.akamaized.net/sHYgSSf5h2VPiZqTW-PzfxwqitY=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3333665/original/021254200_1608952775-Soul_0.jpg",
    like: false,
  },
];
const storedData = localStorage.getItem("movies");
const Film = () => {
  const [movies, setMovies] = useState(
    storedData ? JSON.parse(storedData) : initialData
  );
  const [editIndex, setEditIndex] = useState(null);
  const [newMovie, setNewMovie] = useState(null);
  const [sortBy, setSortBy] = useState("id");
  const [orderBy, setOrderBy] = useState("asc");
  const [query, setQuery] = useState("");

  const deleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    localStorage.setItem("movies", JSON.stringify(updatedMovies));
  };
  const editMovie = (movie) => {
    setNewMovie(movie);
    setEditIndex(movie.id);
  };
  const handleLike = (UpdatedMovie) => {
    setMovies(
      movies.map((movie) =>
        movie.id === UpdatedMovie.id ? { ...movie, like: !movie.like } : movie
      )
    );
  };

  const filteredData = movies
    .sort((a, b) => {
      if (orderBy === "asc") return a[sortBy] < b[sortBy] ? -1 : 1;
      else return a[sortBy] > b[sortBy] ? -1 : 1;
    })
    .filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()));

  const handleInfo = (movie) => {
    alert(
      `Judul: ${movie.title}\nGenre: ${movie.genre}\nDurasi: ${movie.duration} Menit\nSinopsis: ${movie.synopsis}`
    );
  };

  return (
    <main className="p-4">
      <div className="flex justify-between my-2 items-center">
        <div>
          <button
            onClick={() => setNewMovie({})}
            className="flex gap-2 items-center bg-yellow-300 text-gray-800 p-2 rounded-lg"
          >
            Tambah
          </button>
        </div>
        <div className="flex items-center shadow appearance-none border border-l-0 rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search"
            className="w-full"
          />
          <Search />
        </div>
        <div>
          Urut Berdasarkan
          <select
            name="sort"
            defaultValue={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="id">Normal</option>
            <option value="title">Nama</option>
            <option value="year">Tahun</option>
          </select>
          <select
            name="order"
            defaultValue={sortBy}
            onChange={(e) => setOrderBy(e.target.value)}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-4">
        {movies &&
          filteredData.map((movie) => (
            <div
              key={movie.id}
              className="w-1/4 relative flex flex-col items-center bg-slate-300 p-4 rounded-xl gap-3"
            >
              <h1 className="font-bold text-xl">{movie.title}</h1>
              <div className="absolute right-4">
                <button
                  key={movie.id}
                  name={movie.name}
                  onClick={() => handleLike(movie)}
                >
                  <Heart
                    className={movie.like ? "fill-red-600" : "fill-white"}
                  />
                </button>
              </div>
              <div>
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="w-full h-60 object-fill"
                />
              </div>
              <p>Tahun Rilis: {movie.year}</p>
              <div className="flex justify-between gap-4">
                <button
                  onClick={() => editMovie(movie)}
                  className="flex gap-2 items-center bg-blue-700 text-slate-100 p-2 rounded-lg"
                >
                  <PenBox /> Edit
                </button>
                <button
                  onClick={() => handleInfo(movie)}
                  className="flex gap-2 items-center bg-gray-600 text-slate-100 p-2 rounded-lg"
                >
                  <Info /> Informasi
                </button>
                <button
                  onClick={() => deleteMovie(movie.id)}
                  className="flex gap-2 items-center bg-red-600 text-slate-100 p-2 rounded-lg"
                >
                  <Trash2 />
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
      <ChangeData
        movies={movies}
        setMovies={setMovies}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
        newMovie={newMovie}
        setNewMovie={setNewMovie}
      />
    </main>
  );
};

export default Film;
