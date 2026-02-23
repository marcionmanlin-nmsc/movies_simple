// Simple movie data for demo
const movies = [
  {
    title: "Tron: Ares",
    year: 2025,
    genre: "Sci-Fi, Action",
    description: "The next chapter in the Tron saga, following a new digital adventure.",
    poster: "thumbnails/tron_ares.jpg"
  },
  {
    title: "F1",
    year: 2025,
    genre: "Sport, Drama",
    description: "A dramatic look into the world of Formula 1 racing.",
    poster: "thumbnails/f1.jpg"
  },
  {
    title: "Train Dreams",
    year: 2025,
    genre: "Drama",
    description: "A logger and railroad worker leads a life of unexpected depth and beauty in early 20th-century America.",
    poster: "thumbnails/train_dreams.jpg"
  },
  {
    title: "Lilo & Stitch",
    year: 2026,
    genre: "Animation, Family",
    description: "A young girl's close encounter with the galaxy's most wanted extraterrestrial.",
    poster: "thumbnails/lilo_stitch.jpg"
  },
  {
    title: "Heart Eyes",
    year: 2026,
    genre: "Romance, Comedy",
    description: "A romantic comedy about unexpected love.",
    poster: "thumbnails/heart_eyes.jpg"
  }
];

const movieGrid = document.getElementById('movieGrid');

movies.forEach(movie => {
  const card = document.createElement('div');
  card.className = 'movie-card';
  card.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title} poster">
    <div class="info">
      <div class="title">${movie.title} (${movie.year})</div>
      <div class="desc">${movie.description}</div>
    </div>
  `;
  movieGrid.appendChild(card);
});
