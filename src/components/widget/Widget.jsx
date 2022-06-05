import './widget.scss';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

export const Widget = ({ type }) => {
    let data;


    // Temporary Data
    const amount = 100;
    const diff = 20;


    switch (type) {
        case 'user':
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: <PersonOutlineOutlinedIcon className='icon' style={{ color: '#2C73D2', backgroundColor: '#2c74d246' }} />,
            };
            break;
        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'See all orders',
                icon: <ShoppingCartOutlinedIcon className='icon' style={{ color: '#FFA500', backgroundColor: '#ffa60046' }} />,
            };
            break;
        case 'earning':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link: 'See net earnings',
                icon: <MonetizationOnOutlinedIcon className='icon' style={{ color: '#118C4F', backgroundColor: '#118c4e46' }} />,
            };
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See all balances',
                icon: <AccountBalanceWalletOutlinedIcon className='icon' style={{ color: '#845EC2', backgroundColor: '#845ec246' }}/>,
            };
            break;
        default:
            break;
    }
    return (
        <div className='widget'>
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">
                    {data.isMoney && '$'} {amount}
                </span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ArrowDropUpOutlinedIcon />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}
