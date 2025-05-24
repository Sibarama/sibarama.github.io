import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-16" style={{ backgroundColor: '#F5FCFF' }}>
        <div className="container grid md:grid-cols-2 gap-0 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">Dr. Sibarama Panigrahi</h1>
            <p className="text-lg font-medium mb-2">Assistant Professor (Grade-I)</p>
            <p className="text-sm text-gray-600 mb-6">
              Department of Computer Science & Engineering
              <br />
              National Institute of Technology, Rourkela
            </p>
            <div className="flex space-x-3">
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/research">Explore Research</Link>
              </Button>
              <Button
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                asChild
              >
                <Link href="/publications">View Publications</Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center">
            
            <Image
              src="Frame 2.png"
              alt="Dr. Sibarama Panigrahi"
              width={800}
              height={800}
              className="rounded-lg object-cover" 
            />
            
          </div>
        </div>
      </section>

      {/* Academic Profiles */}
      <section className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
  <div className="container">
    <div className="flex justify-center items-center gap-20 text-center flex-wrap">
      {/* Image 1 */}
      <div>
        <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
          <img src="image 01.png" alt="iD" className="w-400 h-400 object-contain" />
        </div>
        <p className="text-sm mt-2 text-gray-700">ORCID ID</p>
      </div>

      {/* Image 2 */}
      <div>
        <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
          <img src="image 02.png" alt="Scopus" className="w-400 h-400 object-contain" />
        </div>
        <p className="text-sm mt-2 text-gray-700">Scopus</p>
      </div>

      {/* Image 3 */}
      <div>
        <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
          <img src="image 03.png" alt="Circle" className="w-400 h-400 object-contain" />
        </div>
        <p className="text-sm mt-2 text-gray-700">Circle</p>
      </div>

      {/* Image 4 */}
      <div>
        <div className="w-20 h-20 flex items-center justify-center overflow-hidden">
          <img src="image 04.png" alt="Google Scholar" className="w-400 h-400 object-contain" />
        </div>
        <p className="text-sm mt-2 text-gray-700">Google Scholar</p>
      </div>
    </div>
  </div>
</section>
      {/* Expertise Section */}
      <section className="py-16 bg-gray-50" id="research">
        <div className="container">
          <h2 className="text-sm text-gray-500 mb-2">Explore My Work</h2>
          <h3 className="text-2xl font-bold mb-10">My Expertise</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card" style={{ backgroundColor: '#F5FCFF' }}>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-green-600"
                >
                  <path
                    d="M21 16V8.00002C20.9996 7.6493 20.9071 7.30483 20.7315 7.00119C20.556 6.69754 20.3037 6.44539 20 6.27002L13 2.27002C12.696 2.09449 12.3511 2.00208 12 2.00208C11.6489 2.00208 11.304 2.09449 11 2.27002L4 6.27002C3.69626 6.44539 3.44398 6.69754 3.26846 7.00119C3.09294 7.30483 3.00036 7.6493 3 8.00002V16C3.00036 16.3508 3.09294 16.6952 3.26846 16.9989C3.44398 17.3025 3.69626 17.5547 4 17.73L11 21.73C11.304 21.9056 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9056 13 21.73L20 17.73C20.3037 17.5547 20.556 17.3025 20.7315 16.9989C20.9071 16.6952 20.9996 16.3508 21 16Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.27002 6.96002L12 12L20.73 6.96002"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22.08V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">Research</h4>
              <p className="text-sm text-gray-600 mb-4">
                Exploring advancements in Machine Learning, Deep Learning, Time Series Forecasting, and Computational
                Biology.
              </p>
              <Link href="/research" className="text-purple-600 text-sm flex items-center hover:underline">
                Explore Research <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="card" style={{ backgroundColor: '#F5FCFF' }}>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-blue-600"
                >
                  <path
                    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 12H17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 17H13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">Publications</h4>
              <p className="text-sm text-gray-600 mb-4">
                Over 48 publications in reputed journals with a cumulative impact factor of 93.1, including 25 SCI
                journals.
              </p>
              <Link href="/publications" className="text-purple-600 text-sm flex items-center hover:underline">
                Explore Publications <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="card" style={{ backgroundColor: '#F5FCFF' }}>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-green-600"
                >
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">Students</h4>
              <p className="text-sm text-gray-600 mb-4">
                Currently supervising 8 Doctoral Students working on cutting-edge research in AI, ML, and computational
                fields.
              </p>
              <Link href="/students" className="text-purple-600 text-sm flex items-center hover:underline">
                Meet Students <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="card" style={{ backgroundColor: '#F5FCFF' }}>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"   
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-purple-600"
                >
                  <path
                    d="M22 16.92V19.92C22 20.4704 21.7893 20.9996 21.4142 21.3747C21.0391 21.7498 20.5099 21.9605 19.96 21.96C16.4243 21.7822 13.0222 20.5226 10.1354 18.34C7.45744 16.3392 5.22479 13.6804 3.68 10.57C1.86 7.19 0.75 3.73 1 0.0600002C1.00558 -0.4869 1.21595 -1.01279 1.58319 -1.38629C1.95044 -1.75978 2.47479 -1.97686 3.02 -1.98H6.02C7.07938 -2.0195 7.96402 -1.2239 8.1 -0.180001C8.23662 1.17991 8.47145 2.52778 8.8 3.84C9.07223 4.90934 8.79502 6.05638 8.06 6.86L6.8 8.12C8.25131 11.1947 10.6053 13.7274 13.56 15.32L14.82 14.06C15.6236 13.325 16.7707 13.0478 17.84 13.32C19.1522 13.6485 20.5001 13.8834 21.86 14.02C22.9302 14.1592 23.7334 15.0635 23.68 16.13L22 16.92Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">Teaching</h4>
              <p className="text-sm text-gray-600 mb-4">
                Committed to delivering high-quality education in Computer Science and Engineering with focus on AI and
                ML and emerging technologies..
              </p>
              <Link href="/teaching" className="text-purple-600 text-sm flex items-center hover:underline">
                View Teaching <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 bg-white" id="about">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-40 items-center">
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="Frame 1.png"
                  alt="Dr. Sibarama Panigrahi"
                  width={600}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">About Dr. Panigrahi</h2>
              <p className="text-gray-600 mb-6">
                Dr. Sibarama Panigrahi is presently working as an Assistant Professor in the Department of Computer
                Science and Engineering, NIT Rourkela, Odisha, India. He has completed his M.Tech and Ph.D. in Computer
                Science and Engineering from Veer Surendra Sai University of Technology, Odisha, India.
              </p>
              <p className="text-gray-600 mb-6">
                He has been sanctioned with several research grants from major funding agencies of India like Science
                and Engineering Research Board (SERB), Indian Council of Medical Research (ICMR), Coal India Limited and
                Odisha State Higher Education Council (OSHEC). He has published more than 45 research papers in reputed
                Journals and Conferences.
              </p>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Academic Background</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Ph.D. in CSE (2019) - VSSUT (UCE) Burla, Odisha</li>
                  <li>M.Tech. in CSE (2013) - VSSUT (UCE) Burla, Odisha (University Silver Medal)</li>
                  <li>B.Tech. in CSE (2009) - Biju Patnaik University of Technology</li>
                </ul>
              </div>
              <Button className="bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50" id="projects">
        <div className="container">
          <h2 className="text-sm text-gray-500 mb-2">Recent Projects</h2>
          <h3 className="text-2xl font-bold mb-10">Impactful Projects</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="card overflow-hidden">
                <div className="h-48 bg-gray-200 -mx-6 -mt-6 mb-6">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Project+${item}`}
                    alt={`Project ${item}`}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-medium mb-2">
                  {item === 1
                    ? "Deep Learning for Crude Oil Price Forecasting"
                    : item === 2
                      ? "AI-enabled Fire Detection System"
                      : "Big Data Platform for Clinical Data"}
                </h4>
                <p className="text-sm text-gray-600 mb-4">
                  {item === 1
                    ? "SERB funded project on developing deep learning models for accurate crude oil price forecasting."
                    : item === 2
                      ? "CMPDIL funded project for revolutionizing mine safety with AI-based fire detection."
                      : "ICMR funded project for temporal storage and mining of cardiovascular disease data."}
                </p>
                <Link
                  href={`/project-details/${item}`}
                  className="text-purple-600 text-sm flex items-center hover:underline"
                >
                  View Details <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
              asChild
            >
              <Link href="/research">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Academic Achievements Section */}
    <section className="py-16" id="achievements" style={{ backgroundColor: '#F5FCFF' }}>
         <div className="container">
          <h2 className="text-sm text-gray-500 mb-2">Professional Experience</h2>
          <h3 className="text-2xl font-bold mb-10">Academic Positions & Achievements</h3>

          <div className="space-y-8">
            <div className="card">
              <h4 className="font-medium mb-2">Assistant Professor Grade-I</h4>
              <p className="text-sm text-gray-600">
                National Institute of Technology, Rourkela, Odisha (03/04/2023 - Till date)
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Key Role:</span> Teaching advanced courses in AI, ML, and supervising
                doctoral research
              </p>
            </div>

            <div className="card">
              <h4 className="font-medium mb-2">Assistant Professor</h4>
              <p className="text-sm text-gray-600">
                SUIIT, Sambalpur University, Burla, Odisha (26/09/2016 - 31/03/2023)
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Key Role:</span> Curriculum development, research supervision, and
                teaching
              </p>
            </div>

            <div className="card">
              <h4 className="font-medium mb-2">Research Grants</h4>
              <p className="text-sm text-gray-600">
                Total project grants: Rs. 4.7816697 Crores from SERB, ICMR, Coal India Limited, and OSHEC
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Key Achievement:</span> Successfully secured and managed multiple research
                grants
              </p>
            </div>

            <div className="card">
              <h4 className="font-medium mb-2">Publications</h4>
              <p className="text-sm text-gray-600">
                48 publications in reputed journals and conferences, including 25 SCI journals with cumulative impact
                factor of 93.1
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Key Achievement:</span> Significant contributions to the field through
                high-impact research
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50" id="contact">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-sm text-gray-500 mb-2">Get In Touch</h2>
          <h3 className="text-2xl font-bold mb-10">Contact me</h3>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            Feel free to reach out for research collaborations, student inquiries, or any other academic matters.
          </p>

          <div className="text-center">
            <Button className="bg-purple-600 hover:bg-purple-700" asChild>
              <Link href="/contact">Contact Form</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
