import React from 'react'

const SearchItem = ({ task }) => {
    return (
        <>
            <h3 key={task.id}>{task.title}</h3>
        </>
    )
}

export default SearchItem
