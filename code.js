var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b1b1ffc2-dc52-4436-a50d-f89686aeea2d","d808afc2-5112-408d-b209-4a2b78db0326","84ed55c6-f8f0-4362-a483-37cb4039c9dc","ca35cfe5-d736-4974-b024-b7a418e1e954","793a93cb-f726-48cc-9174-7e64e131cb98","f8c2e99b-1f4e-43a5-acc9-27e297d99c43","704322eb-6a26-4a08-a205-18f6cc2a4096","b546d676-28ad-4a11-8bbe-aad2e5ec4909"],"propsByKey":{"b1b1ffc2-dc52-4436-a50d-f89686aeea2d":{"name":"background_underwater_17_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Vg6bYwboQcGip.4oRoqXobcX2rE5QGop/category_backgrounds/background_underwater_17.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"Vg6bYwboQcGip.4oRoqXobcX2rE5QGop","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Vg6bYwboQcGip.4oRoqXobcX2rE5QGop/category_backgrounds/background_underwater_17.png"},"d808afc2-5112-408d-b209-4a2b78db0326":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":40,"y":32},"frameCount":1,"looping":true,"frameDelay":12,"version":"FM8l5X2SOo7sK_oSprmbiDsQUmlvZG2O","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":32},"rootRelativePath":"assets/d808afc2-5112-408d-b209-4a2b78db0326.png"},"84ed55c6-f8f0-4362-a483-37cb4039c9dc":{"name":"animation_2","sourceUrl":null,"frameSize":{"x":40,"y":32},"frameCount":1,"looping":true,"frameDelay":12,"version":"lg6_P_aKyR5uGnM.wkZ96P.VInNObw8P","loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":32},"rootRelativePath":"assets/84ed55c6-f8f0-4362-a483-37cb4039c9dc.png"},"ca35cfe5-d736-4974-b024-b7a418e1e954":{"name":"animation_3","sourceUrl":null,"frameSize":{"x":32,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":"OCkeHYGv5kV8dUJkEMAFhUc54zf05wih","loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":42},"rootRelativePath":"assets/ca35cfe5-d736-4974-b024-b7a418e1e954.png"},"793a93cb-f726-48cc-9174-7e64e131cb98":{"name":"animation_4","sourceUrl":null,"frameSize":{"x":32,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":"V12OH1qyruW9bhdg5eg0g_3XqmmiiIh8","loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":42},"rootRelativePath":"assets/793a93cb-f726-48cc-9174-7e64e131cb98.png"},"f8c2e99b-1f4e-43a5-acc9-27e297d99c43":{"name":"shark_1","sourceUrl":null,"frameSize":{"x":397,"y":185},"frameCount":1,"looping":true,"frameDelay":12,"version":"zQW3UcDpFCoU3V.RcRaoqJyai7pdYSdU","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":185},"rootRelativePath":"assets/f8c2e99b-1f4e-43a5-acc9-27e297d99c43.png"},"704322eb-6a26-4a08-a205-18f6cc2a4096":{"name":"shark_2","sourceUrl":null,"frameSize":{"x":397,"y":185},"frameCount":1,"looping":true,"frameDelay":12,"version":"T8GCyVlzfDfS2oZXEfxT6XpeMcxYrifd","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":185},"rootRelativePath":"assets/704322eb-6a26-4a08-a205-18f6cc2a4096.png"},"b546d676-28ad-4a11-8bbe-aad2e5ec4909":{"name":"animation_5","sourceUrl":null,"frameSize":{"x":44,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"AajzpZsVqopiAvuFuiPRKH4TbPotVQvf","loadedFromSource":true,"saved":true,"sourceSize":{"x":44,"y":40},"rootRelativePath":"assets/b546d676-28ad-4a11-8bbe-aad2e5ec4909.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200, 200);
b.setAnimation("background_underwater_17_1");

var gameState = "serve";

var life = 5;

var victory = 0;

var eggFish = createSprite(200, 50);
eggFish.setAnimation("animation_5");
eggFish.scale = 0.7;

var fish = createSprite(200, 350, 10, 10);
fish.setAnimation("animation_3");
fish.scale = 1;

var shark1 = createSprite(310, 250, 10, 10);
shark1.setAnimation("shark_2");
shark1.scale = 0.3;

var shark2 = createSprite(90, 150, 10, 10);
shark2.setAnimation("shark_1");
shark2.scale = 0.3;

function draw() {
  
  drawSprites();
  createEdgeSprites();
  
  fish.bounceOff(edges);
  
  if (gameState == "serve") 
  {
    textSize(20);
    fill("yellow");
    text("bem-vindo! Pressione Enter para iniciar.", 18, 200);
    
    if (keyDown("ENTER")) {
  shark1.velocityX = -10;
  
  shark2.velocityX = +10;
  gameState="play";
    playSound("assets/category_background/ocean_waves.mp3", true);
  }
  }
  
  if (gameState == "play") 
  {
  
  if (keyDown("UP_ARROW")) {
    fish.setAnimation("animation_3");
    fish.y -= 3;
  }
  
  if (keyDown("DOWN_ARROW")) {
    fish.setAnimation("animation_4");
    fish.y += 3; 
  }
  
  if (keyDown("RIGHT_ARROW")) {
    fish.setAnimation("animation_1");
    fish.x += 3;
  }
  
  if (keyDown("LEFT_ARROW")) {
    fish.setAnimation("animation_2");
    fish.x -= 3;
  }
  
  if (life == 0) {
    gameState="end";
  }
  }
  
  if (gameState == "end") 
  {
    shark1.velocityX = 0;
    shark2.velocityX = 0;
    fish.x = 200;
    fish.y = 350;
    
    textSize(25);
    stroke("red");
    text("Fim de jogo", 140, 200);
  }
  
  if (shark1.isTouching(leftEdge)) {
    shark1.setAnimation("shark_1");
    shark1.scale = 0.3;
    shark1.bounceOff(leftEdge);
  }
  
  if (shark1.isTouching(rightEdge)) {
    shark1.setAnimation("shark_2");
    shark1.scale = 0.3;
    shark1.bounceOff(rightEdge);
  }
  
  if (shark2.isTouching(leftEdge)) {
    shark2.setAnimation("shark_1");
    shark2.scale = 0.3;
    shark2.bounceOff(leftEdge);
  }
  
  if (shark2.isTouching(rightEdge)) {
    shark2.setAnimation("shark_2");
    shark2.scale = 0.3;
    shark2.bounceOff(rightEdge);
  }
  
  if (fish.isTouching(shark1) || fish.isTouching(shark2)) {
    playSound("assets/category_achievements/bubbly_game_achievement_sound.mp3");
    fish.x = 200;
    fish.y = 350;
    life = life -1;
    
  }
  
  if (fish.isTouching(eggFish)) {
    playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3",false);
    fish.x = 200;
    fish.y = 350;
    victory = victory +1;
  }
  
  if (fish.isTouching(eggFish)|| victory== 8) {
    shark1.velocityX = 0;
    shark2.velocityX = 0;
    fish.x = 200;
    fish.y = 350;
    fish.setAnimation("animation_3");
    
    textSize(25);
    stroke("red");
    text("Prabéns! Você conseguiu!", 60, 200);
  }
  
  
  textFont("times Roman");
  fill("blue");
  textSize(20);
  text("vitórias = "+victory, 40, 20 );
  
  textFont("times Roman");
  fill("blue");
  textSize(20);
  text("vidas = "+life, 270, 20 );
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
