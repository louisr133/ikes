import React from 'react';
import "../Styles/Team.css";
import rachelle from "../photos/portraits/rachelle.jpeg"
import rachel from "../photos/portraits/rachel.jpg"
import erica from "../photos/portraits/erica.jpg"
import matt from "../photos/portraits/matt.jpg"
import lexie from "../photos/portraits/lexie.jpg"
import amy from "../photos/portraits/amy.jpg"
import jason from "../photos/portraits/jason.jpg"
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const teamMembers = [
    {
        name: 'Rachelle',
        title: 'Bartender',
        description: '\"If you see me, you know it\'s going to be fun time!\"',
        image: rachelle,
        socials: {
            twitter: '#',
            email: '#',
            linkedin: '#',
        },
    },
    {
        name: 'Rachel',
        title: 'Manager',
        description: '\"Not only can I manage a bar, I\'m a fantastic realtor.\"',
        image: rachel,
        socials: {
            twitter: '#',
            email: '#',
            linkedin: '#',
        },
    },
    {
        name: 'Erica',
        title: 'Bartender',
        description: '\"Did someone say Wheeler Walker JR? I\'m in!\"',
        image: erica,
        socials: {
            twitter: '#',
            email: '#',
            linkedin: '#',
        },
    },
    {
        name: 'Matt',
        title: 'Bartender',
        description: '\"Who\'s in for a game of darts?\"',
        image: matt,
        socials: {
            twitter: '#',
            email: '#',
            linkedin: '#',
        },
    },
    {
        name: 'Amy',
        title: 'Bartender',
        description: 'Cordinator of Austin\'s Forever 10.',
        image: amy,
        socials: {
            twitter: '#',
            email: '#',
            linkedin: '#',
        },
    },
    {
        name: 'Lexie',
        title: 'Bartender',
        description: '\"Who needs sleds when ya have an air mattress!\"',
        image: lexie,
        socials: {
            twitter: '#',
            email: '#',
            linkedin: '#',
        },
    },
    {
        name: 'Jason',
        title: 'Owner',
        description: '\"The pup is actually in charge.\"',
        image: jason,
        socials: {
            twitter: '#',
            email: '#',
            linkedin: '#',
        },
    },
];

const Team = () => {
    return (
        <div className='pushdown-other'>
            <div className="team-section">
                <h2>MEET THE TEAM</h2>
                <p className="quote">"INDIVIDUALS CAN AND DO MAKE A DIFFERENCE, BUT IT TAKES A TEAM TO REALLY MESS THINGS UP."</p>
                <div className="team-members">
                    {teamMembers.map((member, index) => (
                        <div className="team-member" key={index}>
                            <div className='photo-info'>
                                <img src={member.image} alt={member.name} className="member-image" />
                                <div className='info'>
                                    <h3 className='member-name'>{member.name}</h3>
                                    <p className="title">{member.title}</p>
                                    <p className="description">{member.description}</p>
                                </div>
                            </div>
                            <div className="social-icons">
                                <a href={member.socials.twitter} className="social-icon twitter-icon"><FontAwesomeIcon icon={faTwitter} size='xl'/></a>
                                <a href={member.socials.email} className="social-icon email-icon"><FontAwesomeIcon icon={faInstagram} size="xl" /></a>
                                <a href={member.socials.linkedin} className="social-icon linkedin-icon"><FontAwesomeIcon icon={faLinkedin} size='xl'/></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Team;
