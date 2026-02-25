// V57: Science Fiction / Alien Interface — biological circuitry, bioluminescent, organic tech
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV57 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Exo+2:wght@200;300;400&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) { toast({ title: 'Protocol required', variant: 'destructive' }); return; }
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1600));
    setIsSubmitting(false);
    toast({ title: 'Signal transmitted', description: 'Entity responds within 24 cycles.' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const BIO_GREEN = '#00FF87';
  const BIO_BLUE = '#0080FF';
  const BIO_PURPLE = '#9B00FF';
  const VOID = '#020408';
  const DEEP = '#040D14';
  const MID_DARK = '#0A1A2E';

  const style = `
    @keyframes v57-pulse { 0%,100%{opacity:0.4;transform:scale(1)} 50%{opacity:1;transform:scale(1.05)} }
    @keyframes v57-flow { 0%{stroke-dashoffset:100} 100%{stroke-dashoffset:0} }
    @keyframes v57-breathe { 0%,100%{box-shadow:0 0 15px ${BIO_GREEN}40,0 0 30px ${BIO_GREEN}20} 50%{box-shadow:0 0 25px ${BIO_GREEN}80,0 0 50px ${BIO_GREEN}40,0 0 80px ${BIO_GREEN}20} }
    .v57-pulse { animation: v57-pulse 3s ease-in-out infinite; }
    .v57-breathe { animation: v57-breathe 4s ease-in-out infinite; }
    .v57-flow-path { animation: v57-flow 3s linear infinite; stroke-dasharray:10,5; }
  `;

  return (
    <div style={{ minHeight: '100vh', background: VOID, fontFamily: "'Exo 2', sans-serif", fontWeight: 200, color: `${BIO_GREEN}CC`, position: 'relative', overflow: 'hidden' }}>
      <style>{style}</style>

      {/* Bioluminescent background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, background: `radial-gradient(ellipse at 20% 30%, ${BIO_PURPLE}18, transparent 50%), radial-gradient(ellipse at 80% 70%, ${BIO_BLUE}15, transparent 50%), radial-gradient(ellipse at 50% 10%, ${BIO_GREEN}12, transparent 40%)` }} />

      {/* Circuit SVG */}
      <svg style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.12 }} viewBox="0 0 1200 800">
        <path d="M0,400 L200,400 L200,200 L400,200 L400,400 L600,400" stroke={BIO_GREEN} strokeWidth="1" fill="none" className="v57-flow-path" />
        <path d="M1200,200 L1000,200 L1000,400 L800,400 L800,600 L600,600 L600,400" stroke={BIO_BLUE} strokeWidth="1" fill="none" className="v57-flow-path" style={{ animationDelay: '1s' }} />
        <circle cx="200" cy="200" r="6" fill={BIO_GREEN} className="v57-pulse" />
        <circle cx="400" cy="400" r="4" fill={BIO_BLUE} className="v57-pulse" style={{ animationDelay: '1s' }} />
        <circle cx="800" cy="400" r="5" fill={BIO_PURPLE} className="v57-pulse" style={{ animationDelay: '2s' }} />
      </svg>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        {/* Header */}
        <header style={{ padding: '28px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${BIO_GREEN}20` }}>
          <div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '18px', color: BIO_GREEN, textShadow: `0 0 10px ${BIO_GREEN}` }}>
              SOVEREIGN_MEDIA.eu
            </div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', color: `${BIO_GREEN}50`, letterSpacing: '0.3em', marginTop: '3px' }}>
              NODE::EU-INFRA // ONLINE // TTPA-VERIFIED
            </div>
          </div>
          <nav style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            {['MODULES', 'ADVISORY', 'LOGS'].map(item => (
              <a key={item} href="#" style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '11px', color: `${BIO_GREEN}50`, textDecoration: 'none', letterSpacing: '0.1em', transition: 'all 0.15s' }}
                onMouseEnter={e => { e.currentTarget.style.color = BIO_GREEN; e.currentTarget.style.textShadow = `0 0 8px ${BIO_GREEN}`; }}
                onMouseLeave={e => { e.currentTarget.style.color = `${BIO_GREEN}50`; e.currentTarget.style.textShadow = 'none'; }}
              >[{item}]</a>
            ))}
            <Link to="/crisis-contact" style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '11px', color: VOID, background: BIO_GREEN, padding: '7px 14px', textDecoration: 'none', letterSpacing: '0.1em' }}>INITIATE</Link>
          </nav>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', paddingTop: '28px', paddingBottom: '80px', alignItems: 'start' }}>

          {/* Left */}
          <div>
            {/* Error signal */}
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '11px', color: '#FF4444', padding: '10px 16px', border: `1px solid rgba(255,68,68,0.3)`, background: 'rgba(255,68,68,0.05)', marginBottom: '28px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ animation: 'v57-pulse 1s ease-in-out infinite' }}>▶</span>
              <span>ERR::POLITICAL_CONTENT — REJECTED — external_platform[google,meta]</span>
            </div>

            {/* Alien headline */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 'clamp(32px, 4.5vw, 64px)', lineHeight: 1, color: BIO_GREEN, textShadow: `0 0 20px ${BIO_GREEN}80, 0 0 40px ${BIO_GREEN}40`, letterSpacing: '0.05em' }} className="v57-breathe">
                SOVEREIGN<br />MEDIA
              </div>
              <div style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 200, fontSize: 'clamp(12px, 1.5vw, 18px)', color: `${BIO_BLUE}CC`, marginTop: '8px', letterSpacing: '0.3em' }}>
                // EU_SOVEREIGN_INFRASTRUCTURE_NODE
              </div>
            </div>

            <p style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 200, fontSize: '14px', lineHeight: 2, color: `${BIO_GREEN}80`, maxWidth: '400px', marginBottom: '32px' }}>
              Sovereign European infrastructure for political campaigns. TTPA 2024/900. 27 EU member states. Zero US dependency. 24-hour deployment protocol.
            </p>

            {/* Bio-circuit stat nodes */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '8px', marginBottom: '24px' }}>
              {[['27', 'EU NODES', BIO_GREEN], ['24H', 'DEPLOY', BIO_BLUE], ['100%', 'TTPA', BIO_PURPLE], ['ZERO', 'US DEP', BIO_GREEN]].map(([n, l, c]) => (
                <div key={l} className="v57-pulse" style={{ border: `1px solid ${c as string}30`, background: `${c as string}05`, padding: '14px', textAlign: 'center', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: 4, left: 4, width: 4, height: 4, borderRadius: '50%', background: c as string, boxShadow: `0 0 6px ${c as string}` }} />
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '22px', color: c as string, textShadow: `0 0 10px ${c as string}60` }}>{n}</div>
                  <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', color: `${c as string}50`, letterSpacing: '0.2em', marginTop: '4px' }}>{l}</div>
                </div>
              ))}
            </div>

            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', color: `${BIO_GREEN}30`, letterSpacing: '0.15em' }}>
              VERIFIED_BY:: EU_PARLIAMENT // DG_COMM // EPP_GROUP // SD_GROUP
            </div>
          </div>

          {/* Right: Alien form terminal */}
          <div>
            <div style={{ border: `1px solid ${BIO_GREEN}30`, background: `${DEEP}CC`, padding: '32px', backdropFilter: 'blur(8px)' }} className="v57-breathe">
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '10px', color: `${BIO_GREEN}60`, letterSpacing: '0.2em', marginBottom: '8px' }}>
                // REQUEST_ADVISORY::FORM
              </div>
              <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '22px', color: BIO_GREEN, textShadow: `0 0 10px ${BIO_GREEN}`, marginBottom: '8px', lineHeight: 1.2 }}>
                INITIATE<br />CONTACT
              </div>
              <p style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 200, fontSize: '12px', color: `${BIO_GREEN}50`, lineHeight: 1.9, marginBottom: '24px' }}>
                Entity will respond within 24 cycles.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  { name: 'organisation', label: 'ENTITY_NAME', ph: 'Your organisation' },
                  { name: 'name', label: 'IDENTIFIER', ph: 'Full name' },
                  { name: 'email', label: 'COMM_CHANNEL', ph: 'your@address.eu', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', color: focused === f.name ? BIO_GREEN : `${BIO_GREEN}30`, letterSpacing: '0.2em', marginBottom: '5px', transition: 'color 0.15s' }}>{f.label}</label>
                    <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                      value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                      style={{ width: '100%', padding: '10px 12px', background: VOID, border: `1px solid ${focused === f.name ? BIO_GREEN : `${BIO_GREEN}20`}`, fontFamily: "'Share Tech Mono', monospace", fontSize: '13px', color: BIO_GREEN, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s', boxShadow: focused === f.name ? `0 0 8px ${BIO_GREEN}20` : 'none' }}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: "'Share Tech Mono', monospace", fontSize: '9px', color: focused === 'campaign' ? BIO_GREEN : `${BIO_GREEN}30`, letterSpacing: '0.2em', marginBottom: '5px' }}>INCIDENT_LOG</label>
                  <textarea name="campaign" placeholder="Describe the rejection" value={formData.campaign} onChange={handleChange} required rows={3}
                    style={{ width: '100%', padding: '10px 12px', background: VOID, border: `1px solid ${focused === 'campaign' ? BIO_GREEN : `${BIO_GREEN}20`}`, fontFamily: "'Share Tech Mono', monospace", fontSize: '13px', color: BIO_GREEN, outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                  />
                </div>
                <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start' }}>
                  <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: BIO_GREEN }} />
                  <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '11px', color: `${BIO_GREEN}40`, lineHeight: 1.6 }}>
                    ACCEPT:: <Link to="/privacy" style={{ color: BIO_GREEN, textDecoration: 'none' }}>PRIVACY_PROTOCOL</Link>
                  </span>
                </label>
                <button type="submit" disabled={isSubmitting} style={{
                  padding: '14px', background: isSubmitting ? 'transparent' : `${BIO_GREEN}15`,
                  color: BIO_GREEN, fontFamily: "'Share Tech Mono', monospace",
                  fontSize: '13px', letterSpacing: '0.15em', border: `1px solid ${BIO_GREEN}`,
                  cursor: isSubmitting ? 'wait' : 'pointer', transition: 'all 0.15s',
                  boxShadow: isSubmitting ? 'none' : `0 0 15px ${BIO_GREEN}20`,
                  textShadow: `0 0 8px ${BIO_GREEN}60`,
                }}>
                  {isSubmitting ? '>>> TRANSMITTING...' : '>>> SUBMIT_REQUEST'}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default IndexV57;
