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
        width: ${props.circWidth};
        padding-bottom: 15px;
      }
      .text{
        width: ${props.textWidth};
      }
    `}</style>
    </div>
  )
}
