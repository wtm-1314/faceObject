/**
 *面向对象编程，万物皆对象，每一个对象都有对应的功能，我们·将这个对象的功能进行封装，最后去使用即可
 */

class FaceObject {

    /**
     *  这个构造函数指向实例化对象本身
     */
    constructor() {
        // 获取按钮
        this.btn = document.querySelector('#btn')
        this.btn.innerHTML = ''
        this.home = document.querySelector('#home')

        this.openFlag = true
            // 获取滑动的值
        this.range = document.querySelector('#range')
        this.color = ''
        this.bindEvent()

    }

    /**
     * 绑定事件
     */
    bindEvent() {
        this.btn.innerHTML = '关灯'
        let _this = this

        this.btn.addEventListener('click', function() {
                if (!_this.openFlag) {
                    _this.btn.innerHTML = '关灯'
                    _this.open()
                    _this.openFlag = !_this.openFlag
                } else {

                    _this.btn.innerHTML = '开灯'
                    _this.close()
                    _this.openFlag = !_this.openFlag
                }

            })
            // 滑动条bind事件
        _this.range.addEventListener('change', () => {
            _this.color = _this.lightNum(Number(_this.range.value));
            _this.home.style.backgroundColor = _this.color
            if (_this.range.value == 0) {
                _this.btn.innerHTML = '开灯'
                _this.openFlag = false
                _this.home.style.backgroundColor = '#000'
            } else {
                _this.btn.innerHTML = '关灯'
                _this.openFlag = true
                _this.home.style.backgroundColor = _this.color
            }
        })
    }

    /**
     * 定义灯光亮度
     */
    lightNum(num) {
        let arr = ['#000000', '#202020', '#383838', '#686868', '#fff']
        return arr[num - 1]
    }

    /**
     * 关闭
     */

    close() {
        this.home.className = ''
        this.home.style.backgroundColor = '#000'
        this.range.value = 0
    }

    /**
     * 打开
     */

    open() {
        this.home.className = 'open'
        this.home.style.backgroundColor = '#fff'
        this.range.value = 5
    }

    /**
     * 配置项
     */
    setOptions() {}

    /**
     * 获取配置项
     */
    getOptions() {}

    /**
     * 更新配置项
     */
    upDataOptions() {}
}

new FaceObject()