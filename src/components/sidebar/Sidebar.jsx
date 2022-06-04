import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="top">
                <DashboardIcon />
                <span className="logo">Dashboard</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li><PersonIcon className="icon" />
                    <span>Users</span></li>
                </ul>
                <ul>
                    <li><CategoryIcon className="icon" />
                    <span>Product</span></li>
                </ul>
                <ul>
                    <li><CreditCardIcon className="icon" />
                    <span>Orders</span></li>
                </ul>
                <ul>
                    <li><DeliveryDiningIcon className="icon" />
                    <span>Deliveries</span></li>
                </ul>
                <hr />
                <ul>
                    <li><AnalyticsIcon className="icon" />
                    <span>Stats</span></li>
                </ul>
                <ul>
                    <li><NotificationsActiveIcon className="icon" />
                    <span>Notifications</span></li>
                </ul>
                <hr />
                <ul>
                    <li><CloudDoneIcon className="icon" />
                    <span>System Health</span></li>
                </ul>
                <ul>
                    <li><TextSnippetIcon className="icon" />
                    <span>Logs</span></li>
                </ul>
                <ul>
                    <li><SettingsIcon className="icon" />
                    <span>Settings</span></li>
                </ul>
                <hr />
                <ul>
                    <li><AccountCircleIcon className="icon" />
                    <span>Profile</span></li>
                </ul>
                <ul>
                    <li><PowerSettingsNewIcon className="icon" />
                    <span>Logout</span></li>
                </ul>
            </div>
            <div className="bottom">color</div>
        </div>
    )
}
