import {takeEvery, put} from 'redux-saga/effects';
import {LIST_VIDEOS, SET_VIDEOS} from './constant';

function* getItems()
{
    let data = yield fetch('http://localhost:5000/videos');
    data = yield data.json();
    yield put({type: SET_VIDEOS, data});
}

export default function* proSaga()
{
    yield takeEvery(LIST_VIDEOS, getItems);
    
}
