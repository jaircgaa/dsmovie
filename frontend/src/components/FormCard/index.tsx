import axios from "axios";
import MovieScore from "components/MovieScore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Movie } from "types/movie";
import { BASE_URL } from "utils/request";
import './styles.css';

type Props = {
    movieId: string;
}

function FormCard({ movieId } : Props) {

    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`).then(response =>
            setMovie(response.data));
    }, [movieId]);

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <MovieScore />
                <Link to={`/form/${movie?.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>

                </Link>
            </div>
        </div>
    );
}
export default FormCard;