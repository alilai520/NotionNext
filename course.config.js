const COURSE_CONFIG = {
  // 當前上架的課程 slug，首頁 /course 會自動導向此課程
  ACTIVE_COURSE: process.env.NEXT_PUBLIC_ACTIVE_COURSE || 'demo-course',

  // 講師資訊
  INSTRUCTOR: {
    name: process.env.NEXT_PUBLIC_INSTRUCTOR_NAME || '講師姓名',
    title: process.env.NEXT_PUBLIC_INSTRUCTOR_TITLE || '資深技術顧問',
    avatar: process.env.NEXT_PUBLIC_INSTRUCTOR_AVATAR || '/avatar.svg',
    bio: process.env.NEXT_PUBLIC_INSTRUCTOR_BIO || '擁有多年業界經驗，專注於技術教育與知識分享。',
    email: process.env.NEXT_PUBLIC_INSTRUCTOR_EMAIL || '',
    website: process.env.NEXT_PUBLIC_INSTRUCTOR_WEBSITE || '',
    github: process.env.NEXT_PUBLIC_INSTRUCTOR_GITHUB || '',
    linkedin: process.env.NEXT_PUBLIC_INSTRUCTOR_LINKEDIN || ''
  },

  // 課程資料
  // status: 'published' 上架中 | 'hidden' 隱藏 | 'archived' 歷史封存
  // 所有課程都可以透過 /course/[slug] 存取，但只有 published 的課程會在導航中顯示
  COURSES: {
    'demo-course': {
      title: '範例課程：NotionNext 開發實戰',
      subtitle: '從零開始打造你的 Notion 驅動網站',
      description: '本課程將帶你深入了解 NotionNext 的架構設計與實作技巧，從環境建置到部署上線一次搞定。',
      date: '2024-12-01',
      coverImage: '/bg_image.jpg',
      status: 'published',
      materials: [
        {
          id: 'm1',
          title: '第一講：環境建置與專案架構',
          description: '安裝開發環境、認識專案結構、設定 Notion 資料庫',
          fileName: 'lecture-01-setup.pdf',
          url: '#',
          size: '2.3 MB',
          type: 'pdf'
        },
        {
          id: 'm2',
          title: '第二講：主題系統與客製化',
          description: '了解主題架構、建立自己的主題、樣式調整技巧',
          fileName: 'lecture-02-themes.pdf',
          url: '#',
          size: '3.1 MB',
          type: 'pdf'
        },
        {
          id: 'm3',
          title: '第三講：部署與效能優化',
          description: 'Vercel 部署流程、ISR 策略、圖片優化與快取',
          fileName: 'lecture-03-deploy.pdf',
          url: '#',
          size: '1.8 MB',
          type: 'pdf'
        }
      ],
      supplements: [
        {
          id: 's1',
          title: '課程範例程式碼',
          description: '所有講次的完整範例程式碼',
          url: '#',
          type: 'github'
        },
        {
          id: 's2',
          title: '延伸閱讀資料',
          description: 'Next.js 與 Notion API 相關參考文件',
          url: '#',
          type: 'link'
        }
      ]
    }
  }
}

module.exports = COURSE_CONFIG
