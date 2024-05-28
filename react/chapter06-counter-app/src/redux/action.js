// TODO 애플리케이션에서 사용되는 모든 Redux 액션 타입과 액션 생성자를 정의합니다.
const increment = () => ({
    type: 'INCREMENT',
})
const incrementAsync = () => (dispatch) =>{
  setTimeout(() => {
    dispatch(increment())
  }, 1000)
}

export { increment, incrementAsync }