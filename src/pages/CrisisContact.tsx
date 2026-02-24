import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, Shield, Clock, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import { useToast } from '@/hooks/use-toast';

const CrisisContact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    organisation: '',
    name: '',
    email: '',
    campaign: '',
    privacyAccepted: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Emergency Request Received",
      description: "Our team will contact you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-navy overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(hsl(187 100% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(187 100% 50% / 0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container-wide mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <ScrollAnimation animation="fade-up">
            <div className="error-badge mb-6">
              <AlertTriangle size={18} />
              <span>Emergency Deployment</span>
            </div>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Get Your Campaign{' '}
              <span className="text-gradient-cyan">Back On Track.</span>
            </h1>
          </ScrollAnimation>
          
          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-xl text-white/70 max-w-2xl">
              Campaign blocked by Big Tech? We deploy on sovereign European infrastructure. 
              No US platform dependencies. Live in 24 hours.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollAnimation animation="slide-left">
              {isSubmitted ? (
                <div className="bg-navy rounded p-10 text-center">
                  <CheckCircle className="text-cyan mx-auto mb-6" size={64} />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Request Received
                  </h3>
                  <p className="text-white/70 mb-8">
                    Our emergency response team will contact you within 24 hours 
                    to discuss your campaign deployment.
                  </p>
                  <Link to="/" className="btn-outline">
                    Back to Home
                  </Link>
                </div>
              ) : (
                <div className="bg-card border border-border rounded p-8 md:p-10">
                  <h3 className="text-2xl font-bold text-navy mb-2">
                    Emergency Deployment
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Get your campaign back on track now.
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Organisation *
                      </label>
                      <input
                        type="text"
                        name="organisation"
                        placeholder="Your organisation name"
                        value={formData.organisation}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-background border border-border rounded text-navy placeholder:text-muted-foreground focus:outline-none focus:border-cyan transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-background border border-border rounded text-navy placeholder:text-muted-foreground focus:outline-none focus:border-cyan transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        E-Mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-background border border-border rounded text-navy placeholder:text-muted-foreground focus:outline-none focus:border-cyan transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-2">
                        Describe your Blocked Campaign *
                      </label>
                      <textarea
                        name="campaign"
                        placeholder="Tell us about your campaign and what platform rejected it..."
                        value={formData.campaign}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-4 bg-background border border-border rounded text-navy placeholder:text-muted-foreground focus:outline-none focus:border-cyan transition-colors resize-none"
                      />
                    </div>
                    
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 rounded border-border bg-background text-cyan focus:ring-cyan"
                      />
                      <span className="text-sm text-muted-foreground">
                        I agree to the <Link to="/privacy" className="text-cyan hover:underline">Privacy Policy</Link> regarding my data for advisory purposes. *
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
              )}
            </ScrollAnimation>

            {/* Trust Elements */}
            <ScrollAnimation animation="slide-right">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-6">
                    What Happens Next
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-cyan/10 rounded flex items-center justify-center flex-shrink-0">
                        <Clock className="text-cyan" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy mb-1">Within 24 Hours</h4>
                        <p className="text-muted-foreground">
                          Our emergency response team reviews your case and contacts you directly.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-cyan/10 rounded flex items-center justify-center flex-shrink-0">
                        <Shield className="text-cyan" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy mb-1">Compliance Check</h4>
                        <p className="text-muted-foreground">
                          We verify TTPA & GDPR requirements for your specific campaign and target markets.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-amber/10 rounded flex items-center justify-center flex-shrink-0">
                        <ArrowRight className="text-amber" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-navy mb-1">Go Live</h4>
                        <p className="text-muted-foreground">
                          Campaign deployed on sovereign European infrastructure across all 27 EU member states.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-navy rounded p-8">
                  <h4 className="text-lg font-bold text-white mb-4">
                    100% Confidential
                  </h4>
                  <p className="text-white/70 mb-6">
                    All communications are treated with strict confidentiality. 
                    Your campaign details never leave our European infrastructure.
                  </p>
                  <div className="inline-flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded">
                    <Shield className="text-cyan" size={20} />
                    <span className="text-sm font-semibold text-white/80">
                      GDPR Compliant Data Handling
                    </span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CrisisContact;
