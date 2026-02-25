// V47: Paper Cutout / Matisse — bold flat shapes, layered paper, hand-cut feel
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV47 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;900&family=Nunito:wght@300;400&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) { toast({ title: 'Please consent', variant: 'destructive' }); return; }
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1400));
    setIsSubmitting(false);
    toast({ title: 'Sent!', description: 'We will contact you within 24 hours.' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const CORAL = '#E8472C';
  const COBALT = '#1B3FA6';
  const LEAF = '#3D8B5A';
  const MUSTARD = '#F0C030';
  const CREAM = '#FFF9F0';
  const INK = '#0D0D0D';

  const shadow = '4px 4px 0 rgba(0,0,0,0.15)';

  return (
    <div style={{ minHeight: '100vh', background: CREAM, fontFamily: "'Nunito', sans-serif", fontWeight: 300, color: INK, position: 'relative', overflow: 'hidden' }}>

      {/* Big background shapes — layered paper */}
      <div style={{ position: 'fixed', top: -80, right: -80, width: 400, height: 400, background: MUSTARD, borderRadius: '50%', opacity: 0.4, zIndex: 0 }} />
      <div style={{ position: 'fixed', bottom: -60, left: -60, width: 350, height: 350, background: COBALT, borderRadius: '50% 30% 50% 40%', opacity: 0.2, zIndex: 0 }} />
      <div style={{ position: 'fixed', top: '40%', left: '30%', width: 200, height: 200, background: LEAF, clipPath: 'polygon(50% 0%,100% 50%,50% 100%,0% 50%)', opacity: 0.1, zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <header style={{ padding: '28px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ width: 36, height: 36, background: CORAL, borderRadius: '50%', boxShadow: shadow }} />
            <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: '16px', color: INK, letterSpacing: '-0.01em' }}>SOVEREIGN MEDIA</div>
          </div>
          <nav style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            {['Services', 'Advisory', 'Insights'].map(item => (
              <a key={item} href="#" style={{ fontSize: '13px', fontWeight: 400, color: `${INK}70`, textDecoration: 'none', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = COBALT)}
                onMouseLeave={e => (e.currentTarget.style.color = `${INK}70`)}
              >{item}</a>
            ))}
            <Link to="/crisis-contact" style={{ fontSize: '12px', fontWeight: 700, color: CREAM, background: CORAL, padding: '8px 20px', textDecoration: 'none', borderRadius: '100px', boxShadow: shadow }}>Contact</Link>
          </nav>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', paddingTop: '16px', paddingBottom: '80px', alignItems: 'start' }}>

          {/* Left */}
          <div>
            {/* Rejection cutout */}
            <div style={{ display: 'inline-block', background: CORAL, padding: '10px 20px', marginBottom: '32px', transform: 'rotate(-1.5deg)', boxShadow: shadow }}>
              <span style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: '10px', color: CREAM, letterSpacing: '0.05em' }}>✗ REJECTED: POLITICAL</span>
            </div>

            {/* Big headline with paper layers */}
            <div style={{ position: 'relative', marginBottom: '12px' }}>
              <div style={{ position: 'absolute', top: 6, left: 6, fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: 0.9, color: MUSTARD, userSelect: 'none' }}>SOVER-<br />EIGN.</div>
              <div style={{ position: 'absolute', top: 3, left: 3, fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: 0.9, color: COBALT, userSelect: 'none', opacity: 0.5 }}>SOVER-<br />EIGN.</div>
              <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: 'clamp(40px, 6vw, 88px)', lineHeight: 0.9, color: INK, position: 'relative' }}>SOVER-<br />EIGN.</div>
            </div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 300, fontSize: 'clamp(16px, 2vw, 22px)', color: LEAF, marginBottom: '28px', letterSpacing: '0.05em' }}>Beyond their reach.</div>

            <p style={{ fontSize: '15px', lineHeight: 2, color: `${INK}80`, maxWidth: '400px', marginBottom: '36px' }}>
              Sovereign European infrastructure for political campaigns. TTPA 2024/900 compliant. 27 EU member states. Zero US dependency. Deploy in 24 hours.
            </p>

            {/* Cutout stat tiles */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '28px' }}>
              {[['27', 'EU States', COBALT], ['24h', 'Deploy', LEAF], ['100%', 'TTPA', CORAL], ['0%', 'US Dep.', MUSTARD]].map(([n, l, c]) => (
                <div key={l} style={{ background: c as string, padding: '14px 16px', textAlign: 'center', boxShadow: shadow, transform: 'rotate(-0.5deg)', minWidth: '70px' }}>
                  <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 900, fontSize: '20px', color: c === MUSTARD ? INK : CREAM, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: '10px', color: c === MUSTARD ? `${INK}80` : `${CREAM}CC`, letterSpacing: '0.1em', marginTop: '4px' }}>{l}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {['EU Parliament', 'DG COMM', 'EPP Group', 'S&D Group'].map((org, i) => (
                <span key={org} style={{ fontSize: '11px', fontWeight: 400, color: INK, background: [MUSTARD, LEAF, COBALT, CORAL][i%4] + '30', padding: '4px 10px', borderRadius: '100px' }}>{org}</span>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div style={{ background: COBALT, padding: '36px', boxShadow: '6px 6px 0 rgba(0,0,0,0.2)', position: 'relative' }}>
              {/* Leaf shape decor */}
              <div style={{ position: 'absolute', top: -20, right: 20, width: 40, height: 40, background: LEAF, borderRadius: '0 50% 50% 50%', transform: 'rotate(45deg)', boxShadow: shadow }} />

              <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 400, fontSize: '10px', color: MUSTARD, letterSpacing: '0.15em', marginBottom: '8px' }}>REQUEST FORM</div>
              <div style={{ fontFamily: "'Unbounded', sans-serif", fontWeight: 700, fontSize: '24px', color: CREAM, lineHeight: 1.2, marginBottom: '8px' }}>Advisory<br />Request</div>
              <p style={{ fontSize: '13px', color: `${CREAM}80`, lineHeight: 1.9, marginBottom: '28px' }}>
                A senior advisor will contact you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { name: 'organisation', label: 'Organisation', ph: 'Your organisation' },
                  { name: 'name', label: 'Full Name', ph: 'Your full name' },
                  { name: 'email', label: 'Email', ph: 'your@address.eu', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: focused === f.name ? MUSTARD : `${CREAM}60`, letterSpacing: '0.15em', marginBottom: '6px', transition: 'color 0.15s' }}>{f.label.toUpperCase()}</label>
                    <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                      value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                      style={{ width: '100%', padding: '10px 0', background: 'transparent', border: 'none', borderBottom: `2px solid ${focused === f.name ? MUSTARD : `${CREAM}30`}`, fontFamily: "'Nunito', sans-serif", fontWeight: 300, fontSize: '15px', color: CREAM, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s' }}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '10px', fontWeight: 700, color: focused === 'campaign' ? MUSTARD : `${CREAM}60`, letterSpacing: '0.15em', marginBottom: '6px' }}>SITUATION</label>
                  <textarea name="campaign" placeholder="Describe your situation" value={formData.campaign} onChange={handleChange} required rows={3}
                    style={{ width: '100%', padding: '10px 0', background: 'transparent', border: 'none', borderBottom: `2px solid ${focused === 'campaign' ? MUSTARD : `${CREAM}30`}`, fontFamily: "'Nunito', sans-serif", fontWeight: 300, fontSize: '15px', color: CREAM, outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                  />
                </div>
                <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start' }}>
                  <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: MUSTARD, marginTop: 2 }} />
                  <span style={{ fontSize: '12px', color: `${CREAM}60`, lineHeight: 1.6 }}>
                    I agree to the <Link to="/privacy" style={{ color: MUSTARD, textDecoration: 'none' }}>Privacy Policy</Link>
                  </span>
                </label>
                <button type="submit" disabled={isSubmitting} style={{
                  padding: '16px', background: isSubmitting ? `${CREAM}20` : CORAL,
                  color: CREAM, fontFamily: "'Unbounded', sans-serif",
                  fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em',
                  border: 'none', cursor: isSubmitting ? 'wait' : 'pointer', transition: 'all 0.15s',
                  boxShadow: isSubmitting ? 'none' : '4px 4px 0 rgba(0,0,0,0.2)',
                }}>
                  {isSubmitting ? 'SENDING...' : 'SUBMIT →'}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default IndexV47;
