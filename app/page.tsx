"use client";

import { useEffect, useState } from "react";
import {
  ArrowRightLeft,
  Check,
  ChevronRight,
  Mail,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { href: "#about", label: "Re:OneCoachとは" },
  { href: "#business-model", label: "仕組み" },
  { href: "#pricing", label: "料金" },
  { href: "#company", label: "提供会社" },
];

const targetCompanies = [
  "地域や業界で、長年の取引実績と信頼関係を築いてきた",
  "取引先からDXやAI活用について相談される機会が増えてきた",
  "値引き以外の提案で、既存顧客との関係を深めたい",
  "新しい収益源はほしいが、自社だけで教材開発や運営体制を持つのは重い",
];

const aboutPoints = [
  "0から教材を作り込む必要はありません",
  "基本カリキュラムと配信基盤はルートチームが用意します",
  "業界や商材に合わせた部分だけを御社と共同で設計します",
  "御社名義で案内しやすい専用サイトを構築します",
];

const partnerBenefits = [
  "自社の現場に近い事例で学べる",
  "付き合いのある会社から紹介されるため安心して始めやすい",
  "助成金活用も含めて導入負担を抑えやすい",
  "動画視聴だけで終わらず、実務への落とし込みまで支援を受けられる",
];

const companyBenefits = [
  "既存取引先との関係が、仕入れ先から相談先へ深まる",
  "値引き以外の提案材料が増える",
  "継続課金による新しい収益源を持てる",
  "本業の営業や提案活動とも自然につながる",
];

const flowSteps = [
  "ヒアリング",
  "御社向け設計",
  "業界向け教材の共同制作",
  "取引先への案内開始",
  "運用改善",
];

const stats = ["1,300社以上", "導入設計から伴走", "マージン20〜30%"];

const primaryButton =
  "inline-flex items-center justify-center rounded-lg bg-[var(--navy)] px-7 py-3 text-sm font-bold text-white transition hover:bg-[var(--navy-hover)]";
const secondaryButton =
  "inline-flex items-center justify-center rounded-lg border border-[var(--navy)] bg-white px-7 py-3 text-sm font-bold text-[var(--navy)] transition hover:bg-[rgba(26,31,75,0.04)]";
const cardClass =
  "rounded-xl border border-[var(--border)] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,0,0,0.12)]";
const contactHref =
  "mailto:info@rootteam.co.jp?subject=Re%3AOneCoach%E3%81%AE%E3%81%94%E7%9B%B8%E8%AB%87";

function Logo() {
  return (
    <span className="text-xl font-extrabold tracking-tight sm:text-2xl">
      <span className="text-[var(--gold)]">Re:</span>
      <span className="text-[var(--navy)]">OneCoach</span>
    </span>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-left text-base leading-8 text-[var(--foreground)]">
          <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--gold)]" strokeWidth={3} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
      },
    );

    const elements = document.querySelectorAll(".fade-section");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);

    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-50 border-b border-[rgba(232,232,240,0.8)] bg-white/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <a href="#top" aria-label="Re:OneCoach トップへ">
            <Logo />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--muted-foreground)] transition hover:text-[var(--navy)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href="#business-model" className={secondaryButton}>
              仕組みを見る
            </a>
            <a href={contactHref} className={primaryButton}>
              無料で相談する
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--navy)] md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-[var(--border)] bg-white px-5 py-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-[var(--muted-foreground)]"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-2">
                <a
                  href="#business-model"
                  className={secondaryButton}
                  onClick={() => setMenuOpen(false)}
                >
                  仕組みを見る
                </a>
                <a href={contactHref} className={primaryButton} onClick={() => setMenuOpen(false)}>
                  無料で相談する
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <section
        id="top"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#e8eaf6_100%)]"
      >
        <div className="absolute right-[-160px] top-[-200px] h-[440px] w-[440px] rounded-full bg-[var(--gold)] opacity-[0.15] blur-[200px]" />
        <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-24 sm:px-6 lg:px-8 lg:py-[120px]">
          <div className="fade-section max-w-2xl">
            <div className="mb-6 inline-flex rounded-full border border-[rgba(245,166,35,0.28)] bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--navy)] shadow-sm">
              <span className="text-[var(--gold)]">Re:</span>
              <span>OneCoach 既存顧客向けAI研修パートナー制度</span>
            </div>
            <h1 className="whitespace-pre-line text-[2.5rem] leading-[1.2] font-extrabold tracking-tight text-[var(--navy)] sm:text-[3.5rem]">
              {"長年の取引先に、\n次の一手を提案できていますか。"}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted-foreground)]">
              御社がすでに持つ信頼関係を活かして、
              取引先にAI研修という新しい支援を届ける。Re:OneCoachは、そのための仕組みです。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href={contactHref} className={primaryButton}>
                無料で相談する
              </a>
              <a href="#business-model" className={secondaryButton}>
                仕組みを見る
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--muted-background)] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="fade-section">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-[var(--navy)] sm:text-4xl">
              こんな会社におすすめです
            </h2>
            <div className="mx-auto mt-12 max-w-3xl">
              <CheckList items={targetCompanies} />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="fade-section text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--navy)] sm:text-4xl">
              Re:OneCoachとは
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-[var(--muted-foreground)] sm:text-xl">
              御社が持つ『業界知識・取引先との信頼・営業体制』と
              ルートチームが持つ『研修設計・AI教材・配信基盤』を組み合わせ、
              既存取引先へ御社ブランドでAI研修を提供できる仕組みです。
            </p>
            <div className="mx-auto mt-12 max-w-3xl text-left">
              <CheckList items={aboutPoints} />
            </div>
          </div>
        </div>
      </section>

      <section id="business-model" className="bg-[var(--muted-background)] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="fade-section">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-[var(--navy)] sm:text-4xl">
              役割分担はシンプルです
            </h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              <div className={`${cardClass} bg-[var(--navy)] p-8 text-white`}>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                  御社
                </p>
                <ul className="mt-6 space-y-4 text-lg leading-8">
                  <li>業界知識</li>
                  <li>取引先との信頼</li>
                  <li>案内と営業</li>
                </ul>
              </div>

              <div className="flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(245,166,35,0.3)] bg-white shadow-sm">
                  <ArrowRightLeft className="h-9 w-9 text-[var(--gold)]" />
                </div>
              </div>

              <div className={`${cardClass} bg-[var(--purple)] p-8 text-white`}>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                  ルートチーム
                </p>
                <ul className="mt-6 space-y-4 text-lg leading-8">
                  <li>AI研修コンテンツ</li>
                  <li>配信基盤（OneStream）</li>
                  <li>更新運用と品質管理</li>
                </ul>
              </div>
            </div>
            <p className="mt-8 text-center text-lg font-bold text-[var(--navy)] sm:text-xl">
              初期構築後は、販売価格の20〜30%を御社の収益として確保できます
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="fade-section">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-[var(--navy)] sm:text-4xl">
              導入メリット
            </h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className={`${cardClass} p-8 sm:p-10`}>
                <h3 className="text-2xl font-extrabold text-[var(--navy)]">
                  取引先にとってのメリット
                </h3>
                <div className="mt-8">
                  <CheckList items={partnerBenefits} />
                </div>
              </div>

              <div className={`${cardClass} p-8 sm:p-10`}>
                <h3 className="text-2xl font-extrabold text-[var(--gold)]">
                  御社にとってのメリット
                </h3>
                <div className="mt-8">
                  <CheckList items={companyBenefits} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--muted-background)] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="fade-section">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-[var(--navy)] sm:text-4xl">
              提供の流れ
            </h2>
            <div className="mt-12 flex flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-between">
              {flowSteps.map((step, index) => (
                <div key={step} className="flex flex-1 items-center gap-4 lg:min-w-0">
                  <div className={`${cardClass} flex-1 p-6 text-center`}>
                    <p className="text-sm font-extrabold tracking-[0.18em] text-[var(--gold)]">
                      STEP {index + 1}
                    </p>
                    <p className="mt-4 text-lg font-bold leading-8 text-[var(--navy)]">
                      {step}
                    </p>
                  </div>
                  {index < flowSteps.length - 1 ? (
                    <ChevronRight className="hidden h-6 w-6 shrink-0 text-[var(--gold)] lg:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="fade-section text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--navy)] sm:text-4xl">
              料金
            </h2>
            <div className="mt-12 rounded-[24px] border border-[var(--gold)] bg-[var(--navy)] p-8 text-white shadow-[0_20px_60px_rgba(26,31,75,0.24)] sm:p-12">
              <p className="text-sm font-semibold tracking-[0.24em] text-white/70">
                パートナー契約
              </p>
              <p className="mt-5 text-4xl font-extrabold sm:text-5xl">300万円</p>
              <p className="mt-4 text-base leading-8 text-white/80 sm:text-lg">
                専用サイト構築、基本教材の整備、販売開始準備を含みます
              </p>
            </div>
            <p className="mt-8 text-lg leading-8 text-[var(--muted-foreground)]">
              取引先向け提供価格　個別設計
              <br />
              <span className="text-base sm:text-lg">
                （対象業界、人数、支援範囲に応じて設計します）
              </span>
            </p>
            <p className="mt-8 text-xl font-bold text-[var(--navy)]">
              まずは、御社の取引先にどれだけ相性があるかを無料でご相談ください。
            </p>
            <div className="mt-8">
              <a href={contactHref} className={primaryButton}>
                無料で相談する
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="company" className="bg-[var(--navy)] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="fade-section">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              提供会社
            </h2>
            <p className="mt-8 max-w-4xl text-lg leading-9 text-white/82">
              株式会社ルートチームは、自社SaaS『OneStream』の開発・運営を通じて、1,300社以上への提供実績を持つ実践企業です。Re:OneCoachでは、教材設計から配信基盤、継続運用までを担い、御社が本業を崩さず取引先支援を始められる体制を整えます。
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat}
                  className="rounded-2xl border border-white/12 bg-white/6 px-6 py-8 text-center backdrop-blur-sm"
                >
                  <p className="text-3xl font-extrabold text-[var(--gold)] sm:text-4xl">
                    {stat}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#1A1F4B,#2A3060)] py-20 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
          <div className="fade-section rounded-[28px] border border-white/10 bg-white/6 px-6 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:px-10">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              まずは、相性を確認する
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/78">
              費用はかかりません。御社の取引先構成や商流をもとに、どこに導入余地があるかを一緒に整理します。
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#business-model"
                className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 text-sm font-bold text-[var(--navy)] transition hover:bg-white/90"
              >
                仕組みを見る
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 text-sm font-bold text-[var(--navy)] transition hover:bg-white/90"
              >
                料金を見る
              </a>
              <a
                href={contactHref}
                className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 text-sm font-bold text-[var(--navy)] transition hover:bg-white/90"
              >
                無料で相談する
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--navy)] text-white/70">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
            <div>
              <Logo />
              <p className="mt-3 text-sm text-white/60">株式会社ルートチーム</p>
            </div>
            <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:gap-6">
              <a href="#" className="transition hover:text-white">
                プライバシーポリシー
              </a>
              <a href={contactHref} className="inline-flex items-center gap-2 transition hover:text-white">
                <Mail className="h-4 w-4" />
                お問い合わせ
              </a>
            </div>
          </div>
          <p className="pt-6 text-sm text-white/45">
            © 2026 株式会社ルートチーム All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
