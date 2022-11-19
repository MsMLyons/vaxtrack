import React, {useState} from 'react'
import '../Style/UserDashboard.css'
import { Link } from 'react-router-dom'
function UserDashboard({familyMembers, setFamilyMembers}) {
    let tips = ["Wake up and do something that inspires you like journaling, walking in nature, or other hobbies. Whether it’s productive or relaxing, beginning your morning on the right foot can cultivate a positive mindset and set the tone for the entire day.",
                "Sleep is just as important as eating healthy and exercising. From improving your productivity and concentration to helping support your overall health, getting the recommended hours of sleep per night can have a major impact on your wellbeing.",
                "Whether you get outside for some exercise or to read a book in the sunshine, you should take at least 30 minutes a day to get some vitamin D.",
                "Tracking your steps will help you see how much you’ve actually moved throughout the day and may even encourage you to challenge yourself to reach a certain amount of steps every day.",
                "Eyes become easily strained when you’re constantly focused on your computer screen. Reduce the risk of tired eyes by looking away from your computer for at least 20 seconds in 20-minute intervals.",
                "Real food is whole, single-ingredient foods that are unprocessed and free of additives. Incorporating these foods into your day can help improve your health, manage your weight and give you energy.",
                "Spending time alone can be extremely beneficial for your mental health. Get to know yourself, figure out what you want and start living your most purposeful life.",
                "Your body goes quite a few hours without hydration as you sleep. Drinking a full glass of water in the morning can aid digestion, flush out toxins, enhance skin health and give you an energy boost.",
                "Building a daily skin care routine can help you maintain overall skin health or improve concerns like acne, scarring or dark spots. Find a cleanser, serum, moisturizer and sunscreen and give your skin the love it deserves."
              ]

    let randomNumber = 1 || Math.floor(Math.random() * 10);

    return (
      <div className="main-background-color">
      <div className='user-dashboard-container'>
          <div className="user-information">
          <div className="user-introduction">
              <img className="avatar-img " src="https://www.w3schools.com/w3images/avatar6.png" alt="..."/>
              <h5>Hello Kate</h5>    
          </div>
          <div className="healthy-tips">
              <h6>Healthy tip of the day</h6>
              <p className="tip-text">{tips[randomNumber]}</p>
          </div>
          </div>
          <div className="family-members-information">
            <h5>DISPLAY VACCINATION RECORDS</h5>
            <div className="family-members-list" >
              
            {familyMembers.map(member => {return(
                <div className="card" key={member.id} >
                    <img className="card-img-top" src={member.picture} alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{member.name}</h5>
                      <Link to="/vaccineList" state={{id: member.id, name: member.name}} ><img className="arrow-icon" src="./arrow.png" alt="..."/></Link>
                    </div>
                </div>)
            })}
              
          </div>
          <div className="add-family-members"> 
              <Link 
              to="/newFamilyMember"
              
              
              className="nav-item nav-link"
              id="Contact">
                <button className="add-new-family-member" >Add new family member</button>
              </Link></div>
          </div>

          </div>
        </div>
    )
}

export default UserDashboard