let user = ["zhangsan", "lisi", "hys", "wangwu", "lowiro"];
onmessage = function(event) {
    let result = "";
    username = event.data;
    //通过event事件来传递参数，参数放在data中
    //indexof，find，includes
    if (user.includes(username)) {
        result = username + " 用户名已经存在！"
    } else {
        result = username + " 用户名可用"
    }
    this.postMessage(result);
}