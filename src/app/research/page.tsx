import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Brain, Database, LineChart, Microscope, Code, BarChart, FileText, Briefcase } from "lucide-react"
import Link from "next/link"

export default function ResearchPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container">
        <h1 className="text-3xl font-bold text-purple-600 mb-2">Research Profile</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Exploring advancements in Machine Learning, Deep Learning, Time Series Forecasting, and more. Total project
          grants: Rs. 4.7816697 Crores.
        </p>

        <Tabs defaultValue="interests" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="interests" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Research Interests
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Projects & Grants
            </TabsTrigger>
          </TabsList>

          <TabsContent value="interests">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Machine Learning</h3>
                <p className="text-sm text-gray-600">
                  Developing novel machine learning algorithms and applications for complex problem-solving across
                  domains.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Deep Learning</h3>
                <p className="text-sm text-gray-600">
                  Exploring advanced neural network architectures for improved performance in various applications.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <LineChart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Time Series Forecasting</h3>
                <p className="text-sm text-gray-600">
                  Developing state-of-the-art methods for accurate prediction of time-dependent data.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Microscope className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Computational Biology</h3>
                <p className="text-sm text-gray-600">
                  Applying computational methods to solve complex biological problems and advance healthcare.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Soft Computing</h3>
                <p className="text-sm text-gray-600">
                  Researching fuzzy logic, neural networks, and evolutionary algorithms for complex problem-solving.
                </p>
              </div>

              <div className="card">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-medium mb-2">Data Science</h3>
                <p className="text-sm text-gray-600">
                  Extracting insights from complex datasets to drive decision-making and innovation.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="projects">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-purple-600" />
                  Sponsored Projects (4)
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card">
                    <h3 className="text-lg font-medium mb-2">
                      Studies on Deep Learning Models for Crude Oil Price Forecasting
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">Core Research Grant Scheme, SERB, New Delhi</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-medium">22.077 Lakh</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Role:</span>
                        <span className="font-medium">PI</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Status:</span>
                        <span className="font-medium text-green-600">Running</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full hover:bg-purple-600 hover:text-white" asChild>
                      <Link href="/project-details/1">Learn More</Link>
                    </Button>
                  </div>

                  <div className="card">
                    <h3 className="text-lg font-medium mb-2">
                      Design and Development of Large Scale Time Series Forecasting Methods
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      OURIIP-2020 Scheme, Odisha State Higher Education Council
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-medium">4.5 Lakh</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Role:</span>
                        <span className="font-medium">PI</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Status:</span>
                        <span className="font-medium text-blue-600">Completed</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full hover:bg-purple-600 hover:text-white" asChild>
                      <Link href="/project-details/2">Learn More</Link>
                    </Button>
                  </div>

                  <div className="card">
                    <h3 className="text-lg font-medium mb-2">
                      Revolutionalizing Mine Safety: AI-enabled Fire Detection System
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">CMPDIL, Govt. of India</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-medium">421.00 Lakhs</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Role:</span>
                        <span className="font-medium">Co-PI</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Status:</span>
                        <span className="font-medium text-green-600">Running</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full hover:bg-purple-600 hover:text-white" asChild>
                      <Link href="/project-details/3">Learn More</Link>
                    </Button>
                  </div>

                  <div className="card">
                    <h3 className="text-lg font-medium mb-2">
                      Big Data Platform for Temporal Storage of Clinical Data
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">Indian Council of Medical Research, Govt. of India</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-medium">21.15 Lakhs</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Role:</span>
                        <span className="font-medium">Co-PI</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Status:</span>
                        <span className="font-medium text-green-600">Running</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full hover:bg-purple-600 hover:text-white" asChild>
                      <Link href="/project-details/4">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Briefcase className="mr-2 h-5 w-5 text-purple-600" />
                  Consultancy Projects (1)
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="card">
                    <h3 className="text-lg font-medium mb-2">
                      Scientific Study for Slope Stability Monitoring and Strata Management Plan
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">Balasore Alloys Limited</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Amount:</span>
                        <span className="font-medium">9.43997 Lakhs</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Role:</span>
                        <span className="font-medium">Co-PI</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Status:</span>
                        <span className="font-medium text-green-600">Running</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-medium">05 Nov 2024 - 04 Nov 2026</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full hover:bg-purple-600 hover:text-white" asChild>
                      <Link href="/project-details/5">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
