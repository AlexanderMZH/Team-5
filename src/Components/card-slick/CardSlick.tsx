// import React from 'react'
import './cardSlick.css'
import CardItem from './cardItem'


const CardSlick = () => {


    return (
        <section className='content-slick'>
            <div className="container-slick ">
                <div className="section-head">
                    <div className="left-container">
                        <h2 className='title'>Blockbuster deals</h2>
                    </div>
                    <a className='text-seconday'>
                        see all deals
                    </a>
                </div>
                <div className="container swiper-visible">
                    <CardItem/>
                </div>
            </div>
        </section>
    )
}

export default CardSlick