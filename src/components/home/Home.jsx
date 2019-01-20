import React, { Component } from 'react'
import imgETC from '../../images/ETC_icon.png'
import imgEVG from '../../images/EVG_icon.png'
import imgAVI from '../../images/AVI_icon.png'
import imgPAC from '../../images/PAC_icon.png'
import imgMision from '../../images/Mision_icon_orange.png'
import imgVision from '../../images/Vision_icon_white.png'
import imgValues from '../../images/Values_icon_orange.png'
import imgProduct from '../../images/product.png'
import imgControles from '../../images/LogoControles.png'
import imgPIPS from '../../images/LogoPIPS.png'
import imgNorthCarolina from '../../images/NorthCarolina.png'
import imgAustin from '../../images/Austin.png'
import imgAtlanta from '../../images/Atlanta.png'
import imgMexico from '../../images/Mexico.png'
import SolutionCard from '../SolutionCard';
import AboutCard from '../AboutCard';
import ProductsCard from '../ProductsCard';
import PlayerCarousel from '../PlayerCarousel';
import CorporateIdentityCard from '../CorporateIdentityCard';
import SubsidiariesCard from '../SubsidiariesCard';
import WhereCard from '../WhereCard';
import BlogPost from '../BlogPost';


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
    const descVision = "We are passionate about offering efficient and innovative mobility solutions and automatic vehicle identification, through Radio Frequency Identification (RFID) technology, optical character recognition or artificial intelligence. All this VISION through products and services of excellence based on international standards, for the benefit of our customers, shareholders and collaborators."
    const descProducts = "Neology is a U.S. based high technology company headquartered in San Diego, California, with manufacturing facilities in the U.S. and Mexico City. Founded in 1986, our company has been a pioneer and leader in the development of passive Radio Frequency Identification (RFID) technology, owning some of the earliest and most significant intellectual property (IP) in the industry."
    const linkProducts = "/products"
    return (
      <div className="home">
        <div>
          <div className="carousel-container">
            <PlayerCarousel />
          </div>
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
          <div className="corpID-container">
            <CorporateIdentityCard 
              img={imgMision}
              title="Mision"
              description="Holi" />
            <CorporateIdentityCard 
              img={imgVision}
              title="Vision"
              description={descVision} />
            <CorporateIdentityCard 
              img={imgValues}
              title="Values"
              description="Holi" />
          </div>
          <div>
            <h1>PRODUCTS</h1>
            <div className="about-container">
              <ProductsCard 
              title="READERS" 
              desription={descProducts}
              link={linkProducts}
              img={imgProduct} />
            </div>
          </div>
          <div>
            <h1>SUBSIDIARIES</h1>
            <div className="subsidiaries-container">
              <SubsidiariesCard 
                img={imgControles} />
              <SubsidiariesCard 
                img={imgPIPS} />
            </div>
          </div>
          <div>
            <h1>WHERE WE ARE</h1>
            <div className="where-container">
              <img className="where-card" src={imgNorthCarolina} alt="North Carolina"/>
              <img className="where-card" src={imgAustin} alt="Austin"/>
              <img className="where-card" src={imgAtlanta} alt="Atlanta"/>
              <img className="where-card" src={imgMexico} alt="Mexico"/>
            </div>
          </div>
          <div className="blog-container">
            <BlogPost 
              title="Francisco Martinez de Velasco Visits Neology Offices in Mexico City." 
              desription={descProducts}
              link={linkProducts}
              img={imgProduct} />
            <BlogPost 
              title="Neology P397 Camera Increases Safety in the UK." 
              desription={descProducts}
              link={linkProducts}
              img={imgProduct} />
          </div>
        </div>
      </div>
    )
  }
}