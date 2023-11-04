import React from 'react'

const NearByCard = ({ img, name, distHr }) => {
    return (
        <div className="nearby-card">
            <img src={img} alt={name}/>
            <div className="nearby-card__info">
                <h3>{name}</h3>
                
            </div>
        </div>
    )
}

export default NearByCard
