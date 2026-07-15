'use client'

import CourseHero from './CourseHero'
import InstructorSection from './InstructorSection'
import MaterialsSection from './MaterialsSection'
import SupplementsSection from './SupplementsSection'
import Link from 'next/link'

export default function CourseLandingPage({ course, instructor, slug }) {
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="text-center p-8">
          <i className="fa-solid fa-circle-exclamation text-5xl text-gray-300 dark:text-gray-600 mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            找不到此課程
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            課程代碼「{slug}」不存在或已被移除
          </p>
          <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5
            bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <i className="fa-solid fa-house" />
            回到首頁
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* 課程 Hero */}
      <CourseHero course={course} />

      {/* 講師介紹 */}
      <InstructorSection instructor={instructor} />

      {/* 課程講義下載 */}
      <MaterialsSection materials={course.materials} />

      {/* 補充資料 */}
      <SupplementsSection supplements={course.supplements} />

      {/* 頁尾 */}
      <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            {course.title} &mdash; {instructor?.name || ''}
          </p>
          <Link href="/"
            className="inline-flex items-center gap-1 mt-3 text-sm text-blue-600 dark:text-blue-400 hover:underline">
            <i className="fa-solid fa-arrow-left text-xs" />
            回到首頁
          </Link>
        </div>
      </footer>
    </div>
  )
}
