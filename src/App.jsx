import { useEffect, useRef, useState } from 'react'
import copoShot from './assets/images/coposhot.png'
import caixafechada from './assets/images/caixafechada.png'
import pist from './assets/images/pist2.png'
import fundo from './assets/images/fundo.png'
import fundBg from './assets/images/fund.png'
import blackCan from './assets/images/CekZngiy07rr4FTLTw2x1KTx0FM.png'
import copo from './assets/images/copo.png'
import strawCan from './assets/images/HVU8DJI30arjkpyNRnub8DZysdw.png'
import boxPack from './assets/images/GoIeXeiU0JXucLyD8eiegaewLeU.png'
import kiwi from './assets/images/26rDkkEPoHiNSRhg7FvTTrGP7Lg.png'
import orange from './assets/images/7BhBbTDmSRIGr4rrhOeTq533zrs.png'
import lemonSlice from './assets/images/niOj84Yrf0VAZUXpG69CZUWrg.png'
import berries from './assets/images/MswwAB8XnYNDrd9o4g6ZHqC2MLw.png'
import canTilt from './assets/images/yNbUcie2HCyvvKtNFvAyziYjg.png'
import avatarEmma from './assets/images/8rlG4yox0w8UXpoOaYWvFzPZTs.png'
import avatarJames from './assets/images/Yb8nDxvwZAN07pPgqJS26suXipM.jpg'
import gelado from './assets/images/Gelado Sem Fundo.png'
import mmVermelho from './assets/images/M_M vermelho sem fundo.png'
import oupaLogoWhite from './assets/images/oupa/logo_white.png'
import oreo from './assets/images/oreo.png'
import oreos from './assets/images/oreos.png'
import rightImg from './assets/images/right.png'
import leftImg from './assets/images/left.png'
import icon1 from './assets/images/svg/1.png'
import icon2 from './assets/images/svg/2.png'
import icon3 from './assets/images/svg/3.png'
import Navbar from './components/Navbar'

const products = [
  { name: 'Caixa de Gelado', price: '$15', image: caixafechada },
  { name: 'Copo de Gelado', price: '$10', image: copo },
  { name: 'Oupa Shot', price: '$12', image: copoShot },
]

const faq = [
  'What makes Zoooom special?',
  'Is there caffeine in Zoooom?',
  'How much sugar is in Zoooom?',
  'Can kids drink Zoooom?',
  'How should I store Zoooom?',
  'Can I drink Zoooom every day?',
]

const REVIEWS = [
  {
    title: 'Sabe mesmo a caseiro!',
    body: 'A textura é super cremosa e o sabor é intenso — dá para perceber que é feito com ingredientes de verdade. Virou tradição cá em casa ao domingo.',
    name: 'Inês M.',
    meta: 'Porto',
  },
  {
    title: 'A melhor carrinha de gelados',
    body: 'Contratámos para um aniversário e foi um sucesso total. Atendimento impecável, gelados artesanais e toda a gente repetiu (eu incluído).',
    name: 'Rui A.',
    meta: 'Lisboa',
  },
  {
    title: 'Doce, mas no ponto certo',
    body: 'Não é enjoativo, é equilibrado e fresco. O sabor a fruta parece mesmo fruta — nada artificial. Recomendo muito!',
    name: 'Beatriz S.',
    meta: 'Braga',
  },
  {
    title: 'Crocante + cremoso = perfeito',
    body: 'Adorei a mistura de toppings e a base do gelado. Dá para sentir o cuidado artesanal. Já quero provar todos os sabores.',
    name: 'Miguel P.',
    meta: 'Aveiro',
  },
  {
    title: 'Feito com amor (e nota-se)',
    body: 'Levei para um evento de empresa e foi a estrela da festa. Gelados incríveis, equipa simpática e tudo muito bem organizado.',
    name: 'Sofia T.',
    meta: 'Coimbra',
  },
]

export default function App() {
  const aboutZoomImgRef = useRef(null)
  const [reviewIdx, setReviewIdx] = useState(0)

  useEffect(() => {
    const el = aboutZoomImgRef.current
    if (!el) return

    const media = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (media?.matches) return

    let raf = 0

    function clamp(v, min, max) {
      return Math.min(max, Math.max(min, v))
    }

    function update() {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1

      // progress: 0 when the element just enters from the bottom, 1 when it has fully passed upwards
      const progress = clamp((vh - rect.top) / (vh + rect.height), 0, 1)
      const scale = 1 + progress * 0.08 // subtle zoom

      el.style.transform = `translateZ(0) scale(${scale.toFixed(4)})`
    }

    function onScrollOrResize() {
      if (raf) return
      raf = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize)

    return () => {
      if (raf) window.cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
    }
  }, [])

  return (
    <main className="bg-[#4bc7dc] text-stone-900">
      <Navbar />

      <section className="relative overflow-hidden px-4 pb-16 pt-[150px] md:px-6 md:pb-24 md:mt-[-150px]">
        {/* Top-right corner accent (rotated + partially out of frame) */}
        <img
          src={gelado}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 w-[22rem] rotate-[-45deg] opacity-95 md:-right-[30rem] md:-top-[40rem] md:w-[70rem] "
        />

        <div className="mx-auto max-w-6xl">
          <div className="relative flex w-full flex-col items-center justify-center gap-8 pt-[100px]">
            {/* Center-left floating image (absolute on desktop so it doesn't affect centering) */}
            <img
              src={oreo}
              alt="oreo"
              className="w-44 animate-float-slow select-none md:hidden"
              draggable="false"
            />
            <img
              src={oreo}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-[-5rem] mt-[-130px] hidden w-[300px]  animate-float-slow select-none md:block"
              draggable="false"
            />

            <div className="mx-auto text-center">
              {/* Main logo replaces H1 */}
              <h1
                className="font-display text-[220px] uppercase text-white leading-none"
              > OUPAAAAA</h1>

              {/* Paragraph under logo (Londrina) */}
              <p className="mt-12 font-display text-xl  uppercase text-stone-900 md:text-[60px] text-[#ff4035]">
               Vai um gelado?
              </p>

              {/* Button row + floating image to the right */}
              <div className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row sm:justify-center pt-16">
                <button className="rounded-full border-2 border-white bg-yellow-300 px-8 py-3 font-display text-[30px] font-[300] uppercase text-white shadow-[3px_3px_0_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#000000]">
                  Saber Mais
                </button>

             
              </div>
      
            <img
              src={mmVermelho}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-[-12rem] top-1/2 hidden w-[600px] animate-float-slow select-none md:block"
              draggable="true"
            />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#ff6700] px-16 py-24 text-cream md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-5xl uppercase md:text-[100px]"> Produtos <span className="text-lime-300">Populares</span></h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.map((item) => (
              <article
                key={item.name}
                className="rounded-[2rem] border-2 border-black bg-center bg-cover bg-no-repeat p-5 text-stone-900"
                style={{ backgroundImage: `url(${fundBg})` }}
              >
                <img src={item.image} alt={item.name} className="mx-auto h-72 object-contain" />
                <h3 className="mt-4 font-display text-3xl uppercase text-white text-center">{item.name}</h3>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="view-all">VIEW ALL PRODUCTS</button>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-16 md:px-6 bg-[#ff6700]">
        <div className="mx-auto max-w-6xl">
          <h3 className="font-display text-6xl uppercase md:text-[68px] text-center text-white">a <span className="text-yellow-200">oupa</span> é uma marca de gelados artesanais que te vai fazer comer e chorar por mais.</h3>
          <div className="relative mt-10 flex items-center justify-center">
            {/* Left floating image (on top) */}
            <img
              src={pist}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-[-5rem] mt-[-180px] w-40 animate-float-slow select-none z-[2] md:w-[450px]"
              draggable="false"
            />

            {/* Big centered image (no background) */}
            <img
              src={fundo}
              alt="Cans"
              ref={aboutZoomImgRef}
              className="relative z-[3] w-[140vw] max-w-none origin-center select-none md:w-[2600px] will-change-transform"
              draggable="false"
            />

            {/* Right floating image (behind) */}
            <img
              src={mmVermelho}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-[-6rem] top-1/2 w-48 -translate-y-1/2 animate-float-slow select-none z-[2] md:right-[-2rem] md:w-80"
              draggable="false"
            />
          </div>
        </div>
        <h3 className="font-display text-6xl uppercase md:text-[68px] text-center text-white">a <span className="text-yellow-200">oupa</span> é uma marca de gelados artesanais que te vai fazer comer e chorar por mais.</h3>
        <div className="mt-8 text-center">
            <button className="view-all">saber mais</button>
          </div>
      </section>

      <section id="how" className="bg-lime-300 px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-5xl uppercase md:text-7xl">The incredible benefits of our kombucha</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {['Improved Digestion', 'Immunity', 'Boosting', 'Natural Source', 'of Probiotics'].map((b) => (
              <div key={b} className="rounded-3xl border-2 border-stone-900 bg-cream p-4 text-center text-xl font-black uppercase">{b}</div>
            ))}
          </div>
          <div className="mt-12 grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-4xl uppercase">Only natural ingredients</h3>
              <p className="mt-3">Our kombucha has a simple and healthy ingredients: Organic tea.</p>
              <p className="mt-3 text-sm font-semibold uppercase">Please note! Sugar added to the drink undergoes a fermentation process and is completely absorbed by healthy bacteria.</p>
            </div>
            <div className="relative mx-auto h-80 w-full max-w-md">
              <img src={kiwi} alt="Kiwi" className="absolute left-0 top-12 w-28" />
              <img src={berries} alt="Berries" className="absolute right-0 top-0 w-36" />
              <img src={orange} alt="Orange" className="absolute bottom-8 left-12 w-40" />
              <img src={lemonSlice} alt="Lemon" className="absolute bottom-0 right-12 w-24" />
            </div>
          </div>
        </div>
    
      </section>

      <section className="bg-pink-300  py-16 text-cream px-24">
        <div className="mx-auto ">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
            {/* Left (60%) */}
            <div className="w-full md:w-3/5">
              <h2 className="font-display text-5xl uppercase md:text-[100px] text-black">
                Conheça a nossa <span className="text-lime-300">Oupa</span> truck!
              </h2>

              <div className=" flex flex-col gap-6 md:flex-row md:items-start">
                {/* Left inner: image */}
                <div className="md:w-1/2">
                  <img
                    src={leftImg}
                    alt=""
                    aria-hidden="true"
                    className="w-full max-w-none select-none mt-[-100px] ml-[-40px]"
                    draggable="false"
                  />
                </div>

                {/* Right inner: text + icon boxes */}
                <div className="md:w-1/2">
                  <p className="font-display text-xl font-[300] uppercase md:text-3xl mt-[100px] text-black">
Podemos estar presentes na sua festa! Vamos tornar todos os momentos mais doces, sem muita letra!                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    {[
                      { label: 'Casamentos e Eventos', iconSrc: icon1 },
                      { label: 'Festas Corporativas', iconSrc: icon2 },
                      { label: 'Festas Populares', iconSrc: icon3 },
                    ].map((f) => (
                      <div
                        key={f.label}
                        className=" p-3 text-center text-black"
                      >
                        <div className="mx-auto flex h-30 w-30 items-center justify-center text-black">
                          <img
                            src={f.iconSrc}
                            alt=""
                            aria-hidden="true"
                            className="h-30 w-30 select-none object-contain"
                            draggable="false"
                          />
                        </div>
                        <div className="mt-2 font-display text-sm font-[300] uppercase leading-tight text-black">
                          {f.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right (40%) */}
            <div className="w-full md:w-2/5">
              <img
                src={rightImg}
                alt=""
                aria-hidden="true"
                className="mx-auto w-full max-w-none select-none mr-[-100px]"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="px-4 pb-16 md:px-6 bg-[#ff4035]">
        <div className="mx-auto max-w-6xl text-center">
          <div>
          <h2 className="font-display text-5xl uppercase md:text-6xl text-white pt-16">O que dizem</h2>
          <h2 className="font-display text-5xl uppercase md:text-[100px] text-white pb-16"> sobre a <span className="text-[#4bc7dc]">oupaaaaa</span></h2>
          </div>
          <div className="relative mx-auto mt-8 w-full max-w-4xl">
            <div className="overflow-hidden">
              <div
                className="flex items-stretch transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${reviewIdx * 50}%)` }}
              >
                {[...REVIEWS, REVIEWS[0]].map((r, idx) => {
                  const realIdx = idx % REVIEWS.length
                  const avatarSrc = realIdx === 0 ? avatarEmma : realIdx === 1 ? avatarJames : null
                  const initials = r.name
                    .replace('.', '')
                    .split(' ')
                    .filter(Boolean)
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join('')

                  return (
                    <div key={`${r.name}-${r.title}-${idx}`} className="flex w-1/2 shrink-0 px-2">
                      <article className="flex h-full w-full min-h-[320px] flex-col rounded-3xl border-2 border-stone-900 bg-cream p-6 text-left shadow-[4px_4px_0_#000000] md:p-8">
                        <p className="font-display text-3xl uppercase">{r.title}</p>
                        <p className="mt-3 flex-1 text-base md:text-lg">{r.body}</p>
                        <div className="mt-6 flex items-center gap-4">
                          {avatarSrc ? (
                            <img
                              src={avatarSrc}
                              alt={r.name}
                              className="h-14 w-14 rounded-full border-2 border-stone-900 object-cover md:h-16 md:w-16"
                            />
                          ) : (
                            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-stone-900 bg-[#4bc7dc] font-display text-xl uppercase text-stone-900 md:h-16 md:w-16">
                              {initials}
                            </div>
                          )}
                          <div>
                            <p className="font-bold">{r.name}</p>
                            <p className="text-sm uppercase">{r.meta}</p>
                          </div>
                        </div>
                      </article>
                    </div>
                  )
                })}
              </div>
            </div>

            <button
              type="button"
              aria-label="Review anterior"
              className="absolute left-0 top-1/2 z-10 grid h-12 w-12 -translate-x-[50px] -translate-y-1/2 place-items-center rounded-full border-2 border-stone-900 bg-[#4bc7dc] text-stone-900 shadow-[3px_3px_0_#000000] active:translate-y-[calc(-50%+2px)] active:shadow-[1px_1px_0_#000000]"
              onClick={() => setReviewIdx((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path d="M14.5 5 8 12l6.5 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Próximo review"
              className="absolute right-0 top-1/2 z-10 grid h-12 w-12 translate-x-[50px] -translate-y-1/2 place-items-center rounded-full border-2 border-stone-900 bg-[#4bc7dc] text-stone-900 shadow-[3px_3px_0_#000000] active:translate-y-[calc(-50%+2px)] active:shadow-[1px_1px_0_#000000]"
              onClick={() => setReviewIdx((i) => (i + 1) % REVIEWS.length)}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path d="M9.5 5 16 12l-6.5 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="mt-4 font-display text-sm uppercase text-white">
              {reviewIdx + 1}-{reviewIdx + 2 > REVIEWS.length ? 1 : reviewIdx + 2} / {REVIEWS.length}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-indigo-800 px-4 py-16 text-cream md:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <article className="rounded-3xl border-2 border-cream p-6">
            <h3 className="font-display text-4xl uppercase">In stores</h3>
            <p className="mt-3">Find Zoooom at selected organic shops, cafes, and supermarkets near you.</p>
          </article>
          <article className="rounded-3xl border-2 border-cream p-6">
            <h3 className="font-display text-4xl uppercase">Order online</h3>
            <p className="mt-3">Shop our full range and enjoy fresh kombucha whenever you want.</p>
            <button className="mt-4 rounded-full bg-lime-300 px-5 py-2 text-sm font-bold text-stone-900">Order Now</button>
          </article>
        </div>
      </section>

      <section id="faq" className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-5xl uppercase md:text-6xl">You ask, we answer!</h2>
          <div className="mt-8 space-y-4">
            {faq.map((q, idx) => (
              <details key={q} className="rounded-2xl border-2 border-stone-900 bg-cream p-4" open={idx === 2}>
                <summary className="cursor-pointer list-none font-bold uppercase">{q}</summary>
                {idx === 2 && (
                  <p className="mt-3 text-sm">Most of the sugar added during brewing is consumed by healthy bacteria in the fermentation process. The final product has just a touch of natural sweetness.</p>
                )}
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-indigo-700 px-4 py-16 text-cream md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-5xl uppercase">Try zoooom</h2>
          <p className="mt-2 text-2xl uppercase">Sign up now and get a bonus: <span className="text-lime-300">10% off</span> your next order!</p>
          <form className="mx-auto mt-8 grid max-w-2xl gap-3 md:grid-cols-3">
            <input className="rounded-full border-2 border-stone-900 px-4 py-3 text-stone-900" placeholder="Jane Doe" />
            <input className="rounded-full border-2 border-stone-900 px-4 py-3 text-stone-900" placeholder="Your Phone" />
            <input className="rounded-full border-2 border-stone-900 px-4 py-3 text-stone-900" placeholder="Your Email" />
            <button className="rounded-full bg-lime-300 px-6 py-3 font-black uppercase text-stone-900 md:col-span-3">Sign up now</button>
          </form>
        </div>
      </section>

      <footer className="border-t-2 border-stone-900 bg-pink-300 px-4 py-10 md:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 md:flex-row">
          <a href="#" className="font-display text-4xl">zoooom</a>
          <div className="flex flex-wrap justify-center gap-4 text-xs font-bold uppercase">
            <a href="#about">ABOUT</a>
            <a href="#how">HOW IT WORKS</a>
            <a href="#products">PRODUCTS</a>
            <a href="#reviews">REVIEWS</a>
            <a href="#faq">FAQ</a>
          </div>
          <p className="text-xs">By Roman&apos;s design</p>
        </div>
      </footer>
    </main>
  )
}
