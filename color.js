var Links ={
  setColor:function(color){
    // var  alist = document.querySelectorAll('a');
    // var i=0;
    // while(i<alist.length)
    // {
    //   alist[i].style.color = color;
    //   i=i+1;
    // }
    $('a').css('color',color);
  }
}
var Body ={
  setColor:function(color){
  //  document.querySelector('body').style.color = color;
  $('body').css('color',color);
  },
  setBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
  }
}
var tagA = {
  setColor:function(color){
        document.querySelector('a').style.color = color;
  }
}
function nightdayHandler(self){
if(self.value === 'night'){
  Body.setBackgroundColor('black');
  Body.setColor('white');
  tagA.setColor('gray')
  self.value ='day';
  Links.setColor('powderblue');

}
else{
  Body.setBackgroundColor('white');
  Body.setColor('black');
  tagA.setColor('black')
  self.value ='night';
  Links.setColor('blue');

}
}
