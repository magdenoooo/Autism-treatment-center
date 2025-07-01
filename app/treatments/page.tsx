'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  MessageSquare, 
  Activity, 
  Users, 
  Heart, 
  Star,
  Clock,
  CheckCircle,
  ArrowLeft,
  Play,
  Award,
  Target
} from 'lucide-react';

export default function TreatmentsPage() {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const treatments = [
    {
      id: 'aba',
      title: 'العلاج السلوكي التطبيقي (ABA)',
      description: 'برنامج علاج شامل يركز على تطوير المهارات الأساسية وتقليل السلوكيات التحدية',
      duration: '20-40 ساعة أسبوعياً',
      ageRange: '2-18 سنة',
      successRate: '95%',
      features: [
        'تحليل السلوك الوظيفي',
        'برامج تعديل السلوك المخصصة',
        'تطوير مهارات التواصل',
        'تعزيز المهارات الاجتماعية',
        'تدريب على المهارات الأكاديمية',
        'برامج الاستقلالية الشخصية'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      icon: Brain,
      popular: true
    },
    {
      id: 'speech',
      title: 'العلاج النطقي واللغوي',
      description: 'برامج متخصصة لتطوير مهارات التواصل اللفظي وغير اللفظي',
      duration: '2-4 جلسات أسبوعياً',
      ageRange: '18 شهر - 16 سنة',
      successRate: '92%',
      features: [
        'تطوير مهارات النطق والكلام',
        'تحسين فهم اللغة الاستقبالية',
        'تطوير اللغة التعبيرية',
        'التواصل البديل والمعزز (AAC)',
        'تطوير المهارات الاجتماعية اللغوية',
        'برامج القراءة والكتابة'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      icon: MessageSquare
    },
    {
      id: 'occupational',
      title: 'العلاج الوظيفي',
      description: 'تطوير المهارات الحركية والحسية للمساعدة في الأنشطة اليومية',
      duration: '2-3 جلسات أسبوعياً',
      ageRange: '6 أشهر - 18 سنة',
      successRate: '90%',
      features: [
        'تطوير المهارات الحركية الدقيقة',
        'العلاج الحسي التكاملي',
        'تحسين التوازن والتناسق',
        'مهارات الحياة اليومية',
        'التكيف مع البيئة المدرسية',
        'استخدام الأدوات المساعدة'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      icon: Activity
    },
    {
      id: 'social',
      title: 'تطوير المهارات الاجتماعية',
      description: 'برامج جماعية وفردية لتطوير مهارات التفاعل الاجتماعي',
      duration: '1-2 جلسة أسبوعياً',
      ageRange: '3-18 سنة',
      successRate: '88%',
      features: [
        'مهارات التفاعل مع الأقران',
        'فهم الإشارات الاجتماعية',
        'تطوير الصداقات',
        'مهارات اللعب التعاوني',
        'إدارة المشاعر والانفعالات',
        'التكيف مع المواقف الاجتماعية'
      ],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      icon: Users
    },
    {
      id: 'sensory',
      title: 'العلاج الحسي التكاملي',
      description: 'برامج متخصصة لمعالجة اضطرابات المعالجة الحسية',
      duration: '2-3 جلسات أسبوعياً',
      ageRange: '6 أشهر - 12 سنة',
      successRate: '85%',
      features: [
        'تقييم المعالجة الحسية',
        'أنشطة التكامل الحسي',
        'تطوير التحمل الحسي',
        'تحسين التنظيم الذاتي',
        'برامج التحفيز الحسي',
        'تدريب الأهل على الأنشطة المنزلية'
      ],
      color: 'from-teal-500 to-teal-600',
      bgColor: 'bg-teal-50',
      textColor: 'text-teal-600',
      icon: Heart
    },
    {
      id: 'family',
      title: 'برامج دعم الأسر',
      description: 'تدريب وإرشاد الأهالي لدعم تطور أطفالهم في المنزل',
      duration: 'جلسات أسبوعية',
      ageRange: 'جميع الأعمار',
      successRate: '93%',
      features: [
        'ورش تدريبية للأهالي',
        'استشارات أسرية متخصصة',
        'مجموعات الدعم النفسي',
        'خطط التدخل المنزلي',
        'تدريب على تقنيات العلاج',
        'دعم الأشقاء والأقارب'
      ],
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      icon: Star
    }
  ];

  const handleSelectProgram = (programId: string) => {
    setSelectedProgram(programId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            برامج العلاج المتخصصة
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            مجموعة شاملة من برامج العلاج المتطورة والمعتمدة دولياً لدعم الأطفال ذوي اضطراب طيف التوحد 
            في تطوير مهاراتهم وتحقيق أقصى إمكاناتهم
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Target, value: '95%', label: 'نسبة نجاح العلاج', color: 'text-blue-600' },
            { icon: Users, value: '+3000', label: 'طفل تم علاجه', color: 'text-green-600' },
            { icon: Award, value: '15+', label: 'سنة خبرة', color: 'text-purple-600' },
            { icon: Clock, value: '24/7', label: 'دعم مستمر', color: 'text-orange-600' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Treatment Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {treatments.map((treatment) => {
            const Icon = treatment.icon;
            return (
              <div
                key={treatment.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
              >
                {treatment.popular && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 ml-1" />
                    الأكثر فعالية
                  </div>
                )}

                <div className={`h-2 bg-gradient-to-r ${treatment.color}`}></div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`${treatment.bgColor} p-4 rounded-2xl`}>
                      <Icon className={`w-8 h-8 ${treatment.textColor}`} />
                    </div>
                    <div className="text-left">
                      <div className="text-2xl font-bold text-green-600">{treatment.successRate}</div>
                      <div className="text-sm text-gray-600">نسبة النجاح</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {treatment.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {treatment.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Clock className="w-5 h-5 text-blue-500 ml-2" />
                        <span className="font-semibold text-gray-900">المدة</span>
                      </div>
                      <p className="text-gray-600 text-sm">{treatment.duration}</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Users className="w-5 h-5 text-green-500 ml-2" />
                        <span className="font-semibold text-gray-900">العمر</span>
                      </div>
                      <p className="text-gray-600 text-sm">{treatment.ageRange}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">ما يتضمنه البرنامج:</h4>
                    <ul className="space-y-2">
                      {treatment.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 ml-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      onClick={() => handleSelectProgram(treatment.id)}
                      className={`flex-1 bg-gradient-to-r ${treatment.color} hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-white`}
                    >
                      اعرف المزيد
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Button>
                    <Button
                      variant="outline"
                      className="px-4"
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Treatment Process */}
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            مراحل العلاج
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {
                step: 1,
                title: 'التقييم الأولي',
                description: 'تقييم شامل لحالة الطفل وتحديد الاحتياجات',
                icon: Brain
              },
              {
                step: 2,
                title: 'وضع الخطة',
                description: 'تصميم برنامج علاج مخصص لكل طفل',
                icon: Target
              },
              {
                step: 3,
                title: 'بدء العلاج',
                description: 'تنفيذ البرنامج مع المتابعة المستمرة',
                icon: Play
              },
              {
                step: 4,
                title: 'التقييم الدوري',
                description: 'مراجعة التقدم وتعديل الخطة حسب الحاجة',
                icon: CheckCircle
              },
              {
                step: 5,
                title: 'التخرج',
                description: 'تحقيق الأهداف والانتقال للمرحلة التالية',
                icon: Award
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

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            ابدأ رحلة العلاج اليوم
          </h2>
          <p className="text-xl mb-8 opacity-90">
            احجز استشارة مجانية مع أحد مختصينا لتقييم حالة طفلك ووضع خطة العلاج المناسبة
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              احجز استشارة مجانية
            </Button>
            <Button  className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
              تواصل معنا
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}