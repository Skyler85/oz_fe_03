// TODO 애플리케이션의 상태 변화를 처리하는 리듀서 함수를 정의합니다. 각 액션에 따라 앱의 상태를 어떻게 변경할지 정의합니다.

const reducer = (state = 0, action) => {
  console.log(state, action);
  switch (action.type) {
    case 'INCREMENT':
    return  state + 1
    default:
      return state;
  }
  
}

export default reducer