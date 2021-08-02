class Neko{

    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;




    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          distance:this.distance
        });
      }





    





















}