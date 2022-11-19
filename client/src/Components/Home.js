import React from 'react'
import '../Style/Home.css'


function Home() {
  return (
    <div className="home-container">
      
      <div className="text-main">
        <h5>FAMILY VACCINATION RECORD IN ONE PLACE</h5>
        <br/>
        Vaxtrack serves as a repository for your vaccinations throughout yours or your child’s lifetime. 
        This application allows the user to create individual accounts for themselves or family members for which they 
        want to track their vaccination record.  </div>
      
      <div className="picture-main">

        <img src="./main.png" id="main-page-img" alt=".."/>

      </div>

      <div className='filler'></div>

    </div>

  )
}



export default Home