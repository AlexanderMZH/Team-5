import React from 'react';
import './CategoryAnim.css';
// import { SliderSvg } from '../../static/icons';


const SliderSvg = () => { 
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="60" viewBox="0 0 61 60" fill="none">
            <path opacity="0.3" d="M29.302 -0.00499268L38.533 21.2005L60.3307 28.9297L39.1253 38.1607L31.396 59.9585L22.165 38.753L0.367297 31.0237L21.5728 21.7928L29.302 -0.00499268Z" fill="black"></path>
        </svg>
    )
}

const data = [
    {
    title: "Jacket"
    },
    {
    title: "Jeans"
    },
    {
    title: "Shirts"
    },
    {
    title: "Shorts"
    },
    {
    title: "t-shirt"
    },
    {
    title: "Blazer"
    },
    {
    title: "Jacket"
    },
    {
    title: "Jeans"
    },
    {
    title: "Shirts"
    },
    {
    title: "Shorts"
    }
]

const CategoryAnim = () => {

    

    return (
        <section className='content-slider'>
            <div className='container-slider'>
                <ul className='ul-slider text-wrapper'>
                    {data.map((item) => {
                        return (
                            <>
                            <li className='li-slider'>
                                <h2 className='title'>{item.title}</h2>
                            </li>
                            <li className='li-slider'>
                                <SliderSvg/>
                            </li>
                            </>
                        )
                    })}
                    
                </ul>
            </div>
        </section>
    )
}

export default CategoryAnim;

