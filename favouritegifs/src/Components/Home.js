import React, { useState, useEffect } from 'react'
// import Gif from './Gif'
import { GetGifs, InsertFavouritesGifs } from '../Services/GetGifsServices'

export default function Home() {
    const [keyword, setKeyword] = useState('bart')
    const [gifs, setGifs] = useState([])


    // const [response, setResponse] = useState('')

    useEffect(function () {
        GetGifs(keyword)
            .then(gifs => setGifs(gifs))
    }, [keyword])


    const onInsert = (id, title, url) => {
        let gif = { id: id, title: title, url: url }
        InsertFavouritesGifs(gif)
        // .then(response => setResponse(response))
    }
    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Gifs Center</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Gifs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/myfavouritegifs">Mis Gifs Favoritos</a>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" value={keyword} onChange={(e) => setKeyword(e.target.value)} type="search" placeholder="Buscar Gifs" aria-label="Buscar Gifs" />
                        </form>
                    </div>
                </div>
            </nav>
            <section className="App-content">
                {gifs.length ? gifs.map(({ id, title, url }) =>
                    <div key={id}>
                        <br />
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" style={{ height: '250px' }} alt={title} src={url}></img>
                            <div className="card-body">
                                <h5 style={{ color: 'black' }} className="card-title">{id}</h5>
                                <h3 style={{ color: 'black' }} className="card-text">{title}</h3>
                                <button onClick={() => onInsert(id, title, url)} className="btn btn-primary">
                                    Me gusta
                                </button>
                            </div>
                        </div>
                    </div>
                ) :
                    <h2>No se encuntran resultados</h2>
                }

            </section>
        </div>
    )
}


