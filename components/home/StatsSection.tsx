'use client';

import { useEffect, useState } from 'react';
import { Users, Award, Clock, Heart } from 'lucide-react';

interface StatItemProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  suffix?: string;
  color: string;
}

function StatItem({ icon: Icon, value, label, suffix = '', color }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev < value) {
          return Math.min(prev + Math.ceil(value / 50), value);
        }
        return value;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-center group">
      <div className={`inline-flex items-center justify-center w-16 h-16 ${color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="space-y-2">
        <div className="text-4xl font-bold text-gray-900">
          {count.toLocaleString('ar-SA')}{suffix}
        </div>
        <div className="text-gray-600 font-medium">{label}</div>
      </div>
    </div>
  );
}

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: 5247,
      label: 'طفل تم علاجه بنجاح',
      suffix: '+',
      color: 'gradient-blue'
    },
    {
      icon: Award,
      value: 98,
      label: 'نسبة نجاح العلاج',
      suffix: '%',
      color: 'gradient-green'
    },
    {
      icon: Clock,
      value: 15,
      label: 'سنة من الخبرة',
      suffix: '+',
      color: 'gradient-purple'
    },
    {
      icon: Heart,
      value: 52,
      label: 'مختص معتمد',
      suffix: '+',
      color: 'gradient-orange'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            إنجازاتنا في أرقام
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            أرقام تعكس التزامنا بتقديم أفضل الخدمات وأحدث العلاجات لأطفال طيف التوحد وأسرهم
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <StatItem {...stat} />
            </div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-blue-50 rounded-xl">
            <h3 className="font-bold text-lg text-blue-900 mb-2">اعتماد دولي</h3>
            <p className="text-blue-700">معتمد من الجمعية الأمريكية للتوحد</p>
          </div>
          <div className="text-center p-6 bg-green-50 rounded-xl">
            <h3 className="font-bold text-lg text-green-900 mb-2">أحدث التقنيات</h3>
            <p className="text-green-700">نستخدم أحدث تقنيات التشخيص والعلاج</p>
          </div>
          <div className="text-center p-6 bg-purple-50 rounded-xl">
            <h3 className="font-bold text-lg text-purple-900 mb-2">دعم مستمر</h3>
            <p className="text-purple-700">متابعة ودعم الأطفال والأسر على مدار الساعة</p>
          </div>
        </div>
      </div>
    </section>
  );
}