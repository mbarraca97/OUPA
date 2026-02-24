import heroCans from './assets/images/0oFMOy5Xm89rpo0L53rzA0fpvr4.png'
import blackCan from './assets/images/CekZngiy07rr4FTLTw2x1KTx0FM.png'
import waterCan from './assets/images/cQ1mooXzCQzZHN8ZkGRHCoHoEGY.png'
import strawCan from './assets/images/HVU8DJI30arjkpyNRnub8DZysdw.png'
import boxPack from './assets/images/GoIeXeiU0JXucLyD8eiegaewLeU.png'
import kiwi from './assets/images/26rDkkEPoHiNSRhg7FvTTrGP7Lg.png'
import orange from './assets/images/7BhBbTDmSRIGr4rrhOeTq533zrs.png'
import lemonSlice from './assets/images/niOj84Yrf0VAZUXpG69CZUWrg.png'
import berries from './assets/images/MswwAB8XnYNDrd9o4g6ZHqC2MLw.png'
import canTilt from './assets/images/yNbUcie2HCyvvKtNFvAyziYjg.png'
import avatarEmma from './assets/images/8rlG4yox0w8UXpoOaYWvFzPZTs.png'
import avatarJames from './assets/images/Yb8nDxvwZAN07pPgqJS26suXipM.jpg'
import Navbar from './components/Navbar'

const products = [
  { name: 'Blackberry Blast', price: '$15', image: blackCan },
  { name: 'Watermelon Wave', price: '$10', image: waterCan },
  { name: 'Strawberry Fizz', price: '$12', image: strawCan },
]

const faq = [
  'What makes Zoooom special?',
  'Is there caffeine in Zoooom?',
  'How much sugar is in Zoooom?',
  'Can kids drink Zoooom?',
  'How should I store Zoooom?',
  'Can I drink Zoooom every day?',
]

export default function App() {
  return (
    <main className="bg-pink-300 text-stone-900">
      <Navbar />

      <section className="relative overflow-hidden px-4 pb-16 pt-12 md:px-6 md:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="font-display text-[5rem] uppercase leading-[0.85] text-indigo-700 md:text-[8rem]">zoooom</h1>
            <p className="mt-4 max-w-md text-xl font-bold uppercase">The energy of nature in every bottle</p>
            <button className="mt-6 rounded-full bg-indigo-700 px-8 py-3 text-base font-bold uppercase text-white">Buy Now</button>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <img src={heroCans} alt="Zoooom cans" className="w-full" />
            <img src={lemonSlice} alt="Lemon" className="absolute -bottom-8 -left-8 h-24 w-24 animate-spin-slow" />
            <img src={orange} alt="Orange" className="absolute -right-8 top-8 w-24 rotate-12 md:w-36" />
          </div>
        </div>
      </section>

      <section id="products" className="bg-indigo-800 px-4 py-16 text-cream md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-5xl uppercase md:text-6xl">Popular <span className="text-lime-300">products</span></h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {products.map((item) => (
              <article key={item.name} className="rounded-[2rem] border-2 border-black bg-cream p-5 text-stone-900">
                <img src={item.image} alt={item.name} className="mx-auto h-72 object-contain" />
                <h3 className="mt-4 font-display text-3xl uppercase">{item.name}</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-black">{item.price}</span>
                  <button className="rounded-full bg-indigo-700 px-4 py-2 text-sm font-bold uppercase text-white">ADD TO CART</button>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button className="rounded-full border-2 border-cream px-8 py-3 text-sm font-bold uppercase">VIEW ALL PRODUCTS</button>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h3 className="font-display text-4xl uppercase md:text-6xl"><span className="text-indigo-700">Zoooom</span> is a naturally fermented tea that fills you with energy and health.</h3>
          <div className="mt-8 grid items-center gap-10 md:grid-cols-2">
            <img src={heroCans} alt="Cans" className="w-full rounded-[2rem] border-2 border-stone-900 bg-white p-6" />
            <p className="font-body text-lg">Each sip is a combination of ancient traditions and modern technology.</p>
          </div>
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

      <section className="bg-indigo-700 px-4 py-16 text-cream md:px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-5xl uppercase md:text-6xl">Try the entire <span className="text-lime-300">Zoooom</span> line!</h2>
            <p className="mt-4">Want to experience the variety of flavors and benefits of kombucha? Our tasting kit is the perfect choice.</p>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <img src={boxPack} alt="Box" className="w-full rounded-3xl" />
            <img src={canTilt} alt="Can" className="absolute -bottom-10 -left-10 w-44" />
          </div>
        </div>
      </section>

      <section id="reviews" className="px-4 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-5xl uppercase md:text-6xl">What people say about zoooom</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border-2 border-stone-900 bg-cream p-6">
              <p className="font-display text-3xl uppercase">The best kombucha I’ve ever tried!</p>
              <p className="mt-3">I love how natural and refreshing it tastes. It’s not too sweet, just perfectly balanced!</p>
              <div className="mt-5 flex items-center gap-4">
                <img src={avatarEmma} alt="Emma R." className="h-16 w-16 rounded-full object-cover" />
                <div>
                  <p className="font-bold">Emma R.</p>
                  <p className="text-sm">nutritionist & wellness coach</p>
                </div>
              </div>
            </article>
            <article className="rounded-3xl border-2 border-stone-900 bg-cream p-6">
              <p className="font-display text-3xl uppercase">Energy boost without the crash!</p>
              <p className="mt-3">Zoooom gives me the perfect lift in the morning without relying on coffee.</p>
              <div className="mt-5 flex items-center gap-4">
                <img src={avatarJames} alt="James L." className="h-16 w-16 rounded-full object-cover" />
                <div>
                  <p className="font-bold">James L.</p>
                  <p className="text-sm">fitness trainer & entrepreneur</p>
                </div>
              </div>
            </article>
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
