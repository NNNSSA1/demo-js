$(document).ready(function () {
    var allButtons = $('#buttons>span')
    for (let i = 0; i < allButtons.length; i++) {
        $(allButtons[i]).on('click', function (a) {
            var index = $(a.currentTarget).index()      //获取到你点的元素的数
            var p = index * -300
            $('#images').css({
                transform: 'translateX(' + p + 'px)'    //移动多少PX
            })
            n = index                               //重置n等于你点击的元素的数，方便移出鼠标的时候重新开始
            activeButton.call(this, $(allButtons[n % size]))
        })
    }

    var n = 0
    var size = $('#images>img').length              //获取一共有多少图片方便计算循环到几的时候重新循环
    playSild(n % size)
    var timeId = setClock.call()
    $('.window').on('mouseenter', function () {     //鼠标移进的时候砸闹钟
        window.clearInterval(timeId)
    })
    $('.window').on('mouseleave', function () {     //鼠标移出的时候定闹钟
        timeId = setClock.call()
    })

    //工具函数
    function activeButton($button) {             //添加样式并且移除兄弟的样式
        $button.addClass('red').siblings('.red').removeClass('red')
    }
    function playSild(index) {
        $(allButtons[index]).trigger('click')
        // activeButton.call(this,$(allButtons[index]))  这一句属于废话 上面已经可以触发了
    }
    function setClock() {
        return setInterval(() => {                //定闹钟，每秒触发一次点击事件  必须return
            n += 1
            playSild(n % size)
        }, 1000)
    }

});