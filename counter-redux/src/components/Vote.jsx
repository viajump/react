import React from 'react';
import {useSelector} from 'react-redux'

const Votes = () => {
    const count = useSelector(state => state.counter.count)

    return (
        <div>Total Vote {count} </div>
    )
}

export default Votes;