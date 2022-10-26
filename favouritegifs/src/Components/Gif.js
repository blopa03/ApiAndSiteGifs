import React from 'react'


export default function Gif({ title, id, url }) {

    // const onInsert = (id, title, url) => {
    //     let gif = { id: id, title: title, url: url }
    //     InsertFavouritesGifs(gif)
    //         .then(response => console.log(response))
    // }
    // const onDelete = (id) => {
    //     DeleteFavouritesGifs(id)
    //         .then(response => console.log(response))
    // }
    return (
        <div>
            <br />
            <div className="card" style={{ width: '18rem' }}>
                <img className="card-img-top" alt={title} src={url}></img>
                <div className="card-body">
                    <h5 style={{ color: 'black' }} className="card-title">{id}</h5>
                    <p style={{ color: 'black' }} className="card-text">{title}</p>
                    {/* <button onClick={() => onInsert(id, title, url)} className="btn btn-primary">
                        Me gusta
                    </button>
                    <button onClick={() => onDelete(id)} className="btn btn-danger">
                        Eliminar
                    </button> */}
                </div>
            </div>
        </div >
    )
}
