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
  { href: "#business-model", label: "ビジネスモデル" },
  { href: "#pricing", label: "料金" },
  { href: "#company", label: "提供会社" },
];

const targetCompanies = [
  "業界内に長年の取引実績と信頼関係を築いてきた",
  "取引先から「AIってどうすればいいの？」と相談されている",
  "既存の取引関係をさらに深めたい",
  "新しい収益の柱を作りたいが、コンテンツ開発の余力がない",
];

const aboutPoints = [
  "コンテンツを一から作る必要はありません",
  "基本コンテンツはルートチームが用意",
  "業界特化コンテンツは御社と共同制作",
  "御社ブランドの専用サイトをOneStreamで構築",
];

const partnerBenefits = [
  "自分たちの業務に特化した内容",
  "長年の取引先である御社から提供される安心感",
  "人材開発支援助成金で実質負担を最大75%削減",
  "動画視聴から実践支援まで段階的に学べる",
];

const companyBenefits = [
  "取引先との関係が経営支援へ深化",
  "他社にはない付加価値の提供",
  "月額課金によるストック型の新収益",
  "本業との相乗効果",
];

const flowSteps = [
  "ヒアリング",
  "御社への導入",
  "業界特化コンテンツ共同制作",
  "取引先への展開",
  "継続改善",
];

const stats = ["1,300社以上", "J-StarX選出", "マージン20〜30%"];

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
            <a href="#" className={secondaryButton}>
              資料ダウンロード
            </a>
            <a href="#" className={primaryButton}>
              デモを見る
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
                <a href="#" className={secondaryButton} onClick={() => setMenuOpen(false)}>
                  資料ダウンロード
                </a>
                <a href="#" className={primaryButton} onClick={() => setMenuOpen(false)}>
                  デモを見る
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
              <span>OneCoach パートナープログラム</span>
            </div>
            <h1 className="whitespace-pre-line text-[2.5rem] leading-[1.2] font-extrabold tracking-tight text-[var(--navy)] sm:text-[3.5rem]">
              {"取引先の経営課題を、\nいちばん最初に解決できるのは\n誰ですか。"}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted-foreground)]">
              長年の信頼関係と業界知識を持つ御社だからこそ、
              AI教育という新しい価値を届けられる。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#" className={primaryButton}>
                資料ダウンロード
              </a>
              <a href="#" className={secondaryButton}>
                デモを見る
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--muted-background)] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="fade-section">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-[var(--navy)] sm:text-4xl">
              こんな会社に向けています
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
              ルートチームが持つ『AI教育コンテンツ・配信基盤』を掛け合わせ、
              御社ブランドで取引先にAI教育を提供できる仕組みです。
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
              ビジネスモデル
            </h2>
            <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
              <div className={`${cardClass} bg-[var(--navy)] p-8 text-white`}>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                  御社
                </p>
                <ul className="mt-6 space-y-4 text-lg leading-8">
                  <li>業界知識</li>
                  <li>取引先との信頼</li>
                  <li>営業体制</li>
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
                  <li>AI教育コンテンツ</li>
                  <li>配信基盤（OneStream）</li>
                  <li>コンテンツ更新・品質管理</li>
                </ul>
              </div>
            </div>
            <p className="mt-8 text-center text-lg font-bold text-[var(--navy)] sm:text-xl">
              販売価格の20〜30%が御社のマージンとなります
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
          <div className="fade-section">
            <h2 className="text-center text-3xl font-extrabold tracking-tight text-[var(--navy)] sm:text-4xl">
              2つのメリット
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
                コンテンツ制作・専用サイト構築・研修設計含む
              </p>
            </div>
            <p className="mt-8 text-lg leading-8 text-[var(--muted-foreground)]">
              取引先向けパッケージ料金　ASK
              <br />
              <span className="text-base sm:text-lg">
                （取引先の規模・業界・提供範囲により個別設計）
              </span>
            </p>
            <p className="mt-8 text-xl font-bold text-[var(--navy)]">
              まずは無料相談からはじめます。
            </p>
            <div className="mt-8">
              <a href={contactHref} className={primaryButton}>
                パートナー契約の相談
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
              株式会社ルートチームは、AIを活用して自社SaaS『OneStream』を開発・運営し、1,300社以上に届けてきた実践企業です。代表・澤居宏紀は2025年に500 GlobalとJETROによるシリコンバレー長期滞在プログラム『J-StarX』に選出。Re:OneCoachは、御社と共に業界のAI活用を牽引するパートナーシップです。
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
              まず、話を聞いてみる
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/78">
              費用はかかりません。御社の取引先リストを一緒に見てみましょう。
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 text-sm font-bold text-[var(--navy)] transition hover:bg-white/90"
              >
                資料ダウンロード
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 text-sm font-bold text-[var(--navy)] transition hover:bg-white/90"
              >
                デモを見る
              </a>
              <a
                href={contactHref}
                className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 text-sm font-bold text-[var(--navy)] transition hover:bg-white/90"
              >
                パートナー契約の相談
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
