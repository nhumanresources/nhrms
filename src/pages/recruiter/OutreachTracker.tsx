import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { Plus } from "lucide-react";

type Status = "Sent" | "Replied" | "No Response";
type MessageType = "InMail" | "Connection" | "Email";

interface OutreachRow {
  id: number;
  candidate: string;
  position: string;
  messageType: MessageType;
  dateSent: string;
  status: Status;
}

const statusStyles: Record<Status, string> = {
  Replied: "bg-green-100 text-green-700",
  Sent: "bg-yellow-100 text-yellow-700",
  "No Response": "bg-red-100 text-red-700",
};

const initialRows: OutreachRow[] = [
  { id: 1, candidate: "Aarav Shah", position: "Senior Engineer", messageType: "InMail", dateSent: "2025-05-20", status: "Replied" },
  { id: 2, candidate: "Diya Kapoor", position: "Product Manager", messageType: "Connection", dateSent: "2025-05-19", status: "Sent" },
  { id: 3, candidate: "Ishaan Gupta", position: "Data Scientist", messageType: "Email", dateSent: "2025-05-18", status: "No Response" },
  { id: 4, candidate: "Kavya Nair", position: "UX Designer", messageType: "InMail", dateSent: "2025-05-17", status: "Replied" },
  { id: 5, candidate: "Aryan Verma", position: "DevOps Lead", messageType: "InMail", dateSent: "2025-05-16", status: "No Response" },
  { id: 6, candidate: "Riya Malhotra", position: "Business Analyst", messageType: "Email", dateSent: "2025-05-15", status: "Sent" },
  { id: 7, candidate: "Rohan Joshi", position: "Senior Engineer", messageType: "Connection", dateSent: "2025-05-14", status: "Replied" },
  { id: 8, candidate: "Priya Bhat", position: "Product Manager", messageType: "InMail", dateSent: "2025-05-13", status: "No Response" },
];

export default function OutreachTracker() {
  const [rows, setRows] = useState<OutreachRow[]>(initialRows);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ candidate: "", position: "", messageType: "InMail" as MessageType });

  const handleCreate = () => {
    if (!form.candidate || !form.position) return;
    const today = new Date().toISOString().split("T")[0];
    const newRow: OutreachRow = {
      id: Date.now(),
      candidate: form.candidate,
      position: form.position,
      messageType: form.messageType,
      dateSent: today,
      status: "Sent",
    };
    setRows((prev) => [newRow, ...prev]);
    setForm({ candidate: "", position: "", messageType: "InMail" });
    setOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Outreach Tracker</h1>
        <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setOpen(true)}>
          <Plus className="w-4 h-4 mr-2" /> New Outreach
        </Button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>Candidate</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Message Type</TableHead>
              <TableHead>Date Sent</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.candidate}</TableCell>
                <TableCell className="text-gray-600">{row.position}</TableCell>
                <TableCell>
                  <span className="text-sm bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
                    {row.messageType}
                  </span>
                </TableCell>
                <TableCell className="text-gray-500 text-sm">{row.dateSent}</TableCell>
                <TableCell>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusStyles[row.status]}`}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 text-xs">
                    Follow Up
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>New Outreach</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-1">
              <Label>Candidate Name</Label>
              <Input placeholder="e.g. John Smith" value={form.candidate} onChange={(e) => setForm({ ...form, candidate: e.target.value })} />
            </div>
            <div className="space-y-1">
              <Label>Position</Label>
              <Input placeholder="e.g. Senior Engineer" value={form.position} onChange={(e) => setForm({ ...form, position: e.target.value })} />
            </div>
            <div className="space-y-1">
              <Label>Message Type</Label>
              <Select value={form.messageType} onValueChange={(v) => setForm({ ...form, messageType: v as MessageType })}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="InMail">InMail</SelectItem>
                  <SelectItem value="Connection">Connection</SelectItem>
                  <SelectItem value="Email">Email</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleCreate}>Send</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
