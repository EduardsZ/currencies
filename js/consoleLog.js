
(function () {
  var old = console.log;
  var logger = document.getElementById('log');
  if(logger){
    console.log = function (){
      for (var i = 0; i < arguments.length; i++){
        if (typeof arguments[i] == 'object')
          { logger.innerHTML += (JSON && JSON.stringify 
            ? '<br />' + JSON.stringify(arguments[i], undefined, 2) + '<br />'
            : arguments[i]) + '';
        } else {
          logger.innerHTML += arguments[i] + ' ';
        } 
      } logger.innerHTML += '<hr>'
    }
  }
})();

