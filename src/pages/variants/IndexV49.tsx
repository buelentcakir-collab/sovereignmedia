// V49: Film Noir / 1940s Detective — halftone, venetian blind shadows, sepia drama
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV49 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Special+Elite&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) { toast({ title: "Can't take the case", variant: 'destructive' }); return; }
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1600));
    setIsSubmitting(false);
    toast({ title: "Case accepted", description: "My associate will call within 24 hours." });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const SEPIA = '#C8A96E';
  const DARK = '#0E0C09';
  const PAPER = '#E8D5A0';
  const SHADOW = '#1A1409';
  const DIM = '#6B5A3A';

  const style = `
    @keyframes v49-blind {
      0%,100% { background-position: 0 0; }
      50% { background-position: 0 3px; }
    }
    @keyframes v49-smoke { 0%{transform:translateY(0) rotate(0);opacity:0.3} 100%{transform:translateY(-60px) rotate(10deg);opacity:0} }
    .v49-venetian {
      background-image: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 12px,
        rgba(0,0,0,0.35) 12px,
        rgba(0,0,0,0.35) 14px
      );
    }
  `;

  return (
    <div style={{ minHeight: '100vh', background: DARK, fontFamily: "'Special Elite', cursive", color: PAPER, position: 'relative', overflow: 'hidden' }}>
      <style>{style}</style>

      {/* Halftone texture */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle, rgba(200,169,110,0.8) 1px, transparent 1px)', backgroundSize: '4px 4px' }} />

      {/* Venetian blind light effect */}
      <div className="v49-venetian" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.5 }} />

      {/* Spotlight glow */}
      <div style={{ position: 'fixed', top: '20%', right: '35%', width: '400px', height: '400px', background: `radial-gradient(ellipse, ${SEPIA}15, transparent 70%)`, zIndex: 0, pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Case file header */}
        <div style={{ background: SHADOW, borderBottom: `2px solid ${DIM}`, padding: '8px 64px', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '10px', color: DIM, letterSpacing: '0.3em' }}>CASE FILE: EU-INFRA-001</span>
          <span style={{ fontSize: '10px', color: DIM, letterSpacing: '0.2em' }}>CLASSIFIED</span>
          <span style={{ fontSize: '10px', color: DIM, letterSpacing: '0.2em' }}>YEAR OF OUR LORD 2026</span>
        </div>

        <header style={{ padding: '28px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: '22px', color: SEPIA, letterSpacing: '0.06em' }}>SOVEREIGN MEDIA</div>
            <div style={{ fontSize: '10px', color: DIM, letterSpacing: '0.3em', marginTop: '2px', fontStyle: 'italic' }}>Private Investigators · Brussels Division</div>
          </div>
          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {['Services', 'Evidence', 'Contacts'].map(item => (
              <a key={item} href="#" style={{ fontSize: '13px', color: DIM, textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = SEPIA)}
                onMouseLeave={e => (e.currentTarget.style.color = DIM)}
              >{item}</a>
            ))}
            <Link to="/crisis-contact" style={{ fontSize: '13px', color: DARK, background: SEPIA, padding: '6px 16px', textDecoration: 'none', fontWeight: 700 }}>Take My Case</Link>
          </nav>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', padding: '16px 64px 80px' }}>

          {/* Left: Detective monologue */}
          <div style={{ paddingRight: '48px', borderRight: `1px solid ${DIM}40` }}>
            {/* Evidence stamp */}
            <div style={{ display: 'inline-block', border: `3px solid #8B0000`, padding: '8px 16px', marginBottom: '32px', transform: 'rotate(-4deg)', background: 'rgba(139,0,0,0.1)' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: '14px', color: '#CC2200', letterSpacing: '0.1em' }}>REJECTED: POLITICAL</div>
            </div>

            {/* Noir headline */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontStyle: 'italic', fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: 0.9, color: PAPER }}>
                The<br />Sovereign<br /><span style={{ color: SEPIA }}>Solution.</span>
              </div>
            </div>

            {/* Typewriter body copy */}
            <div style={{ borderLeft: `3px solid ${SEPIA}`, paddingLeft: '20px', marginBottom: '36px' }}>
              <p style={{ fontSize: '14px', lineHeight: 2.1, color: `${PAPER}90`, fontStyle: 'italic' }}>
                "They said it couldn't be done. Google wouldn't run my campaign. Meta slammed the door. But there's always another way. Sovereign European infrastructure. TTPA-clean. 27 countries. Deploying in 24 hours. No Silicon Valley strings attached."
              </p>
            </div>

            {/* Case notes — stats */}
            <div style={{ border: `1px solid ${DIM}`, background: SHADOW, padding: '20px', marginBottom: '24px' }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '10px', color: SEPIA, letterSpacing: '0.3em', marginBottom: '12px' }}>CASE EVIDENCE:</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '12px' }}>
                {[['27', 'EU States'], ['24h', 'Response'], ['100%', 'TTPA'], ['Zero', 'US Dep.']].map(([n, l]) => (
                  <div key={l} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: '24px', color: SEPIA, minWidth: '48px' }}>{n}</div>
                    <div style={{ fontSize: '10px', color: DIM, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ fontSize: '11px', color: DIM, letterSpacing: '0.15em', fontStyle: 'italic' }}>
              Known associates: EU Parliament · DG COMM · EPP Group · S&D Group
            </div>
          </div>

          {/* Right: Dossier form */}
          <div style={{ paddingLeft: '48px' }}>
            <div style={{ border: `1px solid ${DIM}`, padding: '32px', background: SHADOW, position: 'relative' }}>
              {/* Folder tab */}
              <div style={{ position: 'absolute', top: -28, left: 20, background: SEPIA, padding: '6px 16px', fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '10px', color: DARK, letterSpacing: '0.2em' }}>INTAKE FORM</div>

              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: '24px', color: PAPER, marginBottom: '6px' }}>Open a Case</div>
              <p style={{ fontStyle: 'italic', fontSize: '13px', color: DIM, lineHeight: 1.9, marginBottom: '28px' }}>
                Leave your particulars. My associate will be in touch within twenty-four hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { name: 'organisation', label: 'Organisation', ph: 'Your organisation' },
                  { name: 'name', label: 'Your Name', ph: 'Full name' },
                  { name: 'email', label: 'Contact Wire', ph: 'your@address.eu', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontFamily: "'Playfair Display', serif", fontSize: '10px', color: focused === f.name ? SEPIA : DIM, letterSpacing: '0.25em', marginBottom: '6px', transition: 'color 0.15s', textTransform: 'uppercase' }}>{f.label}</label>
                    <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                      value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                      style={{ width: '100%', padding: '10px 0', background: 'transparent', border: 'none', borderBottom: `1px solid ${focused === f.name ? SEPIA : `${DIM}60`}`, fontFamily: "'Special Elite', cursive", fontSize: '14px', color: PAPER, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s' }}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: "'Playfair Display', serif", fontSize: '10px', color: focused === 'campaign' ? SEPIA : DIM, letterSpacing: '0.25em', marginBottom: '6px', textTransform: 'uppercase' }}>The Crime</label>
                  <textarea name="campaign" placeholder="What did they block?" value={formData.campaign} onChange={handleChange} required rows={3}
                    style={{ width: '100%', padding: '10px 0', background: 'transparent', border: 'none', borderBottom: `1px solid ${focused === 'campaign' ? SEPIA : `${DIM}60`}`, fontFamily: "'Special Elite', cursive", fontSize: '14px', color: PAPER, outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                  />
                </div>
                <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start' }}>
                  <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: SEPIA }} />
                  <span style={{ fontStyle: 'italic', fontSize: '12px', color: DIM, lineHeight: 1.6 }}>
                    I swear by the <Link to="/privacy" style={{ color: SEPIA, textDecoration: 'none' }}>Code of Discretion</Link>
                  </span>
                </label>
                <button type="submit" disabled={isSubmitting} style={{
                  padding: '16px', background: isSubmitting ? `${DIM}30` : SEPIA,
                  color: isSubmitting ? DIM : DARK,
                  fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em',
                  border: 'none', cursor: isSubmitting ? 'wait' : 'pointer', transition: 'all 0.15s',
                }}>
                  {isSubmitting ? 'Filing...' : 'Take My Case →'}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default IndexV49;
