import BgImg from "@static/images/invitation_poster.jpg";
import font from "@static/fonts/GlowSansJ-Condensed-Medium.ttf";

export default function draw(text, cb) {
  console.log(text, BgImg, font);

  // 加载字体
  const fontface = new FontFace("GlowSansJ-Condensed-Medium", `url(${font})`);
  document.fonts.add(fontface);
  fontface.load();

  // if (document.fonts.check(`GlowSansJ-Condensed-Medium`)) {
  //   console.log("GlowSansJ-Condensed-MediumGlowSansJ-Condensed-Medium");
  // }

  fontface.loaded
    .then(() => {
      // 字体加载完毕
      drawing();
    })
    .catch(err => {
      // 字体加载失败
    });

  function drawing() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 1182;
    canvas.height = 1890;

    const poster = new Image();
    poster.src = BgImg;
    poster.crossOrigin = "Anonymous";
    poster.onload = () => {
      ctx.drawImage(poster, 0, 0);

      ctx.fillStyle = "#f4efdc";
      ctx.fill();
      ctx.font = "80px GlowSansJ-Condensed-Medium";
      ctx.fillText(text, 70, 1170);

      const base64 = canvas.toDataURL("image/jpg");

      cb && cb(base64);
    };
  }
}
