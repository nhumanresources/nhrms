import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, MapPin, Users } from "lucide-react";

interface JobPosting {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  applicants: number;
  status: "Open" | "Closed" | "Draft";
}

const initialJobs: JobPosting[] = [
  { id: 1, title: "Senior Software Engineer", department: "Engineering", location: "Bangalore, IN", type: "Full-time", applicants: 28, status: "Open" },
  { id: 2, title: "Product Manager", department: "Product", location: "Remote", type: "Full-time", applicants: 19, status: "Open" },
  { id: 3, title: "UX Designer", department: "Design", location: "Mumbai, IN", type: "Full-time", applicants: 14, status: "Open" },
  { id: 4, title: "DevOps Lead", department: "Engineering", location: "Hyderabad, IN", type: "Full-time", applicants: 11, status: "Draft" },
  { id: 5, title: "Data Analyst", department: "Analytics", location: "Pune, IN", type: "Contract", applicants: 22, status: "Closed" },
];

const statusColor: Record<JobPosting["status"], string> = {
  Open: "bg-green-100 text-green-700",
  Closed: "bg-red-100 text-red-700",
  Draft: "bg-yellow-100 text-yellow-700",
};

export default function JobPostings() {
  const [jobs, setJobs] = useState<JobPosting[]>(initialJobs);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ title: "", department: "", location: "", type: "Full-time" });

  const handleCreate = () => {
    if (!form.title || !form.department || !form.location) return;
    const newJob: JobPosting = {
      id: Date.now(),
      title: form.title,
      department: form.department,
      location: form.location,
      type: form.type,
      applicants: 0,
      status: "Draft",
    };
    setJobs((prev) => [newJob, ...prev]);
    setForm({ title: "", department: "", location: "", type: "Full-time" });
    setOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Job Postings</h1>
        <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setOpen(true)}>
          <Plus className="w-4 h-4 mr-2" /> New Job
        </Button>
      </div>

      <div className="grid gap-4">
        {jobs.map((job) => (
          <Card key={job.id}>
            <CardContent className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-900">{job.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColor[job.status]}`}>{job.status}</span>
                </div>
                <p className="text-sm text-gray-500">{job.department} · {job.type}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                  <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{job.applicants} applicants</span>
                </div>
              </div>
              <Button variant="outline" size="sm">View Pipeline</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Job Posting</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-1">
              <Label>Job Title</Label>
              <Input placeholder="e.g. Senior Engineer" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            </div>
            <div className="space-y-1">
              <Label>Department</Label>
              <Input placeholder="e.g. Engineering" value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} />
            </div>
            <div className="space-y-1">
              <Label>Location</Label>
              <Input placeholder="e.g. Bangalore or Remote" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
            </div>
            <div className="space-y-1">
              <Label>Type</Label>
              <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleCreate}>Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
