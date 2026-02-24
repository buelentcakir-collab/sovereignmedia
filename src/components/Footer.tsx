import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-baseline mb-6">
              <span className="text-3xl font-black uppercase tracking-tight">SOVEREIGN</span>
              <span className="text-3xl font-light lowercase text-cyan">media</span>
            </div>
            <p className="text-white/60 max-w-md leading-relaxed mb-6">
              The exit strategy from Silicon Valley. 100% European technology for political and 
              institutional advertising across all 27 EU member states.
            </p>
            
            {/* European Tech Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/10 rounded">
              <Shield className="text-cyan" size={20} />
              <span className="text-sm font-semibold text-white/80">
                100% European Tech Stack — Sovereign & Independent
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-cyan">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/institutional-media" className="text-white/60 hover:text-white transition-colors">
                  Institutional Media
                </Link>
              </li>
              <li>
                <Link to="/strategic-advisory" className="text-white/60 hover:text-white transition-colors">
                  Strategic Advisory
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-white/60 hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-cyan">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/crisis-contact" className="text-white/60 hover:text-white transition-colors">
                  Emergency Deployment
                </Link>
              </li>
              <li>
                <a href="mailto:contact@sovereignmedia.eu" className="text-white/60 hover:text-white transition-colors">
                  contact@sovereignmedia.eu
                </a>
              </li>
              <li className="text-white/60">
                Brussels · Berlin · Amsterdam
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {currentYear} SovereignMedia.eu. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm text-white/40">
            <Link to="/imprint" className="hover:text-white transition-colors">Imprint</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
