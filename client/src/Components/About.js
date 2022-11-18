import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import '../Style/About.css'

function About() {
  return (
    <div>
        <div className='about'>
        <h2>About</h2>
        <p>As part of the GirlDevelopIt Hack4Health 2022 Hackathon, we developed the VaxTrack web application. We wanted to create a simple way to keep track of immunization records. VaxTrack allows users to add, update, and store vaccination records for themselves and their families.</p>
        </div>

        <div className='team'>
        <h2>Meet Our Team</h2>
            <CardGroup>   
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Marki Lyons</Card.Title>
                <Card.Text>
                    Team Lead & Full Stack Developer
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Agnes Krokosz</Card.Title>
                <Card.Text>
                    Full Stack Developer
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="./cdphoto.png" />
                <Card.Body>
                <Card.Title><a href="https://www.linkedin.com/in/cherese-m-dafney-mph-21178572">Cherese Dafney</a></Card.Title>
                <Card.Text>
                    Project Manager
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
            <CardGroup>   
            <Card>
                <Card.Body>
                <Card.Img variant="top" src="./mnphoto.jpg" />
                <Card.Title><a href="https://www.linkedin.com/in/marina-nambiar/">Marina Nambiar</a></Card.Title>
                <Card.Text>
                    Full Stack Developer
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>Sachi Patel</Card.Title>
                <Card.Text>
                    Front End Developer
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                <Card.Title>La&iacute;s Bordallo</Card.Title>
                <Card.Text>
                    Project Documentation
                </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
        </div>
    </div>
  )
}

export default About;