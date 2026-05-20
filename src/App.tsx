/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Twitter, Github, ChevronRight, X, Sparkles, Check } from 'lucide-react';

interface NFTItem {
  id: string;
  name: string;
  rarity: string;
  videoUrl: string;
  creator: string;
  price: string;
}

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [emailValue, setEmailValue] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedNft, setSelectedNft] = useState<NFTItem | null>(null);

  const nftList: NFTItem[] = [
    {
      id: '1',
      name: 'Chronos Sphere #091',
      rarity: '8.7/10',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
      creator: 'Aero-probe #091',
      price: '1.25 ETH'
    },
    {
      id: '2',
      name: 'Aether Prism #104',
      rarity: '9.0/10',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
      creator: 'Cosmos-cube #104',
      price: '2.40 ETH'
    },
    {
      id: '3',
      name: 'Stellar Ring #007',
      rarity: '8.2/10',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
      creator: 'Stellar-ring #007',
      price: '0.95 ETH'
    }
  ];

  const socialLinks = [
    { icon: Mail, href: 'mailto:info@orbis.nft', label: 'Mail' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Github, href: 'https://github.com', label: 'Github' }
  ];

  const faqs = [
    {
      q: "WHAT IS ORBIS.NFT?",
      a: "ORBIS.NFT IS A DEEP SPACE DIGITAL ARTIFACT DISCOVERY AND COLLECTION PROTOCOL, FIXING OBJECTS OF EXTRAORDINARY FORM BEYOND PHYSICAL TIME AND GEOGRAPHICAL SPACE."
    },
    {
      q: "HOW ARE RARITY SCORES DEFINED?",
      a: "EACH SPACE OBJECT IS PASSED THROUGH AN ENTROPIC SPECTRAL ANALYSIS. THE COMPACTNESS AND VELOCITY DISSIPATION RATIO DEFINE THE FINAL MATHEMATICAL HARMONY SCORE OUT OF 10."
    },
    {
      q: "WHICH BLOCKCHAIN HOSTS THE SIGNAL?",
      a: "THE SIGNAL IS SECURED EXCLUSIVELY ON ENCRYPTED SMART CONTRACTS RESIDING ON THE IMMUTABLE ETHEREUM LAYER 1 MAINNET LAYER."
    }
  ];

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (emailValue.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmailValue('');
      }, 3000);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#010828] text-[#EFF4FF] font-mono antialiased overflow-x-hidden">
      {/* Texture Overlay (z-50) */}
      <div className="texture-overlay" id="texture-overlay" />

      {/* Grid container with custom section border layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:h-screen lg:w-screen lg:overflow-hidden bg-[#010828]">
        
        {/* SECTION 1: HERO */}
        <section
          id="homepage"
          className="frosted-section relative flex flex-col justify-between overflow-hidden lg:rounded-br-[32px] bg-[#010828] h-[100vh] lg:h-full py-6 px-4 sm:px-8 lg:px-6"
        >
          {/* Full-bleed background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Shadow Overlay for extreme text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#010828]/20 to-black/60 z-0" />

          {/* Header */}
          <header className="relative z-10 w-full flex items-center justify-between" id="landing-header">
            {/* Logo */}
            <div className="font-grotesk text-[16px] tracking-[0.2em] uppercase text-[#EFF4FF] select-none">
              Orbis.Nft
            </div>

            {/* Liquid Glass Navigation Menu (hidden lg:block on smaller viewports, flex on lg cells) */}
            <nav className="hidden xl:block liquid-glass rounded-[28px] px-6 py-2">
              <div className="flex items-center gap-4">
                {['Homepage', 'Gallery', 'Buy NFT', 'FAQ', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="font-grotesk text-[10px] tracking-wider uppercase text-[#EFF4FF] hover:text-[#6FFF00] transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </nav>

            <div className="w-[10px] hidden xl:block" />

            {/* Desktop Stacked Social Buttons */}
            <div className="hidden lg:flex gap-2 absolute top-6 right-6 z-20">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 flex items-center justify-center liquid-glass rounded-[0.75rem] hover:bg-white/10 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-[#EFF4FF] group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </header>

          {/* Hero Content */}
          <div className="relative z-10 flex-1 flex flex-col justify-center px-2 lg:px-4">
            <div className="relative max-w-full">
              <h1 className="font-grotesk text-[36px] sm:text-[50px] md:text-[60px] lg:text-[40px] xl:text-[52px] leading-[0.95] lg:leading-[0.9] uppercase text-[#EFF4FF] relative z-10">
                Beyond earth<br/>and ( its ) familiar<br/>boundaries
              </h1>

              {/* Overlaid cursive accent text "Nft collection" */}
              <div className="absolute right-0 sm:right-4 bottom-[-16px] xl:bottom-[-20px] -rotate-2 font-condiment text-[24px] sm:text-[32px] md:text-[40px] lg:text-[28px] xl:text-[36px] text-[#6FFF00] opacity-90 mix-blend-exclusion pointer-events-none select-none z-20">
                Nft collection
              </div>
            </div>
          </div>

          {/* Mobile Social (only below lg) */}
          <div className="flex lg:hidden justify-center items-center gap-3 mt-6 relative z-10">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-[48px] h-[48px] flex items-center justify-center liquid-glass rounded-[0.5rem] hover:bg-white/10 transition-all duration-300"
                aria-label={label}
              >
                <Icon className="w-4 h-4 text-[#EFF4FF]" />
              </a>
            ))}
          </div>

          {/* Coordinates status strip */}
          <div className="relative z-10 mt-4 flex justify-between items-center text-[9px] uppercase tracking-widest text-[#EFF4FF]/40 select-none">
            <div>COORDINATES: S_00.812.N</div>
            <div className="hidden sm:block">ORBIS STABILIZATION.091_A</div>
            <div>EST. 2026.05.20</div>
          </div>
        </section>

        {/* SECTION 2: ABOUT / INTRO */}
        <section
          id="gallery"
          className="frosted-section relative flex flex-col justify-center overflow-hidden bg-[#010828] h-[100vh] lg:h-full py-8 lg:py-6 px-6 sm:px-12 lg:px-8 xl:px-12"
        >
          {/* Background video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-[#010828]/65 z-0" />

          <div className="relative z-10 flex flex-col justify-between h-full gap-8">
            
            {/* Top Row content */}
            <div className="flex flex-col gap-4 lg:gap-6 pt-12 lg:pt-4">
              <div className="relative inline-block">
                <h2 className="font-grotesk text-[36px] sm:text-[45px] lg:text-[40px] xl:text-[52px] leading-none uppercase text-[#EFF4FF] select-none">
                  Hello!<br/>I'm orbis
                </h2>
                {/* Overlaid Orbis logo script */}
                <div className="absolute -bottom-4 right-0 sm:-right-4 rotate-2 font-condiment text-[36px] sm:text-[48px] lg:text-[42px] xl:text-[54px] text-[#6FFF00] mix-blend-exclusion opacity-90 select-none z-10">
                  Orbis
                </div>
              </div>

              <p className="font-mono text-[11px] sm:text-[14px] lg:text-[11px] xl:text-[13px] uppercase max-w-[240px] lg:max-w-[200px] leading-relaxed text-[#EFF4FF]/90 select-none pt-4">
                A digital object fixed beyond time and place. An exploration of distance, form, and silence in space.
              </p>
            </div>

            {/* Decorative, semi opaque text */}
            <div className="opacity-10 text-[9px] uppercase space-y-2 font-mono text-[#010828] sm:text-[#EFF4FF] select-none pb-4">
              <p>Distance is an illusion of the mind.</p>
              <p>Silence is the language of the stars.</p>
            </div>

          </div>
        </section>

        {/* SECTION 3: NFT COLLECTION GRID */}
        <section
          id="gallery-grid"
          className="frosted-section bg-[#010828] h-[100vh] lg:h-full flex flex-col overflow-hidden py-8 lg:py-6 px-4 sm:px-8 lg:px-6 xl:px-10"
        >
          <div className="flex flex-col justify-between h-full gap-4 overflow-hidden">
            
            {/* Header row inside grid frame */}
            <div className="flex justify-between items-end pb-2 border-b border-white/5">
              <h2 className="font-grotesk text-[24px] sm:text-[32px] lg:text-[22px] xl:text-[28px] leading-none uppercase text-[#EFF4FF]">
                Collection of<br />
                <span className="font-condiment text-[#6FFF00] lowercase ml-8 mr-1 text-[26px] sm:text-[36px] lg:text-[24px] xl:text-[32px]">Space</span> objects
              </h2>

              {/* See All Creators Button */}
              <button className="flex items-start text-right hover:opacity-85 transition-all duration-300 cursor-pointer group">
                <span className="font-grotesk text-[24px] sm:text-[32px] lg:text-[22px] xl:text-[28px] mr-2">SEE</span>
                <div className="flex flex-col items-start leading-none pt-0.5">
                  <span className="font-grotesk text-[9px] sm:text-[10px]">ALL</span>
                  <span className="font-grotesk text-[9px] sm:text-[10px]">CREATORS</span>
                  <div className="h-[3px] bg-[#6FFF00] w-full mt-0.5 group-hover:scale-x-105 transition-transform" />
                </div>
              </button>
            </div>

            {/* Clean inner list containing cards and FAQs with custom scrollbar */}
            <div className="flex-1 overflow-y-auto scrollbar-glass pr-1 space-y-8 pb-4">
              
              {/* NFT Cards list */}
              <div className="grid grid-cols-3 gap-3">
                {nftList.map((nft) => (
                  <motion.div
                    key={nft.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedNft(nft)}
                    className="liquid-glass rounded-[20px] p-2 hover:bg-white/5 transition-all duration-300 flex flex-col gap-2 cursor-pointer group"
                  >
                    <div className="relative aspect-square w-full rounded-[16px] overflow-hidden bg-black/40">
                      <video
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={nft.videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    </div>

                    {/* Bottom glass overlay inside each card */}
                    <div className="liquid-glass rounded-[12px] p-2 mt-1 flex justify-between items-center bg-black/20">
                      <div className="flex flex-col">
                        <span className="text-[7px] text-[#EFF4FF]/70 uppercase tracking-widest">RARITY SCORE:</span>
                        <span className="font-grotesk text-[12px] text-[#EFF4FF] leading-none">{nft.rarity}</span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedNft(nft);
                        }}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform"
                        aria-label="View Space NFT Specifications"
                      >
                        <ChevronRight className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Nested FAQs styling matching interactive rules */}
              <div className="border-t border-white/5 pt-6" id="faq">
                <h3 className="font-grotesk text-[14px] sm:text-[16px] text-center uppercase tracking-widest text-[#EFF4FF]/80 mb-4">
                  ENCODED QUERIES (FAQ)
                </h3>
                <div className="flex flex-col gap-2">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="liquid-glass rounded-[14px] overflow-hidden">
                      <button
                        onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        className="w-full flex items-center justify-between text-left px-4 py-3 hover:bg-white/5 transition-colors cursor-pointer"
                      >
                        <span className="font-grotesk text-[11px] sm:text-[12px] uppercase text-cream">{faq.q}</span>
                        <span className={`text-[15px] leading-none text-neon transform transition-transform duration-300 ${activeFaq === idx ? 'rotate-45' : ''}`}>+</span>
                      </button>
                      <AnimatePresence initial={false}>
                        {activeFaq === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="border-t border-white/5"
                          >
                            <div className="px-4 py-3 text-cream/70 leading-relaxed text-[10px] uppercase font-mono">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 4: CTA / FINAL REACH */}
        <section
          id="contact"
          className="frosted-section relative flex flex-col justify-between overflow-hidden bg-[#010828] h-[100vh] lg:h-full py-8 lg:py-6"
        >
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover z-0 select-none pointer-events-none"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-[#010828]/40 to-[#010828]/80 z-0" />

          {/* Text Content Block */}
          <div className="content-layer flex flex-col items-end justify-center text-right pr-6 sm:pr-12 lg:pr-16 z-10 w-full h-full relative">
            <div className="relative">
              {/* Cursive position absolute overlay text */}
              <span className="font-condiment text-neon text-[24px] absolute -left-12 -top-6 -rotate-3 mix-blend-exclusion opacity-90 select-none">
                Go beyond
              </span>
              <h3 className="font-grotesk text-[32px] lg:text-[28px] xl:text-[32px] uppercase leading-[1.1] text-cream">
                <span className="block mb-4 text-[#6FFF00]">JOIN US.</span>
                REVEAL WHAT'S HIDDEN.<br/>
                DEFINE WHAT'S NEXT.<br/>
                FOLLOW THE SIGNAL.
              </h3>
            </div>

            {/* Newsletter Subscription */}
            <form onSubmit={handleSubscribe} className="relative z-20 w-full max-w-[280px] sm:max-w-[320px] mt-6 flex flex-col sm:flex-row gap-2 pt-4">
              <input
                type="email"
                required
                placeholder="ENTER SECURE SIGNAL EMAIL"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                className="flex-1 px-3 py-1.5 bg-black/40 border border-white/10 rounded-[10px] text-[10px] font-mono uppercase text-cream placeholder-cream/40 focus:outline-none focus:border-neon transition-all"
              />
              <button
                type="submit"
                className="px-4 py-1.5 rounded-[10px] bg-[#6FFF00] text-[#010828] font-grotesk text-[10px] uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all text-center select-none cursor-pointer flex items-center justify-center gap-1 min-w-[70px]"
              >
                {subscribed ? "SENT" : "RESONATE"}
              </button>
            </form>
          </div>

          {/* Social Icons floating list - bottom-left */}
          <div className="absolute left-8 bottom-8 z-20">
            <div className="liquid-glass rounded-[1rem] flex flex-col">
              {socialLinks.map(({ icon: Icon, href, label }, idx) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`p-3 hover:bg-white/10 transition-colors flex items-center justify-center text-[#EFF4FF] ${idx < 2 ? 'border-b border-white/10' : ''}`}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-[#EFF4FF]" />
                </a>
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="bg-[#010828] border-t border-white/5 py-8 px-6 text-center select-none relative z-10">
        <div className="max-w-[1831px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-[#EFF4FF]/50 font-mono">
          <div>ORBIS.NFT SYSTEM v1.3.9_B</div>
          <div>© 2026 ORBIS.NFT LABS. ALL REVELATIONS SECURED.</div>
          <div className="flex gap-4">
            <a href="#homepage" className="hover:text-neon transition-colors">TOP</a>
            <span>•</span>
            <a href="#gallery-grid" className="hover:text-neon transition-colors">COLLECTION</a>
            <span>•</span>
            <a href="#faq" className="hover:text-neon transition-colors">PROTOCOL</a>
          </div>
        </div>
      </footer>

      {/* DETAILED INTERACTIVE NFT MODAL (Accessible on clicking card detailing parameters) */}
      <AnimatePresence>
        {selectedNft && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNft(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-2xl text-cream p-6 md:p-8 rounded-[32px] liquid-glass max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedNft(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-cream hover:text-neon transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                <div className="relative aspect-square w-full rounded-[24px] overflow-hidden bg-black/40">
                  <video
                    className="w-full h-full object-cover"
                    src={selectedNft.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>

                <div className="flex flex-col justify-between gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#6FFF00]">STABILIZED OBJECT</span>
                    <h3 className="font-grotesk text-3xl text-cream tracking-wide uppercase">{selectedNft.name}</h3>
                    <p className="text-xs text-cream/70 leading-relaxed mt-2 uppercase text-left">
                      DISCOVERED AND ENCODED SECURELY ON TIME-ARRESTED ORBIS CLOUD PROTOCOLS. SILENTLY ORBITING THE IMMUTABLE SPATIAL MATRIX.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-xs text-cream/50 uppercase">RARITY HARMONY</span>
                      <span className="text-sm font-bold text-neon uppercase">{selectedNft.rarity}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-xs text-cream/50 uppercase">CURRENT VALUE</span>
                      <span className="text-sm font-mono text-cream font-bold">{selectedNft.price}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/10 pb-2">
                      <span className="text-xs text-cream/50 uppercase">ORBIS ID</span>
                      <span className="text-sm font-mono text-cream/80">0x81AC...{selectedNft.id}FF</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      alert(`Initiating Web3 mint/checkout flow for standard simulation of: ${selectedNft.name}`);
                      setSelectedNft(null);
                    }}
                    className="w-full py-3.5 rounded-[16px] bg-gradient-to-r from-[#b724ff] to-[#7c3aed] text-white font-grotesk text-center tracking-widest text-[13px] uppercase hover:opacity-90 shadow-lg shadow-purple-500/20 active:scale-95 transition-all cursor-pointer"
                  >
                    ACQUIRE SIGNAL
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
