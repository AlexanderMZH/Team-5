import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './cardItem.css'
import Slider from 'react-slick';

const ninthSection = [
    {
        "image": "https://itrprj.blob.core.windows.net/ecomm/home/ninthSection/1.png",
        "productName": "Checkered Slim Collar Casual Shirt",
        "saleText": "Up To 79% Off",
        "oldPrice": "$30",
        "newPrice": "$20"
    },
    {
        "image": "https://itrprj.blob.core.windows.net/ecomm/home/ninthSection/2.png",
        "productName": "Printed Spread Collar Casual Shirt",
        "saleText": "Up To 79% Off",
        "oldPrice": "$60",
        "newPrice": "$40"
    },
    {
        "image": "https://itrprj.blob.core.windows.net/ecomm/home/ninthSection/3.png",
        "productName": "Solid Cut Away Collar Casual Shirt",
        "saleText": "Up To 79% Off",
        "oldPrice": "$70",
        "newPrice": "$50"
    },
    {
        "image": "https://itrprj.blob.core.windows.net/ecomm/home/ninthSection/4.png",
        "productName": "Printed Spread Collar Casual Shirt",
        "saleText": "Up To 79% Off",
        "oldPrice": "$60",
        "newPrice": "$40"
    },
    {
        "image": "https://itrprj.blob.core.windows.net/ecomm/home/ninthSection/5.png",
        "productName": "Solid Cut Away Collar Casual Shirt",
        "saleText": "Up To 79% Off",
        "oldPrice": "$70",
        "newPrice": "$50"
    }
]

const CardItem = () => {

    

        const settings = {
            // dots: false,
            // infinite: true,
            // speed: 500,
            // slidesToShow: 4,
            // slidesToScroll: 1
        
            infinite: true,
            slidesToShow: 4,
            speed: 500,
            slidesToScroll: 1,
            
            responsive: [
                {
                    breakpoint: 1150,
                    settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    initialSlide: 2
                    }
                },
                {
                    breakpoint: 850,
                    settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                    }
                },
                {
                    breakpoint: 650,
                    settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    }
                }
                ]
            };

    return (
        <Slider {...settings}>
                {ninthSection.map((value, index) => {
                    return index < 5 && (
                            <div className="flex-item">
                            <div className="Api" key={index}>
                                <div className="backgroundWhite">
                                    <img src={value.image} alt='' />
                                </div>
                                <div className="textButton">
                                    <div>
                                        <span className='saleText'>{value.saleText}</span>
                                        <h5 className='title'>{value.productName}</h5>
                                    </div>
                                        <h6 className='price'>
                                            {value.newPrice}
                                            <del>{value.oldPrice}</del>
                                        </h6>
                                </div>
                            </div>
                        </div>
                    )   
                })}        
            </Slider>
    )
}

export default CardItem