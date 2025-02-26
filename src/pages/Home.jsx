import { useEffect, useState } from "react"
import Background from "../Components/Background/Background.jsx"
import Navbar from "../Components/Navbar/Navbar.jsx"
import Hero from "../Components/Hero/Hero.jsx"

const App = () => {
  let heroData=[
    {text1:"Dive into",text2:"What you love"},
    {text1:"Thar",text2:"your passions"},
    {text1:"Give in too",text2:"your Loves"},
  ]
  const [heroCount,setHeroCount]=useState(0);
  const [playStatus,setPlayStatus]=useState(false);
  useEffect(()=>{
    setInterval(() => {
      setHeroCount((c)=>{return c===2?0:c+1})
    }, 3000);
  },[])

  return (
    <div> 
      <Background playStatus={playStatus} heroCount ={heroCount}/> 
      <Navbar/>
      <Hero
      setPlayStatus={setPlayStatus}
      heroData={heroData[heroCount]}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      playStatus={playStatus}
      />
      
    </div>
  )
}

export default App