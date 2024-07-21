import React from 'react';
import "../Styles/Team.css";
import rachel from "../photos/rachel_portrait.jpeg"
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const teamMembers = [
    {
        name: 'Rachelle',
        title: 'Founder',
        description: 'Matt Mullenweg is an American online social media entrepreneur, web developer and musician living in San Francisco, California. He is best known for developing the free and open source web software WordPress, now managed by The WordPress Foundation.',
        image: rachel,
        socials: {
            twitter: '#',
            email: '#',
            linkedin: '#',
        },
    },
    {
        name: 'Jason',
        title: 'Founder',
        description: 'Mark Zuckerberg is an American computer programmer and internet entrepreneur. He is best known as one of five co-founders of the social networking website Facebook. As of April 2013, Zuckerberg is the chairman and chief executive of Facebook, Inc. and in 2013 his personal wealth was estimated to be US $16.8 billion.',
        image: rachel,
        socials: {
            twitter: '#',
            email: '#',
            linkedin: '#',
        },
    },
    {
        name: 'Rachel',
        title: 'Senior Vice President of Design',
        description: 'Jonathan Ive, is a British designer and the SVP of Design at Apple Inc. He has the overall responsibility for Industrial Design and also provides leadership and direction for Human Interface (HI) software teams across the company. He is the lead designer of many of Apple\'s products, including the MacBook Pro, iMac, MacBook Air, iPod, iPod Touch, iPhone, iPad, iPad Mini and iOS 7.',
        image: rachel,
        socials: {
            twitter: '#',
            email: '#',
            linkedin: '#',
        },
    },
    {
        name: 'Erica',
        title: 'President & Commander-in-chief',
        description: 'Barack Obama is the 44th and current President of the United States, and the first African American to hold the office. Born in Honolulu, Hawaii, Obama is a graduate of Columbia University and Harvard Law School, where he was president of the Harvard Law Review. He was a community organizer in Chicago before earning his law degree. He worked as a civil rights attorney in Chicago and taught constitutional law at the University of Chicago Law School from 1992 to 2004.',
        image: rachel,
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
