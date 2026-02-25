// V55: Art Deco Moderne — gold geometric ornaments, symmetrical, 1930s glamour, black tie
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV55 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Poiret+One&family=Josefin+Sans:wght@100;300;400;600&display=swap';
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
    toast({ title: 'Request received', description: 'An advisor will attend within 24 hours.' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const GOLD = '#C9A84C';
  const GOLD_LIGHT = '#E8C96A';
  const NEAR_BLACK = '#0D0D0D';
  const DARK_BG = '#121212';
  const IVORY = '#F5EDD5';
  const MID = '#8A7050';

  const style = `
    @keyframes v55-shimmer { 0%,100%{opacity:0.6} 50%{opacity:1} }
    .v55-gold { animation: v55-shimmer 3s ease-in-out infinite; }
  `;

  // Art deco fan shape SVG
  const Fan = ({ color, opacity = 1 }: { color: string; opacity?: number }) => (
    <svg width="120" height="60" viewBox="0 0 120 60" style={{ opacity }}>
      {[0,15,30,45,60,75,90].map((angle, i) => (
        <line key={i} x1="60" y1="60" x2={60 + 55 * Math.cos((angle - 90) * Math.PI / 180)} y2={60 + 55 * Math.sin((angle - 90) * Math.PI / 180)} stroke={color} strokeWidth="1" opacity="0.7" />
      ))}
      <path d="M 5 60 A 55 55 0 0 1 115 60" fill="none" stroke={color} strokeWidth="1.5" />
      <path d="M 15 60 A 45 45 0 0 1 105 60" fill="none" stroke={color} strokeWidth="0.8" />
    </svg>
  );

  return (
    <div style={{ minHeight: '100vh', background: DARK_BG, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, color: IVORY, position: 'relative', overflow: 'hidden' }}>
      <style>{style}</style>

      {/* Deco corner ornaments */}
      <div style={{ position: 'fixed', top: 0, left: 0, opacity: 0.3, zIndex: 0 }}><Fan color={GOLD} /></div>
      <div style={{ position: 'fixed', top: 0, right: 0, opacity: 0.3, zIndex: 0, transform: 'scaleX(-1)' }}><Fan color={GOLD} /></div>
      <div style={{ position: 'fixed', bottom: 0, left: 0, opacity: 0.3, zIndex: 0, transform: 'scaleY(-1)' }}><Fan color={GOLD} /></div>
      <div style={{ position: 'fixed', bottom: 0, right: 0, opacity: 0.3, zIndex: 0, transform: 'scale(-1,-1)' }}><Fan color={GOLD} /></div>

      {/* Geometric background lines */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.04, backgroundImage: `linear-gradient(${GOLD} 1px, transparent 1px), linear-gradient(90deg, ${GOLD} 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

      {/* Top deco border */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ height: '2px', background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
        <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${MID}, transparent)`, marginTop: '2px' }} />
        <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${GOLD_LIGHT}, transparent)`, marginTop: '2px' }} />

        <header style={{ padding: '28px 72px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'Poiret One', cursive", fontSize: '22px', color: GOLD, letterSpacing: '0.2em' }} className="v55-gold">SOVEREIGN MEDIA</div>
            <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 100, fontSize: '9px', color: MID, letterSpacing: '0.5em', marginTop: '4px' }}>BRUSSELS · HAMBURG · AMSTERDAM</div>
          </div>
          {/* Deco diamond divider */}
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            {[...Array(5)].map((_, i) => (
              <div key={i} style={{ width: 6, height: 6, background: i === 2 ? GOLD : `${GOLD}40`, transform: 'rotate(45deg)' }} />
            ))}
          </div>
          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {['Services', 'Advisory', 'Insights'].map(item => (
              <a key={item} href="#" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 100, fontSize: '12px', color: MID, textDecoration: 'none', letterSpacing: '0.3em', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = GOLD)}
                onMouseLeave={e => (e.currentTarget.style.color = MID)}
              >{item.toUpperCase()}</a>
            ))}
            <Link to="/crisis-contact" style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 400, fontSize: '11px', color: NEAR_BLACK, background: `linear-gradient(90deg,${MID},${GOLD},${MID})`, padding: '8px 20px', textDecoration: 'none', letterSpacing: '0.2em' }}>ENQUIRE</Link>
          </nav>
        </header>

        {/* Deco divider rule */}
        <div style={{ textAlign: 'center', margin: '0 72px 32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg,transparent,${GOLD})` }} />
            <div style={{ color: GOLD, fontSize: '12px', letterSpacing: '0.5em' }}>◆ ◆ ◆</div>
            <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg,${GOLD},transparent)` }} />
          </div>
        </div>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', padding: '0 72px 80px', alignItems: 'start' }}>

          {/* Left: Deco hero */}
          <div style={{ paddingRight: '60px', borderRight: `1px solid ${MID}30` }}>
            {/* Deco rejection placard */}
            <div style={{ border: `1px solid ${GOLD}40`, padding: '10px 20px', marginBottom: '36px', display: 'inline-flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ width: 1, height: 20, background: GOLD, opacity: 0.6 }} />
              <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 100, fontSize: '10px', color: `#CC4444`, letterSpacing: '0.4em' }}>REJECTED: POLITICAL CONTENT</div>
              <div style={{ width: 1, height: 20, background: GOLD, opacity: 0.6 }} />
            </div>

            {/* Deco headline */}
            <div style={{ textAlign: 'left', marginBottom: '32px' }}>
              <div style={{ fontFamily: "'Poiret One', cursive", fontSize: 'clamp(36px, 5.5vw, 80px)', color: IVORY, lineHeight: 1.05, letterSpacing: '0.08em' }}>
                SOVEREIGN<br />
                <span style={{ color: GOLD }}>EUROPEAN</span><br />
                INFRASTRUCTURE
              </div>
            </div>

            {/* Deco sub-rule */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ height: '1px', width: '40px', background: GOLD }} />
              <div style={{ color: GOLD, fontSize: '10px', letterSpacing: '0.3em', fontWeight: 100 }}>BEYOND THEIR REACH</div>
              <div style={{ height: '1px', flex: 1, background: `linear-gradient(90deg,${GOLD},transparent)` }} />
            </div>

            <p style={{ fontSize: '15px', fontWeight: 100, lineHeight: 2.1, color: `${IVORY}80`, maxWidth: '380px', marginBottom: '40px', letterSpacing: '0.05em' }}>
              Sovereign European infrastructure for political campaigns. TTPA 2024/900 compliant. 27 EU member states. Zero US dependency. Deploy within 24 hours.
            </p>

            {/* Deco stat panel */}
            <div style={{ border: `1px solid ${GOLD}30`, padding: '1px' }}>
              <div style={{ border: `1px solid ${MID}20` }}>
                {[['27', 'EU States'], ['24h', 'Deployment'], ['100%', 'TTPA'], ['0%', 'US Dep.']].map(([n, l], i) => (
                  <div key={l} style={{ padding: '14px 20px', borderBottom: i < 3 ? `1px solid ${MID}20` : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontFamily: "'Poiret One', cursive", fontSize: '26px', color: GOLD, letterSpacing: '0.05em' }}>{n}</div>
                    <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 100, fontSize: '10px', color: MID, letterSpacing: '0.3em' }}>{l.toUpperCase()}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {['EU Parliament', 'DG COMM', 'EPP Group', 'S&D Group'].map(org => (
                <span key={org} style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 100, fontSize: '11px', color: MID, letterSpacing: '0.2em' }}>◆ {org}</span>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div style={{ paddingLeft: '60px' }}>
            <div style={{ border: `1px solid ${GOLD}30`, padding: '1px', marginBottom: '0' }}>
              <div style={{ border: `1px solid ${MID}20`, padding: '36px' }}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <div style={{ color: GOLD, fontSize: '10px', letterSpacing: '0.5em', fontWeight: 100, marginBottom: '8px' }}>◆ ◆ ◆</div>
                  <div style={{ fontFamily: "'Poiret One', cursive", fontSize: '28px', color: IVORY, letterSpacing: '0.1em' }}>Request Advisory</div>
                  <div style={{ color: GOLD, fontSize: '10px', letterSpacing: '0.5em', fontWeight: 100, marginTop: '8px' }}>◆ ◆ ◆</div>
                </div>
                <p style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 100, fontStyle: 'italic', fontSize: '13px', color: MID, lineHeight: 2, marginBottom: '28px', textAlign: 'center', letterSpacing: '0.05em' }}>
                  An advisor will attend to you within twenty-four hours.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  {[
                    { name: 'organisation', label: 'Organisation', ph: 'Your organisation' },
                    { name: 'name', label: 'Name', ph: 'Your full name' },
                    { name: 'email', label: 'Address', ph: 'your@address.eu', type: 'email' },
                  ].map(f => (
                    <div key={f.name}>
                      <label style={{ display: 'block', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 100, fontSize: '9px', color: focused === f.name ? GOLD : MID, letterSpacing: '0.35em', marginBottom: '8px', transition: 'color 0.2s', textAlign: 'center' }}>{f.label.toUpperCase()}</label>
                      <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                        value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                        style={{ width: '100%', padding: '10px 0', background: 'transparent', border: 'none', borderBottom: `1px solid ${focused === f.name ? GOLD : `${MID}40`}`, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 100, fontSize: '14px', color: IVORY, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s', textAlign: 'center', letterSpacing: '0.1em' }}
                        onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontFamily: "'Josefin Sans', sans-serif", fontWeight: 100, fontSize: '9px', color: focused === 'campaign' ? GOLD : MID, letterSpacing: '0.35em', marginBottom: '8px', textAlign: 'center' }}>SITUATION</label>
                    <textarea name="campaign" placeholder="Describe your situation" value={formData.campaign} onChange={handleChange} required rows={3}
                      style={{ width: '100%', padding: '10px 0', background: 'transparent', border: 'none', borderBottom: `1px solid ${focused === 'campaign' ? GOLD : `${MID}40`}`, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 100, fontSize: '14px', color: IVORY, outline: 'none', resize: 'none', boxSizing: 'border-box', letterSpacing: '0.05em' }}
                      onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                    />
                  </div>
                  <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start', justifyContent: 'center' }}>
                    <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: GOLD, marginTop: 2 }} />
                    <span style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 100, fontSize: '11px', color: MID, lineHeight: 1.7, letterSpacing: '0.05em' }}>
                      I agree to the <Link to="/privacy" style={{ color: GOLD, textDecoration: 'none' }}>Privacy Terms</Link>
                    </span>
                  </label>
                  <button type="submit" disabled={isSubmitting} style={{
                    padding: '16px', background: isSubmitting ? 'transparent' : `linear-gradient(90deg,${MID},${GOLD},${MID})`,
                    color: isSubmitting ? MID : NEAR_BLACK,
                    fontFamily: "'Josefin Sans', sans-serif", fontWeight: 600, fontSize: '11px', letterSpacing: '0.4em',
                    border: `1px solid ${isSubmitting ? `${MID}40` : GOLD}`, cursor: isSubmitting ? 'wait' : 'pointer', transition: 'all 0.2s',
                  }}>
                    {isSubmitting ? 'ATTENDING...' : 'SUBMIT ENQUIRY'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>

        <div style={{ margin: '0 72px', textAlign: 'center', paddingBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg,transparent,${MID})` }} />
            <div style={{ color: MID, fontSize: '10px', letterSpacing: '0.3em' }}>◆ ◆ ◆</div>
            <div style={{ flex: 1, height: '1px', background: `linear-gradient(90deg,${MID},transparent)` }} />
          </div>
        </div>
        <div style={{ height: '1px', background: `linear-gradient(90deg, transparent, ${MID}, transparent)` }} />
        <div style={{ height: '2px', background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`, marginTop: '2px' }} />
      </div>
    </div>
  );
};
export default IndexV55;
