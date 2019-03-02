// import Link from /"next/link";
// import Header from "../components/header";
import Logo from "../components/Logo";

export default () => (
  <main>
    
    <div className="center">
      <Logo logoWidth={''} circWidth={'180px'}  textWidth={'220px'}/>
    </div>


    <style jsx>{`
      main{
        background:rgb(238, 238, 238);
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