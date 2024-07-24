import React from 'react';
import '../Styles/Specials.css';
import Footer from './Footer';

const specials = [
    { day: 'MONDAY', description: 'FREE POOL FROM 6PM - 12AM' },
    { day: 'TUESDAY', description: 'TEA-TUESDAY STARTING @ 8PM: ALL TEA SHOTS $4.50' },
    { day: 'WEDNESDAY', description: 'THE QUEEN OF HEARTS DRAWING @ 8:30PM AND WHISKEY WEDNESDAY ($1 OFF WELL WHISKEY)' },
    { day: 'THURSDAY', description: '$2 OFF DOMESTIC BEERS AND TEXAS HOLD \'EM' },
    { day: 'FRIDAY', description: 'GIGI SWEET SOUNDS (KARAOKE) @ 8PM' },
    { day: 'SATURDAY', description: '$1.00 DEEP EDDIES VODKA' },
    { day: 'SUNDAY', description: 'SUNDAY FUNDAY! FREE DARTS STARTS @ 8PM' },
];

const Specials = () => {
    const currentDayIndex = new Date().getDay(); // Sunday - Saturday : 0 - 6
    const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

    return (
        <div className='pushdown-other'>
            <div className="specials-table-section">
                <h2>SPECIALS OF THE WEEK</h2>
                <hr className="animated-hr" />
                <table className="specials-table">
                    <thead>
                        <tr>
                            <th>DAY</th>
                            <th>SPECIAL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {specials.map((special, index) => (
                            <tr key={index} className={days[currentDayIndex] === special.day ? 'current-day' : ''}>
                                <td>{special.day}</td>
                                <td>{special.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </div>
    );
};

export default Specials;
