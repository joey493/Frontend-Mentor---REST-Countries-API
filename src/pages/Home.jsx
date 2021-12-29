import { useState } from 'react'

import { searchByName } from '../countriesApi'
import Card from '../components/card'
import Form from '../components/Form'

function Home({ countries }) {
    const [result, setResult] = useState([])

    const handleSelect = (e) => {
        e.target.value === 'none'
            ? setResult(countries)
            : setResult(countries.filter(country => country.region === e.target.value))
    }

    const handleInput = (e) => {
        const value = e.target.value

        if (value === '') setResult([])

        try {
            searchByName(value)
                .then(res => {
                    res.status === 404
                        ? setResult(res)
                        : setResult([...res])
                })
        } catch (err) {
            console.error('error found on searchByName: ', err)
        }
    }

    return (
        <main className='home'>
            <div className="container flow">
                <Form select={handleSelect} input={handleInput} />
                <div className="countries grid">
                    {result.status === 404
                        ? <div className='not-found txt-white'>
                            <h1 className='fw-bold'>{result.status}</h1>
                            <p>{result.message}</p>
                        </div>
                        : result.length === 0
                            ? countries.length !== 0 && countries.map((country) => (
                                <Card data={country} key={country.alpha3Code} />
                            ))
                            : result.map((country) => (
                                <Card data={country} key={country.alpha3Code} />
                            ))
                    }
                </div>
            </div>
        </main>
    )
}

export default Home
