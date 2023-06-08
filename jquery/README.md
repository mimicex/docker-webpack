# webpack5 使用 jquery


install jquery
```
npm i jquery@3.5.1
```
在你的config plugins 裡面填入以下內容
```
plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
]

```
package.json 裏有設一組run 功能，可參考
```
npm run dev
```