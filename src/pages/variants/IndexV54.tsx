// V54: Newspaper Broadsheet — classic layout, justified columns, wire photo, editorial gravitas
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV54 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=EB+Garamond:ital,wght@0,400;0,600;1,400&family=Source+Code+Pro:wght@300;400&display=swap';
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
    toast({ title: 'Letter received', description: 'Editorial response within 24 hours.' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const NEWSPRINT = '#F5F0E6';
  const INK = '#111008';
  const RULE = '#444034';
  const FADED = '#7B7060';
  const RED_FLAG = '#8B1A1A';

  const today = new Date().toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div style={{ minHeight: '100vh', background: NEWSPRINT, fontFamily: "'EB Garamond', serif", color: INK, position: 'relative' }}>

      {/* Newsprint texture */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.3, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(100,80,40,0.05) 27px, rgba(100,80,40,0.05) 28px)' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>

        {/* Broadsheet masthead */}
        <div style={{ borderBottom: `4px double ${INK}`, paddingBottom: '8px', marginBottom: '4px', paddingTop: '20px', textAlign: 'center' }}>
          <div style={{ fontFamily: "'UnifrakturMaguntia', cursive", fontSize: 'clamp(28px, 5vw, 56px)', color: INK, letterSpacing: '0.03em', lineHeight: 1 }}>
            The Sovereign Gazette
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${INK}`, paddingBottom: '6px', marginBottom: '12px' }}>
          <div style={{ fontFamily: "'Source Code Pro', monospace", fontWeight: 300, fontSize: '9px', color: FADED, letterSpacing: '0.2em' }}>Est. MMXXIV — Brussels · Hamburg · Amsterdam</div>
          <div style={{ fontFamily: "'Source Code Pro', monospace", fontWeight: 300, fontSize: '9px', color: FADED, letterSpacing: '0.1em' }}>{today}</div>
          <div style={{ fontFamily: "'Source Code Pro', monospace", fontWeight: 300, fontSize: '9px', color: FADED, letterSpacing: '0.2em' }}>Vol. I, No. 1 · Price: Free</div>
        </div>

        {/* Navigation as section headers */}
        <div style={{ display: 'flex', gap: '0', borderBottom: `2px solid ${INK}`, paddingBottom: '6px', marginBottom: '16px' }}>
          {['Front Page', 'Services', 'Advisory', 'Insights'].map((item, i) => (
            <a key={item} href="#" style={{ fontFamily: "'EB Garamond', serif", fontWeight: 600, fontSize: '12px', color: INK, textDecoration: 'none', padding: '0 12px', borderRight: i < 3 ? `1px solid ${RULE}` : 'none', letterSpacing: '0.05em' }}>{item}</a>
          ))}
          <div style={{ flex: 1 }} />
          <Link to="/crisis-contact" style={{ fontFamily: "'EB Garamond', serif", fontWeight: 600, fontSize: '12px', color: RED_FLAG, textDecoration: 'none', letterSpacing: '0.08em' }}>Contact the Editor →</Link>
        </div>

        {/* Main newspaper layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 320px', gap: '16px', paddingBottom: '64px' }}>

          {/* Column 1: Lead story */}
          <div style={{ borderRight: `1px solid ${RULE}`, paddingRight: '16px' }}>
            {/* Flag */}
            <div style={{ background: RED_FLAG, color: NEWSPRINT, padding: '4px 10px', display: 'inline-block', fontFamily: "'Source Code Pro', monospace", fontWeight: 400, fontSize: '9px', letterSpacing: '0.2em', marginBottom: '10px' }}>
              ✗ REJECTED — POLITICAL CONTENT
            </div>
            <h1 style={{ fontFamily: "'EB Garamond', serif", fontWeight: 600, fontSize: 'clamp(22px, 3vw, 36px)', lineHeight: 1.15, marginBottom: '8px', letterSpacing: '0.01em' }}>
              Silicon Valley Giants Block All EU Political Campaigns; Sovereign Alternative Emerges
            </h1>
            <div style={{ fontFamily: "'EB Garamond', serif", fontStyle: 'italic', fontSize: '14px', color: FADED, marginBottom: '12px', borderBottom: `1px solid ${RULE}`, paddingBottom: '8px' }}>
              By Staff Correspondent · Brussels
            </div>

            {/* Drop cap first paragraph */}
            <p style={{ fontSize: '14px', lineHeight: 2, textAlign: 'justify', marginBottom: '12px', textIndent: '0' }}>
              <span style={{ fontFamily: "'EB Garamond', serif", fontWeight: 600, fontSize: '40px', float: 'left', lineHeight: '0.8', marginRight: '6px', marginTop: '6px', color: INK }}>G</span>
              oogle and Meta have systematically rejected political campaign advertisements submitted by European institutions, exposing a critical dependency on American technology platforms whose content policies remain opaque and unaccountable to European democratic norms.
            </p>
            <p style={{ fontSize: '14px', lineHeight: 2, textAlign: 'justify', marginBottom: '12px' }}>
              Sovereign Media, a Brussels-based infrastructure provider, offers a European alternative: TTPA 2024/900-compliant campaign infrastructure spanning all 27 EU member states, deployable within 24 hours, with zero dependency on US technology platforms.
            </p>

            {/* Pull quote */}
            <div style={{ borderTop: `2px solid ${INK}`, borderBottom: `2px solid ${INK}`, padding: '12px 0', margin: '16px 0' }}>
              <div style={{ fontFamily: "'EB Garamond', serif", fontWeight: 600, fontStyle: 'italic', fontSize: '18px', lineHeight: 1.4, textAlign: 'center', color: INK }}>
                "Zero dependency on US platforms. 27 EU states. 24 hours."
              </div>
            </div>
          </div>

          {/* Column 2: Secondary story */}
          <div style={{ borderRight: `1px solid ${RULE}`, paddingRight: '16px', paddingLeft: '16px' }}>
            <div style={{ fontFamily: "'EB Garamond', serif", fontWeight: 600, fontSize: '11px', color: RED_FLAG, letterSpacing: '0.2em', marginBottom: '8px', borderBottom: `1px solid ${RULE}`, paddingBottom: '6px' }}>
              ANALYSIS · INFRASTRUCTURE
            </div>
            <h2 style={{ fontFamily: "'EB Garamond', serif", fontWeight: 600, fontSize: '20px', lineHeight: 1.2, marginBottom: '10px' }}>
              The Case for European Digital Sovereignty
            </h2>
            <p style={{ fontSize: '13px', lineHeight: 2, textAlign: 'justify', marginBottom: '12px', color: `${INK}CC` }}>
              Sovereign European infrastructure offers political organisations full TTPA compliance, GDPR adherence, and deployment within 24 hours. Trusted by EU Parliament, DG COMM, EPP Group, and S&D Group.
            </p>

            {/* Stats as column elements */}
            <div style={{ borderTop: `1px solid ${RULE}`, paddingTop: '12px', marginBottom: '12px' }}>
              {[['27', 'EU Member States'], ['24h', 'Emergency Deployment'], ['100%', 'TTPA Compliance'], ['0%', 'US Dependency']].map(([n, l], i) => (
                <div key={l} style={{ display: 'flex', gap: '12px', alignItems: 'baseline', padding: '6px 0', borderBottom: i < 3 ? `1px dotted ${RULE}40` : 'none' }}>
                  <div style={{ fontFamily: "'EB Garamond', serif", fontWeight: 600, fontSize: '22px', color: INK, minWidth: '56px' }}>{n}</div>
                  <div style={{ fontSize: '12px', color: FADED, fontStyle: 'italic' }}>{l}</div>
                </div>
              ))}
            </div>

            <div style={{ fontFamily: "'Source Code Pro', monospace", fontWeight: 300, fontSize: '10px', color: FADED, lineHeight: 1.8 }}>
              TRUSTED BY:<br />
              EU Parliament · DG COMM<br />
              EPP Group · S&D Group
            </div>
          </div>

          {/* Column 3: Classified / form */}
          <div style={{ paddingLeft: '16px' }}>
            <div style={{ border: `1px solid ${RULE}`, padding: '20px', background: '#FBF7EC', marginBottom: '16px' }}>
              {/* Classified header */}
              <div style={{ textAlign: 'center', borderBottom: `2px solid ${INK}`, paddingBottom: '8px', marginBottom: '16px' }}>
                <div style={{ fontFamily: "'Source Code Pro', monospace", fontSize: '9px', color: FADED, letterSpacing: '0.3em' }}>— ADVISORY INQUIRY —</div>
                <div style={{ fontFamily: "'EB Garamond', serif", fontWeight: 600, fontSize: '20px' }}>Letter to the Editor</div>
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '12px', color: FADED, lineHeight: 1.9, marginBottom: '16px', textAlign: 'center' }}>
                A senior advisor responds within 24 hours.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  { name: 'organisation', label: 'Organisation', ph: 'Your organisation' },
                  { name: 'name', label: 'Name', ph: 'Full name' },
                  { name: 'email', label: 'Address', ph: 'your@address.eu', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontFamily: "'Source Code Pro', monospace", fontWeight: 300, fontSize: '8px', color: focused === f.name ? INK : FADED, letterSpacing: '0.2em', marginBottom: '4px', transition: 'color 0.15s' }}>{f.label.toUpperCase()}</label>
                    <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                      value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                      style={{ width: '100%', padding: '7px 10px', background: NEWSPRINT, border: `1px solid ${focused === f.name ? INK : `${RULE}60`}`, fontFamily: "'EB Garamond', serif", fontSize: '14px', color: INK, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s' }}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: "'Source Code Pro', monospace", fontWeight: 300, fontSize: '8px', color: focused === 'campaign' ? INK : FADED, letterSpacing: '0.2em', marginBottom: '4px' }}>SUBJECT</label>
                  <textarea name="campaign" placeholder="Describe your situation" value={formData.campaign} onChange={handleChange} required rows={3}
                    style={{ width: '100%', padding: '7px 10px', background: NEWSPRINT, border: `1px solid ${focused === 'campaign' ? INK : `${RULE}60`}`, fontFamily: "'EB Garamond', serif", fontSize: '14px', color: INK, outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                  />
                </div>
                <label style={{ display: 'flex', gap: '8px', cursor: 'pointer', alignItems: 'flex-start' }}>
                  <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: INK, marginTop: 2 }} />
                  <span style={{ fontStyle: 'italic', fontSize: '11px', color: FADED, lineHeight: 1.6 }}>
                    I agree to the <Link to="/privacy" style={{ color: INK, textDecoration: 'none', fontWeight: 600 }}>Privacy Terms</Link>
                  </span>
                </label>
                <button type="submit" disabled={isSubmitting} style={{
                  padding: '10px', background: isSubmitting ? NEWSPRINT : INK,
                  color: isSubmitting ? FADED : NEWSPRINT,
                  fontFamily: "'Source Code Pro', monospace", fontWeight: 400, fontSize: '10px', letterSpacing: '0.2em',
                  border: `1px solid ${INK}`, cursor: isSubmitting ? 'wait' : 'pointer', transition: 'all 0.15s',
                }}>
                  {isSubmitting ? 'DISPATCHING...' : 'SUBMIT LETTER →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IndexV54;
