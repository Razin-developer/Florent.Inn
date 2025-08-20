import { useState } from 'react'
import HomePage from './pages/HomePage'
// import ProductsPage from './pages/ProductsPage'
import { Route, Routes } from 'react-router-dom'

function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header
			className="fixed inset-x-0 top-0 z-50"
			style={{
				background: "rgba(255,255,255,0.8)",
				borderBottom: "1px solid rgba(0,255,255,0.2)",
			}}
		>
			<div className="container-px mx-auto">
				<div className="flex h-16 items-center justify-between">
					{/* Logo + brand */}
					<div className="flex items-center gap-4">
						<img
							src="/logo.jpg"
							alt="Florent Logo"
							width={36}
							height={36}
							className="rounded-full"
						/>
						<div className="font-rajdhani tracking-widest text-[24px] sm:text-[26px] md:text-[30px] text-[#606060]">
							florent.inn
						</div>
					</div>

					{/* Desktop Nav */}
					<nav className="hidden md:flex gap-8" style={{ color: "#606060" }}>
						<a className="hover:text-accent" href="#collection">
							COLLECTION
						</a>
						<a className="hover:text-accent" href="#features">
							FEATURES
						</a>
						<a className="hover:text-accent" href="#about">
							ABOUT
						</a>
						<a className="hover:text-accent" href="#contact">
							CONTACT
						</a>
						<a className="hover:text-accent" href="#testimonials">
							REVIEWS
						</a>
					</nav>

					{/* Mobile toggle */}
					<button
						aria-label="Toggle menu"
						className="md:hidden inline-flex items-center justify-center h-10 w-10"
						onClick={() => setOpen((v) => !v)}
						style={{
							border: "1px solid rgba(229,228,226,0.25)",
							borderRadius: 8,
						}}
					>
						<span
							style={{
								display: "block",
								width: 18,
								height: 2,
								background: "#E5E4E2",
							}}
						/>
					</button>
				</div>
			</div>

			{/* Mobile Nav */}
			{open && (
				<div
					className="md:hidden"
					style={{
						background: "rgba(0,0,0,0.95)",
						borderBottom: "1px solid rgba(0,255,255,0.2)",
					}}
				>
					<div
						className="container-px mx-auto py-3 flex flex-col gap-3"
						style={{ color: "#E5E4E2" }}
					>
						<a href="#collection" onClick={() => setOpen(false)}>
							COLLECTION
						</a>
						<a href="#features" onClick={() => setOpen(false)}>
							FEATURES
						</a>
						<a href="#about" onClick={() => setOpen(false)}>
							ABOUT
						</a>
						<a href="#contact" onClick={() => setOpen(false)}>
							CONTACT
						</a>
						<a href="#testimonials" onClick={() => setOpen(false)}>
							REVIEWS
						</a>
					</div>
				</div>
			)}
		</header>
	);
}

function Footer() {
	return (
		<footer
			className="section-y"
			style={{
				background: "#0b0b0b",
				borderTop: "1px solid rgba(0,255,255,0.2)",
			}}
		>
			<div className="container-px mx-auto">
				<div className="grid lg:grid-cols-4 gap-10 text-center md:text-left">
					<div>
						<img
							src="/logo.jpg"
							alt="Florent Logo"
							width={40}
							height={40}
							className="mx-auto md:mx-0 mb-2 rounded-full"
						/>
						<div
							className="font-rajdhani text-2xl tracking-widest"
							style={{ color: "#E5E4E2" }}
						>
							florent.inn
						</div>
						<p
							className="mt-3 font-orbitron text-sm"
							style={{ color: "#9CA3AF" }}
						>
							Anti-tarnish jewelry for the modern age. Waterproof, durable, and
							eternally stylish.
						</p>
					</div>

					<div>
						<div className="font-rajdhani mb-3">Shop</div>
						<ul className="space-y-2 text-sm" style={{ color: "#9CA3AF" }}>
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
						<ul className="space-y-2 text-sm" style={{ color: "#9CA3AF" }}>
							<li>Our Story</li>
							<li>Materials</li>
							<li>Sustainability</li>
							<li>Wholesale</li>
							<li>Press</li>
						</ul>
					</div>

					<div>
						<div className="font-rajdhani mb-3">Support</div>
						<ul className="space-y-2 text-sm" style={{ color: "#9CA3AF" }}>
							<li>FAQ</li>
							<li>Shipping & Returns</li>
							<li>Care Instructions</li>
							<li>Size Guide</li>
							<li>Contact Us</li>
						</ul>
					</div>
				</div>

				<div
					className="mt-10 flex flex-col md:flex-row md:items-center gap-4 justify-between text-sm"
					style={{ color: "#6B7280" }}
				>
					<div>© 2023 florent.inn. All rights reserved. florent.adorments♡</div>
					<div className="flex gap-6">
						<a>Privacy Policy</a>
						<a>Terms of Service</a>
						<a>Shipping Policy</a>
					</div>
				</div>
			</div>
		</footer>
	);
}


function App() {
	return (
		<main className="overflow-x-hidden">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				{/* <Route path="/products" element={<ProductsPage />} /> */}
			</Routes>
			<Footer />
		</main>
	)
}

export default App
