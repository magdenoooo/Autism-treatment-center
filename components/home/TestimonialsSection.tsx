'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'أم أحمد',
      role: 'والدة طفل بطيف التوحد',
      content: 'مركز النور غير حياة ابني أحمد تماماً. بفضل البرامج المتخصصة والفريق الرائع، أصبح أحمد قادراً على التواصل والتفاعل بشكل أفضل. الأطباء والمختصون هنا يتعاملون مع الأطفال بحب ومهنية عالية.',
      rating: 5,
      location: 'الرياض'
    },
    {
      name: 'والد سارة',
      role: 'والد طفلة بطيف التوحد',
      content: 'كنا قلقين جداً عندما تم تشخيص ابنتنا سارة. لكن مركز النور وفر لنا الدعم والعلاج المناسب. الآن سارة تحرز تقدماً مذهلاً في المدرسة وتتفاعل مع أصدقائها. شكراً لكم على كل شيء.',
      rating: 5,
      location: 'جدة'
    },
    {
      name: 'أم محمد',
      role: 'والدة طفل بطيف التوحد',
      content: 'الخدمات في مركز النور متميزة حقاً. من التشخيص المبكر إلى برامج العلاج الشاملة، كل شيء منظم ومدروس بعناية. ابني محمد تطور كثيراً والفضل يعود لفريق العمل المتفاني.',
      rating: 5,
      location: 'الدمام'
    },
    {
      name: 'والد عبدالله',
      role: 'والد طفل بطيف التوحد',
      content: 'أنصح كل أسرة لديها طفل بطيف التوحد بزيارة مركز النور. الاختبارات دقيقة والعلاج فعال. ابني عبدالله أصبح أكثر استقلالية وثقة بالنفس بعد انضمامه لبرامج المركز.',
      rating: 5,
      location: 'المدينة المنورة'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ماذا يقول أولياء الأمور؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            شهادات حقيقية من أسر الأطفال الذين تلقوا العلاج في مركزنا وحققوا تقدماً ملحوظاً
          </p>
        </div>

        <div className="relative">
          {/* Main testimonial */}
          <div className="bg-white rounded-3xl shadow-2xl p-12 mx-auto max-w-4xl relative overflow-hidden">
            <div className="absolute top-6 right-6 text-blue-200">
              <Quote className="w-16 h-16" />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
                "{testimonials[currentSlide].content}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-bold text-lg text-gray-900 mb-1">
                  {testimonials[currentSlide].name}
                </div>
                <div className="text-gray-600 mb-1">
                  {testimonials[currentSlide].role}
                </div>
                <div className="text-sm text-blue-600">
                  {testimonials[currentSlide].location}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center space-x-4 space-x-reverse mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-12 h-12 border-2 border-blue-200 hover:bg-blue-50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
            
            {/* Dots indicator */}
            <div className="flex space-x-2 space-x-reverse">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-12 h-12 border-2 border-blue-200 hover:bg-blue-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Testimonials grid - smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg transition-all duration-300 cursor-pointer ${
                index === currentSlide ? 'ring-2 ring-blue-500 scale-105' : 'hover:shadow-xl hover:scale-105'
              }`}
              onClick={() => setCurrentSlide(index)}
            >
              <div className="flex justify-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                "{testimonial.content.substring(0, 100)}..."
              </p>
              <div className="text-center">
                <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                <div className="text-xs text-blue-600">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}