import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  return (
    <main className="min-h-screen py-12">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-purple-600 mb-2 text-center">Contact me</h1>
        <p className="text-gray-600 mb-8 text-center max-w-lg mx-auto">
          Feel free to reach out for research collaborations, student inquiries, or any other academic matters.
        </p>

        <form className="space-y-4 card">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Input placeholder="First name" className="w-full" />
            </div>
            <div>
              <Input placeholder="Last name" className="w-full" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Input placeholder="Email" type="email" className="w-full" />
            </div>
            <div>
              <Input placeholder="Phone number" type="tel" className="w-full" />
            </div>
          </div>

          <div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose a topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="research">Research Collaboration</SelectItem>
                <SelectItem value="student">Student Inquiry</SelectItem>
                <SelectItem value="publication">Publication</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Textarea placeholder="Type your message..." className="min-h-[120px]" />
          </div>

          <div className="text-center">
            <Button className="bg-purple-600 hover:bg-purple-700 w-full md:w-auto">Submit</Button>
          </div>
        </form>

        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="card">
            <h3 className="font-medium mb-2">Email</h3>
            <p className="text-sm text-gray-600">panigrahi@nitrkl.ac.in</p>
          </div>
          <div className="card">
            <h3 className="font-medium mb-2">Phone</h3>
            <p className="text-sm text-gray-600">+91-XX-XXXXXXXX</p>
          </div>
          <div className="card">
            <h3 className="font-medium mb-2">Address</h3>
            <p className="text-sm text-gray-600">
              Department of CSE
              <br />
              NIT Rourkela, Odisha, India
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
