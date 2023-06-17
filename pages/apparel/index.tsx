import type { NextPage } from "next";
import Header from "../../app/themes/themeOne/components/Header";
import { apparelData } from "../../app/constants/sampleData";

const APPARELSCREEN: NextPage = () => {
   return (
      <div style={{ backgroundColor: '#ffffff' }}>
         <div className="wrapper  ">
            {/* Header */}
            <Header />
            {/* End Header */}
         </div>
         <section className="tt text-center bannerChoose position-absolute">
            <div className="bannerContent bg-white border  w-75 m-auto" style={{ borderRadius: 25 }}>
               <h2 className="fs-32 font-Bsoul m-4 ">Choose Your Apparel</h2>
               <ul>
                  {apparelData.map((info: any) => {
                     return (
                        <li className="list-inline-item image-background" style={{ backgroundColor: '#d95c4e' }}>
                           <a href="/shop" tabIndex={0}>
                              <p className="saree-info">{info.name}</p>
                              <div className="overlay"></div>
                           </a>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </section>
      </div>
   );
};

export default APPARELSCREEN;
