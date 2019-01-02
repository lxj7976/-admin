import React from 'react';
import ReactDOM from 'react-dom';

import "./style/main.less"//导入less  less关联其他的less文件
import App from './App';//导入根组件实例
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
