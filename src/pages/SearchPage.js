import { Button } from '@material-ui/core'
import React from 'react'
import SearchResult from '../components/SearchResult'

const SearchPage = () => {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>2 hours minimum · 26 august to 30 august · 10 guests</p>
                <h1>Spaces nearby</h1>
                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of space
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Amenities
                </Button>
                <Button variant="outlined">
                    More filters
                </Button>                
            </div>
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Beautiful loft in the center of Nairobi"
                title="Create in this beautifulEdwardian House"
                description="10 guests · Cameras for hire · Parking available · Catering services"
                star={4.73}
                price="1000 sh / 2hrs"
                
            />
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Beautiful loft in the center of Nairobi"
                title="Create in this beautifulEdwardian House"
                description="10 guests · Cameras for hire · Parking available · Catering services"
                star={4.73}
                price="1000 sh / 2hrs"
                
            />
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Beautiful loft in the center of Nairobi"
                title="Create in this beautifulEdwardian House"
                description="10 guests · Cameras for hire · Parking available · Catering services"
                star={4.73}
                price="1000 sh / 2hrs"
                
            />
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Beautiful loft in the center of Nairobi"
                title="Create in this beautifulEdwardian House"
                description="10 guests · Cameras for hire · Parking available · Catering services"
                star={4.73}
                price="1000 sh / 2hrs"
                
            />

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Beautiful loft in the center of Nairobi"
                title="Create in this beautifulEdwardian House"
                description="10 guests · Cameras for hire · Parking available · Catering services"
                star={4.73}
                price="1000 sh / 2hrs"
                
            />

            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Beautiful loft in the center of Nairobi"
                title="Create in this beautifulEdwardian House"
                description="10 guests · Cameras for hire · Parking available · Catering services"
                star={4.73}
                price="1000 sh / 2hrs"
                
            />

                   </div>
    )
}

export default SearchPage
