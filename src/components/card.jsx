import React from 'react'
import { Link } from 'react-router-dom'

function Card({ data }) {
    const { name, flags, population, region, capital, alpha3Code } = data

    return (
        <Link to={`/${alpha3Code}`} className="card bg-dark-blue">
            <div className='flag' style={{ backgroundImage: `url(${flags.svg})` }} />
            <div>
                <h3 className='fw-bold fs-400 txt-white'>{name}</h3>
                <p className='fs-300'><span className='fw-bold txt-white'>Population: </span>{population}</p>
                <p className='fs-300'><span className='fw-bold txt-white'>Region: </span>{region}</p>
                <p className='fs-300'><span className='fw-bold txt-white'>Capital: </span>{capital}</p>
            </div>
        </Link>
    )
}

export default Card
