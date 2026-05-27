import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";

type Stage = "Applied" | "Screened" | "Interview" | "Offer" | "Hired";

interface Candidate {
  id: number;
  name: string;
  role: string;
  initials: string;
}

type Pipeline = Record<Stage, Candidate[]>;

const stages: Stage[] = ["Applied", "Screened", "Interview", "Offer", "Hired"];

const stageColors: Record<Stage, string> = {
  Applied: "bg-gray-100 text-gray-700 border-gray-300",
  Screened: "bg-blue-100 text-blue-700 border-blue-300",
  Interview: "bg-purple-100 text-purple-700 border-purple-300",
  Offer: "bg-yellow-100 text-yellow-700 border-yellow-300",
  Hired: "bg-green-100 text-green-700 border-green-300",
};

const stageHeaderColors: Record<Stage, string> = {
  Applied: "bg-gray-500",
  Screened: "bg-blue-500",
  Interview: "bg-purple-500",
  Offer: "bg-yellow-500",
  Hired: "bg-green-500",
};

const initialPipeline: Pipeline = {
  Applied: [
    { id: 1, name: "Rahul Mehta", role: "Senior Engineer", initials: "RM" },
    { id: 2, name: "Anita Desai", role: "Product Manager", initials: "AD" },
    { id: 3, name: "Vijay Kumar", role: "Data Analyst", initials: "VK" },
  ],
  Screened: [
    { id: 4, name: "Pooja Iyer", role: "UX Designer", initials: "PI" },
    { id: 5, name: "Arjun Nair", role: "Senior Engineer", initials: "AN" },
  ],
  Interview: [
    { id: 6, name: "Sneha Rao", role: "DevOps Lead", initials: "SR" },
    { id: 7, name: "Karan Sharma", role: "Product Manager", initials: "KS" },
  ],
  Offer: [
    { id: 8, name: "Deepa Patel", role: "UX Designer", initials: "DP" },
    { id: 9, name: "Nikhil Joshi", role: "Senior Engineer", initials: "NJ" },
  ],
  Hired: [
    { id: 10, name: "Meera Singh", role: "Data Analyst", initials: "MS" },
    { id: 11, name: "Rohan Verma", role: "DevOps Lead", initials: "RV" },
  ],
};

export default function CandidatePipeline() {
  const [pipeline, setPipeline] = useState<Pipeline>(initialPipeline);

  const moveToNext = (candidateId: number, currentStage: Stage) => {
    const currentIndex = stages.indexOf(currentStage);
    if (currentIndex >= stages.length - 1) return;
    const nextStage = stages[currentIndex + 1];

    setPipeline((prev) => {
      const candidate = prev[currentStage].find((c) => c.id === candidateId);
      if (!candidate) return prev;
      return {
        ...prev,
        [currentStage]: prev[currentStage].filter((c) => c.id !== candidateId),
        [nextStage]: [...prev[nextStage], candidate],
      };
    });
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-gray-900">Candidate Pipeline</h1>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {stages.map((stage) => (
          <div key={stage} className="flex-shrink-0 w-64">
            <div className={`flex items-center justify-between px-3 py-2 rounded-t-lg text-white ${stageHeaderColors[stage]}`}>
              <span className="font-semibold text-sm">{stage}</span>
              <span className="bg-white bg-opacity-30 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {pipeline[stage].length}
              </span>
            </div>
            <div className={`min-h-64 border-2 rounded-b-lg p-2 space-y-2 ${stageColors[stage]}`}>
              {pipeline[stage].map((candidate) => (
                <Card key={candidate.id} className="shadow-sm">
                  <CardContent className="p-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs bg-blue-100 text-blue-700">
                          {candidate.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-gray-900 leading-tight">{candidate.name}</p>
                        <p className="text-xs text-gray-500">{candidate.role}</p>
                      </div>
                    </div>
                    {stage !== "Hired" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full text-xs h-7"
                        onClick={() => moveToNext(candidate.id, stage)}
                      >
                        Move to Next <ChevronRight className="w-3 h-3 ml-1" />
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
              {pipeline[stage].length === 0 && (
                <p className="text-xs text-center text-gray-400 py-4">No candidates</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
