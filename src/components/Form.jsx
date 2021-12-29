import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Form({ select, input }) {
    return (
        <form className='flex items-center txt-white'>
            <div className="search flex items-center bg-dark-blue">
                <FaSearch className='fs-400 fw-light' />
                <input onChange={input} type="text" placeholder='Search for a country...' />
            </div>
            <select name='region' onChange={select}>
                <option value="none">Find by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </form>
    )
}

export default Form
