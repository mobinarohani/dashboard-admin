import React from 'react'
import './TopBar.css'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function TopBar() {
    return (
        <div className='ContainerTopbar'>
            <div className="TopbarElement">
                <div className="containerTopbarleft">
                    <img src='/logo192.png' className='logo' />
                </div>
                <div className="containerTopbarRight">
                    <div className="topbarNotification">
                        <NotificationsNoneOutlinedIcon />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className="topbarUser">
                        <AccountCircleIcon className='userAccount'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
