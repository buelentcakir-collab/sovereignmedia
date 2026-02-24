import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, FileCheck, Globe, AlertTriangle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';

const InstitutionalMedia = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(hsl(187 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(187 100% 50% / 0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container-wide mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-4xl">
            <ScrollAnimation animation="fade-up">
              <span className="text-cyan text-sm font-bold uppercase tracking-wider mb-4 block">
                Institutional Media
              </span>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
                Pan-European Campaigns on{' '}
                <span className="text-gradient-cyan">Sovereign Infrastructure</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
                100% European technology. Full TTPA & GDPR compliance. 
                Live across all 27 EU member states in 24 hours.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={300}>
              <Link to="/crisis-contact" className="btn-accent inline-flex items-center gap-3">
                GO LIVE IN 24H
                <ArrowRight size={20} />
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-background">
        <div className="container-wide mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slide-left">
              <div>
                <div className="error-badge mb-6">
                  <AlertTriangle size={18} />
                  <span>The Problem</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-6">
                  Big Tech Can No Longer Serve{' '}
                  <span className="text-gradient-cyan">Institutional Needs</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  TTPA regulation has fundamentally changed political and institutional advertising in Europe. 
                  Google and Meta responded by restricting or outright banning political advertising.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This leaves EU institutions, NGOs, and political parties without digital reach. 
                  The solution isn't waiting for Big Tech—it's building <span className="text-navy font-bold">sovereign media infrastructure</span>.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-right">
              <div className="bg-navy rounded p-10">
                <h3 className="text-xl font-bold text-white mb-6">The Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="text-amber flex-shrink-0 mt-1" size={20} />
                    <p className="text-white/70">Campaigns rejected without explanation</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="text-amber flex-shrink-0 mt-1" size={20} />
                    <p className="text-white/70">Weeks of delays waiting for platform approval</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="text-amber flex-shrink-0 mt-1" size={20} />
                    <p className="text-white/70">Arbitrary content restrictions</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="text-amber flex-shrink-0 mt-1" size={20} />
                    <p className="text-white/70">No recourse or appeal process</p>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-subtle">
        <div className="container-wide mx-auto section-padding">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <span className="text-cyan text-sm font-bold uppercase tracking-wider mb-4 block">
                The Solution
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-6">
                TTPA-Compliant Media Strategy
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="card-elevated h-full">
                <div className="w-14 h-14 rounded bg-cyan/10 flex items-center justify-center mb-6">
                  <Shield className="text-cyan" size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">Independent Ad-Tech Stack</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build campaigns on infrastructure you control. Our independent ad-tech 
                  partnerships ensure you're not at the mercy of Big Tech policy changes.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="card-elevated h-full">
                <div className="w-14 h-14 rounded bg-cyan/10 flex items-center justify-center mb-6">
                  <FileCheck className="text-cyan" size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">Full TTPA Compliance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every campaign is built with TTPA requirements embedded from the start. 
                  Transparency repositories and cross-border reporting are standard.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={300}>
              <div className="card-elevated h-full">
                <div className="w-14 h-14 rounded bg-cyan/10 flex items-center justify-center mb-6">
                  <Globe className="text-cyan" size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">Pan-European Deployment</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Reach across all 27 member states with localized messaging and 
                  culturally adapted creative. One strategy, coordinated execution.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="card-elevated h-full">
                <div className="w-14 h-14 rounded bg-cyan/10 flex items-center justify-center mb-6">
                  <Users className="text-cyan" size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">Audience Resilience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build sustainable audience relationships through owned media channels. 
                  Reduce dependency on third-party algorithms.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="bg-background">
        <div className="container-wide mx-auto section-padding">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <span className="text-cyan text-sm font-bold uppercase tracking-wider mb-4 block">
                Who We Serve
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-6">
                Built for Institutional Communicators
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="text-center p-8 border border-border rounded hover:border-cyan transition-colors">
                <h3 className="text-xl font-bold text-navy mb-4">EU Institutions</h3>
                <p className="text-muted-foreground">
                  European Commission, Parliament, and agency communications requiring 
                  multi-language, cross-border reach.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="text-center p-8 border border-border rounded hover:border-cyan transition-colors">
                <h3 className="text-xl font-bold text-navy mb-4">NGOs & Foundations</h3>
                <p className="text-muted-foreground">
                  Issue advocacy and public awareness campaigns navigating the 
                  complex boundary of political communication.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={300}>
              <div className="text-center p-8 border border-border rounded hover:border-cyan transition-colors">
                <h3 className="text-xl font-bold text-navy mb-4">Political Parties</h3>
                <p className="text-muted-foreground">
                  Election campaigns operating within strict TTPA frameworks 
                  across multiple jurisdictions.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy">
        <div className="container-narrow mx-auto section-padding text-center">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
              Ready to Go Live?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Stop waiting for Big Tech approval. Deploy on sovereign European infrastructure.
            </p>
            <Link to="/crisis-contact" className="btn-accent inline-flex items-center gap-3">
              GO LIVE IN 24H
              <ArrowRight size={20} />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InstitutionalMedia;
