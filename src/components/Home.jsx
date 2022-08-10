import Navbar from "./Navbar";
import {IoLogoGooglePlaystore} from 'react-icons/io5';
import {ImFolderDownload} from 'react-icons/im';
import {AiFillApple} from 'react-icons/ai';
import WatchHeader from './WatchHeader';
import { saveAs } from "file-saver";
import app from './trell.apk';

export default function Home(){
    return (
        <>
        <div className="w-full h-full bg-cover bg-purple_gradient font-Poppins text-white text-center border-t-4 border-red-600">
            <div className="md:w-11/12 md:mx-auto ">
                <Navbar/>
            </div>
            <div className="space-y-8 pt-4 pb-10 text-md tracking-wider">
                <h1>Passionate about Fashion, Beauty, Gadgets, Movies, Cooking & Travel?</h1>

                <div className="space-y-5 tracking-widest">
                    <h1 >Download the App.</h1>
                    <div className="flex items-center justify-center space-x-10 text-sm">
                        <button onClick={()=>saveAs(app)} className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-1 px-3 rounded-full flex items-center"><ImFolderDownload className="text-2xl self-center mx-2"/>Download (1.7MB)</button>
                        <button onClick={()=>saveAs(app)}  className="flex items-center bg-pink-700 bg-opacity-50 hover:bg-opacity-100 py-1 px-2 pr-5 rounded-full"><IoLogoGooglePlaystore className="text-2xl mx-2"/>Google play</button>
                        <button onClick={()=>saveAs(app)}  className="flex items-center bg-pink-700 bg-opacity-50 hover:bg-opacity-100 py-1 pr-5 px-2 rounded-full"><AiFillApple className="text-2xl mx-2"/>AppStore</button>
                    </div>
                </div>
            </div>
        </div>
        <WatchHeader/>
        </>
    )
}