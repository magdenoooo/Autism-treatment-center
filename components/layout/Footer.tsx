import Link from 'next/link';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const services = [
    'اختبارات التوحد الشاملة',
    'برامج العلاج التخصصية',
    'العلاج السلوكي المعرفي',
    'العلاج النطقي واللغوي',
    'العلاج الوظيفي',
    'برامج تدريب الأهالي',
  ];

  const quickLinks = [
    { name: 'عن المركز', href: '/about' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'الأطباء', href: '/doctors' },
    { name: 'المقالات', href: '/articles' },
    { name: 'الأسئلة الشائعة', href: '/faq' },
    { name: 'سياسة الخصوصية', href: '/privacy' },
  ];

  const socialLinks = [
    { name: 'فيسبوك', icon: Facebook, href: '#' },
    { name: 'تويتر', icon: Twitter, href: '#' },
    { name: 'إنستغرام', icon: Instagram, href: '#' },
    { name: 'يوتيوب', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 space-x-reverse">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div className="text-right">
                <h1 className="text-2xl font-bold">مركز النور</h1>
                <p className="text-gray-400">لاختبار وعلاج التوحد</p>
              </div>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              مركز النور هو أكبر مركز عربي متخصص في تشخيص وعلاج اضطراب طيف التوحد للأطفال. 
              نقدم خدمات شاملة ومتطورة لدعم الأطفال وأسرهم في رحلتهم نحو التطور والنمو.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="bg-gray-800 hover:bg-blue-600 p-3 rounded-lg transition-colors duration-300"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full ml-3"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full ml-3"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">معلومات التواصل</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 space-x-reverse">
                <MapPin className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    شارع الملك فهد، حي العليا
                    <br />
                    الرياض، المملكة العربية السعودية
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-6 w-6 text-green-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+966 11 123 4567</p>
                  <p className="text-gray-300">+966 50 123 4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-6 w-6 text-purple-400 flex-shrink-0" />
                <p className="text-gray-300">info@alnoor-autism.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
  <div className="flex flex-col md:flex-row justify-between items-center">
    <p className="text-gray-400 text-sm text-center md:text-right">
      © 2024 مركز النور لاختبار وعلاج التوحد. جميع الحقوق محفوظة.  
      <span className="mx-1 text-red-500">❤️</span>  
      <span className="text-white font-semibold">Magdy Zahran</span>
    </p>
    <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
      <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
        الشروط والأحكام
      </Link>
      <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
        سياسة الخصوصية
      </Link>
    </div>
  </div>
</div>

      </div>
    </footer>
  );
}