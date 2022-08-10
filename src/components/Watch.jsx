import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { list_videos } from '../redux/action';
import { AiOutlineHeart } from 'react-icons/ai';
import { FaShare } from 'react-icons/fa';
import { GrDownload } from 'react-icons/gr';
import { BsBlockquoteLeft } from 'react-icons/bs';
import { saveAs } from 'file-saver';


export default function Watch(props) {

    useEffect(() => {
        dispatch(list_videos())
    }, []);

    const result = useSelector((state) => state.cardData);
    const dispatch = useDispatch();

    return (
        <>
            <div className='md:w-10/12 md:mx-auto py-5 flex flex-row justify-evenly flex-wrap font-Poppins'>

                {
                    result.map((item) => {
                        return (

                            <div className="max-w-fit flex flex-col rounded shadow-lg m-5 hover:shadow-2xl transition-all">
                                <iframe width="320" height="400" src={item.link} className="object-center " alt="Trell Watch" />
                                <div className="px-3 py-2 space-y-2">
                                    <div className="">{item.title}</div>
                                    <div className="flex items-center "><BsBlockquoteLeft className='mr-2' />{item.creator}</div>
                                </div>
                                <div className="px-5 pr-8 py-2 text-2xl text-slate-800 flex justify-between ">
                                    <div className='flex space-x-5'>
                                        <AiOutlineHeart className='cursor-pointer' />
                                        <FaShare className='cursor-pointer' />
                                    </div>
                                    <button onClick={() => saveAs(item.link)}><GrDownload className='cursor-pointer' /></button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}