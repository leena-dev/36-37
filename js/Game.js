class Game {
    constructor() {}

    getState() {
        database.ref("gameState").on("value", (data) => {
            gameState = data.val();
            
        });
    }

    updateState(state) {
        database.ref("/").update ({
            gameState : state
        });
    }

    async start() {
        if (gameState === 0) {
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if (playerCountRef.exists()) {
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }

    play() {
        textSize("Race Started");
        text ("game start", 100,100);

        player.getPlayerDetails();
        var y=200;
        for (var plr in allPlayersInfo) {
            if ("player"+player.index === plr) {
                fill("red");
            } else {
                fill("black");
            }

            text (allPlayersInfo[plr].name + " " +allPlayersInfo[plr].distance, 200, y);
            y=y+20;
        }

        if(keyIsDown(UP_ARROW)) {
            player.distance = player.distance + 50;
            player.updatePlayerDetails();
        }
    }
}