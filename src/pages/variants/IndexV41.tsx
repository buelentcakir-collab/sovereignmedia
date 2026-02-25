// V41: Art Nouveau / Mucha — organic lines, botanical motifs, gold & sage, ornate borders
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV41 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Cormorant:ital,wght@0,300;0,400;1,300;1,400&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) { toast({ title: 'Consent required', variant: 'destructive' }); return; }
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1600));
    setIsSubmitting(false);
    toast({ title: 'Your petition is received', description: 'Our counsel will attend to you within 24 hours.' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const GOLD = '#C9A84C';
  const DARK_GOLD = '#8B6914';
  const IVORY = '#FBF7EE';
  const SAGE = '#7A9E7E';
  const DEEP = '#2C3E2D';
  const CREAM = '#F5EDD8';

  const style = `
    @keyframes v41-bloom { 0%,100%{transform:scale(1) rotate(0deg)} 50%{transform:scale(1.03) rotate(1deg)} }
    .v41-ornament { animation: v41-bloom 8s ease-in-out infinite; }
  `;

  return (
    <div style={{ minHeight: '100vh', background: IVORY, fontFamily: "'Cormorant', serif", fontWeight: 300, color: DEEP, position: 'relative', overflow: 'hidden' }}>
      <style>{style}</style>

      {/* Botanical corner ornaments (SVG) */}
      <svg style={{ position: 'fixed', top: 0, left: 0, width: '280px', height: '280px', opacity: 0.12, pointerEvents: 'none', zIndex: 0 }} viewBox="0 0 200 200">
        <path d="M10,10 Q80,10 80,80 Q80,10 150,10" stroke={GOLD} strokeWidth="1.5" fill="none"/>
        <path d="M10,10 Q10,80 80,80 Q10,80 10,150" stroke={GOLD} strokeWidth="1.5" fill="none"/>
        <circle cx="80" cy="80" r="30" stroke={GOLD} strokeWidth="1" fill="none"/>
        <circle cx="80" cy="80" r="15" stroke={SAGE} strokeWidth="0.8" fill="none"/>
        <ellipse cx="40" cy="40" rx="15" ry="25" stroke={GOLD} strokeWidth="0.8" fill="none" transform="rotate(-30,40,40)"/>
        <ellipse cx="60" cy="30" rx="10" ry="20" stroke={SAGE} strokeWidth="0.8" fill="none" transform="rotate(15,60,30)"/>
      </svg>
      <svg style={{ position: 'fixed', bottom: 0, right: 0, width: '280px', height: '280px', opacity: 0.12, pointerEvents: 'none', zIndex: 0, transform: 'rotate(180deg)' }} viewBox="0 0 200 200">
        <path d="M10,10 Q80,10 80,80 Q80,10 150,10" stroke={GOLD} strokeWidth="1.5" fill="none"/>
        <path d="M10,10 Q10,80 80,80 Q10,80 10,150" stroke={GOLD} strokeWidth="1.5" fill="none"/>
        <circle cx="80" cy="80" r="30" stroke={GOLD} strokeWidth="1" fill="none"/>
        <ellipse cx="40" cy="40" rx="15" ry="25" stroke={GOLD} strokeWidth="0.8" fill="none" transform="rotate(-30,40,40)"/>
      </svg>

      {/* Top ornamental border */}
      <div style={{ height: '6px', background: `linear-gradient(90deg, ${CREAM}, ${GOLD}, ${SAGE}, ${GOLD}, ${CREAM})` }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <header style={{ padding: '28px 72px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${GOLD}40` }}>
          <div>
            <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '18px', color: DARK_GOLD, letterSpacing: '0.1em' }}>Sovereign Media</div>
            <div style={{ fontSize: '10px', color: SAGE, letterSpacing: '0.4em', marginTop: '3px' }}>Brussels · Hamburg · Amsterdam</div>
          </div>
          <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            {['Counsel', 'Advisory', 'Chronicle'].map(item => (
              <a key={item} href="#" style={{ fontFamily: "'Cormorant', serif", fontStyle: 'italic', fontSize: '14px', color: `${DEEP}70`, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = DARK_GOLD)}
                onMouseLeave={e => (e.currentTarget.style.color = `${DEEP}70`)}
              >{item}</a>
            ))}
            <Link to="/crisis-contact" style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '11px', color: DARK_GOLD, textDecoration: 'none', borderBottom: `1px solid ${GOLD}` }}>Seek Counsel</Link>
          </nav>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', padding: '48px 72px 80px', alignItems: 'start' }}>

          {/* Left: Nouveau hero */}
          <div style={{ paddingRight: '64px' }}>
            {/* Rejection panel */}
            <div style={{ border: `1px solid ${GOLD}60`, padding: '12px 20px', marginBottom: '40px', background: `${CREAM}80`, display: 'inline-block', position: 'relative' }}>
              <div style={{ position: 'absolute', top: -1, left: -1, right: -1, bottom: -1, border: `1px solid ${SAGE}30` }} />
              <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '9px', color: '#8B2020', letterSpacing: '0.3em' }}>✦ REJECTED: POLITICAL CONTENT ✦</div>
            </div>

            {/* Ornamental headline */}
            <div style={{ marginBottom: '12px', fontFamily: "'Cinzel Decorative', serif", fontSize: '9px', color: GOLD, letterSpacing: '0.5em' }}>✦ ✦ ✦</div>
            <h1 style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: 'clamp(32px, 4.5vw, 64px)', color: DEEP, lineHeight: 1.15, letterSpacing: '0.04em', marginBottom: '16px' }}>
              Sovereign<br /><span style={{ color: DARK_GOLD }}>European</span><br />Infrastructure
            </h1>
            <div style={{ fontFamily: "'Cormorant', serif", fontStyle: 'italic', fontSize: 'clamp(16px, 2vw, 24px)', color: SAGE, marginBottom: '36px', letterSpacing: '0.06em' }}>
              Beyond empire's reach.
            </div>

            {/* Ornamental rule */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
              <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, transparent, ${GOLD})` }} />
              <div style={{ color: GOLD, fontSize: '14px' }}>❧</div>
              <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg, ${GOLD}, transparent)` }} />
            </div>

            <p style={{ fontSize: '16px', fontStyle: 'italic', lineHeight: 2, color: `${DEEP}80`, maxWidth: '400px', marginBottom: '40px' }}>
              Sovereign European infrastructure for political campaigns. TTPA 2024/900 compliant. 27 EU member states. Zero US dependency. Deploy within 24 hours.
            </p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: `${GOLD}30`, border: `1px solid ${GOLD}30`, marginBottom: '28px' }}>
              {[['27', 'EU States'], ['24h', 'Deployment'], ['100%', 'TTPA'], ['0%', 'US Dep.']].map(([n, l]) => (
                <div key={l} style={{ background: IVORY, padding: '16px 8px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '22px', color: DARK_GOLD }}>{n}</div>
                  <div style={{ fontSize: '9px', color: SAGE, letterSpacing: '0.15em', marginTop: '4px' }}>{l}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {['EU Parliament', 'DG COMM', 'EPP Group', 'S&D Group'].map(org => (
                <span key={org} style={{ fontStyle: 'italic', fontSize: '12px', color: `${DEEP}50`, letterSpacing: '0.05em' }}>{org}</span>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div style={{ border: `1px solid ${GOLD}50`, background: CREAM, padding: '40px', position: 'relative' }}>
              {/* Corner ornaments */}
              {[['0','0','nw'],['0','auto','ne'],['auto','0','sw'],['auto','auto','se']].map(([t,r,id]) => (
                <div key={id} style={{ position: 'absolute', top: t === '0' ? 8 : 'auto', bottom: t === 'auto' ? 8 : 'auto', left: r === '0' ? 8 : 'auto', right: r === 'auto' ? 8 : 'auto', width: 16, height: 16, borderTop: t === '0' ? `1px solid ${GOLD}` : 'none', borderBottom: t === 'auto' ? `1px solid ${GOLD}` : 'none', borderLeft: r === '0' ? `1px solid ${GOLD}` : 'none', borderRight: r === 'auto' ? `1px solid ${GOLD}` : 'none' }} />
              ))}
              <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '11px', color: GOLD, letterSpacing: '0.3em', marginBottom: '8px' }}>✦ PETITION</div>
              <div style={{ fontFamily: "'Cinzel Decorative', serif", fontSize: '22px', color: DEEP, lineHeight: 1.2, marginBottom: '8px' }}>Request<br />Advisory</div>
              <p style={{ fontStyle: 'italic', fontSize: '13px', color: `${DEEP}60`, lineHeight: 1.9, marginBottom: '32px' }}>
                A senior counsel shall attend to your cause within twenty-four hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                {[
                  { name: 'organisation', label: 'Organisation', ph: 'Your organisation' },
                  { name: 'name', label: 'Full Name', ph: 'Your full name' },
                  { name: 'email', label: 'Correspondence', ph: 'your@address.eu', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontFamily: "'Cinzel Decorative', serif", fontSize: '9px', color: focused === f.name ? DARK_GOLD : SAGE, letterSpacing: '0.25em', marginBottom: '7px', transition: 'color 0.2s' }}>{f.label.toUpperCase()}</label>
                    <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                      value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                      style={{ width: '100%', padding: '10px 0', background: 'transparent', border: 'none', borderBottom: `1px solid ${focused === f.name ? GOLD : `${GOLD}40`}`, fontFamily: "'Cormorant', serif", fontWeight: 300, fontStyle: 'italic', fontSize: '16px', color: DEEP, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: "'Cinzel Decorative', serif", fontSize: '9px', color: focused === 'campaign' ? DARK_GOLD : SAGE, letterSpacing: '0.25em', marginBottom: '7px' }}>Your Burden</label>
                  <textarea name="campaign" placeholder="Describe what was denied" value={formData.campaign} onChange={handleChange} required rows={3}
                    style={{ width: '100%', padding: '10px 0', background: 'transparent', border: 'none', borderBottom: `1px solid ${focused === 'campaign' ? GOLD : `${GOLD}40`}`, fontFamily: "'Cormorant', serif", fontStyle: 'italic', fontWeight: 300, fontSize: '16px', color: DEEP, outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                  />
                </div>
                <label style={{ display: 'flex', gap: '12px', cursor: 'pointer', alignItems: 'flex-start' }}>
                  <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: DARK_GOLD, marginTop: 3 }} />
                  <span style={{ fontStyle: 'italic', fontSize: '12px', color: `${DEEP}60`, lineHeight: 1.7 }}>
                    I enter this <Link to="/privacy" style={{ color: DARK_GOLD, textDecoration: 'none', borderBottom: `1px solid ${GOLD}60` }}>covenant of privacy</Link>
                  </span>
                </label>
                <button type="submit" disabled={isSubmitting} style={{
                  padding: '16px', background: isSubmitting ? `${SAGE}40` : 'transparent',
                  border: `1px solid ${GOLD}`, color: DARK_GOLD,
                  fontFamily: "'Cinzel Decorative', serif", fontSize: '11px', letterSpacing: '0.2em',
                  cursor: isSubmitting ? 'wait' : 'pointer', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { if (!isSubmitting) { e.currentTarget.style.background = `${GOLD}15`; } }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                >
                  ✦ {isSubmitting ? 'Transmitting...' : 'Submit Petition'} ✦
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>

      {/* Bottom ornamental border */}
      <div style={{ height: '6px', background: `linear-gradient(90deg, ${CREAM}, ${GOLD}, ${SAGE}, ${GOLD}, ${CREAM})` }} />
    </div>
  );
};
export default IndexV41;
