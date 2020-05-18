import React from 'react';
import NavPanel from '../../components/navPanel/NavPanel'
import movieService, {IMoviesProps} from '../../services/movies.service';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles({
    table: {
        minWidth: '650px',
    },
    wyniki: {
        width: "500px",
        margin: "auto",
        textAlign: "center",
    },
    image: {
        left: "50%",
    },
    frame: {
        verticalAlign: "middle",
        display: "inline-block",
        height: "100%",
        border: "solid",
        margin: "10px",
        padding: "20px",
    },
    input: {
        margin: "10px",
        width: "300px",
        height: "35px",
        textAlign: "center",
    },
    div: {
        textAlign: "center",
    },
});


const SearchMovie = () => {
    const classes = useStyles();
    const [movies, setMovies] = React.useState<IMoviesProps | null>(null);
    const [movieToSearch, setMovieToSearch] = React.useState('');

    React.useEffect(() => {
        movieService.searchByName(movieToSearch).then(resp => {
            if (resp) {
                setMovies(resp);
            }
        });

        movieService.searchById('tt0848228');
    }, [movieToSearch]);


    return (
        <div>
            <NavPanel/>

            <div className={classes.div}>
                <input className={classes.input} placeholder="Enter movie name"
                       onChange={event => setMovieToSearch(event.target.value)}
                />
            </div>
            <hr></hr>

                <div className={classes.wyniki}>

                    {!!movies?.movies.length &&
                    movies?.movies.map(movie => (
                        <div className={classes.frame}>
                            <table>
                                <tr>
                                    <b>{movie.title}</b>
                                </tr>
                                <tr>
                                    <b>{movie.year}</b>
                                </tr>
                            <img className={classes.image} src={movie.poster}/>
                                </table>
                        </div>
                    ))
                    }
        </div>

</div>
)
    ;
};

export default SearchMovie;
