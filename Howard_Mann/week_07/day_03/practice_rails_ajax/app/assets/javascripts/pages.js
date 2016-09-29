console.log("JS logic");

$(document).ready(function(){

  $('button#uptime').on('click',function(){
    $.ajax({
      url: '/myapi/uptime',
      type: 'GET',
      dataType: 'TEXT'
    }).done(function(response){
      $('p#uptime').text(response);
    });
  });

  $('button#random').on('click',function(){
    $.ajax({
      url: '/myapi/random',
      type: 'GET',
      dataType: 'TEXT'
    }).done(function(response){
      $('p#random').text(response);
    });
  });

  $('button#json').on('click',function(){
    $.ajax({
      url: '/myapi/json',
      type: 'GET',
      dataType: 'JSON'
    }).done(function(response){
      $('p#json-uptime').text(response["uptime"]);
      $('p#json-random').text(response["random"]);
      $('p#json-fortune').text(response["fortune"]);
      $('p#json-quote').text(response["message"]);
    });
  });

});



// <button id="uptime">Uptime reload</button>
// <p id="uptime"><%= @uptime %></p>

// <button id="random">Randomize</button>
// <p id="random"><%= @random %></p>

// <button id="json">JSON fetch</button>
// <p id="json"></p>
