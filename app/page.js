"use client";

import { useState } from "react";

export default function Home() {
  const [link, setLink] = useState("");

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

      <section className="mx-auto max-w-4xl px-6 py-20">
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
              onChange={(e) => setLink(e.target.value)}
              placeholder="Cole aqui o link da Shopee, Mercado Livre ou Amazon..."
              className="flex-1 rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-4 outline-none focus:border-orange-500"
            />

            <button
              onClick={() => alert(link ? "Link recebido!" : "Cole um link primeiro.")}
              className="rounded-xl bg-orange-500 px-7 py-4 font-bold text-black transition hover:bg-orange-400"
            >
              GERAR OFERTA
            </button>
          </div>

          <p className="mt-4 text-xs text-zinc-500">
            A plataforma será identificada automaticamente pelo link.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="font-bold">🛍️ Shopee</p>
            <p className="mt-2 text-sm text-zinc-500">Preparado para integração</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="font-bold">💛 Mercado Livre</p>
            <p className="mt-2 text-sm text-zinc-500">Preparado para integração</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5">
            <p className="font-bold">📦 Amazon</p>
            <p className="mt-2 text-sm text-zinc-500">Preparado para integração</p>
          </div>
        </div>
      </section>
    </main>
  );
}