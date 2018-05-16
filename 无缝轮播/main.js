let $buttons = $('#buttonWarpper>button')
let $images = $('#slide>img')
let current = 0    //记下当前是第几个
makeFakeSlides($images)

$('#slide').css({ transform: 'translateX(-400px)' }) //初始化第一个

bindEvent()

$('#next').on('click',function(){
    gotoSlide(current+1)
})

$('#previous').on('click',function(){
    gotoSlide(current-1)
})

let timer = setInterval(function(){
    gotoSlide(current+1)
},2000)

$('.window').on('mouseenter',function(){
    window.clearInterval(timer)
})

$('.window').on('mouseleave',function(){
    timer = setInterval(function(){
        gotoSlide(current+1)
    },2000)
})

document.addEventListener('visibilitychange',function(e){
    if(document.hidden){
        window.clearInterval(timer)
    }else{
        timer = setInterval(function(){
            gotoSlide(current+1)
        },2000)
    }
})

function bindEvent() {  //监听按钮
    $('#buttonWarpper').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let index = $button.index()
        gotoSlide(index)
    })

}
//重要精髓
function gotoSlide(index){
    if(index > $buttons.length-1 ){
        index = 0
    }else if(index<0){
        index = $buttons.length - 1
    }
    console.log(current,index)
    if (current === $buttons.length - 1 && index === 0) {
        //最后一张到第一张
        console.log("here")
        $('#slide').css({ transform: `translateX(${-($buttons.length+1)*400}px)`})
            .one('transitionend', function () {
                $('#slide').hide()
                    .offset()                       //如果隐藏之后再显示没反应，添加一个offset()
                $('#slide').css({ transform: `translateX(${- (index + 1) * 400}px)`}).show()
            })

    } else if (current === 0 && index === $buttons.length - 1) {
        $('#slide').css({ transform: 'translateX(0px)'})
        .one('transitionend', function () {
            $('#slide').hide()
                .offset()                       //如果隐藏之后再显示没反应，添加一个offset()
            $('#slide').css({ transform: `translateX(${-($buttons.length)*400}px)`}).show()
        })
    } else {
        $('#slide').css({ transform: `translateX(${- (index + 1) * 400}px)`}) //因为是从0开始，但是0是被假的开头
    }
    current = index
}

    // let current = 0    //记下当前是第几个
    // $buttons.eq(0).on('click',function(){
    //     if(current === 2){
    //         $('#slide').css({transform:'translateX(-1600px)'})
    //         .one('transitionend',function(){
    //             $('#slide').hide()
    //             .offset()                       //如果隐藏之后再显示没反应，添加一个offset()
    //             $('#slide').css({transform:'translateX(-400px)'})
    //             .show()
    //         })
    //     }else{
    //         $('#slide').css({transform:'translateX(-800px)'})
    //     }

    //     current = 0
    // })
    // $buttons.eq(1).on('click',function(){
    //     console.log(current)
    //     $('#slide').css({
    //         transform:'translateX(-800px)'  
    //     })
    //     current = 1
    // })
    // $buttons.eq(2).on('click',function(){
    //     if(current === 0){
    //         $('#slide').css({transform:'translateX(0px)'})
    //         .one('transitionend',function(){
    //             $('#slide').hide()
    //             .offset()                       //如果隐藏之后再显示没反应，添加一个offset()
    //             $('#slide').css({transform:'translateX(-1200px)'})
    //             .show()
    //         })
    //     }else{
    //         $('#slide').css({transform:'translateX(-1200px)'})
    //     }
    //     current = 2
    // })



function makeFakeSlides($images) {    //制作假的开头和结尾   添加$images 就相当于没用闭包，用的自己的变量。这样更好
    let $firstCopy = $images.eq(0).clone(true)
    let $lastCopy = $images.eq($images.length - 1).clone(true)

    $('#slide').append($firstCopy)  // 把复制的第一个插到最后面
    $('#slide').prepend($lastCopy)// 把复制的最后一个插到最前面

}