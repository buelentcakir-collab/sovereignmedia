// V58: Luxury Hospitality / Grand Hotel — concierge elegance, marble, white glove service
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV58 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Didact+Gothic&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) { toast({ title: 'Your consent is required', variant: 'destructive' }); return; }
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1800));
    setIsSubmitting(false);
    toast({ title: 'Your request is received', description: 'A senior concierge will contact you within 24 hours.' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const MARBLE = '#F8F5F0';
  const DARK_MARBLE = '#E8E2D8';
  const BRASS = '#B08850';
  const DARK_BRASS = '#7A5C2C';
  const CHARCOAL = '#2A2520';
  const SLATE = '#5A5048';

  return (
    <div style={{ minHeight: '100vh', background: MARBLE, fontFamily: "'Didact Gothic', sans-serif", color: CHARCOAL, position: 'relative', overflow: 'hidden' }}>

      {/* Marble texture simulation */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.3, background: `repeating-linear-gradient(128deg, transparent, transparent 80px, rgba(180,160,120,0.05) 80px, rgba(180,160,120,0.05) 82px), repeating-linear-gradient(25deg, transparent, transparent 60px, rgba(140,120,90,0.04) 60px, rgba(140,120,90,0.04) 62px)` }} />

      {/* Entry gold rule */}
      <div style={{ height: '3px', background: `linear-gradient(90deg, transparent, ${BRASS}, ${DARK_BRASS}, ${BRASS}, transparent)` }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Grand hotel header */}
        <header style={{ padding: '24px 80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${BRASS}30` }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '24px', color: CHARCOAL, letterSpacing: '0.15em' }}>SOVEREIGN MEDIA</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', marginTop: '4px' }}>
              <div style={{ height: '1px', width: '30px', background: BRASS }} />
              <div style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: '9px', color: BRASS, letterSpacing: '0.4em' }}>BRUSSELS · HAMBURG · AMSTERDAM</div>
              <div style={{ height: '1px', width: '30px', background: BRASS }} />
            </div>
          </div>
          <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
            {['Services', 'Advisory', 'Insights'].map(item => (
              <a key={item} href="#" style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: '12px', color: SLATE, textDecoration: 'none', letterSpacing: '0.2em', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = DARK_BRASS)}
                onMouseLeave={e => (e.currentTarget.style.color = SLATE)}
              >{item.toUpperCase()}</a>
            ))}
            <Link to="/crisis-contact" style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: 'italic', fontSize: '13px', color: DARK_BRASS, textDecoration: 'none', borderBottom: `1px solid ${BRASS}` }}>
              Reserve →
            </Link>
          </nav>
        </header>

        {/* Alert ribbon */}
        <div style={{ background: CHARCOAL, padding: '10px 0', textAlign: 'center', borderTop: `1px solid ${BRASS}20`, borderBottom: `1px solid ${BRASS}20` }}>
          <span style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: '10px', color: BRASS, letterSpacing: '0.4em' }}>
            NOTICE: POLITICAL CAMPAIGN CONTENT DECLINED BY EXTERNAL PLATFORMS — EXCLUSIVE EUROPEAN ALTERNATIVE AVAILABLE
          </span>
        </div>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', padding: '56px 80px 80px', alignItems: 'start' }}>

          {/* Left: Grand hotel pitch */}
          <div style={{ paddingRight: '64px', borderRight: `1px solid ${BRASS}20` }}>

            {/* Category badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
              <div style={{ height: '1px', width: '24px', background: BRASS }} />
              <div style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: '10px', color: BRASS, letterSpacing: '0.4em' }}>PREMIER EUROPEAN INFRASTRUCTURE</div>
              <div style={{ height: '1px', flex: 1, background: `linear-gradient(90deg,${BRASS},transparent)` }} />
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 'clamp(28px, 4vw, 56px)', lineHeight: 1.2, color: CHARCOAL, marginBottom: '20px', letterSpacing: '0.03em' }}>
              Sovereign<br /><span style={{ fontStyle: 'italic', color: DARK_BRASS }}>European</span><br />Infrastructure.
            </h1>

            <p style={{ fontSize: '15px', lineHeight: 2.2, color: SLATE, maxWidth: '400px', marginBottom: '36px' }}>
              White-glove political campaign infrastructure for European institutions. TTPA 2024/900 compliant. 27 EU member states. Zero US platform dependency. Deployment within 24 hours.
            </p>

            {/* Service stats — hotel-style */}
            <div style={{ marginBottom: '32px' }}>
              {[['27', 'EU Member States', 'Comprehensive coverage across all EU jurisdictions'], ['24h', 'Express Deployment', 'Campaign live within one business day'], ['100%', 'TTPA Compliance', 'Full regulatory adherence — GDPR and Digital Services Act'], ['0%', 'US Dependency', 'Entirely European technology stack']].map(([n, title, desc]) => (
                <div key={title} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '12px 0', borderBottom: `1px solid ${BRASS}15` }}>
                  <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '24px', color: BRASS, minWidth: '56px', textAlign: 'right', flexShrink: 0 }}>{n}</div>
                  <div>
                    <div style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: '11px', color: CHARCOAL, letterSpacing: '0.1em', marginBottom: '2px' }}>{title}</div>
                    <div style={{ fontSize: '12px', color: SLATE, fontStyle: 'normal', lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: '10px', color: SLATE, letterSpacing: '0.2em' }}>
              Trusted by EU Parliament · DG COMM · EPP Group · S&D Group
            </div>
          </div>

          {/* Right: Concierge desk form */}
          <div style={{ paddingLeft: '64px' }}>
            <div style={{ background: CHARCOAL, padding: '40px' }}>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <div style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: '9px', color: BRASS, letterSpacing: '0.5em', marginBottom: '8px' }}>CONCIERGE DESK</div>
                <div style={{ fontFamily: "'Libre Baskerville', serif", fontSize: '26px', color: MARBLE, letterSpacing: '0.08em' }}>Request Advisory</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', marginTop: '8px' }}>
                  <div style={{ height: '1px', width: '20px', background: `${BRASS}60` }} />
                  <div style={{ color: BRASS, fontSize: '10px' }}>◆</div>
                  <div style={{ height: '1px', width: '20px', background: `${BRASS}60` }} />
                </div>
              </div>
              <p style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: 'italic', fontSize: '13px', color: BRASS, lineHeight: 2, marginBottom: '28px', textAlign: 'center' }}>
                A senior advisor will attend to you within twenty-four hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { name: 'organisation', label: 'Organisation', ph: 'Your organisation' },
                  { name: 'name', label: 'Name', ph: 'Your full name' },
                  { name: 'email', label: 'Correspondence', ph: 'your@address.eu', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontFamily: "'Didact Gothic', sans-serif", fontSize: '9px', color: focused === f.name ? BRASS : `${MARBLE}50`, letterSpacing: '0.3em', marginBottom: '7px', transition: 'color 0.2s' }}>{f.label.toUpperCase()}</label>
                    <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                      value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                      style={{ width: '100%', padding: '10px 0', background: 'transparent', border: 'none', borderBottom: `1px solid ${focused === f.name ? BRASS : `${MARBLE}20`}`, fontFamily: "'Libre Baskerville', serif", fontStyle: 'italic', fontSize: '15px', color: MARBLE, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: "'Didact Gothic', sans-serif", fontSize: '9px', color: focused === 'campaign' ? BRASS : `${MARBLE}50`, letterSpacing: '0.3em', marginBottom: '7px' }}>YOUR REQUEST</label>
                  <textarea name="campaign" placeholder="Describe your situation" value={formData.campaign} onChange={handleChange} required rows={3}
                    style={{ width: '100%', padding: '10px 0', background: 'transparent', border: 'none', borderBottom: `1px solid ${focused === 'campaign' ? BRASS : `${MARBLE}20`}`, fontFamily: "'Libre Baskerville', serif", fontStyle: 'italic', fontSize: '15px', color: MARBLE, outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                  />
                </div>
                <label style={{ display: 'flex', gap: '12px', cursor: 'pointer', alignItems: 'flex-start' }}>
                  <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: BRASS, marginTop: 2 }} />
                  <span style={{ fontFamily: "'Libre Baskerville', serif", fontStyle: 'italic', fontSize: '12px', color: `${MARBLE}50`, lineHeight: 1.7 }}>
                    I consent to the <Link to="/privacy" style={{ color: BRASS, textDecoration: 'none' }}>Privacy Terms</Link>
                  </span>
                </label>
                <button type="submit" disabled={isSubmitting} style={{
                  padding: '16px', background: isSubmitting ? `${MARBLE}10` : `linear-gradient(90deg,${DARK_BRASS},${BRASS},${DARK_BRASS})`,
                  color: isSubmitting ? SLATE : CHARCOAL,
                  fontFamily: "'Didact Gothic', sans-serif", fontWeight: 400, fontSize: '11px', letterSpacing: '0.3em',
                  border: 'none', cursor: isSubmitting ? 'wait' : 'pointer', transition: 'all 0.2s',
                }}>
                  {isSubmitting ? 'ONE MOMENT...' : 'SUBMIT REQUEST'}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <div style={{ height: '3px', background: `linear-gradient(90deg, transparent, ${BRASS}, ${DARK_BRASS}, ${BRASS}, transparent)` }} />
    </div>
  );
};
export default IndexV58;
