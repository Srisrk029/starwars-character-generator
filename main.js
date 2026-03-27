$(document).ready(function(){
  $("button").on("click",function(){
    const randomNumber = Math.ceil(Math.random() * 88)
      $.get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${randomNumber}.json`,
          function(data){
              console.log(data['name'])
              $("h1.name").text(data['name'])
              $(".character").attr("src",data['image'])
              $(".species").text(data['species'])
              $(".home").text(data['homeworld'])
            })
      })
  })
