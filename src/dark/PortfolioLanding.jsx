/* eslint-disable no-console */
/* eslint-disable array-callback-return */
/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { TypeAnimation } from 'react-type-animation';
import PageTitle from '../component/changeTitle/changeTitle';
import Header from '../component/header/Header';
import { snow } from './snow';
import About from '../component/About/About';
import { title, description } from '../assets/text/textPageIn';

const SlideList = [
  {
    textPosition: 'initial',
    category: 'Welcome to my World',
    description: '',
    buttonText: '',
    buttonLink: '',
  },
];

function PortfolioLanding() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div className="active-dark">
      <PageTitle pageTitle="Alejandro Oficial Page" />
      <Header color="color-black" />
      <div id="home" className="fix">
        <div className="slider-wrapper">
          {
            SlideList.map((value, index) => (
              <div
                className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25"
                key={index}
              >
                <Particles
                  id="tsparticles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={snow}
                />
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12" style={{ position: 'relative' }}>
                      <div className={`inner ${value.textPosition}`}>
                        {value.category ? <span>{value.category}</span> : ''}
                        <h1 className="title">
                          Hi, I’m Alejandro
                          <TypeAnimation
                            sequence={['Alejandro', 1000, 'Alejandro Oficial', 1200]}
                            wrapper="div"
                            repeat={Infinity}
                            style={{ color: '#fff' }}
                          />
                        </h1>
                        {value.description ? (
                          <p className="description">{value.description}</p>
                        ) : (
                          ''
                        )}
                        {value.buttonText ? (
                          <div className="slide-btn">
                            <a
                              className="rn-button-style--2 btn-primary-color"
                              href={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </a>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <About titleAbout={title} descriptionAbout={description} />
    </div>
  );
}

export default PortfolioLanding;
