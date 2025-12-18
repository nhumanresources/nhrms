
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialShareButtons from '@/components/SocialShareButtons';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { hrNews } from '@/data/newsItems';

export default function BlogArticle() {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState(hrNews.find(item => item.id === Number(id)));
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find the article based on the ID
    const currentArticle = hrNews.find(item => item.id === Number(id));
    setArticle(currentArticle);
    
    // Set page title
    if (currentArticle) {
      document.title = `${currentArticle.title} | nHRMS Blog`;
    } else {
      document.title = "Article Not Found | nHRMS Blog";
    }
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24 md:pt-28">
          <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="text-center py-12">
              <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
              <p className="mb-6">The article you're looking for doesn't exist or has been moved.</p>
              <Button asChild>
                <Link to="/blog">Return to Blog</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Content mapping for each blog post
  const blogContents = {
    1: {
      content: `
        <p>
          In today's fast-paced business environment, effective talent acquisition strategies are more crucial than ever. Small and medium enterprises (SMEs) face unique challenges in attracting, developing, and retaining top talent in an increasingly competitive market.
        </p>
        
        <h2>Key Insights</h2>
        <p>
          Our research shows that 78% of SMEs struggle with creating effective employer branding strategies, despite this being one of the most cost-effective methods for attracting top talent. Companies that invest in developing a strong employer brand see a 50% reduction in cost-per-hire and a 28% reduction in turnover.
        </p>
        
        <h3>Industry Implications</h3>
        <p>
          The talent acquisition landscape has been transformed by digital technologies. Organizations that leverage AI-powered recruitment tools and data analytics are seeing significant improvements in the quality of hires and efficiency of their recruitment processes. However, our study found that only 34% of SMEs are utilizing these technologies effectively.
        </p>
        
        <blockquote>
          "Strategic HR management is crucial for organizations looking to thrive in today's competitive landscape. Businesses that invest in their talent acquisition processes see higher retention rates and better business outcomes."
        </blockquote>
        
        <p>
          Another significant finding is the importance of creating a compelling candidate experience. 68% of successful candidates say that their experience during the recruitment process influenced their decision to accept a job offer. This highlights the need for SMEs to review and enhance their recruitment journeys.
        </p>
        
        <h3>Moving Forward</h3>
        <p>
          To remain competitive, SMEs should consider the following strategies:
        </p>
        <ul>
          <li>Develop a strong employer brand that authentically communicates your company culture and values</li>
          <li>Implement digital recruitment tools that can streamline processes and improve candidate matching</li>
          <li>Create an exceptional candidate experience from initial contact through onboarding</li>
          <li>Build a talent pipeline and nurture relationships with potential future employees</li>
          <li>Invest in upskilling and reskilling existing employees to address skills gaps</li>
        </ul>
        <p>
          By implementing these strategies, SMEs can enhance their competitiveness in the talent market without necessarily requiring the resources of larger organizations.
        </p>
      `
    },
    2: {
      content: `
        <p>
          Employee engagement remains a critical factor in organizational success, but the methods for measuring and improving it have evolved dramatically in the digital era. This article explores how SMEs can effectively track and enhance employee engagement in today's hybrid and remote work environments.
        </p>
        
        <h2>The Changing Landscape of Employee Engagement</h2>
        <p>
          Traditional annual employee surveys no longer provide the real-time insights needed in today's fast-changing workplace. Our research indicates that organizations using continuous listening strategies through digital platforms are 2.5 times more likely to engage and retain talent effectively.
        </p>
        
        <h3>Digital Tools Transforming Engagement</h3>
        <p>
          The emergence of pulse surveys, AI-driven sentiment analysis, and digital collaboration metrics has revolutionized how organizations understand employee engagement. These tools provide more frequent, honest feedback and actionable insights that traditional methods often miss.
        </p>
        
        <blockquote>
          "Companies that implement digital engagement strategies report a 22% increase in productivity and a 31% reduction in voluntary turnover compared to those using traditional methods alone."
        </blockquote>
        
        <h3>Key Elements of Digital Engagement</h3>
        <p>
          Successful digital engagement strategies typically include:
        </p>
        <ul>
          <li>Regular pulse surveys (bi-weekly or monthly)</li>
          <li>Digital recognition platforms</li>
          <li>Virtual team-building activities</li>
          <li>AI-assisted performance feedback</li>
          <li>Digital wellness programs</li>
        </ul>
        
        <h3>Implementation Strategies for SMEs</h3>
        <p>
          While enterprise-level solutions exist, SMEs can implement effective digital engagement strategies without significant investment by:
        </p>
        <ol>
          <li>Starting with free or low-cost survey tools</li>
          <li>Focusing on key engagement drivers specific to their workforce</li>
          <li>Creating dedicated communication channels for feedback</li>
          <li>Implementing transparent action plans based on collected data</li>
          <li>Measuring improvements in retention, productivity, and satisfaction</li>
        </ol>
        
        <p>
          The most effective engagement strategies combine digital tools with meaningful human connection. Organizations that balance technology with personal touchpoints see the highest levels of sustainable engagement.
        </p>
        
        <h3>Looking Ahead</h3>
        <p>
          As workplace technologies continue to evolve, the most successful organizations will be those that adapt their engagement strategies accordingly while maintaining focus on the fundamental human needs of purpose, autonomy, and connection. For SMEs, this represents an opportunity to create agile, responsive cultures that can outperform larger competitors in the race for talent.
        </p>
      `
    },
    3: {
      content: `
        <p>
          The integration of generative AI into HR functions represents one of the most significant transformations in workforce management in decades. For small and medium enterprises, this technology offers both opportunities and challenges that must be carefully navigated.
        </p>
        
        <h2>Current Applications of Generative AI in HR</h2>
        <p>
          Our research identifies several key areas where generative AI is already delivering value for SMEs:
        </p>
        <ul>
          <li><strong>Recruitment automation:</strong> AI-powered tools can draft job descriptions, screen resumes, and even conduct initial candidate assessments.</li>
          <li><strong>Personalized learning:</strong> Generative AI can create customized training content and learning paths for employees.</li>
          <li><strong>Employee experience:</strong> AI chatbots and virtual assistants provide immediate responses to employee queries.</li>
          <li><strong>Performance management:</strong> AI tools can help draft performance reviews and provide objective insights.</li>
        </ul>
        
        <h3>The Productivity Paradox</h3>
        <p>
          While 67% of HR professionals report significant time savings from generative AI tools, there's an important caveat: these tools are most effective when they augment human capabilities rather than replace them. Organizations seeing the greatest benefits are those where HR professionals collaborate with AI, using their expertise to refine and contextualize AI-generated outputs.
        </p>
        
        <blockquote>
          "Generative AI doesn't replace human judgment in HR—it elevates it by handling routine tasks and providing decision support, allowing HR professionals to focus on strategic, high-touch aspects of people management."
        </blockquote>
        
        <h3>Implementation Considerations for SMEs</h3>
        <p>
          Before implementing generative AI tools, SMEs should consider:
        </p>
        <ol>
          <li><strong>Data privacy and security:</strong> Ensure that AI tools comply with relevant data protection regulations.</li>
          <li><strong>Ethical guardrails:</strong> Establish clear policies on appropriate use of AI in HR processes.</li>
          <li><strong>Skills development:</strong> Train HR staff on effective collaboration with AI tools.</li>
          <li><strong>Integration capabilities:</strong> Select tools that integrate well with existing HR systems.</li>
          <li><strong>ROI measurement:</strong> Define clear metrics to evaluate the impact of AI implementation.</li>
        </ol>
        
        <h3>Future Trajectory</h3>
        <p>
          Looking ahead, we anticipate several developments in the generative AI landscape for HR:
        </p>
        <ul>
          <li>Increasing personalization of employee experiences through AI</li>
          <li>More sophisticated emotion and sentiment analysis capabilities</li>
          <li>Enhanced predictive analytics for workforce planning</li>
          <li>Greater transparency in AI decision-making processes</li>
          <li>Emergence of industry-specific AI solutions for specialized sectors</li>
        </ul>
        
        <p>
          For SMEs, the strategic adoption of generative AI represents a significant opportunity to enhance HR capabilities without proportionately increasing headcount or costs. Those that approach implementation thoughtfully—prioritizing ethical considerations and human-AI collaboration—stand to gain considerable competitive advantages in talent management.
        </p>
      `
    },
    4: {
      content: `
        <p>
          Workforce planning has traditionally been a challenging area for SMEs, often relegated to larger enterprises with dedicated strategic resources. However, with the accelerating pace of automation and technological disruption, effective workforce planning has become essential for organizations of all sizes.
        </p>
        
        <h2>The Automation Imperative</h2>
        <p>
          Our research indicates that 41% of work activities across all industries could be automated using current technologies. For SMEs, this presents both a threat and an opportunity. Those that proactively plan for this transition can gain significant competitive advantages, while those that react only when disruption occurs may struggle to adapt.
        </p>
        
        <h3>Strategic Workforce Planning in the Age of Automation</h3>
        <p>
          Effective workforce planning in today's environment requires a fundamental shift from traditional approaches. Rather than simple headcount forecasting, organizations need to adopt a skills-based approach that considers:
        </p>
        <ul>
          <li>Which roles and tasks are likely to be automated within the next 3-5 years</li>
          <li>What new roles will emerge as a result of technological adoption</li>
          <li>How existing employees can be upskilled or reskilled for future needs</li>
          <li>Where critical skill gaps exist that may require external hiring</li>
          <li>How work can be redesigned to optimize human-machine collaboration</li>
        </ul>
        
        <blockquote>
          "The most successful organizations in our study didn't view automation as a cost-cutting exercise but as an opportunity to enhance human capabilities and redirect talent toward higher-value activities."
        </blockquote>
        
        <h3>Practical Approaches for SMEs</h3>
        <p>
          For resource-constrained SMEs, we recommend a practical approach to automation-aware workforce planning:
        </p>
        <ol>
          <li><strong>Task-level analysis:</strong> Break down key roles into component tasks and identify automation potential.</li>
          <li><strong>Skills inventory:</strong> Create a comprehensive inventory of existing skills in your organization.</li>
          <li><strong>Future skills mapping:</strong> Identify the skills that will be needed as automation increases.</li>
          <li><strong>Build/buy/borrow decisions:</strong> For each skill gap, determine whether to develop existing talent, hire new talent, or use flexible workforce solutions.</li>
          <li><strong>Pilot implementations:</strong> Test automation solutions in contained environments before scaling.</li>
        </ol>
        
        <h3>The Human Element</h3>
        <p>
          Perhaps the most critical finding from our research is the importance of change management and communication. Organizations that openly discussed automation plans with their workforce, involved employees in redesigning roles, and provided clear pathways for skill development reported significantly higher success rates in their transformation efforts.
        </p>
        
        <h3>Looking Ahead</h3>
        <p>
          As automation technologies continue to evolve, workforce planning will increasingly become a continuous, dynamic process rather than a periodic exercise. SMEs that develop capabilities for ongoing workforce adaptation will be best positioned to thrive in an environment of accelerating technological change.
        </p>
        
        <p>
          By embracing strategic workforce planning that accounts for automation, SMEs can not only mitigate disruption risks but can also unlock new opportunities for innovation, employee development, and competitive advantage.
        </p>
      `
    },
    5: {
      content: `
        <p>
          Leadership development has traditionally been focused on individual growth, but our latest research reveals that its most powerful impact occurs when aligned with broader organizational objectives. For SMEs seeking to maximize their leadership development ROI, this strategic alignment is particularly crucial.
        </p>
        
        <h2>The Alignment Advantage</h2>
        <p>
          Organizations that explicitly align their leadership development initiatives with business strategy achieve significantly better outcomes. Our study found that aligned programs generate 4x greater business impact and 3x higher leadership bench strength compared to non-aligned programs.
        </p>
        
        <h3>From Individual Development to Strategic Asset</h3>
        <p>
          The most successful leadership development approaches in SMEs share several key characteristics:
        </p>
        <ul>
          <li>They're built around specific business challenges and opportunities</li>
          <li>They develop capabilities that directly support strategic priorities</li>
          <li>They measure success in terms of business outcomes, not just leadership competencies</li>
          <li>They involve senior leaders as active sponsors and participants</li>
          <li>They create shared leadership languages and frameworks across the organization</li>
        </ul>
        
        <blockquote>
          "The difference between leadership development as a nice-to-have and leadership development as a strategic driver is intentional alignment. When leaders are developing capabilities that directly address business challenges, both individual and organizational growth accelerate."
        </blockquote>
        
        <h3>Practical Implementation for SMEs</h3>
        <p>
          For resource-constrained organizations, achieving this alignment doesn't require extensive investments:
        </p>
        <ol>
          <li><strong>Start with strategy:</strong> Identify 3-5 key strategic priorities for the next 12-24 months.</li>
          <li><strong>Map leadership requirements:</strong> Determine what leadership capabilities are needed to execute these priorities successfully.</li>
          <li><strong>Assess current capabilities:</strong> Honestly evaluate your leadership team's strengths and gaps relative to these requirements.</li>
          <li><strong>Design targeted interventions:</strong> Create development experiences specifically focused on closing strategic capability gaps.</li>
          <li><strong>Apply learning to real work:</strong> Ensure development activities involve working on actual business challenges.</li>
        </ol>
        
        <h3>Measuring Strategic Impact</h3>
        <p>
          Traditional leadership development metrics often focus on participant satisfaction or knowledge acquisition. However, strategically aligned programs should measure impact on business outcomes such as:
        </p>
        <ul>
          <li>Progress on strategic initiatives led by program participants</li>
          <li>Improvements in key performance indicators in participants' areas of responsibility</li>
          <li>Innovation metrics (new ideas implemented, problems solved, etc.)</li>
          <li>Employee engagement and retention in participants' teams</li>
          <li>Customer satisfaction improvements resulting from leadership changes</li>
        </ul>
        
        <h3>Looking Forward</h3>
        <p>
          As business environments become increasingly volatile and complex, the need for strategically aligned leadership development will only grow. Organizations that view leadership development not as a standalone HR function but as a strategic business process will be better positioned to navigate uncertainty and capitalize on emerging opportunities.
        </p>
        
        <p>
          By focusing leadership development initiatives on the capabilities most critical to business success, SMEs can achieve significant impact even with limited resources, creating a powerful engine for sustainable growth and competitive advantage.
        </p>
      `
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-28">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="mb-6">
            <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-border/50 overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to a placeholder image if the original fails to load
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d";
                }}
              />
            </div>
            
            <div className="p-6 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {article.category}
                </span>
                <span className="text-sm text-muted-foreground">
                  {article.date}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
              
              <SocialShareButtons 
                title={article.title} 
                className="mb-6"
              />
              
              <div className="prose max-w-none">
                <p className="text-lg mb-6">{article.snippet}</p>
                
                {/* Render the dynamic content for this article */}
                <div dangerouslySetInnerHTML={{ __html: blogContents[article.id]?.content || 
                  `<p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  
                  <h2>Key Insights</h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                  
                  <h3>Industry Implications</h3>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  
                  <blockquote>
                    "Strategic HR management is crucial for organizations looking to thrive in today's competitive landscape. Businesses that invest in their talent acquisition processes see higher retention rates and better business outcomes."
                  </blockquote>
                  
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                  </p>
                  
                  <h3>Moving Forward</h3>
                  <p>
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                  </p>`
                }} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
