import React from 'react';
import '../../assets/css/footer.css';
import twitter from '../../../src/assets/images/Vector.svg'
import Linkedin from '../../../src/assets/images/Vector (1).svg'
import facebook from '../../../src/assets/images/akar-icons_facebook-fill.svg'


const Footer = () => (


  
  // <div className="footer page-footer font-small blue">
  //   <div className="custom-footer text-center py-3">© 20xx Copyright:
  //     <a className="custom-link" href="https://www.yourwebsite.com/"> Creator</a>
  //   </div>



  // </div>

  <div className='footer'>
  <div className='solutions'>

    <h3>SOLUTIONS</h3>

    <ul style= {{listStyle:'none'}} >

      <li>
        <a style= {{textDecoration: 'none'}} href='/'>Docuify for SMME</a>
        </li>
      <li>
       <a href=''> Docuify for NPO</a>
        </li>
      {/* <li>
        <a href=''> Exercise Planning </a>
        </li>
      <li>
       <a href=''> Liquidity Planning </a>
        </li>
      <li>
       <a href=''>  Docuify Wealth</a>
        </li> */}
      <li  >
        <a href=''>Docuify for Indiviuals</a>
        </li>
      <li>
        <a href=''> Docuify for Startups</a>

      </li>
      <li>
        <a href=''>Docuify for Government</a>
      </li>


    </ul>
    {/* <p>
    © Docuify 2022 — All rights reserved. 
    </p> */}
  </div>

  <div className='Tools'>
  <h3>TOOLS</h3>

  <ul style= {{listStyle: 'none'}} >



    <li>
      <a href=''>Document Verification</a>
    </li>
    <li>
     <a href=''> Document Fingerprinting</a>
      </li>
    <li>
      <a href=''> Document Validation </a></li>

    {/* <li>
      <a href=''>Exercise Timing Planner</a>
    </li>
   */}
  

    </ul>

  </div>

  <div className='Learn'>

  <h3>LEARN</h3>

  <ul style= {{listStyle: 'none'}} >



    <li>
      <a href=''>Docuify Learn</a>
    </li>
    <li>
    <a href=''>FAQ</a>
      </li>


    </ul>


  </div>

  <div className='About-Us'>

  <h3>ABOUT US</h3>

  <ul style= {{listStyle: 'none'}} >

    <li>
      <a href=''>Our Story</a>
    </li>
    <li>
    <a href=''> Careers</a>
      </li>
    <li>
      <a href=''>News & Press</a></li>
      <li>
    <a href=''> Contact Us</a>
      </li>
      <li>
    <a href=''> Legal</a>
      </li>
    </ul>
  </div>

  <div className='icons'>

    <ul style= {{listStyle: 'none'}} >
      <li style= {{listStyle: 'none'}}  className='icon'>
        <a >
        <img src={twitter} alt='twitter' className='twitter' height={25} width={25}/>

        </a>
        <a>
        <img src={Linkedin} alt='Linkedin' className='Linkedin' height={25} width={25}/>

        </a>
        <a>
        <img src={facebook} alt='facebook' className='facebook' height={25} width={25}/>

        </a>
      </li>
    </ul>


  <ul style= {{listStyle: 'none'}} >
  <li>
      <a href=''>Privacy Policy</a>
    </li>
    <li>
    <a href=''> Cookie Policy</a>
      </li>
    <li>
      <a href=''>Security</a></li>
      <li>
    <a href=''> Terms of Service</a>
      </li>
      <li>
    <a href=''> Referral Program</a>
      </li>
    </ul>
   
  </div>
  
  {/* <div className='all_rights'>
    <div className='condition'>
    <p>
    © Secfi 2022 — All rights reserved. 
    </p>
    </div>
  </div> */}
</div>

);

export default Footer;