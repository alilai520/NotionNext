const FILE_ICONS = {
  pdf: 'fa-solid fa-file-pdf text-red-500',
  doc: 'fa-solid fa-file-word text-blue-500',
  docx: 'fa-solid fa-file-word text-blue-500',
  ppt: 'fa-solid fa-file-powerpoint text-orange-500',
  pptx: 'fa-solid fa-file-powerpoint text-orange-500',
  xls: 'fa-solid fa-file-excel text-green-500',
  xlsx: 'fa-solid fa-file-excel text-green-500',
  zip: 'fa-solid fa-file-zipper text-yellow-600',
  default: 'fa-solid fa-file text-gray-500'
}

function getFileIcon(type) {
  return FILE_ICONS[type] || FILE_ICONS.default
}

export default function MaterialsSection({ materials }) {
  if (!materials || materials.length === 0) return null

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 text-center">
          <i className="fa-solid fa-book-open mr-3 text-blue-600" />
          課程講義
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-center mb-10">
          下載本次課程的完整講義資料
        </p>

        <div className="space-y-4">
          {materials.map((item, index) => (
            <div
              key={item.id || index}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 p-5
                bg-gray-50 dark:bg-gray-800 rounded-xl
                border border-gray-100 dark:border-gray-700
                hover:border-blue-200 dark:hover:border-blue-800
                hover:shadow-md transition-all"
            >
              {/* 序號與圖示 */}
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center
                  text-blue-600 dark:text-blue-400 text-sm font-bold">
                  {index + 1}
                </span>
                <i className={`text-2xl ${getFileIcon(item.type)}`} />
              </div>

              {/* 內容 */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-1 truncate">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                    {item.description}
                  </p>
                )}
                {(item.fileName || item.size) && (
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                    {item.fileName && <span className="mr-3">{item.fileName}</span>}
                    {item.size && <span>{item.size}</span>}
                  </p>
                )}
              </div>

              {/* 下載按鈕 */}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5
                  bg-blue-600 text-white rounded-lg text-sm font-medium
                  hover:bg-blue-700 active:bg-blue-800 transition-colors
                  group-hover:shadow-sm self-start sm:self-center"
                download={item.fileName || true}
              >
                <i className="fa-solid fa-download" />
                下載
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
