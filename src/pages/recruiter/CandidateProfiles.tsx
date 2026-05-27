import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, MapPin, PlusCircle, MessageSquare } from "lucide-react";

interface Candidate {
  id: number;
  name: string;
  initials: string;
  title: string;
  location: string;
  skills: string[];
}

const candidates: Candidate[] = [
  { id: 1, name: "Aarav Shah", initials: "AS", title: "Senior Software Engineer", location: "Bangalore, IN", skills: ["React", "TypeScript", "Node.js", "AWS"] },
  { id: 2, name: "Diya Kapoor", initials: "DK", title: "Product Manager", location: "Mumbai, IN", skills: ["Roadmapping", "Agile", "SQL", "Figma"] },
  { id: 3, name: "Ishaan Gupta", initials: "IG", title: "Data Scientist", location: "Hyderabad, IN", skills: ["Python", "ML", "TensorFlow", "Spark"] },
  { id: 4, name: "Kavya Nair", initials: "KN", title: "UX Designer", location: "Pune, IN", skills: ["Figma", "User Research", "Prototyping", "CSS"] },
  { id: 5, name: "Aryan Verma", initials: "AV", title: "DevOps Engineer", location: "Remote", skills: ["Kubernetes", "Docker", "CI/CD", "Terraform"] },
  { id: 6, name: "Riya Malhotra", initials: "RM", title: "Business Analyst", location: "Delhi, IN", skills: ["JIRA", "SQL", "Excel", "Power BI"] },
];

export default function CandidateProfiles() {
  const [search, setSearch] = useState("");

  const filtered = candidates.filter((c) =>
    `${c.name} ${c.title} ${c.location} ${c.skills.join(" ")}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Candidate Profiles</h1>
        <span className="text-sm text-gray-500">{filtered.length} candidates</span>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          className="pl-10"
          placeholder="Search by name, title, skill, or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((candidate) => (
          <Card key={candidate.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-5 space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-blue-600 text-white font-semibold">
                    {candidate.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">{candidate.name}</p>
                  <p className="text-sm text-gray-600">{candidate.title}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3" />{candidate.location}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {candidate.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 pt-1">
                <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700 text-xs">
                  <PlusCircle className="w-3.5 h-3.5 mr-1" /> Add to Pipeline
                </Button>
                <Button size="sm" variant="outline" className="flex-1 text-xs">
                  <MessageSquare className="w-3.5 h-3.5 mr-1" /> Message
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-3 text-center text-gray-400 py-12">No candidates match your search.</p>
        )}
      </div>
    </div>
  );
}
