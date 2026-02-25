// V52: Street Art / Stencil — paste-up aesthetics, grunge texture, political urgency
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV52 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Permanent+Marker&family=Roboto+Condensed:wght@300;400;700&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) { toast({ title: 'Sign the manifesto', variant: 'destructive' }); return; }
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    toast({ title: 'Message received', description: 'Our collective contacts you in 24h.' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const SPRAY_RED = '#CC1100';
  const SPRAY_YELLOW = '#FFD800';
  const CONCRETE = '#3A3835';
  const WALL = '#2A2825';
  const OFF_WHITE = '#F5F0E8';
  const WHEAT = '#E8D5A0';

  const style = `
    @keyframes v52-drip { 0%{height:0} 100%{height:60px} }
    .v52-drip { animation: v52-drip 2s ease-out forwards; transform-origin: top; }
  `;

  return (
    <div style={{ minHeight: '100vh', background: WALL, fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 300, color: OFF_WHITE, position: 'relative', overflow: 'hidden' }}>
      <style>{style}</style>

      {/* Concrete texture */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.06, backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0, rgba(255,255,255,0.1) 1px, transparent 0, transparent 50%)', backgroundSize: '4px 4px' }} />

      {/* Paint splatters */}
      <div style={{ position: 'fixed', top: '20%', left: '5%', width: '80px', height: '80px', background: `${SPRAY_RED}30`, borderRadius: '60% 40% 70% 30%', filter: 'blur(3px)', zIndex: 0 }} />
      <div style={{ position: 'fixed', top: '60%', right: '8%', width: '60px', height: '60px', background: `${SPRAY_YELLOW}25`, borderRadius: '40% 60% 30% 70%', filter: 'blur(2px)', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        {/* Paste-up header */}
        <header style={{ padding: '24px 0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `3px solid ${SPRAY_RED}` }}>
          <div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', color: OFF_WHITE, letterSpacing: '0.05em', lineHeight: 1, textShadow: `3px 3px 0 ${SPRAY_RED}60` }}>
              SOVEREIGN MEDIA
            </div>
            <div style={{ fontFamily: "'Permanent Marker', cursive", fontSize: '11px', color: SPRAY_YELLOW, marginTop: '2px' }}>brussels · hamburg · amsterdam</div>
          </div>
          <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {['SERVICES', 'ADVISORY', 'ZINE'].map(item => (
              <a key={item} href="#" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', color: `${OFF_WHITE}60`, textDecoration: 'none', letterSpacing: '0.08em', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = SPRAY_YELLOW)}
                onMouseLeave={e => (e.currentTarget.style.color = `${OFF_WHITE}60`)}
              >{item}</a>
            ))}
            <Link to="/crisis-contact" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', color: WALL, background: SPRAY_RED, padding: '6px 20px', textDecoration: 'none', letterSpacing: '0.08em' }}>TAKE ACTION</Link>
          </nav>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', paddingTop: '32px', paddingBottom: '80px', alignItems: 'start' }}>

          {/* Left: Street art hero */}
          <div>
            {/* Warning poster */}
            <div style={{ background: SPRAY_RED, padding: '10px 20px', marginBottom: '28px', display: 'inline-block', transform: 'rotate(-1.5deg)', position: 'relative' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', color: OFF_WHITE, letterSpacing: '0.15em' }}>✗ REJECTED: POLITICAL CONTENT</div>
              {/* Paint drip */}
              <div style={{ position: 'absolute', bottom: 0, left: '20px', width: '4px', background: SPRAY_RED, height: '24px', transform: 'translateY(100%)', opacity: 0.7 }} />
              <div style={{ position: 'absolute', bottom: 0, left: '60px', width: '3px', background: SPRAY_RED, height: '16px', transform: 'translateY(100%)', opacity: 0.5 }} />
            </div>

            {/* Stencil headline */}
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(64px, 9vw, 128px)', lineHeight: 0.85, letterSpacing: '0.02em', color: OFF_WHITE, textShadow: `4px 4px 0 rgba(0,0,0,0.5)` }}>
                FREE<br />EUROPE<br /><span style={{ color: SPRAY_YELLOW, textShadow: `4px 4px 0 rgba(0,0,0,0.5)` }}>NOW.</span>
              </div>
            </div>

            {/* Manifesto text */}
            <div style={{ borderLeft: `4px solid ${SPRAY_YELLOW}`, paddingLeft: '16px', marginBottom: '32px' }}>
              <p style={{ fontFamily: "'Permanent Marker', cursive", fontSize: '14px', lineHeight: 2, color: WHEAT, maxWidth: '380px' }}>
                Sovereign European infrastructure. TTPA-clean. 27 EU states. No Silicon Valley. Deploy in 24 hours.
              </p>
            </div>

            {/* Spray-painted stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '8px', marginBottom: '24px' }}>
              {[['27', 'EU STATES', SPRAY_YELLOW], ['24H', 'DEPLOY', SPRAY_RED], ['100%', 'TTPA', OFF_WHITE], ['ZERO', 'US DEP.', SPRAY_YELLOW]].map(([n, l, c]) => (
                <div key={l} style={{ background: CONCRETE, padding: '14px', borderLeft: `4px solid ${c as string}`, boxShadow: `inset 0 0 20px rgba(0,0,0,0.3)` }}>
                  <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', color: c as string, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: "'Permanent Marker', cursive", fontSize: '10px', color: `${c as string}80`, marginTop: '2px' }}>{l}</div>
                </div>
              ))}
            </div>

            <div style={{ fontFamily: "'Permanent Marker', cursive", fontSize: '11px', color: `${OFF_WHITE}40` }}>
              EU Parliament · DG COMM · EPP Group · S&D Group
            </div>
          </div>

          {/* Right: Form as flyer */}
          <div>
            <div style={{ background: WHEAT, padding: '28px', boxShadow: `6px 6px 0 ${SPRAY_RED}60`, transform: 'rotate(0.5deg)', position: 'relative' }}>
              {/* Tape simulation */}
              <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', width: 80, height: 20, background: 'rgba(255,216,0,0.7)', borderRadius: '2px' }} />

              <div style={{ fontFamily: "'Permanent Marker', cursive", fontSize: '13px', color: SPRAY_RED, marginBottom: '4px' }}>URGENT FORM — FILL NOW</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '28px', color: WALL, lineHeight: 1.1, marginBottom: '8px' }}>REQUEST<br />ADVISORY</div>
              <p style={{ fontFamily: "'Permanent Marker', cursive", fontSize: '12px', color: `${WALL}80`, lineHeight: 1.9, marginBottom: '20px' }}>
                Senior advisor responds within 24h.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'organisation', label: 'Organisation', ph: 'Your organisation' },
                  { name: 'name', label: 'Your Name', ph: 'Full name' },
                  { name: 'email', label: 'Email', ph: 'your@address.eu', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontFamily: "'Permanent Marker', cursive", fontSize: '11px', color: focused === f.name ? SPRAY_RED : `${WALL}60`, marginBottom: '4px', transition: 'color 0.15s' }}>{f.label}:</label>
                    <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                      value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                      style={{ width: '100%', padding: '9px 12px', background: '#FFF', border: `2px solid ${focused === f.name ? SPRAY_RED : `${WALL}20`}`, fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 300, fontSize: '14px', color: WALL, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s' }}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: "'Permanent Marker', cursive", fontSize: '11px', color: focused === 'campaign' ? SPRAY_RED : `${WALL}60`, marginBottom: '4px' }}>What happened:</label>
                  <textarea name="campaign" placeholder="Describe what was blocked" value={formData.campaign} onChange={handleChange} required rows={3}
                    style={{ width: '100%', padding: '9px 12px', background: '#FFF', border: `2px solid ${focused === 'campaign' ? SPRAY_RED : `${WALL}20`}`, fontFamily: "'Roboto Condensed', sans-serif", fontWeight: 300, fontSize: '14px', color: WALL, outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                  />
                </div>
                <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start' }}>
                  <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: SPRAY_RED }} />
                  <span style={{ fontFamily: "'Permanent Marker', cursive", fontSize: '11px', color: `${WALL}60`, lineHeight: 1.6 }}>
                    I agree to the <Link to="/privacy" style={{ color: SPRAY_RED, textDecoration: 'none' }}>Privacy Manifesto</Link>
                  </span>
                </label>
                <button type="submit" disabled={isSubmitting} style={{
                  padding: '14px', background: isSubmitting ? `${WALL}20` : SPRAY_RED,
                  color: '#FFF', fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '18px', letterSpacing: '0.1em', border: 'none',
                  cursor: isSubmitting ? 'wait' : 'pointer', transition: 'all 0.15s',
                  boxShadow: isSubmitting ? 'none' : `4px 4px 0 ${WALL}`,
                }}>
                  {isSubmitting ? 'SENDING...' : 'SUBMIT NOW →'}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default IndexV52;
