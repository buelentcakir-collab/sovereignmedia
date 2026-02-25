// V60: Isometric / Game UI — flat 3D tiles, pixel-perfect shadows, RPG inventory style
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const IndexV60 = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [xp, setXp] = useState(0);

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap';
    document.head.appendChild(link);
    const t = setInterval(() => setXp(x => Math.min(x + 1, 100)), 40);
    return () => { document.head.removeChild(link); clearInterval(t); };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAccepted) { toast({ title: 'Skill check failed!', variant: 'destructive' }); return; }
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setIsSubmitting(false);
    toast({ title: '🎮 QUEST ACCEPTED!', description: 'Advisor spawns within 24 hours.' });
    setFormData({ organisation: '', name: '', email: '', campaign: '', privacyAccepted: false });
  };

  const INDIGO = '#1A0D4A';
  const TILE_BG = '#1E1055';
  const TILE_LIGHT = '#2A1878';
  const CYAN = '#00E5FF';
  const LIME = '#AAFF00';
  const ORANGE = '#FF9800';
  const RED = '#FF3B3B';
  const WHITE = '#E0DCFF';

  const iso = (h: number, c1: string, c2: string, c3: string) => `
    <style>
    .iso-tile {
      position:relative; display:inline-block;
      width:60px; height:60px;
    }
    </style>
  `;

  const style = `
    @keyframes v60-blink { 0%,100%{opacity:1} 50%{opacity:0} }
    @keyframes v60-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
    @keyframes v60-scan { 0%{transform:translateY(-100%)} 100%{transform:translateY(100%)} }
    .v60-blink { animation: v60-blink 1s step-end infinite; }
    .v60-float { animation: v60-float 3s ease-in-out infinite; }
  `;

  // ISO tile component as function
  const IsoTile = ({ label, value, color, delay = 0 }: { label: string; value: string; color: string; delay?: number }) => (
    <div className="v60-float" style={{ textAlign: 'center', animationDelay: `${delay}s` }}>
      {/* Isometric tile */}
      <div style={{ position: 'relative', width: '80px', height: '80px', margin: '0 auto' }}>
        {/* Top face */}
        <div style={{ position: 'absolute', top: 0, left: '10px', right: '10px', height: '24px', background: color, transform: 'skewX(-30deg)', boxShadow: `0 -2px 0 rgba(255,255,255,0.3)` }} />
        {/* Left face */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '30px', height: '48px', background: `${color}AA`, transform: 'skewY(-30deg)', transformOrigin: 'top right' }} />
        {/* Right face */}
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '30px', height: '48px', background: `${color}70`, transform: 'skewY(30deg)', transformOrigin: 'top left' }} />
        {/* Value on top */}
        <div style={{ position: 'absolute', top: '4px', left: '50%', transform: 'translateX(-50%)', fontFamily: "'Press Start 2P', cursive", fontSize: '10px', color: INDIGO, zIndex: 1 }}>{value}</div>
      </div>
      <div style={{ fontFamily: "'VT323', monospace", fontSize: '14px', color: `${WHITE}80`, letterSpacing: '0.1em', marginTop: '4px' }}>{label}</div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: INDIGO, fontFamily: "'VT323', monospace", color: WHITE, position: 'relative', overflow: 'hidden' }}>
      <style>{style}</style>

      {/* Pixel grid */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.1, backgroundImage: `linear-gradient(rgba(0,229,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.3) 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

      {/* Stars/particles */}
      {[...Array(20)].map((_, i) => (
        <div key={i} className="v60-blink" style={{ position: 'fixed', top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, width: 2, height: 2, background: CYAN, zIndex: 0, animationDelay: `${Math.random() * 2}s` }} />
      ))}

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Game HUD header */}
        <header style={{ background: TILE_BG, borderBottom: `2px solid ${CYAN}30`, padding: '0 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '64px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Level badge */}
            <div style={{ background: CYAN, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px', color: INDIGO }}>EU</span>
            </div>
            <div>
              <div style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px', color: CYAN, lineHeight: 1.4 }}>SOVEREIGN MEDIA</div>
              <div style={{ fontFamily: "'VT323', monospace", fontSize: '14px', color: `${WHITE}60` }}>LEVEL 27 // EU INFRASTRUCTURE</div>
            </div>
          </div>
          {/* XP bar */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <div style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '8px', color: LIME }}>XP</div>
            <div style={{ width: '120px', height: '12px', background: TILE_LIGHT, border: `2px solid ${LIME}30` }}>
              <div style={{ width: `${xp}%`, height: '100%', background: LIME, transition: 'width 0.1s' }} />
            </div>
            <div style={{ fontFamily: "'VT323', monospace", fontSize: '14px', color: LIME }}>{xp}/100</div>
          </div>
          <nav style={{ display: 'flex', gap: '0' }}>
            {['ITEMS', 'MAP', 'LOG'].map(item => (
              <a key={item} href="#" style={{ padding: '0 16px', height: '64px', display: 'flex', alignItems: 'center', fontFamily: "'Press Start 2P', cursive", fontSize: '8px', color: `${WHITE}50`, textDecoration: 'none', borderLeft: `1px solid ${CYAN}15`, transition: 'color 0.1s' }}
                onMouseEnter={e => (e.currentTarget.style.color = CYAN)}
                onMouseLeave={e => (e.currentTarget.style.color = `${WHITE}50`)}
              >{item}</a>
            ))}
            <Link to="/crisis-contact" style={{ padding: '0 20px', height: '64px', display: 'flex', alignItems: 'center', fontFamily: "'Press Start 2P', cursive", fontSize: '8px', color: INDIGO, background: LIME, textDecoration: 'none' }}>QUEST</Link>
          </nav>
        </header>

        <main style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', padding: '32px 32px 80px', alignItems: 'start' }}>

          {/* Left: Game world */}
          <div>
            {/* Error status */}
            <div style={{ background: `${RED}20`, border: `2px solid ${RED}50`, padding: '12px 16px', marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '10px', color: RED }} className="v60-blink">!</span>
              <div>
                <div style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '8px', color: RED, lineHeight: 1.6 }}>QUEST FAILED</div>
                <div style={{ fontFamily: "'VT323', monospace", fontSize: '16px', color: `${RED}CC` }}>POLITICAL CONTENT: REJECTED BY EXTERNAL PLATFORM</div>
              </div>
            </div>

            {/* Pixel headline */}
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontFamily: "'Press Start 2P', cursive", fontSize: 'clamp(20px, 3.5vw, 40px)', lineHeight: 1.4, color: CYAN, textShadow: `3px 3px 0 ${INDIGO}, 4px 4px 0 ${CYAN}40` }}>
                SOVEREIGN<br />MEDIA
              </div>
              <div style={{ fontFamily: "'VT323', monospace", fontSize: '22px', color: LIME, marginTop: '8px', letterSpacing: '0.1em' }}>
                ▶ BEYOND THEIR REACH
              </div>
            </div>

            <div style={{ fontFamily: "'VT323', monospace", fontSize: '18px', lineHeight: 1.8, color: `${WHITE}80`, maxWidth: '400px', marginBottom: '28px' }}>
              EU sovereign infrastructure. TTPA-certified. 27 member states. Zero US dependency. 24H deploy.
            </div>

            {/* ISO stat tiles */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
              <IsoTile label="EU STATES" value="27" color={CYAN} delay={0} />
              <IsoTile label="DEPLOY" value="24H" color={LIME} delay={0.3} />
              <IsoTile label="TTPA" value="100%" color={ORANGE} delay={0.6} />
              <IsoTile label="US DEP." value="ZERO" color="#8844FF" delay={0.9} />
            </div>

            <div style={{ fontFamily: "'VT323', monospace", fontSize: '16px', color: `${WHITE}40`, letterSpacing: '0.1em' }}>
              ALLIES: EU PARLIAMENT // DG COMM // EPP GROUP // SD GROUP
            </div>
          </div>

          {/* Right: Quest form */}
          <div>
            <div style={{ background: TILE_BG, border: `2px solid ${CYAN}30`, padding: '0' }}>
              {/* Quest header */}
              <div style={{ background: TILE_LIGHT, padding: '12px 20px', borderBottom: `2px solid ${CYAN}20`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '9px', color: CYAN }}>NEW QUEST</div>
                <div style={{ fontFamily: "'VT323', monospace", fontSize: '16px', color: ORANGE }}>★★★ LEGENDARY</div>
              </div>

              <div style={{ padding: '24px' }}>
                <div style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '12px', color: WHITE, lineHeight: 1.6, marginBottom: '8px' }}>REQUEST<br />ADVISORY</div>
                <div style={{ fontFamily: "'VT323', monospace", fontSize: '16px', color: `${WHITE}60`, marginBottom: '20px' }}>Advisor spawns within 24 hours.</div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { name: 'organisation', label: 'GUILD', ph: 'Your organisation' },
                    { name: 'name', label: 'PLAYER NAME', ph: 'Full name' },
                    { name: 'email', label: 'COMM SCROLL', ph: 'your@address.eu', type: 'email' },
                  ].map(f => (
                    <div key={f.name}>
                      <label style={{ display: 'block', fontFamily: "'Press Start 2P', cursive", fontSize: '7px', color: focused === f.name ? LIME : `${WHITE}40`, letterSpacing: '0.1em', marginBottom: '4px', transition: 'color 0.15s', lineHeight: 1.8 }}>{f.label}</label>
                      <input type={f.type || 'text'} name={f.name} placeholder={f.ph}
                        value={(formData as Record<string, string>)[f.name]} onChange={handleChange} required
                        style={{ width: '100%', padding: '9px 12px', background: INDIGO, border: `2px solid ${focused === f.name ? LIME : `${CYAN}20`}`, fontFamily: "'VT323', monospace", fontSize: '18px', color: WHITE, outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.15s' }}
                        onFocus={() => setFocused(f.name)} onBlur={() => setFocused(null)}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontFamily: "'Press Start 2P', cursive", fontSize: '7px', color: focused === 'campaign' ? LIME : `${WHITE}40`, letterSpacing: '0.1em', marginBottom: '4px', lineHeight: 1.8 }}>QUEST LOG</label>
                    <textarea name="campaign" placeholder="Describe what was blocked" value={formData.campaign} onChange={handleChange} required rows={3}
                      style={{ width: '100%', padding: '9px 12px', background: INDIGO, border: `2px solid ${focused === 'campaign' ? LIME : `${CYAN}20`}`, fontFamily: "'VT323', monospace", fontSize: '18px', color: WHITE, outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                      onFocus={() => setFocused('campaign')} onBlur={() => setFocused(null)}
                    />
                  </div>
                  <label style={{ display: 'flex', gap: '10px', cursor: 'pointer', alignItems: 'flex-start', background: `${CYAN}05`, padding: '8px', border: `1px solid ${CYAN}15` }}>
                    <input type="checkbox" name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} style={{ accentColor: LIME, marginTop: 2 }} />
                    <span style={{ fontFamily: "'VT323', monospace", fontSize: '16px', color: `${WHITE}60`, lineHeight: 1.5 }}>
                      Accept <Link to="/privacy" style={{ color: CYAN, textDecoration: 'none' }}>Privacy Scroll</Link>
                    </span>
                  </label>
                  <button type="submit" disabled={isSubmitting} style={{
                    padding: '14px', background: isSubmitting ? TILE_LIGHT : LIME,
                    color: isSubmitting ? `${WHITE}40` : INDIGO,
                    fontFamily: "'Press Start 2P', cursive", fontSize: '10px', letterSpacing: '0.05em',
                    border: '2px solid rgba(0,0,0,0.3)', cursor: isSubmitting ? 'wait' : 'pointer', transition: 'all 0.1s',
                    boxShadow: isSubmitting ? 'none' : `0 4px 0 ${INDIGO}, 0 6px 0 rgba(0,0,0,0.4)`,
                    transform: isSubmitting ? 'translateY(2px)' : 'none',
                  }}>
                    {isSubmitting ? 'LOADING...' : '▶ START QUEST'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default IndexV60;
