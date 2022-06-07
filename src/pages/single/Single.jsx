
import './single.scss';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Navbar } from '../../components/navbar/Navbar';
import { Chart } from '../../components/chart/Chart';
import { List } from '../../components/table/Table';

export const Single = () => {
	return (
		<div className="single">
			<Sidebar />
			<div className='singleContainer'>
				<Navbar />
				<div className="top">
					<div className="left">
						<div className="editButton">
							Edit
						</div>
						<h1 className="title">Information</h1>
						<div className="item">
							<img src={require('../../assets/images/male.png')} alt="" className="itemImg" />
							<div className="details">
								<h1 className="itemTitle">John Doe</h1>
								<div className="detailItem">
									<span className="itemKey">Email:</span>
									<span className="itemValue">johndoe@mail.com</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Phone:</span>
									<span className="itemValue">+254 790 812215</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Address:</span>
									<span className="itemValue">Madaraka Estate, Ole Sangale Rd.</span>
								</div>
								<div className="detailItem">
									<span className="itemKey">Country:</span>
									<span className="itemValue">Kenya</span>
								</div>
							</div>
						</div>
					</div>
					<div className="right">
						<Chart aspect={3 / 1} title='User Info (Previous 6 Months'/>
					</div>
				</div>
				<div className="bottom">
					<div className="title">Previous Transactions</div>
					<List />
				</div>
			</div>
		</div>
	)
}
