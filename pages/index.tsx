import React, { Suspense, useEffect, useState } from "react";
import type { NextPage } from "next";
import ThemeOne from "../app/themes/themeOne";
import { useRouter } from "next/router";
import Permalink from "../utils/Permalink";
import Loader from "../app/components/loader/loader";

const HomeScreen: NextPage = () => {

  const router = useRouter();
  const [theme, setTheme] = useState<string>("ThemeOne"); 
  const [loading, setLoading] = useState<boolean>(true); 
  
  useEffect(() => {
    
    if (!router.isReady) {
      return
    }else{
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() =>{
    document.body.className='';  
    document.body.classList.add("home");
  });

  return (
    <>
      {
        loading && (
          <div style={{padding: "200px"}}>
            <Loader/>
          </div>
        )
      }
      {
        !loading && <Suspense fallback={<div>Loading...</div>}>
          {
            theme == "ThemeOne" && <ThemeOne/>
          }        
        </Suspense>
      }      
    </>
  );
};

export default HomeScreen;
