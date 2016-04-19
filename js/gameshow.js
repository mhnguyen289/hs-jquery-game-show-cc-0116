$(document).ready(function(){
    
    //door one: You have to place your jQuery Selector in THREE places
    //wherever you see `__`
    //You always want to be using a selector on the div with the class "perspective"
    $("#door1").flip({
        trigger: 'manual'
    });
    //insert selector below:
    $("#door1").click(function(){
        //insert selector below:
        $("#door1").flip(true);
        $("div.perspective").addClass("done");
        checkWin();
    });

    //door two: You have to place your jQuery Selector in THREE places
    //wherever you see `__`
    //You always want to be using a selector on the div with the class "perspective"

    $("div.perspective.door2").flip({
        trigger: 'manual'
    })
    //insert selector below:
    $("div.perspective.door2").click(function(){
        //insert selector below:
        $("div.perspective.door2").flip(true);
        $("div.perspective").addClass("done")
        checkWin();
    });

    //door three: You have to place your jQuery Selector in THREE places
    //wherever you see `__`
    //You always want to be using a selector on the div with the class "perspective"

    $("div.perspective.door-three").flip({
        //insert selector below:
        trigger: 'manual'
    })
    $("div.perspective.door-three").click(function(){
        //insert selector below:
        $("div.perspective.door-three").flip(true);
        $("div.perspective").addClass("done");
        checkWin();
    });
 
    // IGNORE THIS:
    function checkWin() {
      if ($("div.perspective.done").length === $("div.perspective").length) {
        alert("YOU WON!!!");
      }
    }


});