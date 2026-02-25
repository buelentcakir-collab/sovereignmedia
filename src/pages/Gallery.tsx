import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const VARIANTS = [
  { n: 1,  name: 'Brutalist Editorial',           tag: 'Awwwards SOTD' },
  { n: 2,  name: 'Cinematic Narrative',            tag: 'Cannes Lions' },
  { n: 3,  name: 'German Functionalism',           tag: 'Red Dot' },
  { n: 4,  name: 'Luxury Editorial',               tag: 'D&AD' },
  { n: 5,  name: 'Glassmorphism Tech',             tag: 'CSS Design Awards' },
  { n: 6,  name: 'Immersive Fullscreen',           tag: 'FWA' },
  { n: 7,  name: 'Clean B2B SaaS',                 tag: 'Webby Awards' },
  { n: 8,  name: 'Swiss Typography',               tag: 'Communication Arts' },
  { n: 9,  name: 'Scandinavian Minimal',           tag: 'IF Design' },
  { n: 10, name: 'Dark Luxury Brand-Forward',      tag: 'Pentawards' },
  { n: 11, name: 'Neubrutalism',                   tag: 'Raw Energy' },
  { n: 12, name: 'Vaporwave / Retrowave',          tag: 'Synthwave' },
  { n: 13, name: 'Art Deco / Geometric',           tag: 'Gold Ornaments' },
  { n: 14, name: 'Newspaper / Print Editorial',    tag: 'Ink & Column' },
  { n: 15, name: 'Bauhaus / Constructivist',       tag: 'Primary Colors' },
  { n: 16, name: 'Apple-style Product Landing',    tag: 'Silicon Valley' },
  { n: 17, name: 'Luxury Fashion House',           tag: 'Bodoni Moda' },
  { n: 18, name: 'Hacker / Matrix Terminal',       tag: 'Green on Black' },
  { n: 19, name: 'Memphis Design / 80s Revival',  tag: 'Bold Geometry' },
  { n: 20, name: 'Mission Control / Space Agency', tag: 'NASA/ESA' },
  { n: 21, name: 'Soviet Constructivist',          tag: 'PLAKAT' },
  { n: 22, name: 'Japanese Minimalism',            tag: 'Wabi-Sabi' },
  { n: 23, name: 'Cyberpunk 2077',                 tag: 'Neon Dystopia' },
  { n: 24, name: 'Bloomberg Terminal',             tag: 'Financial Data' },
  { n: 25, name: 'De Stijl / Mondrian',            tag: 'Grid Purity' },
  { n: 26, name: 'Retro Pixel / 8-bit',            tag: 'Game UI' },
  { n: 27, name: 'Blueprint / Technical Drawing',  tag: 'Engineering' },
  { n: 28, name: 'Organic / Biomorphic',           tag: 'Earth Tones' },
  { n: 29, name: 'Brutalist Architecture',         tag: 'Raw Concrete' },
  { n: 30, name: 'Neon Noir / Detective',          tag: 'Rain & Smoke' },
  { n: 31, name: 'Acid House / Rave Flyer',        tag: 'Psychedelic' },
  { n: 32, name: 'Suprematist / Malevich',         tag: 'Pure Geometry' },
  { n: 33, name: 'Tarot / Mystical Oracle',        tag: 'Deep Indigo' },
  { n: 34, name: 'Magazine Cover',                 tag: 'Time / Economist' },
  { n: 35, name: 'Retro Futurism 1960s',           tag: 'Space Age' },
  { n: 36, name: 'Industrial / Factory Floor',     tag: 'Steel & Orange' },
  { n: 37, name: 'Brutalist Web',                  tag: 'Raw HTML' },
  { n: 38, name: 'Stained Glass / Cathedral',      tag: 'Jewel Tones' },
  { n: 39, name: 'Swiss Poster / Intl Style',      tag: 'Helvetica Grid' },
  { n: 40, name: 'Monochrome Expressionist',       tag: 'Stark B&W' },
  { n: 41, name: 'Art Nouveau / Mucha',            tag: 'Botanical Gold' },
  { n: 42, name: 'Vintage Travel Poster',          tag: 'Destination Drama' },
  { n: 43, name: 'Neon Sign / Las Vegas',          tag: 'Americana Glow' },
  { n: 44, name: 'Risograph / Zine Print',         tag: 'Indie Print' },
  { n: 45, name: 'Y2K / Holographic',              tag: 'Chrome Iridescent' },
  { n: 46, name: 'Archival / Museum Catalog',      tag: 'Scholarly' },
  { n: 47, name: 'Paper Cutout / Matisse',         tag: 'Bold Flat Shapes' },
  { n: 48, name: 'Data Journalism / FT-style',     tag: 'Charts as Design' },
  { n: 49, name: 'Film Noir / 1940s',              tag: 'Venetian Shadows' },
  { n: 50, name: 'Pharmaceutical / Medical',       tag: 'Clinical Precision' },
  { n: 51, name: 'Vaporwave / Outrun',             tag: 'Retrowave Grid' },
  { n: 52, name: 'Street Art / Stencil',           tag: 'Paste-up Grunge' },
  { n: 53, name: 'Racing / Formula 1',             tag: 'Livery Speed' },
  { n: 54, name: 'Newspaper Broadsheet',           tag: 'Wire & Column' },
  { n: 55, name: 'Art Deco Moderne',               tag: '1930s Glamour' },
  { n: 56, name: 'Maximalist Neo-Pop',             tag: 'Candy Chaos' },
  { n: 57, name: 'Sci-Fi / Alien Interface',       tag: 'Bioluminescent' },
  { n: 58, name: 'Luxury Hospitality',             tag: 'Grand Hotel' },
  { n: 59, name: 'Constructivist Poster',          tag: 'Diagonal Red' },
  { n: 60, name: 'Isometric / Game UI',            tag: 'RPG Quest' },
];

const Gallery = () => {
  const [active, setActive] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  const open = (n: number) => setActive(n);
  const close = () => setActive(null);

  const prev = useCallback(() => {
    if (active === null) return;
    setActive(active === 1 ? 60 : active - 1);
  }, [active]);

  const next = useCallback(() => {
    if (active === null) return;
    setActive(active === 60 ? 1 : active + 1);
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (active === null) return;
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, prev, next]);

  const activeVariant = active ? VARIANTS.find(v => v.n === active) : null;

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0A0F',
      color: '#E8E4FF',
      fontFamily: "'system-ui', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .gal-root { font-family: 'DM Sans', system-ui, sans-serif; }

        .gal-card {
          position: relative;
          background: #12121A;
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .gal-card:hover {
          border-color: rgba(108, 92, 231, 0.5);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(108, 92, 231, 0.2);
        }

        .gal-thumb {
          width: 100%;
          height: 180px;
          background: #1A1A26;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .gal-thumb iframe {
          width: 160%;
          height: 160%;
          transform: scale(0.625);
          transform-origin: top left;
          border: none;
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 0;
        }

        .gal-num {
          position: absolute;
          top: 8px;
          left: 10px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          color: rgba(255,255,255,0.25);
          z-index: 2;
          background: rgba(10,10,15,0.7);
          padding: 2px 6px;
          border-radius: 3px;
          backdrop-filter: blur(4px);
        }

        .gal-info {
          padding: 12px 14px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .gal-info-name {
          font-size: 13px;
          font-weight: 500;
          color: #E8E4FF;
          line-height: 1.3;
          margin-bottom: 3px;
        }

        .gal-info-tag {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.3);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .gal-open-btn {
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(108, 92, 231, 0.9);
          color: white;
          border: none;
          border-radius: 4px;
          padding: 4px 8px;
          font-size: 11px;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.15s;
          z-index: 3;
          white-space: nowrap;
        }

        .gal-card:hover .gal-open-btn { opacity: 1; }

        /* Overlay */
        .gal-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          background: #0A0A0F;
        }

        .gal-overlay-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 0 20px;
          height: 52px;
          background: #12121A;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          flex-shrink: 0;
        }

        .gal-nav-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          font-size: 16px;
          transition: background 0.15s, border-color 0.15s;
          flex-shrink: 0;
        }
        .gal-nav-btn:hover {
          background: rgba(108, 92, 231, 0.2);
          border-color: rgba(108, 92, 231, 0.5);
          color: white;
        }

        .gal-close-btn {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          font-size: 12px;
          font-family: 'DM Sans', sans-serif;
          transition: background 0.15s;
        }
        .gal-close-btn:hover { background: rgba(255,255,255,0.08); }

        .gal-external-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 6px;
          border: 1px solid rgba(108, 92, 231, 0.3);
          background: rgba(108, 92, 231, 0.1);
          color: rgba(200, 185, 255, 0.9);
          cursor: pointer;
          font-size: 12px;
          font-family: 'DM Sans', sans-serif;
          text-decoration: none;
          transition: background 0.15s;
        }
        .gal-external-btn:hover { background: rgba(108, 92, 231, 0.2); }

        .gal-overlay-iframe {
          flex: 1;
          width: 100%;
          border: none;
        }

        .gal-counter {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          color: rgba(255,255,255,0.3);
        }

        .gal-variant-label {
          display: flex;
          flex-direction: column;
        }
        .gal-variant-label-name {
          font-size: 14px;
          font-weight: 500;
          color: #E8E4FF;
        }
        .gal-variant-label-tag {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.06em;
        }

        /* Thumbnails strip in overlay */
        .gal-strip {
          height: 48px;
          background: #0E0E18;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 0 16px;
          overflow-x: auto;
          flex-shrink: 0;
          scrollbar-width: thin;
          scrollbar-color: rgba(108, 92, 231, 0.3) transparent;
        }
        .gal-strip-item {
          flex-shrink: 0;
          width: 36px;
          height: 28px;
          border-radius: 3px;
          border: 1px solid rgba(255,255,255,0.06);
          background: #1A1A26;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Mono', monospace;
          font-size: 9px;
          color: rgba(255,255,255,0.3);
          transition: border-color 0.1s, background 0.1s;
        }
        .gal-strip-item:hover {
          border-color: rgba(108, 92, 231, 0.4);
          background: rgba(108, 92, 231, 0.1);
          color: rgba(200,185,255,0.8);
        }
        .gal-strip-item.active {
          border-color: rgba(108, 92, 231, 0.8);
          background: rgba(108, 92, 231, 0.2);
          color: #C4B5FD;
        }
      `}</style>

      <div className="gal-root">
        {/* Header */}
        <header style={{
          padding: '28px 40px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}>
          <div>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', marginBottom: 8 }}>
                ← SOVEREIGN MEDIA
              </div>
            </Link>
            <h1 style={{ fontSize: 28, fontWeight: 400, color: '#E8E4FF', letterSpacing: '-0.02em', lineHeight: 1 }}>
              Design Variants
            </h1>
            <p style={{ marginTop: 8, fontSize: 14, color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}>
              60 independent homepage designs — same content, radically different aesthetic
            </p>
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, color: 'rgba(108, 92, 231, 0.8)', background: 'rgba(108,92,231,0.08)', border: '1px solid rgba(108,92,231,0.2)', borderRadius: 6, padding: '6px 14px' }}>
            60 variants
          </div>
        </header>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 16,
          padding: '32px 40px 60px',
        }}>
          {VARIANTS.map(v => (
            <div
              key={v.n}
              className="gal-card"
              onClick={() => open(v.n)}
              onMouseEnter={() => setHovered(v.n)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="gal-thumb">
                {hovered === v.n && (
                  <iframe
                    src={`/${v.n}`}
                    title={`Variant ${v.n}`}
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                )}
                {hovered !== v.n && (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                    color: 'rgba(255,255,255,0.12)',
                  }}>
                    <div style={{ fontSize: 36, fontFamily: "'DM Mono', monospace", fontWeight: 500, color: 'rgba(108,92,231,0.3)' }}>
                      {String(v.n).padStart(2, '0')}
                    </div>
                  </div>
                )}
              </div>
              <div className="gal-num">V{String(v.n).padStart(2, '0')}</div>
              <button className="gal-open-btn" onClick={e => { e.stopPropagation(); open(v.n); }}>
                Preview ↗
              </button>
              <div className="gal-info">
                <div className="gal-info-name">{v.name}</div>
                <div className="gal-info-tag">{v.tag}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen overlay */}
      {active !== null && activeVariant && (
        <div className="gal-overlay">
          {/* Top bar */}
          <div className="gal-overlay-bar">
            <button className="gal-nav-btn" onClick={prev} title="Previous (←)">←</button>
            <button className="gal-nav-btn" onClick={next} title="Next (→)">→</button>

            <div className="gal-variant-label">
              <div className="gal-variant-label-name">
                V{String(activeVariant.n).padStart(2, '0')} — {activeVariant.name}
              </div>
              <div className="gal-variant-label-tag">{activeVariant.tag}</div>
            </div>

            <div className="gal-counter" style={{ marginLeft: 8 }}>
              {active} / 60
            </div>

            <a
              href={`/${active}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gal-external-btn"
              style={{ marginLeft: 'auto' }}
            >
              Open ↗
            </a>
            <button className="gal-close-btn" onClick={close}>
              ✕ Close
            </button>
          </div>

          {/* Iframe */}
          <iframe
            key={active}
            src={`/${active}`}
            title={`Variant ${active}`}
            className="gal-overlay-iframe"
          />

          {/* Bottom strip */}
          <div className="gal-strip" id="gal-strip">
            {VARIANTS.map(v => (
              <div
                key={v.n}
                className={`gal-strip-item${v.n === active ? ' active' : ''}`}
                onClick={() => setActive(v.n)}
                title={`V${v.n} — ${v.name}`}
              >
                {v.n}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
