import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {loading && <p className='animate__animated animate__flash'>'Cargando...'</p>}
            <div className='card-grid'>
                {
                    data.map(img => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}
