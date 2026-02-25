// V48: Data Visualization / NYT Editorial — charts as design, FT-style data journalism
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV48 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [animBars, setAnimBars] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=IBM+Plex+Serif:ital,wght@0,300;0,400;1,300&family=IBM+Plex+Mono:wght@300;400&display=swap';
    document.head.appendChild(link);
    setTimeout(() => setAnimBars(true), 300);
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
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    toast({ title: 'Data submitted', description: 'Response within 24 hours.' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const FT_PINK = '#FFF1E5';
  const FT_RED = '#990F3D';
  const FT_TEAL = '#0D7680';
  const FT_NAVY = '#0F2A44';
  const FT_CHARCOAL = '#262A33';
  const CHART_BLUE = '#1F6FEB';

  const style = `
    @keyframes v48-bar { from{width:0} to{width:var(--w)} }
    .v48-bar { animation: v48-bar 1.2s cubic-bezier(0.4,0,0.2,1) forwards; }
  `;

  const bars = [
    { label: 'Google Ads', pct: 0, note: 'Blocked', color: FT_RED },
    { label: 'Meta Ads', pct: 0, note: 'Blocked', color: FT_RED },
    { label: 'Sovereign Media', pct: 100, note: '100% delivery', color: FT_TEAL },
    { label: 'EU Programmatic', pct: 78, note: '78% delivery', color: CHART_BLUE },
  ];

  return (
    <div style={{ minHeight: '100vh', background: FT_PINK, fontFamily: "'IBM Plex Serif', serif", fontWeight: 300, color: FT_CHARCOAL, position: 'relative' }}>
      <style>{style}</style>

      {/* Top rule */}
      <div style={{ height: '4px', background: FT_RED }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>
        {/* Header */}
        <header style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${FT_CHARCOAL}30` }}>
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '20px', color: FT_CHARCOAL, letterSpacing: '0.02em' }}>Sovereign Media</div>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 300, fontSize: '9px', color: `${FT_CHARCOAL}60`, letterSpacing: '0.2em' }}>Brussels · Hamburg · Amsterdam</div>
          </div>
          <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: `${FT_CHARCOAL}50`, letterSpacing: '0.1em' }}>
            {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
          <nav style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            {['Services', 'Data', 'Advisory'].map(item => (
              <a key={item} href="#" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: `${FT_CHARCOAL}60`, textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = FT_RED)}
                onMouseLeave={e => (e.currentTarget.style.color = `${FT_CHARCOAL}60`)}
              >{item}</a>
            ))}
            <Link to="/crisis-contact" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: FT_RED, textDecoration: 'none' }}>Request →</Link>
          </nav>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '48px', paddingTop: '36px', paddingBottom: '80px', alignItems: 'start' }}>

          {/* Left: Editorial content */}
          <div>
            {/* Kicker line */}
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 400, fontSize: '10px', color: FT_RED, letterSpacing: '0.2em', marginBottom: '12px', textTransform: 'uppercase' }}>Analysis · EU Political Infrastructure</div>

            {/* Headline */}
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 'clamp(28px, 4vw, 52px)', lineHeight: 1.15, color: FT_CHARCOAL, marginBottom: '12px', letterSpacing: '-0.01em' }}>
              Google and Meta block 100% of EU political ad campaigns. One platform doesn't.
            </h1>

            <p style={{ fontFamily: "'IBM Plex Serif', serif", fontStyle: 'italic', fontSize: '15px', color: `${FT_CHARCOAL}70`, marginBottom: '24px', borderLeft: `3px solid ${FT_RED}`, paddingLeft: '12px' }}>
              Sovereign Media delivers what Silicon Valley refuses: TTPA-compliant infrastructure across all 27 EU member states, deployable within 24 hours.
            </p>

            {/* Chart */}
            <div style={{ background: '#FFF', border: `1px solid ${FT_CHARCOAL}15`, padding: '24px', marginBottom: '24px' }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 400, fontSize: '10px', color: `${FT_CHARCOAL}50`, letterSpacing: '0.15em', marginBottom: '16px' }}>
                CHART: Political campaign ad delivery rate by platform (Q4 2024)
              </div>
              {bars.map((bar, i) => (
                <div key={bar.label} style={{ marginBottom: i < bars.length - 1 ? '12px' : '0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: FT_CHARCOAL }}>{bar.label}</span>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: bar.color, fontWeight: 400 }}>{bar.note}</span>
                  </div>
                  <div style={{ height: '24px', background: `${FT_CHARCOAL}08`, position: 'relative' }}>
                    {animBars && bar.pct > 0 && (
                      <div className="v48-bar" style={{ '--w': `${bar.pct}%` } as React.CSSProperties & Record<string, string>} data-style={`height:100%;background:${bar.color};`}>
                        <div style={{ height: '100%', background: bar.color, width: '100%' }} />
                      </div>
                    )}
                    {bar.pct === 0 && <div style={{ height: '100%', background: `${FT_RED}15`, borderLeft: `3px solid ${FT_RED}`, display: 'flex', alignItems: 'center', paddingLeft: '8px' }}><span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '10px', color: FT_RED }}>0%</span></div>}
                  </div>
                </div>
              ))}
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px', color: `${FT_CHARCOAL}40`, marginTop: '12px' }}>Source: EU Digital Advertising Monitor, 2024</div>
            </div>

            {/* Key stats inline */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: `${FT_CHARCOAL}10`, border: `1px solid ${FT_CHARCOAL}10`, marginBottom: '24px' }}>
              {[['27', 'EU member states covered'], ['24h', 'Emergency deployment'], ['100%', 'TTPA 2024/900 compliant']].map(([n, l]) => (
                <div key={l} style={{ background: '#FFF', padding: '16px' }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '28px', color: FT_TEAL, lineHeight: 1 }}>{n}</div>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px', color: `${FT_CHARCOAL}50`, marginTop: '4px', letterSpacing: '0.05em' }}>{l}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '14px', lineHeight: 2, color: `${FT_CHARCOAL}70`, marginBottom: '16px' }}>
              Trusted by EU Parliament, DG COMM, EPP Group, and S&D Group. Zero dependency on US technology platforms.
            </p>
          </div>

          {/* Right: Form */}
          <div>
            <div style={{ background: FT_NAVY, padding: '28px', position: 'sticky', top: '24px' }}>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontWeight: 400, fontSize: '9px', color: FT_TEAL, letterSpacing: '0.2em', marginBottom: '8px' }}>REQUEST BRIEFING</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '22px', color: FT_PINK, lineHeight: 1.2, marginBottom: '8px' }}>Advisory<br />Request</div>
              <p style={{ fontFamily: "'IBM Plex Serif', serif", fontStyle: 'italic', fontSize: '12px', color: `${FT_PINK}70`, lineHeight: 1.9, marginBottom: '24px' }}>
                A senior advisor will respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { name: 'organisation', label: 'Organisation', ph: 'Your organisation' },
                  { name: 'name', label: 'Full Name', ph: 'Your full name' },
                  { name: 'email', label: 'Email', ph: 'your@address.eu', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px', color: focused === f.name ? FT_TEAL : `${FT_PINK}50`, letterSpacing: '0.15em', marginBottom: '5px', transition: 'color 0.15s' }}>{f.label.toUpperCase()}</label>
                    <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                      value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                      style={{ width: '100%', padding: '9px 12px', background: 'rgba(255,241,229,0.05)', border: `1px solid ${focused === f.name ? FT_TEAL : 'rgba(255,241,229,0.15)'}`, fontFamily: "'IBM Plex Serif', serif", fontWeight: 300, fontSize: '14px', color: FT_PINK, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s' }}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: "'IBM Plex Mono', monospace", fontSize: '9px', color: focused === 'campaign' ? FT_TEAL : `${FT_PINK}50`, letterSpacing: '0.15em', marginBottom: '5px' }}>SITUATION</label>
                  <textarea name="campaign" placeholder="Describe what was blocked" value={formData.campaign} onChange={handleChange} required rows={3}
                    style={{ width: '100%', padding: '9px 12px', background: 'rgba(255,241,229,0.05)', border: `1px solid ${focused === 'campaign' ? FT_TEAL : 'rgba(255,241,229,0.15)'}`, fontFamily: "'IBM Plex Serif', serif", fontWeight: 300, fontSize: '14px', color: FT_PINK, outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                  />
                </div>
                <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start' }}>
                  <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: FT_TEAL }} />
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '11px', color: `${FT_PINK}50`, lineHeight: 1.6 }}>
                    I agree to the <Link to="/privacy" style={{ color: FT_TEAL, textDecoration: 'none' }}>Privacy Policy</Link>
                  </span>
                </label>
                <button type="submit" disabled={isSubmitting} style={{
                  padding: '14px', background: isSubmitting ? 'rgba(255,241,229,0.05)' : FT_RED,
                  color: FT_PINK, fontFamily: "'IBM Plex Mono', monospace", fontWeight: 400,
                  fontSize: '12px', letterSpacing: '0.15em', border: 'none',
                  cursor: isSubmitting ? 'wait' : 'pointer', transition: 'background 0.15s',
                }}>
                  {isSubmitting ? 'SUBMITTING...' : 'SEND REQUEST →'}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
      <div style={{ height: '4px', background: FT_TEAL }} />
    </div>
  );
};
export default IndexV48;
