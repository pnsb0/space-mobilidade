// Catálogo da Space Mobilidade Elétrica.
// ATENÇÃO: todos os produtos abaixo são EXEMPLO (out/2026) — trocar pelos modelos, fotos e preços
// reais dos posts do Instagram @space.ivinhema. Fotos ficam em img/.
// id: único, sem espaço · categoria: vira botão de filtro · preco: número em reais (ou null = "Consulte o preço")
// aPartir: true mostra "a partir de" · precoDe: preço antigo riscado (opcional) · extra: linha curta embaixo do preço
const PRODUTOS = [
  {
    id: "scooter-urbana", nome: "Scooter elétrica urbana", categoria: "Scooters",
    desc: "Pra ir pro trabalho e resolver as coisas na cidade sem gastar com gasolina.",
    preco: null, foto: "scooter.svg", exemplo: true,
  },
  {
    id: "scooter-2-lugares", nome: "Scooter elétrica 2 lugares", categoria: "Scooters",
    desc: "Banco maior pra levar alguém junto, com o conforto de uma scooter.",
    preco: null, foto: "scooter.svg", exemplo: true,
  },
  {
    id: "bike-aro-26", nome: "Bike elétrica aro 26", categoria: "Bikes",
    desc: "Pedala quando quiser, o motor ajuda no resto. Subida deixa de ser problema.",
    preco: null, foto: "bike.svg", exemplo: true,
  },
  {
    id: "bike-urbana", nome: "Bike elétrica urbana", categoria: "Bikes",
    desc: "Leve e prática pro dia a dia, com bateria que carrega na tomada de casa.",
    preco: null, foto: "bike.svg", exemplo: true,
  },
  {
    id: "patinete-adulto", nome: "Patinete elétrico adulto", categoria: "Patinetes",
    desc: "Compacto, dobra e cabe em qualquer canto. Ótimo pra trajetos curtos.",
    preco: null, foto: "patinete.svg", exemplo: true,
  },
  {
    id: "patinete-potente", nome: "Patinete elétrico com mais potência", categoria: "Patinetes",
    desc: "Pra quem quer mais força e mais alcance no patinete.",
    preco: null, foto: "patinete.svg", exemplo: true,
  },
  {
    id: "triciclo-cesto", nome: "Triciclo elétrico com cesto", categoria: "Triciclos",
    desc: "Três rodas, mais equilíbrio e cesto pra levar as compras do mercado.",
    preco: null, foto: "triciclo.svg", exemplo: true,
  },
  {
    id: "triciclo-conforto", nome: "Triciclo elétrico conforto", categoria: "Triciclos",
    desc: "Banco confortável e subida fácil, bom pra todas as idades.",
    preco: null, foto: "triciclo.svg", exemplo: true,
  },
];
