$( document ).ready(function() {
  console.log('1')
  beaker3 = new Beaker(3);
  beaker5 = new Beaker(5);
  var moveCounter = 0;


  function updateImageBeaker3() {
    var source = "3" + String(beaker3.contents) + ".jpg"
    $('#beakerSmall').attr('src', "./img/"+source);
  }

  function updateContentsBeaker3() {
    $('#beaker3Contents').text(beaker3.contents)
  }

  function updateImageBeaker5() {
    var source = "5" + String(beaker5.contents) + ".jpg"
    $('#beakerLarge').attr('src', "./img/"+source);
  }

  function updateContentsBeaker5() {
    $('#beaker5Contents').text(beaker5.contents)
  }

  function updateAll() {
    updateImageBeaker3()
    updateContentsBeaker3()
    updateImageBeaker5()
    updateContentsBeaker5()
    checkSuccess()
  }

  function resetMoves() {
    moveCounter = 0
    $('#moves').text(moveCounter)
  }

  function addMove() {
    moveCounter += 1
    $('#moves').text(moveCounter)
  }

  function checkSuccess() {
    if (beaker5.contents == 4) {
      window.alert("Congratulations, you did it!")
    }
  }

  $('#fillBeaker3').on('click', function(){
    beaker3.fill();
    addMove()
    updateAll()
  });

  $('#fillBeaker5').on('click', function(){
    beaker5.fill();
    addMove()
    updateAll()
  });

  $('#transferFromBeaker3').on('click', function(){
    transfer(beaker3, beaker5);
    addMove()
    updateAll()
  });

  $('#transferFromBeaker5').on('click', function(){
    transfer(beaker5, beaker3);
    addMove()
    updateAll()
  });

  $('#emptyBeaker3').on('click', function(){
    beaker3.empty();
    addMove()
    updateAll()
  });

  $('#emptyBeaker5').on('click', function(){
    beaker5.empty();
    addMove()
    updateAll()
  });

  $('#reset').on('click', function(){
    resetMoves();
    beaker5.empty();
    beaker3.empty();
    updateAll()
  });


});
