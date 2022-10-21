function drawCircle(container,id,progress,parent){
    var paper = Snap(container);
    var prog = paper.path("M5,50 A45,45,0 1 1 95,50 A45,45,0 1 1 5,50");
    var lineL = prog.getTotalLength();
    var oneUnit = lineL/100;
    var toOffset = lineL - oneUnit * progress;
    var myID = 'circle-graph-'+id;
    prog.attr({
      'stroke-dashoffset':lineL,
      'stroke-dasharray':lineL,
      'id':myID
    });
    
    var animTime = 1300/*progress / 100*/
    
    prog.animate({
      'stroke-dashoffset':toOffset
    },animTime,mina.easein);
    
    function countCircle(animtime,parent,progress){
      var textContainer = $(parent).find('.circle-percentage');
      var i = 0;
      var time = 1300;
      var intervalTime = Math.abs(time / progress);
      var timerID = setInterval(function () {
        i++;
        textContainer.text(i);
        if (i === progress) clearInterval(timerID);
      }, intervalTime);           
    }
    countCircle(animTime,parent,progress);
  }
  
  function counter(timer,object,numberTo) {
    var object = $(object);
    var countTo = numberTo;
    
     $({ countNum: object.text()}).animate({
      countNum: countTo
    },
    {
      duration: timer,
      easing:'linear',
      step: function() {
        object.text(Math.floor(this.countNum));
      },
      complete: function() {
        object.text(this.countNum);
      }
    });
  }
  
  /*function countUp(animtime,parent,progress){
    var textContainer = $(parent);
    var i = 0;
    var intervalTime = Math.abs(animtime / progress);
    var timerID = setInterval(function () {
      i++;
      textContainer.text(i);
      if (i === progress) clearInterval(timerID);
    }, intervalTime);           
  }*/
  
  $(window).on('load',function(){
    drawCircle('#chart-3',1,80,'#circle-1');
    
    //countUp(1300,'#countUp1',150);
    
    counter(2000,'#counter1',999);
  });