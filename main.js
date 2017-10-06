$(document).ready(function() { 
 $("#searchButton").click(function(e){                                            
    var pokemonName = $("#pokemonName").val().toLowerCase();                                         
    console.log(pokemonName);
    e.preventDefault();                                                           
    var mynewurl= "https://pokeapi.co/api/v2/pokemon/"; 
    mynewurl += pokemonName;
    mynewurl += "/";                                                                                                     
    console.log(mynewurl);                                                      
    $.ajax({
      url : mynewurl,
      dataType : "json",
      success : function(parsed_json) {
        var everything = "";
        var name = parsed_json['name']; 
        var image = parsed_json['sprites']['front_default'];
        var id = parsed_json['id'];
        var type1 = "";
        everything += "<h3>Name: " + name + "</h3>";
        everything += "<img src='" + image + "''>";
        everything += "<h3>ID: " + id + "</h3>";
        $(parsed_json.types).each(function(index, value) {                               
          everything += "<h3>Type: " + value.type.name + "</h3>"; 
        });
        console.log(everything);
        $("#pokemon").html(everything);
      }
    });
  });
});
