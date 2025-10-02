import AboutMe from "@/components/main/about-me"
import Experience from "@/components/main/experience"
import Education from "@/components/main/education"
import Skills from "@/components/main/skills"
import Footer from "@/components/main/footer"
import StickyNav from "@/components/main/sticky-nav"

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
