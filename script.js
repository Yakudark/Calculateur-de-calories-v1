// // Calcul du MB
$('#mb-form').submit(function(e) {
    e.preventDefault();
    var gender = $('#gender').val();
    var age = $('#age').val();
    var height = $('#height').val();
    var weight = $('#weight').val();
    
    if (gender === 'male') {
      var mb = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
      var mb = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    
    $('#mb-result').text('MB = ' + mb.toFixed(2) + ' kcal');
  });
  console.log('#mb-result');
  // Calcul de la DEJ
  $('#dej-form').submit(function(e) {
    e.preventDefault();
    var mb = parseFloat($('#mb-result').text().split('=')[1]);
    var nap = $('#nap').val();
    var dej = mb * nap;
    
    $('#dej-result').text('DEJ = ' + dej.toFixed(2) + ' kcal');
  });
  
  // Calcul des besoins en macronutriments
$('#goal-form').submit(function(e) {
    e.preventDefault();
    var dej = parseFloat($('#dej-result').text().split('=')[1]);
    var goal = $('#goal').val();
    
    if (goal === 'maintain') {
      var protein = dej * 0.22 / 4;
      var fat = dej * 0.33 / 9;
      var carb = dej * 0.45 / 4;
      $('#macro-result').html('Mes besoins sont de : ' + dej.toFixed(2) + ' kcal<br>Protéines: ' + protein.toFixed(2) + ' g<br>Lipides: ' + fat.toFixed(2) + ' g<br>Glucides: ' + carb.toFixed(2) + ' g');
    } else if (goal === 'lose') {
      var dej_loss = dej * 0.8;
      var protein = dej_loss * 0.22 / 4;
      var fat = dej * 0.33 / 9;
      var carb = dej_loss * 0.45 / 4;
      $('#macro-result').html('Mes besoins sont de : ' + dej_loss.toFixed(2) + ' kcal<br>Protéines: ' + protein.toFixed(2) + ' g<br>Lipides: ' + fat.toFixed(2) + ' g<br>Glucides: ' + carb.toFixed(2) + ' g');
    } else {
      var dej_gain = dej * 1.2;
      var protein = dej_gain * 0.22 / 4;
      var fat = dej_gain * 0.33 / 9;
      var carb = dej_gain * 0.45 / 4;
      $('#macro-result').html('Mes besoins sont de : ' + dej_gain.toFixed(2) + ' kcal<br>Protéines: ' + protein.toFixed(2) + ' g<br>Lipides: ' + fat.toFixed(2) + ' g<br>Glucides: ' + carb.toFixed(2) + ' g');
    }
  });


