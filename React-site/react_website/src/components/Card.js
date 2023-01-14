import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function card() {
  return (
    <div className='cards'>
        <h1>Check out Epic ................</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/img-9.jpg'
                        text='he he'
                        label='adventure'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-2.jpg'
                        text='he he'
                        label='adventure'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-3.jpg'
                        text='he he'
                        label='adventure'
                        path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem 
                        src='images/img-4.jpg'
                        text='he he'
                        label='adventure'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-5.jpg'
                        text='he he'
                        label='adventure'
                        path='/services'
                    />
                    <CardItem 
                        src='images/img-6.jpg'
                        text='he he'
                        label='adventure'
                        path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default card