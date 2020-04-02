// Imports
import React from 'react';

// SVG icons
const LoginIcon = props => (
	<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<g className="iconGroup">
  			<path fill="currentColor" className="primaryColor"
  				d="M144 112v51.6H48c-26.5 0-48 21.5-48 48v88.6c0 26.5 21.5 48 48 48h96v51.6c0 42.6 51.7 64.2 81.9 33.9l144-143.9c18.7-18.7 18.7-49.1 0-67.9l-144-144C195.8 48 144 69.3 144 112zm192 144L192 400v-99.7H48v-88.6h144V112l144 144zm80 192h-84c-6.6 0-12-5.4-12-12v-24c0-6.6 5.4-12 12-12h84c26.5 0 48-21.5 48-48V160c0-26.5-21.5-48-48-48h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96z"
  			></path>
		</g>
	</svg>
);

const UserIcon = props => (
	<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<g className="iconGroup">
  			<path fill="currentColor" className="primaryColor"
    			d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"
  			></path>
		</g>
	</svg>
);

const PasswordIcon = props => (
	<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<g className="iconGroup">
  			<path fill="currentColor" className="primaryColor"
  				d="M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z"
  			></path>
		</g>
	</svg>
);

const SubmitIcon = props => (
	<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="submitIcon" className="shiftedIcon">
		<g className="iconGroup">
  			<path fill="currentColor" className="primaryColor"
  				d="M215.6 295.9H24a23.94 23.94 0 0 1-24-24v-32a23.94 23.94 0 0 1 24-24h191.5l-77.6-71.1a23.84 23.84 0 0 1-.7-34.5l21.9-21.9a24.08 24.08 0 0 1 33.9-.1L344.9 239a24 24 0 0 1 0 34.1L193 423.7a24 24 0 0 1-33.9-.1l-21.9-21.9a24 24 0 0 1 .8-34.7z"
  			></path>
		</g>
	</svg>
);

const LogoutIcon = props => (
	<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="logoutIcon">
		<g className="iconGroup">
  			<path fill="currentColor" className="primaryColor"
  				d="M272 112v51.6h-96c-26.5 0-48 21.5-48 48v88.6c0 26.5 21.5 48 48 48h96v51.6c0 42.6 51.7 64.2 81.9 33.9l144-143.9c18.7-18.7 18.7-49.1 0-67.9l-144-144C323.8 48 272 69.3 272 112zm192 144L320 400v-99.7H176v-88.6h144V112l144 144zM96 64h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h84c6.6 0 12 5.4 12 12v24c0 6.6-5.4 12-12 12H96c-53 0-96-43-96-96V160c0-53 43-96 96-96z"
  			></path>
		</g>
	</svg>
);

const RegisterIcon = props => (
	<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="registerIcon" className="">
		<g className="iconGroup">
  			<path fill="currentColor" className="primaryColor"
  				d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
  			></path>
		</g>
	</svg>
);

const SignIcon = props => (
	<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="signIcon" className="hidden">
		<g className="iconGroup">
  			<path fill="currentColor" className="primaryColor"
  				d="M506.578,274.10351C489.78116,202.99807,431.23821,146.26567,359.5898,131.959a194.38794,194.38794,0,0,0-101.80269,6.61719,143.73889,143.73889,0,0,1,85.51364-110.7441C356.6152,22.13681,353.61715,2.41416,339.207.963a196.56477,196.56477,0,0,0-65.10349,4.459C202.99807,22.21884,146.26567,80.76179,131.959,152.4102a194.38794,194.38794,0,0,0,6.61719,101.80269,143.73889,143.73889,0,0,1-110.7441-85.51364C22.13681,155.3848,2.41416,158.38285.963,172.793a196.56477,196.56477,0,0,0,4.459,65.10349C22.21884,309.00193,80.76179,365.73433,152.4102,380.041a194.38794,194.38794,0,0,0,101.80269-6.61719,143.73889,143.73889,0,0,1-85.51364,110.7441c-13.31445,5.69531-10.3164,25.418,4.09375,26.86913a196.56477,196.56477,0,0,0,65.10349-4.459C309.00193,489.78116,365.73433,431.23821,380.041,359.5898a194.38794,194.38794,0,0,0-6.61719-101.80269,143.73889,143.73889,0,0,1,110.7441,85.51364c5.69531,13.31445,25.418,10.3164,26.86913-4.09375A196.56477,196.56477,0,0,0,506.578,274.10351ZM256,304a48,48,0,1,1,48-48A47.99985,47.99985,0,0,1,256,304Z"
  			></path>
		</g>
	</svg>
);

const ThemeIcon = props => (
	<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="shiftedIcon">
		<g className="iconGroup">
  			<path fill="currentColor" className="primaryColor"
    			d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"
  			></path>
		</g>
	</svg>
);

const BookingsIcon = props => (
	<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<g className="iconGroup">
  			<path fill="currentColor" className="primaryColor"
    			d="M504 255.532c.252 136.64-111.182 248.372-247.822 248.468-64.014.045-122.373-24.163-166.394-63.942-5.097-4.606-5.3-12.543-.443-17.4l16.96-16.96c4.529-4.529 11.776-4.659 16.555-.395C158.208 436.843 204.848 456 256 456c110.549 0 200-89.468 200-200 0-110.549-89.468-200-200-200-55.52 0-105.708 22.574-141.923 59.043l49.091 48.413c7.641 7.535 2.305 20.544-8.426 20.544H26.412c-6.627 0-12-5.373-12-12V45.443c0-10.651 12.843-16.023 20.426-8.544l45.097 44.474C124.866 36.067 187.15 8 256 8c136.811 0 247.747 110.781 248 247.532zm-167.058 90.173l14.116-19.409c3.898-5.36 2.713-12.865-2.647-16.763L280 259.778V116c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v168.222l88.179 64.13c5.36 3.897 12.865 2.712 16.763-2.647z"
  			></path>
		</g>
	</svg>
);

const EventsIcon = props => (
	<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<g className="iconGroup">
  			<path fill="currentColor" className="primaryColor"
  				d="M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z"
  			></path>
		</g>
	</svg>
);

const DarkIcon = props => (
	<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<g className="iconGroup">
  			<path fill="currentColor" className="primaryColor"
  				d="M332.2 426.4c-93.1 17.7-178.5-53.7-178.5-147.7 0-54.2 29-104 76.1-130.8 7.3-4.1 5.4-15.1-2.8-16.7C108.7 109.4 0 200 0 320c0 106 85.8 192 191.8 192 59.2 0 113.2-26.9 149-71.1 5.3-6.5-.5-16.1-8.6-14.5zM304 96l16-32 32-16-32-16-16-32-16 32-32 16 32 16 16 32zm154.7 85.3L432 128l-26.7 53.3L352 208l53.3 26.7L432 288l26.7-53.3L512 208l-53.3-26.7z"
  			></path>
		</g>
	</svg>
);

const LightIcon = props => (
	<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<g className="iconGroup">
  			<path fill="currentColor" className="primaryColor"
  				d="M352 256a96 96 0 1 1-96-96 96.15 96.15 0 0 1 96 96z"
  			></path>
  			<path fill="currentColor" className="secondaryColor"
  				d="M502.42 240.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.41-94.8a17.31 17.31 0 0 0-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4a17.31 17.31 0 0 0 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.41-33.5 47.3 94.7a17.31 17.31 0 0 0 31 0l47.31-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3a17.33 17.33 0 0 0 .2-31.1zm-155.9 106c-49.91 49.9-131.11 49.9-181 0a128.13 128.13 0 0 1 0-181c49.9-49.9 131.1-49.9 181 0a128.13 128.13 0 0 1 0 181z"
  			></path>
		</g>
	</svg>
);

const DefaultIcon = props => (
	<svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<g className="iconGroup">
  			<path fill="currentColor" className="primaryColor"
  				d="M256 8v496C119 504 8 393 8 256S119 8 256 8z"
  			></path>
  			<path fill="currentColor" className="secondaryColor"
  				d="M504 256c0 137-111 248-248 248V8c137 0 248 111 248 248z"
  			></path>
		</g>
	</svg>
);

// Exports
export { LoginIcon, UserIcon, PasswordIcon, SubmitIcon, LogoutIcon, RegisterIcon, SignIcon, ThemeIcon, BookingsIcon, EventsIcon, DarkIcon, LightIcon, DefaultIcon };