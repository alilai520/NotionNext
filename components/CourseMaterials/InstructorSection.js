export default function InstructorSection({ instructor }) {
  if (!instructor) return null

  const socialLinks = [
    { key: 'email', icon: 'fa-solid fa-envelope', prefix: 'mailto:' },
    { key: 'website', icon: 'fa-solid fa-globe', prefix: '' },
    { key: 'github', icon: 'fa-brands fa-github', prefix: '' },
    { key: 'linkedin', icon: 'fa-brands fa-linkedin', prefix: '' }
  ].filter(s => instructor[s.key])

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-10 text-center">
          <i className="fa-solid fa-chalkboard-user mr-3 text-blue-600" />
          講師介紹
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-sm">
          {/* 頭像 */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900 shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={instructor.avatar}
                alt={instructor.name}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = '/avatar.svg' }}
              />
            </div>
          </div>

          {/* 資訊 */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
              {instructor.name}
            </h3>
            {instructor.title && (
              <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                {instructor.title}
              </p>
            )}
            {instructor.bio && (
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 whitespace-pre-line">
                {instructor.bio}
              </p>
            )}

            {/* 社群連結 */}
            {socialLinks.length > 0 && (
              <div className="flex gap-3 justify-center md:justify-start">
                {socialLinks.map(link => (
                  <a
                    key={link.key}
                    href={`${link.prefix}${instructor[link.key]}`}
                    target={link.key === 'email' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-600 flex items-center justify-center
                      text-gray-500 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                    title={link.key}
                  >
                    <i className={link.icon} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
