"use client";

import { useState } from "react";

export default function Home() {
  const [link, setLink] = useState("");
  const [platform, setPlatform] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [offer, setOffer] = useState("");

  function detectPlatform(url) {
    const value = url.toLowerCase();

    if (value.includes("shopee")) return "Shopee";
    if (value.includes("mercadolivre") || value.includes("mercado-livre"))
      return "Mercado Livre";
    if (value.includes("amazon")) return "Amazon";

    return "Desconhecida";
  }

  function handleGenerateStart() {
    if (!link.trim()) {
      alert("Cole um link primeiro.");
      return;
    }

    const detected = detectPlatform(link);
    setPlatform(detected);
    setOffer("");
  }

  function generateOffer() {
    if (!productName.trim()) {
      alert("Digite o nome do produto.");
      return;
    }

    if (!price.trim()) {
      alert("Digite o preço do produto.");
      return;
    }

    const text = `🔥 OFERTA ENCONTRADA!

🛍️ ${productName}

💰 Por apenas ${price}

📦 Disponível na ${platform}

🛒 Confira aqui:
${link}

⚠️ Preço e disponibilidade podem mudar a qualquer momento.`;

    setOffer(text);
  }

  async function copyOffer() {
    if (!offer) return;

    await navigator.clipboard.writeText(offer);
    alert("Oferta copiada!");
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <header className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-black">
              OFERTAS <span className="text-orange-500">PRO</span>
            </h1>

            <p className="text-xs text-zinc-500">
              Central inteligente de afiliados
            </p>
          </div>

          <button className="rounded-lg border border-zinc-700 px-4 py-2 text-sm">
            Minhas ofertas
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <span className="rounded-full bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-500">
            Shopee • Mercado Livre • Amazon
          </span>

          <h2 className="mt-8 text-4xl font-black leading-tight md:text-6xl">
            Transforme links em
            <span className="block text-orange-500">
              ofertas que vendem.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Cole o link de um produto e prepare sua oferta de afiliado em
            poucos segundos.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-2xl">
          <label className="mb-3 block text-sm font-semibold">
            Link do produto
          </label>

          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="url"
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
                setPlatform("");
                setOffer("");
              }}
              placeholder="Cole aqui o link da Shopee, Mercado Livre ou Amazon..."
              className="flex-1 rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-4 outline-none focus:border-orange-500"
            />

            <button
              onClick={handleGenerateStart}
              className="rounded-xl bg-orange-500 px-7 py-4 font-bold text-black transition hover:bg-orange-400"
            >
              GERAR OFERTA
            </button>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            A plataforma será identificada automaticamente pelo link.
          </p>
        </div>

        {platform && (
          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <p className="text-sm text-zinc-400">Plataforma identificada</p>

            <p className="mt-1 text-xl font-bold text-orange-500">
              {platform}
            </p>

            {platform === "Desconhecida" ? (
              <p className="mt-4 text-sm text-red-400">
                Esse link não parece ser da Shopee, Mercado Livre ou Amazon.
              </p>
            ) : (
              <>
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Nome do produto
                    </label>

                    <input
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      placeholder="Ex.: Air Fryer 5L"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Preço
                    </label>

                    <input
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Ex.: R$ 129,90"
                      className="w-full rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <button
                  onClick={generateOffer}
                  className="mt-5 w-full rounded-xl bg-white px-6 py-4 font-bold text-black transition hover:bg-zinc-200"
                >
                  CRIAR MENSAGEM DA OFERTA
                </button>
              </>
            )}
          </div>
        )}

        {offer && (
          <div className="mt-6 rounded-2xl border border-orange-500/30 bg-zinc-900 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-400">Oferta pronta</p>
                <h3 className="text-xl font-bold">Mensagem para divulgação</h3>
              </div>

              <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
                PRONTA
              </span>
            </div>

            <pre className="mt-5 whitespace-pre-wrap rounded-xl bg-zinc-950 p-5 text-sm leading-7 text-zinc-200">
              {offer}
            </pre>

            <button
              onClick={copyOffer}
              className="mt-5 w-full rounded-xl bg-orange-500 px-6 py-4 font-bold text-black transition hover:bg-orange-400"
            >
              COPIAR OFERTA
            </button>
          </div>
        )}

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="font-bold">🛍️ Shopee</p>
            <p className="mt-2 text-sm text-zinc-500">
              Detecção de link ativa
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="font-bold">💛 Mercado Livre</p>
            <p className="mt-2 text-sm text-zinc-500">
              Detecção de link ativa
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="font-bold">📦 Amazon</p>
            <p className="mt-2 text-sm text-zinc-500">
              Detecção de link ativa
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
