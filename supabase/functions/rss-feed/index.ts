import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Content data for RSS feed
const feedItems = [
  // Research Papers
  {
    title: "Generative AI Applications in HR Operations",
    link: "https://nhrms.com/research/generative-ai-hr",
    description: "An examination of current and emerging applications of generative AI in human resources, including practical implementation frameworks and ROI considerations.",
    pubDate: "2025-01-15",
    category: "HR Technology",
    type: "research"
  },
  {
    title: "Psychological Safety in Virtual Environments",
    link: "https://nhrms.com/research/psychological-safety-virtual",
    description: "Analysis of psychological safety factors in distributed teams and strategies for building inclusive remote work cultures.",
    pubDate: "2025-01-10",
    category: "Workplace Culture",
    type: "research"
  },
  {
    title: "Future of Work: AI-Human Collaboration",
    link: "https://nhrms.com/research/future-work-ai-collaboration",
    description: "Research on emerging models of human-AI collaboration in the workplace and implications for workforce development.",
    pubDate: "2025-01-05",
    category: "Future of Work",
    type: "research"
  },
  {
    title: "Employee Engagement in the Digital Age",
    link: "https://nhrms.com/research/employee-engagement-digital-2024",
    description: "A comprehensive study on the evolution of employee engagement drivers in digitally-transformed workplaces.",
    pubDate: "2024-12-20",
    category: "Employee Engagement",
    type: "research"
  },
  {
    title: "Workforce Planning in the Age of Automation",
    link: "https://nhrms.com/research/workforce-planning-automation",
    description: "Strategic frameworks for workforce planning considering automation trends and skills transformation requirements.",
    pubDate: "2024-12-15",
    category: "Workforce Planning",
    type: "research"
  },
  {
    title: "Employee Experience ROI Framework",
    link: "https://nhrms.com/research/employee-experience-roi",
    description: "A detailed methodology for calculating the return on investment of employee experience initiatives.",
    pubDate: "2024-12-01",
    category: "Employee Experience",
    type: "research"
  },
  {
    title: "HR Technology Landscape 2025",
    link: "https://nhrms.com/research/hr-tech-landscape-2025",
    description: "Comprehensive analysis of the HR technology market, emerging trends, and strategic recommendations for technology adoption.",
    pubDate: "2024-11-20",
    category: "HR Technology",
    type: "research"
  },
  {
    title: "Leadership Development Impact Study",
    link: "https://nhrms.com/research/leadership-development-impact",
    description: "Measuring the business impact of leadership development programs with data-driven frameworks and case studies.",
    pubDate: "2024-11-15",
    category: "Leadership Development",
    type: "research"
  },
  {
    title: "Talent Acquisition Benchmark Study 2024",
    link: "https://nhrms.com/research/talent-acquisition-benchmark-2024",
    description: "Industry benchmarks for time-to-fill, cost-per-hire, and quality of hire across sectors and role levels.",
    pubDate: "2024-11-01",
    category: "Talent Acquisition",
    type: "research"
  },
  // Press Releases
  {
    title: "nHRMS Acquires CareerEdge",
    link: "https://nhrms.com/press-releases/nhrms-acquires-careeredge",
    description: "nHRMS announces the strategic acquisition of CareerEdge, enhancing its comprehensive HR solutions portfolio for job seekers and employers.",
    pubDate: "2024-12-01",
    category: "Press Release",
    type: "press-release"
  },
  {
    title: "Timeless Contribution to Organizational Behavior",
    link: "https://nhrms.com/press-releases/timeless-contribution",
    description: "Exploring the foundational principles of organizational behavior and their continued relevance in modern workplaces.",
    pubDate: "2024-11-15",
    category: "Press Release",
    type: "press-release"
  },
  // Case Studies
  {
    title: "Financial Services HR Analytics Transformation",
    link: "https://nhrms.com/case-studies/financial-hr-analytics",
    description: "How a leading financial services firm transformed their HR analytics capabilities with nHRMS solutions.",
    pubDate: "2024-10-20",
    category: "Case Study",
    type: "case-study"
  },
  {
    title: "HR Tech Platform Launch Success Story",
    link: "https://nhrms.com/case-studies/hr-tech-platform-launch",
    description: "Successful go-to-market strategy and execution for an HR technology platform launch.",
    pubDate: "2024-10-01",
    category: "Case Study",
    type: "case-study"
  },
  // Blog Articles
  {
    title: "The Future of Remote Work Policies",
    link: "https://nhrms.com/blog/1",
    description: "How companies are adapting their remote work policies for the post-pandemic era with flexible and hybrid models.",
    pubDate: "2024-09-15",
    category: "HR Trends",
    type: "blog"
  },
  {
    title: "Building Inclusive Workplace Cultures",
    link: "https://nhrms.com/blog/2",
    description: "Strategies for creating diverse and inclusive workplace cultures that drive innovation and employee satisfaction.",
    pubDate: "2024-09-10",
    category: "Diversity & Inclusion",
    type: "blog"
  },
  {
    title: "HR Technology Trends to Watch",
    link: "https://nhrms.com/blog/3",
    description: "The latest HR technology trends shaping the future of human resources management and workforce optimization.",
    pubDate: "2024-09-01",
    category: "HR Technology",
    type: "blog"
  }
];

function formatRFC822Date(dateString: string): string {
  const date = new Date(dateString);
  return date.toUTCString();
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateRSSFeed(): string {
  const now = new Date().toUTCString();
  
  const items = feedItems
    .sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())
    .map(item => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${formatRFC822Date(item.pubDate)}</pubDate>
      <category>${escapeXml(item.category)}</category>
      <guid isPermaLink="true">${item.link}</guid>
    </item>`)
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>nHRMS - HR Insights &amp; Research</title>
    <link>https://nhrms.com</link>
    <description>Latest HR research, insights, case studies, and industry news from nHRMS - Nurturing Human Resources &amp; Management Systems</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <pubDate>${now}</pubDate>
    <ttl>60</ttl>
    <atom:link href="https://nhrms.com/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>https://nhrms.com/favicon.png</url>
      <title>nHRMS - HR Insights &amp; Research</title>
      <link>https://nhrms.com</link>
    </image>
    <copyright>© 2009-${new Date().getFullYear()} nHRMS Inc. All rights reserved.</copyright>
    <managingEditor>info@nhrms.com (nHRMS Editorial Team)</managingEditor>
    <webMaster>info@nhrms.com (nHRMS Web Team)</webMaster>
    <category>Human Resources</category>
    <category>HR Technology</category>
    <category>Talent Management</category>
    <category>Workforce Analytics</category>
    ${items}
  </channel>
</rss>`;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Generating RSS feed...');
    const rssFeed = generateRSSFeed();
    console.log('RSS feed generated successfully');

    return new Response(rssFeed, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    // Log detailed error server-side for debugging
    console.error('Error generating RSS feed:', error);
    // Return generic error message to client - avoid exposing internal details
    return new Response(JSON.stringify({ error: 'Unable to generate feed. Please try again later.' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
