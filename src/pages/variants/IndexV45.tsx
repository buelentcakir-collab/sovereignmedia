// V45: Y2K Aesthetic — chrome gradients, sparkles, iridescent, holographic early-internet
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV45 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:wght@300;400;600&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) { toast({ title: '✨ Consent required ✨', variant: 'destructive' }); return; }
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    toast({ title: '✨ Message sent! ✨', description: 'Response within 24 hours!' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const style = `
    @keyframes v45-holo { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
    @keyframes v45-sparkle { 0%,100%{opacity:0;transform:scale(0)} 50%{opacity:1;transform:scale(1)} }
    @keyframes v45-chrome { 0%{background-position:0% 0%} 100%{background-position:200% 0%} }
    @keyframes v45-glow { 0%,100%{box-shadow:0 0 10px #FF69B4,0 0 20px #00BFFF} 50%{box-shadow:0 0 20px #FF69B4,0 0 40px #00BFFF,0 0 60px #9B59B6} }
    .v45-holo { background: linear-gradient(135deg, #FF69B4,#00BFFF,#FF69B4,#7B68EE,#00FA9A,#FF69B4); background-size:400% 400%; animation: v45-holo 4s ease infinite; -webkit-background-clip:text; background-clip:text; color:transparent; }
    .v45-chrome { background:linear-gradient(90deg,#C0C0C0,#FFFFFF,#808080,#FFFFFF,#C0C0C0); background-size:200% 100%; animation: v45-chrome 3s linear infinite; -webkit-background-clip:text; background-clip:text; color:transparent; }
    .v45-card { animation: v45-glow 3s ease-in-out infinite; }
    .v45-sparkle { animation: v45-sparkle 1.5s ease-in-out infinite; }
  `;

  const PINK = '#FF69B4';
  const BLUE = '#00BFFF';
  const BG = '#0A0015';
  const CARD_BG = 'rgba(255,255,255,0.05)';

  const sparklePositions = [[10,15],[85,25],[20,65],[75,40],[50,80],[30,30],[90,70],[60,10]];

  return (
    <div style={{ minHeight: '100vh', background: BG, fontFamily: "'Exo 2', sans-serif", fontWeight: 300, color: '#E0E0FF', position: 'relative', overflow: 'hidden' }}>
      <style>{style}</style>

      {/* Holographic background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, background: `radial-gradient(ellipse at 20% 50%, rgba(255,105,180,0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(0,191,255,0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(155,89,182,0.1) 0%, transparent 50%)` }} />

      {/* Grid lines */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.1, backgroundImage: `linear-gradient(rgba(0,191,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,191,255,0.5) 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      {/* Sparkles */}
      {sparklePositions.map(([l, t], i) => (
        <div key={i} className="v45-sparkle" style={{ position: 'fixed', left: `${l}%`, top: `${t}%`, width: 8, height: 8, zIndex: 0, animationDelay: `${i * 0.3}s` }}>
          <div style={{ position: 'absolute', inset: 0, background: PINK, clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />
        </div>
      ))}

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        {/* Header */}
        <header style={{ padding: '28px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid rgba(255,105,180,0.3)` }}>
          <div>
            <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: '20px' }} className="v45-chrome">SOVEREIGN MEDIA</div>
            <div style={{ fontFamily: "'Exo 2', sans-serif", fontSize: '9px', color: PINK, letterSpacing: '0.3em', marginTop: '3px' }}>✨ BRUSSELS · HAMBURG · AMSTERDAM ✨</div>
          </div>
          <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {['Services', 'Advisory', 'Insights'].map(item => (
              <a key={item} href="#" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '10px', color: `${BLUE}80`, textDecoration: 'none', letterSpacing: '0.1em', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = BLUE)}
                onMouseLeave={e => (e.currentTarget.style.color = `${BLUE}80`)}
              >{item}</a>
            ))}
            <Link to="/crisis-contact" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '10px', background: `linear-gradient(90deg,${PINK},${BLUE})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', textDecoration: 'none', fontWeight: 700 }}>EMERGENCY ✨</Link>
          </nav>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', paddingTop: '32px', paddingBottom: '80px', alignItems: 'start' }}>

          {/* Left */}
          <div>
            {/* Rejection badge */}
            <div style={{ display: 'inline-block', padding: '8px 16px', background: 'rgba(255,0,100,0.15)', border: `1px solid rgba(255,0,100,0.4)`, marginBottom: '32px', backdropFilter: 'blur(8px)' }}>
              <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '9px', color: '#FF4488', letterSpacing: '0.2em' }}>✗ REJECTED: POLITICAL CONTENT</span>
            </div>

            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: 'clamp(36px, 5.5vw, 80px)', lineHeight: 1, letterSpacing: '0.03em' }} className="v45-holo">
                SOVEREIGN
              </div>
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 900, fontSize: 'clamp(36px, 5.5vw, 80px)', lineHeight: 1, letterSpacing: '0.03em' }} className="v45-chrome">
                MEDIA
              </div>
            </div>
            <div style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 'clamp(14px, 2vw, 20px)', color: `${BLUE}CC`, letterSpacing: '0.15em', marginBottom: '28px' }}>
              ✨ BEYOND THEIR REACH ✨
            </div>

            <p style={{ fontSize: '14px', color: 'rgba(200,200,255,0.7)', lineHeight: 2, maxWidth: '380px', marginBottom: '32px' }}>
              Sovereign European infrastructure for political campaigns. TTPA 2024/900 compliant. 27 EU member states. Zero US dependency. Deploy in 24 hours.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '8px', marginBottom: '24px' }}>
              {[['27', 'EU STATES'], ['24H', 'DEPLOYMENT'], ['100%', 'TTPA CERT'], ['ZERO', 'US DEPEND']].map(([n, l], i) => (
                <div key={l} style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid rgba(${i%2===0?'255,105,180':'0,191,255'},0.3)`, padding: '14px', textAlign: 'center', backdropFilter: 'blur(8px)' }}>
                  <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: '22px', background: `linear-gradient(135deg,${PINK},${BLUE})`, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{n}</div>
                  <div style={{ fontSize: '9px', color: 'rgba(200,200,255,0.4)', letterSpacing: '0.15em', marginTop: '4px' }}>{l}</div>
                </div>
              ))}
            </div>

            <div style={{ fontSize: '11px', color: 'rgba(200,200,255,0.3)', letterSpacing: '0.1em' }}>
              ✨ EU Parliament · DG COMM · EPP Group · S&D Group ✨
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="v45-card" style={{ background: CARD_BG, border: `1px solid rgba(255,105,180,0.3)`, padding: '36px', backdropFilter: 'blur(16px)' }}>
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '10px', letterSpacing: '0.3em', marginBottom: '8px' }} className="v45-holo">✨ ACCESS REQUEST ✨</div>
              <div style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: '22px', lineHeight: 1.2, marginBottom: '8px' }} className="v45-chrome">Request<br />Advisory</div>
              <p style={{ fontSize: '12px', color: 'rgba(200,200,255,0.5)', lineHeight: 1.9, marginBottom: '28px' }}>
                A senior advisor will contact you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  { name: 'organisation', label: 'Organisation', ph: 'Your organisation' },
                  { name: 'name', label: 'Full Name', ph: 'Your full name' },
                  { name: 'email', label: 'Email', ph: 'your@address.eu', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontFamily: "'Orbitron', sans-serif", fontSize: '8px', color: focused === f.name ? PINK : 'rgba(200,200,255,0.3)', letterSpacing: '0.2em', marginBottom: '6px', transition: 'color 0.15s' }}>{f.label.toUpperCase()}</label>
                    <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                      value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                      style={{ width: '100%', padding: '11px 14px', background: 'rgba(255,255,255,0.03)', border: `1px solid ${focused === f.name ? PINK : 'rgba(255,255,255,0.1)'}`, fontFamily: "'Exo 2', sans-serif", fontWeight: 300, fontSize: '14px', color: '#E0E0FF', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s', boxShadow: focused === f.name ? `0 0 12px ${PINK}30` : 'none' }}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: "'Orbitron', sans-serif", fontSize: '8px', color: focused === 'campaign' ? PINK : 'rgba(200,200,255,0.3)', letterSpacing: '0.2em', marginBottom: '6px' }}>SITUATION</label>
                  <textarea name="campaign" placeholder="Describe your situation" value={formData.campaign} onChange={handleChange} required rows={3}
                    style={{ width: '100%', padding: '11px 14px', background: 'rgba(255,255,255,0.03)', border: `1px solid ${focused === 'campaign' ? PINK : 'rgba(255,255,255,0.1)'}`, fontFamily: "'Exo 2', sans-serif", fontWeight: 300, fontSize: '14px', color: '#E0E0FF', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                  />
                </div>
                <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start' }}>
                  <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: PINK }} />
                  <span style={{ fontSize: '12px', color: 'rgba(200,200,255,0.4)', lineHeight: 1.6 }}>
                    I agree to the <Link to="/privacy" style={{ color: BLUE, textDecoration: 'none' }}>Privacy Policy ✨</Link>
                  </span>
                </label>
                <button type="submit" disabled={isSubmitting} style={{
                  padding: '16px', background: isSubmitting ? 'rgba(255,255,255,0.05)' : `linear-gradient(90deg,${PINK},${BLUE})`,
                  color: isSubmitting ? 'rgba(200,200,255,0.3)' : '#FFF',
                  fontFamily: "'Orbitron', sans-serif", fontWeight: 700, fontSize: '11px', letterSpacing: '0.2em',
                  border: 'none', cursor: isSubmitting ? 'wait' : 'pointer', transition: 'opacity 0.15s',
                }}>
                  {isSubmitting ? '✨ SENDING... ✨' : '✨ SUBMIT REQUEST ✨'}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default IndexV45;
