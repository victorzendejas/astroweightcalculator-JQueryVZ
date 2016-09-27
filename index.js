$(document).ready(function() {

// list
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],

  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];    
planets.reverse();

// $.each(planets, function(index, value){
//   $('<option/>').val(value[1]).html(value[0]).appendTo('#gravity');
// });
 
for (var i = 0; i < planets.length; i++) {
    $("<option>").val(planets[i][1]).html(planets[i][0]).appendTo('#gravity');
};
});
// getting the values from the user weight and the planet selected and calculating the total
$(document).ready(function() {
    $('#button').on('click', function() {
        var weight = $('#weight').val();
        var gravity = $('#gravity').val();
        var total = weight * gravity;
        var names = $('#planets, option:selected').html();

        // posting the results in the html page
        $('#results').html('If you were on ' + names + ' you would weight ' + total + ' lbs');


    });

});