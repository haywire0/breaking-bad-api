import React, { useState } from 'react'

function Search({ searchQuery }) {

    const [search, setSearch] = useState('')
    const onChange = (searchText) => {
        setSearch(searchText)
        searchQuery(searchText)
    }

    return (
        <section className="search">
            <form>
                <input type="text" className="form-control"
                    value={search} onChange={(e) => onChange(e.target.value)} placeholder="Search Character" autoFocus />
            </form>
        </section>
    )
}

export default Search
