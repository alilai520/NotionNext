import COURSE_CONFIG from '@/course.config'
import CourseLandingPage from '@/components/CourseMaterials/CourseLandingPage'
import CommonHead from '@/components/CommonHead'
import BLOG from '@/blog.config'

export default function CourseSlugPage({ course, instructor, slug, siteInfo }) {
  const meta = {
    title: course
      ? `${course.title} | ${siteInfo?.title || BLOG.TITLE}`
      : `課程不存在 | ${siteInfo?.title || BLOG.TITLE}`,
    description: course?.description || '',
    type: 'article',
    slug: `course/${slug}`
  }

  return (
    <>
      <CommonHead meta={meta} siteInfo={siteInfo} />
      <CourseLandingPage course={course} instructor={instructor} slug={slug} />
    </>
  )
}

export async function getStaticPaths() {
  const paths = Object.keys(COURSE_CONFIG.COURSES).map(slug => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params
  const courseData = COURSE_CONFIG.COURSES[slug] || null
  const instructor = COURSE_CONFIG.INSTRUCTOR || null

  // 動態匯入取得 siteInfo，與其他頁面保持一致
  let siteInfo = null
  try {
    const { getGlobalData } = await import('@/lib/notion/getNotionData')
    const globalData = await getGlobalData({ from: `course-${slug}` })
    siteInfo = globalData?.siteInfo || null
  } catch (e) {
    // Notion 資料不可用時不影響頁面渲染
  }

  return {
    props: {
      course: courseData,
      instructor,
      slug,
      siteInfo: siteInfo || { title: BLOG.TITLE, description: BLOG.DESCRIPTION }
    },
    revalidate: parseInt(BLOG.NEXT_REVALIDATE_SECOND)
  }
}
