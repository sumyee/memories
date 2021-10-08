import BgImg from "@static/images/invitation_poster.jpg";
import font from "@static/fonts/GlowSansSC-Condensed-Medium.otf";

export default function draw(text, cb) {
  // console.log(text, BgImg, font);

  // 加载字体
  const fontface = new FontFace("GlowSansSC-Condensed-Medium", `url(${font})`);
  document.fonts.add(fontface);
  fontface.load();

  // if (document.fonts.check(`GlowSansSC-Condensed-Medium`)) {
  //   console.log("GlowSansSC-Condensed-MediumGlowSansSC-Condensed-Medium");
  // }

  fontface.loaded
    .then(() => {
      // 字体加载完毕
      drawing();
    })
    .catch(err => {
      // 字体加载失败
      drawing();
    });

  function drawing() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 1125;
    canvas.height = 1799;

    const poster = new Image();
    poster.src = BgImg;
    poster.crossOrigin = "Anonymous";
    poster.onload = () => {
      ctx.drawImage(poster, 0, 0);

      ctx.fillStyle = "#f4efdc";
      ctx.fill();
      ctx.font = "80px GlowSansSC-Condensed-Medium";
      ctx.fillText(text, 70, 1030);

      const base64 = canvas.toDataURL("image/jpg");

      cb && cb(base64);
    };
  }
}
