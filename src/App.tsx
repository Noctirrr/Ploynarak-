import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronDown,
  Heart,
  Feather,
  Sparkles,
  ShieldCheck,
  Clock,
  Compass,
} from 'lucide-react';
import AmbientBackground from './components/AmbientBackground';
import AudioPlayer from './components/AudioPlayer';
import CareChecklist from './components/CareChecklist';

export default function App() {
  const [hasSentWarmth, setHasSentWarmth] = useState(false);
  const [warmthCount, setWarmthCount] = useState(0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSendWarmth = () => {
    setHasSentWarmth(true);
    setWarmthCount((prev) => prev + 1);
    setTimeout(() => {
      setHasSentWarmth(false);
    }, 3200);
  };

  return (
    <div className="relative min-h-screen text-[#2C2426]">
      {/* Dynamic Animated Ambient Background */}
      <AmbientBackground />

      {/* Top Bar Navigation (Strict 3-zone contract) */}
      <header className="sticky top-0 z-50 w-full border-b border-white/40 bg-[#FAF8F5]/65 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8 px-6 py-4 sm:px-8">
          {/* Zone 1: Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            type="button"
            className="group flex items-center gap-2.5 text-left shrink-0"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F6E5E9] text-[#A65B6E] transition-transform duration-300 group-hover:scale-105">
              <Heart className="h-3.5 w-3.5 stroke-[2.2]" />
            </span>
            <span className="text-sm font-medium tracking-tight text-[#3A2D31] transition-colors group-hover:text-[#A65B6E] whitespace-nowrap">
              For My Favorite Person
            </span>
          </button>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-medium tracking-wide text-[#756468]">
            <button
              onClick={() => scrollToSection('hero')}
              type="button"
              className="transition-colors hover:text-[#2C2426] whitespace-nowrap cursor-pointer"
            >
              หน้าแรก
            </button>
            <button
              onClick={() => scrollToSection('message')}
              type="button"
              className="transition-colors hover:text-[#2C2426] whitespace-nowrap cursor-pointer"
            >
              มีอะไรอยากบอก
            </button>
            <button
              onClick={() => scrollToSection('promises')}
              type="button"
              className="transition-colors hover:text-[#2C2426] whitespace-nowrap cursor-pointer"
            >
              ความห่วงใย
            </button>
            <button
              onClick={() => scrollToSection('letter')}
              type="button"
              className="transition-colors hover:text-[#2C2426] whitespace-nowrap cursor-pointer"
            >
              จดหมายจากเค้า
            </button>
          </nav>

          {/* Zone 3: Primary Action / Audio Player */}
          <div className="flex items-center gap-3 shrink-0">
            <AudioPlayer />
          </div>
        </div>
      </header>

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col items-center">
        {/* ========================================================================= */}
        {/* HERO SECTION                                                             */}
        {/* ========================================================================= */}
        <section
          id="hero"
          className="relative flex min-h-[calc(100vh-65px)] w-full max-w-4xl flex-col items-center justify-center px-6 py-20 text-center sm:px-8"
        >
          {/* Subtle Glow Ring behind Hero */}
          <div
            className="animate-soft-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[420px] w-[420px] rounded-full pointer-events-none -z-10"
            style={{
              background: 'radial-gradient(circle, rgba(254, 226, 233, 0.7) 0%, rgba(246, 235, 222, 0.3) 60%, transparent 80%)',
            }}
          />

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-[#EFE0E4] bg-white/70 px-4 py-1.5 text-xs font-medium tracking-widest text-[#9C6572] uppercase shadow-xs backdrop-blur-md"
          >
            <Sparkles className="h-3 w-3 stroke-[2.2]" />
            <span>For My Favorite Person</span>
          </motion.div>

          {/* Large Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-3xl font-semibold tracking-tight text-[#2B2325] sm:text-5xl md:text-6xl sm:leading-[1.28]"
            style={{ textWrap: 'balance' }}
          >
            <span className="block">เค้าขอให้เธอหายไวๆ นะคะ</span>
            <span className="mt-2 block bg-gradient-to-r from-[#A65B6E] via-[#8C4F5F] to-[#73404D] bg-clip-text text-transparent">
              คนเก่งของเค้า
            </span>
          </motion.h1>

          {/* Short Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl text-base font-light leading-relaxed text-[#5C4F53] sm:text-lg sm:leading-loose"
          >
            <p className="font-normal text-[#3E3437]">
              วันนี้อาจเป็นวันที่ร่างกายของเธอเหนื่อยโดนแดดมาทั้งวันน ทำงานหนัห
            </p>
            <p className="mt-1 text-[#876E74]">แต่ไม่เป็นไรนะ</p>

            <div className="my-5 flex items-center justify-center gap-2 text-[#D2B5BC]">
              <span className="h-px w-8 bg-[#E6D4D8]" />
              <Heart className="h-3 w-3 fill-[#E6D4D8] stroke-none" />
              <span className="h-px w-8 bg-[#E6D4D8]" />
            </div>

            <div className="space-y-1 text-[#4A3E42]">
              <p>เค้าอยากให้เธอพักเยอะๆ</p>
              <p>กินข้าวให้ครบ</p>
              <p>ดื่มน้ำเยอะๆ</p>
              <p>อย่าลืมกืนยาด้วยนะ</p>
            </div>

            <p className="mt-5 text-[#876E74]">
              เดี๋ยวทุกอย่างก็ค่อยๆ ดีขึ้น
            </p>

            <div className="mt-5 rounded-2xl bg-[#FFF6F8]/80 p-4 border border-[#F2DEE3]/70 backdrop-blur-xs">
              <p className="font-medium text-[#7D4554]">
                เพราะคนเก่งของเค้า
              </p>
              <p className="text-[#6D3D4A]">
                เก่งมากพอที่จะผ่านมันไปได้เสมอ
              </p>
            </div>
          </motion.div>

          {/* Center Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <button
              onClick={() => scrollToSection('message')}
              type="button"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/80 bg-gradient-to-r from-[#B06B7D] to-[#9E576A] px-8 py-3.5 text-sm font-medium text-white shadow-[0_12px_30px_-6px_rgba(176,107,125,0.45)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_18px_36px_-6px_rgba(176,107,125,0.55)] active:scale-95 cursor-pointer"
            >
              {/* Subtle glass reflection sweep */}
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-1000 group-hover:translate-x-full pointer-events-none"
                aria-hidden="true"
              />
              <span className="relative tracking-wide">อ่านข้อความจากเค้า</span>
              <ChevronDown className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
          </motion.div>

          {/* Subtle Bottom Scroll Cue */}
          <div className="absolute bottom-6 flex flex-col items-center gap-1 opacity-50 transition-opacity hover:opacity-90">
            <span className="text-[10px] font-medium tracking-widest text-[#9C848A] uppercase">
              เลื่อนลงเพื่ออ่านต่อ
            </span>
            <ChevronDown className="h-3.5 w-3.5 animate-bounce text-[#9C848A]" />
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: LARGE GLASS CARD                                              */}
        {/* ========================================================================= */}
        <section
          id="message"
          className="relative w-full max-w-4xl px-6 py-24 sm:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel relative overflow-hidden rounded-[36px] p-8 sm:p-14 md:p-16 text-center"
          >
            {/* Top Light Prism Line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

            {/* Decorative Corner Ambient Glow */}
            <div
              className="absolute -top-24 -right-24 h-64 w-64 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(254, 224, 231, 0.7) 0%, transparent 70%)',
              }}
            />

            {/* Section Tag */}
            <div className="inline-flex items-center gap-1.5 text-xs font-medium tracking-widest text-[#B37886] uppercase">
              <Feather className="h-3.5 w-3.5 stroke-[2]" />
              <span>Special Note</span>
            </div>

            {/* Section 2 Heading */}
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#2D2427] sm:text-4xl">
              มีอะไรอยากบอกเธอ
            </h2>

            {/* Hairline Divider */}
            <div className="mx-auto my-8 h-px w-20 bg-gradient-to-r from-transparent via-[#E2CED3] to-transparent" />

            {/* Section 2 Body Text */}
            <div className="mx-auto max-w-lg space-y-7 text-base font-light leading-relaxed text-[#514347] sm:text-lg sm:leading-loose">
              <div>
                <p>เค้ารู้ว่าช่วงนี้เธอคงไม่สบาย</p>
                <p className="text-[#78666A]">ทั้งเหนื่อย ทั้งเพลีย</p>
              </div>

              <div className="text-sm font-medium tracking-wider text-[#A16775]">
                แต่เค้าอยากให้รู้ไว้ว่า
              </div>

              <div>
                <p>ไม่ว่าจะเป็นวันที่สดใส</p>
                <p>หรือวันที่เธอไม่มีแรงเลย</p>
              </div>

              <div className="rounded-2xl bg-white/70 py-4 px-6 border border-white/90 shadow-xs">
                <p className="text-lg font-medium text-[#8F4E60] sm:text-xl">
                  เค้าก็ยังอยู่ตรงนี้
                </p>
              </div>

              <p className="text-base font-normal text-[#69585C]">
                คอยเป็นกำลังใจให้เธอเสมอ
              </p>

              <div className="pt-2">
                <p className="text-xs font-medium tracking-widest text-[#A87985] uppercase">
                  เพราะสำหรับเค้า
                </p>
                <p className="mt-2 text-xl font-medium tracking-tight text-[#2B2224] sm:text-2xl">
                  ความสุขของเธอ
                </p>
                <p className="text-xl font-semibold text-[#A85468] sm:text-2xl">
                  สำคัญมากจริงๆ
                </p>
              </div>
            </div>

            {/* Bottom Accent Glow */}
            <div className="mt-12 flex items-center justify-center gap-3 text-xs text-[#9B898E]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#DEC6CD]" />
              <span>อยู่เคียงข้างเธอเสมอในทุกๆ วัน</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#DEC6CD]" />
            </div>
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: THREE BEAUTIFUL CARDS                                         */}
        {/* ========================================================================= */}
        <section
          id="promises"
          className="relative w-full max-w-6xl px-6 py-20 sm:px-8"
        >
          <div className="text-center mb-12">
            <span className="text-xs font-medium tracking-widest text-[#AD7683] uppercase">
              Gentle Reminders
            </span>
            <h2 className="mt-2 text-2xl font-semibold text-[#2D2326] sm:text-3xl">
              สามสิ่งที่อยากฝากไว้ให้คนดี
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:gap-8">
            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card glass-card-interactive group relative flex flex-col justify-between rounded-3xl p-8 sm:p-9 text-left"
            >
              {/* Card Top Pill Badge */}
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FBE8ED] text-[#A65B6E] transition-colors group-hover:bg-[#F7D8E0]">
                    <Clock className="h-5 w-5 stroke-[2]" />
                  </div>
                  <span className="text-[11px] font-medium tracking-wider text-[#A87985] uppercase">
                    Card 01
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-medium tracking-tight text-[#2B2325]">
                    พักเยอะๆนะคะ
                  </h3>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-[#A8586C]">
                    เค้าร้ากเธอออ
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-[#F2E5E8] pt-5">
                <p className="text-xs font-light text-[#7C6C70] leading-relaxed">
                  หลับตา พักผ่อน ทิ้งเรื่องวุ่นวายไว้ข้างหลังนะคนดี มีเค้ารักเธออยู่เสมอตรงนี้
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card glass-card-interactive group relative flex flex-col justify-between rounded-3xl p-8 sm:p-9 text-left"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F6ECE2] text-[#8C644E] transition-colors group-hover:bg-[#F2E2D4]">
                    <ShieldCheck className="h-5 w-5 stroke-[2]" />
                  </div>
                  <span className="text-[11px] font-medium tracking-wider text-[#A17C6C] uppercase">
                    Card 02
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-medium tracking-tight text-[#2B2325]">
                    กินข้าวใหีตรงเวลา
                  </h3>
                  <div className="mt-3 space-y-1.5 text-sm text-[#59494D]">
                    <p>ถึงจะกินได้น้อยก็ไม่เป็นไร</p>
                    <p className="font-medium text-[#7D4D36]">
                      แต่ขอให้ได้กินก็พอ
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-[#F1E8DF] pt-5">
                <p className="text-xs font-light text-[#7C6C70] leading-relaxed">
                  อย่าปล่อยให้ท้องว่างนะ ถึงแม้จะไม่ค่อยหิว ทานอะไรร้อนๆ สักนิดก็ยังดีนะ
                </p>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card glass-card-interactive group relative flex flex-col justify-between rounded-3xl p-8 sm:p-9 text-left"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F4E9EE] text-[#93526B] transition-colors group-hover:bg-[#EFDCE4]">
                    <Compass className="h-5 w-5 stroke-[2]" />
                  </div>
                  <span className="text-[11px] font-medium tracking-wider text-[#9E6E82] uppercase">
                    Card 03
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-medium tracking-tight text-[#2B2325]">
                    เค้าคอยอยู่ตรงนี้
                  </h3>
                  <div className="mt-3 space-y-1 text-sm text-[#5C4C51]">
                    <p>ถ้าเหนื่อย</p>
                    <p>ถ้าท้อ</p>
                    <p>หรือแค่อยากมีคนอยู่ด้วย</p>
                  </div>
                  <p className="mt-3 text-base font-semibold text-[#93455E]">
                    เค้ายังอยู่ตรงนี้เสมอ
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-[#F0E4E9] pt-5">
                <p className="text-xs font-light text-[#7C6C70] leading-relaxed">
                  ไม่ว่าเมื่อไหร่ ทักมาหาหรือโทรหาเค้าได้ตลอดเลยนะ เค้าพร้อมรับฟังเธอเสมอ
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTERACTIVE CARE CHECKLIST SECTION                                       */}
        {/* ========================================================================= */}
        <section className="relative w-full max-w-4xl px-6 py-12 sm:px-8">
          <CareChecklist />
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: LOVE LETTER                                                   */}
        {/* ========================================================================= */}
        <section
          id="letter"
          className="relative w-full max-w-3xl px-6 py-24 sm:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel relative rounded-[38px] p-8 sm:p-14 md:p-16 shadow-[0_25px_65px_-15px_rgba(205,175,183,0.35)]"
          >
            {/* Letter Top Foil Border */}
            <div className="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-[#EAD6DB] to-transparent" />

            {/* Letter Header */}
            <div className="text-center">
              <span className="text-[11px] font-medium tracking-widest text-[#B57C8A] uppercase">
                Love Letter
              </span>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#2B2224] sm:text-3xl">
                จากคนที่เป็นห่วงเธอที่สุด
              </h2>
              <div className="mx-auto mt-6 h-px w-16 bg-[#E8D4D8]" />
            </div>

            {/* Letter Body Text */}
            <div className="mt-10 space-y-6 text-center text-base font-light leading-relaxed text-[#4A3E42] sm:text-lg sm:leading-loose">
              <div>
                <p className="font-normal text-[#2F2528]">
                  เค้าขอให้เธอหายไวๆ นะคะ
                </p>
                <p className="text-xl font-medium text-[#A65B6E] sm:text-2xl mt-1">
                  คนเก่งของเค้า
                </p>
              </div>

              <p className="text-[#6D5D61]">
                ค่อยๆ ดูแลตัวเองทีละนิด
              </p>

              <div className="mx-auto max-w-xs rounded-2xl bg-white/70 py-4 px-6 border border-white/80 shadow-xs space-y-1.5 text-sm sm:text-base font-medium text-[#7A4553]">
                <p>กินข้าวเยอะๆ</p>
                <p>กินยาให้ตรงเวลา</p>
                <p>พักผ่อนให้เพียงพอ</p>
              </div>

              <p className="pt-2 text-sm text-[#8A797D]">
                ทุกวินาทีที่เธอพักผ่อน เค้าขอส่งพลังใจดีๆ ไปโอบกอดเธอเสมอนะคะ
              </p>
            </div>

            {/* Interactive Warmth Sender */}
            <div className="mt-12 flex flex-col items-center border-t border-[#F2E4E8] pt-8 text-center">
              <button
                onClick={handleSendWarmth}
                type="button"
                className="group relative inline-flex items-center gap-2.5 rounded-full border border-[#E8CED4] bg-white/85 px-6 py-2.5 text-xs font-medium text-[#8F4E60] shadow-xs transition-all duration-300 hover:border-[#D6AAB4] hover:bg-white hover:shadow-md active:scale-95 cursor-pointer"
              >
                <Heart
                  className={`h-4 w-4 transition-transform duration-300 ${
                    hasSentWarmth
                      ? 'scale-125 fill-[#A8586C] text-[#A8586C]'
                      : 'text-[#A8586C] group-hover:scale-110'
                  }`}
                />
                <span>
                  {hasSentWarmth
                    ? 'ส่งกำลังใจไปถึงเธอแล้ว'
                    : 'กดเพื่อส่งความคิดถึงกลับไป'}
                </span>
                {warmthCount > 0 && (
                  <span className="ml-1 rounded-full bg-[#FAF0F3] px-2 py-0.5 text-[10px] font-semibold text-[#A8586C] tabular-nums">
                    {warmthCount}
                  </span>
                )}
              </button>

              <AnimatePresence>
                {hasSentWarmth && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    className="mt-3 text-xs font-medium text-[#8F4E60]"
                  >
                    ความอบอุ่นและกำลังใจถูกส่งไปหาเธอเรียบร้อยแล้วนะคะ
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* FOOTER                                                                    */}
        {/* ========================================================================= */}
        <footer className="w-full border-t border-white/50 bg-[#FAF8F5]/80 py-12 text-center backdrop-blur-md">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div className="flex items-center justify-center gap-2 text-xs font-medium tracking-widest text-[#9C7A83] uppercase">
              <Heart className="h-3 w-3 fill-[#A65B6E] text-[#A65B6E]" />
              <span>Made with love</span>
            </div>
            <p className="mt-3 text-[11px] text-[#A6979B]">
              มอบให้เธอด้วยความห่วงใยและรักทั้งหมดที่มี
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
