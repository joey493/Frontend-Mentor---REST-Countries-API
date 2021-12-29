import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'
import { getCountry } from '../countriesApi'

function Country() {
    const [country, setCountry] = useState({})
    const { id } = useParams()

    const getByCode = (code) => {
        try {
            getCountry(code)
                .then(res => setCountry(res))
        } catch (err) {
            console.error('error found on getByCode: ', err)
        }

    }

    useEffect(() => {
        getByCode(id)
    }, [id])

    const { name, flags, population, region,
        capital, nativeName, subregion, topLevelDomain,
        borders, currencies, languages } = country
    console.log(country)
    return (
        <section className="country container">
            <Link className='btn txt-white bg-dark-blue flex items-center' to='/'><BiLeftArrowAlt />Back</Link>
            {Object.keys(country).length !== 0 && (
                <div className='flex'>
                    {/* flag */}
                    <div>
                        <img src={flags.svg} alt='flag' />
                    </div>
                    {/* content */}
                    <div className='content flow txt-white'>
                        <h2 className='fw-bold fs-500 '>{name}</h2>
                        {/* details */}
                        <section className='details flex'>
                            {/* first sec */}
                            <div className="first">
                                <p className='fs-300'><span className='title txt-white'>Native Name: </span>{nativeName}</p>
                                <p className='fs-300'><span className='title txt-white'>Population: </span>{population}</p>
                                <p className='fs-300'><span className='title txt-white'>Region: </span>{region}</p>
                                <p className='fs-300'><span className='title txt-white'>Sub Region: </span>{subregion}</p>
                                <p className='fs-300'><span className='title txt-white'>Capital: </span>
                                    {capital ? capital
                                        : 'Unknow'
                                    }</p>
                            </div>
                            {/* second sec */}
                            <div className="second">
                                <p className='fs-300'><span className='title txt-white'>Top Level Domain: </span>
                                    {topLevelDomain.map(domain => (
                                        <span key={domain}>{domain}</span>
                                    ))}</p>
                                <p className='fs-300'><span className='title txt-white'>Currencies: </span>
                                    {currencies
                                        ? currencies.map(currency => (
                                            <span key={currency.code}>{currency.code}</span>
                                        ))
                                        : "don't have"
                                    }</p>
                                <p className='fs-300'><span className='title txt-white'>Languages: </span>
                                    {languages.map(language => (
                                        <span key={language.name}>{language.name}</span>
                                    ))}</p>
                            </div>
                        </section>
                        {/* borders */}
                        {borders &&
                            <div className="borders flex items-center">
                                <h3 className='fs-300 fw-semi-bold'>Border Countries: </h3>
                                {borders.map(border => (
                                    <Link to={`/${border}`} className='border' key={border}>{border}</Link>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            )}
        </section>
    )
}

export default Country
