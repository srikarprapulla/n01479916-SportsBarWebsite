const assets = "ball.png";
const path = "../assets/Football Images/";

// See Docs under Frame for FIT, FILL, FULL, and TAG scaling modes
const frame = new Frame(FIT, 1024, 768, light, dark, assets, path);
frame.on("ready", () => {
  const stage = frame.stage;
  let stageW = frame.width;
  let stageH = frame.height;

  const physics = new Physics();
  const ball = frame
    .asset("ball.png")
    .sca(0.7)
    .centerReg()
    .addPhysics({ shape: "circle", restitution: 0.7 });

  ball.on("mousedown", (e) => {
    ball.impulse(
      (ball.x - e.stageX / stage.scaleX) * 15,
      (ball.y - e.stageY / stage.scaleY) * 15
    );
  });

  stage.update(); // needed to view changes
});
