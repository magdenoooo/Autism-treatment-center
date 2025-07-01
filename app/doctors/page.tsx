"use client"

import React, { useState } from 'react';
import { Heart, Phone, MapPin, Calendar, Star, Search, Filter, User, Stethoscope, Brain, Eye, Users, Baby, Microscope } from 'lucide-react';

const DoctorsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');

  const doctors = [
    {
      id: 1,
      name: 'د. محمد عبد الله الأحمدي',
      specialty: 'طب نفسي أطفال وتشخيص التوحد',
      rating: 4.9,
      reviews: 127,
      experience: '15+ سنة خبرة',
      location: 'الرياض',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      availability: 'متاح اليوم',
      consultationFee: '500 ر.س',
      nextAppointment: 'غداً 10:00 ص',
      languages: ['العربية', 'الإنجليزية'],
      education: 'دكتوراه الطب النفسي للأطفال - جامعة الملك سعود',
      specializations: ['تشخيص طيف التوحد', 'اختبار ADOS-2', 'العلاج السلوكي المعرفي', 'تقييم التطور النمائي']
    },
    {
      id: 2,
      name: 'د. فاطمة أحمد الزهراني',
      specialty: 'أخصائي تحليل السلوك التطبيقي (ABA)',
      rating: 4.8,
      reviews: 203,
      experience: '12+ سنة خبرة',
      location: 'جدة',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      availability: 'متاح غداً',
      consultationFee: '450 ر.س',
      nextAppointment: 'بعد غد 2:00 م',
      languages: ['العربية', 'الإنجليزية'],
      education: 'ماجستير تحليل السلوك التطبيقي - جامعة الملك عبد العزيز',
      specializations: ['العلاج السلوكي ABA', 'تعديل السلوك', 'تنمية المهارات الاجتماعية', 'برامج التدخل المبكر']
    },
    {
      id: 3,
      name: 'د. سعد محمد القحطاني',
      specialty: 'طب نمو وتطور الأطفال',
      rating: 4.7,
      reviews: 89,
      experience: '18+ سنة خبرة',
      location: 'الدمام',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
      availability: 'متاح اليوم',
      consultationFee: '550 ر.س',
      nextAppointment: 'اليوم 6:00 م',
      languages: ['العربية', 'الإنجليزية', 'الفرنسية'],
      education: 'دكتوراه طب نمو وتطور الأطفال - جامعة الإمام عبد الرحمن',
      specializations: ['تقييم التطور النمائي', 'اضطرابات النمو', 'التدخل المبكر', 'متابعة حالات التوحد']
    },
    {
      id: 4,
      name: 'د. نورا سليمان العتيبي',
      specialty: 'علاج النطق واللغة للأطفال',
      rating: 4.9,
      reviews: 156,
      experience: '10+ سنة خبرة',
      location: 'الرياض',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      availability: 'متاح غداً',
      consultationFee: '400 ر.س',
      nextAppointment: 'غداً 11:30 ص',
      languages: ['العربية', 'الإنجليزية'],
      education: 'ماجستير علاج النطق واللغة - جامعة الأميرة نورة',
      specializations: ['علاج تأخر النطق', 'تنمية المهارات اللغوية', 'التواصل البديل', 'علاج اضطرابات البلع']
    },
    {
      id: 5,
      name: 'د. خالد عبد الرحمن الغامدي',
      specialty: 'العلاج الوظيفي للأطفال',
      rating: 4.6,
      reviews: 94,
      experience: '8+ سنة خبرة',
      location: 'مكة المكرمة',
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face',
      availability: 'متاح اليوم',
      consultationFee: '380 ر.س',
      nextAppointment: 'اليوم 4:30 م',
      languages: ['العربية', 'الإنجليزية'],
      education: 'بكالوريوس العلاج الوظيفي - جامعة الملك سعود',
      specializations: ['تطوير المهارات الحركية', 'التكامل الحسي', 'مهارات الحياة اليومية', 'العلاج باللعب']
    },
    {
      id: 6,
      name: 'د. ريم أحمد الشهري',
      specialty: 'علم النفس التربوي وصعوبات التعلم',
      rating: 4.8,
      reviews: 118,
      experience: '14+ سنة خبرة',
      location: 'أبها',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face',
      availability: 'متاح غداً',
      consultationFee: '420 ر.س',
      nextAppointment: 'غداً 9:00 ص',
      languages: ['العربية', 'الإنجليزية'],
      education: 'دكتوراه علم النفس التربوي - جامعة الملك خالد',
      specializations: ['تقييم القدرات المعرفية', 'برامج التعلم المخصصة', 'تنمية المهارات الأكاديمية', 'الدعم النفسي للأسر']
    },
    {
      id: 7,
      name: 'د. عبد الله محمد الحربي',
      specialty: 'طب الأعصاب للأطفال',
      rating: 4.7,
      reviews: 142,
      experience: '16+ سنة خبرة',
      location: 'الرياض',
      image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop&crop=face',
      availability: 'متاح اليوم',
      consultationFee: '650 ر.س',
      nextAppointment: 'اليوم 3:00 م',
      languages: ['العربية', 'الإنجليزية', 'الألمانية'],
      education: 'دكتوراه طب الأعصاب للأطفال - جامعة الملك فيصل',
      specializations: ['اضطرابات طيف التوحد', 'الصرع عند الأطفال', 'تخطيط الدماغ', 'الاضطرابات العصبية النمائية']
    },
    {
      id: 8,
      name: 'د. هند سعد المطيري',
      specialty: 'التغذية العلاجية للأطفال',
      rating: 4.5,
      reviews: 76,
      experience: '9+ سنة خبرة',
      location: 'الطائف',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&crop=face',
      availability: 'متاح غداً',
      consultationFee: '320 ر.س',
      nextAppointment: 'غداً 1:00 م',
      languages: ['العربية', 'الإنجليزية'],
      education: 'ماجستير التغذية العلاجية - جامعة الطائف',
      specializations: ['التغذية العلاجية لأطفال التوحد', 'الحساسية الغذائية', 'سوء التغذية', 'برامج التغذية المتخصصة']
    }
  ];

  const specialties = [
    { id: 'all', name: 'جميع التخصصات', icon: Stethoscope },
    { id: 'psychiatry', name: 'الطب النفسي', icon: Brain },
    { id: 'aba', name: 'تحليل السلوك التطبيقي', icon: Users },
    { id: 'development', name: 'نمو وتطور الأطفال', icon: Baby },
    { id: 'speech', name: 'علاج النطق واللغة', icon: User },
    { id: 'occupational', name: 'العلاج الوظيفي', icon: Heart },
    { id: 'psychology', name: 'علم النفس التربوي', icon: Brain },
    { id: 'neurology', name: 'طب الأعصاب', icon: Microscope }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            أطباؤنا المتخصصون
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            نخبة من أفضل الأطباء المتخصصين في تشخيص وعلاج اضطراب طيف التوحد 
            باستخدام أحدث الطرق العلمية والعالمية المعتمدة
          </p>
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-80">مختص معتمد</div>
              </div>
              <div>
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm opacity-80">طفل تم علاجه</div>
              </div>
              <div>
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm opacity-80">سنة خبرة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 space-y-4">
  <div className="relative w-full">
    <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
    <input
      type="text"
      placeholder="ابحث عن مختص أو تخصص..."
      className="w-full pr-10 pl-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>

  <div className="flex flex-wrap gap-2 justify-start md:justify-center">
    {specialties.map((specialty) => {
      const IconComponent = specialty.icon;
      const isSelected = selectedSpecialty === specialty.id;
      return (
        <button
          key={specialty.id}
          onClick={() => setSelectedSpecialty(specialty.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm font-medium
            ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <IconComponent className="h-4 w-4" />
          {specialty.name}
        </button>
      );
    })}
  </div>
</div>


        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              {/* Doctor Image and Status */}
              <div className="relative p-6 pb-4">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="flex-1 text-right">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{doctor.name}</h3>
                    <p className="text-blue-600 font-medium text-sm mb-2">{doctor.specialty}</p>
                    <div className="flex items-center justify-end gap-2 mb-2">
                      <span className="text-sm text-gray-600">{doctor.reviews} تقييم</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium text-sm">{doctor.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-1 text-sm text-gray-600">
                      <span>{doctor.location}</span>
                      <MapPin className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="px-6 pb-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">الخبرة</span>
                    <span className="font-medium text-sm">{doctor.experience}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">رسوم الاستشارة</span>
                    <span className="font-medium text-sm text-green-600">{doctor.consultationFee}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">أقرب موعد</span>
                    <span className="font-medium text-sm">{doctor.nextAppointment}</span>
                  </div>
                </div>

                {/* Availability Status */}
                <div className="mt-4 mb-4">
                  <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                    doctor.availability === 'متاح اليوم' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${
                      doctor.availability === 'متاح اليوم' ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                    {doctor.availability}
                  </span>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1 justify-end">
                    {doctor.languages.map((lang, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    احجز استشارة
                  </button>
                  <button className="px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Phone className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Hover Details */}
              <div className="px-6 pb-6 border-t border-gray-100 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-right">
                  <h4 className="font-medium text-sm mb-2 text-gray-900">المؤهلات العلمية:</h4>
                  <p className="text-xs text-gray-600 mb-3">{doctor.education}</p>
                  <h4 className="font-medium text-sm mb-2 text-gray-900">التخصصات الفرعية:</h4>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {doctor.specializations.map((spec, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium">
            عرض المزيد من المختصين
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16 mt-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            هل تحتاج لاستشارة متخصصة؟
          </h2>
          <p className="text-xl opacity-90 mb-8">
            احجز موعدك الآن مع أحد مختصينا المعتمدين واحصل على التشخيص والبرنامج العلاجي المناسب لطفلك
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              احجز استشارة عبر الإنترنت
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
              احجز زيارة في المركز
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;