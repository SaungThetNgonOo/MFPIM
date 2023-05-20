import React from 'react'
import './featureProperties.css'

export const FeatureProperties = () => {
  return (
    <div className='fp'>
        <div className='fpItem'>
        <img src={require("../AllHoteldb/The Nature Lodge, Ngwe Saung/img1.jpg")} alt="" className="fpImg" />
        <span className='fpName'>The Nature Lodge, Ngwe Saung</span>
        <span className='fpCity'>Fantastic Bedrooms</span>
        <span className='fpPrice'>63,000 - MMK</span>
        <div className="fpRating">
            <div>10</div>
            <span>Exceptional</span>
        </div>
        </div>
         <div className='fpItem'>
            <img src={require("../AllHoteldb/Kanbawza Hinthar Hotel/img6.jpg")} alt="" className="fpImg" />
        <span className='fpName'>Kanbawza Hinthar Hotel</span>
        <span className='fpCity'>Wide Enclosure</span>
        <span className='fpPrice'></span>
        <div className="fpRating">
            <div>9.0</div>
            <span>Superb</span>
        </div>
        </div>
         <div className='fpItem'>
            <img src={require('../AllHoteldb/Gold Leaf Hotel Mandalay/img5.jpg')} alt="" className="fpImg" />
        <span className='fpName'>Gold Leaf Hotel</span>
        <span className='fpCity'>High Views</span>
        <span className='fpPrice'>110,229 - MMK</span>
        <div className="fpRating">
            <div>8.5</div>
            <span>Very Good</span>
        </div>
        </div>
         <div className='fpItem'>
            <img src={require('../AllHoteldb/Irawadee Resort/img10.jpg')} alt="" className="fpImg" />
        <span className='fpName'>Irawadee Resort</span>
        <span className='fpCity'>Traditional Architectures</span>
        <span className='fpPrice'>74,556 - MMK</span>
        <div className="fpRating">
            <div>9.1</div>
            <span>Superb</span>
        </div>
        </div>
    </div>
  )
}
export default FeatureProperties
