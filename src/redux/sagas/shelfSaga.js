import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "" actions
function* fetchItem() {
        try {
            const config = {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            };
            const response = yield axios.get('/api/shelf', config);
            yield put({ type: 'SET_ITEM', payload: response.data });
        } catch (error) {
            console.log('fetch item is wonky', error)
        }
}

function* shelfSaga() {
    yield takeLatest('GET_ITEM', fetchItem);
}

export default shelfSaga;