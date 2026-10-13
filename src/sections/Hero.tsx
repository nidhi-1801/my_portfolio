'use client';
import { useState, type MouseEvent, type CSSProperties } from 'react';
import memojiImage from '@/assets/images/memoji-computer.png';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import Image from 'next/image';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { FloatingCube } from '@/components/FloatingCube';

const stickers = [
  { label: 'SQL ⚡', pos: 'top-[16%] left-[6%]', rotate: '-10deg', anim: 'animate-float', bg: 'bg-emerald-300 text-gray-950' },
  { label: 'Power BI 📊', pos: 'top-[13%] right-[7%]', rotate: '8deg', anim: 'animate-float-delayed', bg: 'bg-sky-300 text-gray-950' },
  { label: 'Python 🐍', pos: 'bottom-[26%] left-[9%]', rotate: '6deg', anim: 'animate-float-slow', bg: 'bg-amber-200 text-gray-950' },
  { label: 'Forecasting 📈', pos: 'bottom-[22%] right-[6%]', rotate: '-7deg', anim: 'animate-float', bg: 'bg-fuchsia-200 text-gray-950' },
];

export const HeroSection = () => {
  const [par, setPar] = useState({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    setPar({
      x: (e.clientX / innerWidth - 0.5) * 36,
      y: (e.clientY / innerHeight - 0.5) * 28,
    });
  };

  return (
    <div
      className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'
      onMouseMove={handleMove}
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="size-[620px] hero-ring" />
      <div className="size-[820px] hero-ring" />
      <div className="size-[1020px] hero-ring" />
      <div className="size-[1220px] hero-ring" />
      <div className="size-[1420px] hero-ring" />
      <div className="size-[1620px] hero-ring" />
      <div className="size-[1820px] hero-ring" />
      <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="6s">
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="6s">
        <SparkleIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s" >
        <div className="size-2 rounded-full bg-emerald-300/20"></div>
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="6s">
        <SparkleIcon className="size-10 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="40s" shouldSpin spinDuration="6s">
        <StarIcon className="size-8 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
        <div className="size-3 rounded-full bg-emerald-300/20"></div>
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="3s">
        <SparkleIcon className="size-14 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
        <div className="size-3 rounded-full bg-emerald-300/20"></div>
      </HeroOrbit>
      <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      </div>

      {/* ---- 3D floating layer (mouse parallax) ---- */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          transform: `translate3d(${par.x}px, ${par.y}px, 0)`,
          transition: 'transform 0.25s ease-out',
        }}
      >
        {/* 3D cube */}
        <div className="absolute top-[24%] right-[10%] animate-float-slow">
          <FloatingCube size={110} />
        </div>
        {/* gradient orbs */}
        <div className="absolute top-[18%] left-[16%] size-40 rounded-full bg-sky-400/20 blur-3xl animate-float" />
        <div className="absolute bottom-[20%] right-[18%] size-52 rounded-full bg-emerald-300/15 blur-3xl animate-float-delayed" />
        {/* skill stickers */}
        {stickers.map((s) => (
          <div
            key={s.label}
            className={`absolute ${s.pos} ${s.anim}`}
            style={{ '--fl-rotate': s.rotate } as CSSProperties}
          >
            <span className={`sticker ${s.bg}`}>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="container relative">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Person peeking from behind laptop" />
          <div className="bg-gray-950 border-gray-800 px-4 py-2 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
            </div>
            <div className="text-sm font-medium">Available for Supply Chain & Analytics Roles</div>
          </div>
          <div className="max-w-2xl mx-auto">
            <h1 className="font-serif text-4xl md:text-6xl text-center mt-8 tracking-wide text-glow">
              Turning <span className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">supply chain data</span> into smarter, faster decisions
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
           I&apos;m Nidhi Siri, a supply chain and operations analyst with 4 years of experience across FedEx, PWC, and Accenture.
           I turn operational data into practical decisions through SQL, Power BI, forecasting, and performance analysis —
           improving network visibility, strengthening planning processes, and supporting service-level performance.
            </p>
          </div>
          {/* mini sticker row for mobile (3D layer is hidden on small screens) */}
          <div className="flex md:hidden flex-wrap justify-center gap-2 mt-6">
            {stickers.map((s) => (
              <span key={s.label} className={`sticker ${s.bg} text-xs`}>{s.label}</span>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
            <button className="inline-flex items-center gap-2 border-white/15 px-6 h-12 rounded-xl hover:bg-white/10 transition">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
              <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl -z-0 hover:scale-105 transition">
              <span>👋</span>
              <span className="font-semibold"><a href="/resume.pdf" download>Download Resume</a></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
