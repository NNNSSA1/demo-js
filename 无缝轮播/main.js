$(document).ready(function () {
    let n 
    let size
    Init.call()
    setInterval(() => {
        MakeLeave($(`.window>div:nth-child(${x(n)})`))                    //`插指法。。。` 
        .one('transitionend', function (e) { MakeStay($(e.currentTarget)) })    
        MakeCurrent($(`.window>div:nth-child(${x(n+1)})`))
        n += 1
    }, 2000)



    
    //工具函数
    function Init() {
        n = 1
        size = $('.window>div').length
        $(`.window>div:nth-child(${n})`).addClass('current').siblings().addClass('stay')
    }
    function x(n){
        if (n > size) {
            n = n % size
            if (n === 0) {
                n = size
            }//n = 1，2，3，4，5
        }
        return n
    }
    function MakeCurrent($node){                                            //状态机
        $node.removeClass('stay leave').addClass('current')
        return  $node
    }
    function MakeLeave($node){
        $node.removeClass('current stay').addClass('leave')
        return  $node
    }
    function MakeStay($node){
        $node.removeClass('leave').addClass('stay') 
        return  $node
    }
})




// setTimeout(()=>{
//     $('.box1').removeClass('current stay').addClass('leave')
//     .one('transitionend',function(e){$(e.currentTarget).removeClass('leave').addClass('stay')})
//     $('.box2').removeClass('stay leave').addClass('current')
// },3000)
// setTimeout(()=>{
//     $('.box2').removeClass('current stay').addClass('leave')
//     .one('transitionend',function(e){$(e.currentTarget).removeClass('leave').addClass('stay')})
//     $('.box3').removeClass('stay leave').addClass('current')
// },6000)
// setTimeout(()=>{
//     $('.box3').removeClass('current stay').addClass('leave')
//     .one('transitionend',function(e){$(e.currentTarget).removeClass('leave').addClass('stay')})
//     $('.box1').removeClass('stay leave').addClass('current')
// },9000)