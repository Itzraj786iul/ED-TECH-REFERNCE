import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, BarChart, Calendar } from 'lucide-react';
import { useAuthStore } from '../store/auth';

export function DashboardPage() {
  const { user } = useAuthStore();

  const recentCourses = [
    { id: 1, title: 'Mathematics Fundamentals', progress: 60 },
    { id: 2, title: 'Basic Science', progress: 30 },
    { id: 3, title: 'English Literature', progress: 45 },
  ];

  const upcomingAssignments = [
    { id: 1, title: 'Math Quiz', due: '2024-03-20', subject: 'Mathematics' },
    { id: 2, title: 'Science Project', due: '2024-03-25', subject: 'Science' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">Track your progress and continue learning</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Courses in Progress</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
              <BookOpen className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Study Hours</p>
                <p className="text-2xl font-bold text-gray-900">24h</p>
              </div>
              <Clock className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Average Score</p>
                <p className="text-2xl font-bold text-gray-900">85%</p>
              </div>
              <BarChart className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Assignments Due</p>
                <p className="text-2xl font-bold text-gray-900">2</p>
              </div>
              <Calendar className="w-8 h-8 text-red-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Courses</h2>
            <div className="space-y-4">
              {recentCourses.map((course) => (
                <div key={course.id} className="border-b pb-4 last:border-0">
                  <div className="flex justify-between items-center mb-2">
                    <Link to={`/course/${course.id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                      {course.title}
                    </Link>
                    <span className="text-sm text-gray-600">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Upcoming Assignments</h2>
            <div className="space-y-4">
              {upcomingAssignments.map((assignment) => (
                <div key={assignment.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                  <div>
                    <h3 className="font-medium text-gray-900">{assignment.title}</h3>
                    <p className="text-sm text-gray-600">{assignment.subject}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">Due</p>
                    <p className="text-sm text-gray-600">{assignment.due}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}