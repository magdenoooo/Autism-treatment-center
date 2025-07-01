import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, MessageCircle, ArrowLeft } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              ابدأ رحلة العلاج اليوم
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              لا تتردد في اتخاذ الخطوة الأولى. فريقنا من المختصين جاهز لمساعدتك 
              في تشخيص وعلاج طفلك بأحدث الطرق العلمية المثبتة
            </p>
          </div>

          {/* Main CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/tests">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                ابدأ الاختبار الآن
                <ArrowLeft className="w-5 h-5 mr-3" />
              </Button>
            </Link>
            <Link href="/consultation">
              <Button 
               
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                احجز استشارة مجانية
                <Calendar className="w-5 h-5 mr-3" />
              </Button>
            </Link>
          </div>

          {/* Contact options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Link href="tel:+966111234567">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">اتصل بنا الآن</h3>
                <p className="text-blue-100 text-sm">+966 11 123 4567</p>
                <p className="text-blue-100 text-xs mt-1">متاح 24/7</p>
              </div>
            </Link>

            <Link href="/appointment">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                <Calendar className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">احجز موعد</h3>
                <p className="text-blue-100 text-sm">اختر الوقت المناسب</p>
                <p className="text-blue-100 text-xs mt-1">حجز فوري</p>
              </div>
            </Link>

            <Link href="/contact">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105">
                <MessageCircle className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-white font-bold mb-2">راسلنا</h3>
                <p className="text-blue-100 text-sm">استشارة مجانية</p>
                <p className="text-blue-100 text-xs mt-1">رد خلال ساعة</p>
              </div>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-white text-sm opacity-80">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full ml-2"></span>
              معتمد دولياً
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-yellow-400 rounded-full ml-2"></span>
              أكثر من 15 سنة خبرة
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full ml-2"></span>
              +5000 طفل تم علاجه
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full ml-2"></span>
              98% نسبة نجاح
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}