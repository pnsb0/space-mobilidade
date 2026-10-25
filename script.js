// CONFIGURAÇÃO
const WHATSAPP = "5567992522622"; // 55 + DDD + número do Arnaldo (confirmado no link da bio do Instagram)
const REDES = {
  instagram: "https://www.instagram.com/space.ivinhema/",
};
const CNPJ = ""; // ex.: "12.345.678/0001-90" (vazio = não aparece no rodapé)

// Mapa: pin exato da loja na Av. Brasil (coordenadas passadas pelo Giovani, 24/10/2026).
// Usa coordenadas e não o nome, porque no Google o ponto ainda aparece com a loja antiga.
const MAPA_LINK = "https://www.google.com/maps/search/?api=1&query=-22.3028980,-53.8227125";
const MAPA_EMBED = "https://www.google.com/maps?q=-22.3028980,-53.8227125&z=17&output=embed";

const brl = (v) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const linkWhats = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
const msgProduto = (p) =>
  p.preco == null
    ? `Oi! Vi no site da Space o ${p.nome} e tenho interesse. Qual o valor? Tem disponível?`
    : `Oi! Vi no site da Space o ${p.nome} (${brl(p.preco)}) e tenho interesse. Tem disponível?`;
const ICONE_WHATS = `<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>`;

// ---------- Catálogo ----------
function precoHTML(p) {
  if (p.preco == null) return `<p class="preco">Consulte o preço</p>`;
  const de = p.precoDe ? `<s>${brl(p.precoDe)}</s>` : "";
  const ap = p.aPartir ? `<small>a partir de</small>` : "";
  return `<p class="preco">${de}${ap}${brl(p.preco)}</p>`;
}

function renderCatalogo(filtro) {
  const lista = filtro === "Todos" ? PRODUTOS : PRODUTOS.filter((p) => p.categoria === filtro);
  document.getElementById("grade").innerHTML = lista
    .map((p) => `<article class="card">
        <div class="card-img${p.foto.endsWith(".svg") ? " desenho" : ""}"><img src="img/${p.foto}" alt="${p.nome}" loading="lazy">
          ${p.precoDe ? `<span class="selo">Promoção</span>` : ""}</div>
        <div class="card-corpo">
          <span class="card-cat">${p.categoria}</span>
          <h3>${p.nome}</h3>
          <p class="card-desc">${p.desc}</p>
          ${precoHTML(p)}
          ${p.extra ? `<p class="card-extra">${p.extra}</p>` : ""}
          <div class="card-acoes">
            <a class="btn btn-whats" target="_blank" rel="noopener" href="${linkWhats(msgProduto(p))}">${ICONE_WHATS} Quero esse</a>
          </div>
        </div>
      </article>`)
    .join("");
}

function renderFiltros() {
  const cats = ["Todos", ...new Set(PRODUTOS.map((p) => p.categoria))];
  const box = document.getElementById("filtros");
  box.innerHTML = cats
    .map((c, i) => `<button class="filtro${i === 0 ? " ativo" : ""}" data-cat="${c}">${c}</button>`)
    .join("");
  box.addEventListener("click", (e) => {
    const b = e.target.closest(".filtro");
    if (!b) return;
    box.querySelectorAll(".filtro").forEach((x) => x.classList.toggle("ativo", x === b));
    renderCatalogo(b.dataset.cat);
  });
}

// ---------- Links ----------
document.querySelectorAll("[data-whats]").forEach((a) => {
  a.href = linkWhats("Oi! Vim pelo site da Space e queria saber mais sobre os elétricos.");
});
document.querySelectorAll("[data-whats-msg]").forEach((a) => {
  a.href = linkWhats(a.dataset.whatsMsg);
});
document.querySelectorAll("[data-rede]").forEach((a) => {
  const url = REDES[a.dataset.rede];
  if (!url) return a.remove();
  a.href = url;
});
document.querySelectorAll("[data-mapa]").forEach((a) => (a.href = MAPA_LINK));
document.getElementById("mapa").src = MAPA_EMBED;
if (CNPJ) document.getElementById("cnpj").textContent = `CNPJ ${CNPJ} · `;
document.getElementById("ano").textContent = new Date().getFullYear();

renderFiltros();
renderCatalogo("Todos");
