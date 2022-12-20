let baliIdx = 0;
let jawaTimurIdx = 0;
let nttIdx = 0;

const baliImages = [
  "assets/images/kuta_bali.jpg",
  "assets/images/kuta_bali1.jpg",
];

const jawaTimurImages = ["assets/images/gunung_bromo.jpg"];

const nttImages = [
  "assets/images/taman_nasional_komodo.jpg",
  "assets/images/taman_nasional_komodo1.jpg",
  "assets/images/taman_nasional_komodo2.jpg",
];

const getAltName = (imageList, idx) => {
  return imageList[idx].substring(
    imageList[idx].lastIndexOf("/") + 1,
    imageList[idx].indexOf(".jpg")
  );
};

const slideShow = () => {
  const slideBali = document.querySelector(".slide-bali");
  if (baliImages.length > 1) slideBali.classList.add("slide-out");

  const slideJawaTimur = document.querySelector(".slide-jawa-timur");
  if (jawaTimurImages.length > 1) slideJawaTimur.classList.add("slide-out");

  const slideNTT = document.querySelector(".slide-ntt");
  if (nttImages.length > 1) slideNTT.classList.add("slide-out");
  setTimeout(() => {
    slideBali.src = baliImages[baliIdx];
    slideBali.alt = getAltName(baliImages, baliIdx);
    slideBali.classList.remove("slide-out");

    slideJawaTimur.src = jawaTimurImages[jawaTimurIdx];
    slideJawaTimur.classList.remove("slide-out");

    slideNTT.src = nttImages[nttIdx];
    slideNTT.classList.remove("slide-out");
  }, 1000);

  baliIdx++;
  jawaTimurIdx++;
  nttIdx++;

  if (baliIdx == baliImages.length) baliIdx = 0;
  if (jawaTimurIdx == jawaTimurImages.length) jawaTimurIdx = 0;
  if (nttIdx == nttImages.length) nttIdx = 0;

  setTimeout(slideShow, 5000);
};

slideShow();
