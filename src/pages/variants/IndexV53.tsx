// V53: Racing / Formula 1 — livery colors, speed lines, carbon fiber, timing board
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV53 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@400;700;900&family=Saira:wght@300;400&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) { toast({ title: 'Driver authorization required', variant: 'destructive' }); return; }
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    toast({ title: 'Pit crew notified', description: 'Race engineer contacts you in 24 hours.' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const RACE_RED = '#E8002D';
  const CARBON = '#0F0F0F';
  const CARBON_MID = '#1E1E1E';
  const CARBON_LIGHT = '#2A2A2A';
  const LIME = '#BFFF00';
  const WHITE = '#F0F0F0';
  const SILVER = '#9EA7B0';

  const style = `
    @keyframes v53-speed { 0%{transform:translateX(-100%);opacity:0} 60%{opacity:0.6} 100%{transform:translateX(200%);opacity:0} }
    @keyframes v53-blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
    .v53-speed-line { animation: v53-speed 1.5s ease-in infinite; }
  `;

  return (
    <div style={{ minHeight: '100vh', background: CARBON, fontFamily: "'Saira', sans-serif", fontWeight: 300, color: WHITE, position: 'relative', overflow: 'hidden' }}>
      <style>{style}</style>

      {/* Carbon fiber texture */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.15, backgroundImage: `repeating-linear-gradient(45deg, transparent 0, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px), repeating-linear-gradient(-45deg, transparent 0, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)` }} />

      {/* Speed lines */}
      {[15, 30, 45, 55, 65, 80].map((top, i) => (
        <div key={i} className="v53-speed-line" style={{ position: 'fixed', top: `${top}%`, left: 0, height: '1px', width: '40%', background: `linear-gradient(90deg, transparent, ${LIME}40, transparent)`, zIndex: 0, animationDelay: `${i * 0.25}s` }} />
      ))}

      {/* Race livery stripe */}
      <div style={{ height: '8px', background: `linear-gradient(90deg, ${RACE_RED} 0%, ${RACE_RED} 60%, ${LIME} 60%, ${LIME} 100%)`, position: 'relative', zIndex: 1 }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <header style={{ background: CARBON_MID, borderBottom: `2px solid ${RACE_RED}`, padding: '0 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
            {/* Number plate */}
            <div style={{ background: RACE_RED, padding: '0 16px', height: '64px', display: 'flex', alignItems: 'center', marginRight: '16px' }}>
              <span style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 900, fontSize: '32px', color: WHITE, lineHeight: 1 }}>01</span>
            </div>
            <div>
              <div style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 900, fontSize: '20px', color: WHITE, letterSpacing: '0.08em' }}>SOVEREIGN MEDIA</div>
              <div style={{ fontSize: '9px', color: SILVER, letterSpacing: '0.3em' }}>EU SOVEREIGN RACING TEAM</div>
            </div>
          </div>
          <nav style={{ display: 'flex', gap: '0' }}>
            {['SPEC', 'PIT', 'LAP'].map(item => (
              <a key={item} href="#" style={{ padding: '0 20px', height: '64px', display: 'flex', alignItems: 'center', fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: '13px', color: SILVER, textDecoration: 'none', borderLeft: `1px solid ${CARBON_LIGHT}`, letterSpacing: '0.1em', transition: 'color 0.1s' }}
                onMouseEnter={e => (e.currentTarget.style.color = LIME)}
                onMouseLeave={e => (e.currentTarget.style.color = SILVER)}
              >{item}</a>
            ))}
            <Link to="/crisis-contact" style={{ padding: '0 28px', height: '64px', display: 'flex', alignItems: 'center', fontFamily: "'Saira Condensed', sans-serif", fontWeight: 900, fontSize: '13px', color: CARBON, background: LIME, textDecoration: 'none', letterSpacing: '0.1em' }}>
              RACE →
            </Link>
          </nav>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 'calc(100vh - 72px)' }}>

          {/* Left: Race briefing */}
          <div style={{ padding: '40px 48px', borderRight: `1px solid ${CARBON_LIGHT}` }}>
            {/* DNF Banner */}
            <div style={{ background: RACE_RED, padding: '10px 16px', marginBottom: '28px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 900, fontSize: '20px', color: WHITE }}>DNF</span>
              <div style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: '11px', color: WHITE, letterSpacing: '0.15em' }}>POLITICAL CONTENT: REJECTED BY EXTERNAL PLATFORM</div>
            </div>

            {/* Headline */}
            <div style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 900, fontSize: 'clamp(48px, 7vw, 96px)', lineHeight: 0.85, letterSpacing: '0.02em', marginBottom: '12px' }}>
              EURO<br />PEAN<br /><span style={{ color: LIME }}>SPEED.</span>
            </div>

            <div style={{ width: '100%', height: '3px', background: `linear-gradient(90deg, ${RACE_RED}, ${LIME})`, marginBottom: '24px' }} />

            <p style={{ fontSize: '14px', color: SILVER, lineHeight: 1.9, maxWidth: '400px', marginBottom: '32px' }}>
              Sovereign European infrastructure. TTPA-certified. 27 EU member states. Zero US dependency. Deployed in under 24 hours.
            </p>

            {/* Timing board stats */}
            <div style={{ border: `1px solid ${CARBON_LIGHT}`, marginBottom: '20px', fontFamily: "'Saira Condensed', sans-serif" }}>
              <div style={{ background: CARBON_LIGHT, padding: '6px 12px', display: 'flex', gap: '40px' }}>
                <span style={{ fontSize: '10px', color: SILVER, letterSpacing: '0.15em' }}>METRIC</span>
                <span style={{ fontSize: '10px', color: SILVER, letterSpacing: '0.15em', marginLeft: 'auto' }}>VALUE</span>
                <span style={{ fontSize: '10px', color: SILVER, letterSpacing: '0.15em' }}>STATUS</span>
              </div>
              {[['EU States', '27', LIME], ['Deploy Time', '24H', LIME], ['TTPA', '100%', LIME], ['US Dep.', 'ZERO', LIME], ['Google/Meta', 'BLOCKED', RACE_RED]].map(([m, v, c]) => (
                <div key={m} style={{ padding: '8px 12px', borderTop: `1px solid ${CARBON_LIGHT}`, display: 'flex', gap: '40px', alignItems: 'center' }}>
                  <span style={{ fontSize: '14px', color: SILVER, flex: 1 }}>{m}</span>
                  <span style={{ fontSize: '14px', color: c as string, fontWeight: 700 }}>{v}</span>
                  <span style={{ fontSize: '9px', color: c as string, letterSpacing: '0.15em' }}>● LIVE</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['EU PARLIAMENT', 'DG COMM', 'EPP GROUP', 'S&D GROUP'].map(org => (
                <span key={org} style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: '10px', color: SILVER, letterSpacing: '0.1em', borderLeft: `2px solid ${LIME}30`, paddingLeft: '6px' }}>{org}</span>
              ))}
            </div>
          </div>

          {/* Right: Pit strategy form */}
          <div style={{ padding: '40px 48px', background: CARBON_MID }}>
            <div style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: '9px', color: LIME, letterSpacing: '0.3em', marginBottom: '4px' }}>PIT STRATEGY FORM</div>
            <div style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 900, fontSize: '28px', color: WHITE, lineHeight: 1.1, marginBottom: '8px' }}>
              REQUEST<br />ADVISORY
            </div>
            <div style={{ width: '40px', height: '3px', background: RACE_RED, marginBottom: '16px' }} />
            <p style={{ fontSize: '13px', color: SILVER, lineHeight: 1.9, marginBottom: '28px' }}>
              Race engineer contacts you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                { name: 'organisation', label: 'Team Name', ph: 'Your organisation' },
                { name: 'name', label: 'Driver', ph: 'Full name' },
                { name: 'email', label: 'Comms', ph: 'your@address.eu', type: 'email' },
              ].map(f => (
                <div key={f.name}>
                  <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <span style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: '10px', color: focused === f.name ? LIME : SILVER, letterSpacing: '0.2em', transition: 'color 0.1s' }}>{f.label.toUpperCase()}</span>
                    {focused === f.name && <span style={{ fontFamily: "'Saira Condensed', sans-serif", fontSize: '9px', color: LIME }}>● ACTIVE</span>}
                  </label>
                  <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                    value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                    style={{ width: '100%', padding: '11px 14px', background: CARBON, border: `1px solid ${focused === f.name ? LIME : CARBON_LIGHT}`, fontFamily: "'Saira', sans-serif", fontWeight: 300, fontSize: '14px', color: WHITE, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.1s' }}
                    onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: 'block', fontFamily: "'Saira Condensed', sans-serif", fontWeight: 700, fontSize: '10px', color: focused === 'campaign' ? LIME : SILVER, letterSpacing: '0.2em', marginBottom: '5px' }}>INCIDENT REPORT</label>
                <textarea name="campaign" placeholder="Describe what was blocked" value={formData.campaign} onChange={handleChange} required rows={3}
                  style={{ width: '100%', padding: '11px 14px', background: CARBON, border: `1px solid ${focused === 'campaign' ? LIME : CARBON_LIGHT}`, fontFamily: "'Saira', sans-serif", fontWeight: 300, fontSize: '14px', color: WHITE, outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                  onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                />
              </div>
              <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start', padding: '10px', background: CARBON, border: `1px solid ${CARBON_LIGHT}` }}>
                <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: LIME }} />
                <span style={{ fontSize: '11px', fontWeight: 300, color: SILVER, lineHeight: 1.5 }}>
                  I authorize per <Link to="/privacy" style={{ color: LIME, textDecoration: 'none', fontWeight: 700 }}>Race Regulations</Link>
                </span>
              </label>
              <button type="submit" disabled={isSubmitting} style={{
                padding: '16px', background: isSubmitting ? CARBON_LIGHT : RACE_RED,
                color: WHITE, fontFamily: "'Saira Condensed', sans-serif",
                fontWeight: 900, fontSize: '16px', letterSpacing: '0.1em',
                border: 'none', cursor: isSubmitting ? 'wait' : 'pointer', transition: 'background 0.1s',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span>{isSubmitting ? 'TRANSMITTING...' : 'PIT REQUEST'}</span>
                <span style={{ fontFamily: "'Saira Condensed', sans-serif", fontWeight: 900, fontSize: '20px' }}>→</span>
              </button>
            </form>
          </div>
        </main>
      </div>
      <div style={{ height: '8px', background: `linear-gradient(90deg, ${LIME} 0%, ${LIME} 60%, ${RACE_RED} 60%, ${RACE_RED} 100%)` }} />
    </div>
  );
};
export default IndexV53;
