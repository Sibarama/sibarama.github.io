import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, GraduationCap } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function StudentsPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container">
        <h1 className="text-3xl font-bold text-purple-600 mb-2">Research Students</h1>
        <p className="text-gray-600 mb-8">
          Currently supervising 8 Doctoral Students. Proud of their contributions and future potential.
        </p>

        <Tabs defaultValue="current" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="current" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Current Doctoral Students
            </TabsTrigger>
            <TabsTrigger value="alumni" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Ph.D. Alumni
            </TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4 bg-purple-100">
                  <AvatarFallback className="text-purple-600 text-xl">SA</AvatarFallback>
                </Avatar>
                <h3 className="font-medium mb-1">Sourav Kumar Purohit</h3>
                <p className="text-sm text-gray-600 mb-2">Research Scholar (Since 2022)</p>
                <p className="text-sm text-purple-600 mb-2">sk27808@gmail.com</p>
                <p className="text-sm font-medium">Research: Crude Oil Price Forecasting using Machine Learning Techniques</p>
              </div>

              <div className="card text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4 bg-blue-100">
                  <AvatarFallback className="text-blue-600 text-xl">SB</AvatarFallback>
                </Avatar>
                <h3 className="font-medium mb-1">Student B</h3>
                <p className="text-sm text-gray-600 mb-2">Research Scholar (Since 2021)</p>
                <p className="text-sm text-purple-600 mb-2">student.b@nitrkl.ac.in</p>
                <p className="text-sm font-medium">Research: Soft Computing in Biology</p>
              </div>

              <div className="card text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4 bg-green-100">
                  <AvatarFallback className="text-green-600 text-xl">SC</AvatarFallback>
                </Avatar>
                <h3 className="font-medium mb-1">Student C</h3>
                <p className="text-sm text-gray-600 mb-2">Research Scholar (Since 2023)</p>
                <p className="text-sm text-purple-600 mb-2">student.c@nitrkl.ac.in</p>
                <p className="text-sm font-medium">Research: AI in Healthcare Diagnostics</p>
              </div>

              <div className="card text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4 bg-yellow-100">
                  <AvatarFallback className="text-yellow-600 text-xl">SD</AvatarFallback>
                </Avatar>
                <h3 className="font-medium mb-1">Student D</h3>
                <p className="text-sm text-gray-600 mb-2">Research Scholar (Since 2022)</p>
                <p className="text-sm text-purple-600 mb-2">student.d@nitrkl.ac.in</p>
                <p className="text-sm font-medium">Research: Compiler Opt. using ML</p>
              </div>

              <div className="card text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4 bg-red-100">
                  <AvatarFallback className="text-red-600 text-xl">SE</AvatarFallback>
                </Avatar>
                <h3 className="font-medium mb-1">Student E</h3>
                <p className="text-sm text-gray-600 mb-2">Research Scholar (Since 2023)</p>
                <p className="text-sm text-purple-600 mb-2">student.e@nitrkl.ac.in</p>
                <p className="text-sm font-medium">Research: Time Series Analysis</p>
              </div>

              <div className="card text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4 bg-indigo-100">
                  <AvatarFallback className="text-indigo-600 text-xl">SF</AvatarFallback>
                </Avatar>
                <h3 className="font-medium mb-1">Student F</h3>
                <p className="text-sm text-gray-600 mb-2">Research Scholar (Since 2021)</p>
                <p className="text-sm text-purple-600 mb-2">student.f@nitrkl.ac.in</p>
                <p className="text-sm font-medium">Research: Deep Learning for NLP</p>
              </div>

              <div className="card text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4 bg-pink-100">
                  <AvatarFallback className="text-pink-600 text-xl">SG</AvatarFallback>
                </Avatar>
                <h3 className="font-medium mb-1">Student G</h3>
                <p className="text-sm text-gray-600 mb-2">Research Scholar (Since 2022)</p>
                <p className="text-sm text-purple-600 mb-2">student.g@nitrkl.ac.in</p>
                <p className="text-sm font-medium">Research: Computer Vision</p>
              </div>

              <div className="card text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4 bg-orange-100">
                  <AvatarFallback className="text-orange-600 text-xl">SH</AvatarFallback>
                </Avatar>
                <h3 className="font-medium mb-1">Student H</h3>
                <p className="text-sm text-gray-600 mb-2">Research Scholar (Since 2023)</p>
                <p className="text-sm text-purple-600 mb-2">student.h@nitrkl.ac.in</p>
                <p className="text-sm font-medium">Research: Data Mining</p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="alumni">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="card text-center">
                <Avatar className="h-20 w-20 mx-auto mb-4 bg-purple-100">
                  <AvatarFallback className="text-purple-600 text-xl">DAX</AvatarFallback>
                </Avatar>
                <h3 className="font-medium mb-1">Dr. Sushree Subhaprada Pradhan</h3>
                <p className="text-sm text-gray-600 mb-2">Graduated: November 2024</p>
                <p className="text-sm font-medium mb-1">Thesis: Forecasting Air Quality Index using Machine Learning Techniques</p>
                <p className="text-sm text-purple-600">Current: Assistant Professor, Department of Computer Science and Engineering, Sambalpur University Institute of Information Technology</p>
              </div>

              
            </div>
            <p className="text-center text-gray-600 mt-8">Showcasing a few accomplished alumni.</p>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
