// V43: Neon Sign / Las Vegas Strip — glowing tubes on dark, Americana nostalgia
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV43 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [flicker, setFlicker] = useState(true);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Pacifico&family=Permanent+Marker&family=Roboto:wght@300;400&display=swap';
    document.head.appendChild(link);

    const t = setInterval(() => setFlicker(f => !f), 3000 + Math.random() * 2000);
    return () => { document.head.removeChild(link); clearInterval(t); };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) { toast({ title: 'Check the box, pal', variant: 'destructive' }); return; }
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    toast({ title: "You're in!", description: "We'll buzz you within 24 hours." });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const HOT_PINK = '#FF2D78';
  const CYAN = '#00E5FF';
  const GOLD = '#FFD700';
  const PURPLE = '#BF5FFF';
  const DARK = '#0A0A0F';
  const DARK2 = '#12121A';

  const neonGlow = (color: string, intensity = 1) =>
    `0 0 ${7 * intensity}px ${color}, 0 0 ${14 * intensity}px ${color}, 0 0 ${28 * intensity}px ${color}`;

  const style = `
    @keyframes v43-buzz { 0%,100%{opacity:1} 92%{opacity:1} 93%{opacity:0.6} 94%{opacity:1} 97%{opacity:0.8} 98%{opacity:1} }
    @keyframes v43-pulse { 0%,100%{opacity:0.8} 50%{opacity:1} }
    .v43-neon-pink { animation: v43-buzz 4s infinite; }
    .v43-neon-cyan { animation: v43-pulse 2s ease-in-out infinite; }
  `;

  return (
    <div style={{ minHeight: '100vh', background: DARK, fontFamily: "'Roboto', sans-serif", fontWeight: 300, color: '#CCC', position: 'relative', overflow: 'hidden' }}>
      <style>{style}</style>

      {/* Dark brick texture */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.04, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(255,255,255,0.3) 20px, rgba(255,255,255,0.3) 21px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)', backgroundSize: '41px 21px' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        {/* Header */}
        <header style={{ padding: '32px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontFamily: "'Pacifico', cursive", fontSize: '24px', color: HOT_PINK, textShadow: neonGlow(HOT_PINK), opacity: flicker ? 1 : 0.7, transition: 'opacity 0.1s' }}>
            Sovereign Media
          </div>
          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {['Services', 'Advisory', 'Insights'].map(item => (
              <a key={item} href="#" style={{ fontSize: '13px', color: '#888', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = CYAN; e.currentTarget.style.textShadow = neonGlow(CYAN, 0.5); }}
                onMouseLeave={e => { e.currentTarget.style.color = '#888'; e.currentTarget.style.textShadow = 'none'; }}
              >{item}</a>
            ))}
            <Link to="/crisis-contact" style={{ fontSize: '13px', color: GOLD, textDecoration: 'none', textShadow: neonGlow(GOLD, 0.7) }}>Emergency →</Link>
          </nav>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', paddingTop: '24px', paddingBottom: '80px', alignItems: 'start' }}>

          {/* Left: Neon sign hero */}
          <div>
            {/* "REJECTED" neon sign */}
            <div style={{ border: `2px solid ${HOT_PINK}60`, padding: '16px 24px', marginBottom: '40px', display: 'inline-block', borderRadius: '4px', background: '#0D0010' }}>
              <div className="v43-neon-pink" style={{ fontFamily: "'Permanent Marker', cursive", fontSize: '18px', color: HOT_PINK, textShadow: neonGlow(HOT_PINK), letterSpacing: '0.1em' }}>
                ✗ REJECTED: POLITICAL
              </div>
            </div>

            {/* Main neon sign */}
            <div style={{ marginBottom: '40px' }}>
              <div style={{ fontFamily: "'Pacifico', cursive", fontSize: 'clamp(48px, 7vw, 96px)', color: CYAN, textShadow: neonGlow(CYAN), lineHeight: 1.1 }} className="v43-neon-cyan">
                Sovereign
              </div>
              <div style={{ fontFamily: "'Pacifico', cursive", fontSize: 'clamp(32px, 5vw, 64px)', color: GOLD, textShadow: neonGlow(GOLD), lineHeight: 1.1, marginLeft: '20px' }}>
                Media
              </div>
              <div style={{ fontFamily: "'Permanent Marker', cursive", fontSize: 'clamp(14px, 2vw, 20px)', color: PURPLE, textShadow: neonGlow(PURPLE, 0.6), marginTop: '8px', letterSpacing: '0.15em' }}>
                Beyond Their Reach
              </div>
            </div>

            <p style={{ fontSize: '14px', color: '#777', lineHeight: 2, maxWidth: '380px', marginBottom: '36px' }}>
              Sovereign European infrastructure for political campaigns. TTPA 2024/900 compliant. 27 EU member states. Zero US dependency. Deploy in 24 hours.
            </p>

            {/* Neon stat marquee boxes */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '12px', marginBottom: '28px' }}>
              {[['27', 'EU STATES', CYAN], ['24H', 'GO LIVE', GOLD], ['100%', 'TTPA', HOT_PINK], ['ZERO', 'US DEP.', PURPLE]].map(([n, l, c]) => (
                <div key={l} style={{ background: DARK2, border: `1px solid ${c as string}40`, padding: '16px', textAlign: 'center', borderRadius: '2px' }}>
                  <div style={{ fontFamily: "'Pacifico', cursive", fontSize: '24px', color: c as string, textShadow: neonGlow(c as string, 0.6) }}>{n}</div>
                  <div style={{ fontSize: '9px', color: '#555', letterSpacing: '0.2em', marginTop: '4px' }}>{l}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {['EU Parliament', 'DG COMM', 'EPP Group', 'S&D Group'].map(org => (
                <span key={org} style={{ fontSize: '11px', color: '#555', letterSpacing: '0.08em' }}>· {org}</span>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div style={{ background: DARK2, border: `1px solid ${HOT_PINK}30`, padding: '36px' }}>
              <div style={{ fontFamily: "'Permanent Marker', cursive", fontSize: '13px', color: HOT_PINK, textShadow: neonGlow(HOT_PINK, 0.5), letterSpacing: '0.1em', marginBottom: '8px' }}>OPEN 24/7</div>
              <div style={{ fontFamily: "'Pacifico', cursive", fontSize: '28px', color: GOLD, textShadow: neonGlow(GOLD, 0.6), marginBottom: '8px', lineHeight: 1.2 }}>Request<br />Advisory</div>
              <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.9, marginBottom: '28px' }}>
                A senior advisor will buzz you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { name: 'organisation', label: 'Organisation', ph: 'Your organisation' },
                  { name: 'name', label: 'Full Name', ph: 'Your full name' },
                  { name: 'email', label: 'Email', ph: 'your@address.eu', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: 400, color: focused === f.name ? CYAN : '#555', letterSpacing: '0.2em', marginBottom: '6px', transition: 'color 0.15s' }}>{f.label.toUpperCase()}</label>
                    <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                      value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                      style={{ width: '100%', padding: '11px 14px', background: DARK, border: `1px solid ${focused === f.name ? CYAN : '#333'}`, fontFamily: "'Roboto', sans-serif", fontWeight: 300, fontSize: '14px', color: '#CCC', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s', boxShadow: focused === f.name ? `0 0 8px ${CYAN}40` : 'none' }}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: 400, color: focused === 'campaign' ? CYAN : '#555', letterSpacing: '0.2em', marginBottom: '6px' }}>Situation</label>
                  <textarea name="campaign" placeholder="Describe your campaign" value={formData.campaign} onChange={handleChange} required rows={3}
                    style={{ width: '100%', padding: '11px 14px', background: DARK, border: `1px solid ${focused === 'campaign' ? CYAN : '#333'}`, fontFamily: "'Roboto', sans-serif", fontWeight: 300, fontSize: '14px', color: '#CCC', outline: 'none', resize: 'none', boxSizing: 'border-box', boxShadow: focused === 'campaign' ? `0 0 8px ${CYAN}40` : 'none' }}
                    onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                  />
                </div>
                <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start' }}>
                  <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: HOT_PINK }} />
                  <span style={{ fontSize: '12px', color: '#555', lineHeight: 1.6 }}>
                    I agree to the <Link to="/privacy" style={{ color: CYAN, textDecoration: 'none' }}>Privacy Policy</Link>
                  </span>
                </label>
                <button type="submit" disabled={isSubmitting} style={{
                  padding: '16px', background: 'transparent',
                  border: `2px solid ${isSubmitting ? '#444' : HOT_PINK}`,
                  color: isSubmitting ? '#555' : HOT_PINK,
                  fontFamily: "'Permanent Marker', cursive", fontSize: '16px', letterSpacing: '0.1em',
                  cursor: isSubmitting ? 'wait' : 'pointer', transition: 'all 0.15s',
                  textShadow: isSubmitting ? 'none' : neonGlow(HOT_PINK, 0.4),
                  boxShadow: isSubmitting ? 'none' : `0 0 12px ${HOT_PINK}30`,
                }}
                  onMouseEnter={e => { if (!isSubmitting) { e.currentTarget.style.background = `${HOT_PINK}15`; } }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
                >
                  {isSubmitting ? 'Buzzing...' : 'Ring the Bell →'}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default IndexV43;
