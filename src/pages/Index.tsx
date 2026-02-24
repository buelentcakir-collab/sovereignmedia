import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, Shield, Zap, CheckCircle, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    organisation: '',
    name: '',
    email: '',
    campaign: '',
    privacyAccepted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) {
      toast({
        title: "Privacy Policy Required",
        description: "Please accept the privacy policy to continue.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    
    toast({
      title: "Request Received",
      description: "Our team will contact you within 24 hours.",
    });
    
    setFormData({
      organisation: '',
      name: '',
      email: '',
      campaign: '',
      privacyAccepted: false,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Above the Fold */}
      <section className="relative min-h-screen flex items-center pt-20 bg-navy overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(hsl(187 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(187 100% 50% / 0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container-wide mx-auto section-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollAnimation animation="fade-up">
                <div className="error-badge mb-8">
                  <AlertTriangle size={18} />
                  <span>Rejected: Political Content</span>
                </div>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-8">
                  REJECTED:{' '}
                  <span className="text-gradient-cyan">Political Content?</span>
                </h1>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={200}>
                <p className="text-xl md:text-2xl text-white/70 leading-relaxed mb-10 max-w-2xl">
                  Stop begging Big Tech for permission. While Google and Meta block your mission, 
                  <span className="text-cyan font-semibold"> we go live.</span>
                  <br /><br />
                  <span className="text-white font-bold">100% European Tech. 0% US Bias.</span>
                </p>
              </ScrollAnimation>
              
              <ScrollAnimation animation="fade-up" delay={300}>
                <Link to="/crisis-contact" className="btn-accent inline-flex items-center gap-3">
                  GO LIVE IN 24H
                  <ArrowRight size={20} />
                </Link>
              </ScrollAnimation>
            </div>

            {/* Lead Form on Homepage */}
            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded p-8 md:p-10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Emergency Deployment
                </h3>
                <p className="text-white/60 mb-8">
                  Get your campaign back on track now.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      name="organisation"
                      placeholder="Organisation"
                      value={formData.organisation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:border-cyan transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:border-cyan transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="E-Mail"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:border-cyan transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      name="campaign"
                      placeholder="Describe your Blocked Campaign"
                      value={formData.campaign}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-4 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:border-cyan transition-colors resize-none"
                    />
                  </div>
                  
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={handleInputChange}
                      className="mt-1 w-5 h-5 rounded border-white/20 bg-white/10 text-cyan focus:ring-cyan"
                    />
                    <span className="text-sm text-white/60">
                      I agree to the <Link to="/privacy" className="text-cyan hover:underline">Privacy Policy</Link> regarding my data for advisory purposes.
                    </span>
                  </label>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-accent disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'REQUEST EMERGENCY CALL'}
                  </button>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Pain Point Section - The Scandal */}
      <section className="bg-background">
        <div className="container-wide mx-auto section-padding">
          <ScrollAnimation animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy mb-8">
                The Algorithm is <span className="text-gradient-cyan">Rigged.</span>
              </h2>
            </div>
          </ScrollAnimation>

          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="space-y-6 text-lg md:text-xl text-muted-foreground">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="text-amber flex-shrink-0 mt-1" size={24} />
                  <p>
                    <span className="text-navy font-bold">Google and Meta are silencing democratic voices.</span> While your institutional campaigns are "Rejected", polarizing content gets a free ride.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="text-cyan flex-shrink-0 mt-1" size={24} />
                  <p>
                    We bridge the <span className="text-navy font-bold">"Democratic Reach Gap"</span> with 100% European Technology, Data, and Reach.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="text-cyan flex-shrink-0 mt-1" size={24} />
                  <p>
                    No US-based platform dependencies. No arbitrary content restrictions. <span className="text-navy font-bold">Just sovereign results.</span>
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Power Promise Section */}
      <section className="bg-navy">
        <div className="container-wide mx-auto section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimation animation="slide-left">
              <div className="text-white">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                  Any EU Country.<br />
                  Any Campaign.<br />
                  <span className="text-gradient-cyan">Live in 24 Hours.</span>
                </h2>
                <p className="text-xl text-white/70 leading-relaxed mb-8">
                  We provide the exit strategy from Silicon Valley. Fully TTPA & GDPR compliant 
                  media deployment across all 27 EU member states.
                </p>
                <p className="text-2xl font-bold text-cyan">
                  No "Political Content" bans. No shadow-banning. Just sovereign results.
                </p>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slide-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded p-8 text-center">
                  <Globe className="text-cyan mx-auto mb-4" size={40} />
                  <div className="text-4xl font-black text-white mb-2">27</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">EU Member States</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-8 text-center">
                  <Zap className="text-amber mx-auto mb-4" size={40} />
                  <div className="text-4xl font-black text-white mb-2">24h</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">Go-Live Time</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-8 text-center">
                  <Shield className="text-cyan mx-auto mb-4" size={40} />
                  <div className="text-4xl font-black text-white mb-2">100%</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">TTPA Compliant</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded p-8 text-center">
                  <CheckCircle className="text-cyan mx-auto mb-4" size={40} />
                  <div className="text-4xl font-black text-white mb-2">0%</div>
                  <div className="text-white/60 text-sm uppercase tracking-wider">US Dependency</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background">
        <div className="container-narrow mx-auto section-padding text-center">
          <ScrollAnimation animation="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy mb-6">
              Ready to go live?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Stop waiting for Big Tech approval. Get your campaign deployed on sovereign European infrastructure.
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

export default Index;
