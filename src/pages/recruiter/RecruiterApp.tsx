import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  KanbanSquare,
  Users,
  MessageSquare,
} from "lucide-react";
import RecruiterDashboard from "./RecruiterDashboard";
import JobPostings from "./JobPostings";
import CandidatePipeline from "./CandidatePipeline";
import CandidateProfiles from "./CandidateProfiles";
import OutreachTracker from "./OutreachTracker";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/recruiter" },
  { label: "Jobs", icon: Briefcase, to: "/recruiter/jobs" },
  { label: "Pipeline", icon: KanbanSquare, to: "/recruiter/pipeline" },
  { label: "Candidates", icon: Users, to: "/recruiter/candidates" },
  { label: "Outreach", icon: MessageSquare, to: "/recruiter/outreach" },
];

export default function RecruiterApp() {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-60 flex-shrink-0 bg-gray-900 flex flex-col">
        {/* Logo */}
        <div className="px-5 py-5 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
              <Briefcase className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">nHRMS</p>
              <p className="text-gray-400 text-xs">Recruiter</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/recruiter"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-800 hover:text-white"
                }`
              }
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="px-5 py-4 border-t border-gray-700">
          <p className="text-gray-500 text-xs">Powered by nHRMS</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route index element={<RecruiterDashboard />} />
          <Route path="jobs" element={<JobPostings />} />
          <Route path="pipeline" element={<CandidatePipeline />} />
          <Route path="candidates" element={<CandidateProfiles />} />
          <Route path="outreach" element={<OutreachTracker />} />
          <Route path="*" element={<Navigate to="/recruiter" replace />} />
        </Routes>
      </main>
    </div>
  );
}
