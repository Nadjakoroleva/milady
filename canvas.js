const canvases = document.querySelectorAll("canvas");

canvases.forEach((canvas) => {
  const image = canvas.getAttribute("data-image");

  const sandbox = new GlslCanvas(canvas);
  sandbox.load(frag);
  sandbox.setUniform(
    "image",
    "https://images.ctfassets.net/r0lccig03c53/5g5Vi6wTw3yGkAjYonRh4m/7714a07f2928b2597535dd6caad9a691/bg.png"
  );
  sandbox.setUniform("seed", Math.random());

  const sizer = function () {
    // const w = canvas.parentNode.clientWidth;
    // const h = canvas.parentNode.clientHeight;
    // const dpi = window.devicePixelRatio;
    // canvas.width = w * dpi;
    // canvas.height = h * dpi;
    // canvas.style.width = w * dpi + "px";
    // canvas.style.height = h * dpi + "px";
  };

  sizer();
  window.addEventListener("resize", function () {
    sizer();
  });
});
