import COURSE_CONFIG from '@/course.config'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function CourseIndex({ redirectTo }) {
  const router = useRouter()

  useEffect(() => {
    if (redirectTo) {
      router.replace(redirectTo)
    }
  }, [redirectTo])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center">
        <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" />
        <p className="text-gray-500 dark:text-gray-400">正在載入課程...</p>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const activeCourse = COURSE_CONFIG.ACTIVE_COURSE

  const course = COURSE_CONFIG.COURSES[activeCourse]
  if (course && course.status === 'published') {
    return {
      props: { redirectTo: `/course/${activeCourse}` }
    }
  }

  const publishedSlug = Object.keys(COURSE_CONFIG.COURSES).find(
    slug => COURSE_CONFIG.COURSES[slug].status === 'published'
  )

  return {
    props: { redirectTo: publishedSlug ? `/course/${publishedSlug}` : '/' }
  }
}
