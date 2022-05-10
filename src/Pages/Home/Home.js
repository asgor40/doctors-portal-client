import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Info from './Info';
import Treatment from './Treatment';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Treatment></Treatment>
            <Appointment></Appointment>
        </div>
    );
};

export default Home;