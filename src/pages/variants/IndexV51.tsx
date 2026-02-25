// V51: Vaporwave / Outrun — retrowave grid, chrome type, sunset gradients, synthwave aesthetic
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV51 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Audiowide&family=Rajdhani:wght@300;400;500&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) { toast({ title: 'Accept the protocol', variant: 'destructive' }); return; }
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    toast({ title: 'Transmission sent', description: 'Response incoming in 24 hours.' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const PURPLE = '#8B1FBF';
  const PINK = '#FF2D9B';
  const CYAN = '#00E5FF';
  const ORANGE = '#FF6B00';
  const DARK = '#0A0015';
  const DARK2 = '#130025';

  const style = `
    @keyframes v51-scanline { 0%{transform:translateY(-100%)} 100%{transform:translateY(100vh)} }
    @keyframes v51-grid { 0%{background-position:0 0} 100%{background-position:0 60px} }
    @keyframes v51-glow { 0%,100%{text-shadow:0 0 10px ${PINK},0 0 20px ${PINK},0 0 40px ${PURPLE}} 50%{text-shadow:0 0 15px ${CYAN},0 0 30px ${CYAN},0 0 60px ${CYAN}} }
    .v51-title { animation: v51-glow 3s ease-in-out infinite; }
    .v51-grid { animation: v51-grid 3s linear infinite; }
  `;

  return (
    <div style={{ minHeight: '100vh', background: DARK, fontFamily: "'Rajdhani', sans-serif", fontWeight: 300, color: '#DDD', position: 'relative', overflow: 'hidden' }}>
      <style>{style}</style>

      {/* Sunset sky */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '55vh', background: `linear-gradient(180deg, #0A0015 0%, ${PURPLE}40 40%, ${PINK}30 60%, ${ORANGE}40 80%, #FF4400 100%)`, zIndex: 0 }} />

      {/* Outrun grid floor */}
      <div className="v51-grid" style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: '50vh', zIndex: 0, backgroundImage: `linear-gradient(${PINK}50 1px, transparent 1px), linear-gradient(90deg, ${PINK}50 1px, transparent 1px)`, backgroundSize: '80px 60px', perspective: '300px', transformOrigin: 'bottom center', transform: 'perspective(400px) rotateX(40deg)', opacity: 0.4 }} />

      {/* Horizon line */}
      <div style={{ position: 'fixed', top: '52%', left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${PINK}, ${CYAN}, ${PINK}, transparent)`, zIndex: 0, opacity: 0.8 }} />

      {/* Scanline */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 2, pointerEvents: 'none', background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)' }} />

      <div style={{ position: 'relative', zIndex: 3, maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        {/* Header */}
        <header style={{ padding: '28px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${PINK}40` }}>
          <div style={{ fontFamily: "'Audiowide', sans-serif", fontSize: '18px', color: CYAN, textShadow: `0 0 10px ${CYAN}, 0 0 20px ${CYAN}` }}>
            SOVEREIGN MEDIA
          </div>
          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {['SERVICES', 'ADVISORY', 'INSIGHTS'].map(item => (
              <a key={item} href="#" style={{ fontFamily: "'Audiowide', sans-serif", fontSize: '10px', color: `${PINK}80`, textDecoration: 'none', letterSpacing: '0.08em', transition: 'all 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.color = PINK; e.currentTarget.style.textShadow = `0 0 8px ${PINK}`; }}
                onMouseLeave={e => { e.currentTarget.style.color = `${PINK}80`; e.currentTarget.style.textShadow = 'none'; }}
              >{item}</a>
            ))}
            <Link to="/crisis-contact" style={{ fontFamily: "'Audiowide', sans-serif", fontSize: '10px', color: DARK, background: `linear-gradient(90deg,${PINK},${PURPLE})`, padding: '8px 16px', textDecoration: 'none', letterSpacing: '0.08em' }}>ENGAGE →</Link>
          </nav>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', paddingTop: '24px', paddingBottom: '80px', alignItems: 'start' }}>

          {/* Left: Outrun hero */}
          <div>
            {/* Neon rejected sign */}
            <div style={{ display: 'inline-block', border: `1px solid ${ORANGE}`, padding: '8px 16px', marginBottom: '28px', boxShadow: `0 0 12px ${ORANGE}50`, background: `${ORANGE}10` }}>
              <span style={{ fontFamily: "'Audiowide', sans-serif", fontSize: '10px', color: ORANGE, letterSpacing: '0.1em' }}>✗ REJECTED: POLITICAL CONTENT</span>
            </div>

            {/* Vaporwave headline */}
            <div style={{ marginBottom: '24px' }}>
              <div className="v51-title" style={{ fontFamily: "'Audiowide', sans-serif", fontSize: 'clamp(36px, 5.5vw, 80px)', lineHeight: 0.9, letterSpacing: '0.04em', color: PINK }}>
                SOVER-<br />EIGN.
              </div>
              <div style={{ fontFamily: "'Audiowide', sans-serif", fontSize: 'clamp(16px, 2.5vw, 32px)', color: CYAN, textShadow: `0 0 10px ${CYAN}`, letterSpacing: '0.1em', marginTop: '8px' }}>
                MEDIA CORP
              </div>
            </div>

            <p style={{ fontSize: '15px', fontWeight: 400, lineHeight: 2, color: 'rgba(220,180,255,0.8)', maxWidth: '400px', marginBottom: '32px' }}>
              Sovereign European infrastructure. TTPA 2024/900 compliant. 27 EU member states. Zero US dependency. Deploy in 24 hours.
            </p>

            {/* Retro stat display */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '8px', marginBottom: '24px' }}>
              {[['27', 'EU STATES', CYAN], ['24H', 'DEPLOY', PINK], ['100%', 'TTPA', ORANGE], ['ZERO', 'US DEP.', PURPLE]].map(([n, l, c]) => (
                <div key={l} style={{ background: `${c as string}10`, border: `1px solid ${c as string}40`, padding: '14px', textAlign: 'center', boxShadow: `0 0 8px ${c as string}20` }}>
                  <div style={{ fontFamily: "'Audiowide', sans-serif", fontSize: '22px', color: c as string, textShadow: `0 0 8px ${c as string}` }}>{n}</div>
                  <div style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 400, fontSize: '9px', color: `${c as string}80`, letterSpacing: '0.25em', marginTop: '4px' }}>{l}</div>
                </div>
              ))}
            </div>

            <div style={{ fontFamily: "'Audiowide', sans-serif", fontSize: '9px', color: `${PINK}50`, letterSpacing: '0.15em' }}>
              EU PARLIAMENT // DG COMM // EPP GROUP // S&D GROUP
            </div>
          </div>

          {/* Right: Synthwave form panel */}
          <div>
            <div style={{ background: `${DARK2}EE`, border: `1px solid ${PURPLE}60`, padding: '32px', backdropFilter: 'blur(16px)', boxShadow: `0 0 40px ${PURPLE}30` }}>
              <div style={{ fontFamily: "'Audiowide', sans-serif", fontSize: '9px', color: CYAN, letterSpacing: '0.2em', marginBottom: '8px', textShadow: `0 0 6px ${CYAN}` }}>// ACCESS REQUEST //</div>
              <div style={{ fontFamily: "'Audiowide', sans-serif", fontSize: '22px', color: PINK, textShadow: `0 0 12px ${PINK}`, marginBottom: '8px', lineHeight: 1.2 }}>ADVISORY<br />REQUEST</div>
              <p style={{ fontSize: '13px', fontWeight: 400, color: 'rgba(200,150,255,0.6)', lineHeight: 1.9, marginBottom: '24px' }}>
                Response transmission within 24 hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  { name: 'organisation', label: 'Organisation', ph: 'Your organisation' },
                  { name: 'name', label: 'Identity', ph: 'Full name' },
                  { name: 'email', label: 'Comm Channel', ph: 'your@address.eu', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontFamily: "'Audiowide', sans-serif", fontSize: '8px', color: focused === f.name ? CYAN : `${PINK}50`, letterSpacing: '0.15em', marginBottom: '6px', transition: 'color 0.15s' }}>{f.label.toUpperCase()}</label>
                    <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                      value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                      style={{ width: '100%', padding: '10px 12px', background: 'rgba(255,45,155,0.05)', border: `1px solid ${focused === f.name ? CYAN : `${PURPLE}40`}`, fontFamily: "'Rajdhani', sans-serif", fontWeight: 400, fontSize: '14px', color: '#DDD', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s', boxShadow: focused === f.name ? `0 0 8px ${CYAN}30` : 'none' }}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: "'Audiowide', sans-serif", fontSize: '8px', color: focused === 'campaign' ? CYAN : `${PINK}50`, letterSpacing: '0.15em', marginBottom: '6px' }}>SITUATION</label>
                  <textarea name="campaign" placeholder="Describe your situation" value={formData.campaign} onChange={handleChange} required rows={3}
                    style={{ width: '100%', padding: '10px 12px', background: 'rgba(255,45,155,0.05)', border: `1px solid ${focused === 'campaign' ? CYAN : `${PURPLE}40`}`, fontFamily: "'Rajdhani', sans-serif", fontWeight: 400, fontSize: '14px', color: '#DDD', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                  />
                </div>
                <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start' }}>
                  <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: PINK }} />
                  <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 400, fontSize: '12px', color: 'rgba(200,150,255,0.5)', lineHeight: 1.6 }}>
                    Accept <Link to="/privacy" style={{ color: CYAN, textDecoration: 'none' }}>Privacy Protocol</Link>
                  </span>
                </label>
                <button type="submit" disabled={isSubmitting} style={{
                  padding: '16px', background: isSubmitting ? 'rgba(255,255,255,0.03)' : `linear-gradient(90deg,${PINK},${PURPLE})`,
                  color: '#FFF', fontFamily: "'Audiowide', sans-serif",
                  fontSize: '11px', letterSpacing: '0.15em', border: 'none',
                  cursor: isSubmitting ? 'wait' : 'pointer', transition: 'opacity 0.15s',
                  boxShadow: isSubmitting ? 'none' : `0 0 20px ${PINK}40`,
                }}>
                  {isSubmitting ? 'TRANSMITTING...' : 'INITIATE CONTACT →'}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default IndexV51;
