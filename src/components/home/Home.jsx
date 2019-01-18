import React, { Component } from 'react'
import Navbar from '../Navbar';
import SolutionCard from '../SolutionCard';
import imgETC from '../../images/ETC_icon.png'
import imgEVG from '../../images/EVG_icon.png'
import imgAVI from '../../images/AVI_icon.png'
import imgPAC from '../../images/PAC_icon.png'
import AboutCard from '../AboutCard';


export default class Home extends Component {
  render() {
    const descETC = "Neology’s ETC systems are based on established protocols that are specific to customer requirements and suitable for your environment and infrastructure."
    const descEVG = "Neology’s Electronic Vehicle Registration solution is unique, reliable, and highly secure. Using passive RFID technology, our EVR solution provides automated, detailed, tamper-proof and streamlined vehicle security."
    const descAVI = "Deploys Vehicle Detection and Identification Portals at key locations and uses passive UHF RFID tags to remotely monitor vehicles, traveling at high speeds, to increase public safety and national security."
    const descPAC = "Offers a wide range of solutions in parking and access con- trol. The company designs and manufactures their own equi- pment with the latest technology available on the market using internationally renowned suppliers."
    const linkETC = "/etc"
    const linkEVG = "/evg"
    const linkAVI = "/avi"
    const linkPAC = "/pac"
    const descAbout = "Neology is a U.S. based high technology company headquartered in San Diego, California, with manufacturing facilities in the U.S. and Mexico City. Founded in 1986, our company has been a pioneer and leader in the development of passive Radio Frequency Identification (RFID) technology, owning some of the earliest and most significant intellectual property (IP) in the industry."
    const linkAbout = "/about"
    return (
      <div className="home">
        <div>
          <Navbar />
          <div className="solutions-container">
            <h1>SOLUTIONS</h1>
            <div className="solution-cards-container">
              <SolutionCard img={imgETC} 
              title="Electronic Toll Collection" 
              desription={descETC} 
              link={linkETC}/>
              <SolutionCard img={imgEVG} 
              title="Electronic Vehicle Registration" 
              desription={descEVG} 
              link={linkEVG}/>
              <SolutionCard img={imgAVI} 
              title="Automatic Vehicle Identification" 
              desription={descAVI} 
              link={linkAVI} />
              <SolutionCard img={imgPAC} 
              title="Parking and Access Control" 
              desription={descPAC} 
              link={linkPAC} />
            </div>
          </div>
          <div>
            <h1>ABOUT US</h1>
            <div className="about-container">
              <AboutCard 
              title="LEADING THROUGH INNOVATION IS OUR PASSION" 
              desription={descAbout}
              link={linkAbout} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}