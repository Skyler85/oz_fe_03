// TODO Redux 스토어를 앱 전체에 제공하기 위해 React의 Provider 컴포넌트를 설정합니다.
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>,
);
