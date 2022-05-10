import React from 'react';
import treatment from '../../assets/images/treatment.png'

const Treatment = () => {
    return (
        <section className=''>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row lg:px-48">
                    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:pl-8'>
                        <h3 class="text-3xl font-bold">Exceptional Dental Care, on Your Terms</h3>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Treatment;