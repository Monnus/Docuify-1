import React, { Component } from 'react';
import homeImg from '../../assets/images/blockchain.jpg'; 
// import Typical from 'react-typical';
// import Marquee from "react-fast-marquee";
// import BsArrowDownCircle from 'react-icons/bs'
import girl from '../../../src/assets/images/legal-workshop-square-pic-circle-removebg-preview.png';
import './home.css';
import miss from '../../../src/assets/images/8ac5c7f468f6a8686d435263efcf994b2a321369-1177x1224.webp';
import equity from '../../../src/assets/images/d6e7c66584a49398201d2cebfef8c39b5a7a5c47-858x700.webp';
import man from '../../../src/assets/images/85fc19315ea2838b6faa5d6087a859d00c56498b-1314x1180.webp';

import video from '../../../src/assets/images/1_UINAsA-ZAG8UBYKhENkWiw.gif';
import Header from '../menu/Header';
import Footer from '../menu/Footer';


export default class Home extends Component {
  constructor(props) {
    super(props);
  }
    render() {
        return (
          <div>
          <Header/>
          <div className='main'>
        <div className='hero'>
        <div className='content'>
        
          <div>
        {/* <Typical wrapper="span" steps={steps} loop={Infinity} className={'caca'} /> */}
      </div>
      
      <h1>for our clients</h1>
            <p>
            Get equity planning, stock option financing, and wealth <br></br>
            management from advisors that know how stock options <br></br>
            and equity can help grow your wealth.
            </p>
            <button className='button'>Get started</button>
        </div>
        <div className='img1'>
            <img src={girl} alt='girl' className='girl' height={300}/>
            
        </div>
        </div>
           <hr className='new1'/>
          <div className='split'>
          <p>
            Documents we work with
           </p>
          {/* <Marquee className='Marquee'>
          <HiOutlineDocument className='grcert'/><h4>Matric Certificate</h4>
             <BiCertification className='grcert'/><h4>Higher Certificate</h4>
             <HiOutlineDocument className='grcert'/><h4> Diploma Certificate </h4>
             <BiCertification className='grcert'/><h4> Degree Certificate </h4>
             <HiOutlineDocument className='grcert'/><h4>Honours Certificate</h4>
             <BiCertification className='grcert'/><h4>Doctorate Certificate</h4>
            </Marquee> */}
          </div>
          <div className='toppest'>
        <div className='information'>
            <h4>THE LEADING DOCUMENT VERIFY PLATFORM</h4>
            <h1>You've got your documents. Now what?</h1>
            <p>see your full demonstartion on how smart contacts automatically execute, control events and the agreement between two parties</p>
        </div>
        <div className='img2'>
        <img src={video} alt='video' height={300}/>

        <h1>How we help our clients</h1>
        {/* <IconButton icon={<SortDownIcon />} className='buttonStyle' /> */}
        {/* <BsArrowDownCircle/> */}

        </div>

        <div className='divide'>
            <div className='one'>
            <h5>EQUITY, Tax & IPO PLANNING</h5>
            <h3>Work with a financial advisor to align <br></br>
            your stock options with your financial <br></br>goals.
            </h3>
            <button className='button4'>Get started</button>
            <button href='/' className='button3'>Learn more</button>
            </div>

            <div className='two'>

            <img src={miss} alt='video' className='miss'/>

            </div>
        </div>

        <div className='divide1'>
            

            <div className='two1'>

            <img src={equity} alt='equity' className='equity'/>

            </div>
            <div className='one1'>
            <h5>EXERCISE & LIQUIDITY FINANCING</h5>
            <h3>Get the cash you need to own your <br></br>
            equity, or get cash for your private <br></br>shares without selling them.
            </h3>

            <button className='button8'>Get started</button>

            <button href='/' className='button7'>Learn more</button>

            </div>
        </div>

        <div className='divide'>
            <div className='one'>
            <h5>WEALTH MANAGEMENT</h5>
            <h3>Grow your money through managed <br></br>
            portfolios and exclusive access to  <br></br>private investments.
            </h3>


            <button className='button4'>Get started</button>
            <button href='/' className='button3'>Learn more</button>
            </div>

            <div className='two'>

            <img src={man} alt='man' className='man'/>

            </div>
        </div>

        <div className='divide4'>
            <div className='one4'>
            <h6>WHY DOCUIFY</h6>
            <h1>
            SECURE A FASTER <br></br>AND MORE PARTNERSHIP
           </h1>
            </div>

            <div className='two4'>
                <h3>We put equity first</h3>
                <p>
                Our team has deep expertise in equity, tax implications, and how 
                <br></br>it fits into your financial picture.
                </p>
                <h3>You don’t need millions</h3>
                <p>
                We help you make important equity decisions that can set you
                    <br></br>up for financial success.
                </p>

                <h3>Holistic wealth management</h3>
                <p>
                We take a comprehensive view of all your finances, including <br></br>
                stock options, to help you save time and money, and grow your <br></br>wealth.
                </p>

            </div>
        </div>
    </div>  
    </div>
    <Footer/>
    </div>
        );
    }
}

