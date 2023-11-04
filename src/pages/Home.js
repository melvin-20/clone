import React from 'react'
import Banner from '../components/Banner'
import NearBy from '../components/NearBy'
import LiveAnywhere from '../components/LiveAnywhere'
import DiscoverPlaces from '../components/DiscoverPlaces'
import HostBanner from '../components/HostBanner'

const Home = () => {
    return (
        <div className="home">
            <Banner />

            <div className="home__nearby">
                <h1>Explore Nearby</h1>
                <NearBy />
            </div>

            <div className="home__anywhere">
                <h1>Book Anywhere</h1>
                <LiveAnywhere />
            </div>

            <div className="home__host">
                <HostBanner />
            </div>
            <div className="home__discover">
                <h1>Discover Spaces </h1>
                <DiscoverPlaces />
            </div>
        </div>
    )
}

export default Home
