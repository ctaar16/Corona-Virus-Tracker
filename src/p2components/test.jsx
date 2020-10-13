function Options(props) {
    const [popEndpoint, fetchPopEndpoint] = useState([]);
    
   
   
    useEffect(() => {
        const popularMovies = async () => {
            const popularMoviesEndpoint = await axios.get(
                `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
            );
            fetchPopEndpoint(popularMoviesEndpoint.data.results.slice(0, 10));
        };
        popularMovies();
    }, []);
    console.log(popEndpoint)
    const handleSubmit = async (movie) => {
        let image = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        const fields = {
            title: movie.title,
            poster: image,
            userRating: movie.vote_average,
        };
       
       
       
       
       
       
        const airTableURL = `https://api.airtable.com/v0/${process.env.
            REACT_APP_AIRTABLE_BASE}/list`
        await axios.post(airTableURL, { fields }, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
            },
        });
        // props.setFetchReviews(!props.setFetchReviews);
    }
    console.log(popEndpoint)
    const imageURL = `https://image.tmdb.org/t/p/w500`;
    return (
        popEndpoint.map((movie) => (
            <div key={movie.id}>
                <img src={imageURL + movie.poster_path} alt={"poster for" + movie.title} /> <br />
                <p className="title">{movie.title} <br /></p>
                <p className="plotSummary">{movie.overview} <br /></p>
                <p className="userScore" >User ratings: {movie.vote_average}/10</p>
                <button onClick={() => handleSubmit(movie)}>Add to My List!</button>
            </div>
        ))
    );
}
export default Options;