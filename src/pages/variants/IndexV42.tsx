// V42: Vintage Travel Poster — retro tourism, bold illustration palette, destination drama
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV42 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Josefin+Sans:wght@300;400;600&display=swap';
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
    await new Promise(r => setTimeout(r, 1400));
    setIsSubmitting(false);
    toast({ title: 'Reservation confirmed!', description: 'Your guide contacts you within 24 hours.' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const SKY = '#4B7BA6';
  const SUNSET = '#E8672A';
  const CREAM = '#FAF0DC';
  const MIDNIGHT = '#1C2B3A';
  const SAND = '#D4B483';
  const WHITE = '#FFFEF9';

  return (
    <div style={{ minHeight: '100vh', background: MIDNIGHT, fontFamily: "'Josefin Sans', sans-serif", color: WHITE, position: 'relative', overflow: 'hidden' }}>

      {/* Sky gradient background */}
      <div style={{ position: 'fixed', inset: 0, background: `linear-gradient(180deg, ${SKY} 0%, #2A4F6E 40%, ${MIDNIGHT} 100%)`, zIndex: 0 }} />

      {/* Stylized mountains/horizon */}
      <svg style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', height: '45vh', zIndex: 0, opacity: 0.6 }} viewBox="0 0 1200 400" preserveAspectRatio="none">
        <polygon points="0,400 150,200 300,300 450,150 600,250 750,100 900,220 1050,160 1200,280 1200,400" fill="#0F1820" />
        <polygon points="0,400 200,280 400,200 600,320 800,200 1000,280 1200,220 1200,400" fill="#0A1015" />
      </svg>

      {/* Stars */}
      {[...Array(30)].map((_, i) => (
        <div key={i} style={{ position: 'fixed', top: `${Math.random() * 40}%`, left: `${Math.random() * 100}%`, width: 2, height: 2, borderRadius: '50%', background: CREAM, opacity: 0.6 + Math.random() * 0.4, zIndex: 0 }} />
      ))}

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header — poster banner style */}
        <div style={{ background: SUNSET, padding: '6px 0', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 600, fontSize: '11px', color: WHITE, letterSpacing: '0.4em' }}>REJECTED BY SILICON VALLEY · EMBRACED BY EUROPE</div>
        </div>
        <header style={{ padding: '24px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'Abril Fatface', serif", fontSize: '24px', color: CREAM, letterSpacing: '0.05em', textShadow: `2px 2px 0 ${MIDNIGHT}` }}>SOVEREIGN MEDIA</div>
            <div style={{ fontSize: '10px', color: SAND, letterSpacing: '0.3em', marginTop: '2px' }}>BRUSSELS · HAMBURG · AMSTERDAM</div>
          </div>
          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {['Services', 'Advisory', 'Insights'].map(item => (
              <a key={item} href="#" style={{ fontSize: '12px', fontWeight: 600, color: `${CREAM}80`, textDecoration: 'none', letterSpacing: '0.15em', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = CREAM)}
                onMouseLeave={e => (e.currentTarget.style.color = `${CREAM}80`)}
              >{item}</a>
            ))}
            <Link to="/crisis-contact" style={{ fontSize: '11px', fontWeight: 600, color: MIDNIGHT, background: SUNSET, padding: '8px 20px', textDecoration: 'none', letterSpacing: '0.15em' }}>BOOK NOW →</Link>
          </nav>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', padding: '32px 64px 80px', alignItems: 'start' }}>

          {/* Left: Travel poster hero */}
          <div>
            {/* Destination stamp */}
            <div style={{ display: 'inline-block', border: `3px solid ${SUNSET}`, padding: '8px 16px', marginBottom: '32px', transform: 'rotate(-2deg)' }}>
              <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 600, fontSize: '10px', color: SUNSET, letterSpacing: '0.3em' }}>✗ ENTRY DENIED</div>
            </div>

            {/* Poster headline */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: "'Abril Fatface', serif", fontSize: 'clamp(48px, 7vw, 100px)', lineHeight: 0.9, color: CREAM, textShadow: `3px 3px 0 ${MIDNIGHT}`, letterSpacing: '0.02em' }}>
                VISIT<br /><span style={{ color: SUNSET }}>FREE</span><br />EUROPE
              </div>
            </div>

            <div style={{ fontSize: '14px', fontWeight: 300, color: SAND, lineHeight: 2, maxWidth: '380px', marginBottom: '36px', letterSpacing: '0.05em' }}>
              Sovereign European infrastructure for political campaigns. 27 EU member states. TTPA 2024/900 compliant. Zero US platform dependency. Deploy in 24 hours.
            </div>

            {/* Poster-style stat badges */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
              {[['27', 'EU STATES'], ['24H', 'GO LIVE'], ['100%', 'TTPA'], ['0%', 'US DEP.']].map(([n, l]) => (
                <div key={l} style={{ background: SKY, border: `2px solid ${SAND}40`, padding: '12px 16px', textAlign: 'center', minWidth: '70px' }}>
                  <div style={{ fontFamily: "'Abril Fatface', serif", fontSize: '22px', color: CREAM }}>{n}</div>
                  <div style={{ fontSize: '8px', color: SAND, letterSpacing: '0.2em', marginTop: '3px' }}>{l}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '11px', color: `${SAND}80`, letterSpacing: '0.1em' }}>
              {['EU Parliament', 'DG COMM', 'EPP Group', 'S&D Group'].map(org => (
                <span key={org}>◆ {org}</span>
              ))}
            </div>
          </div>

          {/* Right: Form as "booking" card */}
          <div>
            <div style={{ background: `${WHITE}F0`, border: `2px solid ${SAND}40`, padding: '36px', backdropFilter: 'blur(8px)' }}>
              <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 600, fontSize: '10px', color: SUNSET, letterSpacing: '0.3em', marginBottom: '8px' }}>RESERVE YOUR ACCESS</div>
              <div style={{ fontFamily: "'Abril Fatface', serif", fontSize: '26px', color: MIDNIGHT, marginBottom: '8px', lineHeight: 1.1 }}>Request<br />Advisory</div>
              <p style={{ fontSize: '13px', color: `${MIDNIGHT}70`, lineHeight: 1.9, marginBottom: '28px', letterSpacing: '0.03em' }}>
                A senior advisor will be in touch within 24 hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { name: 'organisation', label: 'Organisation', ph: 'Your organisation' },
                  { name: 'name', label: 'Full Name', ph: 'Your full name' },
                  { name: 'email', label: 'Email', ph: 'your@address.eu', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: 600, color: focused === f.name ? SUNSET : `${MIDNIGHT}60`, letterSpacing: '0.2em', marginBottom: '6px', transition: 'color 0.15s' }}>{f.label.toUpperCase()}</label>
                    <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                      value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                      style={{ width: '100%', padding: '10px 12px', background: `${CREAM}80`, border: `1px solid ${focused === f.name ? SUNSET : `${MIDNIGHT}20`}`, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, fontSize: '14px', color: MIDNIGHT, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s' }}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: 600, color: focused === 'campaign' ? SUNSET : `${MIDNIGHT}60`, letterSpacing: '0.2em', marginBottom: '6px' }}>Situation</label>
                  <textarea name="campaign" placeholder="Describe your campaign situation" value={formData.campaign} onChange={handleChange} required rows={3}
                    style={{ width: '100%', padding: '10px 12px', background: `${CREAM}80`, border: `1px solid ${focused === 'campaign' ? SUNSET : `${MIDNIGHT}20`}`, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 300, fontSize: '14px', color: MIDNIGHT, outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                  />
                </div>
                <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start' }}>
                  <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: SUNSET, marginTop: 2 }} />
                  <span style={{ fontSize: '12px', color: `${MIDNIGHT}60`, lineHeight: 1.6 }}>
                    I accept the <Link to="/privacy" style={{ color: SKY, textDecoration: 'none', fontWeight: 600 }}>Privacy Policy</Link>
                  </span>
                </label>
                <button type="submit" disabled={isSubmitting} style={{
                  padding: '16px', background: isSubmitting ? SAND : SUNSET,
                  color: WHITE, fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 600, fontSize: '13px', letterSpacing: '0.25em',
                  border: 'none', cursor: isSubmitting ? 'wait' : 'pointer', transition: 'background 0.15s',
                }}
                  onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.background = SKY; }}
                  onMouseLeave={e => { if (!isSubmitting) e.currentTarget.style.background = SUNSET; }}
                >
                  {isSubmitting ? 'BOOKING...' : 'BOOK ADVISORY →'}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default IndexV42;
