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
    
    var animTime = 1300
    
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
        object.text(Math.round(this.countNum * 10) / 10);
      },
      complete: function() {
        object.text(this.countNum);
      }
    });
  }
  
  
  $(window).on('load',function(){
    drawCircle('#chart-3',1,80,'#circle-1');
    
    counter(1000,'#counter1',999);
    counter(500,'.avg-commitment-point',4.0);
    counter(500,'.avg-leadership-point',4.8);
    counter(500,'.avg-enablement-point',2.8);
    counter(500,'.avg-alignment-point',3.8);
    counter(500,'.avg-development-point',4.2);
    counter(500,'.avg-overall-point',3.8);
    counter(500,'.benchmark-commitment-point',4.2);
    counter(500,'.benchmark-leadership-point',3.9);
    counter(500,'.benchmark-enablement-point',4.5);
    counter(500,'.benchmark-alignment-point',4,8);
    counter(500,'.benchmark-development-point',3.3);
    counter(500,'.benchmark-overall-point',4.3);
    counter(500,'.GAP-commitment-point',0.2);
    counter(500,'.GAP-leadership-point',0.9);
    counter(500,'.GAP-enablement-point',1.3);
    counter(500,'.GAP-alignment-point',1.0);
    counter(500,'.GAP-development-point',0.9);
    counter(500,'.GAP-overall-point',0.5);
  });