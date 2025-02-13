import './Purchases.scss';

import {useState} from 'react';

// components
import DashboardItem from '../DashboardItem/DashboardItem';
import PurchasesItem from '../PurchasesItem/PurchasesItem';

// images
import chikenImg from '../../assets/images/card-chiken-img.png';
import turkeyImg from '../../assets/images/card-turkey-img.png';
import fishImg from '../../assets/images/card-fish-img.png';
import chevronDown from '../../assets/icons/chevron-down.svg';

function Purchases() {
    const [isActive, setIsActive] = useState(false);

    function toggleMenu() {
        setIsActive(prevState => !prevState);
    }

    return (
        <section className="purchases">
            <div className="container">
                <div className="purchases-flex">
                <div className="purchases-content">
                    <h2 className="purchases-title">Control <span className="purple">Purchases</span> Via Dashboard</h2>

                    <div className="purchases-container">
                        <PurchasesItem img={chikenImg} title={`Chicken Hell`} 
                        status={`On The Way`} time={`3:09 PM`} active={`active`} />
                        <PurchasesItem img={turkeyImg} title={`Swe Dish`} 
                        status={`Delivered`} time={`Yesterday`} />
                        <PurchasesItem img={fishImg} title={`Fish Hell Veg`} 
                        status={`Cancelled`} time={`Yesterday`} />
                    </div>
                </div>

                <div className="purchases-dashboard">
                    <div className="dashboard-header">
                        <h3 className="dashboard-title">Purchases</h3>
                        <div className="dropdown">
                            <button className="dropbtn" onClick={toggleMenu}>
                                <p>This month</p>
                                <img src={chevronDown} alt="chevronDown" className={`chevron-down ${isActive ? 'active' : ''}`} />
                            </button>
                                <ul className={`dropdown-content ${isActive ? 'active' : ''}`}>
                                    <li>This week</li>
                                    <li>This month</li>
                                    <li>This year</li>
                                </ul>
                        </div>
                    </div>

                    <div className="dashboard-content">
                        <DashboardItem title={`Expense`} percent={`10`} price={`409.00`} />

                        <DashboardItem title={`Vocher Usage`} percent={`5`} price={`45.78`} />
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Purchases;