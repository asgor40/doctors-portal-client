import React from 'react';

const InfoCard = ({cardTitle, bgClass, img}) => {
    return (
        <section>
            <div class={`card card-side bg-base-100 shadow-xl ${bgClass}`}>
            <figure className='pl-0 lg:pl-5'>
                <img src={img} alt="Movie" />
            </figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
            </div>
        </section>
    );
};

export default InfoCard;