import {
    SiJavascript, SiPython, SiR, SiMysql,
    SiHtml5,
    SiCss3,
    SiDart,
    SiSwift,
    SiReactos,
    SiIntellijidea,
    SiGit,
    SiGithub,
    SiXcode,
    SiFigma,
    SiAdobeillustrator,
    SiQgis,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiTensorflow,
    SiPlotly,
    SiPostgresql,
    SiSqlite,
    SiMongodb,
    SiDocker,
} from 'react-icons/si';
import {
    FaAws,
    FaFlutter,
    FaJava,
    FaCode,
    FaMobile,
    FaChartBar,
    FaBrain,
    FaChartLine,
    FaPalette
} from 'react-icons/fa6'

const skillsData = {
    "Core Competencies": [
        { name: "Software Engineering", color: "hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: FaCode },
        { name: "Mobile Development", color: "hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-600 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: FaMobile },
        { name: "Data Science", color: "hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: FaChartBar },
        { name: "Machine Learning", color: "hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: FaBrain },
        { name: "Statistical Analysis", color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: FaChartLine },
        { name: "UI/UX Design", color: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: FaPalette }
    ],
    "Programming & Scripting Languages": [
        { name: "Python", color: "hover:bg-gradient-to-r hover:from-green-400 hover:to-green-600 hover:text-white hover:scale-110 hover:shadow-md transition-all duration-300", icon: SiPython },
        { name: "JavaScript", color: "hover:bg-gradient-to-r hover:from-yellow-300 hover:to-yellow-500 hover:text-gray-900 hover:scale-110 hover:shadow-md transition-all duration-300", icon: SiJavascript },
        { name: "R", color: "hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white hover:scale-110 hover:shadow-md transition-all duration-300", icon: SiR },
        { name: "Java", color: "hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white hover:scale-110 hover:shadow-md transition-all duration-300", icon: FaJava },
        { name: "Swift", color: "hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700 hover:text-white hover:scale-110 hover:shadow-md transition-all duration-300", icon: SiSwift },
        { name: "Dart", color: "hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-500 hover:text-blue-900 hover:scale-110 hover:shadow-md transition-all duration-300", icon: SiDart },
        { name: "SQL", color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white hover:scale-110 hover:shadow-md transition-all duration-300", icon: SiMysql },
        { name: "HTML", color: "hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white hover:scale-110 hover:shadow-md transition-all duration-300", icon: SiHtml5 },
        { name: "CSS", color: "hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white hover:scale-110 hover:shadow-md transition-all duration-300", icon: SiCss3 }
    ],
    "Data Science & Machine Learning": [
        { name: "Pandas", color: "hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: SiPandas },
        { name: "NumPy", color: "hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-700 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: SiNumpy },
        { name: "Scikit-learn", color: "hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: SiScikitlearn },
        { name: "TensorFlow", color: "hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-700 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: SiTensorflow },
        { name: "Matplotlib", color: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-red-600 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: SiPlotly },
        { name: "QGIS", color: "hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: SiQgis }
    ],
    "Mobile & Web Frameworks": [
        { name: "React Native", color: "hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-600 hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300", icon: SiReactos },
        { name: "Flutter", color: "hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300", icon: FaFlutter }
    ],
    "Cloud & DevOps": [
        { name: "Git", color: "hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: SiGit },
        { name: "GitHub", color: "hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: SiGithub },
        { name: "Docker", color: "hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-700 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: SiDocker },
        { name: "AWS", color: "hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-600 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: FaAws }
    ],
    "Databases & Data Storage": [
        { name: "MySQL", color: "hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: SiMysql },
        { name: "PostgreSQL", color: "hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-900 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: SiPostgresql },
        { name: "SQLite", color: "hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-700 hover:text-white hover:scale-105 hover:shadow-lg transition-all duration-300", icon: SiSqlite }
    ],
    "Design & Visualization": [
        { name: "Figma", color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300", icon: SiFigma },
        { name: "Adobe Illustrator", color: "hover:bg-gradient-to-r hover:from-orange-400 hover:to-orange-600 hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300", icon: SiAdobeillustrator }
    ]
};

export default function Skills() {
    return (
        <section id="skills" className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8">Skills</h2>
            <div className="space-y-8">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <div key={category}>
                        <h3 className="font-semibold text-black mb-4">{category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => {
                                const IconComponent = skill.icon;
                                return (
                                    <div
                                        key={skill.name}
                                        className={`group px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 text-sm font-medium cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:border-gray-200 ${skill.color} hover:-translate-y-1`}
                                    >
                                        <div className="flex items-center gap-2">
                                            {IconComponent && (
                                                <div className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                                                    <IconComponent className="w-4 h-4 transition-colors duration-300" />
                                                </div>
                                            )}
                                            <span className="transition-all duration-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}