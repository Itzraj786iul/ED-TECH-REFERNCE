import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GradeLevelCard } from '../components/home/GradeLevelCard';
import { Rocket, Book, Users, Star } from 'lucide-react';
import { useAuthStore } from '../store/auth';

export function HomePage() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  const handleStartLearning = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  const gradeLevels = [
    {
      title: "Foundation Builder",
      description: "Perfect for students in grades 5-8 building core concepts",
      features: [
        "Interactive Math & Science",
        "Language Arts Fundamentals",
        "Guided Learning Path"
      ],
      gradeRange: "5-8",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
    },
    {
      title: "Academic Excellence",
      description: "Comprehensive preparation for grades 8-10 students",
      features: [
        "Advanced STEM Topics",
        "Literature Analysis",
        "Exam Preparation"
      ],
      gradeRange: "8-10",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80"
    },
    {
      title: "College Readiness",
      description: "Advanced learning for grades 10-12 preparing for higher education",
      features: [
        "College Prep Courses",
        "Career Guidance",
        "Advanced Placement Support"
      ],
      gradeRange: "10-12",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Journey to Academic Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Personalized learning experiences for students from grade 5 to 12
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleStartLearning}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Start Learning
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive educational solutions tailored to each student's needs
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="text-gray-600">Adaptive learning paths tailored to each student</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Content</h3>
              <p className="text-gray-600">Curriculum designed by education experts</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
              <p className="text-gray-600">Engage with peers and teachers in real-time</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">Monitor and analyze learning progress</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Levels Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Grade Level
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the program that matches your educational needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {gradeLevels.map((level, index) => (
              <GradeLevelCard key={index} {...level} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}