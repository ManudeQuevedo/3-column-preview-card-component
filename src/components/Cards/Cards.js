import React from 'react';
import Luxury from '../../imgs/icon-luxury.svg';
import Sedans from '../../imgs/icon-sedans.svg';
import Suvs from '../../imgs/icon-suvs.svg';
import './Cards.css';
import '../../App.css';

function Cards() {
   return (
      <React.Fragment>
         <div className='card-one'>
            <img src={Sedans} alt='Sedan icon' />

            <h1>Sedans</h1>

            <p>
               Choose a sedan for its affordability and excellent fuel economy.
               Ideal for cruising in the city or on your next road trip.
            </p>

            <button className='card-link color-one btn'>learn more</button>
         </div>

         <div className='card-two'>
            <img src={Suvs} alt='SUV icon' />

            <h1>SUVs</h1>

            <p>
               Take an SUV for its spacious interior, power, and versatility.
               Perfect for your next family vacation and off-road adventures.
            </p>

            <button className='card-link color-two btn'>learn more</button>
         </div>

         <div className='card-three'>
            <img src={Luxury} alt='Luxury icon' />

            <h1>Luxury</h1>

            <p>
               Cruise in the best car brands without the bloated prices. Enjoy
               the enhanced comfort of a luxury rental and arrive in style.
            </p>

            <button className='card-link color-three btn'>learn more</button>
         </div>
      </React.Fragment>
   );
}

export default Cards;
