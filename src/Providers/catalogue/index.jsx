import { createContext, useState, useEffect } from "react";
import api from "../../Services";

export const CatalogueContext = createContext();

const products = [
  {
    id: 1,
    name: "Minas Coffee",
    category: "Moido",
    image:
      "https://s3-alpha-sig.figma.com/img/2249/c2c8/2ebc109fd5acfd300bf3f6dd7600635b?Expires=1637539200&Signature=VDy02pDQImt4B0Yo7uoSIY0W19dnZ2fRSrB17MY6eq9ivc3ycNKTps0Catx7o2qvEJvYdhBqOMkEJFuXgcN74Z16FQ0KW1qu4eXSZa~ATyFTWbAg5M8h2HUqWpKJXEpWba0~nwBbnGxuWOsejj9xo1O1c2o7JuDH1iLRkMd8VcBm47NvninMze2fFG-DFAyHsAtNgqi5hfov3UcD59Oe9ukAlcivU44kc9OrFAkPXHjsR1X9c-g0K~3JpV8RMcXy6MLYL0miKsOTHNerZvWc3uFGKoAH~Z1i9iyfWjQM2GZ~zli20aKeoxqtFGrg5xjkm~7us7TXtx7yeBBy17~56Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    price: 29.99,
    description:
      "O sabor da bebida é intenso, a doçura ligeiramente presente com um toque de amargor. A finalização é achocolatada e caramelizada com notas amadeiradas. Elas são compatíveis com as máquinas do sistema Nespresso.",
    region: "Norte",
    position: [-2.9608691, -60.0479887],
  },
  {
    id: 2,
    name: "Soma Coffee",
    image:
      "https://s3-alpha-sig.figma.com/img/4602/4d90/248fbe44ec742723f855451443ed7cbc?Expires=1637539200&Signature=av3U-7BflbKCbL-GXyJo5EMhXOV0FPq-jhyQQCcuC1ZrqSfdyC9gyHPgmEeAiAXhAzItvrAVZ5nw4SbApmGTn0RlkvB9vtm~op6CFr44iBuur1ml64cWBGmd9sDURbHj9q4A-NuR8k8GyTadWjQtokXHIW1mdYpIjwUis8gjxSvM9hnJHyjPTUwA90KOK~Iev8W~t0diWXTvF1KGO7P3jOZF5J0VjhVs8tVYLcShQ4HHC6e3~G6vzhjzLUJ4QLXqJctdQ5as3qnPWbzp2VB5Y031cA8Vkx6v~2YRL8H-8l0~AFpUsQ0i9GgSQaDfc0iX3q5npzRaYUPq3DkQxRMmVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    description:
      "O sabor da bebida é intenso, a doçura ligeiramente presente com um toque de amargor. A finalização é achocolatada e caramelizada com notas amadeiradas. Elas são compatíveis com as máquinas do sistema Nespresso.",
    category: "Grão",
    price: 150.99,
    region: "Norte",
    position: [-5.9301982, -69.4614498],
  },

  {
    id: 3,
    name: "Schuil Coffee",
    image:
      "https://s3-alpha-sig.figma.com/img/12b0/03d9/cab65edea2ee6f8730d0977fd8c32f07?Expires=1637539200&Signature=HHAlR9zoAVcvCuSalLVu8Ir0lZiwLsT3lkZ-xKzWiR9QOKJpA2wo~8R1r~Z8SMOSkuF-mRbGTylpT18TK3yvcgSi7nGbAQRMpm8ZSM22ajz2efuk1Jriu1~-Qif9ObWJW-JSn-4qVNw4s9RYnNX8FPF~T17PZZCvF1Z9UOY2imhcW7A4ujsh6udJWgGTORxUqtD8qgnW05tQ04ebDviAg~wpwjrlhNQaS~SE6zWBwPgEsMR64O-HQcJ1p8d2Nq6SN~PetO0PhGWC66XUcLEsz~RY2DQTaMq3XFVPwT4cwBdLQylEtcQhWnrneDzsOBoh~2qDygIsmJKk3SV4DelB6Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    description:
      "O sabor da bebida é intenso, a doçura ligeiramente presente com um toque de amargor. A finalização é achocolatada e caramelizada com notas amadeiradas. Elas são compatíveis com as máquinas do sistema Nespresso.",
    category: "Moído",
    price: 10.99,
    region: "Nordeste",
    position: [-4.3411493, -38.8777458],
  },
  {
    id: 4,
    name: "Garden Coffee",
    image:
      "https://s3-alpha-sig.figma.com/img/37c4/c492/2459745a9d4752d0a656d0108d8c2c48?Expires=1637539200&Signature=WXN7xRgA3jdWfub-xEWkFPXeGzERaJ125gj8c8qUpoB6wU7oYWzxVQdzJwvYw-2wlPFlyT7~OZhhoekawFbXp4Qo2-i4gpBB-bcJvn0qab~Ksc-c0cDQo3srtjIAp7EMewFjp78Cnxvqi8IKhsigH8mUrXhm2dWLHO2w2JeR5JxcPRI68sQjWNh7-EaDBIJtq7ctP8xXV4wdQgoqRJ85MTMl93SjLtRPZ2szQ-KT0hwFPqb~l8kCzCDI4Se7sCaK455Ax0P1kA5gWSzANx4VGvlYQ8E7jMNRVfuksA2B~wJQXXjZMz3~XHOckBtkYiuoYkzE44CO0mdbrL0KdzVgQA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    description:
      "O sabor da bebida é intenso, a doçura ligeiramente presente com um toque de amargor. A finalização é achocolatada e caramelizada com notas amadeiradas. Elas são compatíveis com as máquinas do sistema Nespresso.",
    category: "Grão",
    price: 29.99,
    region: "Centro-Oeste",
    position: [-10.5751082, -53.8431995],
  },
  {
    id: 5,
    name: "Coffe Express",
    image:
      "https://s3-alpha-sig.figma.com/img/3e91/5be2/55899bb9c52b4048da26cf9de42022b1?Expires=1637539200&Signature=GwxFu39nrO9WC1vXEVyAinwLMO4X60LU-hyivLMGNphAQNGNaokd3JyXfOc0o-NA4K9BZj6pM8~LMmSzgaBmwonNQLoSGZqg1iGApG6kLPuG657S8XvhXDioneHm2gEjcbYQ803ZertgiKvhlfpZfVTJvRk2bGAuEUpfn8mhFKDXQiJ9KiCaM3HPn0yuWGKseS5ZnA5F810G8hRssE1LaLbl9eHNNPX1OLxxuUOXShdlrsiM3bDOnRL-O3UT50LK8M-Xq0J8EHeEIEVDTSXhW6zIc7CZuHdtvQjH9dZ8IT98Hrfvv327evx~hvNldiPcCbmJFYfi78h2AU7suFcUkw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    description:
      "O sabor da bebida é intenso, a doçura ligeiramente presente com um toque de amargor. A finalização é achocolatada e caramelizada com notas amadeiradas. Elas são compatíveis com as máquinas do sistema Nespresso.",
    category: "Grão",
    price: 10.99,
    region: "Sudeste",
    position: [-17.9041106, -45.8620649],
  },
  {
    id: 6,
    name: "Coffe Lake",
    image:
      "https://s3-alpha-sig.figma.com/img/66cc/8e8f/71d995c50481ca871e93085cb8c382a5?Expires=1637539200&Signature=TcJ7UGL-3AuQmEoRRbJMQUvGrCS12Cue0aKuMKguzgNFNt1PAnZ6Od00aWpL-Q4Gm5AsOS9QFWgTvBV5SPfP60Ix8xiJkHpsSLUz0Z-tVfviQsXh-eQ1Ue95dBSwJZTtCBn~BP9Dml9erSej3JBZyFfJAf~UsPie9uwPK8X~Z1vGfpTZ0vdwHq3L6TgKjpJFPF~4iouWPHMJ9HNifyJvmDqkwjoIa8puUZuptj71aIfUXJ5LSDNPu-EPhRdaAH4tx3C~ckBO7oddUcDaxby6r4EjFl1OoznCf9zynsklYebsuQ40VK8yek1ID-O1F9Yc0UewqO-y5QREXJ5GgzBLkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    description:
      "O sabor da bebida é intenso, a doçura ligeiramente presente com um toque de amargor. A finalização é achocolatada e caramelizada com notas amadeiradas. Elas são compatíveis com as máquinas do sistema Nespresso.",
    category: "Moído",
    price: 150.99,
    region: "Sudeste",
    position: [-20.7947463, -41.7143235],
  },
  {
    id: 7,
    name: "Baked Fresh Coffee",
    image:
      "https://s3-alpha-sig.figma.com/img/d95c/dadd/68adf07481272eb70bdd49ed1dd7f722?Expires=1637539200&Signature=S8jvrV1~HQw-XncVE2At5PKROeectKFLpcWu5rAKNFOI3scZ61-cP7bXl440ruE2Iql63Rh-HlE4qMbT8yMo-NOTGiN-UWe6BYIRC-fCRDTcNgGA3Ryu0Pj8BV-RuMaKMnBqeajhp0KfzPI0hD9H9VwZYiMY3AAf1KFunsrHzjzyv1Amc4LmtCOm4nA~13xZRROkmXgRyGlRpfnq2E4Lu24GxJvqwjN-c7Zhp746WOwOWnEVd1Pya~dmupea70jBiDkGy4jdTkHawrwOQhzTjUriEnHh~pmjuKRuQTMMB6HHamxKXwpZqXropmhOi2kqn3aqTPGxdnl2ekdhEbDd8w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    description:
      "O sabor da bebida é intenso, a doçura ligeiramente presente com um toque de amargor. A finalização é achocolatada e caramelizada com notas amadeiradas. Elas são compatíveis com as máquinas do sistema Nespresso.",
    category: "Moído",
    price: 44.99,
    region: "Sul",
    position: [-29.8668878, -53.5281361],
  },
  {
    id: 8,
    name: "Soma Coffee Plus",
    image:
      "https://s3-alpha-sig.figma.com/img/4602/4d90/248fbe44ec742723f855451443ed7cbc?Expires=1637539200&Signature=av3U-7BflbKCbL-GXyJo5EMhXOV0FPq-jhyQQCcuC1ZrqSfdyC9gyHPgmEeAiAXhAzItvrAVZ5nw4SbApmGTn0RlkvB9vtm~op6CFr44iBuur1ml64cWBGmd9sDURbHj9q4A-NuR8k8GyTadWjQtokXHIW1mdYpIjwUis8gjxSvM9hnJHyjPTUwA90KOK~Iev8W~t0diWXTvF1KGO7P3jOZF5J0VjhVs8tVYLcShQ4HHC6e3~G6vzhjzLUJ4QLXqJctdQ5as3qnPWbzp2VB5Y031cA8Vkx6v~2YRL8H-8l0~AFpUsQ0i9GgSQaDfc0iX3q5npzRaYUPq3DkQxRMmVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    description:
      "O sabor da bebida é intenso, a doçura ligeiramente presente com um toque de amargor. A finalização é achocolatada e caramelizada com notas amadeiradas. Elas são compatíveis com as máquinas do sistema Nespresso.",
    category: "Grão",
    price: 24.99,
    region: "Sudeste",
    position: [-22.0879198, -51.4603543],
  },
];

export const CatalogueProvider = ({ children }) => {
  const [catalogue, setCatalogue] = useState(products);
  // Caso precise filtrar algum produto o State de filtro vem aqui
  const getProductsCatalogue = () => {
    //api.get("products").then((response) => setCatalogue(response.data));
  };

  useEffect(() => {
    getProductsCatalogue();
  }, []);

  return (
    <CatalogueContext.Provider value={{ catalogue }}>
      {children}
    </CatalogueContext.Provider>
  );
};
