var allbutton = $('#button>span')
for (let i = 0; i < allbutton.length; i++) {
  $(allbutton[i]).on('click', function(x) {
    var index = $(x.currentTarget).index()
    var p = index * -300
    $(images).css({
      transform: 'translateX(' + p + 'px)'
    })
   allbutton.eq(index).addClass('red').siblings('.red').removeClass('red')
  })
}
var n = 0
var size = allbutton.length
allbutton.eq(n % size).trigger('click').addClass('red').siblings('.red').removeClass('red')
var timeId = setInterval(() => {
  n += 1
  allbutton.eq(n % size).trigger('click').addClass('red').siblings('.red').removeClass('red')
}, 1000)

$(".window").on('mouseenter', function() {
  window.clearInterval(timeId)
})
$(".window").on('mouseleave',function(){
  timeId = setInterval(() => {
  n += 1
  allbutton.eq(n % size).trigger('click').addClass('red').siblings('.red').removeClass('red')
}, 1000)
})