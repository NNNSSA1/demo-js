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
            allButtons.eq(n).addClass('red').siblings('.red').removeClass('red')
        })
    }

    var n = 0
    var size = $('#images>img').length              //获取一共有多少图片方便计算循环到几的时候重新循环
    allButtons.eq(n % size).trigger('click').addClass('red').siblings('.red').removeClass('red')
    var timeId = setInterval(() => {                //定闹钟，每秒触发一次点击事件
        n += 1
        allButtons.eq(n % size).trigger('click').addClass('red').siblings('.red').removeClass('red')
    }, 1000)
    $('.window').on('mouseenter', function () {     //鼠标移进的时候砸闹钟
        window.clearInterval(timeId)
    })
    $('.window').on('mouseleave', function () {     //鼠标移出的时候定闹钟
        timeId = setInterval(() => {
            n += 1
            allButtons.eq(n % size).trigger('click').addClass('red').siblings('.red').removeClass('red')
        }, 1000)
    })


});