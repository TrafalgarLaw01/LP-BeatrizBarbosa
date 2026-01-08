
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageCircle, 
  Instagram, 
  Star, 
  Heart, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

// --- Constants ---
const WHATSAPP_URL = "https://api.whatsapp.com/message/T6MCVVEPJR66N1?autoload=1&app_absent=0&utm_source=ig";
const INSTAGRAM_URL = "https://www.instagram.com/studiobeatrizbarbosa/";

// --- Sakura Decor Components ---

const SakuraPetal: React.FC<{ delay: number; x: string; duration: number }> = ({ delay, x, duration }) => (
  <motion.div
    initial={{ y: -20, x: x, opacity: 0, rotate: 0 }}
    animate={{ 
      y: ['0vh', '110vh'], 
      x: [x, `${parseFloat(x) + (Math.random() * 20 - 10)}%`],
      opacity: [0, 1, 1, 0],
      rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)]
    }}
    transition={{ 
      duration: duration, 
      repeat: Infinity, 
      delay: delay,
      ease: "linear"
    }}
    className="absolute w-3 h-3 md:w-4 md:h-4 opacity-40 pointer-events-none"
    style={{ left: x }}
  >
    <svg viewBox="0 0 512 512" fill="#c9b2c2" xmlns="http://www.w3.org/2000/svg">
      <path d="M256,0C256,0,200,100,200,200C200,300,256,512,256,512C256,512,312,300,312,200C312,100,256,0,256,0Z" />
    </svg>
  </motion.div>
);

const SakuraBackground: React.FC = () => (
  <div className="sakura-container">
    {Array.from({ length: 15 }).map((_, i) => (
      <SakuraPetal 
        key={i} 
        delay={i * 2} 
        x={`${(i * 7) % 100}%`} 
        duration={10 + Math.random() * 10} 
      />
    ))}
  </div>
);

const SakuraBranch: React.FC<{ className?: string; flip?: boolean }> = ({ className, flip }) => (
  <div className={`absolute pointer-events-none opacity-20 md:opacity-30 select-none ${className} ${flip ? 'scale-x-[-1]' : ''}`}>
    <svg width="300" height="400" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 390C10 390 50 300 150 250C250 200 280 100 280 10" stroke="#745467" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="280" cy="10" r="8" fill="#c9b2c2"/>
      <circle cx="260" cy="40" r="6" fill="#c9b2c2"/>
      <circle cx="240" cy="80" r="10" fill="#c9b2c2"/>
      <circle cx="150" cy="250" r="7" fill="#c9b2c2"/>
      <circle cx="180" cy="220" r="5" fill="#c9b2c2"/>
      <circle cx="200" cy="180" r="4" fill="#c9b2c2"/>
    </svg>
  </div>
);

// --- Sub-components ---

const WhatsAppButton: React.FC<{ text: string; className?: string }> = ({ text, className }) => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`shimmer bg-primary text-white font-semibold py-4 px-8 rounded-full shadow-xl flex items-center justify-center gap-2 transition-all duration-300 ${className}`}
  >
    <MessageCircle size={24} />
    <span className="uppercase tracking-widest text-sm text-center">{text}</span>
  </motion.a>
);

const SectionTitle: React.FC<{ title: string; subtitle?: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="mb-12 text-center relative z-10">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-4xl md:text-5xl font-serif mb-4 ${light ? 'text-white' : 'text-primary'}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <div className="flex items-center justify-center gap-4">
        <div className={`h-[1px] w-8 ${light ? 'bg-white/30' : 'bg-primary/30'}`} />
        <p className={`text-sm uppercase tracking-[0.2em] ${light ? 'text-white/70' : 'text-primary/60'}`}>{subtitle}</p>
        <div className={`h-[1px] w-8 ${light ? 'bg-white/30' : 'bg-primary/30'}`} />
      </div>
    )}
  </div>
);

// --- Main Components ---

const Hero: React.FC = () => (
  <section className="relative min-h-screen flex flex-col bg-[#fdfbfd] overflow-hidden">
    <SakuraBranch className="top-0 left-[-50px] rotate-[-15deg]" />
    
    <div className="relative w-full h-[55vh] md:h-screen md:absolute md:right-0 md:top-0 md:w-1/2 overflow-hidden">
      <motion.img 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        src="https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/biabarbosa/p2.PNG" 
        alt="Beatriz Barbosa" 
        className="w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbfd] via-transparent to-transparent md:hidden" />
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#fdfbfd] via-transparent to-transparent" />
    </div>

    <div className="container mx-auto px-6 relative z-20 flex-1 flex flex-col justify-center -mt-16 md:mt-0">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl md:bg-transparent bg-white/70 backdrop-blur-md p-8 md:p-0 rounded-3xl shadow-xl md:shadow-none border border-white/40 md:border-none"
      >
        <div className="mb-4 inline-block px-4 py-1 rounded-full border border-primary/20 bg-primary/5 text-[10px] uppercase tracking-[0.3em] text-primary/80 font-bold">
          Nail Designer Expert
        </div>
        
        <h1 className="text-4xl md:text-7xl font-serif text-primary mb-6 leading-tight">
          Eu sou Beatriz Barbosa,<br/>
          <span className="italic">sua Nail Designer em Dourados.</span>
        </h1>

        <p className="text-gray-700 mb-8 font-light text-base md:text-xl leading-relaxed">
          Especialista em unhas de luxo que unem saúde, resistência e a estética impecável de uma verdadeira flor de cerejeira.
        </p>

        <div className="flex flex-col items-start gap-4">
          <WhatsAppButton text="Agendar meu horário VIP" className="w-full md:w-auto text-lg" />
          <div className="flex items-center gap-2 mt-2">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-secondary-2 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" />
                </div>
              ))}
            </div>
            <p className="text-[11px] text-primary/70 uppercase tracking-widest font-semibold ml-2">
              +500 clientes satisfeitas
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const About: React.FC = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <SakuraBranch className="bottom-0 right-[-100px] rotate-[180deg] opacity-10" flip />
    
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-6 -left-6 w-32 h-32 border-l border-t border-gold opacity-30" />
          <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
            <img 
              src="https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/biabarbosa/quem%20sou%20eu.PNG" 
              alt="Sobre Bia Barbosa" 
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-serif text-primary">
            A arte de florescer,<br/>
            <span className="italic">cuidado em cada detalhe.</span>
          </h3>
          
          <p className="text-gray-600 font-light leading-relaxed">
            Olá, eu sou a Bia. Assim como a Sakura simboliza a beleza efêmera e preciosa, acredito que suas mãos merecem ser cuidadas como uma obra de arte. Meu trabalho foca na harmonia entre estética e saúde.
          </p>

          <ul className="space-y-4">
            {[
              "Técnicas avançadas de alongamento",
              "Materiais de altíssimo padrão",
              "Biossegurança e higiene rigorosa",
              "Atendimento personalizado e calmo"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-primary/80">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Gallery: React.FC = () => {
  const items = [
    { label: 'Baby Boomer', img: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/biabarbosa/ps-babyboomer1.PNG", desc: "Degradê suave e luxuoso." },
    { label: 'Fibra de Vidro', img: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/biabarbosa/ps-fibradevidro1.PNG", desc: "Resistência com naturalidade." },
    { label: 'Francesa Reversa', img: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/biabarbosa/ps-francesareversa1.PNG", desc: "O clássico redefinido." },
    { label: 'Postiça Realista', img: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/biabarbosa/ps-posticarealista1.PNG", desc: "Praticidade e beleza." },
    { label: 'Fibra Slim', img: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/biabarbosa/ps-fibradevidro2.PNG", desc: "Curvatura perfeita." },
    { label: 'Design Artístico', img: "https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/biabarbosa/ps8.PNG", desc: "Sua personalidade nas unhas." }
  ];

  return (
    <section className="py-24 bg-[#fdfbfd] relative overflow-hidden">
      <SakuraBranch className="top-[-100px] left-[-100px] opacity-10 rotate-[45deg]" />
      <div className="container mx-auto px-6">
        <SectionTitle title="Portfólio de Luxo" subtitle="Sua beleza floresce aqui" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-lg aspect-[4/5] bg-white"
            >
              <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full shadow-sm">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{item.label}</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h4 className="text-white font-serif text-2xl mb-1">{item.label}</h4>
                <p className="text-white/80 text-xs font-light tracking-wide">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-8 py-3 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-300 group">
            <Instagram size={20} className="group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-medium uppercase tracking-[0.1em]">Conhecer mais trabalhos</span>
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Features: React.FC = () => {
  const cards = [
    { icon: <ShieldCheck size={32} strokeWidth={1} />, title: "Segurança Total", desc: "Higiene nível hospitalar em todos os instrumentos." },
    { icon: <Sparkles size={32} strokeWidth={1} />, title: "Materiais Elite", desc: "Produtos importados com maior durabilidade." },
    { icon: <Clock size={32} strokeWidth={1} />, title: "Tempo VIP", desc: "Atendimento calmo, sem pressa, focado na perfeição." },
    { icon: <Heart size={32} strokeWidth={1} />, title: "Autoestima", desc: "O cuidado que você precisa para se sentir poderosa." }
  ];

  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <SakuraBranch className="top-10 right-[-100px] opacity-20" flip />
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Por que eu?" subtitle="Diferenciais Premium" light />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
            >
              <div className="text-secondary-2 mb-6">{card.icon}</div>
              <h4 className="text-xl font-serif mb-3 tracking-wide">{card.title}</h4>
              <p className="text-sm text-white/60 font-light leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Studio: React.FC = () => (
  <section className="py-24 bg-[#f7f3f7] relative overflow-hidden">
    <SakuraBranch className="bottom-[-150px] left-[-50px] rotate-[20deg] opacity-10" />
    <div className="container mx-auto px-6">
      <SectionTitle title="O Studio" subtitle="Um refúgio para você" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 order-2 md:order-1">
          <h3 className="text-3xl font-serif text-primary italic">Seu momento Sakura.</h3>
          <p className="text-gray-600 font-light leading-relaxed">
            Localizado no coração de Dourados, meu espaço foi pensado para ser seu momento de paz. Desfrute de um café premium enquanto transformamos seu olhar para suas mãos.
          </p>
          <div className="flex items-center gap-3 text-primary/70">
            <MapPin size={20} className="text-secondary-2" />
            <span className="text-sm font-medium">Dourados, Mato Grosso do Sul</span>
          </div>
          <WhatsAppButton text="Agendar Visita" />
        </div>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2 group h-[400px]">
           <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/biabarbosa/studiovid.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary/10" />
          <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Ambiente Real</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="antialiased selection:bg-primary/20 selection:text-primary relative">
      <SakuraBackground />
      
      <header className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-primary/5 px-6 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <img src="https://pub-896d94e4258845da8ab3cf67151fb07f.r2.dev/biabarbosa/logo.png" alt="Logo" className="h-10 md:h-12" />
          <a href={WHATSAPP_URL} className="text-[10px] md:text-xs font-bold text-primary uppercase tracking-[0.2em] border-b border-primary/30 pb-1 hover:border-primary transition-all">
            Agendar Horário
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Gallery />
        <Features />
        <Studio />
        
        <section className="py-24 text-center bg-white relative overflow-hidden">
           <SakuraBranch className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] scale-150" />
           <div className="container mx-auto px-6 relative z-10">
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-8">Deixe suas unhas florescerem.</h2>
              <p className="text-gray-500 mb-10 max-w-lg mx-auto font-light">
                Agende agora seu atendimento exclusivo e descubra por que centenas de mulheres confiam na Bia Barbosa.
              </p>
              <WhatsAppButton text="Garantir minha vaga" className="mx-auto" />
              <div className="mt-8 flex items-center justify-center gap-2 text-primary/40 text-[10px] uppercase tracking-[0.3em]">
                <Sparkles size={12} />
                <span>Atendimento Individualizado em Dourados</span>
                <Sparkles size={12} />
              </div>
           </div>
        </section>
      </main>

      <footer className="py-12 bg-[#fdfbfd] border-t border-primary/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary font-serif italic text-xl mb-4">Beatriz Barbosa</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href={INSTAGRAM_URL} className="text-primary/40 hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href={WHATSAPP_URL} className="text-primary/40 hover:text-primary transition-colors"><MessageCircle size={20} /></a>
          </div>
          <p className="text-[9px] text-gray-300 uppercase tracking-widest">&copy; 2024 Beatriz Barbosa • Premium Nail Experience</p>
        </div>
      </footer>

      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="fixed bottom-6 right-6 z-50 md:hidden">
        <a href={WHATSAPP_URL} className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shimmer ring-4 ring-white">
          <MessageCircle size={28} />
        </a>
      </motion.div>
    </div>
  );
};

export default App;
