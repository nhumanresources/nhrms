import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import {
  Search,
  Linkedin,
  MessageSquare,
  Send,
  UserCheck,
  UserX,
  ChevronRight,
  Star,
  MapPin,
  Briefcase,
  GraduationCap,
  Clock,
  CheckCircle2,
  Mail,
  Filter,
  Sparkles,
  RotateCcw,
  AlertCircle,
  CalendarPlus,
  ExternalLink,
  Calendar,
  Video,
  Link2,
  Copy,
} from 'lucide-react';

// ─── Types ───────────────────────────────────────────────────────────────────

interface Candidate {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  experience: string;
  education: string;
  matchScore: number;
  skills: string[];
  status: 'new' | 'shortlisted' | 'messaged' | 'replied' | 'declined' | 'scheduled';
  openToWork: boolean;
  connectionDegree: '1st' | '2nd' | '3rd';
  lastActive: string;
  conversation: Message[];
  scheduledAt?: string;
  meetingType?: 'video' | 'topmate';
}

interface CalendarSlot {
  date: string;
  time: string;
  label: string;
}

interface Message {
  id: string;
  sender: 'recruiter' | 'candidate';
  text: string;
  timestamp: string;
  type: 'inmail' | 'message';
  read: boolean;
}

interface JD {
  id: string;
  title: string;
  company: string;
  location: string;
  experience: string;
  skills: string[];
  description: string;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const MOCK_JDS: JD[] = [
  {
    id: '1',
    title: 'Senior HR Business Partner',
    company: 'nHRMS',
    location: 'Bangalore, India',
    experience: '5–8 years',
    skills: ['HR Strategy', 'Talent Management', 'OD', 'Labour Law', 'HRIS'],
    description: 'We are looking for a strategic HRBP to partner with business leaders across our growing technology and consulting practices.',
  },
  {
    id: '2',
    title: 'Talent Acquisition Specialist',
    company: 'nHRMS',
    location: 'Mumbai, India',
    experience: '3–5 years',
    skills: ['Recruitment', 'LinkedIn Recruiter', 'ATS', 'Sourcing', 'Employer Branding'],
    description: 'Drive end-to-end hiring for mid to senior roles across tech and business functions.',
  },
  {
    id: '3',
    title: 'Compensation & Benefits Manager',
    company: 'nHRMS',
    location: 'Hyderabad, India',
    experience: '6–10 years',
    skills: ['Total Rewards', 'Job Evaluation', 'Pay Benchmarking', 'Benefits Design', 'Excel'],
    description: 'Design and manage our total rewards framework aligned to market benchmarks and business goals.',
  },
];

const INITIAL_CANDIDATES: Candidate[] = [
  {
    id: 'c1',
    name: 'Priya Mehta',
    title: 'HR Business Partner',
    company: 'Infosys',
    location: 'Bangalore, India',
    experience: '6 years',
    education: 'MBA – XLRI',
    matchScore: 94,
    skills: ['HR Strategy', 'Talent Management', 'Labour Law', 'HRIS', 'OD'],
    status: 'new',
    openToWork: true,
    connectionDegree: '2nd',
    lastActive: '2 days ago',
    conversation: [],
  },
  {
    id: 'c2',
    name: 'Arjun Sharma',
    title: 'Senior HRBP',
    company: 'Wipro',
    location: 'Bangalore, India',
    experience: '7 years',
    education: 'MBA – IIM Kozhikode',
    matchScore: 89,
    skills: ['HR Strategy', 'OD', 'Talent Management', 'Stakeholder Management'],
    status: 'new',
    openToWork: false,
    connectionDegree: '2nd',
    lastActive: '1 week ago',
    conversation: [],
  },
  {
    id: 'c3',
    name: 'Sneha Iyer',
    title: 'HRBP – Technology',
    company: 'Accenture',
    location: 'Bangalore, India',
    experience: '5 years',
    education: 'MBA – Symbiosis',
    matchScore: 82,
    skills: ['HRIS', 'Labour Law', 'Talent Management', 'Engagement'],
    status: 'new',
    openToWork: true,
    connectionDegree: '3rd',
    lastActive: '3 days ago',
    conversation: [],
  },
  {
    id: 'c4',
    name: 'Rahul Gupta',
    title: 'People Partner',
    company: 'HCL Technologies',
    location: 'Noida, India',
    experience: '8 years',
    education: 'MBA – MDI Gurgaon',
    matchScore: 78,
    skills: ['HR Strategy', 'OD', 'Labour Law', 'Compensation'],
    status: 'new',
    openToWork: false,
    connectionDegree: '3rd',
    lastActive: '5 days ago',
    conversation: [],
  },
];

const MESSAGE_TEMPLATES = {
  inmail: `Hi {{name}},

I came across your profile and was genuinely impressed by your experience as a {{title}} at {{company}}.

We're building our HR team at nHRMS and have an exciting opening for a {{jdTitle}} based in {{jdLocation}}. Given your background in {{skills}}, I believe you could be a fantastic fit.

I'd love to connect and share more details. Would you be open to a 15-minute call this week?

Looking forward to hearing from you.

Warm regards,
Krishna
nHRMS`,

  message: `Hi {{name}},

Hope you're doing well! I noticed your profile and your work at {{company}} really stood out to me.

We have an opportunity at nHRMS — {{jdTitle}} — that I think aligns well with your expertise. Would you be interested in learning more?

Best,
Krishna`,
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fillTemplate(template: string, candidate: Candidate, jd: JD): string {
  return template
    .replace(/{{name}}/g, candidate.name.split(' ')[0])
    .replace(/{{title}}/g, candidate.title)
    .replace(/{{company}}/g, candidate.company)
    .replace(/{{jdTitle}}/g, jd.title)
    .replace(/{{jdLocation}}/g, jd.location)
    .replace(/{{skills}}/g, candidate.skills.slice(0, 2).join(' and '));
}

function scoreColor(score: number) {
  if (score >= 90) return 'text-green-600 bg-green-50';
  if (score >= 75) return 'text-amber-600 bg-amber-50';
  return 'text-red-600 bg-red-50';
}

function statusBadge(status: Candidate['status']) {
  const map: Record<Candidate['status'], { label: string; className: string }> = {
    new: { label: 'New', className: 'bg-blue-50 text-blue-700' },
    shortlisted: { label: 'Shortlisted', className: 'bg-purple-50 text-purple-700' },
    messaged: { label: 'Messaged', className: 'bg-amber-50 text-amber-700' },
    replied: { label: 'Replied', className: 'bg-green-50 text-green-700' },
    declined: { label: 'Declined', className: 'bg-red-50 text-red-700' },
    scheduled: { label: '📅 Scheduled', className: 'bg-teal-50 text-teal-700' },
  };
  const { label, className } = map[status];
  return <Badge className={`${className} border-0 text-xs font-medium`}>{label}</Badge>;
}

const TOPMATE_URL = 'https://topmate.io/recruiter';

const CALENDAR_SLOTS: CalendarSlot[] = [
  { date: 'Tomorrow', time: '10:00 AM', label: 'Tomorrow, 10:00 AM' },
  { date: 'Tomorrow', time: '3:00 PM', label: 'Tomorrow, 3:00 PM' },
  { date: 'Thursday', time: '11:00 AM', label: 'Thursday, 11:00 AM' },
  { date: 'Thursday', time: '4:00 PM', label: 'Thursday, 4:00 PM' },
  { date: 'Friday', time: '10:30 AM', label: 'Friday, 10:30 AM' },
  { date: 'Friday', time: '2:00 PM', label: 'Friday, 2:00 PM' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function LinkedInRecruiter() {
  const [activeTab, setActiveTab] = useState('search');
  const [selectedJD, setSelectedJD] = useState<JD | null>(null);
  const [jdSearch, setJdSearch] = useState('');
  const [candidates, setCandidates] = useState<Candidate[]>(INITIAL_CANDIDATES);
  const [searching, setSearching] = useState(false);
  const [searchDone, setSearchDone] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [showMessageDialog, setShowMessageDialog] = useState(false);
  const [messageType, setMessageType] = useState<'inmail' | 'message'>('inmail');
  const [messageText, setMessageText] = useState('');
  const [replyText, setReplyText] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [aiGenerating, setAiGenerating] = useState(false);
  const [showScheduleDialog, setShowScheduleDialog] = useState(false);
  const [schedulingCandidate, setSchedulingCandidate] = useState<Candidate | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<CalendarSlot | null>(null);
  const [meetingType, setMeetingType] = useState<'video' | 'topmate'>('topmate');
  const [linkCopied, setLinkCopied] = useState(false);

  const filteredJDs = MOCK_JDS.filter(
    (jd) =>
      jd.title.toLowerCase().includes(jdSearch.toLowerCase()) ||
      jd.skills.some((s) => s.toLowerCase().includes(jdSearch.toLowerCase()))
  );

  const shortlisted = candidates.filter((c) => c.status !== 'new' && c.status !== 'declined');
  const messaged = candidates.filter((c) => ['messaged', 'replied'].includes(c.status));
  const conversations = candidates.filter((c) => c.conversation.length > 0);

  const displayedCandidates = candidates.filter((c) => {
    if (filterStatus === 'all') return true;
    return c.status === filterStatus;
  });

  function handleSelectJD(jd: JD) {
    setSelectedJD(jd);
    setSearchDone(false);
  }

  function handleSearch() {
    if (!selectedJD) return;
    setSearching(true);
    setCandidates(INITIAL_CANDIDATES.map((c) => ({ ...c, status: 'new', conversation: [] })));
    setTimeout(() => {
      setSearching(false);
      setSearchDone(true);
      setActiveTab('shortlist');
      toast({ title: 'Candidates found', description: `${INITIAL_CANDIDATES.length} candidates matched for "${selectedJD.title}"` });
    }, 2000);
  }

  function handleShortlist(id: string) {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: 'shortlisted' } : c))
    );
    toast({ title: 'Shortlisted', description: 'Candidate added to your shortlist.' });
  }

  function handleDecline(id: string) {
    setCandidates((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: 'declined' } : c))
    );
  }

  function openMessage(candidate: Candidate) {
    setSelectedCandidate(candidate);
    const template =
      messageType === 'inmail'
        ? MESSAGE_TEMPLATES.inmail
        : MESSAGE_TEMPLATES.message;
    if (selectedJD) {
      setMessageText(fillTemplate(template, candidate, selectedJD));
    }
    setShowMessageDialog(true);
  }

  function handleTemplateChange(type: 'inmail' | 'message') {
    setMessageType(type);
    if (selectedCandidate && selectedJD) {
      const template = type === 'inmail' ? MESSAGE_TEMPLATES.inmail : MESSAGE_TEMPLATES.message;
      setMessageText(fillTemplate(template, selectedCandidate, selectedJD));
    }
  }

  function handleAIRefine() {
    if (!selectedCandidate || !selectedJD) return;
    setAiGenerating(true);
    setTimeout(() => {
      const refined = `Hi ${selectedCandidate.name.split(' ')[0]},

Your journey from ${selectedCandidate.education} to ${selectedCandidate.title} at ${selectedCandidate.company} is impressive — especially your work with ${selectedCandidate.skills[0]}.

At nHRMS, we're looking for a ${selectedJD.title} who can truly shape how we think about people strategy. This isn't a cookie-cutter role — it's a seat at the table.

${selectedCandidate.openToWork ? "I see you're open to opportunities — great timing!" : "I know you're likely happy where you are, but I wanted to reach out personally."}

Would you be open to a 20-minute conversation? I'd love to share why several people with your profile have found this move transformative.

Warmly,
Krishna | nHRMS`;
      setMessageText(refined);
      setAiGenerating(false);
    }, 1500);
  }

  function handleSendMessage() {
    if (!selectedCandidate || !messageText.trim()) return;
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'recruiter',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: messageType,
      read: true,
    };
    setCandidates((prev) =>
      prev.map((c) =>
        c.id === selectedCandidate.id
          ? { ...c, status: 'messaged', conversation: [...c.conversation, newMessage] }
          : c
      )
    );
    setShowMessageDialog(false);
    setMessageText('');
    toast({ title: `${messageType === 'inmail' ? 'InMail' : 'Message'} sent`, description: `Your message was sent to ${selectedCandidate.name}.` });
    setActiveTab('conversations');
  }

  function handleSendReply(candidateId: string) {
    if (!replyText.trim()) return;
    const reply: Message = {
      id: Date.now().toString(),
      sender: 'recruiter',
      text: replyText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'message',
      read: true,
    };
    // Simulate candidate reply after 1s
    const candidateReply: Message = {
      id: (Date.now() + 1).toString(),
      sender: 'candidate',
      text: "Thanks for following up! I'd be happy to learn more. Can we schedule a call for Thursday or Friday?",
      timestamp: new Date(Date.now() + 60000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'message',
      read: false,
    };
    setCandidates((prev) =>
      prev.map((c) =>
        c.id === candidateId
          ? { ...c, status: 'replied', conversation: [...c.conversation, reply] }
          : c
      )
    );
    setReplyText('');
    setTimeout(() => {
      setCandidates((prev) =>
        prev.map((c) =>
          c.id === candidateId
            ? { ...c, conversation: [...c.conversation, reply, candidateReply] }
            : c
        )
      );
      toast({ title: 'New reply', description: 'A candidate has responded to your message.' });
    }, 2000);
  }

  function openScheduleDialog(candidate: Candidate) {
    setSchedulingCandidate(candidate);
    setSelectedSlot(null);
    setMeetingType('topmate');
    setShowScheduleDialog(true);
  }

  function handleConfirmSchedule() {
    if (!schedulingCandidate || !selectedSlot) return;
    const confirmMsg: Message = {
      id: Date.now().toString(),
      sender: 'recruiter',
      text: meetingType === 'topmate'
        ? `Great! I've booked a slot for you — ${selectedSlot.label}.\n\nYou can confirm and join via my Topmate page:\n${TOPMATE_URL}\n\nLooking forward to speaking with you!`
        : `Confirmed! I've blocked ${selectedSlot.label} on my calendar for our call.\n\nI'll send you a Google Meet invite shortly. Looking forward to it!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'message',
      read: true,
    };
    setCandidates((prev) =>
      prev.map((c) =>
        c.id === schedulingCandidate.id
          ? {
              ...c,
              status: 'scheduled',
              scheduledAt: selectedSlot.label,
              meetingType,
              conversation: [...c.conversation, confirmMsg],
            }
          : c
      )
    );
    if (selectedCandidate?.id === schedulingCandidate.id) {
      setSelectedCandidate((prev) =>
        prev ? { ...prev, status: 'scheduled', scheduledAt: selectedSlot.label, meetingType, conversation: [...prev.conversation, confirmMsg] } : prev
      );
    }
    setShowScheduleDialog(false);
    toast({
      title: '📅 Meeting scheduled',
      description: `${schedulingCandidate.name} — ${selectedSlot.label}`,
    });
  }

  function handleCopyTopmateLink() {
    navigator.clipboard.writeText(TOPMATE_URL).catch(() => {});
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  }

  function handleShareTopmateInChat(candidateId: string) {
    const msg: Message = {
      id: Date.now().toString(),
      sender: 'recruiter',
      text: `Here's a quick link to book a slot directly on my calendar:\n👉 ${TOPMATE_URL}\n\nPick a time that works for you — I'm flexible!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'message',
      read: true,
    };
    setCandidates((prev) =>
      prev.map((c) =>
        c.id === candidateId ? { ...c, conversation: [...c.conversation, msg] } : c
      )
    );
    if (selectedCandidate?.id === candidateId) {
      setSelectedCandidate((prev) =>
        prev ? { ...prev, conversation: [...prev.conversation, msg] } : prev
      );
    }
  }

  // ─── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-[#0077B5] flex items-center justify-center">
          <Linkedin className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">LinkedIn Recruiter Automation</h1>
          <p className="text-sm text-muted-foreground">Find, shortlist, and engage candidates — all in one place</p>
        </div>
        {selectedJD && (
          <Badge className="ml-auto bg-[#0077B5]/10 text-[#0077B5] border-0">
            Active JD: {selectedJD.title}
          </Badge>
        )}
      </div>

      {/* Workflow progress */}
      <div className="flex items-center gap-2 mb-8 text-sm">
        {[
          { label: 'Search JD', icon: Search, tab: 'search', done: !!selectedJD },
          { label: 'Shortlist', icon: UserCheck, tab: 'shortlist', done: shortlisted.length > 0 },
          { label: 'Message / InMail', icon: Mail, tab: 'outreach', done: messaged.length > 0 },
          { label: 'Conversations', icon: MessageSquare, tab: 'conversations', done: conversations.length > 0 },
          { label: 'Schedule', icon: CalendarPlus, tab: 'schedule', done: candidates.some((c) => c.status === 'scheduled') },
        ].map((step, i) => (
          <button
            key={step.tab}
            onClick={() => setActiveTab(step.tab)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-colors ${
              activeTab === step.tab
                ? 'bg-[#0077B5] text-white border-[#0077B5]'
                : step.done
                ? 'bg-green-50 text-green-700 border-green-200'
                : 'bg-white text-muted-foreground border-border'
            }`}
          >
            {step.done && activeTab !== step.tab ? (
              <CheckCircle2 className="w-3.5 h-3.5" />
            ) : (
              <step.icon className="w-3.5 h-3.5" />
            )}
            {step.label}
            {i < 4 && <ChevronRight className="w-3 h-3 ml-1 text-muted-foreground" />}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="hidden" />

        {/* ── SEARCH JD ── */}
        <TabsContent value="search">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Job Descriptions</CardTitle>
                  <CardDescription>Select a JD to search candidates</CardDescription>
                  <div className="relative mt-2">
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search by role or skill..."
                      value={jdSearch}
                      onChange={(e) => setJdSearch(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {filteredJDs.map((jd) => (
                    <button
                      key={jd.id}
                      onClick={() => handleSelectJD(jd)}
                      className={`w-full text-left p-3 rounded-lg border transition-all ${
                        selectedJD?.id === jd.id
                          ? 'border-[#0077B5] bg-[#0077B5]/5'
                          : 'border-border hover:border-[#0077B5]/40 hover:bg-muted/30'
                      }`}
                    >
                      <div className="font-medium text-sm">{jd.title}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {jd.location}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {jd.skills.slice(0, 3).map((s) => (
                          <Badge key={s} variant="secondary" className="text-xs px-1.5 py-0">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              {selectedJD ? (
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle>{selectedJD.title}</CardTitle>
                        <CardDescription className="mt-1 flex items-center gap-3">
                          <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" />{selectedJD.experience}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{selectedJD.location}</span>
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{selectedJD.company}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{selectedJD.description}</p>
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground mb-2">REQUIRED SKILLS</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedJD.skills.map((s) => (
                          <Badge key={s} className="bg-[#0077B5]/10 text-[#0077B5] border-0">{s}</Badge>
                        ))}
                      </div>
                    </div>
                    <Separator />
                    <Button
                      onClick={handleSearch}
                      disabled={searching}
                      className="w-full bg-[#0077B5] hover:bg-[#006097] text-white"
                    >
                      {searching ? (
                        <>
                          <RotateCcw className="w-4 h-4 mr-2 animate-spin" />
                          Searching LinkedIn...
                        </>
                      ) : (
                        <>
                          <Search className="w-4 h-4 mr-2" />
                          Find Matching Candidates
                        </>
                      )}
                    </Button>
                    {searchDone && (
                      <p className="text-center text-sm text-green-600 flex items-center justify-center gap-1">
                        <CheckCircle2 className="w-4 h-4" />
                        {INITIAL_CANDIDATES.length} candidates found — go to Shortlist
                      </p>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-muted-foreground gap-3 border-2 border-dashed rounded-xl">
                  <Linkedin className="w-10 h-10 text-[#0077B5]/30" />
                  <p className="text-sm">Select a Job Description to get started</p>
                </div>
              )}
            </div>
          </div>
        </TabsContent>

        {/* ── SHORTLIST ── */}
        <TabsContent value="shortlist">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-semibold text-gray-900">Matched Candidates</h2>
              <p className="text-sm text-muted-foreground">{candidates.length} results for "{selectedJD?.title || '—'}"</p>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground" />
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-36 h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="shortlisted">Shortlisted</SelectItem>
                  <SelectItem value="messaged">Messaged</SelectItem>
                  <SelectItem value="replied">Replied</SelectItem>
                  <SelectItem value="declined">Declined</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {!searchDone && candidates.every((c) => c.status === 'new') && (
            <div className="flex items-center gap-2 p-3 mb-4 rounded-lg bg-amber-50 text-amber-700 text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              Run a JD search first to find matched candidates.
            </div>
          )}

          <div className="space-y-3">
            {displayedCandidates.map((candidate) => (
              <Card key={candidate.id} className="hover:shadow-sm transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-[#0077B5]/10 text-[#0077B5] font-semibold">
                        {candidate.name.split(' ').map((n) => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-sm">{candidate.name}</span>
                        {candidate.openToWork && (
                          <Badge className="bg-green-50 text-green-700 border-0 text-xs">#OpenToWork</Badge>
                        )}
                        <Badge variant="outline" className="text-xs">{candidate.connectionDegree}</Badge>
                        {statusBadge(candidate.status)}
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">{candidate.title} · {candidate.company}</p>
                      <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground flex-wrap">
                        <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{candidate.location}</span>
                        <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{candidate.experience}</span>
                        <span className="flex items-center gap-1"><GraduationCap className="w-3 h-3" />{candidate.education}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />Active {candidate.lastActive}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {candidate.skills.map((s) => (
                          <Badge key={s} variant="secondary" className="text-xs px-1.5 py-0">{s}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className={`text-sm font-bold px-2 py-1 rounded-md ${scoreColor(candidate.matchScore)}`}>
                        <Star className="w-3 h-3 inline mr-0.5" />
                        {candidate.matchScore}%
                      </div>
                      <div className="flex gap-2">
                        {candidate.status === 'new' && (
                          <>
                            <Button size="sm" variant="outline" className="h-7 text-xs" onClick={() => handleDecline(candidate.id)}>
                              <UserX className="w-3 h-3 mr-1" /> Skip
                            </Button>
                            <Button size="sm" className="h-7 text-xs bg-[#0077B5] hover:bg-[#006097] text-white" onClick={() => handleShortlist(candidate.id)}>
                              <UserCheck className="w-3 h-3 mr-1" /> Shortlist
                            </Button>
                          </>
                        )}
                        {(candidate.status === 'shortlisted') && (
                          <Button size="sm" className="h-7 text-xs bg-[#0077B5] hover:bg-[#006097] text-white" onClick={() => openMessage(candidate)}>
                            <Mail className="w-3 h-3 mr-1" /> Message
                          </Button>
                        )}
                        {(candidate.status === 'messaged' || candidate.status === 'replied') && (
                          <Button size="sm" variant="outline" className="h-7 text-xs" onClick={() => setActiveTab('conversations')}>
                            <MessageSquare className="w-3 h-3 mr-1" /> View Thread
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ── OUTREACH ── */}
        <TabsContent value="outreach">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Shortlisted Candidates</CardTitle>
                <CardDescription>Ready to receive outreach</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {shortlisted.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">No shortlisted candidates yet.</p>
                ) : (
                  shortlisted.map((c) => (
                    <div key={c.id} className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/30">
                      <Avatar className="w-9 h-9">
                        <AvatarFallback className="bg-[#0077B5]/10 text-[#0077B5] text-xs font-semibold">
                          {c.name.split(' ').map((n) => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{c.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{c.title} · {c.company}</p>
                      </div>
                      {statusBadge(c.status)}
                      {c.status === 'shortlisted' && (
                        <Button size="sm" className="h-7 text-xs bg-[#0077B5] hover:bg-[#006097] text-white" onClick={() => openMessage(c)}>
                          <Send className="w-3 h-3 mr-1" /> Send
                        </Button>
                      )}
                    </div>
                  ))
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Outreach Stats</CardTitle>
                <CardDescription>This campaign's performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Shortlisted', value: shortlisted.length, color: 'text-purple-600' },
                    { label: 'Messaged', value: messaged.length, color: 'text-amber-600' },
                    { label: 'Replied', value: candidates.filter((c) => c.status === 'replied').length, color: 'text-green-600' },
                    { label: 'Reply Rate', value: messaged.length ? `${Math.round((candidates.filter((c) => c.status === 'replied').length / messaged.length) * 100)}%` : '—', color: 'text-blue-600' },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-lg bg-muted/30 text-center">
                      <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* ── CONVERSATIONS ── */}
        <TabsContent value="conversations">
          {conversations.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-muted-foreground gap-3 border-2 border-dashed rounded-xl">
              <MessageSquare className="w-10 h-10 opacity-20" />
              <p className="text-sm">No conversations yet. Send your first message or InMail.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
              {/* Thread list */}
              <Card className="lg:col-span-1 flex flex-col">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Threads</CardTitle>
                </CardHeader>
                <ScrollArea className="flex-1">
                  <div className="px-4 pb-4 space-y-2">
                    {conversations.map((c) => {
                      const last = c.conversation[c.conversation.length - 1];
                      return (
                        <button
                          key={c.id}
                          onClick={() => setSelectedCandidate(c)}
                          className={`w-full text-left p-3 rounded-lg border transition-all ${
                            selectedCandidate?.id === c.id ? 'border-[#0077B5] bg-[#0077B5]/5' : 'hover:bg-muted/30'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback className="bg-[#0077B5]/10 text-[#0077B5] text-xs">
                                {c.name.split(' ').map((n) => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <p className="text-sm font-medium truncate">{c.name}</p>
                                {statusBadge(c.status)}
                              </div>
                              <p className="text-xs text-muted-foreground truncate mt-0.5">
                                {last?.sender === 'candidate' ? '↩ ' : ''}{last?.text.slice(0, 50)}...
                              </p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </ScrollArea>
              </Card>

              {/* Message thread */}
              <Card className="lg:col-span-2 flex flex-col">
                {selectedCandidate && selectedCandidate.conversation.length > 0 ? (
                  <>
                    <CardHeader className="pb-3 border-b">
                      <div className="flex items-center gap-3 flex-wrap">
                        <Avatar className="w-9 h-9">
                          <AvatarFallback className="bg-[#0077B5]/10 text-[#0077B5] text-xs font-semibold">
                            {selectedCandidate.name.split(' ').map((n) => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm">{selectedCandidate.name}</p>
                          <p className="text-xs text-muted-foreground">{selectedCandidate.title} · {selectedCandidate.company}</p>
                          {selectedCandidate.scheduledAt && (
                            <p className="text-xs text-teal-600 mt-0.5 flex items-center gap-1">
                              <Calendar className="w-3 h-3" /> {selectedCandidate.scheduledAt}
                            </p>
                          )}
                        </div>
                        {statusBadge(selectedCandidate.status)}
                        <div className="flex gap-1 ml-auto">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-7 text-xs"
                            onClick={() => handleShareTopmateInChat(selectedCandidate.id)}
                            title="Share Topmate link in chat"
                          >
                            <Link2 className="w-3 h-3 mr-1" /> Topmate
                          </Button>
                          {selectedCandidate.status !== 'scheduled' && (
                            <Button
                              size="sm"
                              className="h-7 text-xs bg-teal-600 hover:bg-teal-700 text-white"
                              onClick={() => openScheduleDialog(selectedCandidate)}
                            >
                              <CalendarPlus className="w-3 h-3 mr-1" /> Schedule
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <ScrollArea className="flex-1 p-4">
                      <div className="space-y-4">
                        {selectedCandidate.conversation.map((msg) => (
                          <div key={msg.id} className={`flex ${msg.sender === 'recruiter' ? 'justify-end' : 'justify-start'}`}>
                            <div
                              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-wrap ${
                                msg.sender === 'recruiter'
                                  ? 'bg-[#0077B5] text-white rounded-tr-sm'
                                  : 'bg-muted text-foreground rounded-tl-sm'
                              }`}
                            >
                              {msg.text}
                              <div className={`text-xs mt-1 ${msg.sender === 'recruiter' ? 'text-white/70' : 'text-muted-foreground'}`}>
                                {msg.timestamp} · {msg.type === 'inmail' ? 'InMail' : 'Message'}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <div className="p-4 border-t">
                      <div className="flex gap-2">
                        <Textarea
                          placeholder="Type a reply..."
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          className="min-h-[60px] resize-none"
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && e.metaKey) handleSendReply(selectedCandidate.id);
                          }}
                        />
                        <Button
                          className="bg-[#0077B5] hover:bg-[#006097] text-white self-end"
                          onClick={() => handleSendReply(selectedCandidate.id)}
                          disabled={!replyText.trim()}
                        >
                          <Send className="w-4 h-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">⌘ + Enter to send</p>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex items-center justify-center text-muted-foreground text-sm">
                    Select a conversation
                  </div>
                )}
              </Card>
            </div>
          )}
        </TabsContent>
      </Tabs>

        {/* ── SCHEDULE ── */}
        <TabsContent value="schedule">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Topmate card */}
            <Card className="border-teal-200 bg-teal-50/30">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Video className="w-4 h-4 text-teal-600" /> Topmate Booking
                </CardTitle>
                <CardDescription>Share your Topmate link for candidates to self-schedule</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 p-3 rounded-lg bg-white border text-sm font-mono text-teal-700 break-all">
                  {TOPMATE_URL}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" onClick={handleCopyTopmateLink}>
                    {linkCopied ? <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-green-600" /> : <Copy className="w-3.5 h-3.5 mr-1.5" />}
                    {linkCopied ? 'Copied!' : 'Copy Link'}
                  </Button>
                  <Button size="sm" className="flex-1 bg-teal-600 hover:bg-teal-700 text-white" asChild>
                    <a href={TOPMATE_URL} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" /> Open
                    </a>
                  </Button>
                </div>
                <Separator />
                <p className="text-xs text-muted-foreground">Send this link in any conversation to let candidates pick their own slot — no back-and-forth needed.</p>
              </CardContent>
            </Card>

            {/* Calendar slots */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Available Slots This Week
                </CardTitle>
                <CardDescription>Click a slot to block it for a candidate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  {CALENDAR_SLOTS.map((slot) => {
                    const booked = candidates.find((c) => c.scheduledAt === slot.label);
                    return (
                      <div
                        key={slot.label}
                        className={`p-3 rounded-lg border text-sm ${
                          booked
                            ? 'bg-teal-50 border-teal-300 text-teal-700'
                            : 'bg-white hover:border-[#0077B5]/60 hover:bg-[#0077B5]/5 cursor-pointer'
                        }`}
                      >
                        <p className="font-medium">{slot.date}</p>
                        <p className="text-xs text-muted-foreground">{slot.time}</p>
                        {booked ? (
                          <p className="text-xs text-teal-600 mt-1 font-medium truncate">📅 {booked.name}</p>
                        ) : (
                          <p className="text-xs text-muted-foreground mt-1">Available</p>
                        )}
                      </div>
                    );
                  })}
                </div>

                <Separator className="mb-4" />

                <div>
                  <p className="text-sm font-semibold mb-3">Scheduled Interviews</p>
                  {candidates.filter((c) => c.status === 'scheduled').length === 0 ? (
                    <p className="text-sm text-muted-foreground">No interviews scheduled yet. Schedule from the Conversations tab.</p>
                  ) : (
                    <div className="space-y-2">
                      {candidates.filter((c) => c.status === 'scheduled').map((c) => (
                        <div key={c.id} className="flex items-center gap-3 p-3 rounded-lg border bg-teal-50/50">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-teal-100 text-teal-700 text-xs font-semibold">
                              {c.name.split(' ').map((n) => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{c.name}</p>
                            <p className="text-xs text-muted-foreground">{c.title} · {c.company}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-teal-700 font-medium flex items-center gap-1">
                              <Calendar className="w-3 h-3" />{c.scheduledAt}
                            </p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {c.meetingType === 'topmate' ? 'via Topmate' : 'Video Call'}
                            </p>
                          </div>
                          <Button size="sm" variant="outline" className="h-7 text-xs ml-2" onClick={() => openScheduleDialog(c)}>
                            Reschedule
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Schedule Dialog */}
      <Dialog open={showScheduleDialog} onOpenChange={setShowScheduleDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CalendarPlus className="w-5 h-5 text-teal-600" />
              Schedule Interview — {schedulingCandidate?.name}
            </DialogTitle>
            <DialogDescription>{schedulingCandidate?.title} · {schedulingCandidate?.company}</DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Meeting type */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2">MEETING TYPE</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setMeetingType('topmate')}
                  className={`flex items-center gap-2 p-3 rounded-lg border text-sm transition-all ${
                    meetingType === 'topmate' ? 'border-teal-500 bg-teal-50 text-teal-700' : 'hover:border-muted-foreground/30'
                  }`}
                >
                  <Video className="w-4 h-4" />
                  <div className="text-left">
                    <p className="font-medium text-xs">Topmate</p>
                    <p className="text-xs text-muted-foreground">Self-book link</p>
                  </div>
                  {meetingType === 'topmate' && <CheckCircle2 className="w-3.5 h-3.5 ml-auto" />}
                </button>
                <button
                  onClick={() => setMeetingType('video')}
                  className={`flex items-center gap-2 p-3 rounded-lg border text-sm transition-all ${
                    meetingType === 'video' ? 'border-teal-500 bg-teal-50 text-teal-700' : 'hover:border-muted-foreground/30'
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <div className="text-left">
                    <p className="font-medium text-xs">Video Call</p>
                    <p className="text-xs text-muted-foreground">Google Meet</p>
                  </div>
                  {meetingType === 'video' && <CheckCircle2 className="w-3.5 h-3.5 ml-auto" />}
                </button>
              </div>
            </div>

            {/* Slot picker */}
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2">SELECT A SLOT</p>
              <div className="grid grid-cols-2 gap-2">
                {CALENDAR_SLOTS.map((slot) => {
                  const takenBy = candidates.find((c) => c.scheduledAt === slot.label && c.id !== schedulingCandidate?.id);
                  return (
                    <button
                      key={slot.label}
                      disabled={!!takenBy}
                      onClick={() => setSelectedSlot(slot)}
                      className={`p-2.5 rounded-lg border text-left text-sm transition-all ${
                        takenBy
                          ? 'opacity-40 cursor-not-allowed bg-muted'
                          : selectedSlot?.label === slot.label
                          ? 'border-teal-500 bg-teal-50 text-teal-700'
                          : 'hover:border-teal-400 hover:bg-teal-50/50'
                      }`}
                    >
                      <p className="font-medium text-xs">{slot.date}</p>
                      <p className="text-xs text-muted-foreground">{slot.time}</p>
                      {takenBy && <p className="text-xs text-red-500 mt-0.5">Taken</p>}
                    </button>
                  );
                })}
              </div>
            </div>

            {selectedSlot && meetingType === 'topmate' && (
              <div className="p-3 rounded-lg bg-teal-50 border border-teal-200 text-xs text-teal-700">
                The Topmate booking link <strong>{TOPMATE_URL}</strong> will be sent in the conversation thread.
              </div>
            )}

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowScheduleDialog(false)}>Cancel</Button>
              <Button
                className="bg-teal-600 hover:bg-teal-700 text-white"
                disabled={!selectedSlot}
                onClick={handleConfirmSchedule}
              >
                <CalendarPlus className="w-4 h-4 mr-2" />
                Confirm & Block Slot
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Message / InMail Dialog */}
      <Dialog open={showMessageDialog} onOpenChange={setShowMessageDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-[#0077B5]" />
              Compose Outreach — {selectedCandidate?.name}
            </DialogTitle>
            <DialogDescription>
              {selectedCandidate?.title} · {selectedCandidate?.company}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={messageType === 'inmail' ? 'default' : 'outline'}
                className={messageType === 'inmail' ? 'bg-[#0077B5] hover:bg-[#006097] text-white' : ''}
                onClick={() => handleTemplateChange('inmail')}
              >
                <Mail className="w-3.5 h-3.5 mr-1.5" /> InMail
              </Button>
              <Button
                size="sm"
                variant={messageType === 'message' ? 'default' : 'outline'}
                className={messageType === 'message' ? 'bg-[#0077B5] hover:bg-[#006097] text-white' : ''}
                onClick={() => handleTemplateChange('message')}
              >
                <MessageSquare className="w-3.5 h-3.5 mr-1.5" /> Message
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="ml-auto"
                onClick={handleAIRefine}
                disabled={aiGenerating}
              >
                {aiGenerating ? (
                  <RotateCcw className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                ) : (
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-purple-500" />
                )}
                AI Refine
              </Button>
            </div>

            <Textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              className="min-h-[280px] text-sm font-mono"
            />

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowMessageDialog(false)}>Cancel</Button>
              <Button
                className="bg-[#0077B5] hover:bg-[#006097] text-white"
                onClick={handleSendMessage}
                disabled={!messageText.trim()}
              >
                <Send className="w-4 h-4 mr-2" />
                Send {messageType === 'inmail' ? 'InMail' : 'Message'}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
