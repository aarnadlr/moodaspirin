import Link from "next/link";
import Header from "../components/header";
import Logo from "../components/Logo";

export default () => (
  <main>

    <div className="center">
      <Logo width={'200px'}/>
    </div>


    <style jsx>{`

.center{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
`}</style>
  </main>
);