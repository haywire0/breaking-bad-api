import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Search from './Search';
import Pagination from './Pagination';
import CardIntro from './Card';

function CharactersList() {
    var baseUrl = 'https://www.breakingbadapi.com/api/characters';

    const [char, setChar] = useState([])
    const [isLoading, setisLoading] = useState([false])
    const [currentPage, setCurrentPage] = useState(1)
    const [charPerPage] = useState(10)
    const [search, setSearch] = useState('')

    //Get current Characters 
    const indexOfLastChar = currentPage * charPerPage;
    const indexOfFirstChar = indexOfLastChar - charPerPage;
    const currentChar = char.slice(indexOfFirstChar, indexOfLastChar);

    useEffect(() => {
        const fetchCharacters = async () => {
            setisLoading(true)
            const result = await axios(`${baseUrl}?name=${search}`);
            setChar(result.data);
            setisLoading(false)
        }
        fetchCharacters();
    }, [search, baseUrl])

    //ChangePage
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <Search
                searchQuery={(searchText) => setSearch(searchText)}
            />
            <CardIntro
                isLoading={isLoading}
                char={currentChar}
            />
            <Pagination
                charPerPage={charPerPage}
                totalCharacters={char.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    )
}

export default CharactersList
