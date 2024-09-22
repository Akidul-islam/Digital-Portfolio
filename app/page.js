'use client';

import { About } from '@/component/home/About';
import { Clients } from '@/component/home/Clients';
import { Contack } from '@/component/home/Contack';
import { Portfolio } from '@/component/home/Portfolio';
import { Services } from '@/component/home/Services';
import { Team } from '@/component/home/Team';
import Aos from 'aos';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <section id='hero' className='d-flex align-items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1'>
              <h1>Bettter digital experience with Ninestars</h1>
              <h2>
                We are team of talanted designers making websites with Bootstrap
              </h2>
              <a href='#about' className='btn-get-started scrollto'>
                Get Started
              </a>
            </div>
            <div className='col-lg-6 order-1 order-lg-2 hero-img'>
              <img
                src='assets/img/hero-img.svg'
                className='img-fluid animated'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>

      <main id='main' className='main'>
        <About />
        <Services />
        <Portfolio />
        <Clients/>
        <Team />
        <Contack />
      </main>
    </>
  );
}
