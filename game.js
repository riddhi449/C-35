 class Game {
     constructor(){

     }
     getgameState(){
         var gameStateref = database.ref('gameState')
         gameStateref.on("value",function(data){
             gameState = data.val()
         })
     }

     updategameState(state){
        var gameStateref = database.ref('/')
        gameStateref.update({
            gameState:state
        })
    }

    start(){
        if (gameState === 0){
            player = new Player()
            player.getplayerCount()
            form = new Form()
            form.display()

        }
    }
 }