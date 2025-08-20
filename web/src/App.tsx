import { useState } from 'react'
import { motion } from 'framer-motion'

function Header() {
	const [open, setOpen] = useState(false)
	return (
		<header className="fixed inset-x-0 top-0 z-50" style={{ background: 'rgba(0,0,0,0.8)', borderBottom: '1px solid rgba(0,255,255,0.2)' }}>
			<div className="container-px mx-auto">
				<div className="flex h-16 items-center justify-between">
					<div className="font-rajdhani tracking-widest text-[24px] sm:text-[26px] md:text-[30px]" style={{ color: '#E5E4E2' }}>florent.inn</div>
					<nav className="hidden md:flex gap-8" style={{ color: '#E5E4E2' }}>
						<a className="hover:text-accent" href="#collection">COLLECTION</a>
						<a className="hover:text-accent" href="#features">FEATURES</a>
						<a className="hover:text-accent" href="#about">ABOUT</a>
						<a className="hover:text-accent" href="#contact">CONTACT</a>
						<a className="hover:text-accent" href="#testimonials">REVIEWS</a>
					</nav>
					<button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center h-10 w-10" onClick={() => setOpen(v => !v)} style={{ border: '1px solid rgba(229,228,226,0.25)', borderRadius: 8 }}>
						<span style={{ display: 'block', width: 18, height: 2, background: '#E5E4E2' }} />
					</button>
				</div>
			</div>
			{open && (
				<div className="md:hidden" style={{ background: 'rgba(0,0,0,0.95)', borderBottom: '1px solid rgba(0,255,255,0.2)' }}>
					<div className="container-px mx-auto py-3 flex flex-col gap-3" style={{ color: '#E5E4E2' }}>
						<a href="#collection" onClick={() => setOpen(false)}>COLLECTION</a>
						<a href="#features" onClick={() => setOpen(false)}>FEATURES</a>
						<a href="#about" onClick={() => setOpen(false)}>ABOUT</a>
						<a href="#contact" onClick={() => setOpen(false)}>CONTACT</a>
						<a href="#testimonials" onClick={() => setOpen(false)}>REVIEWS</a>
					</div>
				</div>
			)}
		</header>
	)
}

function Hero() {
	return (
		<section className="relative section-y pt-28 shine-wrap" id="hero">
			<div aria-hidden className="grid-bg" />
			<div className="container-px mx-auto">
				<div className="grid lg:grid-cols-2 gap-6 sm:gap-10 items-center">
					<div className="relative">
						<div className="absolute -left-8 -top-8 size-32 rounded-full border" style={{ borderColor: 'rgba(0,255,255,0.3)' }} />
						<div className="absolute left-44 -top-2 size-48 rounded-full border" style={{ borderColor: 'rgba(0,255,255,0.2)' }} />
						<div className="absolute left-60 top-16 size-20 rounded-full border" style={{ borderColor: 'rgba(0,255,255,0.1)' }} />
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="font-inter text-4xl sm:text-5xl lg:text-6xl leading-[1.2] font-normal" style={{ color: '#fff' }}>
							FUTURE OF JEWELRY
						</motion.h1>
						<div className="underline-anim my-6 w-32" />
						<p className="font-orbitron text-base sm:text-lg max-w-xl" style={{ color: '#D1D5DB' }}>
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
								<div key={i} className="h-24 sm:h-32" style={{ borderRight: '1px solid rgba(0,255,255,0.2)' }} />
							))}
						</div>
						<div className="mt-6 grid grid-cols-5 gap-0" style={{ opacity: 0.2 }}>
							{Array.from({ length: 10 }).map((_, i) => (
								<div key={i} className="h-24 sm:h-32" style={{ borderBottom: '1px solid rgba(0,255,255,0.2)' }} />
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="absolute inset-x-0 bottom-0 h-16 sm:h-24" style={{ background: 'linear-gradient(90deg, #000 0%, rgba(0,0,0,0) 50%, #000 100%)' }} />
		</section>
	)
}

function Marquee() {
	return (
		<div className="border-t border-b border-cyan-400/20" style={{ background: 'rgba(0,0,0,0.8)' }}>
			<div className="container-px mx-auto">
				<div className="h-10 sm:h-12 flex items-center text-xs sm:text-[13px]" style={{ color: '#fff' }}>
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

function Testimonials() {
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
		<section id="testimonials" className="section-y" style={{ background: '#0a0a0a' }}>
			<div className="container-px mx-auto">
				<div className="text-center mb-8">
					<h2 className="font-inter text-4xl">CLIENT EXPERIENCES</h2>
					<div className="underline-anim mx-auto my-4 w-32" />
				</div>
				<div className="grid md:grid-cols-3 gap-6">
					{reviews.map((r, i) => (
						<motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="card-surface p-6 flex flex-col justify-between">
							<div>
								<div className="flex gap-1 mb-4">
									{Array.from({ length: r.stars }).map((_, s) => (
										<span key={s} style={{ color: '#00FFFF' }}>★</span>
									))}
								</div>
								<p className="font-inter" style={{ color: '#D1D5DB' }}>{r.quote}</p>
							</div>
							<div className="mt-6 flex items-center gap-3">
								<img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover" loading="lazy" decoding="async" />
								<div>
									<div className="font-rajdhani">{r.name}</div>
									<div className="font-orbitron text-sm" style={{ color: '#9CA3AF' }}>{r.role}</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

function Contact() {
	return (
		<section id="contact" className="section-y" style={{ background: 'linear-gradient(90deg, #000 0%, rgba(0,0,0,0.95) 50%, #000 100%)' }}>
			<div className="container-px mx-auto grid lg:grid-cols-2 gap-10">
				<div>
					<h2 className="font-inter text-4xl">GET IN TOUCH</h2>
					<div className="underline-anim my-4 w-32" />
					<p className="font-orbitron" style={{ color: '#D1D5DB' }}>Have questions about our products or interested in wholesale opportunities? We'd love to hear from you.</p>
					<div className="mt-6 space-y-4">
						<div className="flex items-center gap-3">
							<div className="size-6 rounded-full" style={{ background: 'rgba(0,255,255,0.1)', border: '1px solid rgba(0,255,255,0.3)' }} />
							<div className="font-orbitron" style={{ color: '#D1D5DB' }}>contact@florent.inn</div>
						</div>
						<div className="flex items-center gap-3">
							<div className="size-6 rounded-full" style={{ background: 'rgba(0,255,255,0.1)', border: '1px solid rgba(0,255,255,0.3)' }} />
							<div className="font-orbitron" style={{ color: '#D1D5DB' }}>1234 Future Avenue, Innovation District</div>
						</div>
						<div className="flex items-center gap-3">
							<div className="size-6 rounded-full" style={{ background: 'rgba(0,255,255,0.1)', border: '1px solid rgba(0,255,255,0.3)' }} />
							<div className="font-orbitron" style={{ color: '#D1D5DB' }}>+1 (800) 555-GEMS</div>
						</div>
					</div>
				</div>
				<div className="card-surface p-6">
					<form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
						<div>
							<label className="block mb-2 font-rajdhani">Your Name</label>
							<input className="w-full" style={{ height: '3rem', padding: '0 1rem', borderRadius: 2, border: '1px solid rgba(192,192,192,0.3)', background: 'rgba(0,0,0,0.5)', color: '#fff' }} />
						</div>
						<div>
							<label className="block mb-2 font-rajdhani">Email Address</label>
							<input type="email" className="w-full" style={{ height: '3rem', padding: '0 1rem', borderRadius: 2, border: '1px solid rgba(192,192,192,0.3)', background: 'rgba(0,0,0,0.5)', color: '#fff' }} />
						</div>
						<div>
							<label className="block mb-2 font-rajdhani">Subject</label>
							<select className="w-full" style={{ height: '3rem', padding: '0 1rem', borderRadius: 2, border: '1px solid rgba(192,192,192,0.3)', background: 'rgba(0,0,0,0.5)', color: '#fff' }}>
								<option>Product Inquiry</option>
								<option>Wholesale</option>
								<option>Press</option>
							</select>
						</div>
						<div>
							<label className="block mb-2 font-rajdhani">Your Message</label>
							<textarea className="w-full" style={{ minHeight: '9rem', padding: '0.75rem 1rem', borderRadius: 2, border: '1px solid rgba(192,192,192,0.3)', background: 'rgba(0,0,0,0.5)', color: '#fff' }} />
						</div>
						<button className="btn btn-gradient font-rajdhani tracking-[0.05em]">SEND MESSAGE</button>
					</form>
				</div>
			</div>
		</section>
	)
}

function Newsletter() {
	return (
		<section className="section-y" style={{ background: '#0a0a0a' }}>
			<div className="container-px mx-auto max-w-3xl text-center">
				<h2 className="font-inter text-3xl">JOIN THE FUTURE</h2>
				<p className="font-orbitron mt-4" style={{ color: '#D1D5DB' }}>Subscribe to our newsletter for exclusive offers, new product announcements, and styling tips.</p>
				<form className="mt-6 flex flex-col sm:flex-row gap-3 justify-center" onSubmit={(e) => e.preventDefault()}>
					<input type="email" placeholder="Your email address" className="flex-1 min-w-0" style={{ height: '3rem', padding: '0 1rem', borderRadius: 2, border: '1px solid rgba(192,192,192,0.3)', background: 'rgba(0,0,0,0.5)', color: '#fff' }} />
					<button className="btn btn-gradient font-rajdhani tracking-[0.05em] shrink-0">SUBSCRIBE</button>
				</form>
			</div>
		</section>
	)
}

function FeaturedCollection() {
	const items = [
		{ src: '/featured-necklace.png', title: 'Geometric Pendant Necklace', meta: 'Stainless Steel • Waterproof • Anti-tarnish', price: '$89.99', badge: 'NEW' },
		{ src: '/bracelet.png', title: 'Quantum Chain Bracelet', meta: 'Stainless Steel • Waterproof • Anti-tarnish', price: '$64.99' },
		{ src: '/earrings.png', title: 'Orbital Hoop Earrings', meta: 'Stainless Steel • Waterproof • Anti-tarnish', price: '$49.99', badge: 'BESTSELLER' },
	]
	return (
		<section id="collection" className="section-y">
			<div className="container-px mx-auto">
				<div className="text-center mb-10">
					<h2 className="font-inter text-4xl" style={{ letterSpacing: 0 }}>FEATURED COLLECTION</h2>
					<div className="underline-anim mx-auto my-4 w-32" />
					<p className="font-orbitron text-base" style={{ color: '#D1D5DB' }}>Discover our premium selection of anti-tarnish jewelry pieces. Each item is crafted with precision using high-quality stainless steel for enduring beauty.</p>
				</div>
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
					{items.map((it, idx) => (
						<motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }} className="card-surface card-interactive hover-raise">
							<div className="p-[1px]">
								<div className="relative">
									<img src={it.src} alt={it.title} className="w-full aspect-square object-cover" loading="lazy" decoding="async" />
									{it.badge && (
										<div className="absolute top-4 right-4 text-xs px-2 py-1" style={{ background: '#00FFFF', color: '#000', borderRadius: 2 }}>{it.badge}</div>
									)}
								</div>
								<div className="p-6">
									<div className="font-rajdhani text-xl">{it.title}</div>
									<div className="font-orbitron text-sm mt-1" style={{ color: '#9CA3AF' }}>{it.meta}</div>
									<div className="mt-4 flex items-center justify-start">
										<div className="font-orbitron text-lg">{it.price}</div>
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

function Features() {
	const list = [
		{ title: 'Waterproof', text: 'Fully waterproof jewelry that can be worn while swimming, showering, or in any wet environment without damage.' },
		{ title: 'Anti-Tarnish', text: 'Advanced anti-tarnish technology ensures your jewelry maintains its pristine appearance for years to come.' },
		{ title: 'Premium Materials', text: 'Crafted from high-grade stainless steel that resists corrosion, scratches, and maintains its luster.' },
		{ title: 'Precision Crafted', text: 'Each piece is meticulously designed and manufactured using cutting-edge techniques for perfect finish.' },
	]
	return (
		<section id="features" className="section-y" style={{ background: 'linear-gradient(90deg, #000 0%, rgba(0,0,0,0.95) 50%, #000 100%)' }}>
			<div className="container-px mx-auto">
				<div className="text-center mb-10">
					<h2 className="font-inter text-4xl">ADVANCED FEATURES</h2>
					<div className="underline-anim mx-auto my-4 w-32" />
					<p className="font-orbitron text-base" style={{ color: '#D1D5DB' }}>Our jewelry combines cutting-edge technology with timeless design to create pieces that stand the test of time.</p>
				</div>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{list.map((f, i) => (
						<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="card-surface card-interactive p-6">
							<div className="size-16 rounded-full mb-6" style={{ background: 'rgba(0,255,255,0.1)', border: '1px solid rgba(0,255,255,0.3)' }} />
							<h3 className="font-rajdhani text-xl">{f.title}</h3>
							<p className="font-orbitron text-sm mt-2" style={{ color: '#9CA3AF' }}>{f.text}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

function About() {
	return (
		<section id="about" className="section-y">
			<div className="container-px mx-auto grid lg:grid-cols-2 gap-12 items-center">
				<div className="card-surface p-2">
					<img src="/about-hero.jpg" alt="About" className="w-full h-auto object-cover" loading="lazy" decoding="async" />
				</div>
				<div>
					<h2 className="font-inter text-4xl">REDEFINING ADORNMENT</h2>
					<div className="underline-anim my-4 w-32" />
					<p className="font-orbitron" style={{ color: '#D1D5DB' }}>
						At florent.inn, we're not just creating jewelry; we're crafting the future of personal adornment. Our pieces combine technological innovation with timeless aesthetics to create wearable art that transcends trends.
					</p>
					<div className="mt-6 grid sm:grid-cols-2 gap-6">
						<div className="flex gap-4">
							<div className="size-6" style={{ border: '1px solid rgba(255,255,255,0.2)' }} />
							<div>
								<div className="font-rajdhani">Everyday Durability</div>
								<div className="font-orbitron text-sm" style={{ color: '#9CA3AF' }}>Wear your pieces during any activity without worry about damage.</div>
							</div>
						</div>
						<div className="flex gap-4">
							<div className="size-6" style={{ border: '1px solid rgba(255,255,255,0.2)' }} />
							<div>
								<div className="font-rajdhani">Hypoallergenic</div>
								<div className="font-orbitron text-sm" style={{ color: '#9CA3AF' }}>Safe for sensitive skin with hypoallergenic stainless steel materials.</div>
							</div>
						</div>
						<div className="flex gap-4">
							<div className="size-6" style={{ border: '1px solid rgba(255,255,255,0.2)' }} />
							<div>
								<div className="font-rajdhani">Lifetime Guarantee</div>
								<div className="font-orbitron text-sm" style={{ color: '#9CA3AF' }}>We stand behind our quality with a comprehensive lifetime warranty.</div>
							</div>
						</div>
					</div>
					<div className="mt-6">
						<a href="#about" className="btn btn-gradient font-rajdhani tracking-[0.05em]">DISCOVER OUR STORY</a>
					</div>
				</div>
			</div>
		</section>
	)
}

function Footer() {
	return (
		<footer className="section-y" style={{ background: '#0b0b0b', borderTop: '1px solid rgba(0,255,255,0.2)' }}>
			<div className="container-px mx-auto">
				<div className="grid lg:grid-cols-4 gap-10 text-center md:text-left">
					<div>
						<div className="font-rajdhani text-2xl tracking-widest" style={{ color: '#E5E4E2' }}>florent.inn</div>
						<p className="mt-3 font-orbitron text-sm" style={{ color: '#9CA3AF' }}>Anti-tarnish jewelry for the modern age. Waterproof, durable, and eternally stylish.</p>
					</div>
					<div>
						<div className="font-rajdhani mb-3">Shop</div>
						<ul className="space-y-2 text-sm" style={{ color: '#9CA3AF' }}>
							<li>All Collections</li>
							<li>Necklaces</li>
							<li>Bracelets</li>
							<li>Earrings</li>
							<li>Rings</li>
							<li>New Arrivals</li>
						</ul>
					</div>
					<div>
						<div className="font-rajdhani mb-3">About</div>
						<ul className="space-y-2 text-sm" style={{ color: '#9CA3AF' }}>
							<li>Our Story</li>
							<li>Materials</li>
							<li>Sustainability</li>
							<li>Wholesale</li>
							<li>Press</li>
						</ul>
					</div>
					<div>
						<div className="font-rajdhani mb-3">Support</div>
						<ul className="space-y-2 text-sm" style={{ color: '#9CA3AF' }}>
							<li>FAQ</li>
							<li>Shipping & Returns</li>
							<li>Care Instructions</li>
							<li>Size Guide</li>
							<li>Contact Us</li>
						</ul>
					</div>
				</div>
				<div className="mt-10 flex flex-col md:flex-row md:items-center gap-4 justify-between text-sm" style={{ color: '#6B7280' }}>
					<div>© 2023 florent.inn. All rights reserved. florent.adorments♡</div>
					<div className="flex gap-6">
						<a>Privacy Policy</a>
						<a>Terms of Service</a>
						<a>Shipping Policy</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

function App() {
	return (
		<main className="overflow-x-hidden">
			<Header />
			<Hero />
			<Marquee />
			<FeaturedCollection />
			<Features />
			<About />
			<Testimonials />
			<Contact />
			<Newsletter />
			<Footer />
		</main>
	)
}

export default App
