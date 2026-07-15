const TYPE_CONFIG = {
  github: { icon: 'fa-brands fa-github', color: 'bg-gray-800 dark:bg-gray-600', label: 'GitHub' },
  link: { icon: 'fa-solid fa-link', color: 'bg-blue-600', label: '連結' },
  video: { icon: 'fa-solid fa-video', color: 'bg-red-600', label: '影片' },
  slides: { icon: 'fa-solid fa-file-powerpoint', color: 'bg-orange-500', label: '簡報' },
  doc: { icon: 'fa-solid fa-file-lines', color: 'bg-green-600', label: '文件' },
  tool: { icon: 'fa-solid fa-wrench', color: 'bg-purple-600', label: '工具' },
  default: { icon: 'fa-solid fa-arrow-up-right-from-square', color: 'bg-gray-500', label: '資源' }
}

function getTypeConfig(type) {
  return TYPE_CONFIG[type] || TYPE_CONFIG.default
}

export default function SupplementsSection({ supplements }) {
  if (!supplements || supplements.length === 0) return null

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">
          <i className="fa-solid fa-puzzle-piece mr-3 text-blue-600" />
          補充資料
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-10">
          額外的學習資源與參考資料
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {supplements.map((item, index) => {
            const config = getTypeConfig(item.type)
            return (
              <a
                key={item.id || index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5
                  bg-white dark:bg-gray-700 rounded-xl
                  border border-gray-100 dark:border-gray-600
                  hover:border-blue-200 dark:hover:border-blue-700
                  hover:shadow-md transition-all"
              >
                {/* 類型圖示 */}
                <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${config.color}
                  flex items-center justify-center text-white`}>
                  <i className={config.icon} />
                </div>

                {/* 內容 */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate
                      group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs text-gray-300
                      group-hover:text-blue-400 transition-colors" />
                  </div>
                  {item.description && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                  <span className="inline-block mt-2 text-xs text-gray-400 dark:text-gray-500 font-medium">
                    {config.label}
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
