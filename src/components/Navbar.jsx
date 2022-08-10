import { FaLanguage } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

export default function Navbar() {

    const logo = "https://imgs.search.brave.com/NI0aqZwNOuZHERcoYoDDZKQUtmrRbPtcPhElaqFN6oc/rs:fit:1024:1024:1/g:ce/aHR0cDovL3N0YXJ0/dXBoeWRlcmFiYWQu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA3L1RyZWxs/TG9nby0xMDI0eDEw/MjQuanBn";

    return (
        <div className="bg-transparent py-2 text-white ">
            <div className="flex justify-between items-center">
                <div className="flex space-x-5 items-center">
                    <img src={logo} width={45} height={45} className="" alt="trell" />
                    <BsThreeDots className="text-2xl text-slate-300" />
                </div>

                <div className='flex space-x-8 items-center'>
                    <div className='flex space-x-2 items-end'>
                        <FaLanguage className='text-3xl cursor-pointer' />
                        <span>Change Language</span>
                    </div>
                    <button className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:bg-pink-700 text-white py-2 px-4 rounded-full">
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}