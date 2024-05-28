// TODO 애플리케이션의 중앙 저장소인 Redux 스토어를 생성합니다. 스토어는 애플리케이션의 모든 상태 정보를 보관하며, 액션에 반응하여 상태를 업데이트합니다.
import { createStore } from 'redux';
import reducer from './reducer';
import { applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';


const store = createStore(reducer, applyMiddleware(thunk));

 export default store;