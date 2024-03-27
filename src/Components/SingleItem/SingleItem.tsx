import React from 'react'

const SingleItem = () => {
  return (
    <div className='single_product_content'>
      <div className='page_history'></div>
      <section className='product_content'>
        <div className='images_grid_view'></div>
        <div className='product_details_container'>
          <div className="single_product_about">
            <div className="single_sale"></div>
            <div className="single_title"></div>
            <div className="single_rating_container">
              <div className="stars_cotnainer"></div>
              <div className="rating_count"></div>
              <div className="review_count"></div>
            </div>
            <div className="single_description"></div>
          </div>
          <div className="product_num">
            <div className="sing_price_container">
              <div className='price_text'>
                <span>Price</span>
              </div>
            </div>
            <div className="costumer_details">
              <div className="product_quantity"></div>
              <div className="product_size"></div>
              <div className="product_color"></div>
            </div>
            <div className="costumer_buttons_spg">
              <button>add to cart</button>
              <button>add to wishlist</button>
            </div>
          </div>
          <div className="spp_additional">
            <div className="product_filters">
              <span>SKU:</span>
              <span>Category:</span>
              <span>Tags:</span>
              <span>Share:</span>
            </div>
          </div>
          <div className="spp_shipping">
            
          </div>
          </div>
        <div className='product_share_links'></div>
      </section>
      <section className='product_review'></section>
      <section className="related_products"></section>
    </div>
  )
}

export default SingleItem