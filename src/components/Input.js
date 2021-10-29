import React from 'react'


export const Input = ({ filter, setFilter }) => {



    return (
        <>
            <input
                className={'form-control'}
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
        </>
    )
}
