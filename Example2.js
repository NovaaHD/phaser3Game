class Example2 extends Phaser.Scene {
  constructor() {
    super({ key: "Example2" });
  }

  create() {
    this.text = this.add.text(0, 0, "Welcome to Example2!", {
      font: "40px Impact"
    });

    var tween = this.tweens.add(
      {
        targets: this.text,
        x: 200,
        y: 250,
        duration: 2000,
        ease: "Elastic",
        easeParams: [1.5, 0.5],
        delay: 1000
      },
      this
    );
  }
}
