class Player{
    constructor(){

    }

    getplayerCount(){
        var playerCountref = database.ref('playerCount')
        playerCountref.on ("value",function(data){
            playerCount = data.val()
        })

    }

    updateplayerCount(count){
        var playerCountref = database.ref('/')
        playerCountref.update({
            playerCount:count
        })
    }

    updatename(name){
        var playerindex = "player"+ playerCount
        var playerref = database.ref(playerindex)
        playerref.set({
            playername:name
        })
    }





}