import React from 'react';
import './Modal.css';



function Modal() {
	return (
		<div className="instructionsModal">
			<div className="modal-content">
				<h4 className="center">Game Instructions</h4>
				<ol>
					<li>Click on an Image to start the game.</li>
					<li>Every time you click an image, the images get rearranged.</li>
					<li>If you pick the same image twice...You Lose!</li>
					<li>Click all 12 images without repeating...You Win!</li>
				</ol>
			</div>
			<br />
			<div className="modal-footer white-text center">
				<a className="waves-effect waves-light btn" onClick={() => {
					document.getElementsByClassName('instructionsModal')[0].classList.add('hide');
				}}>Let's Play Already...</a>
			</div>	
		</div>
	)
}
export default Modal;