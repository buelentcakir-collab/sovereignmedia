// V59: Constructivist Poster — photomontage aesthetic, dramatic diagonals, bold red+black
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV59 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@300;400;600;700&display=swap';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) { toast({ title: 'Sign the agreement', variant: 'destructive' }); return; }
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    toast({ title: 'TRANSMITTED', description: 'Response in 24 hours.' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const RED = '#CC0000';
  const BLACK = '#0D0D0D';
  const WHITE = '#F5F0E8';
  const CREAM = '#F0E8D8';

  return (
    <div style={{ minHeight: '100vh', background: CREAM, fontFamily: "'Oswald', sans-serif", fontWeight: 300, color: BLACK, position: 'relative', overflow: 'hidden' }}>

      {/* Diagonal red band */}
      <div style={{ position: 'fixed', top: 0, right: 0, width: '50%', height: '100vh', background: RED, clipPath: 'polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%)', zIndex: 0 }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <header style={{ padding: '24px 64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '26px', color: BLACK, letterSpacing: '0.08em', lineHeight: 1 }}>SOVEREIGN MEDIA</div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 300, fontSize: '9px', color: `${BLACK}60`, letterSpacing: '0.4em', marginTop: '3px' }}>BRUSSELS · HAMBURG · AMSTERDAM</div>
          </div>
          <nav style={{ display: 'flex', gap: '0', alignItems: 'center' }}>
            {['DIENSTE', 'BERATUNG', 'EINBLICKE'].map(item => (
              <a key={item} href="#" style={{ padding: '8px 16px', fontFamily: "'Bebas Neue', sans-serif", fontSize: '15px', color: WHITE, letterSpacing: '0.08em', textDecoration: 'none', transition: 'opacity 0.1s', opacity: 0.7 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.7')}
              >{item}</a>
            ))}
            <Link to="/crisis-contact" style={{ padding: '10px 20px', fontFamily: "'Bebas Neue', sans-serif", fontSize: '15px', color: RED, background: BLACK, textDecoration: 'none', letterSpacing: '0.1em' }}>KONTAKT →</Link>
          </nav>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 'calc(100vh - 80px)', alignItems: 'center' }}>

          {/* Left: Constructivist hero */}
          <div style={{ padding: '40px 64px', position: 'relative' }}>
            {/* Diagonal rejection stamp */}
            <div style={{ position: 'absolute', top: 40, left: 64, transform: 'rotate(-45deg)', transformOrigin: 'center', background: RED, padding: '6px 24px', border: '3px solid #8B0000' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '14px', color: WHITE, letterSpacing: '0.2em' }}>ABGELEHNT</div>
            </div>

            {/* Constructivist headline */}
            <div style={{ marginTop: '80px', marginBottom: '16px' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(72px, 11vw, 160px)', lineHeight: 0.82, color: BLACK, letterSpacing: '0.02em' }}>
                FREI<br />HEIT.
              </div>
              <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: 'clamp(18px, 3vw, 40px)', color: RED, letterSpacing: '0.15em', marginTop: '8px' }}>
                EUROPÄISCHE MEDIEN
              </div>
            </div>

            <div style={{ width: '80px', height: '4px', background: BLACK, marginBottom: '20px' }} />

            <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 300, fontSize: '15px', lineHeight: 1.9, color: `${BLACK}80`, maxWidth: '360px', marginBottom: '32px' }}>
              Souveräne europäische Infrastruktur für politische Kampagnen. TTPA-konform. 27 EU-Mitgliedstaaten. Null US-Abhängigkeit.
            </p>

            {/* Constructivist stat bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
              {[['27 EU-STAATEN', 95], ['24H DEPLOYMENT', 100], ['100% TTPA', 100], ['0% US ABHÄNG.', 100]].map(([label, pct]) => (
                <div key={label as string} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '11px', color: BLACK, letterSpacing: '0.1em', minWidth: '140px' }}>{label as string}</div>
                  <div style={{ flex: 1, height: '8px', background: `${BLACK}15` }}>
                    <div style={{ height: '100%', width: `${pct}%`, background: RED }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['EU PARLIAMENT', 'DG COMM', 'EPP GROUP', 'S&D GROUP'].map(org => (
                <span key={org} style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '10px', color: `${BLACK}60`, letterSpacing: '0.15em' }}>{org}</span>
              ))}
            </div>
          </div>

          {/* Right: Form over red band */}
          <div style={{ padding: '40px 64px' }}>
            <div style={{ background: BLACK, padding: '36px' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '12px', color: RED, letterSpacing: '0.4em', marginBottom: '4px' }}>ANFRAGE</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '32px', color: WHITE, lineHeight: 1, marginBottom: '8px' }}>BERATUNG<br />ANFRAGEN</div>
              <div style={{ width: '40px', height: '3px', background: RED, marginBottom: '16px' }} />
              <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 300, fontSize: '13px', color: `${WHITE}60`, lineHeight: 1.9, marginBottom: '24px' }}>
                Antwort innerhalb von 24 Stunden.
              </p>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  { name: 'organisation', label: 'Organisation', ph: 'Ihre Organisation' },
                  { name: 'name', label: 'Name', ph: 'Vollständiger Name' },
                  { name: 'email', label: 'E-Mail', ph: 'ihre@adresse.eu', type: 'email' },
                ].map(f => (
                  <div key={f.name}>
                    <label style={{ display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '10px', color: focused === f.name ? RED : `${WHITE}40`, letterSpacing: '0.25em', marginBottom: '5px', transition: 'color 0.15s' }}>{f.label.toUpperCase()}</label>
                    <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                      value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                      style={{ width: '100%', padding: '10px 12px', background: `${WHITE}08`, border: `1px solid ${focused === f.name ? RED : `${WHITE}20`}`, fontFamily: "'Oswald', sans-serif", fontWeight: 300, fontSize: '14px', color: WHITE, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s' }}
                      onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontFamily: "'Oswald', sans-serif", fontWeight: 600, fontSize: '10px', color: focused === 'campaign' ? RED : `${WHITE}40`, letterSpacing: '0.25em', marginBottom: '5px' }}>SITUATION</label>
                  <textarea name="campaign" placeholder="Beschreiben Sie Ihre Situation" value={formData.campaign} onChange={handleChange} required rows={3}
                    style={{ width: '100%', padding: '10px 12px', background: `${WHITE}08`, border: `1px solid ${focused === 'campaign' ? RED : `${WHITE}20`}`, fontFamily: "'Oswald', sans-serif", fontWeight: 300, fontSize: '14px', color: WHITE, outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                    onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                  />
                </div>
                <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start' }}>
                  <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: RED }} />
                  <span style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 300, fontSize: '12px', color: `${WHITE}50`, lineHeight: 1.6 }}>
                    Ich stimme der <Link to="/privacy" style={{ color: RED, textDecoration: 'none', fontWeight: 600 }}>Datenschutzerklärung</Link> zu
                  </span>
                </label>
                <button type="submit" disabled={isSubmitting} style={{
                  padding: '16px', background: isSubmitting ? `${WHITE}10` : RED,
                  color: WHITE, fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '16px', letterSpacing: '0.15em', border: 'none',
                  cursor: isSubmitting ? 'wait' : 'pointer', transition: 'all 0.15s',
                }}>
                  {isSubmitting ? 'WIRD GESENDET...' : 'ANFRAGE STELLEN →'}
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default IndexV59;
