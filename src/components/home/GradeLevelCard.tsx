import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Trophy } from 'lucide-react';

interface GradeLevelCardProps {
  title: string;
  description: string;
  features: string[];
  gradeRange: string;
  image: string;
}

export function GradeLevelCard({
  title,
  description,
  features,
  gradeRange,
  image,
}: GradeLevelCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2">
              {index % 3 === 0 && <BookOpen className="w-4 h-4 text-blue-500" />}
              {index % 3 === 1 && <Users className="w-4 h-4 text-green-500" />}
              {index % 3 === 2 && <Trophy className="w-4 h-4 text-yellow-500" />}
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-500">
            Grades {gradeRange}
          </span>
          <Link
            to={`/courses/${gradeRange.toLowerCase().replace('-', 'to')}`}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
}