class Example1 extends Phaser.Scene {
  constructor() {
    super({ key: "Example1" });
  }

  preload() {
    this.load.image("SHIP", "assets/ship.png");
  }

  create() {
    this.image = this.add.image(400, 300, "SHIP");

    this.key_Q = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
    this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.key_Z = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    this.key_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    this.input.on(
      "pointerdown",
      event => {
        this.image.x = event.x;
        this.image.y = event.y;
      },
      this
    );

    this.input.keyboard.on(
      "keyup_P",
      event => {
        var physicsImage = this.physics.add.image(
          this.image.x,
          this.image.y,
          "SHIP"
        );
        physicsImage.setVelocity(
          Phaser.Math.RND.integerInRange(-100, 100),
          -300
        );
      },
      this
    );

    this.input.keyboard.on(
      "keyup",
      event => {
        if (event.key == "2") {
          this.scene.start("Example2");
        }
      },
      this
    );
  }

  update(delta) {
    if (this.key_Q.isDown) this.image.x--;
    if (this.key_D.isDown) this.image.x++;
    if (this.key_Z.isDown) this.image.y--;
    if (this.key_S.isDown) this.image.y++;
  }
}
