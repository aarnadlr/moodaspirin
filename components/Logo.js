import React from 'react'

export default function Logo(props){

  return (
    <div className="logo" >
      <img className="circle" src="../static/logo-files/ma-logo-circle.svg" alt=""/>
      <img className="text" src="../static/logo-files/ma-logo-text.svg" alt=""/>

      <style jsx>{`
      .logo{
        width: ${props.logoWidth};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .circle{
        opacity: 0;
        width: ${props.circWidth};
        padding-bottom: 15px;

        animation-name: slideUp; /* the name of the animation we defined above */
        animation-duration: .9s; /* the duration of the animation */
        animation-timing-function: ease; /* how the animation will behave */
        animation-delay: 0s; /* how long to delay the animation from starting */
        animation-iteration-count: 1; /* how many times the animation will play */
        animation-fill-mode: forwards;
      }
      .text{
        opacity: 0;
        width: ${props.textWidth};

        animation-name: slideUp; /* the name of the animation we defined above */
        animation-duration: .9s; /* the duration of the animation */
        animation-timing-function: ease; /* how the animation will behave */
        animation-delay: .1s; /* how long to delay the animation from starting */
        animation-iteration-count: 1; /* how many times the animation will play */
        animation-fill-mode: forwards;
      }
      @keyframes slideUp {
        0% {
          transform: translateY(0);
          opacity: 0;
        }
        100% {
          transform: translateY(-80px);
          opacity: 1;
        }
      }
    `}</style>
    </div>
  )
}
