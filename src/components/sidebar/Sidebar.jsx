import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { Link } from "react-router-dom";
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

export const Sidebar = () => {

    const { dispatch } = useContext(DarkModeContext)

    return (
        <div className='sidebar'>
            <div className="top">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <span className="logo">Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className='icon' />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">LISTS</p>
                    <Link to='/users' style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to='/product' style={{ textDecoration: 'none' }}>
                        <li>
                            <InventoryIcon className="icon" />
                            <span>Product</span>
                        </li>
                    </Link>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <DeliveryDiningIcon className="icon" />
                        <span>Deliveries</span>
                    </li>
                    <hr />
                    <p className="title">INFO</p>
                    <li>
                        <AnalyticsIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsActiveIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <hr />
                    <p className="title">SYSTEM</p>
                    <li>
                        <MonitorHeartIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <TextSnippetIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <hr />
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <PowerSettingsNewIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: 'LIGHT' })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: 'DARK' })}></div>
            </div>
        </div>
    )
}
