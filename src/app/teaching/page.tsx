import { Brain, Code, Database, FileCode, BookOpen, BarChart, Camera } from "lucide-react"

export default function TeachingPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container">
        <h1 className="text-3xl font-bold text-purple-600 mb-2">Teaching</h1>
        <p className="text-gray-600 mb-8">
          Committed to delivering high-quality education in Computer Science and Engineering.
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Teaching Interests</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card flex items-start">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Artificial Intelligence and Machine Learning</h3>
                <p className="text-sm text-gray-600">
                  Advanced algorithms and applications of AI and ML in solving complex problems.
                </p>
              </div>
            </div>

            <div className="card flex items-start">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Code className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Soft Computing</h3>
                <p className="text-sm text-gray-600">
                  Fuzzy logic, neural networks, and evolutionary algorithms for problem-solving.
                </p>
              </div>
            </div>

            <div className="card flex items-start">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Database className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Programming and Data Structure</h3>
                <p className="text-sm text-gray-600">
                  Fundamentals of programming languages and efficient data organization.
                </p>
              </div>
            </div>

            <div className="card flex items-start">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <FileCode className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Theory of Computation</h3>
                <p className="text-sm text-gray-600">Mathematical models of computation and their applications.</p>
              </div>
            </div>

            <div className="card flex items-start">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <BookOpen className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Compiler Design</h3>
                <p className="text-sm text-gray-600">
                  Principles and practices of programming language implementation.
                </p>
              </div>
            </div>

            <div className="card flex items-start">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <BarChart className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Data Science</h3>
                <p className="text-sm text-gray-600">
                  Extracting knowledge and insights from structured and unstructured data.
                </p>
              </div>
            </div>

            <div className="card flex items-start">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Camera className="h-6 w-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Computer Vision</h3>
                <p className="text-sm text-gray-600">
                  Enabling computers to gain high-level understanding from digital images and videos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6">Courses (Sample)</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-medium mb-1">CSXXXX: Advanced Machine Learning Topics</h3>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">3 Credits</span>
                <span className="text-sm text-green-600">Autumn 2025 (Current)</span>
              </div>
              <p className="text-sm text-gray-600">Deep dive into specialized ML algorithms and applications.</p>
            </div>

            <div className="card">
              <h3 className="font-medium mb-1">CSYYYY: Introduction to Data Structures</h3>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">3 Credits</span>
                <span className="text-sm text-gray-600">Spring 2025</span>
              </div>
              <p className="text-sm text-gray-600">
                Detailed course information is typically available via the institute's portal.
              </p>
            </div>

            <div className="card">
              <h3 className="font-medium mb-1">CSZZZZ: Deep Learning Fundamentals</h3>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">4 Credits</span>
                <span className="text-sm text-gray-600">Spring 2024</span>
              </div>
              <p className="text-sm text-gray-600">
                Introduction to neural networks, backpropagation, CNNs, RNNs, and transformers.
              </p>
            </div>

            <div className="card">
              <h3 className="font-medium mb-1">CSAAAA: Compiler Design</h3>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">3 Credits</span>
                <span className="text-sm text-gray-600">Autumn 2024</span>
              </div>
              <p className="text-sm text-gray-600">
                Lexical analysis, parsing, semantic analysis, and code generation techniques.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
