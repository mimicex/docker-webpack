# 使用 cssnano-webpack-plugin 來壓縮 css

安裝
```
npm install css-loader mini-css-extract-plugin -D

```
require plugin
```
CssnanoPlugin = require('cssnano-webpack-plugin')
```
設定壓縮條件
```
optimization: {
    minimizer: [
        new CssnanoPlugin()
    ]
}

```