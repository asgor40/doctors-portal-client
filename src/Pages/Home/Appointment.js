import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';

const Appointment = () => {
    return (
        <section style={{background: `url(${appointment})`}}>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row pb-0">
                    <img src={doctor} class="mt-[-100px] max-w-sm" />
                    <div>
                    <h3 class="text-xl font-bold text-primary">Appointment</h3>
                    <h1 class="text-5xl font-bold">Make an appointment Today</h1>
                    <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;