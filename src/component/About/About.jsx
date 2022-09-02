/* eslint-disable react/prop-types */
import React from 'react';
import TabTwo from '../Tab/TabAbout';

function About({ titleAbout, descriptionAbout }) {
  return (
    <div div id="about" className="fix" style={{ position: 'relative' }}>
      <div className="about-area ptb--120  bg_color--1">
        <div className="about-wrapper">
          <div className="container about-container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-12">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">{titleAbout}</h2>
                    <div>
                      <div className="row row--35 align-items-center">
                        <div className="col-md-3">
                          <div className="thumbnail">
                            <img
                              className="w-100"
                              src="/assets/images/about/avatar.jpg"
                              alt="About Images"
                            />
                          </div>
                        </div>
                        <div className="col-md-9">
                          <p className="description">{descriptionAbout}</p>
                        </div>
                      </div>

                      <div className="row mt--30">
                        <TabTwo tabStyle="tab-style--1" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
