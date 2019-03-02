// import Link from /"next/link";
// import Header from "../components/header";
import Logo from "../components/Logo";
import "../styles/styles.scss";

export default () => (
  <main>
    
    <div className="center">
      <Logo logoWidth={''} circWidth={'180px'}  textWidth={'220px'}/>
    </div>


    <style jsx>{`
      main{
      }
      .center{
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </main>
);