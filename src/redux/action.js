import {LIST_VIDEOS, MARK_WATCHED} from './constant';

export const list_videos = () =>{
    return {
        type: LIST_VIDEOS,
    }
}
export const markwatched = (data) =>{
    return {
        type: MARK_WATCHED,
        data
    }
}