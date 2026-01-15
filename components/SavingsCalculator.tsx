import React, { useState } from 'react';
import { Calculator, Zap, Coins } from 'lucide-react';

const SavingsCalculator: React.FC = () => {
  const [kwh, setKwh] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateSavings = () => {
    const consumption = parseFloat(kwh);
    if (isNaN(consumption) || consumption <= 0) return;

    // حساب التوفير بناءً على سعر الدولة الرسمي
    // المعادلة: الاستهلاك * 12 شهر * 750 ليرة
    const costPerKwh = 750;
    const annualSavings = consumption * 12 * costPerKwh;
    setResult(annualSavings);
  };

  return (
    <section id="calculator" className="py-20 bg-primary-50 dark:bg-dark-card transition-colors relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white dark:bg-white/10 text-primary-600 dark:text-primary-400 px-4 py-1 rounded-full text-sm font-bold mb-4 shadow-sm">
            <Calculator size={16} />
            <span>حاسبة التكلفة السنوية</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            حساب تكلفة الاستهلاك
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            أدخل معدل استهلاكك الشهري لنحسب لك التكلفة السنوية التقديرية بناءً على تسعيرة الدولة (750 ل.س للكيلو واط).
          </p>
        </div>

        <div className="bg-white dark:bg-[#0f172a] rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* Input Section */}
            <div className="p-8 md:p-10 space-y-6 flex flex-col justify-center">
              <div>
                <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                  <Zap size={18} className="text-yellow-500" />
                  الاستهلاك الشهري (كيلو واط)
                </label>
                <input
                  type="number"
                  value={kwh}
                  onChange={(e) => setKwh(e.target.value)}
                  placeholder="مثلاً: 300"
                  className="w-full bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary-500 border border-gray-200 dark:border-gray-600 transition-all"
                />
              </div>

              <button
                onClick={calculateSavings}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-500/30 transition-all transform hover:scale-[1.02] active:scale-95"
              >
                احسب التكلفة الآن
              </button>
            </div>

            {/* Result Section */}
            <div className="bg-primary-600 dark:bg-primary-900 p-8 md:p-10 text-white flex flex-col justify-center items-center text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              
              {result !== null ? (
                <div className="relative z-10 animate-fade-in">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                    <Coins size={32} className="text-yellow-300" />
                  </div>
                  <h3 className="text-lg font-medium text-primary-100 mb-2">التكلفة السنوية التقديرية</h3>
                  <div className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">
                    {result.toLocaleString('en-US')}
                    <span className="text-2xl mr-2 font-normal">ل.س</span>
                  </div>
                  <p className="text-sm text-primary-100 mt-4 bg-white/10 py-2 px-4 rounded-lg inline-block">
                    * تم الاحتساب بناءً على سعر 750 ل.س للكيلو واط
                  </p>
                </div>
              ) : (
                <div className="relative z-10 opacity-80">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Calculator size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">بانتظار مدخلاتك...</h3>
                  <p className="text-sm text-primary-100">
                    أدخل البيانات في الحقل المجاور لرؤية النتيجة هنا.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;