import './new.scss';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Navbar } from '../../components/navbar/Navbar';
import UploadFileIcon from '@mui/icons-material/UploadFile';

export const New = ({ inputs, title }) => {
	return (
		<div className='new'>
			<Sidebar />
			<div className="newContainer">
				<Navbar />
				<div className="top">
					<h1>{title}</h1>
				</div>
				<div className="bottom">
					<div className="left">
						<img src={require('../../assets/images/no-image-500x500.png')} alt="" className='imgItem' />
					</div>
					<div className="right">
						<form>
							<div className="formInput">
								<label htmlFor='file'>
									Image: <UploadFileIcon className='icon' />
								</label>
								<input type="file" name="" id="file" style={{ display: 'none' }} />
							</div>
							
							<button className='button'>Submit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}
