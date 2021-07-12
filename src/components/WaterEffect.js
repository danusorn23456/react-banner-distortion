import React, { useEffect, useRef } from "react";
import mapSource from "../assets/map.png";
import * as PIXI from "pixi.js";
import { Box } from "@material-ui/core";

export default function WaterEffect({image,style={width:'100%',height:'100%'}}) {
  const renderRef = useRef(null);
  let stage = new PIXI.Container();
  let renderer = PIXI.autoDetectRenderer({width:'100%',height:'100%',backgroundAlpha:0});
  let loader = new PIXI.Loader();
  let bg;
  // load assets
  loader.add(image).add(mapSource).load(setup);

  var ripples = [];

  function setup() {
    bg = new PIXI.Sprite(loader.resources[image].texture);
    // background
    bg.anchor.set(0.5);
    bg.scale.set(1);
    bg.position.set(renderer.view.width/2, renderer.view.height / 2);
    stage.addChild(bg);

    // add new ripple each time mouse is clicked
    renderer.view.addEventListener(
      "mousedown",
      function (ev) {
        console.log(ev)
        ripples.push(new Ripple(ev.offsetX, ev.offsetY));
        stage.filters = ripples.map(function (f) {
          return f.filter;
        });
      },
      false
    );

    gameLoop();
  }

  function gameLoop() {
    requestAnimationFrame(gameLoop);

    // update ripples
    for (var i = 0; i < ripples.length; i++) {
      ripples[i].update();
    }

    renderer.render(stage);
  }

  function Ripple(x, y) {
    // sprite
    this.sprite = new PIXI.Sprite(loader.resources[mapSource].texture);
    this.sprite.anchor.set(0.5);
    this.sprite.position.set(x, y);
    this.sprite.scale.set(0.1);
    stage.addChild(this.sprite);
    // filter
    this.filter = new PIXI.filters.DisplacementFilter(this.sprite);
  }

  Ripple.prototype.update = function () {
    this.sprite.scale.x += 0.03;
    this.sprite.scale.y += 0.03;
  };

  const resizeHandler = () =>{
    let renderRefWidth = renderRef.current.getBoundingClientRect().width;
    let renderRefHeight = renderRef.current.getBoundingClientRect().height;
    if(bg){
        bg.position.set(renderer.view.width/2, renderer.view.height / 2);
    }
    renderer.resize(renderRefWidth,renderRefHeight);
  }

  useEffect(() => {
    renderRef.current.appendChild(renderer.view);
    if(renderRef.current){
        resizeHandler();
        window.addEventListener('resize',resizeHandler);
    }
    return ()=>{
        window.removeEventListener('resize',resizeHandler);
        window.cancelAnimationFrame(gameLoop);
    }
  }, []);

  return (
    <Box style={style} ref={renderRef}>
    </Box>
  );
}
