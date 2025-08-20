import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative section-y pt-28" id="hero" style={{ background: '#f9f9f6' }}>
      <div aria-hidden className="grid-bg" />
      <div className="container-px mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-center">
          <div className="relative">
            <div className="absolute -left-8 -top-8 size-32 rounded-full border" style={{ borderColor: 'rgba(0,255,255,0.5)' }} />
            <div className="absolute left-44 -top-2 size-48 rounded-full border" style={{ borderColor: 'rgba(0,255,255,0.4)' }} />
            <div className="absolute -right-96 -top-2 size-56 rounded-full border" style={{ borderColor: 'rgba(0,255,255,0.4)' }} />
            <div className="absolute -right-96 top-24 size-40 rounded-full border" style={{ borderColor: 'rgba(0,255,255,0.4)' }} />
            <div className="absolute left-60 top-16 size-20 rounded-full border" style={{ borderColor: 'rgba(0,255,255,0.3)' }} />
            <div className="absolute -right-[25rem] top-80 size-20 rounded-full border" style={{ borderColor: 'rgba(0,255,255,0.3)' }} />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-inter text-4xl sm:text-5xl lg:text-6xl leading-[1.2] font-normal"
              style={{ color: '#111' }}>
              FUTURE OF JEWELRY
            </motion.h1>
            <div className="underline-anim my-6 w-32" />
            <p className="font-orbitron text-base sm:text-lg max-w-xl" style={{ color: '#555' }}>
              Anti-tarnish stainless steel accessories designed for the modern age. Waterproof, durable, and eternally stylish.
            </p>
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#collection" className="btn btn-gradient font-rajdhani tracking-[0.05em]">EXPLORE COLLECTION</a>
              <a href="#features" className="btn btn-outline font-rajdhani tracking-[0.05em]">DISCOVER FEATURES</a>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-5 gap-0" style={{ opacity: 0.2 }}>
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="h-24 sm:h-32" style={{ borderRight: '1px solid rgba(192,192,192,0.4)' }} />
              ))}
            </div>
            <div className="mt-6 grid grid-cols-5 gap-0" style={{ opacity: 0.2 }}>
              {Array.from({ length: 10 }).map((_, i) => (
                <div key={i} className="h-24 sm:h-32" style={{ borderBottom: '1px solid rgba(192,192,192,0.4)' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="shine-wrap"

      />

    </section>
  )
}

export function Marquee() {
  return (
    <div className="border-t border-b border-gray-300/50" style={{ background: '#fdfdfc' }}>
      <div className="container-px mx-auto">
        <div className="h-10 sm:h-12 flex items-center text-xs sm:text-[13px]" style={{ color: '#111' }}>
          <div className="marquee-track">
            <span>WATERPROOF TECHNOLOGY • ANTI-TARNISH • STAINLESS STEEL</span>
            <span>WATERPROOF TECHNOLOGY • ANTI-TARNISH • STAINLESS STEEL</span>
            <span>WATERPROOF TECHNOLOGY • ANTI-TARNISH • STAINLESS STEEL</span>
            <span>WATERPROOF TECHNOLOGY • ANTI-TARNISH • STAINLESS STEEL</span>
            <span>WATERPROOF TECHNOLOGY • ANTI-TARNISH • STAINLESS STEEL</span>
            <span>WATERPROOF TECHNOLOGY • ANTI-TARNISH • STAINLESS STEEL</span>
          </div>
        </div>
      </div>
    </div>
  )
}


export function Testimonials() {
  const reviews = [
    {
      quote: `"I've worn my Quantum Chain Bracelet daily for six months now - swimming, showering, everything. Still looks brand new. This is truly next-level jewelry."`,
      name: 'Alexandra K.',
      role: 'Verified Customer',
      avatar: '/testimonial-1.jpg',
      stars: 5,
    },
    {
      quote: `"As someone with sensitive skin, florent.inn's pieces are the first I've been able to wear 24/7 without any irritation."`,
      name: 'Michael T.',
      role: 'Verified Customer',
      avatar: '/testimonial-2.jpg',
      stars: 5,
    },
    {
      quote: `"The Orbital Hoop Earrings have become my signature piece. Futuristic design and practically maintenance-free."`,
      name: 'Sarah J.',
      role: 'Verified Customer',
      avatar: '/testimonial-3.jpg',
      stars: 5,
    },
  ]
  return (
    <section id="testimonials" className="section-y" style={{ background: '#f9f9f6' }}>
      <div className="container-px mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-inter text-4xl" style={{ color: '#111' }}>CLIENT EXPERIENCES</h2>
          <div className="underline-anim mx-auto my-4 w-32" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="p-6 flex flex-col justify-between" style={{ background: '#fff', border: '1px solid #e5e5e5', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderRadius: 8 }}>
              <div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, s) => (
                    <span key={s} style={{ color: '#999' }}>★</span>
                  ))}
                </div>
                <p className="font-inter" style={{ color: '#444' }}>{r.quote}</p>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" decoding="async" />
                <div>
                  <div className="font-rajdhani text-[#111]">{r.name}</div>
                  <div className="font-orbitron text-sm" style={{ color: '#666' }}>{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="section-y" style={{ background: '#fdfdfc' }}>
      <div className="container-px mx-auto grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-inter text-4xl" style={{ color: '#111' }}>GET IN TOUCH</h2>
          <div className="underline-anim my-4 w-32" />
          <p className="font-orbitron" style={{ color: '#555' }}>Have questions about our products or interested in wholesale opportunities? We'd love to hear from you.</p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="size-6 rounded-full" style={{ background: 'rgba(192,192,192,0.1)', border: '1px solid rgba(192,192,192,0.3)' }} />
              <div className="font-orbitron" style={{ color: '#444' }}>contact@florent.inn</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-6 rounded-full" style={{ background: 'rgba(192,192,192,0.1)', border: '1px solid rgba(192,192,192,0.3)' }} />
              <div className="font-orbitron" style={{ color: '#444' }}>1234 Future Avenue, Innovation District</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="size-6 rounded-full" style={{ background: 'rgba(192,192,192,0.1)', border: '1px solid rgba(192,192,192,0.3)' }} />
              <div className="font-orbitron" style={{ color: '#444' }}>+1 (800) 555-GEMS</div>
            </div>
          </div>
        </div>
        <div className="p-6" style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block mb-2 font-rajdhani text-[#111]">Your Name</label>
              <input className="w-full" style={{ height: '3rem', padding: '0 1rem', borderRadius: 4, border: '1px solid #ddd', background: '#fafafa', color: '#111' }} />
            </div>
            <div>
              <label className="block mb-2 font-rajdhani text-[#111]">Email Address</label>
              <input type="email" className="w-full" style={{ height: '3rem', padding: '0 1rem', borderRadius: 4, border: '1px solid #ddd', background: '#fafafa', color: '#111' }} />
            </div>
            <div>
              <label className="block mb-2 font-rajdhani text-[#111]">Subject</label>
              <select className="w-full" style={{ height: '3rem', padding: '0 1rem', borderRadius: 4, border: '1px solid #ddd', background: '#fafafa', color: '#111' }}>
                <option>Product Inquiry</option>
                <option>Wholesale</option>
                <option>Press</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 font-rajdhani text-[#111]">Your Message</label>
              <textarea className="w-full" style={{ minHeight: '9rem', padding: '0.75rem 1rem', borderRadius: 4, border: '1px solid #ddd', background: '#fafafa', color: '#111' }} />
            </div>
            <button className="btn btn-gradient font-rajdhani tracking-[0.05em]">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export function Newsletter() {
  return (
    <section className="section-y" style={{ background: '#f9f9f6' }}>
      <div className="container-px mx-auto max-w-3xl text-center">
        <h2 className="font-inter text-3xl" style={{ color: '#111' }}>JOIN THE FUTURE</h2>
        <p className="font-orbitron mt-4" style={{ color: '#555' }}>Subscribe to our newsletter for exclusive offers, new product announcements, and styling tips.</p>
        <form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your email address" className="flex-1 min-w-0" style={{ height: '3rem', padding: '0 1rem', borderRadius: 4, border: '1px solid #ddd', background: '#fafafa', color: '#111' }} />
          <button className="btn btn-gradient font-rajdhani tracking-[0.05em] shrink-0">SUBSCRIBE</button>
        </form>
      </div>
    </section>
  )
}

export function FeaturedCollection() {
  const items = [
    { src: '/product-1.jpg', title: 'Geometric Pendant Necklace', meta: 'Stainless Steel • Waterproof • Anti-tarnish', price: '$89.99', badge: 'NEW' },
    { src: '/product-2.jpg', title: 'Quantum Chain Bracelet', meta: 'Stainless Steel • Waterproof • Anti-tarnish', price: '$64.99' },
    { src: '/product-3.jpg', title: 'Orbital Hoop Earrings', meta: 'Stainless Steel • Waterproof • Anti-tarnish', price: '$49.99', badge: 'BESTSELLER' },
  ]
  return (
    <section id="collection" className="section-y" style={{ background: '#fdfdfc' }}>
      <div className="container-px mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-inter text-4xl" style={{ color: '#111' }}>FEATURED COLLECTION</h2>
          <div className="underline-anim mx-auto my-4 w-32" />
          <p className="font-orbitron text-base" style={{ color: '#555' }}>Discover our premium selection of anti-tarnish jewelry pieces. Each item is crafted with precision using high-quality stainless steel for enduring beauty.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="hover-raise" style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <div className="p-[1px]">
                <div className="relative">
                  <img src={it.src} alt={it.title} className="w-full aspect-square object-cover" loading="lazy" decoding="async" />
                  {it.badge && (
                    <div className="absolute top-4 right-4 text-xs px-2 py-1" style={{ background: '#ddd', color: '#111', borderRadius: 2 }}>{it.badge}</div>
                  )}
                </div>
                <div className="p-6">
                  <div className="font-rajdhani text-xl text-[#111]">{it.title}</div>
                  <div className="font-orbitron text-sm mt-1" style={{ color: '#777' }}>{it.meta}</div>
                  <div className="mt-4 flex items-center justify-start">
                    <div className="font-orbitron text-lg text-[#111]">{it.price}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a className="btn btn-outline font-rajdhani tracking-[0.05em]" href="#">VIEW ALL COLLECTIONS</a>
        </div>
      </div>
    </section>
  )
}


export function Features() {
  const list = [
    { title: 'Waterproof', text: 'Fully waterproof jewelry that can be worn while swimming, showering, or in any wet environment without damage.' },
    { title: 'Anti-Tarnish', text: 'Advanced anti-tarnish technology ensures your jewelry maintains its pristine appearance for years to come.' },
    { title: 'Premium Materials', text: 'Crafted from high-grade stainless steel that resists corrosion, scratches, and maintains its luster.' },
    { title: 'Precision Crafted', text: 'Each piece is meticulously designed and manufactured using cutting-edge techniques for perfect finish.' },
  ]
  return (
    <section
      id="features"
      className="section-y"
      style={{
        background: "linear-gradient(90deg, #f9f9f6 0%, #fefefe 50%, #f9f9f6 100%)",
      }}
    >
      <div className="container-px mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-inter text-4xl text-[#111]">ADVANCED FEATURES</h2>
          <div className="underline-anim mx-auto my-4 w-32 bg-gray-300" />
          <p className="font-orbitron text-base text-[#555]">
            Our jewelry combines cutting-edge technology with timeless design to create pieces that stand the test of time.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {list.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-6 rounded-2xl shadow-md border border-gray-200 bg-white"
            >
              <div
                className="size-16 rounded-full mb-6"
                style={{
                  background: "rgba(200,200,200,0.15)",
                  border: "1px solid rgba(180,180,180,0.4)",
                }}
              />
              <h3 className="font-rajdhani text-xl text-[#222]">{f.title}</h3>
              <p className="font-orbitron text-sm mt-2 text-[#666]">{f.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className="section-y bg-[#f9f9f6]">
      <div className="container-px mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
          <img
            src="/about-hero.jpg"
            alt="About"
            className="w-full h-auto object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div>
          <h2 className="font-inter text-4xl text-[#111]">REDEFINING ADORNMENT</h2>
          <div className="underline-anim my-4 w-32 bg-gray-300" />
          <p className="font-orbitron text-[#555]">
            At florent.inn, we're not just creating jewelry; we're crafting the future of personal adornment. Our pieces combine technological innovation with timeless aesthetics to create wearable art that transcends trends.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="size-6 border border-gray-300 rounded-sm" />
              <div>
                <div className="font-rajdhani text-[#111]">Everyday Durability</div>
                <div className="font-orbitron text-sm text-[#666]">
                  Wear your pieces during any activity without worry about damage.
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="size-6 border border-gray-300 rounded-sm" />
              <div>
                <div className="font-rajdhani text-[#111]">Hypoallergenic</div>
                <div className="font-orbitron text-sm text-[#666]">
                  Safe for sensitive skin with hypoallergenic stainless steel materials.
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="size-6 border border-gray-300 rounded-sm" />
              <div>
                <div className="font-rajdhani text-[#111]">Lifetime Guarantee</div>
                <div className="font-orbitron text-sm text-[#666]">
                  We stand behind our quality with a comprehensive lifetime warranty.
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="#about"
              className="px-6 py-3 rounded-xl font-rajdhani tracking-[0.05em] border border-gray-300 bg-gradient-to-r from-white to-gray-100 text-[#111] shadow hover:shadow-lg transition btn btn-outline font-rajdhani"
            >
              DISCOVER OUR STORY
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


export function HomePage() {
  return (
    <div>
      <Hero />
      <Marquee />
      <FeaturedCollection />
      <Features />
      <About />
      <Testimonials />
      <Contact />
      <Newsletter />
    </div>
  )
}

export default HomePage
