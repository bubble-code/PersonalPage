/* eslint-disable react/prop-types */
import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';

function TabTwo({ tabStyle }) {
  const tab1 = 'Main skills';
  //   const tab2 = 'Awards';
  //   const tab3 = 'Experience';
  const tab4 = 'Education & Certification';
  return (
    <div>
      {/* Start Tabs Area */}
      <div className="tabs-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Tabs>
                <TabList className={`${tabStyle}`}>
                  <Tab>{tab1}</Tab>
                  {/* <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab> */}
                  <Tab>{tab4}</Tab>
                </TabList>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <a href="/service">
                          Web Development
                          {' '}
                          <span> - Development</span>
                        </a>
                        Build websites and web apps using javascript and its
                        frameworks.
                      </li>
                      <li>
                        <a href="/service">
                          Web and user interface design
                          <span> - Design</span>
                        </a>
                        Websites, web experiences, ...
                      </li>
                      <li>
                        <a href="/service">
                          Mechanical Engineering
                          {' '}
                          <span> - Engineering</span>
                        </a>
                        Mechanical design, problem solving, ...
                      </li>
                    </ul>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="single-tab-content">
                    <ul>
                      <li>
                        <a href="/service">
                          BSc In Mechanical Engineering
                          <span> - Mosul University, Iraq</span>
                        </a>
                        {' '}
                        2019
                      </li>
                      <li>
                        <a href="/service">
                          Full-Stack web development certification
                          <span> - Kodluyoruz, Turkey</span>
                        </a>
                        {' '}
                        2021
                      </li>
                      <li>
                        <a href="/service">
                          React Development certification
                          <span> - Re:Coded, IQ</span>
                        </a>
                        {' '}
                        2021
                      </li>
                    </ul>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      {/* End Tabs Area */}
    </div>
  );
}

export default TabTwo;
