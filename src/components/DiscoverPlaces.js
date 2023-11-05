import React from 'react'
import Card from './Card'

const DiscoverPlaces = () => {
    return (
        <div className="discover">
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="Podcasting Space in Nairobi"
                description="Well lit conveniently located just blocks from Nairobi Archives, our beautiful library can be used for podcasting at a really affordable price"
                
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Premium Production Loft in Nairobi"
                description="Book our loft conveniently located in the heart of Embakasi for your photoshoot and videoshoot productions"
               
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="Beautiful Apartment"
                description="Amazing lighting in our apartment with amenities and a fabolous backdrop for your photography and videography work"
                
            />
        </div>
    )
}

export default DiscoverPlaces
