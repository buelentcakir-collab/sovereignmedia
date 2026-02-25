// V50: Pharmaceutical / Medical Report — clinical white, prescription pad, medical precision
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV50 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) { toast({ title: 'Patient consent required', variant: 'destructive' }); return; }
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    toast({ title: 'Referral accepted', description: 'Specialist contact within 24 hours.' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const CLINICAL = '#F8FAFC';
  const MEDICAL_BLUE = '#0066CC';
  const MEDICAL_GREEN = '#00874A';
  const ALERT_RED = '#CC2200';
  const TEXT = '#1A2332';
  const LIGHT_RULE = '#E2E8F0';
  const MID = '#64748B';

  return (
    <div style={{ minHeight: '100vh', background: CLINICAL, fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: TEXT, position: 'relative' }}>

      {/* Medical cross accent */}
      <div style={{ position: 'fixed', top: '15%', right: '10%', opacity: 0.04, zIndex: 0 }}>
        <svg width="200" height="200" viewBox="0 0 200 200">
          <rect x="80" y="20" width="40" height="160" fill={MEDICAL_BLUE}/>
          <rect x="20" y="80" width="160" height="40" fill={MEDICAL_BLUE}/>
        </svg>
      </div>

      {/* Alert banner */}
      <div style={{ background: ALERT_RED, padding: '8px 0', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#FFF', letterSpacing: '0.3em' }}>
          DIAGNOSTIC: POLITICAL CONTENT — REJECTED BY EXTERNAL PLATFORMS — TREATMENT AVAILABLE
        </span>
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto', padding: '0 48px' }}>

        {/* Header */}
        <header style={{ padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `2px solid ${TEXT}` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: 32, height: 32, background: MEDICAL_BLUE, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="16" height="16" viewBox="0 0 16 16"><rect x="6" y="1" width="4" height="14" fill="white"/><rect x="1" y="6" width="14" height="4" fill="white"/></svg>
            </div>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: '16px', color: TEXT, letterSpacing: '0.05em' }}>SOVEREIGN MEDIA</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontWeight: 300, fontSize: '9px', color: MID, letterSpacing: '0.2em' }}>EU Sovereign Infrastructure Division</div>
            </div>
          </div>
          <nav style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
            {['Treatments', 'Advisory', 'Research'].map(item => (
              <a key={item} href="#" style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: MID, textDecoration: 'none', letterSpacing: '0.1em', transition: 'color 0.15s' }}
                onMouseEnter={e => (e.currentTarget.style.color = MEDICAL_BLUE)}
                onMouseLeave={e => (e.currentTarget.style.color = MID)}
              >{item}</a>
            ))}
            <Link to="/crisis-contact" style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#FFF', background: MEDICAL_BLUE, padding: '8px 16px', textDecoration: 'none', letterSpacing: '0.1em' }}>Referral →</Link>
          </nav>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '48px', paddingTop: '40px', paddingBottom: '80px', alignItems: 'start' }}>

          {/* Left: Clinical report */}
          <div>
            {/* Diagnosis box */}
            <div style={{ border: `2px solid ${ALERT_RED}`, padding: '16px 20px', marginBottom: '32px', background: `${ALERT_RED}05`, display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: '24px', color: ALERT_RED, lineHeight: 1, flexShrink: 0 }}>⚕</div>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: '10px', color: ALERT_RED, letterSpacing: '0.25em', marginBottom: '4px' }}>DIAGNOSIS</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: '15px', color: TEXT }}>Platform Rejection Syndrome — Political Content (ICD: PRS-EU-2024)</div>
              </div>
            </div>

            {/* Clinical headline */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: 'clamp(28px, 4vw, 56px)', lineHeight: 1.1, color: TEXT, letterSpacing: '-0.01em' }}>
                Prescribed:<br /><span style={{ color: MEDICAL_GREEN }}>Sovereign</span><br />Infrastructure.
              </div>
            </div>

            {/* Treatment summary */}
            <div style={{ background: '#FFF', border: `1px solid ${LIGHT_RULE}`, padding: '20px', marginBottom: '24px' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: '10px', color: MID, letterSpacing: '0.2em', marginBottom: '12px', borderBottom: `1px solid ${LIGHT_RULE}`, paddingBottom: '8px' }}>TREATMENT PROTOCOL</div>
              <p style={{ fontSize: '14px', lineHeight: 2, color: TEXT }}>
                Sovereign European infrastructure for political campaigns. TTPA 2024/900 compliant. Coverage: 27 EU member states. Side effects: Zero US platform dependency. Onset: 24 hours.
              </p>
            </div>

            {/* Clinical data table */}
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px', fontFamily: "'DM Mono', monospace" }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${TEXT}` }}>
                  <th style={{ fontSize: '9px', color: MID, letterSpacing: '0.2em', textAlign: 'left', padding: '8px 0', fontWeight: 400 }}>PARAMETER</th>
                  <th style={{ fontSize: '9px', color: MID, letterSpacing: '0.2em', textAlign: 'right', padding: '8px 0', fontWeight: 400 }}>RESULT</th>
                  <th style={{ fontSize: '9px', color: MID, letterSpacing: '0.2em', textAlign: 'right', padding: '8px 0', fontWeight: 400 }}>REFERENCE</th>
                  <th style={{ fontSize: '9px', color: MID, letterSpacing: '0.2em', textAlign: 'center', padding: '8px 0', fontWeight: 400 }}>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['EU Coverage', '27 states', '≥ 20', MEDICAL_GREEN, '✓ NORMAL'],
                  ['Deployment Time', '24 hours', '≤ 72h', MEDICAL_GREEN, '✓ NORMAL'],
                  ['TTPA Compliance', '100%', '≥ 95%', MEDICAL_GREEN, '✓ NORMAL'],
                  ['US Dependency', '0%', '< 10%', MEDICAL_GREEN, '✓ NORMAL'],
                  ['Google/Meta Blocks', '100%', '= 0%', ALERT_RED, '✗ CRITICAL'],
                ].map(([p, r, ref, c, s]) => (
                  <tr key={p as string} style={{ borderBottom: `1px solid ${LIGHT_RULE}` }}>
                    <td style={{ fontSize: '13px', color: TEXT, padding: '8px 0' }}>{p}</td>
                    <td style={{ fontSize: '13px', color: c as string, textAlign: 'right', padding: '8px 0', fontWeight: 500 }}>{r}</td>
                    <td style={{ fontSize: '13px', color: MID, textAlign: 'right', padding: '8px 0' }}>{ref}</td>
                    <td style={{ fontSize: '11px', color: c as string, textAlign: 'center', padding: '8px 0' }}>{s}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: MID, letterSpacing: '0.1em' }}>
              Trusted by: EU Parliament · DG COMM · EPP Group · S&D Group
            </div>
          </div>

          {/* Right: Prescription form */}
          <div>
            <div style={{ background: '#FFF', border: `1px solid ${LIGHT_RULE}`, borderTop: `4px solid ${MEDICAL_BLUE}` }}>
              {/* Rx header */}
              <div style={{ padding: '16px 20px', borderBottom: `1px solid ${LIGHT_RULE}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: '20px', color: MEDICAL_BLUE }}>Rx</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', color: MID, letterSpacing: '0.2em' }}>ADVISORY REQUEST</div>
              </div>
              <div style={{ padding: '24px' }}>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', color: MID, lineHeight: 1.9, marginBottom: '20px' }}>
                  Complete intake form. A specialist will contact within 24 hours.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { name: 'organisation', label: 'Organisation', ph: 'Your organisation' },
                    { name: 'name', label: 'Patient Name', ph: 'Full name' },
                    { name: 'email', label: 'Contact', ph: 'your@address.eu', type: 'email' },
                  ].map(f => (
                    <div key={f.name}>
                      <label style={{ display: 'block', fontFamily: "'DM Mono', monospace", fontSize: '9px', color: focused === f.name ? MEDICAL_BLUE : MID, letterSpacing: '0.2em', marginBottom: '5px', transition: 'color 0.15s' }}>{f.label.toUpperCase()}</label>
                      <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                        value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                        style={{ width: '100%', padding: '9px 12px', background: CLINICAL, border: `1px solid ${focused === f.name ? MEDICAL_BLUE : LIGHT_RULE}`, fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '14px', color: TEXT, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s' }}
                        onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontFamily: "'DM Mono', monospace", fontSize: '9px', color: focused === 'campaign' ? MEDICAL_BLUE : MID, letterSpacing: '0.2em', marginBottom: '5px' }}>CHIEF COMPLAINT</label>
                    <textarea name="campaign" placeholder="Describe what was blocked" value={formData.campaign} onChange={handleChange} required rows={3}
                      style={{ width: '100%', padding: '9px 12px', background: CLINICAL, border: `1px solid ${focused === 'campaign' ? MEDICAL_BLUE : LIGHT_RULE}`, fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: '14px', color: TEXT, outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                      onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                    />
                  </div>
                  <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start', padding: '10px', background: CLINICAL, border: `1px solid ${LIGHT_RULE}` }}>
                    <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: MEDICAL_BLUE, marginTop: 1 }} />
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: MID, lineHeight: 1.6 }}>
                      I consent per <Link to="/privacy" style={{ color: MEDICAL_BLUE, textDecoration: 'none' }}>Privacy Regulations</Link>
                    </span>
                  </label>
                  <button type="submit" disabled={isSubmitting} style={{
                    padding: '14px', background: isSubmitting ? LIGHT_RULE : MEDICAL_BLUE,
                    color: isSubmitting ? MID : '#FFF',
                    fontFamily: "'DM Mono', monospace", fontWeight: 500, fontSize: '12px', letterSpacing: '0.15em',
                    border: 'none', cursor: isSubmitting ? 'wait' : 'pointer', transition: 'all 0.15s',
                  }}>
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT REFERRAL →'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div style={{ height: '4px', background: MEDICAL_GREEN }} />
    </div>
  );
};
export default IndexV50;
