import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import L from 'leaflet'

// Fix for default marker icons in React Leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

// Lazy load the map component to avoid StrictMode double initialization issues
const LocationMap = lazy(() => import('./components/LocationMap'))
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
import avatarMagg from './assets/images/magg_agency_logo.jpeg'
import avatarJames from './assets/images/Yb8nDxvwZAN07pPgqJS26suXipM.jpg'
import gelado from './assets/images/Gelado Sem Fundo.png'
import mmVermelho from './assets/images/M_M vermelho sem fundo.png'
import oupaLogoWhite from './assets/images/oupa/logo_white.png'
import logoBlack from './assets/images/oupa/logo-black.png'
import logoRed from './assets/images/oupa/logo_red.png'
import logoOrange from './assets/images/oupa/logo_orange.png'

import oreo from './assets/images/oreo.png'
import kinder from './assets/images/kinder.png'
import oreos from './assets/images/oreos.png'
import rightImg from './assets/images/right.png'
import leftImg from './assets/images/left.png'
import icon1 from './assets/images/svg/1.png'
import icon2 from './assets/images/svg/2.png'
import icon3 from './assets/images/svg/3.png'
import cafecaixa from './assets/images/cafedesign.png'
import cafe from './assets/images/cafe.png'
import cafeg from './assets/images/cafegrao.png'
import mms from './assets/images/M_Ms sem fundo.png'
import biscoff from './assets/images/biscoff.png'
import brigadeiro from './assets/images/brigadeiro.png'
import ferrero from './assets/images/ferrero.png'
import Navbar from './components/Navbar'

const products = [
  { name: 'Caixa de Gelado', price: '$15', image: caixafechada },
  { name: 'Copo de Gelado', price: '$10', image: copo },
  { name: 'Oupa Shot', price: '$12', image: copoShot },
]

const faq = [
  {
    question: 'O que torna os gelados Oupa especiais?',
    answer: 'Todos os nossos gelados são 100% artesanais e caseiros, feitos com ingredientes de qualidade e muito carinho. Não usamos conservantes artificiais e cada sabor é cuidadosamente desenvolvido para garantir a melhor experiência possível.'
  },
  {
    question: 'Como posso encomendar gelados Oupa?',
    answer: 'Podes encomendar diretamente para consumo privado ou contactar-nos para estabelecer uma parceria se fores um restaurante. Também podes contratar a nossa carrinha para eventos especiais!'
  },
  {
    question: 'Fazem eventos com a carrinha?',
    answer: 'Sim! A nossa carrinha Oupa está disponível para eventos privados, festas, casamentos, eventos corporativos e festas populares. Contacta-nos para mais informações sobre disponibilidade e preços.'
  },
  {
    question: 'Trabalham com restaurantes?',
    answer: 'Sim, estabelecemos parcerias com restaurantes que queiram oferecer os nossos gelados artesanais aos seus clientes. Se tens um restaurante e estás interessado, entra em contacto connosco!'
  },
  {
    question: 'Como devo conservar os gelados?',
    answer: 'Os nossos gelados devem ser mantidos no congelador a -18°C. Para melhor qualidade, recomendamos consumir dentro de 3 meses após a compra. Nunca recongeles gelados que já tenham sido descongelados.'
  },
  {
    question: 'Os gelados são adequados para crianças?',
    answer: 'Sim! Os nossos gelados são feitos com ingredientes naturais e são adequados para toda a família, incluindo crianças. No entanto, alguns sabores podem conter alergénios - consulta sempre os ingredientes antes de consumir.'
  },
]

const FLAVOURS = [
  { name: 'Café', image: cafeg },
  { name: 'Oreo', image: oreo },
  { name: "MM's", image: mms },
  { name: 'Kinder', image: kinder },
  { name: 'Pistachio', image: pist },
  { name: 'Biscoff', image: biscoff },
  { name: 'Brigadeiro', image: brigadeiro },
  { name: 'Ferrero', image: ferrero },
]

const REVIEWS = [
  {
    title: 'Vai de uma casa para outra!',
    body: 'Oupa. A nova marca de gelados que vai de uma casa para outra e tem um toque nortenho',
    name: 'Revista MAGG',
    meta: 'Portugal',
  },
  {
    title: 'A melhor carrinha de gelados',
    body: 'Contratámos para um aniversário e foi um sucesso total. Atendimento impecável, gelados artesanais e toda a gente repetiu (eu incluído).',
    name: 'Rui A.',
    meta: 'Porto',
  },
  {
    title: 'Doce, mas no ponto certo',
    body: 'Não é enjoativo, é equilibrado e fresco. O sabor a fruta parece mesmo fruta — nada artificial. Recomendo muito!',
    name: 'Beatriz S.',
    meta: 'Santa Maria da Feira',
  },
  {
    title: 'Crocante + cremoso = perfeito',
    body: 'Adorei a mistura de toppings e a base do gelado. Dá para sentir o cuidado artesanal. Já quero provar todos os sabores.',
    name: 'Miguel P.',
    meta: 'Espinho',
  },
  {
    title: 'Feito com amor (e nota-se)',
    body: 'Levei para um evento de empresa e foi a estrela da festa. Gelados incríveis, equipa simpática e tudo muito bem organizado.',
    name: 'Sofia T.',
    meta: 'S.J. da Madeira',
  },
]

export default function App() {
  const aboutZoomImgRef = useRef(null)
  const [reviewIdx, setReviewIdx] = useState(0)
  const [flavourIdx, setFlavourIdx] = useState(0)
  const [modal, setModal] = useState(null)
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  )

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

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

      <section className="relative overflow-hidden px-[30px] pb-16 pt-[150px] md:px-6 md:pb-24 md:mt-[-150px]">
        {/* Top-right corner accent (rotated + partially out of frame) */}
        <img
          src={gelado}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-[-250px] w-[36rem] rotate-[-45deg] opacity-95 md:-right-[30rem] md:-top-[40rem] md:w-[70rem]"
        />

        <div className="mx-auto max-w-6xl">
          <div className="relative flex w-full flex-col items-center justify-center gap-8 pt-6 md:pt-[100px]">
            {/* Center-left floating image (absolute on desktop so it doesn't affect centering) */}
            <img
              src={oreo}
              alt="oreo"
              className="absolute -left-10 top-0 w-36 animate-float-slow select-none md:hidden"
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
                className="font-display text-[160px] md:text-[220px] uppercase text-white leading-none"
              > OUPA<br/>AAAA</h1>

              {/* Paragraph under logo (Londrina) */}
              <p className="mt-6 font-display text-3xl uppercase text-stone-900 md:mt-12 md:text-[60px] md:leading-tight text-[#ff4035]">
               Vai um gelado?
              </p>

              {/* Button row + floating image to the right */}
              <div className="mt-8 md:mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row sm:justify-center pt-8 md:pt-16">
                <a href="#locations" className="rounded-full border-2 border-white bg-yellow-300 px-6 py-2 md:px-8 md:py-3 font-display text-xl md:text-[30px] font-[300] uppercase text-white shadow-[3px_3px_0_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#000000]">
                  Saber Mais
                </a>

             
              </div>
      
            <img
              src={mmVermelho}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-[-4rem] bottom-[6rem] w-[180px] animate-float-slow select-none md:right-[-12rem] md:bottom-auto md:top-1/2 md:w-[600px]"
              draggable="false"
            />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#ff6700] px-[30px] py-16 text-cream md:px-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-4xl uppercase md:text-[100px] md:leading-tight"> Produtos <span className="text-lime-300">Populares</span></h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.map((item) => (
              <article
                key={item.name}
                className="rounded-[2rem] border-2 border-black bg-center bg-cover bg-no-repeat p-5 text-stone-900"
                style={{ backgroundImage: `url(${fundBg})` }}
              >
                <img src={item.image} alt={item.name} className="mx-auto h-72 md:h-96 object-contain scale-110 md:scale-125" />
                <h3 className="mt-4 font-display text-3xl uppercase text-white text-center">{item.name}</h3>
              </article>
            ))}
          </div>
       
        </div>
      </section>

      <section id="about" className="px-[30px] py-16 md:px-6 bg-[#ff6700]">
        <div className="mx-auto max-w-6xl">
          <h3 className="font-display text-3xl uppercase md:text-[68px] md:leading-tight text-center text-white">a <span className="text-yellow-200">oupa</span> é uma marca de gelados artesanais que te vai fazer comer e chorar por mais.</h3>
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
        <h3 className="font-display text-3xl uppercase md:text-[68px] md:leading-tight text-center text-white"> Mais vale um gelado da <span className="text-yellow-200">oupa</span> na mão do que dois no congelador.</h3>
        <div className="mt-8 text-center">
            <a href="#locations" className="view-all">saber mais</a>
          </div>
      </section>

      <section id="how" className="bg-[#f6ede4] py-16 md:py-32 overflow-hidden relative min-h-[600px] md:min-h-[800px]">
        <div className="mx-auto px-[30px] md:pl-[150px]">
          <div className="flex flex-col md:flex-row">
            {/* Left section - 70% */}
            <div className="w-full md:w-[70%]">
              <h2 className="font-display text-4xl uppercase md:text-7xl">Os nossos<span className="text-[#ff4035]"> sabores</span></h2>
              <p className="mt-4 text-base md:text-xl">Gelados sem trocas nem baldrocas. 100% artesanais, com produção própria e um segredo especial.</p>
              
              <div className="relative mt-8 w-full">
                <div className="overflow-hidden">
                  <div
                    className="flex items-stretch transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${flavourIdx * (isMobile ? 50 : 100 / 3)}%)` }}
                  >
                    {FLAVOURS.map((flavour) => (
                      <div
                        key={flavour.name}
                        className="w-1/2 md:w-1/3 shrink-0 px-2"
                      >
                        <div className="h-40 w-full md:h-60 rounded-3xl border-2 border-black p-4 md:p-8 flex flex-col bg-yellow-300">
                          <img
                            src={flavour.image}
                            alt={flavour.name}
                            className="h-20 md:h-40 w-full object-contain"
                          />
                          <p className="mt-auto text-center font-display text-base md:text-2xl font-bold uppercase">{flavour.name}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Sabor anterior"
                  className="absolute left-0 top-1/2 z-10 grid h-10 w-10 md:h-12 md:w-12 -translate-x-2 md:-translate-x-5 -translate-y-1/2 place-items-center rounded-full border-2 border-stone-900 bg-[#ff4035] text-white shadow-[3px_3px_0_#000000] active:translate-y-[calc(-50%+2px)] active:shadow-[1px_1px_0_#000000]"
                  onClick={() => setFlavourIdx((i) => (i - 1 + FLAVOURS.length) % FLAVOURS.length)}
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                    <path d="M14.5 5 8 12l6.5 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label="Próximo sabor"
                  className="absolute right-0 top-1/2 z-10 grid h-10 w-10 md:h-12 md:w-12 translate-x-2 md:translate-x-5 -translate-y-1/2 place-items-center rounded-full border-2 border-stone-900 bg-[#ff4035] text-white shadow-[3px_3px_0_#000000] active:translate-y-[calc(-50%+2px)] active:shadow-[1px_1px_0_#000000]"
                  onClick={() => setFlavourIdx((i) => (i + 1) % FLAVOURS.length)}
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                    <path d="M9.5 5 16 12l-6.5 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div className="mt-4 font-display text-sm uppercase text-stone-900 text-center">
                  {flavourIdx + 1} / {FLAVOURS.length}
                </div>
              </div>
            </div>
            
            {/* Right section - 30% with image */}
            <div className="w-full md:w-[100%] mt-8 md:mt-0 relative mr-[-60px]">
              <img
                src={cafecaixa}
                alt=""
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto object-contain max-h-[900px]"
              />
              <img
                src={cafecaixa}
                alt=""
                className="block md:hidden w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pink-300 py-16 text-cream px-[30px] md:px-24">
        <div className="mx-auto ">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
            {/* Left (60%) */}
            <div className="w-full md:w-3/5">
              <h2 className="font-display text-4xl uppercase md:text-[100px] md:leading-tight text-black">
                Conheça a nossa <span className="text-lime-300">Oupa</span> truck!
              </h2>

              <div className=" flex flex-col gap-6 md:flex-row md:items-start">
                {/* Left inner: image */}
                <div className="md:w-1/2">
                  <img
                    src={leftImg}
                    alt=""
                    aria-hidden="true"
                    className="w-full max-w-none select-none md:mt-[-100px] md:ml-[-40px]"
                    draggable="false"
                  />
                </div>

                {/* Right inner: text + icon boxes */}
                <div className="md:w-1/2">
                  <p className="font-display text-base font-[300] uppercase md:text-3xl mt-8 md:mt-[100px] text-black">
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
                className="mx-auto w-full max-w-none select-none md:mr-[-100px]"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="px-[30px] pb-16 md:px-6 bg-[#ff4035]">
        <div className="mx-auto max-w-6xl text-center">
          <div>
          <h2 className="font-display text-3xl uppercase md:text-6xl md:leading-tight text-white pt-16">O que dizem</h2>
          <h2 className="font-display text-4xl uppercase md:text-[100px] md:leading-tight text-white pb-8 md:pb-16"> sobre a <span className="text-[#4bc7dc]">oupaaaaa</span></h2>
          </div>
          <div className="relative mx-auto mt-8 w-full max-w-4xl">
            <div className="overflow-hidden">
              <div
                className="flex items-stretch transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${reviewIdx * (isMobile ? 100 : 50)}%)` }}
              >
                {[...REVIEWS, REVIEWS[0]].map((r, idx) => {
                  const realIdx = idx % REVIEWS.length
                  const avatarSrc = realIdx === 0 ? avatarMagg : realIdx === 1 ? avatarJames : null
                  const initials = r.name
                    .replace('.', '')
                    .split(' ')
                    .filter(Boolean)
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join('')

                  return (
                    <div key={`${r.name}-${r.title}-${idx}`} className="flex w-full md:w-1/2 shrink-0 px-2">
                      <article className="flex h-full w-full min-h-[280px] md:min-h-[320px] flex-col rounded-3xl border-2 border-stone-900 bg-cream p-6 text-left shadow-[4px_4px_0_#000000] md:p-8">
                        <p className="font-display text-2xl md:text-3xl uppercase">{r.title}</p>
                        <p className="mt-3 flex-1 text-sm md:text-lg">{r.body}</p>
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
              className="absolute left-0 top-1/2 z-10 grid h-10 w-10 md:h-12 md:w-12 -translate-x-2 md:-translate-x-[50px] -translate-y-1/2 place-items-center rounded-full border-2 border-stone-900 bg-[#4bc7dc] text-stone-900 shadow-[3px_3px_0_#000000] active:translate-y-[calc(-50%+2px)] active:shadow-[1px_1px_0_#000000]"
              onClick={() => setReviewIdx((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path d="M14.5 5 8 12l6.5 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Próximo review"
              className="absolute right-0 top-1/2 z-10 grid h-10 w-10 md:h-12 md:w-12 translate-x-2 md:translate-x-[50px] -translate-y-1/2 place-items-center rounded-full border-2 border-stone-900 bg-[#4bc7dc] text-stone-900 shadow-[3px_3px_0_#000000] active:translate-y-[calc(-50%+2px)] active:shadow-[1px_1px_0_#000000]"
              onClick={() => setReviewIdx((i) => (i + 1) % REVIEWS.length)}
            >
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                <path d="M9.5 5 16 12l-6.5 7" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="mt-4 font-display text-sm uppercase text-white">
              {isMobile
                ? `${reviewIdx + 1} / ${REVIEWS.length}`
                : `${reviewIdx + 1}-${reviewIdx + 2 > REVIEWS.length ? 1 : reviewIdx + 2} / ${REVIEWS.length}`}
            </div>
          </div>
        </div>
      </section>

      <section id="partnerships" className="relative overflow-hidden bg-[#ff6700] px-[30px] py-16 md:px-6 md:py-32">
        {/* Floating decorative elements */}
        <img
          src={oreo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[-3rem] top-20 hidden w-[200px] animate-float-slow select-none md:block"
          draggable="false"
        />
        <img
          src={mmVermelho}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-2rem] top-1/2 -translate-y-1/2 hidden w-[200px] animate-float-slow select-none md:block"
          draggable="false"
        />
        <img
          src={cafeg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/4 bottom-10 hidden w-28 animate-float-slow select-none md:block w-[200px]"
          draggable="false"
        />
          <img
          src={biscoff}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/8 bottom-10 hidden animate-float-slow select-none md:block w-[300px]"
          draggable="false"
        />

        <div className="mx-auto max-w-6xl relative z-10">
          <h2 className="font-display text-4xl uppercase md:text-[100px] md:leading-tight text-center text-white mb-4">
            Parcerias com <span className="text-yellow-300">Restaurantes</span>
          </h2>
          <p className="font-display text-base md:text-2xl text-center text-white mb-8 md:mb-12 max-w-4xl mx-auto">
            Junta-te à família Oupa e oferece aos teus clientes gelados artesanais de qualidade
          </p>

          <div className="grid gap-6 md:grid-cols-2 mt-16">
            {/* Left Card */}
            <article className="rounded-3xl border-2 border-stone-900 bg-yellow-300 p-8 shadow-[4px_4px_0_#000000]">
              <h3 className="font-display text-2xl uppercase md:text-5xl md:leading-tight text-stone-900 mb-4">
                Preços Atrativos
              </h3>
              <p className="font-display text-base md:text-xl text-stone-900 mb-6">
                Oferecemos condições especiais para restaurantes parceiros. Preços competitivos que te permitem ter uma excelente margem de lucro enquanto ofereces qualidade premium aos teus clientes.
              </p>
              <p className="font-display text-base md:text-xl text-stone-900">
                Todos os restaurantes que trabalham connosco reportam uma sensação de vendas positiva e clientes satisfeitos que voltam para mais.
              </p>
            </article>

            {/* Right Card */}
            <article className="rounded-3xl border-2 border-stone-900 bg-white p-8 shadow-[4px_4px_0_#000000]">
              <h3 className="font-display text-2xl uppercase md:text-5xl md:leading-tight text-stone-900 mb-4">
                Vantagens da Parceria
              </h3>
              <ul className="space-y-4 font-display text-base md:text-xl text-stone-900">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 font-black">•</span>
                  <span>Gelados 100% artesanais e de qualidade premium</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 font-black">•</span>
                  <span>Preços atrativos com excelente margem de lucro</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 font-black">•</span>
                  <span>Diferenciação no teu restaurante com produtos únicos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-300 font-black">•</span>
                  <span>Aumento de satisfação e fidelização dos clientes</span>
                </li>
              </ul>
              <button className="mt-8 rounded-full border-2 border-stone-900 bg-lime-300 px-8 py-4 font-display text-xl font-black uppercase text-stone-900 shadow-[3px_3px_0_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#000000]">
                Quero ser Parceiro
              </button>
            </article>
          </div>
        </div>
      </section>

      <section id="faq" className="px-[30px] py-16 md:px-6 bg-pink-300">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-[100px] md:leading-tight uppercase text-center">Vocês perguntam<br/> <span className="text-white bg-black px-4 py-2 rounded-3xl">Nós respondemos</span></h2>
          <div className="mt-8 space-y-4 flex flex-col items-center justify-center ">
            {faq.map((item, idx) => (
              <details key={item.question} className="rounded-[30px] md:rounded-[60px] border-2 border-stone-900 bg-cream p-4 md:p-6 w-full md:w-[800px] text-center nb-navbar__link text-base md:text-2xl" open={idx === 2}>
                <summary className="cursor-pointer list-none uppercase">{item.question}</summary>
                <p className="mt-3 text-sm md:text-lg">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="bg-[#662d91] px-[30px] py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl uppercase md:text-[100px] md:leading-tight text-center text-white mb-8">
            Onde nos <span className="text-yellow-300">encontrar</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-5">
            {/* Map - 40% width */}
            <div className="flex flex-col md:flex-col gap-5 w-full md:w-[50%] ">

            <h2 className="font-display text-lg uppercase md:text-[40px] md:leading-tight text-center text-white">
            <span className="text-yellow-300">Em Restaurantes</span>
          </h2>
            <div className="relative z-0 rounded-3xl border-2 border-stone-900 shadow-[3px_3px_0_#000000] overflow-hidden bg-white">
              <Suspense fallback={<div style={{ height: '500px', width: '100%', backgroundColor: '#f0f0f0' }} />}>
                <LocationMap />
              </Suspense>
            </div>
            </div>
            
            {/* Text and Button Box - 60% width */}
            <div className="flex flex-col md:flex-col gap-5 w-full md:w-[50%] ">

            <h2 className="font-display text-lg uppercase md:text-[40px] md:leading-tight text-center text-white">
            <span className="text-yellow-300">Em Sua casa</span>
          </h2>
            <div className=" rounded-3xl border-2  border-stone-900 shadow-[3px_3px_0_#000000] bg-yellow-300 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="font-display text-2xl uppercase md:text-6xl md:leading-tight text-stone-900 mb-4 md:mb-6">
                Encomenda Online
              </h3>
              <p className="font-display text-base md:text-xl text-stone-900 mb-4 md:mb-8">
                Queres saborear os nossos gelados artesanais no conforto da tua casa? Faz a tua encomenda online e recebe gelados frescos e deliciosos diretamente à tua porta!
              </p>
              <p className="font-display text-base md:text-xl text-stone-900 mb-4 md:mb-8">
                Escolhe entre os nossos sabores artesanais e nós entregamos tudo fresquinho. Perfeito para momentos especiais em família ou para surpreender alguém especial.
              </p>
              <button className="rounded-full border-2 border-stone-900 bg-[#662d91] px-8 py-4 font-display text-xl font-white uppercase text-white shadow-[3px_3px_0_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#000000] w-fit">
                Contacta-nos
              </button>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#ff6700] px-[30px] py-16 text-cream md:px-16 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl uppercase md:text-[100px] md:leading-tight">
            Experimenta <br/><span className="text-yellow-300">OUPAAAAA</span>
          </h2>
          <form
            action="https://formsubmit.co/geral@oupagelados.pt"
            method="POST"
            className="mx-auto mt-8 grid max-w-2xl gap-4"
          >
            <input type="hidden" name="_subject" value="Nova mensagem do site Oupa" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://oupagelados.pt/#contact" />
            <input type="text" name="_honey" style={{ display: 'none' }} />
            <input 
              className="rounded-full border-2 border-stone-900 px-4 py-3 text-stone-900 bg-white shadow-[3px_3px_0_#000000]" 
              placeholder="Nome"
              name="name"
              type="text"
              required
            />
            <input 
              className="rounded-full border-2 border-stone-900 px-4 py-3 text-stone-900 bg-white shadow-[3px_3px_0_#000000]" 
              placeholder="Email"
              name="email"
              type="email"
              required
            />
            <textarea 
              className="rounded-3xl border-2 border-stone-900 px-4 py-3 text-stone-900 bg-white shadow-[3px_3px_0_#000000] min-h-[120px] resize-none" 
              placeholder="Mensagem"
              name="message"
              required
            />
            <button
              type="submit"
              className="rounded-full border-2 border-stone-900 bg-lime-300 px-6 py-3 font-black uppercase text-stone-900 shadow-[3px_3px_0_#000000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_#000000]"
            >
              Submeter
            </button>
          </form>
        </div>
      </section>

      <section className="bg-[#ff6700] px-[30px] pb-10 pt-10 md:px-24">
        <footer className="bg-yellow-300 border-2 border-stone-900 mx-auto px-4 py-10 md:px-6 rounded-3xl shadow-[3px_3px_0_#000000]">
          <div className="mx-auto flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
            <div className="flex-shrink-0 text-center">
              <img src={logoRed} alt="Oupa" className="w-32 md:w-[300px]" />
            </div>

            <div className="flex flex-col gap-3 text-lg font-display uppercase text-center">
              <a href="#products" className="text-stone-900 hover:underline">Produtos</a>
              <a href="#about" className="text-stone-900 hover:underline">Sobre Nós</a>
              <a href="#how" className="text-stone-900 hover:underline">Parcerias</a>
              <a href="#reviews" className="text-stone-900 hover:underline">Reviews</a>
              <a href="#contact" className="text-stone-900 hover:underline">Contacto</a>
            </div>

            <div className="flex flex-col gap-3 text-center">
              <p className="text-lg font-display uppercase text-stone-900">Segue-nos nas redes sociais</p>
              <div className="flex gap-4 text-center justify-center">
                <a
                  href="http://facebook.com/oupafabricagelados/?locale=pt_PT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 hover:underline font-display uppercase"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/oupa_fabricagelados/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 hover:underline font-display uppercase"
                >
                  Instagram
                </a>
                <a
                  href="https://www.tiktok.com/@oupa_fabricagelados"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-900 hover:underline font-display uppercase"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </footer>

        {/* Bottom Box as separate section */}
        <section className="bg-yellow-300 border-2 border-stone-900 rounded-3xl mx-auto mt-5 py-6 shadow-[3px_3px_0_#000000]">
          <div className="flex flex-col items-center justify-between gap-4 px-4 text-xs font-display uppercase text-stone-900 md:flex-row md:gap-6">
            <button className="hover:underline" onClick={() => setModal('tos')}>Termos de Serviço</button>
            <button className="hover:underline" onClick={() => setModal('privacy')}>Política de Privacidade</button>
            <a href="https://www.sacra.pt" target="_blank" rel="noopener noreferrer" className="hover:underline">Developed by Sacra Studio</a>
          </div>
        </section>
      </section>
      {modal && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 px-4"
          onClick={() => setModal(null)}
        >
          <div
            className="relative max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-3xl border-2 border-stone-900 bg-white p-6 shadow-[4px_4px_0_#000000] md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border-2 border-stone-900 bg-yellow-300 font-display text-xl shadow-[2px_2px_0_#000000] active:translate-x-[1px] active:translate-y-[1px] active:shadow-[1px_1px_0_#000000]"
              onClick={() => setModal(null)}
              aria-label="Fechar"
            >
              ✕
            </button>

            {modal === 'tos' && (
              <div className="pr-8">
                <h2 className="font-display text-3xl uppercase md:text-5xl md:leading-tight mb-6">Termos de Serviço</h2>
                <div className="space-y-4 text-sm md:text-base text-stone-700">
                  <p><strong>1. Identificação</strong><br />O presente website é propriedade da Oupa — Fábrica de Gelados, com sede em Portugal.</p>
                  <p><strong>2. Objeto</strong><br />Este website tem carácter informativo e destina-se a apresentar os produtos e serviços da marca Oupa, incluindo gelados artesanais, parcerias com restaurantes e serviço de eventos com a Oupa Truck.</p>
                  <p><strong>3. Utilização do Website</strong><br />O utilizador compromete-se a utilizar o website de forma lícita, não podendo reproduzir, distribuir ou modificar os conteúdos sem autorização prévia e escrita da Oupa.</p>
                  <p><strong>4. Propriedade Intelectual</strong><br />Todos os conteúdos presentes neste website — incluindo textos, imagens, logótipos e design — são propriedade da Oupa ou utilizados com a devida autorização, estando protegidos pela legislação portuguesa e europeia de propriedade intelectual.</p>
                  <p><strong>5. Formulário de Contacto</strong><br />O formulário de contacto disponível no website destina-se exclusivamente a permitir que os utilizadores enviem mensagens à Oupa. Não armazenamos nem retemos quaisquer dados pessoais submetidos através do formulário.</p>
                  <p><strong>6. Limitação de Responsabilidade</strong><br />A Oupa não se responsabiliza por eventuais erros, omissões ou desatualizações nos conteúdos do website, nem por danos resultantes da utilização ou impossibilidade de utilização do mesmo.</p>
                  <p><strong>7. Alterações</strong><br />A Oupa reserva-se o direito de alterar os presentes Termos de Serviço a qualquer momento, sem aviso prévio.</p>
                  <p><strong>8. Lei Aplicável</strong><br />Os presentes termos regem-se pela legislação portuguesa. Qualquer litígio será submetido aos tribunais competentes em Portugal.</p>
                </div>
              </div>
            )}

            {modal === 'privacy' && (
              <div className="pr-8">
                <h2 className="font-display text-3xl uppercase md:text-5xl md:leading-tight mb-6">Política de Privacidade</h2>
                <div className="space-y-4 text-sm md:text-base text-stone-700">
                  <p><strong>1. Responsável pelo Tratamento</strong><br />O responsável pelo website é a Oupa — Fábrica de Gelados, com sede em Portugal.</p>
                  <p><strong>2. Dados Recolhidos</strong><br />A Oupa não recolhe, armazena nem processa quaisquer dados pessoais dos visitantes deste website. Não utilizamos cookies de rastreamento, ferramentas de análise nem qualquer outro mecanismo de recolha de dados.</p>
                  <p><strong>3. Formulário de Contacto</strong><br />As mensagens enviadas através do formulário de contacto são encaminhadas diretamente para o nosso email através de um serviço externo (Formsubmit). A Oupa não armazena estas mensagens em nenhuma base de dados própria. O serviço Formsubmit atua apenas como intermediário de envio.</p>
                  <p><strong>4. Cookies</strong><br />Este website não utiliza cookies próprios. Poderão existir cookies estritamente necessários ao funcionamento técnico do website, mas nenhum é utilizado para fins de rastreamento ou marketing.</p>
                  <p><strong>5. Partilha de Dados com Terceiros</strong><br />Não partilhamos quaisquer dados com terceiros, uma vez que não recolhemos dados pessoais dos nossos visitantes.</p>
                  <p><strong>6. Direitos dos Utilizadores</strong><br />Nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD), qualquer utilizador pode exercer os seus direitos de acesso, retificação, eliminação e portabilidade dos seus dados, contactando-nos através de geral@oupagelados.pt. No entanto, dado que não recolhemos dados, não haverá informações a disponibilizar.</p>
                  <p><strong>7. Alterações à Política</strong><br />A Oupa reserva-se o direito de atualizar esta Política de Privacidade a qualquer momento. Quaisquer alterações serão publicadas nesta página.</p>
                  <p><strong>8. Contacto</strong><br />Para questões relacionadas com privacidade, contacte-nos através de geral@oupagelados.pt.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
