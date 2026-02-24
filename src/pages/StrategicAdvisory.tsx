import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, BarChart3, Lightbulb, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';

const StrategicAdvisory = () => {
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
                Strategic Advisory
              </span>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
                Building the Media{' '}
                <span className="text-gradient-cyan">Competence of Tomorrow</span>
              </h1>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={200}>
              <p className="text-xl text-white/70 leading-relaxed mb-8 max-w-2xl">
                Bridging the gap between marketing goals and regulatory reality. 
                New business strategy, efficiency audits, and expert-led digital media training.
              </p>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={300}>
              <Link to="/crisis-contact" className="btn-accent inline-flex items-center gap-3">
                SCHEDULE A SESSION
                <ArrowRight size={20} />
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background">
        <div className="container-wide mx-auto section-padding">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <span className="text-cyan text-sm font-bold uppercase tracking-wider mb-4 block">
                Advisory Services
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-6">
                How We Help Agencies Evolve
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid lg:grid-cols-3 gap-8">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="card-elevated h-full">
                <div className="w-14 h-14 rounded bg-cyan/10 flex items-center justify-center mb-6">
                  <Lightbulb className="text-cyan" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">New Business Strategy</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Position your agency for the post-cookie, privacy-first era. Develop service 
                  offerings and capabilities that clients will need.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2.5 flex-shrink-0" />
                    Service portfolio development
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2.5 flex-shrink-0" />
                    Partnership & M&A advisory
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2.5 flex-shrink-0" />
                    Pitch support & positioning
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="card-elevated h-full">
                <div className="w-14 h-14 rounded bg-cyan/10 flex items-center justify-center mb-6">
                  <BarChart3 className="text-cyan" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Efficiency Audits</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Comprehensive analysis of your media operations. Identify waste, 
                  inefficiencies, and optimization opportunities.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2.5 flex-shrink-0" />
                    Media spend benchmarking
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2.5 flex-shrink-0" />
                    Technology cost optimization
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2.5 flex-shrink-0" />
                    Process streamlining
                  </li>
                </ul>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={300}>
              <div className="card-elevated h-full">
                <div className="w-14 h-14 rounded bg-cyan/10 flex items-center justify-center mb-6">
                  <TrendingUp className="text-cyan" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Digital Media Training</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Expert-led training programs. Bridge the knowledge gap and master 
                  the complexities of modern media landscapes.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2.5 flex-shrink-0" />
                    Customized training programs
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2.5 flex-shrink-0" />
                    Platform mastery
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2.5 flex-shrink-0" />
                    Ongoing mentorship
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="bg-navy">
        <div className="container-wide mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slide-left">
              <div className="text-white">
                <span className="text-cyan text-sm font-bold uppercase tracking-wider mb-4 block">
                  The Imperative
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
                  Why Agencies Need to{' '}
                  <span className="text-gradient-cyan">Own Their Tech Stack</span>
                </h2>
                <p className="text-lg text-white/70 leading-relaxed mb-6">
                  The convergence of privacy regulation (GDPR, ePrivacy), platform restrictions 
                  (TTPA response), and signal loss (cookie deprecation) has created an 
                  existential challenge for agencies.
                </p>
                <p className="text-xl text-cyan font-bold">
                  The agencies that thrive will be those that build independent capabilities now.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded p-8 text-center">
                  <Zap className="text-amber mx-auto mb-4" size={40} />
                  <div className="text-3xl font-black text-white mb-2">2026</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Cookie Deadline</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-8 text-center">
                  <BarChart3 className="text-cyan mx-auto mb-4" size={40} />
                  <div className="text-3xl font-black text-white mb-2">40%</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Signal Loss</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-8 text-center">
                  <Users className="text-cyan mx-auto mb-4" size={40} />
                  <div className="text-3xl font-black text-white mb-2">27</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Regulators</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-8 text-center">
                  <Lightbulb className="text-amber mx-auto mb-4" size={40} />
                  <div className="text-3xl font-black text-white mb-2">Now</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Act Today</div>
                </div>
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
                Who We Work With
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-navy mb-6">
                For Growth-Driven Agencies
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="p-8 border border-border rounded hover:border-cyan transition-colors">
                <div className="w-14 h-14 rounded bg-cyan/10 flex items-center justify-center mb-6">
                  <Users className="text-cyan" size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">German Agencies</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Full-service, media, and digital agencies navigating the German market's 
                  unique regulatory and competitive landscape.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="p-8 border border-border rounded hover:border-cyan transition-colors">
                <div className="w-14 h-14 rounded bg-cyan/10 flex items-center justify-center mb-6">
                  <TrendingUp className="text-cyan" size={28} />
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">International Networks</h3>
                <p className="text-muted-foreground leading-relaxed">
                  European operations of global networks seeking region-specific 
                  capabilities for the EU's regulatory environment.
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
              Ready to Future-Proof Your Agency?
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Build the capabilities and positioning you need for the next era of digital media.
            </p>
            <Link to="/crisis-contact" className="btn-accent inline-flex items-center gap-3">
              SCHEDULE A STRATEGY SESSION
              <ArrowRight size={20} />
            </Link>
          </ScrollAnimation>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StrategicAdvisory;
