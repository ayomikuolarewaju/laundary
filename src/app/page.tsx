import Footer from "./components/Footer";
import Header from "./components/Header";



export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#e1faeb]">
      <div>
        <Header />
      </div>
      <Footer/>
    </div>
  );
}
