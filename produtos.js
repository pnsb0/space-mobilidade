// Catálogo da Space Mobilidade Elétrica.
// Fonte: catálogo do WhatsApp Business da loja (prints mandados pelo Giovani em 24/10/2026).
// Preço = valor à vista do catálogo · extra = parcelamento que aparece na arte. Conferir com o Arnaldo.
// id: único, sem espaço · categoria: vira botão de filtro · preco: número em reais (ou null = "Consulte o preço")
// aPartir: true mostra "a partir de" · precoDe: preço antigo riscado (opcional) · extra: linha curta embaixo do preço
// Fotos em img/: só o veículo, recortado da arte do catálogo, em fundo escuro (800x600).
// As artes originais, com a ficha completa, ficam em ../artes-catalogo/.
const PRODUTOS = [
  // ---------- Scooters ----------
  {
    id: "citycoco-x7", nome: "Scooter Citycoco X-7", categoria: "Scooters",
    desc: "1500W ou 2000W · 30 a 40 km · até 45 km/h · farol em LED e setas. Várias cores.",
    preco: 7900, extra: "ou 18x de R$ 560,00 no cartão", foto: "scooter-citycoco-x7.jpg",
  },
  {
    id: "citycoco-x11", nome: "Scooter Citycoco X-11", categoria: "Scooters",
    desc: "2000W ou 3000W · 40 a 50 km · até 60 km/h · aguenta até 200 kg. Várias cores.",
    preco: 7999, extra: "ou 18x de R$ 567,00 no cartão", foto: "scooter-citycoco-x11.jpg",
  },
  {
    id: "chopper-x14", nome: "Scooter Chopper X-14", categoria: "Scooters",
    desc: "2000W ou 3000W · 50 a 60 km · até 75 km/h · aguenta até 200 kg. Várias cores.",
    preco: 8499, extra: "ou 18x de R$ 602,00 no cartão", foto: "scooter-chopper-x14.jpg",
  },
  {
    id: "chopper-x14-m02", nome: "Scooter Chopper X-14 Modelo 02", categoria: "Scooters",
    desc: "2000W ou 3000W · 50 a 60 km · até 75 km/h · aguenta até 200 kg. Várias cores.",
    preco: 8499, extra: "ou 18x de R$ 602,00 no cartão", foto: "scooter-chopper-x14-m02.jpg",
  },

  // ---------- Auto-propelidos (dispensam CNH) ----------
  {
    id: "ecobike-happy", nome: "Ecobike Happy", categoria: "Auto-propelidos",
    desc: "Dispensa CNH · 500W · 35 a 40 km · até 40 km/h · com cesto. Várias cores.",
    preco: 4499, extra: "ou 18x de R$ 350,00 no cartão", foto: "ecobike-happy.jpg",
  },
  {
    id: "ecobike-g08-chumbo", nome: "Ecobike G-08 Chumbo", categoria: "Auto-propelidos",
    desc: "Dispensa CNH · 500W · bateria de chumbo · 35 a 40 km · até 40 km/h. Várias cores.",
    preco: 4899, extra: "ou 18x de R$ 350,00 no cartão", foto: "ecobike-g08-chumbo.jpg",
  },
  {
    id: "ecobike-g08-litio", nome: "Ecobike G-08 Lítio", categoria: "Auto-propelidos",
    desc: "Dispensa CNH · 500W · bateria de lítio · 35 a 40 km · até 40 km/h. Várias cores.",
    preco: 5199, extra: "ou 18x de R$ 350,00 no cartão", foto: "ecobike-g08-litio.jpg",
  },
  {
    id: "ecobike-g05-chumbo", nome: "Ecobike G-05 Chumbo", categoria: "Auto-propelidos",
    desc: "Dispensa CNH · 500W · bateria de chumbo · 35 a 40 km · aguenta até 150 kg. Várias cores.",
    preco: 5199, extra: "ou 18x de R$ 350,00 no cartão", foto: "ecobike-g05-chumbo.jpg",
  },
  {
    id: "ecobike-g05-litio", nome: "Ecobike G-05 Lítio", categoria: "Auto-propelidos",
    desc: "Dispensa CNH · 500W · bateria de lítio · 35 a 40 km · aguenta até 150 kg. Várias cores.",
    preco: 5499, extra: "ou 18x de R$ 370,00 no cartão", foto: "ecobike-g05-litio.jpg",
  },
  {
    id: "ecobike-foston-x11", nome: "Ecobike Foston X-11", categoria: "Auto-propelidos",
    desc: "Dispensa CNH · 500W · bateria 20Ah · 40 a 50 km · até 40 km/h.",
    preco: 5799, extra: "ou 18x de R$ 390,00 no cartão", foto: "ecobike-foston-x11.jpg",
  },
  {
    id: "foston-gt3", nome: "Scooter Foston GT3", categoria: "Auto-propelidos",
    desc: "Dispensa CNH · 1000W · 50 a 60 km · até 40 km/h · suspensão dianteira e traseira. Várias cores.",
    preco: 6999, extra: "ou 18x de R$ 470,00 no cartão", foto: "scooter-foston-gt3.jpg",
  },

  // ---------- E-bikes ----------
  {
    id: "ebike-p140", nome: "E-bike Foston P-140", categoria: "E-bikes",
    desc: "Dobrável · 250W · 30 a 40 km · até 35 km/h · aro 13.",
    preco: 3999, extra: "ou 18x de R$ 270,00 no cartão", foto: "ebike-foston-p140.jpg",
  },
  {
    id: "ebike-p160", nome: "E-bike Foston P-160", categoria: "E-bikes",
    desc: "Dobrável · 350W · 40 a 50 km · até 30 km/h · freio a disco.",
    preco: 4199, extra: "ou 18x de R$ 282,00 no cartão", foto: "ebike-foston-p160.jpg",
  },
  {
    id: "ebike-p200", nome: "E-bike Foston P-200", categoria: "E-bikes",
    desc: "Dobrável · pneu Fat Boy aro 20 · 250W · 30 a 40 km · 7 marchas Shimano.",
    preco: 5449, extra: "ou 18x de R$ 366,00 no cartão", foto: "ebike-foston-p200.jpg",
  },
  {
    id: "ebike-p100", nome: "E-bike Foston P-100", categoria: "E-bikes",
    desc: "Pneu Fat Boy aro 26 · 350W · 30 a 40 km · 21 marchas Shimano · farol em LED.",
    preco: 5499.9, extra: "ou 18x de R$ 370,00 no cartão", foto: "ebike-foston-p100.jpg",
  },
  {
    id: "ebike-p264s", nome: "E-bike Foston P-264S", categoria: "E-bikes",
    desc: "Pneu Fat Boy aro 26 · 350W · 30 a 40 km · 7 marchas Shimano · farol em LED.",
    preco: 5899.9, extra: "ou 18x de R$ 396,00 no cartão", foto: "ebike-foston-p264s.jpg",
  },
  {
    id: "ebike-p263", nome: "E-bike Foston P-263", categoria: "E-bikes",
    desc: "Dobrável · aro 26 · 350W · 40 a 50 km · 7 marchas Shimano.",
    preco: 6249, extra: "ou 18x de R$ 420,00 no cartão", foto: "ebike-foston-p263.jpg",
  },
  {
    id: "ebike-p260", nome: "E-bike Foston P-260", categoria: "E-bikes",
    desc: "Dobrável · aro 26 · 350W · 40 a 50 km · 21 marchas Shimano.",
    preco: 6499, extra: "Parcela em até 18x no cartão", foto: "ebike-foston-p260.jpg",
  },
  {
    id: "ebike-p296m", nome: "E-bike Foston P-296M", categoria: "E-bikes",
    desc: "Dobrável · aro 29 · 350W · 40 a 50 km · 27 marchas Shimano.",
    preco: 6749, extra: "ou 18x de R$ 455,00 no cartão", foto: "ebike-foston-p296m.jpg",
  },

  // ---------- Patinetes ----------
  {
    id: "patinete-30km", nome: "Patinete Elétrico 30 km", categoria: "Patinetes",
    desc: "Várias marcas do mesmo modelo (consulte a disponível) · 350W · 20 a 30 km · até 25 km/h.",
    preco: 1890, extra: "ou 18x de R$ 134,00 no cartão", foto: "patinete-30km.jpg",
  },
  {
    id: "patinete-s09", nome: "Patinete Foston S09", categoria: "Patinetes",
    desc: "350W · 20 a 30 km · até 25 km/h · aguenta até 120 kg · garantia de 3 meses.",
    preco: 2250, extra: "ou 18x de R$ 152,00 no cartão", foto: "patinete-foston-s09.jpg",
  },
  {
    id: "patinete-s09-pro", nome: "Patinete Foston S09 Pro", categoria: "Patinetes",
    desc: "Bateria maior: 30 a 40 km · 350W · até 25 km/h · garantia de 3 meses.",
    preco: 2499.9, extra: "ou 18x de R$ 168,00 no cartão", foto: "patinete-foston-s09-pro.jpg",
  },
  {
    id: "patinete-x4-pro", nome: "Patinete Foston X4 Pro", categoria: "Patinetes",
    desc: "400W · 35 a 40 km · até 30 km/h · pneu sem câmara (não fura) · freio E-ABS.",
    preco: 3499, extra: "ou 18x de R$ 235,00 no cartão", foto: "patinete-foston-x4-pro.jpg",
  },
  {
    id: "patinete-s10", nome: "Patinete Foston S10", categoria: "Patinetes",
    desc: "800W · 45 a 55 km · até 45 km/h · aguenta até 140 kg · garantia de 3 meses.",
    preco: 5199, extra: "ou 18x de R$ 349,00 no cartão", foto: "patinete-foston-s10.jpg",
  },
  {
    id: "patinete-s12", nome: "Patinete Foston S12", categoria: "Patinetes",
    desc: "800W · 45 a 55 km · até 45 km/h · aguenta até 140 kg · garantia de 3 meses.",
    preco: 5499, extra: "ou 18x de R$ 370,00 no cartão", foto: "patinete-foston-s12.jpg",
  },
  {
    id: "patinete-x10", nome: "Patinete Foston X10", categoria: "Patinetes",
    desc: "1200W · 40 a 50 km · até 40 km/h · aguenta até 140 kg · garantia de 3 meses.",
    preco: 5999, extra: "ou 18x de R$ 403,00 no cartão", foto: "patinete-foston-x10.jpg",
  },
  {
    id: "patinete-s13-ultra", nome: "Patinete Foston S13 Ultra S", categoria: "Patinetes",
    desc: "2 motores (2000W) · 45 a 55 km · até 70 km/h · freio E-ABS · aguenta até 150 kg.",
    preco: 6899, extra: "ou 18x de R$ 465,00 no cartão", foto: "patinete-foston-s13-ultra.jpg",
  },
  {
    id: "patinete-velocifero", nome: "Patinete Mad Velocifero", categoria: "Patinetes",
    desc: "Com assento · 1600W · 35 a 40 km · até 60 km/h · aguenta até 170 kg. Várias cores.",
    preco: 7499, extra: "ou 18x de R$ 505,00 no cartão", foto: "patinete-mad-velocifero.jpg",
  },

  // ---------- Linha infantil ----------
  {
    id: "hoverboard", nome: "Hoverboard Elétrico", categoria: "Infantil",
    desc: "350W · aprox. 12 km · até 10 km/h · carrega em 3 horas. Várias cores.",
    preco: 749, extra: "ou 12x de R$ 72,00 no cartão", foto: "hoverboard.jpg",
  },
  {
    id: "hoverboard-c-led", nome: "Hoverboard Foston C-LED", categoria: "Infantil",
    desc: "LED nas rodas (3D túnel) e Bluetooth · aprox. 15 km · até 10 km/h. Várias cores.",
    preco: 990, extra: "ou 12x de R$ 95,00 no cartão", foto: "hoverboard-foston-c-led.jpg",
  },
  {
    id: "triciclo-drift", nome: "Triciclo Elétrico Drift", categoria: "Infantil",
    desc: "Com LED · 250W · aprox. 15 km · até 16 km/h · aguenta até 100 kg. Várias cores.",
    preco: 1699, extra: "ou 12x de R$ 162,00 no cartão", foto: "triciclo-drift.jpg",
  },
  {
    id: "minimoto-x1", nome: "Mini Moto Elétrica Foston X-1", categoria: "Infantil",
    desc: "Com rodinhas · 160W · aprox. 10 km · até 16 km/h · display de bateria e velocidade.",
    preco: 3499, extra: "ou 18x de R$ 235,00 no cartão", foto: "minimoto-foston-x1.jpg",
  },
];
