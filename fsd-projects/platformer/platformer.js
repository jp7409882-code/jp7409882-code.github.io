$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
   createPlatform(-50, -50, canvas.width + 100, 50);
   createPlatform(-50, canvas.height - 10, canvas. width + 100, 200, "navy");
   createPlatform(-50, -50, 50, canvas.height, + 500);
   createPlatform(canvas.width, -50, 50, canvas.height, + 100);
    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

     //TODO 1 - enable the Grid
     toggleGrid();


    // TODO 2 - 
    createPlatform(300,700,200,20)
    createPlatform(600,600,200,10)
    createPlatform(500,500,20,5)
    createPlatform(400,400,10,10)
    createPlatform(300,300,20,10)
    createPlatform(500,500,40,20)




    // TODO 3 - Create Collectables
     createCollectable("steve", 500, 475)
      createCollectable("max", 400 , 350)
       createCollectable("diamond",300 , 260) 




    
    // TODO 4 - Create Cannons
   createCannon("right", 300, 1000)
   createCannon("top", 500 , 1000)
   createCannon("left", 450 , 1000)
    



    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
