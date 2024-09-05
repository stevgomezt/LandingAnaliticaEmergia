function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     ./img/chatbot/male0001.png
     ./img/chatbot/male0002.png
     ./img/chatbot/male0003.png
     ./img/chatbot/male0004.png
     ./img/chatbot/male0005.png
     ./img/chatbot/male0006.png
     ./img/chatbot/male0007.png
     ./img/chatbot/male0008.png
     ./img/chatbot/male0009.png
     ./img/chatbot/male0010.png
     ./img/chatbot/male0011.png
     ./img/chatbot/male0012.png
     ./img/chatbot/male0013.png
     ./img/chatbot/male0014.png
     ./img/chatbot/male0015.png
     ./img/chatbot/male0016.png
     ./img/chatbot/male0017.png
     ./img/chatbot/male0018.png
     ./img/chatbot/male0019.png
     ./img/chatbot/male0020.png
     ./img/chatbot/male0021.png
     ./img/chatbot/male0022.png
     ./img/chatbot/male0023.png
     ./img/chatbot/male0024.png
     ./img/chatbot/male0025.png
     ./img/chatbot/male0026.png
     ./img/chatbot/male0027.png
     ./img/chatbot/male0028.png
     ./img/chatbot/male0029.png
     ./img/chatbot/male0030.png
     ./img/chatbot/male0031.png
     ./img/chatbot/male0032.png
     ./img/chatbot/male0033.png
     ./img/chatbot/male0034.png
     ./img/chatbot/male0035.png
     ./img/chatbot/male0036.png
     ./img/chatbot/male0037.png
     ./img/chatbot/male0038.png
     ./img/chatbot/male0039.png
     ./img/chatbot/male0040.png
     ./img/chatbot/male0041.png
     ./img/chatbot/male0042.png
     ./img/chatbot/male0043.png
     ./img/chatbot/male0044.png
     ./img/chatbot/male0045.png
     ./img/chatbot/male0046.png
     ./img/chatbot/male0047.png
     ./img/chatbot/male0048.png
     ./img/chatbot/male0049.png
     ./img/chatbot/male0050.png
     ./img/chatbot/male0051.png
     ./img/chatbot/male0052.png
     ./img/chatbot/male0053.png
     ./img/chatbot/male0054.png
     ./img/chatbot/male0055.png
     ./img/chatbot/male0056.png
     ./img/chatbot/male0057.png
     ./img/chatbot/male0058.png
     ./img/chatbot/male0059.png
     ./img/chatbot/male0060.png
     ./img/chatbot/male0061.png
     ./img/chatbot/male0062.png
     ./img/chatbot/male0063.png
     ./img/chatbot/male0064.png
     ./img/chatbot/male0065.png
     ./img/chatbot/male0066.png
     ./img/chatbot/male0067.png
     ./img/chatbot/male0068.png
     ./img/chatbot/male0069.png
     ./img/chatbot/male0070.png
     ./img/chatbot/male0071.png
     ./img/chatbot/male0072.png
     ./img/chatbot/male0073.png
     ./img/chatbot/male0074.png
     ./img/chatbot/male0075.png
     ./img/chatbot/male0076.png
     ./img/chatbot/male0077.png
     ./img/chatbot/male0078.png
     ./img/chatbot/male0079.png
     ./img/chatbot/male0080.png
     ./img/chatbot/male0081.png
     ./img/chatbot/male0082.png
     ./img/chatbot/male0083.png
     ./img/chatbot/male0084.png
     ./img/chatbot/male0085.png
     ./img/chatbot/male0086.png
     ./img/chatbot/male0087.png
     ./img/chatbot/male0088.png
     ./img/chatbot/male0089.png
     ./img/chatbot/male0090.png
     ./img/chatbot/male0091.png
     ./img/chatbot/male0092.png
     ./img/chatbot/male0093.png
     ./img/chatbot/male0094.png
     ./img/chatbot/male0095.png
     ./img/chatbot/male0096.png
     ./img/chatbot/male0097.png
     ./img/chatbot/male0098.png
     ./img/chatbot/male0099.png
     ./img/chatbot/male0100.png
     ./img/chatbot/male0101.png
     ./img/chatbot/male0102.png
     ./img/chatbot/male0103.png
     ./img/chatbot/male0104.png
     ./img/chatbot/male0105.png
     ./img/chatbot/male0106.png
     ./img/chatbot/male0107.png
     ./img/chatbot/male0108.png
     ./img/chatbot/male0109.png
     ./img/chatbot/male0110.png
     ./img/chatbot/male0111.png
     ./img/chatbot/male0112.png
     ./img/chatbot/male0113.png
     ./img/chatbot/male0114.png
     ./img/chatbot/male0115.png
     ./img/chatbot/male0116.png
     ./img/chatbot/male0117.png
     ./img/chatbot/male0118.png
     ./img/chatbot/male0119.png
     ./img/chatbot/male0120.png
     ./img/chatbot/male0121.png
     ./img/chatbot/male0122.png
     ./img/chatbot/male0123.png
     ./img/chatbot/male0124.png
     ./img/chatbot/male0125.png
     ./img/chatbot/male0126.png
     ./img/chatbot/male0127.png
     ./img/chatbot/male0128.png
     ./img/chatbot/male0129.png
     ./img/chatbot/male0130.png
     ./img/chatbot/male0131.png
     ./img/chatbot/male0132.png
     ./img/chatbot/male0133.png
     ./img/chatbot/male0134.png
     ./img/chatbot/male0135.png
     ./img/chatbot/male0136.png
     ./img/chatbot/male0137.png
     ./img/chatbot/male0138.png
     ./img/chatbot/male0139.png
     ./img/chatbot/male0140.png
     ./img/chatbot/male0141.png
     ./img/chatbot/male0142.png
     ./img/chatbot/male0143.png
     ./img/chatbot/male0144.png
     ./img/chatbot/male0145.png
     ./img/chatbot/male0146.png
     ./img/chatbot/male0147.png
     ./img/chatbot/male0148.png
     ./img/chatbot/male0149.png
     ./img/chatbot/male0150.png
     ./img/chatbot/male0151.png
     ./img/chatbot/male0152.png
     ./img/chatbot/male0153.png
     ./img/chatbot/male0154.png
     ./img/chatbot/male0155.png
     ./img/chatbot/male0156.png
     ./img/chatbot/male0157.png
     ./img/chatbot/male0158.png
     ./img/chatbot/male0159.png
     ./img/chatbot/male0160.png
     ./img/chatbot/male0161.png
     ./img/chatbot/male0162.png
     ./img/chatbot/male0163.png
     ./img/chatbot/male0164.png
     ./img/chatbot/male0165.png
     ./img/chatbot/male0166.png
     ./img/chatbot/male0167.png
     ./img/chatbot/male0168.png
     ./img/chatbot/male0169.png
     ./img/chatbot/male0170.png
     ./img/chatbot/male0171.png
     ./img/chatbot/male0172.png
     ./img/chatbot/male0173.png
     ./img/chatbot/male0174.png
     ./img/chatbot/male0175.png
     ./img/chatbot/male0176.png
     ./img/chatbot/male0177.png
     ./img/chatbot/male0178.png
     ./img/chatbot/male0179.png
     ./img/chatbot/male0180.png
     ./img/chatbot/male0181.png
     ./img/chatbot/male0182.png
     ./img/chatbot/male0183.png
     ./img/chatbot/male0184.png
     ./img/chatbot/male0185.png
     ./img/chatbot/male0186.png
     ./img/chatbot/male0187.png
     ./img/chatbot/male0188.png
     ./img/chatbot/male0189.png
     ./img/chatbot/male0190.png
     ./img/chatbot/male0191.png
     ./img/chatbot/male0192.png
     ./img/chatbot/male0193.png
     ./img/chatbot/male0194.png
     ./img/chatbot/male0195.png
     ./img/chatbot/male0196.png
     ./img/chatbot/male0197.png
     ./img/chatbot/male0198.png
     ./img/chatbot/male0199.png
     ./img/chatbot/male0200.png
     ./img/chatbot/male0201.png
     ./img/chatbot/male0202.png
     ./img/chatbot/male0203.png
     ./img/chatbot/male0204.png
     ./img/chatbot/male0205.png
     ./img/chatbot/male0206.png
     ./img/chatbot/male0207.png
     ./img/chatbot/male0208.png
     ./img/chatbot/male0209.png
     ./img/chatbot/male0210.png
     ./img/chatbot/male0211.png
     ./img/chatbot/male0212.png
     ./img/chatbot/male0213.png
     ./img/chatbot/male0214.png
     ./img/chatbot/male0215.png
     ./img/chatbot/male0216.png
     ./img/chatbot/male0217.png
     ./img/chatbot/male0218.png
     ./img/chatbot/male0219.png
     ./img/chatbot/male0220.png
     ./img/chatbot/male0221.png
     ./img/chatbot/male0222.png
     ./img/chatbot/male0223.png
     ./img/chatbot/male0224.png
     ./img/chatbot/male0225.png
     ./img/chatbot/male0226.png
     ./img/chatbot/male0227.png
     ./img/chatbot/male0228.png
     ./img/chatbot/male0229.png
     ./img/chatbot/male0230.png
     ./img/chatbot/male0231.png
     ./img/chatbot/male0232.png
     ./img/chatbot/male0233.png
     ./img/chatbot/male0234.png
     ./img/chatbot/male0235.png
     ./img/chatbot/male0236.png
     ./img/chatbot/male0237.png
     ./img/chatbot/male0238.png
     ./img/chatbot/male0239.png
     ./img/chatbot/male0240.png
     ./img/chatbot/male0241.png
     ./img/chatbot/male0242.png
     ./img/chatbot/male0243.png
     ./img/chatbot/male0244.png
     ./img/chatbot/male0245.png
     ./img/chatbot/male0246.png
     ./img/chatbot/male0247.png
     ./img/chatbot/male0248.png
     ./img/chatbot/male0249.png
     ./img/chatbot/male0250.png
     ./img/chatbot/male0251.png
     ./img/chatbot/male0252.png
     ./img/chatbot/male0253.png
     ./img/chatbot/male0254.png
     ./img/chatbot/male0255.png
     ./img/chatbot/male0256.png
     ./img/chatbot/male0257.png
     ./img/chatbot/male0258.png
     ./img/chatbot/male0259.png
     ./img/chatbot/male0260.png
     ./img/chatbot/male0261.png
     ./img/chatbot/male0262.png
     ./img/chatbot/male0263.png
     ./img/chatbot/male0264.png
     ./img/chatbot/male0265.png
     ./img/chatbot/male0266.png
     ./img/chatbot/male0267.png
     ./img/chatbot/male0268.png
     ./img/chatbot/male0269.png
     ./img/chatbot/male0270.png
     ./img/chatbot/male0271.png
     ./img/chatbot/male0272.png
     ./img/chatbot/male0273.png
     ./img/chatbot/male0274.png
     ./img/chatbot/male0275.png
     ./img/chatbot/male0276.png
     ./img/chatbot/male0277.png
     ./img/chatbot/male0278.png
     ./img/chatbot/male0279.png
     ./img/chatbot/male0280.png
     ./img/chatbot/male0281.png
     ./img/chatbot/male0282.png
     ./img/chatbot/male0283.png
     ./img/chatbot/male0284.png
     ./img/chatbot/male0285.png
     ./img/chatbot/male0286.png
     ./img/chatbot/male0287.png
     ./img/chatbot/male0288.png
     ./img/chatbot/male0289.png
     ./img/chatbot/male0290.png
     ./img/chatbot/male0291.png
     ./img/chatbot/male0292.png
     ./img/chatbot/male0293.png
     ./img/chatbot/male0294.png
     ./img/chatbot/male0295.png
     ./img/chatbot/male0296.png
     ./img/chatbot/male0297.png
     ./img/chatbot/male0298.png
     ./img/chatbot/male0299.png
     ./img/chatbot/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1", {
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})
gsap.to("#page2", {
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})
gsap.to("#page3", {
  scrollTrigger: {
    trigger: `#page3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`
  }
})