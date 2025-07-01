import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Stethoscope, 
  MessageSquare, 
  Activity, 
  Brain, 
  Users,
  ArrowLeft,
  CheckCircle
} from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: FileText,
      title: 'اختبارات التشخيص الشاملة',
      description: 'تقييم متكامل لطيف التوحد باستخدام أحدث المقاييس العالمية المعتمدة',
      features: [
        'اختبار ADOS-2 المعتمد دولياً',
        'مقياس فاينلاند للسلوك التكيفي',
        'تقييم اللغة والتواصل',
        'التقييم الحسي والحركي'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      href: '/tests'
    },
    {
      icon: Stethoscope,
      title: 'برامج العلاج المتخصصة',
      description: 'خطط علاج فردية مصممة خصيصاً لكل طفل حسب احتياجاته الخاصة',
      features: [
        'العلاج السلوكي التطبيقي (ABA)',
        'العلاج النطقي واللغوي',
        'العلاج الوظيفي',
        'العلاج بالفن والموسيقى'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      href: '/treatments'
    },
    {
      icon: MessageSquare,
      title: 'العلاج النطقي واللغوي',
      description: 'برامج متطورة لتطوير مهارات التواصل والنطق باستخدام أحدث التقنيات',
      features: [
        'تطوير مهارات التواصل اللفظي',
        'التواصل البديل والمعزز (AAC)',
        'علاج اضطرابات النطق',
        'تطوير المهارات الاجتماعية'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      href: '/speech-therapy'
    },
    {
      icon: Activity,
      title: 'العلاج الوظيفي',
      description: 'تطوير المهارات الحركية والحسية للمساعدة في الأنشطة اليومية',
      features: [
        'تطوير المهارات الحركية الدقيقة',
        'العلاج الحسي التكاملي',
        'مهارات الحياة اليومية',
        'التكيف مع البيئة المدرسية'
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      href: '/occupational-therapy'
    },
    {
      icon: Brain,
      title: 'العلاج السلوكي المعرفي',
      description: 'تقنيات متقدمة لتعديل السلوك وتطوير المهارات المعرفية والاجتماعية',
      features: [
        'تحليل السلوك التطبيقي',
        'تطوير المهارات الاجتماعية',
        'إدارة السلوكيات التحدية',
        'برامج التدريب على المهارات'
      ],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      href: '/behavioral-therapy'
    },
    {
      icon: Users,
      title: 'دعم وتدريب الأسر',
      description: 'برامج شاملة لتدريب الأهالي ودعمهم في رحلة العلاج والتطوير',
      features: [
        'ورش تدريبية للأهالي',
        'مجموعات الدعم النفسي',
        'استشارات أسرية متخصصة',
        'خطط التدخل المنزلي'
      ],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      href: '/family-support'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            خدماتنا المتخصصة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            مجموعة شاملة من الخدمات المتخصصة في تشخيص وعلاج اضطراب طيف التوحد 
            بأحدث الطرق العلمية والعالمية المعتمدة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group card-hover"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                
                <div className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${service.bgColor} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${service.textColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={service.href}>
                    <Button className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white`}>
                      اعرف المزيد
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              هل تحتاج إلى استشارة مجانية؟
            </h3>
            <p className="text-xl mb-8 opacity-90">
              احجز موعدك الآن مع أحد مختصينا لتقييم حالة طفلك ووضع خطة العلاج المناسبة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  احجز استشارة مجانية
                </Button>
              </Link>
              <Link href="/contact">
                <Button  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
                  تواصل معنا
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}