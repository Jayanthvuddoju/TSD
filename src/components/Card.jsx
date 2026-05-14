import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Card({ 
  title, 
  description, 
  icon: Icon, 
  linkTo, 
  accentColor = 'teal',
  className = '',
  isCompressed = false,
  isExpanded = false,
  features = [],
  bgImage = null
}) {
  const accentMap = {
    teal: 'bg-brand-teal text-brand-teal',
    blue: 'bg-brand-blue text-brand-blue',
    purple: 'bg-brand-purple text-brand-purple',
  };

  const currentAccent = accentMap[accentColor] || accentMap.teal;
  const bgColor = currentAccent.split(' ')[0];
  const textColor = currentAccent.split(' ')[1];

  return (
    <div className={`group backdrop-blur-xl backdrop-saturate-[150%] border-t border-l border-white/20 border-b border-r border-black/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(0,0,0,0.5),0_8px_32px_rgba(0,0,0,0.4)] hover:border-white/30 hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_0_20px_rgba(28,168,157,0.3)] rounded-[16px] p-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col h-full relative overflow-hidden bg-[#03211f] ${className}`}>
      
      {/* Background Image Layer (Fades in on hover/expand) */}
      {bgImage && (
        <div 
          className={`absolute inset-0 z-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isExpanded ? 'opacity-15' : 'opacity-0'}`}
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      <div className="flex flex-col lg:flex-row h-full gap-8 relative z-10 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] lg:items-stretch">
        
        {/* Left Column (Core Info) */}
        <div className="flex flex-col h-full justify-start pt-2 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex-1 w-full">
          {Icon && (
            <div className={`w-16 h-16 rounded-2xl bg-black/50 flex items-center justify-center border border-white/10 shadow-inner shrink-0 ${textColor} mb-6 group-hover:scale-110 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isCompressed ? 'opacity-0 max-h-0 mb-0 border-none scale-75 overflow-hidden' : 'opacity-100 max-h-16 scale-100'}`}>
              <Icon size={32} strokeWidth={1.5} />
            </div>
          )}
          
          <h3 className="text-xl font-heading font-bold mb-3 text-white transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] max-w-[240px]">{title}</h3>
          
          <div className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${isCompressed ? 'opacity-0 max-h-0 mb-0' : 'opacity-100 max-h-40 mb-6'}`}>
            <p className={`${isExpanded ? 'text-white' : 'text-white/80'} flex-grow leading-relaxed transition-colors duration-300 max-w-[240px]`}>
              {description}
            </p>
          </div>

          {linkTo && (
            <div className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden mt-auto ${isCompressed ? 'opacity-0 max-h-0' : 'opacity-100 max-h-10'}`}>
              <Link 
                to={linkTo} 
                className={`inline-flex items-center font-medium ${textColor} hover:opacity-80 transition-opacity mt-auto w-fit`}
              >
                Learn more
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>

        {/* Right Column (Expanded Features) */}
        {features.length > 0 && (
          <div className={`lg:absolute lg:right-8 lg:top-8 lg:bottom-8 lg:w-[260px] flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isExpanded ? 'opacity-100 delay-300 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-teal mb-4">Key Capabilities</h4>
            <ul className="space-y-3">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-white">
                  <div className={`w-2 h-2 rounded-full ${bgColor} shrink-0`}></div>
                  <span className="whitespace-normal leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}
