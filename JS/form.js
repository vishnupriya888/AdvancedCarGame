class Form {
  constructor() {
    this.title = createElement("h1");
    this.input = createInput("").attribute("placeholder", "Name");
    this.button = createButton("Play");
    this.greeting = createElement("h1");

    this.reset = createButton("Reset");
  }

  hide() {
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }

  enter() {
    this.title.hide();
    this.input.hide();
    this.button.hide();

    player.name = this.input.value();
    playerCount++;
    player.index = playerCount;
    player.updateName();
    player.updateCount(playerCount);

    this.greeting.html("Welcome " + player.name + "!");
    this.greeting.position(
      displayWidth / 2.1 - player.name.length * (displayWidth / 110),
      125
    );
  }
  display() {
    //create the title

    this.title.html("Car Racing");
    this.title.position(
      displayWidth / 2.25,
      displayHeight / 2.5 - displayHeight / 8
    );

    this.input.position(displayWidth / 2.25, displayHeight / 2.5);
    this.button.position(
      displayWidth / 2.1,
      displayHeight / 2.5 + displayHeight / 20
    );
    this.reset.position(10, 10);

    //do stuff when you hit the play button
    this.button.mousePressed(() => {
      this.title.hide();
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      playerCount++;
      player.index = playerCount;
      player.updateName();
      player.updateCount(playerCount);

      this.greeting.html("Welcome " + player.name + "!");
      this.greeting.position(
        displayWidth / 2.1 - player.name.length * (displayWidth / 110),
        125
      );
    });

    //reset time
    this.reset.mousePressed(() => {
      player.updateCount(0);
      game.updateState(0);

      database.ref("/").update({
        players: null,
        finishedPlayers: 0,
      });
    });
  }
}
