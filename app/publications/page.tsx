"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, BookOpen, BarChart } from "lucide-react"

// Publication data
const publications = [
  {
    title:
      "Decomposition-based hybrid methods employing statistical, machine learning, and deep learning models for crude oil price forecasting",
    authors: "S. K. Purohit and S. Panigrahi",
    journal: "Neural Computing and Applications (Springer), April 2025. (Article)",
    doi: "10.1007/s00521-025-11178-6",
  },
  {
    title:
      "A study and development of high-order fuzzy time series forecasting methods for air quality index forecasting",
    authors: "S. S. Pradhan and S. Panigrahi",
    journal: "Journal of Forecasting (Wiley), May 2024. (Article)",
    doi: "10.1002/for.3153",
  },
  {
    title:
      "Novel deterministic and probabilistic forecasting methods for crude oil price employing optimized deep learning, statistical and hybrid models",
    authors: "S. K. Purohit and S. Panigrahi",
    journal: "Information Sciences (Elsevier), February 2024, Vol. 658, pp. 120021. (Article)",
    doi: "10.1016/j.ins.2023.120021",
  },
  {
    title: "Deep learning-based hybrid approach for crude oil price forecasting",
    authors: "S. K. Purohit and S. Panigrahi",
    journal: "Expert Systems (Wiley), January 2024. (Article)",
    doi: "10.1111/exsy.13371",
  },
  {
    title: "A novel hybrid approach for air quality index forecasting using deep learning and statistical models",
    authors: "S. S. Pradhan and S. Panigrahi",
    journal: "Engineering Applications of Artificial Intelligence (Elsevier), December 2023. (Article)",
    doi: "10.1016/j.engappai.2023.106487",
  },
]

// Journal summary data
const journalSummary = [
  {
    publisher: "Elsevier",
    total: 7,
    journals: [
      "Engineering Applications of Artificial Intelligence (IF: 7.80, No.: 3)",
      "Information Sciences (IF: 8.23, No.: 2)",
      "Pattern Recognition Letters (IF: 4.757, No.: 1)",
      "Computational and Theoretical Chemistry (IF: 2.29, No.: 1)",
    ],
  },
  {
    publisher: "Taylor and Francis",
    total: 3,
    journals: [
      "Applied Artificial Intelligence (IF: 2.77, No.: 2)",
      "Journal of Biopharmaceutical Statistics (IF: 1.2, No.: 1)",
    ],
  },
  {
    publisher: "Springer",
    total: 6,
    journals: [
      "Soft Computing (IF: 4.01, No.: 1)",
      "Solar Physics (IF: 2.96, No.: 1)",
      "Arabian Journal for Science & Engineering (IF: 2.81, No.: 3)",
      "Wireless Personal Communications (IF: 2.01, No.: 1)",
    ],
  },
  {
    publisher: "Wiley",
    total: 5,
    journals: [
      "Expert Systems (IF: 3.3, No.: 1)",
      "Journal of Forecasting (IF: 3.4, No.: 1)",
      "International Transactions on Electrical Energy Systems (IF: 2.64, No.: 2)",
      "Optimal Control Applications and Methods (IF: 1.95, No.: 1)",
    ],
  },
]

export default function PublicationsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter publications based on search query
  const filteredPublications = publications.filter(
    (pub) =>
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.doi.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <main className="min-h-screen py-12">
      <div className="container">
        <h1 className="text-3xl font-bold text-purple-600 mb-2">Publications</h1>
        <p className="text-gray-600 mb-8">Total Publications: 48 | SCI Journals: 25 | Cumulative Impact Factor: 93.1</p>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            className="pl-10"
            placeholder="Search publications by title, author, journal..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Tabs defaultValue="recent" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="recent" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Recent Publications
            </TabsTrigger>
            <TabsTrigger value="summary" className="flex items-center gap-2">
              <BarChart className="h-4 w-4" />
              SCI Journal Summary
            </TabsTrigger>
          </TabsList>

          <TabsContent value="recent">
            <div className="space-y-6">
              {filteredPublications.length > 0 ? (
                filteredPublications.map((pub, index) => (
                  <div key={index} className="card">
                    <h3 className="text-lg font-medium mb-2">{pub.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{pub.authors}</p>
                    <p className="text-sm text-gray-600 mb-2">{pub.journal}</p>
                    <p className="text-sm text-purple-600">DOI: {pub.doi}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No publications found matching your search criteria.</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="summary">
            <div className="grid md:grid-cols-2 gap-6">
              {journalSummary.map((item, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-medium mb-4">{item.publisher}</h3>
                  <p className="text-sm text-gray-600 mb-4">Total: {item.total} publications</p>
                  <ul className="space-y-2">
                    {item.journals.map((journal, jIndex) => (
                      <li key={jIndex} className="text-sm">
                        {journal}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  )
}
