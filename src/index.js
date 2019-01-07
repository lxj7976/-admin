import React from 'react';
import ReactDOM from 'react-dom';

import "./style/reset.less"//导入less  less关联其他的less文件
import App from './App';//导入根组件实例
import 'antd/dist/antd.css'
import "./utils/axios"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
