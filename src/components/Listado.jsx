import React from "react";
import swal from "@sweetalert/with-react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import '../css/listado.css'




const Listado = () => {

    let token = localStorage.getItem('token'); /*el get item es para solicitar que me devuelva la informacion q esta almacenada en el token*/

    const [movies, setMovies] = useState([])

    useEffect(() => {
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=159db9ddde721e480f67c8a521701832&language=es-Es&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';

        axios.get(endPoint)
            .then(res => { setMovies((res.data.results)) 
            })
            .catch(error=>{
                swal(<h2>Tuvimos un problema</h2>)

            })

    }, [setMovies]);
    console.log(movies)
    return (
        <>{/*sino tengo el token entncs redirecciono*/}
            {!token && <Redirect to='/' />}
            <ul className="container-card">{
                movies.map(
                    (movie, idx) => {
                        return (
                            <div key={idx} className="col-3">
                                {/*estructura base*/}
                                <div className="card my-4" >
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="..."  />
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p className="card-text">{movie.overview.substring(0, 100)}...</p>
                                        <Link to={`/Detail${movie.id}`} className="btn btn-primary">Detail somewhere</Link>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                )


            }
            </ul>
        </>
    );
};

export default Listado;