import { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  const stats = [
    { number: 500, label: 'Pacientes Atendidos', suffix: '+' },
    { number: 8, label: 'Servicios Especializados', suffix: '' },
    { number: 15, label: 'Años de Experiencia', suffix: '+' },
    { number: 98, label: '% Satisfacción', suffix: '%' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ targetNumber, suffix = '', isVisible }: { 
    targetNumber: number; 
    suffix?: string; 
    isVisible: boolean 
  }) => {
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000; // 2 seconds
      const increment = targetNumber / (duration / 16); // 60fps
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setCurrentNumber(targetNumber);
          clearInterval(timer);
        } else {
          setCurrentNumber(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, targetNumber]);

    return (
      <span className="font-display font-black text-white">
        {currentNumber}{suffix}
      </span>
    );
  };

  return (
    <section ref={statsRef} className="py-20 lg:py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-white via-primary-200 to-white"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
            Números que Hablan por Nosotros
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-primary-200 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative">
                {/* Background Circle */}
                <div className="absolute inset-0 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-300 scale-75 group-hover:scale-100"></div>
                
                {/* Content */}
                <div className="relative bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20 group-hover:border-white/40 transition-all duration-300 hover-glow">
                  <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 text-white drop-shadow-lg">
                    <AnimatedNumber 
                      targetNumber={stat.number} 
                      suffix={stat.suffix}
                      isVisible={isVisible}
                    />
                  </div>
                  <div className="w-12 h-0.5 bg-white mx-auto mb-3 rounded-full"></div>
                  <p className="text-white/90 font-semibold text-sm md:text-base leading-tight">
                    {stat.label}
                  </p>
                  
                  {/* Decorative Icon */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Accent */}
        <div className="text-center mt-16">
          <p className="text-white/80 text-lg font-semibold">
            Más de <span className="font-bold text-white">una década</span> dedicados a tu bienestar dental
          </p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
