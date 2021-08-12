import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Character.css'

function Character({ match }) {
    const url = 'https://www.breakingbadapi.com/api/'
    const [char, setChar] = useState({})
    const [quotes, setQuotes] = useState({})

    useEffect(() => {
        const fetchCharacter = async () => {
        const res = await axios(`${url}characters/${match.params.id}`)
        setChar(res.data[0])
        const quote = await axios(`${url}quotes/${match.params.id}`)
        setQuotes(quote.data[0])
    }
        fetchCharacter()
    }, [char,match.params.id])

    return (
        <div className="container">
            <div className="character">
                <div className="left">
                    <img src={char.img} alt={char.name} />
                </div>
                <div className="right">
                    <h1>{char.name}</h1>
                    <hr style={{width: '50%', margin: '0 auto'}}/>
                    <div className="more_info">
                        <h2>Date of Birth:</h2> {char.birthday}
                        <h2>Occupation:</h2> {`${char.occupation}, `}
                        <h2>Status:</h2> {char.status}
                        {char.nickname && <h2>Nickname:</h2>} {char.nickname}
                        <h2>Actor: {char.name}</h2>
                        <h2>Seasons Appeared: </h2>{`${char.appearance}, `}
                    </div>
                </div>
            </div>
            {quotes && <div className="quotes">
                <h1>Quote</h1>
                <div className="quotes-container">
                    <i>{quotes.quote}</i>
                    <img src="https://img.icons8.com/ios/50/000000/quote-right.png" alt="Quotes"/>
                </div>
            </div>}
        </div>
    )
}

export default Character
