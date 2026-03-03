/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Layout, 
  BarChart3, 
  Users, 
  ChevronDown,
  Clock,
  Quote,
  Star
} from "lucide-react";
import React, { useState } from "react";

const WHATSAPP_LINK = "https://wa.me/5561991778136?text=Olá! Gostaria de um diagnóstico para o meu negócio.";

const SelectedText = ({ children, dark = false }: { children: React.ReactNode, dark?: boolean }) => {
  const bgColor = dark ? "bg-white/10" : "bg-zinc-900/10";
  const borderColor = dark ? "bg-white" : "bg-zinc-900";
  
  return (
    <span className="relative inline-block mx-1 px-1">
      <span className={`absolute inset-0 ${bgColor} -z-10`} />
      <span className={`absolute -left-0.5 top-0 h-full w-[1.5px] ${borderColor}`}>
        <span className={`absolute -top-1 -left-[3.25px] w-2 h-2 ${borderColor} rounded-full`} />
      </span>
      <span className={`absolute -right-0.5 top-0 h-full w-[1.5px] ${borderColor}`}>
        <span className={`absolute -bottom-1 -left-[3.25px] w-2 h-2 ${borderColor} rounded-full`} />
      </span>
      <span className="heading-serif">{children}</span>
    </span>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass h-16 flex items-center justify-between px-6 md:px-12">
    <div className="flex items-center">
      <span className="text-xl font-bold tracking-tight text-black">
        Symplorium<span className="text-[10px] align-top ml-0.5 font-medium">™</span>
      </span>
    </div>
    <a 
      href={WHATSAPP_LINK} 
      target="_blank" 
      rel="noopener noreferrer"
      className="hidden md:flex items-center gap-2 bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
    >
      <MessageCircle size={16} />
      Diagnóstico Grátis
    </a>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_50%)]" />
    
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl text-center"
    >
      <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase bg-zinc-100 rounded-full text-zinc-600">
        Marketing sem enrolação
      </span>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
        PARE DE PAGAR AGÊNCIA E{" "}
        <SelectedText>CONTINUAR NO ZERO.</SelectedText>{" "}
        VAMOS SIMPLIFICAR E VENDER.
      </h1>
      <p className="text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl mx-auto leading-relaxed">
        Se você já investiu e sentiu “não tive resultado nenhum”, você não está sozinho. 
        Aqui, processos complexos viram simples — e tudo sai alinhado de uma vez.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 bg-zinc-900 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200"
        >
          <MessageCircle className="text-white" />
          QUERO UM DIAGNÓSTICO NO WHATSAPP
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          <div className="absolute -top-3 -right-3 bg-white text-zinc-900 text-[10px] font-bold px-2 py-1 rounded-md shadow-lg flex items-center gap-1">
            <Clock size={10} /> RESPOSTA RÁPIDA
          </div>
        </a>
      </div>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
      className="mt-16 relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-zinc-200"
    >
      <img 
        src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
        alt="Empreendedor analisando métricas"
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
        <div className="glass p-4 rounded-2xl max-w-xs">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Métricas Reais</span>
          </div>
          <div className="h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
            <div className="h-full bg-zinc-900 w-3/4" />
          </div>
          <p className="text-xs mt-2 font-medium">Conversão simplificada em 75%</p>
        </div>
      </div>
    </motion.div>
  </section>
);

const PainPoints = () => (
  <section className="section-padding bg-zinc-50">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
          VOCÊ JÁ PASSOU <SelectedText>POR ISSO?</SelectedText>
        </h2>
        <div className="space-y-6">
          <p className="text-lg text-zinc-600 leading-relaxed">
            Você contrata uma agência. Ela entrega coisas “bonitinhas mas não trazem retorno”. 
            Aí vem “relatórios cheios de números vazios”… e você só pensa: 
            <span className="font-semibold text-zinc-900 italic"> “De que adianta ser bonito se não traz dinheiro?”</span>
          </p>
          <p className="text-lg text-zinc-600 leading-relaxed">
            E quando você tenta ajustar, parece que “não falo a mesma língua da minha agência”. 
            No fim, fica aquela sensação: “Foi uma boa onda, porém não entregou o que prometia.”
          </p>
        </div>
      </div>
      <div className="relative">
        <img 
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop" 
          alt="Pessoa frustrada com planilhas"
          className="rounded-3xl shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl shadow-lg max-w-[240px]">
          <p className="text-sm font-medium text-zinc-500 mb-2">Relatório de Agência Comum</p>
          <div className="space-y-2">
            <div className="h-2 w-full bg-zinc-100 rounded" />
            <div className="h-2 w-3/4 bg-zinc-100 rounded" />
            <div className="h-2 w-1/2 bg-zinc-100 rounded" />
          </div>
          <p className="text-xs mt-4 text-red-500 font-bold">ROI: ?????</p>
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          A SYMPLORIUM SIMPLIFICA TUDO <br />
          <SelectedText>& DEIXA 100% ALINHADO</SelectedText>
        </h2>
        <p className="text-xl text-zinc-500 max-w-3xl mx-auto">
          A Symplorium é “Onde processos complexos se tornam simples”. 
          Você não precisa ficar repetindo briefing para designer, gestor de tráfego e quem faz a landing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
            alt="Equipe planejando"
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="order-1 md:order-2 space-y-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center">
              <Users className="text-zinc-900" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Reunião de Alinhamento</h3>
              <p className="text-zinc-500">A gente começa com uma reunião rápida para entender seu negócio de verdade.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center">
              <Layout className="text-zinc-900" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Plano Estratégico</h3>
              <p className="text-zinc-500">Montamos um plano de curto, médio e longo prazo — focado no que traz dinheiro primeiro.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center">
              <Zap className="text-zinc-900" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Execução Sem Enrolação</h3>
              <p className="text-zinc-500">Executamos o que dá resultado primeiro. Sem briefings infinitos, apenas ação.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Benefits = () => (
  <section className="section-padding bg-zinc-900 text-white overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12">
        <motion.div 
          whileHover={{ y: -10 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10"
        >
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
            <Clock className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">1) MENOS CONFUSÃO. MAIS VELOCIDADE.</h3>
          <p className="text-zinc-400 mb-6">
            Um briefing, um plano e uma execução alinhada. Tráfego, criativos e landing conversando entre si.
          </p>
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-white">
            <span>Artes</span>
            <ArrowRight size={12} />
            <span>Tráfego</span>
            <ArrowRight size={12} />
            <span>Landing</span>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10"
        >
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
            <BarChart3 className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">2) MENOS “ACHISMO”. MAIS CONTEXTO.</h3>
          <p className="text-zinc-400 mb-6">
            Você recebe comunicação constante com contexto. Sem relatórios cheios de números vazios — só o que importa para vender.
          </p>
          <div className="bg-white/10 p-4 rounded-xl">
            <div className="flex justify-between text-[10px] mb-1">
              <span>Leads Qualificados</span>
              <span className="text-white">+24%</span>
            </div>
            <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white w-4/5" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10"
        >
          <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
            <CheckCircle2 className="text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4">3) IMAGEM PREMIUM QUE TRAZ CONFIANÇA</h3>
          <p className="text-zinc-400 mb-6">
            Artes, identidade e página com cara de marca séria. Porque, sim: bonito ajuda — mas bonito que converte ajuda mais.
          </p>
          <div className="flex -space-x-2">
            {[1,2,3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-700 overflow-hidden">
                <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
              </div>
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-white text-zinc-900 flex items-center justify-center text-[10px] font-bold">
              +
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <span className="text-lg font-bold group-hover:text-zinc-600 transition-colors">{question}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="mt-4 text-zinc-500 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

const FAQ = () => (
  <section className="section-padding bg-zinc-50">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">PERGUNTAS <SelectedText>FREQUENTES</SelectedText></h2>
      <div className="space-y-2">
        <FAQItem 
          question="O que vem primeiro: tráfego, artes ou landing?" 
          answer="Depende do seu momento. A gente faz uma reunião, entende seu cenário e define o próximo passo mais inteligente." 
        />
        <FAQItem 
          question="Em quanto tempo começo a ver resultado?" 
          answer="Você vê organização e direção já no começo. Resultado de vendas/leads depende do seu mercado, oferta e verba — e a gente ajusta com base nos dados reais." 
        />
        <FAQItem 
          question="Quais pacotes vocês têm?" 
          answer="Temos gestão mensal e projetos avulsos. Ex.: Artes + Tráfego a partir de R$ 2.000/mês. Artes + Tráfego + Landing a partir de R$ 3.000. Avulsos: landing a partir de R$ 500, artes a partir de R$ 50, logotipo a partir de R$ 250." 
        />
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="section-padding bg-zinc-900 text-white text-center relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
    <div className="max-w-4xl mx-auto relative z-10">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
        Pronto para parar de “não tive resultado nenhum” e ter um plano claro?
      </h2>
      <p className="text-xl text-zinc-400 mb-12">
        Clique e peça seu diagnóstico gratuito agora mesmo.
      </p>
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-4 bg-white text-zinc-900 px-10 py-5 rounded-2xl text-xl font-bold hover:bg-zinc-100 transition-all shadow-2xl"
      >
        <MessageCircle className="text-zinc-900" />
        QUERO UM DIAGNÓSTICO NO WHATSAPP
      </a>
      <div className="mt-8 text-zinc-500 font-medium">
        WhatsApp: (61) 99177-8136 | Online e DF + região
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-zinc-100 text-center">
    <div className="flex items-center justify-center mb-4">
      <span className="text-sm font-bold tracking-tight">
        Symplorium<span className="text-[8px] align-top ml-0.5">™</span>
      </span>
    </div>
    <p className="text-xs text-zinc-400">© 2026 Symplorium. Todos os direitos reservados.</p>
  </footer>
);

const FoundersSection = () => (
  <section className="section-padding bg-white">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="order-2 md:order-1">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          QUEM ESTÁ <SelectedText>POR TRÁS</SelectedText> DA SYMPLORIUM?
        </h2>
        <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
          <p>
            Muito prazer! Somos os fundadores da Symplorium. Acreditamos que o marketing não precisa ser um labirinto de termos técnicos e relatórios sem sentido.
          </p>
          <p>
            Nossa missão é trazer clareza e resultados reais para empreendedores que, assim como você, buscam escala sem perder a essência do seu negócio.
          </p>
          <p className="font-medium text-zinc-900">
            Simplificamos o complexo para que você foque no que realmente importa: crescer.
          </p>
        </div>
      </div>
      <div className="order-1 md:order-2 relative">
        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-zinc-50">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973eb0732da?q=80&w=2070&auto=format&fit=crop" 
            alt="Fundadores da Symplorium"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-zinc-900 text-white p-6 rounded-2xl shadow-xl">
          <p className="text-sm font-bold uppercase tracking-widest mb-1">Fundadores</p>
          <p className="heading-serif text-xl italic">Symplorium™</p>
        </div>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section className="section-padding bg-zinc-950 text-white">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          ESCOLHA O <SelectedText dark>PLANO IDEAL</SelectedText> PARA VOCÊ
        </h2>
        <p className="text-zinc-400 text-lg">Transparência total. Sem taxas escondidas.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Plano Essencial */}
        <motion.div 
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(255,255,255,0.05)" }}
          transition={{ duration: 0.3 }}
          className="relative p-8 rounded-[32px] bg-zinc-900 border border-zinc-800 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white rotate-45 flex items-center justify-center">
                <div className="w-2 h-2 bg-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Gestão Essencial</h3>
          </div>

          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-zinc-400 font-medium">R$</span>
              <span className="text-6xl font-bold tracking-tighter">2.000</span>
              <span className="text-zinc-400 text-xl">,00 /mês</span>
            </div>
          </div>

          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-full bg-zinc-950 border border-white/20 text-white font-bold text-sm tracking-widest uppercase mb-10 flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all group"
          >
            ESCOLHER PLANO ESSENCIAL
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <ul className="space-y-4 flex-grow">
            {[
              "Gestão de Tráfego (Meta/Google)",
              "Criação de Artes Criativas",
              "Relatórios com Contexto",
              "Reuniões de Alinhamento",
              "Suporte via WhatsApp",
              "Estratégia de Funil de Vendas",
              "Análise de Concorrência",
              "Configuração de Pixel/API",
              "Copywriting para Anúncios"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-white" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Plano Full Experience */}
        <motion.div 
          whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(255,255,255,0.1)" }}
          transition={{ duration: 0.3 }}
          className="relative p-[2px] rounded-[32px] bg-gradient-to-b from-white to-zinc-600 flex flex-col shadow-[0_0_40px_rgba(255,255,255,0.05)]"
        >
          <div className="bg-zinc-900 rounded-[30px] p-8 flex flex-col h-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-zinc-900 text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full whitespace-nowrap shadow-lg">
              + Desconto + Benefícios
            </div>

            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rotate-45 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white">Gestão Completa</h3>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-1">
                <span className="text-zinc-400 font-medium">12x de R$</span>
                <span className="text-6xl font-bold tracking-tighter">3.000</span>
                <span className="text-zinc-400 text-xl">,00 /mês</span>
              </div>
              <p className="text-zinc-500 text-sm mt-2">Ou projeto avulso sob consulta</p>
            </div>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-full bg-white text-zinc-900 font-bold text-sm tracking-widest uppercase mb-10 flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all group"
            >
              ESCOLHER PLANO COMPLETO
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <ul className="space-y-4 flex-grow">
              {[
                "Tudo do Plano Essencial",
                "Landing Page de Alta Conversão",
                "Otimização Contínua da Página",
                "Copywriting Persuasivo",
                "Integração de CRM/WhatsApp",
                "Suporte Prioritário 24/7",
                "Diagnóstico de Marca Completo",
                "Grupo de Networking Exclusivo",
                "Pacote de Criativos Premium",
                "Dashboard Pro em Tempo Real"
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm text-zinc-300">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-zinc-500 text-sm">
          Projetos avulsos: Landing Page (R$ 500), Artes (R$ 50), Logotipo (R$ 250). 
          <a href={WHATSAPP_LINK} className="text-white ml-2 underline">Consultar agora</a>
        </p>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="section-padding bg-white overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
          RESULTADOS QUE <SelectedText>FALAM POR SI</SelectedText>
        </h2>
        <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
          Veja o que os empreendedores que decidiram simplificar o marketing com a Symplorium têm a dizer.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            name: "Ana Silva",
            role: "CEO da TechFlow",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
            quote: "A Symplorium mudou nossa percepção sobre marketing. Finalmente temos clareza sobre onde cada centavo está sendo investido e qual o retorno real.",
            stars: 5
          },
          {
            name: "Dr. Ricardo",
            role: "Diretor da Clínica Sorriso",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
            quote: "O alinhamento entre os anúncios e a nossa página de vendas foi o diferencial. Paramos de perder leads por falta de consistência na comunicação.",
            stars: 5
          },
          {
            name: "Mariana Costa",
            role: "Fundadora da EcoModa",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
            quote: "Resultados reais e sem enrolação. A equipe da Symplorium entende as dores do pequeno empreendedor e entrega o que promete.",
            stars: 5
          }
        ].map((testimonial, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-[32px] bg-zinc-50 border border-zinc-100 relative group hover:shadow-xl transition-all duration-500"
          >
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
              <Quote size={20} />
            </div>
            
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.stars)].map((_, i) => (
                <Star key={i} size={16} className="fill-white text-white" />
              ))}
            </div>

            <p className="text-zinc-700 text-lg italic mb-8 leading-relaxed">
              “{testimonial.quote}”
            </p>

            <div className="flex items-center gap-4 border-t border-zinc-200 pt-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900">{testimonial.name}</h4>
                <p className="text-sm text-zinc-500">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <FoundersSection />
      <PainPoints />
      <Solution />
      <Benefits />
      <Testimonials />
      <PricingSection />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
}
