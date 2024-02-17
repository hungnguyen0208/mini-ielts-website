import React from 'react'
import Test1 from './Test1'
import Test2 from './Test2'
import { useParams } from 'react-router-dom';

function SingleTest() {

    const { id } = useParams();

    const getPageBaseOnId = id => {
        switch (id) {
            case "1":
                return <Test1 />;
            case "2":
                return <Test2 />;
            default:
                return;
        }
    }
    return (
        <div>{getPageBaseOnId(id)}
        </div>
    )
}

export default SingleTest