export default function CourseHero({ course }) {
  if (!course) return null

  const statusLabel = {
    published: '開課中',
    archived: '歷史課程',
    hidden: '未上架'
  }

  return (
    <section className="relative overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="text-center">
          {/* 狀態標籤 */}
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-6
            ${course.status === 'published'
              ? 'bg-green-400/20 text-green-200 border border-green-400/30'
              : 'bg-yellow-400/20 text-yellow-200 border border-yellow-400/30'
            }`}>
            {statusLabel[course.status] || course.status}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {course.title}
          </h1>

          {course.subtitle && (
            <p className="text-lg sm:text-xl text-blue-100 mb-4 max-w-2xl mx-auto">
              {course.subtitle}
            </p>
          )}

          {course.description && (
            <p className="text-blue-200 max-w-2xl mx-auto mb-6 leading-relaxed">
              {course.description}
            </p>
          )}

          {course.date && (
            <p className="text-blue-300 text-sm">
              <i className="fa-regular fa-calendar mr-2" />
              {course.date}
            </p>
          )}
        </div>
      </div>

      {/* 底部波浪 */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 30C1440 30 1320 0 1080 0C840 0 720 30 480 30C240 30 120 0 0 0L0 60Z"
            className="fill-white dark:fill-gray-900" />
        </svg>
      </div>
    </section>
  )
}
