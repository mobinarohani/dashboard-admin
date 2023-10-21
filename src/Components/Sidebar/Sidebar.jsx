import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";

export default function Sidebar() {
    return (
        <div className='sidebar-container'>
            <div className="sliderElem">
                <div className='sidebar-box'>
                    <h3 className='sidebar-title'>Dashboard</h3>
                    <ul className='sidebar-listIcon'>
                        <Link to='/' className='link'>
                            <li className='sidebar-itemIcon active'>
                                <LineStyleIcon className='itemIcon' />
                                Home
                            </li>
                        </Link>
                        <Link to='/Analytics' className='link'>
                            <li className='sidebar-itemIcon '>
                                <TimelineIcon className='itemIcon' />
                                Analytics
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className='sidebar-box'>
                    <h3 className='sidebar-title'>Quick Menu </h3>
                    <ul className='sidebar-listIcon'>
                        <Link to='/Users' className='link'>
                            <li className='sidebar-itemIcon'>
                                <PermIdentityIcon className='itemIcon' />
                                Users
                            </li>
                        </Link>
                        <Link to='/NewUsers' className='link'>
                            <li className='sidebar-itemIcon '>
                                <PermIdentityIcon className='itemIcon' />
                                New User
                            </li>
                        </Link>
                        <Link to='/Product' className='link'>
                            <li className='sidebar-itemIcon '>
                                <StorefrontIcon className='itemIcon' />
                                Products
                            </li>
                        </Link>
                        <Link to='' className='link'>
                            <li className='sidebar-itemIcon '>
                                <AttachMoneyIcon className='itemIcon' />
                                Transactions
                            </li>
                        </Link>
                        <Link to='' className='link'>
                        <li className='sidebar-itemIcon '>
                            <BarChartIcon className='itemIcon' />
                            Reports
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
        </div >
    )
}
