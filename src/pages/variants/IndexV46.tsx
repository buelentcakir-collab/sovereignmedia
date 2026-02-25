// V46: Archival / Museum Catalog — academic, library card, footnotes, scholarly precision
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV46 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=Source+Code+Pro:wght@300;400&display=swap';
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
    toast({ title: 'Inquiry logged', description: 'An archivist will respond within 24 hours.' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const PARCHMENT = '#F7F1E3';
  const INK = '#1C1209';
  const FADED = '#7B6E5A';
  const ACCENT = '#8B1A1A';
  const RULE = '#C4B99A';

  return (
    <div style={{ minHeight: '100vh', background: PARCHMENT, fontFamily: "'IM Fell English', serif", color: INK, position: 'relative' }}>

      {/* Subtle paper texture */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.4, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(139,110,80,0.08) 27px, rgba(139,110,80,0.08) 28px)' }} />

      {/* Classification header */}
      <div style={{ background: INK, padding: '5px 0', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <span style={{ fontFamily: "'Source Code Pro', monospace", fontWeight: 300, fontSize: '10px', color: '#AAA', letterSpacing: '0.4em' }}>
          CATALOG NO. EU-INFRA-2024-001 · RESTRICTED · POLITICAL INFRASTRUCTURE DIVISION
        </span>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '0 64px' }}>
        {/* Header */}
        <header style={{ padding: '32px 0 16px', borderBottom: `2px solid ${INK}`, marginBottom: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div>
              <div style={{ fontFamily: "'IM Fell English', serif", fontSize: '24px', color: INK, letterSpacing: '0.08em' }}>Sovereign Media</div>
              <div style={{ fontFamily: "'Source Code Pro', monospace", fontSize: '9px', color: FADED, letterSpacing: '0.3em', marginTop: '3px' }}>Brussels · Hamburg · Amsterdam · Est. MMXXIV</div>
            </div>
            <nav style={{ display: 'flex', gap: '32px' }}>
              {['Services', 'Advisory', 'Archive'].map(item => (
                <a key={item} href="#" style={{ fontStyle: 'italic', fontSize: '13px', color: FADED, textDecoration: 'none' }}
                  onMouseEnter={e => (e.currentTarget.style.color = ACCENT)}
                  onMouseLeave={e => (e.currentTarget.style.color = FADED)}
                >{item}</a>
              ))}
              <Link to="/crisis-contact" style={{ fontSize: '13px', color: ACCENT, textDecoration: 'none' }}>Inquiry →</Link>
            </nav>
          </div>
          <div style={{ height: '1px', background: RULE, marginTop: '8px' }} />
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '64px', paddingTop: '40px', paddingBottom: '80px', alignItems: 'start' }}>

          {/* Left: Archival entry */}
          <div>
            {/* Catalog card header */}
            <div style={{ fontFamily: "'Source Code Pro', monospace", fontSize: '9px', color: FADED, letterSpacing: '0.25em', marginBottom: '20px', borderBottom: `1px dotted ${RULE}`, paddingBottom: '12px', display: 'flex', gap: '40px' }}>
              <span>ENTRY: 001</span>
              <span>SUBJECT: POLITICAL CAMPAIGN INFRASTRUCTURE</span>
              <span style={{ color: ACCENT }}>STATUS: ✗ ACCESS DENIED (ext. platforms)</span>
            </div>

            {/* Main heading in archival style */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{ fontFamily: "'IM Fell English', serif", fontSize: 'clamp(36px, 5vw, 72px)', lineHeight: 1.05, color: INK, letterSpacing: '0.03em' }}>
                Sovereign<br />
                <span style={{ fontStyle: 'italic', color: ACCENT }}>European</span><br />
                Infrastructure.
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginTop: '12px' }}>
                <div style={{ flex: 1, height: '1px', background: INK }} />
                <div style={{ fontFamily: "'Source Code Pro', monospace", fontSize: '9px', color: FADED }}>cf. TTPA 2024/900</div>
              </div>
            </div>

            {/* Body text with footnote markers */}
            <p style={{ fontSize: '15px', lineHeight: 2.1, color: INK, maxWidth: '520px', marginBottom: '8px' }}>
              European sovereign infrastructure for political organisations<sup style={{ fontSize: '9px', color: ACCENT }}>¹</sup> operating within the TTPA regulatory framework<sup style={{ fontSize: '9px', color: ACCENT }}>²</sup>. Deployment across 27 EU member states within 24 hours<sup style={{ fontSize: '9px', color: ACCENT }}>³</sup>. Zero dependency on US technology platforms<sup style={{ fontSize: '9px', color: ACCENT }}>⁴</sup>.
            </p>

            {/* Footnotes */}
            <div style={{ borderTop: `1px solid ${RULE}`, paddingTop: '12px', marginBottom: '36px' }}>
              {['¹ Including: EU Parliament, DG COMM, EPP Group, S&D Group', '² GDPR and EU Digital Services Act compliant', '³ Emergency deployment protocol available', '⁴ Certified by EU Sovereign Tech Commission'].map(fn => (
                <div key={fn} style={{ fontFamily: "'Source Code Pro', monospace", fontSize: '10px', color: FADED, lineHeight: 1.8 }}>{fn}</div>
              ))}
            </div>

            {/* Stats as catalog table */}
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px' }}>
              <thead>
                <tr>
                  <th style={{ fontFamily: "'Source Code Pro', monospace", fontSize: '9px', color: FADED, letterSpacing: '0.2em', textAlign: 'left', padding: '6px 0', borderBottom: `1px solid ${RULE}` }}>METRIC</th>
                  <th style={{ fontFamily: "'Source Code Pro', monospace", fontSize: '9px', color: FADED, letterSpacing: '0.2em', textAlign: 'right', padding: '6px 0', borderBottom: `1px solid ${RULE}` }}>VALUE</th>
                </tr>
              </thead>
              <tbody>
                {[['EU Member States', '27'], ['Deployment Time', '24 hours'], ['TTPA Compliance', '100%'], ['US Platform Dependency', '0%']].map(([label, val]) => (
                  <tr key={label}>
                    <td style={{ fontStyle: 'italic', fontSize: '13px', color: INK, padding: '7px 0', borderBottom: `1px dotted ${RULE}` }}>{label}</td>
                    <td style={{ fontFamily: "'Source Code Pro', monospace", fontWeight: 400, fontSize: '13px', color: ACCENT, textAlign: 'right', padding: '7px 0', borderBottom: `1px dotted ${RULE}` }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right: Library request form */}
          <div>
            <div style={{ border: `1px solid ${RULE}`, padding: '28px', background: '#FDFAF4' }}>
              {/* Library card top */}
              <div style={{ borderBottom: `2px solid ${INK}`, paddingBottom: '12px', marginBottom: '20px' }}>
                <div style={{ fontFamily: "'Source Code Pro', monospace", fontSize: '9px', color: FADED, letterSpacing: '0.3em', marginBottom: '4px' }}>REQUEST FORM · EU-ADV-2024</div>
                <div style={{ fontFamily: "'IM Fell English', serif", fontSize: '22px', color: INK }}>Advisory Inquiry</div>
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '13px', color: FADED, lineHeight: 1.9, marginBottom: '24px' }}>
                Complete all fields. An archivist will respond within twenty-four hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  { name: 'organisation', label: 'Organisation', ph: 'Your organisation' },
                  { name: 'name', label: 'Name', ph: 'Full name' },
                  { name: 'email', label: 'Correspondence', ph: 'your@address.eu', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                      <span style={{ fontFamily: "'Source Code Pro', monospace", fontSize: '9px', color: focused === f.name ? ACCENT : FADED, letterSpacing: '0.2em' }}>{f.label.toUpperCase()}</span>
                    </label>
                    <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                      value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                      style={{ width: '100%', padding: '8px 0', background: 'transparent', border: 'none', borderBottom: `1px solid ${focused === f.name ? INK : RULE}`, fontFamily: "'IM Fell English', serif", fontStyle: 'italic', fontSize: '14px', color: INK, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s' }}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: "'Source Code Pro', monospace", fontSize: '9px', color: focused === 'campaign' ? ACCENT : FADED, letterSpacing: '0.2em', marginBottom: '5px' }}>SUBJECT OF INQUIRY</label>
                  <textarea name="campaign" placeholder="Describe your situation" value={formData.campaign} onChange={handleChange} required rows={3}
                    style={{ width: '100%', padding: '8px 0', background: 'transparent', border: 'none', borderBottom: `1px solid ${focused === 'campaign' ? INK : RULE}`, fontFamily: "'IM Fell English', serif", fontStyle: 'italic', fontSize: '14px', color: INK, outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                  />
                </div>
                <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start', borderTop: `1px dotted ${RULE}`, paddingTop: '12px' }}>
                  <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: ACCENT, marginTop: 2 }} />
                  <span style={{ fontStyle: 'italic', fontSize: '12px', color: FADED, lineHeight: 1.7 }}>
                    I certify my agreement to the <Link to="/privacy" style={{ color: ACCENT, textDecoration: 'none' }}>Privacy Regulations</Link>
                  </span>
                </label>
                <button type="submit" disabled={isSubmitting} style={{
                  padding: '14px', background: isSubmitting ? PARCHMENT : INK,
                  color: isSubmitting ? FADED : PARCHMENT,
                  fontFamily: "'Source Code Pro', monospace", fontSize: '11px', letterSpacing: '0.2em',
                  border: `1px solid ${INK}`, cursor: isSubmitting ? 'wait' : 'pointer', transition: 'all 0.15s',
                }}>
                  {isSubmitting ? 'LOGGING INQUIRY...' : 'SUBMIT INQUIRY →'}
                </button>
              </form>
            </div>

            <div style={{ fontFamily: "'Source Code Pro', monospace", fontSize: '9px', color: FADED, marginTop: '12px', textAlign: 'center', letterSpacing: '0.1em' }}>
              Catalog maintained by Sovereign Media Archives<br />© MMXXIV — All rights reserved
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default IndexV46;
