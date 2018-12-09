import React from 'react';

function ButtonBrush(props) {
    return (
        <button className="btn brush-btn" id="brushBtn" onClick={props.getBrush}>
            <svg fill="#fff"
                 version="1.1"
                 xmlns="http://www.w3.org/2000/svg"
                 xmlnsXlink="http://www.w3.org/1999/xlink"
                 viewBox="0 0 441.723 441.723"
                 xmlSpace="preserve">
                <path d="M288.862,251.877l37.306,17.657c5.313,2.513,9.529,6.6,12.303,11.649c22.201-22.422,46.229-57.663,66.391-99.959
					c38.784-81.371,48.522-157.614,21.736-170.29c-26.789-12.682-79.94,43.008-118.732,124.378
					c-20.145,42.281-32.38,83.088-35.794,114.396c1.627-0.292,3.274-0.509,4.953-0.509
					C281.148,249.208,285.128,250.105,288.862,251.877z"/>
                <path d="M255.673,321.559l37.306,17.652c2.736,1.299,5.626,1.911,8.479,1.911c6.483,0,12.595-3.342,16.354-8.916
					c-22.218-15.404-46.446-27.078-72.05-35.558C242.096,306.21,246.26,317.11,255.673,321.559z"/>
                <path d="M260.687,265.959c3.522,1.167,6.977,2.433,10.435,3.735c18.07,6.801,35.298,15.457,52.065,25.082
					c3.302,1.904,6.6,3.819,9.874,5.791c1.494-4.584,1.246-9.369-0.501-13.609c-1.808-4.376-5.13-8.15-9.75-10.335l-37.306-17.657
					c-2.745-1.294-5.626-1.915-8.479-1.915c-1.955,0-3.871,0.324-5.727,0.882C267.006,259.235,263.303,262.072,260.687,265.959z"/>
                <path d="M249.878,287.672c9.75,3.282,19.304,7.001,28.634,11.192c5.834,2.621,11.617,5.366,17.264,8.363
					c9.165,4.869,18.058,10.279,26.689,16.178l6.561-13.77c-4.949-2.989-9.959-5.883-14.988-8.716
					c-13.585-7.654-27.499-14.651-41.974-20.386c-5.274-2.092-10.64-3.963-16.065-5.702L249.878,287.672z"/>
                <path d="M54.416,262.609c56.659-36.744-9.027-93.722-31.747-123.417c-9.086-11.886-29.564-0.185-20.33,11.884
					c21.047,27.517,80.401,69.737,26.407,99.435c-15.974,8.788-26.549,24.794-14.946,41.813c11.76,17.244,44.418,18.782,62.714,21.468
					c12.771,1.875,26.158,5.643,38.389,10.523c-4.959,2.225-10.247,3.995-15.316,5.887c-25.554,9.529-82.507,32.248-62.378,70.815
					c16.44,31.502,62.3,30.905,98.09,31.57c-0.433-0.729-0.785-1.547-1.026-2.496c-1.948-7.639,4.33-11.971,19.522-20.351
					c-22.96-2.016-45.987-1.402-68.801-5.449c-45.891-8.144-16.437-36.452,9.397-47.012c13.619-5.559,66.101-17.54,48.304-42.707
					c-10.726-15.18-39.409-18.767-55.433-22.811c-11.021-2.781-22.81-3.519-33.977-5.887
					C26.917,280.273,37.877,273.341,54.416,262.609z"/>
                <path d="M164.448,412.863c-17.138,9.354-31.402,16.911-16.076,16.911c4.166,0,10.55-0.564,19.626-1.799
					c12.339-1.68,29.679-4.593,53.435-9.057c131.199-24.654,31.61-89.174,31.61-89.174c-6.676-2.601-13.048-3.759-18.995-3.759
					c-32.506,0-52.179,34.66-36.485,58.877C202.194,392.024,181.844,403.366,164.448,412.863z"/>
            </svg>
        </button>
    )
}

export default ButtonBrush;