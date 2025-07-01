'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowLeft, 
  PlayCircle,
  AlertCircle,
  Star
} from 'lucide-react';

export default function TestsPage() {
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  const tests = [
    {
      id: 'comprehensive',
      title: 'الاختبار الشامل لطيف التوحد',
      description: 'تقييم متكامل وشامل يغطي جميع جوانب اضطراب طيف التوحد',
      duration: '90-120 دقيقة',
      ageRange: '18 شهر - 18 سنة',
      price: 'مجاني',
      features: [
        'اختبار ADOS-2 المعتمد دولياً',
        'تقييم اللغة والتواصل',
        'تقييم المهارات الاجتماعية',
        'التقييم الحسي والحركي',
        'مقياس فاينلاند للسلوك التكيفي',
        'تقرير مفصل مع التوصيات'
      ],
      popular: true,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'early',
      title: 'اختبار التشخيص المبكر',
      description: 'مخصص للأطفال الصغار لتحديد المؤشرات المبكرة لطيف التوحد',
      duration: '45-60 دقيقة',
      ageRange: '12-36 شهر',
      price: 'مجاني',
      features: [
        'M-CHAT-R للكشف المبكر',
        'تقييم التطور اللغوي',
        'ملاحظة السلوك الاجتماعي',
        'تقييم اللعب والتفاعل',
        'استشارة الأهل',
        'خطة التدخل المبكر'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'behavioral',
      title: 'اختبار التقييم السلوكي',
      description: 'تحليل مفصل للسلوكيات ووضع خطط التدخل المناسبة',
      duration: '60-90 دقيقة',
      ageRange: '3-16 سنة',
      price: 'مجاني',
      features: [
        'تحليل السلوك الوظيفي',
        'تقييم السلوكيات التحدية',
        'خطة تعديل السلوك',
        'تدريب الأهل',
        'متابعة دورية',
        'تقارير تقدم مفصلة'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'communication',
      title: 'اختبار اللغة والتواصل',
      description: 'تقييم شامل لمهارات اللغة والتواصل اللفظي وغير اللفظي',
      duration: '60-75 دقيقة',
      ageRange: '2-16 سنة',
      price: 'مجاني',
      features: [
        'تقييم اللغة الاستقبالية',
        'تقييم اللغة التعبيرية',
        'تحليل النطق والكلام',
        'تقييم التواصل غير اللفظي',
        'خطة العلاج النطقي',
        'برنامج التواصل البديل'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const handleStartTest = (testId: string) => {
    setSelectedTest(testId);
    // Here you would typically navigate to the actual test
    console.log(`Starting test: ${testId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            اختبارات تشخيص طيف التوحد
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            مجموعة شاملة من الاختبارات المتخصصة والمعتمدة دولياً لتشخيص اضطراب طيف التوحد 
            بدقة عالية وتقديم التوصيات المناسبة لكل حالة
          </p>
        </div>

        {/* Important Notice */}
        <div className="bg-amber-50 border-r-4 border-amber-400 p-6 mb-12 rounded-lg">
          <div className="flex items-start">
            <AlertCircle className="w-6 h-6 text-amber-600 mt-1 ml-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">
                معلومات مهمة قبل البدء
              </h3>
              <ul className="text-amber-700 space-y-1">
                <li>• جميع الاختبارات تتم تحت إشراف مختصين معتمدين</li>
                <li>• النتائج سرية ولا تُشارك مع أي جهة خارجية</li>
                <li>• يُنصح بحضور أحد الوالدين أثناء الاختبار</li>
                <li>• قد تحتاج لأكثر من جلسة حسب عمر الطفل وحالته</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
            >
              {test.popular && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Star className="w-4 h-4 ml-1" />
                  الأكثر طلباً
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r ${test.color}`}></div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {test.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {test.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Clock className="w-5 h-5 text-blue-500 ml-2" />
                      <span className="font-semibold text-gray-900">المدة</span>
                    </div>
                    <p className="text-gray-600">{test.duration}</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Users className="w-5 h-5 text-green-500 ml-2" />
                      <span className="font-semibold text-gray-900">العمر</span>
                    </div>
                    <p className="text-gray-600">{test.ageRange}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">ما يتضمنه الاختبار:</h4>
                  <ul className="space-y-2">
                    {test.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-green-600">{test.price}</span>
                    <span className="text-gray-500 text-sm mr-2">للجلسة الواحدة</span>
                  </div>
                  
                  <Button
                    onClick={() => handleStartTest(test.id)}
                    className={`bg-gradient-to-r ${test.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white px-6 py-3`}
                  >
                    ابدأ الاختبار
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            خطوات عملية التشخيص
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'الحجز والتسجيل',
                description: 'احجز موعدك واملأ المعلومات الأساسية',
                icon: FileText
              },
              {
                step: 2,
                title: 'الجلسة التقييمية',
                description: 'جلسة تقييم شاملة مع المختص',
                icon: Users
              },
              {
                step: 3,
                title: 'التحليل والتقييم',
                description: 'تحليل النتائج من قبل فريق المختصين',
                icon: PlayCircle
              },
              {
                step: 4,
                title: 'التقرير والتوصيات',
                description: 'تسلم التقرير الشامل مع خطة العلاج',
                icon: CheckCircle
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="text-center">
                  <div className="relative mb-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            الأسئلة الشائعة
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'ما هو العمر المناسب لإجراء الاختبار؟',
                answer: 'يمكن إجراء اختبارات التوحد من عمر 12 شهراً، وكلما كان التشخيص مبكراً كانت فرص العلاج أفضل.'
              },
              {
                question: 'كم تستغرق النتائج؟',
                answer: 'عادة ما تكون النتائج جاهزة خلال 3-5 أيام عمل، وسيتم تسليمها مع شرح مفصل من المختص.'
              },
              {
                question: 'هل الاختبارات مؤلمة للطفل؟',
                answer: 'لا، جميع الاختبارات آمنة وغير مؤلمة. نحن نستخدم أساليب تفاعلية ومرحة مناسبة للأطفال.'
              },
              {
                question: 'ماذا يحدث بعد التشخيص؟',
                answer: 'سنقدم لك خطة علاج شاملة ومخصصة لحالة طفلك، مع متابعة دورية لضمان التقدم.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}