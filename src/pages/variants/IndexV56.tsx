// V56: Maximalist Neo-Pop — everything at once, dense pattern, sensory overload, candy chaos
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV56 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Lilita+One&family=Nunito:wght@400;700;800;900&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) { toast({ title: '⚠️ Check the box!!', variant: 'destructive' }); return; }
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1400));
    setIsSubmitting(false);
    toast({ title: '🎉 SENT!!!', description: 'Response in 24 hours 🚀' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const colors = ['#FF3B5C', '#FFD500', '#00D4AA', '#4D79FF', '#FF7A00', '#BF5FFF'];
  const [c0, c1, c2, c3, c4, c5] = colors;

  const style = `
    @keyframes v56-spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
    @keyframes v56-bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
    @keyframes v56-wiggle { 0%,100%{transform:rotate(-3deg)} 50%{transform:rotate(3deg)} }
    @keyframes v56-bg { 0%{background-position:0% 0%} 100%{background-position:100% 100%} }
    .v56-spin { animation: v56-spin 8s linear infinite; }
    .v56-bounce { animation: v56-bounce 2s ease-in-out infinite; }
    .v56-wiggle { animation: v56-wiggle 0.6s ease-in-out infinite; }
    .v56-bg { animation: v56-bg 8s linear infinite alternate; }
  `;

  return (
    <div style={{ minHeight: '100vh', background: '#FFFDE7', fontFamily: "'Nunito', sans-serif", color: '#111', position: 'relative', overflow: 'hidden' }}>
      <style>{style}</style>

      {/* Polka dot background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, backgroundImage: `radial-gradient(circle, ${c0}20 2px, transparent 2px), radial-gradient(circle, ${c2}20 2px, transparent 2px), radial-gradient(circle, ${c3}20 2px, transparent 2px)`, backgroundSize: '40px 40px, 60px 60px, 80px 80px', backgroundPosition: '0 0, 20px 20px, 40px 40px' }} />

      {/* Spinning decorative stars */}
      {['★', '✦', '●', '▲', '♦', '◆'].map((s, i) => (
        <div key={i} className="v56-spin" style={{ position: 'fixed', fontSize: '24px', color: colors[i], top: `${[10, 25, 60, 75, 40, 85][i]}%`, left: `${[5, 88, 3, 91, 46, 50][i]}%`, zIndex: 0, animationDelay: `${i * 1.3}s`, animationDirection: i % 2 === 0 ? 'normal' : 'reverse', opacity: 0.4 }}>{s}</div>
      ))}

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        {/* Header — over-the-top */}
        <header style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `4px solid #111` }}>
          <div style={{ background: c0, padding: '6px 16px', transform: 'rotate(-1deg)', boxShadow: `4px 4px 0 #111` }}>
            <div style={{ fontFamily: "'Lilita One', cursive", fontSize: '20px', color: '#FFF', letterSpacing: '0.03em' }}>SOVEREIGN MEDIA!!</div>
          </div>
          <nav style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            {[['Services', c2], ['Advisory', c3], ['Insights', c4]].map(([item, color]) => (
              <a key={item} href="#" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: '13px', color: color as string, textDecoration: 'none', padding: '6px 12px', border: `3px solid #111`, boxShadow: `3px 3px 0 #111`, background: '#FFF', transition: 'transform 0.1s' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translate(-2px,-2px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
              >{item}</a>
            ))}
            <Link to="/crisis-contact" style={{ fontFamily: "'Lilita One', cursive", fontSize: '14px', color: '#FFF', background: c0, padding: '8px 16px', textDecoration: 'none', border: '3px solid #111', boxShadow: '4px 4px 0 #111' }}>GO NOW!! →</Link>
          </nav>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', paddingTop: '24px', paddingBottom: '60px', alignItems: 'start' }}>

          {/* Left: Neo-pop hero */}
          <div>
            {/* Rejected badge */}
            <div className="v56-wiggle" style={{ display: 'inline-block', background: c0, color: '#FFF', padding: '10px 20px', border: '3px solid #111', boxShadow: '5px 5px 0 #111', marginBottom: '24px', fontFamily: "'Lilita One', cursive", fontSize: '14px', letterSpacing: '0.05em' }}>
              ✗ REJECTED!!
            </div>

            {/* Big bouncy headline */}
            <div className="v56-bounce" style={{ marginBottom: '8px' }}>
              <div style={{ fontFamily: "'Lilita One', cursive", fontSize: 'clamp(52px, 8vw, 112px)', lineHeight: 0.85, color: '#111', WebkitTextStroke: `3px #111`, letterSpacing: '0.01em' }}>
                <span style={{ color: c3 }}>SOVE</span><span style={{ color: c0 }}>REIGN</span>
              </div>
              <div style={{ fontFamily: "'Lilita One', cursive", fontSize: 'clamp(32px, 5vw, 72px)', lineHeight: 0.9, letterSpacing: '0.02em' }}>
                <span style={{ color: c4 }}>ME</span><span style={{ color: c2 }}>DIA</span><span style={{ color: c5 }}>!!</span>
              </div>
            </div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: 'clamp(14px, 2vw, 22px)', color: c5, marginBottom: '20px' }}>100% EU!! 0% Silicon Valley!!</div>

            <p style={{ fontSize: '15px', fontWeight: 700, lineHeight: 1.9, color: '#333', maxWidth: '400px', marginBottom: '24px', padding: '12px 16px', background: `${c1}40`, border: '2px solid #111' }}>
              Sovereign European infrastructure. TTPA compliant. 27 EU states. Zero US dependency. Deploy in 24 hours!!
            </p>

            {/* Crazy stat bubbles */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
              {[['27!!', 'EU STATES', c3], ['24H!', 'DEPLOY', c0], ['100%', 'TTPA!!', c2], ['ZERO', 'US DEP!', c4]].map(([n, l, c]) => (
                <div key={l} style={{ background: c as string, border: '3px solid #111', padding: '12px 14px', textAlign: 'center', boxShadow: '4px 4px 0 #111', transform: `rotate(${[-1,1,-2,2][colors.indexOf(c as string) % 4]}deg)` }}>
                  <div style={{ fontFamily: "'Lilita One', cursive", fontSize: '22px', color: '#FFF', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: '9px', color: 'rgba(255,255,255,0.8)', marginTop: '2px' }}>{l}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['EU Parliament', 'DG COMM', 'EPP Group', 'S&D Group'].map((org, i) => (
                <span key={org} style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: '11px', color: '#FFF', background: colors[i % 6], padding: '4px 10px', border: '2px solid #111' }}>★ {org}</span>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div style={{ background: '#FFF', border: '4px solid #111', boxShadow: '8px 8px 0 #111', padding: '28px', position: 'relative' }}>
              {/* Decorative top stripe */}
              <div style={{ position: 'absolute', top: -4, left: -4, right: -4, height: '8px', background: `repeating-linear-gradient(90deg, ${c0} 0, ${c0} 20%, ${c1} 20%, ${c1} 40%, ${c2} 40%, ${c2} 60%, ${c3} 60%, ${c3} 80%, ${c5} 80%)`, borderRadius: '2px 2px 0 0' }} />

              <div style={{ fontFamily: "'Lilita One', cursive", fontSize: '28px', color: c0, marginBottom: '4px', marginTop: '8px' }}>GET IN TOUCH!!</div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: '14px', color: '#555', marginBottom: '20px' }}>Senior advisor responds in 24 hours!!</div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'organisation', label: 'Organisation', ph: 'Your organisation', color: c3 },
                  { name: 'name', label: 'Your Name', ph: 'Full name', color: c2 },
                  { name: 'email', label: 'Email', ph: 'your@address.eu', type: 'email', color: c4 },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: '11px', color: focused === f.name ? f.color : '#555', letterSpacing: '0.1em', marginBottom: '4px', transition: 'color 0.15s' }}>{f.label.toUpperCase()}</label>
                    <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                      value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                      style={{ width: '100%', padding: '10px 12px', background: '#FFF', border: `3px solid ${focused === f.name ? f.color : '#111'}`, fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '14px', color: '#111', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s' }}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: "'Nunito', sans-serif", fontWeight: 800, fontSize: '11px', color: focused === 'campaign' ? c5 : '#555', letterSpacing: '0.1em', marginBottom: '4px' }}>WHAT HAPPENED!!</label>
                  <textarea name="campaign" placeholder="Describe what was blocked" value={formData.campaign} onChange={handleChange} required rows={3}
                    style={{ width: '100%', padding: '10px 12px', background: '#FFF', border: `3px solid ${focused === 'campaign' ? c5 : '#111'}`, fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '14px', color: '#111', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                  />
                </div>
                <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start' }}>
                  <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: c0 }} />
                  <span style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: '12px', color: '#555', lineHeight: 1.6 }}>
                    I agree to the <Link to="/privacy" style={{ color: c0, textDecoration: 'none', fontWeight: 900 }}>Privacy Policy!!</Link>
                  </span>
                </label>
                <button type="submit" disabled={isSubmitting} style={{
                  padding: '16px', background: isSubmitting ? '#DDD' : c0,
                  color: '#FFF', fontFamily: "'Lilita One', cursive", fontSize: '18px', letterSpacing: '0.05em',
                  border: '3px solid #111', cursor: isSubmitting ? 'wait' : 'pointer', transition: 'all 0.15s',
                  boxShadow: isSubmitting ? 'none' : '5px 5px 0 #111',
                  transform: isSubmitting ? 'none' : 'translate(-2px,-2px)',
                }}>
                  {isSubmitting ? 'SENDING!! 🚀' : 'SUBMIT NOW!! ⚡'}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default IndexV56;
