import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux";
// import { list_videos } from '../redux/action';

export default function WatchHeader() {
    return (
        <>
            <div className="flex justify-center space-x-10 py-2 text-lg border-2 font-Poppins">
                <Link to="/watch" className='border-white border-b-2 active:border-red-600 cursor-pointer'>Watch</Link>
                <Link to="/liked">Liked Videos</Link>
                <Link to="/history">History</Link>
            </div>
        </>
    )
}