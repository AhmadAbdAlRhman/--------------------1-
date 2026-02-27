import { Fish, TrendingUp, Sprout, Waves, Wheat } from 'lucide-react';
import Home from "../app/assets/Home.jpeg";
export default function App() {
  const backgroundImage = Home;

  const options = [
    {
      id: 1,
      title: 'تاجر',
      description: '',
      icon: Fish,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-600'
    },
    {
      id: 2,
      title: 'أعلاف',
      description: '',
      icon: Wheat,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-600'
    },
    {
      id: 3,
      title: 'استثمار',
      description: '',
      icon: TrendingUp,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-600'
    },
    {
      id: 4,
      title: 'مزارع',
      description: '',
      icon: Sprout,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-600'
    },
    {
      id: 5,
      title: 'صياد',
      description: '',
      icon: Waves,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-600'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {/* Mobile Frame */}
      <div className="relative w-full max-w-[390px] h-[844px] bg-black rounded-[50px] shadow-2xl overflow-hidden">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-12 z-50 flex items-center justify-between px-8 text-white text-sm">
          <div className="flex items-center gap-1">
            <div className="w-4 h-3 border border-white rounded-sm"></div>
            <div className="w-1 h-2 bg-white rounded-sm"></div>
          </div>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full"></div>
          <div>9:41 PM</div>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={backgroundImage} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/30 to-blue-900/60"></div>
        </div>

        {/* Content */}
        <div className="relative h-full pt-20 pb-12 px-6 flex flex-col" dir="rtl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-4">
              اختر دورك في السوق
            </h1>
            <p className="text-white/90 text-sm leading-relaxed px-2">
              اختر الدور الذي يتماشى مع عملك على أفضل روح لشخصيتك
              <br />
              تجربة الطلبيات بما يتناسب مع طبيعة عملك
            </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {options.slice(0, 4).map((option) => (
              <button
                key={option.id}
                className={`${option.bgColor} rounded-2xl p-5 text-center transition-all hover:scale-105 active:scale-95 shadow-lg`}
              >
                <div className={`bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3`}>
                  <option.icon className="text-white" size={28} />
                </div>
                <h3 className="text-gray-800 font-bold text-lg mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {option.description}
                </p>
              </button>
            ))}
            
            {/* Last Icon Centered */}
            {(() => {
              const lastOption = options[4];
              const IconComponent = lastOption.icon;
              return (
                <button
                  className={`${lastOption.bgColor} rounded-2xl p-5 text-center transition-all hover:scale-105 active:scale-95 shadow-lg col-span-2 max-w-[180px] mx-auto`}
                >
                  <div className={`bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="text-gray-800 font-bold text-lg mb-2">
                    {lastOption.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {lastOption.description}
                  </p>
                </button>
              );
            })()}
          </div>

          {/* Continue Button */}
          <div className="mt-auto space-y-4">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg">
              متابعة
            </button>
            <p className="text-center text-yellow-400 text-sm">
              يمكنك تغيير دورك لاحقاً من الإعدادات
            </p>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-white rounded-full"></div>
      </div>
    </div>
  );
}