import React from 'react'
import { Link } from 'react-router-dom'
import Test1 from './Test1'
import Test2 from './Test2'

function Test() {
    return (
        <>
            <Link to="/test/1"><Test1 /></Link>
            <br />
            <Link to="/test/2"><Test2 /></Link>
            <br />
        </>
    )
}

export default Test