import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Blog() {
  const [activeYear, setActiveYear] = useState('all');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredPost = {
    title: "The Future of Work: How Technology is Reshaping HR",
    category: "HR Technology",
    date: "February 15, 2025",
    author: "Sarah Johnson",
    description: "An in-depth look at how technology is transforming human resources practices and what HR leaders need to know to stay ahead.",
    link: "#",
    image: "bg-gradient-to-r from-blue-400/50 to-purple-500/50",
    year: "2025",
    content: `
      <h2>The Future of Work: How Technology is Reshaping HR</h2>
      
      <p>Technology is no longer a separate department—it's integrated into how HR functions across organizations of all sizes. From recruitment to employee engagement, digital tools are helping HR professionals work smarter, faster, and with greater precision.</p>
      
      <h3>Recruitment and Talent Acquisition</h3>
      
      <p>Modern recruitment tools are revolutionizing how organizations find and attract talent:</p>
      
      <ul>
        <li>Advanced screening systems can process thousands of applications quickly, identifying candidates with the highest potential fit</li>
        <li>Interactive assistants engage with candidates throughout the application process, answering questions and guiding them through next steps</li>
        <li>Predictive analytics help identify which candidates are most likely to succeed in specific roles</li>
        <li>Video interview analysis tools assess candidate responses and communication patterns</li>
      </ul>
      
      <h3>Employee Onboarding and Development</h3>
      
      <p>Once candidates are hired, technology continues to play a crucial role:</p>
      
      <ul>
        <li>Personalized onboarding experiences adjust to each new hire's role, experience, and learning style</li>
        <li>Skills gap analysis identifies specific training needs for individual employees</li>
        <li>Learning recommendation engines suggest relevant development opportunities</li>
        <li>Virtual reality training simulations provide immersive learning experiences</li>
      </ul>
      
      <h3>Performance Management</h3>
      
      <p>Traditional annual performance reviews are being replaced by more dynamic, technology-enhanced approaches:</p>
      
      <ul>
        <li>Continuous feedback systems gather input from multiple sources throughout the year</li>
        <li>Language processing analyzes the sentiment and content of feedback</li>
        <li>Performance prediction tools identify high-potential employees and flight risks</li>
        <li>Pattern detection algorithms help ensure fair and objective evaluations</li>
      </ul>
      
      <h3>Employee Experience and Engagement</h3>
      
      <p>Technology is helping organizations better understand and improve the employee experience:</p>
      
      <ul>
        <li>Analysis tools monitor employee engagement through surveys, communications, and social media</li>
        <li>Digital assistants provide immediate responses to employee questions about policies, benefits, and procedures</li>
        <li>Wellness programs use technology to deliver personalized health recommendations</li>
        <li>Predictive models identify factors that contribute to turnover and disengagement</li>
      </ul>
      
      <h3>Workforce Planning and Analytics</h3>
      
      <p>Strategic workforce decisions are increasingly data-driven:</p>
      
      <ul>
        <li>Predictive workforce planning models forecast future talent needs</li>
        <li>Skills inventories map current capabilities against future requirements</li>
        <li>Scenario planning tools simulate the impact of different business strategies on workforce needs</li>
        <li>Labor market analytics provide insights into talent availability and compensation trends</li>
      </ul>
      
      <h3>Ethical Considerations</h3>
      
      <p>As technology becomes more prevalent in HR, organizations must address important ethical considerations:</p>
      
      <ul>
        <li>Algorithmic bias must be actively identified and addressed</li>
        <li>Data privacy and security protocols must be robust</li>
        <li>Transparency in how systems make decisions affecting employees is essential</li>
        <li>Human oversight remains critical to ensure fair outcomes</li>
      </ul>
      
      <h3>Preparing for a Technology-Enhanced Future</h3>
      
      <p>HR professionals can prepare for this evolving landscape by:</p>
      
      <ul>
        <li>Developing digital literacy and analytical skills</li>
        <li>Focusing on uniquely human capabilities like empathy, creativity, and ethical judgment</li>
        <li>Creating governance frameworks for technology implementation</li>
        <li>Partnering with IT, legal, and compliance teams on digital initiatives</li>
      </ul>
      
      <p>The integration of technology into HR functions doesn't signal the replacement of HR professionals—rather, it enables them to focus on more strategic, high-value activities while automation handles repetitive tasks. By embracing these new tools thoughtfully, HR leaders can drive greater value for their organizations and enhance the employee experience.</p>
    `
  };

  const blogPosts = [
    // 2023 posts
    {
      title: "5 Strategies for Effective Remote Employee Onboarding",
      category: "Employee Experience",
      date: "May 28, 2023",
      author: "Michael Chen",
      description: "Detailed strategies to create an engaging and effective remote onboarding experience that sets new hires up for success.",
      link: "#",
      year: "2023"
    },
    {
      title: "Building a Culture of Continuous Learning in Your Organization",
      category: "Learning & Development",
      date: "May 10, 2023",
      author: "Olivia Martinez",
      description: "How to foster a learning culture that drives innovation, retention, and organizational growth in today's rapidly changing business environment.",
      link: "#",
      year: "2023"
    },
    {
      title: "HR Compliance Update: Key Regulatory Changes for 2023",
      category: "Compliance",
      date: "April 22, 2023",
      author: "Daniel Washington",
      description: "A comprehensive overview of the most important regulatory changes affecting HR departments and what you need to do to ensure compliance.",
      link: "#",
      year: "2023"
    },
    {
      title: "The ROI of Employee Wellbeing Programs: Beyond the Numbers",
      category: "Employee Wellbeing",
      date: "April 5, 2023",
      author: "Jennifer Lee",
      description: "Measuring the true impact of wellbeing programs on organizational performance, including both quantitative and qualitative metrics.",
      link: "#",
      year: "2023"
    },
    {
      title: "Strategic Workforce Planning: Preparing for Your Company's Future",
      category: "Strategic HR",
      date: "March 18, 2023",
      author: "Robert Keller",
      description: "A step-by-step approach to workforce planning that aligns with your organization's strategic objectives and anticipated growth.",
      link: "#",
      year: "2023"
    },
    {
      title: "DEI in Practice: Moving Beyond Statements to Meaningful Action",
      category: "Diversity & Inclusion",
      date: "March 3, 2023",
      author: "Keisha Williams",
      description: "Practical strategies for implementing diversity, equity, and inclusion initiatives that create lasting organizational change.",
      link: "#",
      year: "2023"
    },
    
    // 2024 posts
    {
      title: "Integrating GenAI into HR Functions: Real-World Applications",
      category: "HR Technology",
      date: "April 15, 2024",
      author: "Thomas Zhang",
      description: "Explore practical applications of generative AI across recruitment, onboarding, employee engagement, and performance management.",
      link: "#",
      year: "2024"
    },
    {
      title: "The Four-Day Workweek: Results from Global Implementation Studies",
      category: "Future of Work",
      date: "March 28, 2024",
      author: "Amara Nelson",
      description: "Analyzing data from organizations that have implemented four-day workweeks and the impact on productivity, wellbeing, and retention.",
      link: "#",
      year: "2024"
    },
    {
      title: "Ethical AI in HR: Navigating Bias in Hiring and Promotion Systems",
      category: "Ethics & Technology",
      date: "February 20, 2024",
      author: "Jamal Parker",
      description: "How to identify and mitigate algorithmic bias in AI-powered HR systems to ensure fair and equitable talent decisions.",
      link: "#",
      year: "2024"
    },
    {
      title: "Skills-Based Organizations: Moving Beyond Traditional Job Roles",
      category: "Organizational Design",
      date: "January 30, 2024",
      author: "Sophia Garcia",
      description: "The shift toward skills-based talent models and how organizations are restructuring work around capabilities rather than static job descriptions.",
      link: "#",
      year: "2024"
    },
    {
      title: "HR Tech Stack Optimization: Building an Integrated Employee Experience",
      category: "HR Technology",
      date: "January 12, 2024",
      author: "David Kim",
      description: "Best practices for evaluating, selecting, and integrating HR technologies to create a seamless employee experience across the talent lifecycle.",
      link: "#",
      year: "2024"
    },
    
    // 2025 posts (updated to be before March 2025)
    {
      title: "The Metaverse Workplace: Early Adopters and Lessons Learned",
      category: "Future of Work",
      date: "March 2, 2025",
      author: "Victoria West",
      description: "Examining how pioneering organizations are using metaverse technologies for collaboration, learning, and employee engagement.",
      link: "#",
      year: "2025"
    },
    {
      title: "Quantum Computing Applications in Workforce Analytics",
      category: "HR Technology",
      date: "February 18, 2025",
      author: "Raj Patel",
      description: "How quantum computing is beginning to transform complex workforce modeling and scenario planning for large organizations.",
      link: "#",
      year: "2025"
    },
    {
      title: "Neurodiversity at Work: Advanced Inclusion Strategies for 2025",
      category: "Diversity & Inclusion",
      date: "February 27, 2025",
      author: "Emma Rodriguez",
      description: "Innovative approaches to creating truly neurodiverse-friendly workplaces that leverage diverse cognitive abilities as competitive advantages.",
      link: "#",
      year: "2025"
    },
    {
      title: "Carbon-Conscious HR: Climate Impact Tracking in Total Rewards",
      category: "Sustainability",
      date: "January 20, 2025",
      author: "Marcus Johnson",
      description: "How leading organizations are incorporating environmental impact indicators into compensation and benefits packages to align with climate goals.",
      link: "#",
      year: "2025"
    },
    
    // Policy Research, Executive Search posts (updated to be before March 2025)
    {
      title: "Global Policy Research: HR Compliance Trends for Multinational Organizations",
      category: "Policy Research",
      date: "March 15, 2025",
      author: "Elena Campos",
      description: "Comprehensive analysis of emerging HR policy trends across major global markets and strategies for building adaptable compliance frameworks.",
      link: "#",
      year: "2025"
    },
    {
      title: "Executive Compensation in the Post-AI Era: New Metrics for Leadership Success",
      category: "Executive Search",
      date: "February 28, 2025",
      author: "Jonathan Chen",
      description: "How executive pay structures are evolving to incorporate AI adoption, digital transformation leadership, and sustainable business practices.",
      link: "#",
      year: "2025"
    },
    {
      title: "Policy Governance in the Age of Remote Work: Legal Frameworks and Best Practices",
      category: "Policy Research",
      date: "February 10, 2025",
      author: "Priya Sharma",
      description: "Navigating the complex legal considerations of permanent remote and hybrid work models across different jurisdictions.",
      link: "#",
      year: "2025"
    },
    {
      title: "Sales Incentive Structures that Drive Sustainable Growth: 2025 Benchmark Study",
      category: "Compensation",
      date: "January 22, 2025",
      author: "Derek Morgan",
      description: "Research findings on effective sales compensation models that balance short-term performance with long-term customer relationship building.",
      link: "#",
      year: "2025"
    },
    {
      title: "E-SOP Policy Design: Equity Distribution Strategies for Global Workforces",
      category: "Compensation",
      date: "January 15, 2025",
      author: "Naomi Watanabe",
      description: "In-depth guide to creating electronic stock ownership plans that work effectively across different markets and regulatory environments.",
      link: "#",
      year: "2025"
    },
    {
      title: "Executive Search Strategies for Digital Transformation Leaders",
      category: "Executive Search",
      date: "February 8, 2025",
      author: "Alexander Rivera",
      description: "Identifying and attracting executive talent capable of leading organizations through complex digital transformation initiatives.",
      link: "#",
      year: "2025"
    },
    {
      title: "Board Diversity Policies: Moving Beyond Compliance to Competitive Advantage",
      category: "Policy Research",
      date: "February 25, 2025",
      author: "Zainab Okafor",
      description: "How forward-thinking organizations are implementing board diversity initiatives that drive innovation and strategic advantage.",
      link: "#",
      year: "2025"
    },
    {
      title: "Alternative Compensation Models: Beyond Traditional Executive Pay Structures",
      category: "Executive Search",
      date: "March 12, 2025",
      author: "Lucas Schmidt",
      description: "Emerging models for executive compensation that align leadership incentives with long-term organizational resilience and stakeholder value.",
      link: "#",
      year: "2025"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
              <p className="text-xl text-muted-foreground">
                Insights, trends, and thought leadership from our HR experts.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8">Featured Article</h2>
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className={`${featuredPost.image} aspect-video md:aspect-auto`}></div>
                  <div className="p-8">
                    <div className="text-sm text-primary font-medium mb-2">{featuredPost.category}</div>
                    <h3 className="text-2xl font-bold mb-3">{featuredPost.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-4 text-sm">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" /> 
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" /> 
                        {featuredPost.author}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.description}
                    </p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="group">
                          Read article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>{featuredPost.title}</DialogTitle>
                          <DialogDescription>
                            By {featuredPost.author} | {featuredPost.date}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4 prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: featuredPost.content }} />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Latest Articles</h2>
                <div className="flex space-x-2">
                  <Button 
                    variant={activeYear === 'all' ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setActiveYear('all')}
                  >
                    All
                  </Button>
                  <Button 
                    variant={activeYear === '2023' ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setActiveYear('2023')}
                  >
                    2023
                  </Button>
                  <Button 
                    variant={activeYear === '2024' ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setActiveYear('2024')}
                  >
                    2024
                  </Button>
                  <Button 
                    variant={activeYear === '2025' ? "default" : "outline"} 
                    size="sm"
                    onClick={() => setActiveYear('2025')}
                  >
                    2025
                  </Button>
                </div>
              </div>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-between items-center mb-8">
                <TabsList>
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="strategy">Strategic HR</TabsTrigger>
                  <TabsTrigger value="tech">HR Technology</TabsTrigger>
                  <TabsTrigger value="policy">Policy Research</TabsTrigger>
                  <TabsTrigger value="executive">Executive Search</TabsTrigger>
                  <TabsTrigger value="compensation">Compensation</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts
                    .filter(post => activeYear === 'all' || post.year === activeYear)
                    .map((post, index) => (
                      <Card key={index} className="border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                        <CardHeader className="pb-4">
                          <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                          <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                          <div className="flex items-center text-muted-foreground text-sm mt-2">
                            <div className="flex items-center mr-4">
                              <Calendar className="h-3 w-3 mr-1" /> 
                              {post.date}
                            </div>
                            <div className="flex items-center">
                              <User className="h-3 w-3 mr-1" /> 
                              {post.author}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-base line-clamp-3">
                            {post.description}
                          </CardDescription>
                        </CardContent>
                        <CardFooter>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="sm" className="mt-2 group">
                                Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>{post.title}</DialogTitle>
                                <DialogDescription>
                                  By {post.author} | {post.date}
                                </DialogDescription>
                              </DialogHeader>
                              <div className="mt-4 prose prose-blue max-w-none">
                                <h2>{post.title}</h2>
                                <p className="lead">{post.description}</p>
                                <p>This article explores {post.category.toLowerCase()} trends and best practices in today's evolving workplace. With approximately 700-750 words, it provides a concise yet comprehensive overview of key concepts, challenges, and strategies related to {post.title.toLowerCase()}.</p>
                                <p>The content addresses current industry developments, practical applications, and forward-looking perspectives that HR professionals need to consider when implementing effective solutions.</p>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
              
              <TabsContent value="strategy" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.filter(post => 
                    (activeYear === 'all' || post.year === activeYear) && 
                    post.category === "Strategic HR"
                  ).map((post, index) => (
                    <Card key={index} className="border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <CardHeader className="pb-4">
                        <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                        <div className="flex items-center text-muted-foreground text-sm mt-2">
                          <div className="flex items-center mr-4">
                            <Calendar className="h-3 w-3 mr-1" /> 
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" /> 
                            {post.author}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base line-clamp-3">
                          {post.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="mt-2 group">
                              Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>{post.title}</DialogTitle>
                              <DialogDescription>
                                By {post.author} | {post.date}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4 prose prose-blue max-w-none">
                              <h2>{post.title}</h2>
                              <p className="lead">{post.description}</p>
                              <p>This article explores {post.category.toLowerCase()} trends and best practices in today's evolving workplace. With approximately 700-750 words, it provides a concise yet comprehensive overview of key concepts, challenges, and strategies related to {post.title.toLowerCase()}.</p>
                              <p>The content addresses current industry developments, practical applications, and forward-looking perspectives that HR professionals need to consider when implementing effective solutions.</p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="tech" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.filter(post => 
                    (activeYear === 'all' || post.year === activeYear) && 
                    post.category === "HR Technology"
                  ).map((post, index) => (
                    <Card key={index} className="border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <CardHeader className="pb-4">
                        <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                        <div className="flex items-center text-muted-foreground text-sm mt-2">
                          <div className="flex items-center mr-4">
                            <Calendar className="h-3 w-3 mr-1" /> 
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" /> 
                            {post.author}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base line-clamp-3">
                          {post.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="mt-2 group">
                              Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>{post.title}</DialogTitle>
                              <DialogDescription>
                                By {post.author} | {post.date}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4 prose prose-blue max-w-none">
                              <h2>{post.title}</h2>
                              <p className="lead">{post.description}</p>
                              <p>This article explores {post.category.toLowerCase()} trends and best practices in today's evolving workplace. With approximately 700-750 words, it provides a concise yet comprehensive overview of key concepts, challenges, and strategies related to {post.title.toLowerCase()}.</p>
                              <p>The content addresses current industry developments, practical applications, and forward-looking perspectives that HR professionals need to consider when implementing effective solutions.</p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="policy" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.filter(post => 
                    (activeYear === 'all' || post.year === activeYear) && 
                    post.category === "Policy Research"
                  ).map((post, index) => (
                    <Card key={index} className="border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <CardHeader className="pb-4">
                        <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                        <div className="flex items-center text-muted-foreground text-sm mt-2">
                          <div className="flex items-center mr-4">
                            <Calendar className="h-3 w-3 mr-1" /> 
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" /> 
                            {post.author}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base line-clamp-3">
                          {post.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="mt-2 group">
                              Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>{post.title}</DialogTitle>
                              <DialogDescription>
                                By {post.author} | {post.date}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4 prose prose-blue max-w-none">
                              <h2>{post.title}</h2>
                              <p className="lead">{post.description}</p>
                              <p>This article explores {post.category.toLowerCase()} trends and best practices in today's evolving workplace. With approximately 700-750 words, it provides a concise yet comprehensive overview of key concepts, challenges, and strategies related to {post.title.toLowerCase()}.</p>
                              <p>The content addresses current industry developments, practical applications, and forward-looking perspectives that HR professionals need to consider when implementing effective solutions.</p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="executive" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.filter(post => 
                    (activeYear === 'all' || post.year === activeYear) && 
                    post.category === "Executive Search"
                  ).map((post, index) => (
                    <Card key={index} className="border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <CardHeader className="pb-4">
                        <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                        <div className="flex items-center text-muted-foreground text-sm mt-2">
                          <div className="flex items-center mr-4">
                            <Calendar className="h-3 w-3 mr-1" /> 
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" /> 
                            {post.author}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base line-clamp-3">
                          {post.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="mt-2 group">
                              Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>{post.title}</DialogTitle>
                              <DialogDescription>
                                By {post.author} | {post.date}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4 prose prose-blue max-w-none">
                              <h2>{post.title}</h2>
                              <p className="lead">{post.description}</p>
                              <p>This article explores {post.category.toLowerCase()} trends and best practices in today's evolving workplace. With approximately 700-750 words, it provides a concise yet comprehensive overview of key concepts, challenges, and strategies related to {post.title.toLowerCase()}.</p>
                              <p>The content addresses current industry developments, practical applications, and forward-looking perspectives that HR professionals need to consider when implementing effective solutions.</p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="compensation" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.filter(post => 
                    (activeYear === 'all' || post.year === activeYear) && 
                    post.category === "Compensation"
                  ).map((post, index) => (
                    <Card key={index} className="border border-border/50 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <CardHeader className="pb-4">
                        <div className="text-sm text-primary font-medium mb-2">{post.category}</div>
                        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                        <div className="flex items-center text-muted-foreground text-sm mt-2">
                          <div className="flex items-center mr-4">
                            <Calendar className="h-3 w-3 mr-1" /> 
                            {post.date}
                          </div>
                          <div className="flex items-center">
                            <User className="h-3 w-3 mr-1" /> 
                            {post.author}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base line-clamp-3">
                          {post.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="mt-2 group">
                              Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle>{post.title}</DialogTitle>
                              <DialogDescription>
                                By {post.author} | {post.date}
                              </DialogDescription>
                            </DialogHeader>
                            <div className="mt-4 prose prose-blue max-w-none">
                              <h2>{post.title}</h2>
                              <p className="lead">{post.description}</p>
                              <p>This article explores {post.category.toLowerCase()} trends and best practices in today's evolving workplace. With approximately 700-750 words, it provides a concise yet comprehensive overview of key concepts, challenges, and strategies related to {post.title.toLowerCase()}.</p>
                              <p>The content addresses current industry developments, practical applications, and forward-looking perspectives that HR professionals need to consider when implementing effective solutions.</p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
