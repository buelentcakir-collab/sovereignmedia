// V44: Risograph / Zine Print — duotone, grain, misregistration, indie print aesthetic
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV44 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Syne+Mono&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) { toast({ title: 'Consent needed!', variant: 'destructive' }); return; }
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1400));
    setIsSubmitting(false);
    toast({ title: 'Zine submitted ✓', description: 'Response within 24 hours.' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const RISO_TEAL = '#009B8D';
  const RISO_RED = '#E8212B';
  const RISO_YELLOW = '#FFE100';
  const PAPER = '#FFF8E1';
  const INK = '#1A1209';

  const style = `
    @keyframes v44-grain {
      0%,100% { transform: translate(0,0); }
      10% { transform: translate(-1px,1px); }
      20% { transform: translate(1px,-1px); }
      30% { transform: translate(-1px,0); }
      40% { transform: translate(1px,1px); }
      50% { transform: translate(0,-1px); }
    }
    .v44-grain-overlay { animation: v44-grain 0.15s steps(1) infinite; }
  `;

  return (
    <div style={{ minHeight: '100vh', background: PAPER, fontFamily: "'Syne', sans-serif", color: INK, position: 'relative', overflow: 'hidden' }}>
      <style>{style}</style>

      {/* Paper texture grain overlay */}
      <div className="v44-grain-overlay" style={{ position: 'fixed', inset: 0, zIndex: 10, pointerEvents: 'none', opacity: 0.04, backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '200px 200px' }} />

      {/* Riso color layer — teal, misregistered */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, background: RISO_TEAL, opacity: 0.08, transform: 'translate(2px, -1px)', mixBlendMode: 'multiply' }} />

      {/* Top banner */}
      <div style={{ background: RISO_RED, padding: '8px 0', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <span style={{ fontFamily: "'Syne Mono', monospace", fontSize: '11px', color: PAPER, letterSpacing: '0.3em' }}>
          ✗ REJECTED: POLITICAL CONTENT — ISSUE #001
        </span>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '0 40px' }}>
        {/* Header */}
        <header style={{ padding: '28px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: `3px solid ${INK}` }}>
          <div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '22px', letterSpacing: '-0.01em', color: INK }}>
              SOVEREIGN<span style={{ color: RISO_TEAL }}>MEDIA</span>
            </div>
          </div>
          <nav style={{ display: 'flex', gap: '32px' }}>
            {['Services', 'Advisory', 'Zine'].map(item => (
              <a key={item} href="#" style={{ fontFamily: "'Syne Mono', monospace", fontSize: '11px', color: INK, textDecoration: 'none', letterSpacing: '0.1em' }}>{item}</a>
            ))}
            <Link to="/crisis-contact" style={{ fontFamily: "'Syne Mono', monospace", fontSize: '11px', color: RISO_RED, textDecoration: 'none', fontWeight: 700 }}>CONTACT →</Link>
          </nav>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '55% 1fr', gap: '48px', padding: '40px 0 80px', alignItems: 'start' }}>

          {/* Left: Zine hero */}
          <div>
            {/* Duotone headline block */}
            <div style={{ position: 'relative', marginBottom: '32px' }}>
              {/* Shadow/misregistration layer */}
              <div style={{ position: 'absolute', top: 3, left: 3, fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(52px, 8vw, 112px)', lineHeight: 0.88, color: RISO_TEAL, opacity: 0.6, userSelect: 'none', pointerEvents: 'none' }}>
                SOVER<br />EIGN.
              </div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 'clamp(52px, 8vw, 112px)', lineHeight: 0.88, color: INK, position: 'relative' }}>
                SOVER<br />EIGN.
              </div>
            </div>

            {/* Yellow highlight box */}
            <div style={{ background: RISO_YELLOW, padding: '10px 16px', display: 'inline-block', marginBottom: '24px', transform: 'rotate(-0.5deg)' }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '13px', color: INK, letterSpacing: '0.05em' }}>
                100% EUROPEAN · 0% US DEPENDENCY
              </div>
            </div>

            <p style={{ fontSize: '15px', lineHeight: 2, color: INK, maxWidth: '420px', marginBottom: '36px', fontWeight: 400 }}>
              Sovereign European infrastructure for political campaigns. TTPA 2024/900. 27 EU states. Zero US platforms. Deploy in 24 hours.
            </p>

            {/* Riso stat grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '3px', marginBottom: '28px' }}>
              {[['27', 'EU', RISO_TEAL], ['24h', 'DEP.', RISO_RED], ['100%', 'TTPA', INK], ['0%', 'US', RISO_TEAL]].map(([n, l, c]) => (
                <div key={l} style={{ background: c as string, padding: '14px 8px', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '24px', color: c === INK ? PAPER : PAPER, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: "'Syne Mono', monospace", fontSize: '9px', color: c === INK ? `${PAPER}AA` : `${PAPER}CC`, letterSpacing: '0.2em', marginTop: '4px' }}>{l}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {['EU Parliament', 'DG COMM', 'EPP Group', 'S&D Group'].map(org => (
                <span key={org} style={{ fontFamily: "'Syne Mono', monospace", fontSize: '10px', color: `${INK}60`, letterSpacing: '0.1em', padding: '3px 8px', border: `1px solid ${INK}30` }}>{org}</span>
              ))}
            </div>
          </div>

          {/* Right: Form — zine pull-out card */}
          <div>
            <div style={{ border: `2px solid ${INK}`, background: PAPER, padding: '28px', position: 'relative' }}>
              {/* Torn edge effect top */}
              <div style={{ position: 'absolute', top: -8, left: 0, right: 0, height: '8px', background: PAPER, borderTop: `2px dashed ${INK}40`, clipPath: 'polygon(0 0,2% 100%,4% 0,6% 100%,8% 0,10% 100%,12% 0,14% 100%,16% 0,18% 100%,20% 0,22% 100%,24% 0,26% 100%,28% 0,30% 100%,32% 0,34% 100%,36% 0,38% 100%,40% 0,42% 100%,44% 0,46% 100%,48% 0,50% 100%,52% 0,54% 100%,56% 0,58% 100%,60% 0,62% 100%,64% 0,66% 100%,68% 0,70% 100%,72% 0,74% 100%,76% 0,78% 100%,80% 0,82% 100%,84% 0,86% 100%,88% 0,90% 100%,92% 0,94% 100%,96% 0,98% 100%,100% 0)' }} />

              <div style={{ fontFamily: "'Syne Mono', monospace", fontSize: '10px', color: RISO_TEAL, letterSpacing: '0.2em', marginBottom: '6px' }}>PULL-OUT FORM</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '24px', color: INK, lineHeight: 1.1, marginBottom: '8px' }}>Request<br />Advisory</div>
              <p style={{ fontSize: '12px', color: `${INK}60`, lineHeight: 1.8, marginBottom: '24px' }}>
                Senior advisor within 24 hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  { name: 'organisation', label: 'Organisation', ph: 'Your organisation' },
                  { name: 'name', label: 'Name', ph: 'Full name' },
                  { name: 'email', label: 'Email', ph: 'you@eu.org', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontFamily: "'Syne Mono', monospace", fontSize: '9px', color: focused === f.name ? RISO_RED : `${INK}60`, letterSpacing: '0.2em', marginBottom: '5px' }}>{f.label.toUpperCase()}</label>
                    <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                      value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                      style={{ width: '100%', padding: '9px 11px', background: PAPER, border: `1.5px solid ${focused === f.name ? RISO_RED : INK}`, fontFamily: "'Syne', sans-serif", fontWeight: 400, fontSize: '13px', color: INK, outline: 'none', boxSizing: 'border-box' }}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: "'Syne Mono', monospace", fontSize: '9px', color: focused === 'campaign' ? RISO_RED : `${INK}60`, letterSpacing: '0.2em', marginBottom: '5px' }}>SITUATION</label>
                  <textarea name="campaign" placeholder="Describe what was blocked" value={formData.campaign} onChange={handleChange} required rows={3}
                    style={{ width: '100%', padding: '9px 11px', background: PAPER, border: `1.5px solid ${focused === 'campaign' ? RISO_RED : INK}`, fontFamily: "'Syne', sans-serif", fontWeight: 400, fontSize: '13px', color: INK, outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                  />
                </div>
                <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start' }}>
                  <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: RISO_RED }} />
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '11px', color: `${INK}60`, lineHeight: 1.6 }}>
                    I accept the <Link to="/privacy" style={{ color: RISO_TEAL, textDecoration: 'none', fontWeight: 700 }}>Privacy Policy</Link>
                  </span>
                </label>
                <button type="submit" disabled={isSubmitting} style={{
                  padding: '14px', background: isSubmitting ? `${INK}20` : RISO_RED,
                  color: isSubmitting ? `${INK}60` : PAPER,
                  fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em',
                  border: `2px solid ${INK}`, cursor: isSubmitting ? 'wait' : 'pointer', transition: 'background 0.1s',
                }}>
                  {isSubmitting ? 'PRINTING...' : 'SUBMIT →'}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default IndexV44;
