import AboutMe from "@/components/about-me"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Footer from "@/components/footer"
import StickyNav from "@/components/sticky-nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <StickyNav />
      <main className="max-w-4xl mx-auto px-6 py-8">
        <AboutMe />
        <Experience />
        <Education />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
