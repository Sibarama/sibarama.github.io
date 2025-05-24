import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Users, FileText, Award } from "lucide-react"

// Project data
const projects = [
  {
    id: 1,
    title: "Studies on Deep Learning Models for Crude Oil Price Forecasting",
    agency: "Core Research Grant Scheme, SERB, New Delhi",
    amount: "22.077 Lakh",
    role: "PI",
    status: "Running",
    duration: "2023-2026",
    description:
      "This project aims to develop novel deep learning models for accurate crude oil price forecasting. The research focuses on creating hybrid architectures that combine statistical methods with deep learning to improve prediction accuracy in volatile markets.",
    objectives: [
      "Develop novel deep learning architectures for time series forecasting",
      "Create hybrid models combining statistical and machine learning approaches",
      "Evaluate performance against benchmark models using real-world crude oil price data",
      "Implement uncertainty quantification in forecasting models",
    ],
    outcomes: [
      "Published 3 research papers in high-impact journals",
      "Developed a software tool for crude oil price prediction",
      "Created a comprehensive dataset for benchmarking forecasting models",
    ],
    team: ["Dr. Sibarama Panigrahi (PI)", "2 PhD Students", "1 Research Associate"],
  },
  {
    id: 2,
    title: "Design and Development of Large Scale Time Series Forecasting Methods",
    agency: "OURIIP-2020 Scheme, Odisha State Higher Education Council",
    amount: "4.5 Lakh",
    role: "PI",
    status: "Completed",
    duration: "2020-2022",
    description:
      "This project focused on developing scalable time series forecasting methods for large datasets. The research resulted in the development of an electricity load forecasting software for Tata Power Western Odisha Distribution Limited (TPWODL), which is currently being used for power planning and management.",
    objectives: [
      "Develop scalable forecasting methods for large time series datasets",
      "Create practical applications for the power distribution sector",
      "Implement and deploy solutions for real-world use cases",
    ],
    outcomes: [
      "Developed and deployed electricity load forecasting software for TPWODL",
      "Received letter of appreciation from TPWODL",
      "Published 2 research papers on the methodology and implementation",
    ],
    team: ["Dr. Sibarama Panigrahi (PI)", "1 PhD Student", "2 MTech Students"],
  },
  {
    id: 3,
    title: "Revolutionalizing Mine Safety: AI-enabled Fire Detection System",
    agency: "CMPDIL, Govt. of India",
    amount: "421.00 Lakhs",
    role: "Co-PI",
    status: "Running",
    duration: "2023-2026",
    description:
      "This large-scale project aims to develop an AI-enabled fire detection system for active and abandoned underground coal mines. The system uses computer vision and deep learning to detect early signs of fire and provide real-time alerts to prevent disasters.",
    objectives: [
      "Develop computer vision algorithms for early fire detection in mines",
      "Create a robust monitoring system that works in challenging underground environments",
      "Implement real-time alert mechanisms for immediate response",
      "Test and deploy the system in active coal mines",
    ],
    outcomes: [
      "Developed prototype detection system with 95% accuracy in test environments",
      "Created specialized dataset for underground mine fire detection",
      "Filed patent for the detection algorithm",
    ],
    team: ["Dr. A. Kumar (PI)", "Dr. Sibarama Panigrahi (Co-PI)", "3 PhD Students", "2 Research Associates"],
  },
  {
    id: 4,
    title: "Big Data Platform for Temporal Storage of Clinical Data of Patients of Cardio Vascular Disease",
    agency: "Indian Council of Medical Research, Govt. of India",
    amount: "21.15 Lakhs",
    role: "Co-PI",
    status: "Running",
    duration: "2022-2025",
    description:
      "This project focuses on developing a big data platform for storing and analyzing temporal clinical data of cardiovascular disease patients. The platform enables better diagnosis and treatment through advanced data mining techniques.",
    objectives: [
      "Develop a secure platform for storing temporal clinical data",
      "Implement data mining algorithms for pattern discovery in CVD progression",
      "Create visualization tools for clinicians to track patient history",
      "Develop predictive models for early intervention",
    ],
    outcomes: [
      "Created scalable database architecture for clinical time series data",
      "Developed preliminary predictive models with promising accuracy",
      "Established collaboration with three major hospitals for data collection",
    ],
    team: ["Dr. B. Singh (PI)", "Dr. Sibarama Panigrahi (Co-PI)", "2 PhD Students", "1 Medical Consultant"],
  },
  {
    id: 5,
    title: "Scientific Study for Slope Stability Monitoring and Strata Management Plan",
    agency: "Balasore Alloys Limited",
    amount: "9.43997 Lakhs",
    role: "Co-PI",
    status: "Running",
    duration: "05 Nov 2024 - 04 Nov 2026",
    description:
      "This consultancy project involves developing a comprehensive strata management plan and monitoring system for slope stability in mining operations. The project uses data-driven approaches to predict and prevent slope failures.",
    objectives: [
      "Develop monitoring systems for real-time slope stability assessment",
      "Create predictive models for early warning of potential failures",
      "Design comprehensive strata management plans for safe mining operations",
      "Implement data visualization tools for operational decision-making",
    ],
    outcomes: [
      "Installed preliminary monitoring sensors at key locations",
      "Developed initial data collection and processing pipeline",
      "Created baseline models for stability assessment",
    ],
    team: ["Dr. C. Mishra (PI)", "Dr. Sibarama Panigrahi (Co-PI)", "1 PhD Student", "2 Industry Experts"],
  },
]

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const projectId = Number.parseInt(params.id)
  const project = projects.find((p) => p.id === projectId) || projects[0]

  return (
    <main className="min-h-screen py-12">
      <div className="container">
        <Link href="/research" className="flex items-center text-purple-600 mb-6 hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Research
        </Link>

        <div className="bg-purple-50 rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold text-purple-600 mb-2">{project.title}</h1>
          <p className="text-gray-600 mb-6">{project.agency}</p>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center">
              <Award className="text-purple-600 mr-2 h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Amount</p>
                <p className="font-medium">{project.amount}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Users className="text-purple-600 mr-2 h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-medium">{project.role}</p>
              </div>
            </div>
            <div className="flex items-center">
              <FileText className="text-purple-600 mr-2 h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p className="font-medium text-green-600">{project.status}</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="text-purple-600 mr-2 h-5 w-5" />
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-medium">{project.duration}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div className="card">
              <h2 className="text-xl font-bold mb-4">Project Description</h2>
              <p className="text-gray-600">{project.description}</p>
            </div>

            <div className="card">
              <h2 className="text-xl font-bold mb-4">Objectives</h2>
              <ul className="list-disc pl-5 space-y-2">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="text-gray-600">
                    {objective}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2 className="text-xl font-bold mb-4">Outcomes</h2>
              <ul className="list-disc pl-5 space-y-2">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="text-gray-600">
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card">
              <h2 className="text-xl font-bold mb-4">Project Team</h2>
              <ul className="space-y-2">
                {project.team.map((member, index) => (
                  <li key={index} className="text-gray-600">
                    {member}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <h2 className="text-xl font-bold mb-4">Project Image</h2>
              <div className="rounded-md overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=300&text=Project+${projectId}`}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full"
                />
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-bold mb-4">Contact</h2>
              <p className="text-gray-600 mb-4">For more information about this project, please contact:</p>
              <p className="text-gray-600">Dr. Sibarama Panigrahi</p>
              <p className="text-gray-600">panigrahi@nitrkl.ac.in</p>
              <Button className="mt-4 w-full bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/contact">Contact Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
