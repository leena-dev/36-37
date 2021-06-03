class Form {
    constructor() {
        this.input=createInput("Name");
        this.button=createButton("Play");
        this.heading=createElement("H1");
    }



    display() {
        this.input.position(100,300);
        this.button.position(300,300);
        this.heading.html("Car Race");
        this.heading.position(200,50);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.welcomeMessage=createElement("H1");
            this.welcomeMessage.html("Welcome "+this.input.value());
            this.welcomeMessage.position(200,100);
            playerCount=playerCount+1;
            player.updateCount(playerCount);
            player.name=this.input.value();
            player.index=playerCount;
            player.updatePlayerDetails();
        });
    }
}