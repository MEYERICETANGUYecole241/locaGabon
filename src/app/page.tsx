
import Header from "@/app/components/Header";
import Allcard from "./components/Allcard";
import A_propos from "./components/A_propos";
import Services from "./components/services";
import Contact from "./components/Contact";
import Checkout from "./components/Checkout";

export default function Home() {
  return (
    <div>
        <Header/>
        <main> 
        {/* <ProductCard/> */}
        <Allcard/>
         </main>  
         <A_propos/> 
          <Services/> 
          <div className="h-screen flex flex-col md:flex-row bg-gray-50" >
          <Contact/>
          <Checkout/> 
            </div>
 

    </div>
  );
}
