import React, { useState } from 'react';
import PikminLogo from './images/Pikmin/pikmin-logo.png'

const Pikmin = props => {

    const [array, setArray] = useState([])

    // console.log('from Pikmin', props)
    
    const dataSorter = () => {
        let gameSeries = [];

        props.amiiboList.data.forEach(amiibos => {
            if(amiibos.amiiboSeries === "Pikmin"){
                gameSeries.push(amiibos)
            }
        })
        setArray(gameSeries)
        console.log('from Pikmin', gameSeries)

        let object = document.getElementById('pressMe')
        object.style.display = 'none';
    }

    return (
        <>
        <div className='categoryScene' onClick={dataSorter}>
            <div className='categoryHeader'>
                <img src={PikminLogo} id='cardTitle'/>
                <div id='pressMe'>    
                    <h1 className='clickMe'>Click anywhere on the screen!</h1>
                </div>
            </div>
            <div className='cardContainer'>
                {array.map(amiibo => (
                    <div className='amiiboCard'>
                        <h1>{amiibo.character}</h1>
                        <img src={amiibo.image} />
                        <h4>Amiibo Series: {amiibo.amiiboSeries}</h4>
                        <p>Game Series: {amiibo.gameSeries}</p>
                        <p>Type: {amiibo.type}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}

export default Pikmin;