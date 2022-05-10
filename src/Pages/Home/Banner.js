import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <section>
            <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="w-full lg:max-w-lg rounded-lg shadow-2xl" />
                <div>
                <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Banner;