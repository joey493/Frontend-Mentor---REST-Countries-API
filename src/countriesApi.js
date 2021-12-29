const api = 'https://restcountries.com/v2';

export const getAll = () => (
    fetch(`${api}/all`)
        .then(res => res.json())
        .then(data => data)
)

export const searchByName = (str) => ( 
    fetch(`${api}/name/${str}`)
    .then(res => res.json())
    .then(data => data)
)

export const getCountry = (code) => ( 
    fetch(`${api}/alpha/${code}`)
    .then(res => res.json())
    .then(data => data)
)