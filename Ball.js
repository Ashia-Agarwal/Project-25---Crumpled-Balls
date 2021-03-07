class Ball {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        };
        this.body = Matter.Bodies.circle(x, y, 80, options);
        this.image = loadImage("paperball.png");
        Matter.World.add(world, this.body);
    }

    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 70, 70);
        pop();
    }
}