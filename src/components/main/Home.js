import React, { Component } from 'react';
import homeImg from '../../assets/images/blockchain.jpg'; 
import Typical from 'react-typical';
import Marquee from "react-fast-marquee";
import BsArrowDownCircle from 'react-icons/bs'
import girl from '../../../src/assets/images/legal-workshop-square-pic-circle-removebg-preview.png';
import './home.css';
import miss from '../../../src/assets/images/8ac5c7f468f6a8686d435263efcf994b2a321369-1177x1224.webp';
import equity from '../../../src/assets/images/d6e7c66584a49398201d2cebfef8c39b5a7a5c47-858x700.webp';
import man from '../../../src/assets/images/85fc19315ea2838b6faa5d6087a859d00c56498b-1314x1180.webp';
import video from '../../../src/assets/images/1_UINAsA-ZAG8UBYKhENkWiw.gif';
import {HiOutlineDocument} from 'react-icons/hi';
import { BiCertification } from 'react-icons/bi';


export default class Home extends Component {
  constructor(props) {
    super(props);
  }
    render() {


      const steps = [
        'Docuify', 1000,
        'Document Verification', 1000,
        'Blockchain based fingerprint', 1000,
       
      ];

        return (
    <div className='main'>

        {/*  */}
        <div className='hero'>
        <div className='content'>
        
      <div className='auto-type'>
      <h5> <Typical wrapper="span" steps={steps} loop={Infinity} className={'caca'} /></h5> 
      </div>
      
      <h1>For our clients</h1>
            <p>
            Get document verification, validation , and digital fingerprinting
            from our platform that utilises blockchain technology <br></br>
            to solidify the authenticity of your documents
            </p>
            <a href='/login' className='button' >Get started</a>
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
          <Marquee className='Marquee'>
          <HiOutlineDocument className='grcert'/><h4>Matric Certificate</h4>
             <BiCertification className='grcert'/><h4>Higher Certificate</h4>
             <HiOutlineDocument className='grcert'/><h4> Diploma Certificate </h4>
             <BiCertification className='grcert'/><h4> Degree Certificate </h4>
             <HiOutlineDocument className='grcert'/><h4>Honours Certificate</h4>
             <BiCertification className='grcert'/><h4>Doctorate Certificate</h4>
            </Marquee>
          </div>

          {/*  */}
          <div className='toppest'>
        <div className='information'>
            <h4>THE LEADING DOCUMENT VERIFICATION PLATFORM</h4>
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
            <h5>Document Verification</h5>
            <h3>Work with a blockchain advisor to align
            your document verificaiton with your enterprise goals.
            </h3>
            <a href='/login' className='button4' >Get started</a>
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
            <h5>Validation & Fraud Prevention</h5>
            <h3>Get your documents validated and temper proof
             backed by smart contracts
            </h3>

            <a href='/login' className='button8'>Get started</a>

            <a href='/' className='button7'>Learn more</a>

            </div>
        </div>

        <div className='divide'>
            <div className='one'>
            <h5>Distributed ledger</h5>
            <h3> your documents are deployed with smart contract
             upon verificaiton and validation sent to a distributed ledger
            </h3>


            <a href='/login' className='button4'>Get started</a>
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
            DIGTIAL VERIFICATION <br></br> & <br></br>DIGTIAL FINGERPRINT
           </h1>
            </div>

            <div className='two4'>
                <h3>We put your documents first</h3>
                <p>
                Our platform has capabilites to verify and validate documents
                <br></br>it fits into your enterprise picture.
                </p>
                <h3>You don’t need to understand smart contracts</h3>
                <p>
                We help you seal your documents through blockchain technology 
                    <br></br>through smart contracts for digital finger printing
                </p>

                <h3>We store your documents on the blockchain</h3>
                <p>
                 Comprehensive document storage by means of the blockchain  <br></br>
                nodes and the inter-plantery file system
                </p>

            </div>
        </div>
          </div>

            {/* Marquee */}

            <div className='back-color' >
        <div className='show'>
            <h6>TESTIMONIALS</h6>
            <h1>What our clients say</h1>
        </div>

        <Marquee className='Marquee1'>
           <div className='marq'>
           <p> "I realized I’ve been sorely <br></br>needing your advisory services. 
            So excited to work <br></br>with you."</p>
            <br></br>
           <br></br>
           <br></br>
           <br></br>        
           <br></br>
           <br></br>     
           <br></br>

           <h6>Senior Engineer</h6>
           <h6>Gusto</h6>
           </div>

           <div className='marq'>
            <p>"What I found most <br></br> comforting was that this <br></br>
           would allow all our employees, <br></br>not just the executives or <br></br>
           senior ones, an opportunity to <br></br>have the option to  digitally fingerprint <br></br> 
           important business documentation" </p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

                <h6>Dan Sinner</h6>
           <h6>Chief Customer Officer at Happy Money</h6>
           </div>

           <div className='marq'>
          <p> "I realized I’ve been sorely <br></br>needing your advisory services. 
            to validate and authenticate my documents  <br></br>with your technology."</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>        
            <br></br>
            <br></br>     
            <br></br>
   
              <h6>Senior Engineer</h6>
           <h6>Gusto</h6>
           </div>

           <div className='marq'>
          <p> "Docuify was one of the only <br></br> places I could find that could <br></br>
           validate my certificate <br></br>on using smart contracts."</p>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>        
           <br></br>
           <br></br>

           <h6>Amanda</h6>
           <h6>Early HR employee at pre-IOP startup</h6>
           </div>

           <div className='marq'>
          <p> "Docuify felt like the safest <br></br>option. There is upside <br></br>
           and almost no downside, and I <br></br>might as well play it safe."</p>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>        
           <br></br>
           <br></br>

          <h6>Victor</h6>
           <h6>Leading University Admin</h6>       
           </div>

           <div className='marq'>
           <p>"I feel like a small fish in a big <br></br>pond with wealth advisors.<br></br> 
           Secfi is exactly what I've been <br></br> looking for. You get me. You <br></br>
           know equity. And you make <br></br>my life easy."</p>
           <br></br>
           <br></br>
           <br></br>
           <br></br>
           <br></br>

          <h6>Emma</h6>
           <h6>Docuify client</h6>       
           </div>
           </Marquee>


    </div>


    </div>
        );
    }
}

