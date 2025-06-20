
import Header from "@/app/components/Header";
import Allcard from "./components/Allcard";
import A_propos from "./components/A_propos";
import Services from "./components/services";
import Contact from "./components/Contact";
import Head from 'next/head';


export default function Home() {
  return (
    <div>
             <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>


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
