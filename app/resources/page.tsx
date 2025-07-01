"use client"

import React, { useState } from 'react';
import { FileText, Download, Video, Book, Search, Filter, Calendar, User, Eye, Star, ChevronRight, PlayCircle, BookOpen, Users, Heart } from 'lucide-react';

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'جميع الموارد', icon: BookOpen, count: 28 },
    { id: 'guides', name: 'أدلة الوالدين', icon: Book, count: 8 },
    { id: 'videos', name: 'مقاطع فيديو', icon: Video, count: 12 },
    { id: 'research', name: 'البحوث العلمية', icon: FileText, count: 5 },
    { id: 'activities', name: 'أنشطة تفاعلية', icon: Users, count: 3 }
  ];

  const resources = [
    {
      id: 1,
      title: 'دليل الوالدين الشامل لاضطراب طيف التوحد',
      description: 'دليل شامل يتضمن كل ما يحتاج الوالدان معرفته حول التوحد والتعامل مع الطفل',
      category: 'guides',
      type: 'PDF',
      size: '2.5 MB',
      downloads: 1240,
      views: 3450,
      rating: 4.9,
      date: '2024-06-15',
      author: 'د. أحمد محمد',
      featured: true,
      thumbnail: 'guide1.jpg'
    },
    {
      id: 2,
      title: 'تقنيات العلاج السلوكي التطبيقي (ABA)',
      description: 'فيديو تعليمي يوضح أساسيات العلاج السلوكي التطبيقي وكيفية تطبيقه في المنزل',
      category: 'videos',
      type: 'Video',
      duration: '45 دقيقة',
      downloads: 890,
      views: 2100,
      rating: 4.8,
      date: '2024-06-10',
      author: 'أ. فاطمة علي',
      featured: true,
      thumbnail: 'video1.jpg'
    },
    {
      id: 3,
      title: 'تطوير مهارات التواصل الاجتماعي',
      description: 'مجموعة من الأنشطة التفاعلية لتطوير مهارات التواصل لدى الأطفال ذوي طيف التوحد',
      category: 'activities',
      type: 'PDF',
      size: '1.8 MB',
      downloads: 650,
      views: 1800,
      rating: 4.7,
      date: '2024-06-05',
      author: 'أ. سارة أحمد',
      featured: false,
      thumbnail: 'activity1.jpg'
    },
    {
      id: 4,
      title: 'أحدث الأبحاث في علاج التوحد',
      description: 'مراجعة شاملة لأحدث الدراسات والأبحاث العلمية في مجال علاج اضطراب طيف التوحد',
      category: 'research',
      type: 'PDF',
      size: '3.2 MB',
      downloads: 420,
      views: 950,
      rating: 4.6,
      date: '2024-05-28',
      author: 'د. محمد خالد',
      featured: false,
      thumbnail: 'research1.jpg'
    },
    {
      id: 5,
      title: 'التدخل المبكر: الخطوات الأولى',
      description: 'دليل مرئي يوضح أهمية التدخل المبكر وكيفية تطبيق الاستراتيجيات الفعالة',
      category: 'videos',
      type: 'Video',
      duration: '30 دقيقة',
      downloads: 720,
      views: 1650,
      rating: 4.8,
      date: '2024-05-20',
      author: 'د. نورا سالم',
      featured: true,
      thumbnail: 'video2.jpg'
    },
    {
      id: 6,
      title: 'إدارة السلوكيات التحدية',
      description: 'استراتيجيات عملية للتعامل مع السلوكيات التحدية وتطوير البدائل الإيجابية',
      category: 'guides',
      type: 'PDF',
      size: '2.1 MB',
      downloads: 980,
      views: 2300,
      rating: 4.7,
      date: '2024-05-15',
      author: 'أ. أمل محمود',
      featured: false,
      thumbnail: 'guide2.jpg'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            مكتبة <span className="text-blue-600">الموارد</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            مجموعة شاملة من الموارد التعليمية والأدلة العملية لمساعدة الأطفال وأسرهم في رحلة العلاج والتطوير
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="ابحث في الموارد..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pr-12 pl-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 space-x-reverse px-4 py-3 rounded-xl font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category.id ? 'bg-white/20' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Resources */}
        {selectedCategory === 'all' && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              الموارد <span className="text-purple-600">المميزة</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource) => (
                <div key={resource.id} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center">
                      {resource.type === 'Video' ? (
                        <PlayCircle className="w-16 h-16 text-white" />
                      ) : (
                        <FileText className="w-16 h-16 text-white" />
                      )}
                    </div>
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                      ⭐ مميز
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{resource.author}</span>
                      </div>
                      <div className="flex items-center space-x-1 space-x-reverse">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{resource.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 space-x-reverse text-sm text-gray-500">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Download className="w-4 h-4" />
                          <span>{resource.downloads}</span>
                        </div>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Eye className="w-4 h-4" />
                          <span>{resource.views}</span>
                        </div>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 space-x-reverse">
                        <Download className="w-4 h-4" />
                        <span>تحميل</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Resources */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {selectedCategory === 'all' ? 'جميع الموارد' : categories.find(cat => cat.id === selectedCategory)?.name}
          </h2>
          
          <div className="grid gap-6">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Thumbnail */}
                  <div className="lg:w-48 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {resource.type === 'Video' ? (
                      <PlayCircle className="w-12 h-12 text-white" />
                    ) : (
                      <FileText className="w-12 h-12 text-white" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-3">
                          {resource.description}
                        </p>
                      </div>
                      {resource.featured && (
                        <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mb-2 lg:mb-0 self-start">
                          ⭐ مميز
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <User className="w-4 h-4" />
                        <span>{resource.author}</span>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(resource.date).toLocaleDateString('ar-SA')}</span>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <span className="font-medium">{resource.type}</span>
                        {resource.size && <span>({resource.size})</span>}
                        {resource.duration && <span>({resource.duration})</span>}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center space-x-6 space-x-reverse text-sm text-gray-500">
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Download className="w-4 h-4" />
                          <span>{resource.downloads} تحميل</span>
                        </div>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Eye className="w-4 h-4" />
                          <span>{resource.views} مشاهدة</span>
                        </div>
                        <div className="flex items-center space-x-1 space-x-reverse">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span>{resource.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2 space-x-reverse">
                          <Eye className="w-4 h-4" />
                          <span>معاينة</span>
                        </button>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 space-x-reverse">
                          <Download className="w-4 h-4" />
                          <span>تحميل</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">لا توجد موارد</h3>
              <p className="text-gray-500">لم يتم العثور على موارد تطابق البحث المحدد</p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">هل تبحث عن مورد معين؟</h2>
          <p className="text-xl mb-6">
            إذا كنت تحتاج إلى مورد أو معلومة محددة، لا تتردد في التواصل معنا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-all inline-flex items-center justify-center space-x-2 space-x-reverse">
              <Heart className="w-5 h-5" />
              <span>طلب مورد جديد</span>
            </button>
            <button className="bg-purple-500 text-white font-semibold py-3 px-8 rounded-xl hover:bg-purple-600 transition-all inline-flex items-center justify-center space-x-2 space-x-reverse">
              <ChevronRight className="w-5 h-5" />
              <span>تواصل معنا</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}