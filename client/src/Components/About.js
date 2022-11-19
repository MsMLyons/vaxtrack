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
            <Card.Img variant="top" src="./mlyons.png" />
                <Card.Body>
                <Card.Title><a href="https://www.linkedin.com/in/marki-lyons/">Marki Lyons</a></Card.Title>
                <Card.Text>
                    Team Lead & Full Stack Developer
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src="./Agapic.jpg" />
                <Card.Body>
                <Card.Title><a href="https://www.linkedin.com/in/agnieszka-krokosz/">Agnes Krokosz</a></Card.Title>
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
            <Card.Img variant="top" src="./mnphoto.jpg" />
                <Card.Body>
                <Card.Title><a href="https://www.linkedin.com/in/marina-nambiar/">Marina Nambiar</a></Card.Title>
                <Card.Text>
                    Full Stack Developer
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src="./spatel.jpg" />
                <Card.Body>
                <Card.Title><a href="http://www.linkedin.com/in/sachidpatel">Sachi Patel</a></Card.Title>
                <Card.Text>
                    Front End Developer
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src="./lais.jpg" />
                <Card.Body>
                <Card.Title><a href="http://www.linkedin.com/in/la%C3%ADspinheiro">La&iacute;s Bordallo</a></Card.Title>
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