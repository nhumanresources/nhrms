import { Link } from "react-router-dom";
import { BookOpen, Briefcase } from "lucide-react";
import { Linkedin, Twitter, Facebook } from "lucide-react";

export default function NHRMSAcquiresCareeredge() {
  // Helper to get current page URL
  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://nhrms.com/press-releases/nhrms-acquires-careeredge";

  const title =
    "nHRMS Acquires CareerEdge to Empower Job Seekers and Expand HR Solutions";

  const summary =
    "nHRMS acquires CareerEdge, expanding solutions for job seekers and employers. Learn more in the official press release.";

  const linkedinShare = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
    currentUrl
  )}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(
    summary
  )}`;

  const twitterShare = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    currentUrl
  )}&text=${encodeURIComponent(title)}`;

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl
  )}`;

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-primary">
          nHRMS Acquires CareerEdge to Empower Job Seekers and Expand HR Solutions
        </h1>
        <p className="text-muted-foreground text-lg">
          <span className="font-medium">St. Louis, MO & Hyderabad, India – April 23, 2025</span>
        </p>
      </div>

      {/* Acquisition Overview */}
      <div className="bg-background/60 rounded-xl border p-6 shadow mb-10">
        <h2 className="text-2xl font-semibold mb-3 flex items-center">
          <LinkIcon className="w-6 h-6 mr-2 text-primary" />
          Press Release Summary
        </h2>
        <p className="mb-4">
          <span className="font-bold text-primary">nHRMS Inc.</span>, a leading provider of strategic HR and people management solutions, has officially acquired <a href="https://careeredge.nhrms.com" className="underline hover:text-blue-700" target="_blank" rel="noopener noreferrer">CareerEdge</a>, a dynamic platform that empowers job seekers through AI-driven guidance and resources. This strategic acquisition marks a significant milestone in nHRMS's ongoing mission to bridge the gap between top talent and market opportunities, while providing organizations with unparalleled HR support and innovation.
        </p>
      </div>

      {/* Detailed Info */}
      <div>
        <h3 className="text-xl font-semibold mb-2">About the Acquisition</h3>
        <p className="mb-4">
          For over a decade, <span className="font-semibold">nHRMS</span> has set the benchmark in workforce solutions, delivering executive search, talent acquisition, HR advisory, technology, and learning services to clients across the globe. The acquisition of CareerEdge brings a new dimension to the nHRMS ecosystem, focusing on individual job seekers and supporting them on every step of their career journey.
        </p>

        <p className="mb-4">
          <span className="font-semibold">CareerEdge</span> is an interactive, AI-assisted assistant that helps job seekers navigate their job search, offering personalized insights, resume tips, interview guidance, and up-to-date job market intelligence. As part of the nHRMS family, CareerEdge will integrate its intuitive technology into nHRMS’s robust HRMS offerings, making it easier for organizations to connect with top talent and for candidates to unlock new opportunities.
        </p>

        <ul className="list-disc pl-5 mb-4 text-muted-foreground">
          <li>
            <strong>For Job Seekers:</strong> CareerEdge remains <span className="font-bold">free to use</span> and now benefits from additional support and technology upgrades from nHRMS.
          </li>
          <li>
            <strong>For Employers:</strong> Enhanced access to a wider, better-prepared pool of candidates and seamless integration between CareerEdge and nHRMS HR solutions.
          </li>
          <li>
            <strong>For Clients:</strong> A more comprehensive suite of services spanning HR strategy, recruitment, and talent enablement.
          </li>
        </ul>

        <blockquote className="border-l-4 border-primary pl-4 italic mb-4 text-muted-foreground">
          "This acquisition unites nHRMS's vision for organizational excellence with CareerEdge's mission to guide and empower individuals, creating an impactful synergy for the modern workforce."
          <br />
          <span className="block mt-2 font-medium">- Sai Varma, Partner, nHRMS Inc.</span>
        </blockquote>

        <h3 className="text-lg font-semibold mb-2">Next Steps</h3>
        <p className="mb-4">
          As integration progresses, nHRMS will offer cross-platform services to both employers and job seekers, fostering a collaborative and innovative job market experience. Follow updates at <a href="https://nhrms.com/blog" className="underline hover:text-primary">nHRMS Blog</a> or by subscribing to our newsletter.
        </p>

        <div className="bg-slate-100 text-slate-700 rounded p-4 mt-6 flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-primary" />
          <span>
            <a href="https://careeredge.nhrms.com" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-primary">
              Visit CareerEdge – Your assistant to Job Seekers
            </a>
          </span>
        </div>
      </div>

      {/* Social Sharing Block */}
      <div className="mt-8 mb-6">
        <h3 className="font-semibold mb-3 text-lg">Share this Press Release</h3>
        <div className="flex gap-4">
          <a
            href={linkedinShare}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            className="hover:bg-blue-100 rounded-full p-2 transition"
          >
            <Linkedin className="w-6 h-6 text-blue-700" />
          </a>
          <a
            href={twitterShare}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Twitter"
            className="hover:bg-blue-100 rounded-full p-2 transition"
          >
            <Twitter className="w-6 h-6 text-blue-500" />
          </a>
          <a
            href={facebookShare}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            className="hover:bg-blue-100 rounded-full p-2 transition"
          >
            <Facebook className="w-6 h-6 text-blue-600" />
          </a>
        </div>
      </div>

      {/* Contact Block */}
      <div className="mt-10 border-t pt-6">
        <h3 className="font-semibold mb-2">Media Contact</h3>
        <div>
          <span className="block">nHRMS Inc. Corporate Communications</span>
          <a className="block underline hover:text-primary" href="mailto:info@nhrms.com">
            info@nhrms.com
          </a>
          <a className="block underline hover:text-primary" href="tel:+13143018402">
            +1 (314) 301-8402
          </a>
        </div>
      </div>

      <div className="mt-8">
        <Link to="/" className="text-primary underline hover:text-primary/80 font-medium flex items-center">
          <Briefcase className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
