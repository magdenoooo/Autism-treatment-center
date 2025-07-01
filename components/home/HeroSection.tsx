'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlayCircle, ArrowLeft, Heart, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8 animate-fadeInUp">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 ml-2" />
                أكبر مركز عربي متخصص
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                مركز
                <span className="text-gradient"> النور </span>
                لاختبار وعلاج
                <span className="text-gradient"> التوحد</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                نقدم أحدث الاختبارات التشخيصية وأفضل برامج العلاج المتخصصة لأطفال طيف التوحد. 
                رحلة شاملة من التشخيص المبكر إلى العلاج المتقدم مع فريق من أمهر المختصين.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/tests">
                <Button className="btn-primary text-lg px-8 py-4">
                  ابدأ الاختبار الآن
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </Button>
              </Link>
              <Button variant="outline" className="btn-secondary text-lg px-8 py-4">
                <PlayCircle className="w-5 h-5 ml-2" />
                شاهد الفيديو التعريفي
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 space-x-reverse pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">+15</div>
                <div className="text-sm text-gray-600">سنة خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">+5000</div>
                <div className="text-sm text-gray-600">طفل تم علاجه</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">+50</div>
                <div className="text-sm text-gray-600">مختص معتمد</div>
              </div>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className="relative animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-8 transform -rotate-3">
                <div className="space-y-6">
                  {/* Mock app interface */}
                  <div className="flex items-center space-x-4 space-x-reverse">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                      <Heart className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">اختبار طيف التوحد</h3>
                      <p className="text-gray-600">تقييم شامل ودقيق</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">التقييم السلوكي</span>
                        <span className="text-green-600 font-bold">مكتمل</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-green-500 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">التقييم اللغوي</span>
                        <span className="text-blue-600 font-bold">جاري</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">التقييم الحسي</span>
                        <span className="text-gray-500 font-bold">قريباً</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div className="bg-gray-400 h-2 rounded-full w-1/4"></div>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full btn-primary">
                    متابعة الاختبار
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}