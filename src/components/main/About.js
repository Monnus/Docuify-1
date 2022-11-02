import React, { Component } from 'react';
import employees from '../../../src/assets/images/960x0.jpeg';
import '../main/About.css';
import {useNavigate} from 'react-router';
import guy from '../../../src/assets/images/text-messaging-handsome-young-african-man-using-smart-phone-while-standing-against-grey-background_425904-39398.jpeg';




export default class About extends Component {

	render() {

	// const navigate=useNavigate();
	// const navigateToContactUs=()=>{
	// 	navigate('/ContactUs')
	// }


	  return (


	    // <div className='container'>
		// 		<h1 className="custom-h1"> About </h1>
		// 		<hr/>
		// 		<br/>
		// 		<ul className='custom-bullet'>
        // <li><p>The basic idea of this application is to automate the process of document verification from different entities.</p></li>
        // <li><p>A requester upload a document to blockchain for a verifier.</p></li>
		// 		<li><p>Requester pay the price for document verification in ether.</p></li>
        // <li><p>The verifier verifies or rejects the document.</p></li>
		// 		<li><p>Once a verifier verifies the document, he gets ethers in reward.</p></li>
		// 		</ul>
		// 	</div>

		<div>
				<div className='aboutUs'>

				<div className='employees'>
				<img src={employees} alt='employees' className='employer'/>

				</div>
				<div className='story'>
					<h6>OUR STORY</h6>
					<br></br>
					<h1>Hi there, we’re Docuify </h1>
					<p>We are the company that provides a largest verifying of documents</p>
					<button href='/contactus' className='talk'>Talk with us</button>
				</div>
				</div>

				{/* mission */}

					<div className='mission'>
				<div className='our-mission'>
					<h6>OUR MISSION</h6>
					<h1>
					We help clients verify their <br></br>personal documents without <br></br>
					being tempted or stolen.
					
					</h1>
					<p>Blockchain-based system which can serve as a verification clearinghouse for confidential documents.Eliminate reputational risks for an enterprises or individuals as well as improve trust and transparency</p>
					
				</div>
				<div className='mission-img'>
				<img src={guy} alt='guy' className='guy'/>

				</div>
        </div>


		{/* Footer */}



</div>



	  );
	}

};
