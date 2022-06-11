import './navbar.scss';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListIcon from '@mui/icons-material/List';
import { DarkModeContext } from '../../context/darkModeContext';
import { useContext } from 'react';

export const Navbar = () => {

	const { dispatch } = useContext(DarkModeContext)

	return (
		<div className='navbar'>
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder='Search...' />
					<SearchIcon />
				</div>
				<div className="items">
					<div className="item">
						<LanguageIcon className='icon' />
						en
					</div>
					<div className="item">
						<DarkModeOutlinedIcon className='icon' onClick={()=>dispatch({type:'TOGGLE'})} />
					</div>
					<div className="item">
						<FullscreenExitIcon className='icon' />
					</div>
					<div className="item">
						<NotificationsNoneOutlinedIcon className='icon' />
						<div className="counter">1</div>
					</div>
					<div className="item">
						<ChatBubbleOutlineOutlinedIcon className='icon' />
						<div className="counter">2</div>
					</div>
					<div className="item">
						<ListIcon className='icon' />
					</div>
					<div className="item">
						<img src={require('../../assets/images/male.png')}  alt='profile' className='avatar'/>
					</div>
				</div>
			</div>
		</div>
	)
}
