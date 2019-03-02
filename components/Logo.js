import React from 'react'

export default function Logo(props){

  return (
    <div className="logo" >
      <img className="circle" src="../static/logo-files/ma-logo-circle.svg" alt=""/>
      <img className="text" src="../static/logo-files/ma-logo-text.svg" alt=""/>

      <style jsx>{`
      .logo{
        width: ${props.width};
      }
      .circle{

      }
      .text{

      }
    `}</style>
    </div>
  )
}
