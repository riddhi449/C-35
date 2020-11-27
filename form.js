class Form{
    constructor(){

    }
        display(){
            var title = createElement('h2')
            title.html("CAR RACING")
            title.position(130,0)
            
            var inputbox = createInput("name")
            inputbox.position(130,160)

            var button = createButton("SUBMIT")
            button.position(200,250)

            var greeting = createElement('h4')



            button.mousePressed(function(){
                inputbox.hide()
                title.hide()
                button.hide()
                var name = inputbox.value()
                playerCount= playerCount + 1
                player.updateplayerCount(playerCount)
                player.updatename(name)
                greeting.html("WELCOME" + name)
                greeting.position(130,160)
            })

            




        }







}