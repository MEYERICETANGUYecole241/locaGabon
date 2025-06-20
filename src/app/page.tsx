
import Header from "@/app/components/Header";
import Allcard from "./components/Allcard";
import A_propos from "./components/A_propos";
import Services from "./components/services";
import Contact from "./components/Contact";



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
          
          <Contact/>
          
            </div>
 

   
  );
}
