import React from 'react'
import {
  Card, CardImg, CardImgOverlay,
  CardTitle, CardSubtitle
} from 'reactstrap';
import loader from './../Images/loader.gif'
import { Link } from 'react-router-dom'

function RenderCard({ char }) {
  return (
    <Link to={`/character/${char.char_id}`}>
      <Card key={char.char_id} className='card' >
        <div className='card-inner'>
          <CardImg src={char.img} alt={char.name} className='card-front' />
          <CardImgOverlay className='card-back'>
            <CardTitle tag="h2">{char.name}</CardTitle>
            <hr />
            <div className='card_back-info'>
              <CardSubtitle><strong>Actor Name: </strong>{char.portrayed}</CardSubtitle>
              <CardSubtitle><strong>Occupation:</strong> {char.occupation.map((value) => value + ", ")}</CardSubtitle>
              <CardSubtitle><strong>Date of Birth:</strong> {char.birthday}</CardSubtitle>
              <CardSubtitle><strong>Status:</strong> {char.status}</CardSubtitle>
            </div>
          </CardImgOverlay>
        </div>
      </Card>
    </Link>
  )
}

function CardIntro({ char, isLoading }) {
  return isLoading ? (
    <img src={loader} className='spinner' alt='Loading' />
  ) : (
    <section className="cards">
      {char.map(items => (
        <RenderCard key={items.char_id} char={items} />
      ))}
    </section>)
}

export default CardIntro