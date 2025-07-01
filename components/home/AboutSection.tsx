import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Award, Users, Clock, Target, ArrowLeft } from 'lucide-react';

export function AboutSection() {
  const achievements = [
    {
      icon: Award,
      title: 'اعتماد دولي',
      description: 'معتمد من الجمعيات العالمية للتوحد'
    },
    {
      icon: Users,
      title: 'فريق متخصص',
      description: '+50 مختص معتمد في مختلف التخصصات'
    },
    {
      icon: Clock,
      title: 'خبرة طويلة',
      description: '+15 سنة من الخبرة في العلاج'
    },
    {
      icon: Target,
      title: 'نتائج مثبتة',
      description: '98% نسبة نجاح في برامج العلاج'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                من نحن؟
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  مركز النور هو المركز الرائد في العالم العربي في مجال تشخيص وعلاج اضطراب طيف التوحد. 
                  تأسس المركز عام 2009 برؤية واضحة: توفير أفضل الخدمات المتخصصة للأطفال ذوي اضطراب طيف التوحد وأسرهم.
                </p>
                <p>
                  نؤمن بأن كل طفل يستحق الفرصة للنمو والتطور بأقصى إمكاناته. لذلك نقدم برامج علاج فردية ومتخصصة 
                  تعتمد على أحدث الأبحاث العلمية والممارسات المثبتة عالمياً.
                </p>
                <p>
                  فريقنا المتميز من المختصين المعتمدين يعمل بتفان لضمان حصول كل طفل على الرعاية الشاملة 
                  التي يحتاجها للوصول إلى أهدافه التطويرية.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 space-x-reverse p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/about">
                <Button className="btn-primary">
                  اعرف المزيد عنا
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
              <Link href="/team">
                <Button variant="outline" className="btn-secondary">
                  تعرف على فريقنا
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-2xl">
              {/* Mission & Vision Cards */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">رؤيتنا</h3>
                  <p className="text-gray-700">
                    أن نكون المركز الأول عربياً في تقديم خدمات التوحد المتميزة، 
                    ونساهم في بناء مجتمع أكثر وعياً وقبولاً للتنوع.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-green-600 mb-3">رسالتنا</h3>
                  <p className="text-gray-700">
                    تمكين الأطفال ذوي اضطراب طيف التوحد من تحقيق أقصى إمكاناتهم 
                    من خلال العلاج المتخصص والدعم الشامل للأسر.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-purple-600 mb-3">قيمنا</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                      التميز في الخدمة
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                      الاحترام والكرامة
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-purple-500 rounded-full ml-2"></span>
                      الشفافية والمصداقية
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
}