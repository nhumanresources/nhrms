
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Blog() {
  const [activeYear, setActiveYear] = useState('all');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredPost = {
    title: "The Future of Work: How AI is Reshaping HR",
    category: "HR Technology",
    date: "June 15, 2023",
    author: "Sarah Johnson",
    description: "An in-depth look at how artificial intelligence is transforming human resources practices and what HR leaders need to know to stay ahead.",
    link: "#",
    image: "bg-gradient-to-r from-blue-400/50 to-purple-500/50",
    year: "2023"
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
    
    // 2025 posts (projected)
    {
      title: "The Metaverse Workplace: Early Adopters and Lessons Learned",
      category: "Future of Work",
      date: "April 2, 2025",
      author: "Victoria West",
      description: "Examining how pioneering organizations are using metaverse technologies for collaboration, learning, and employee engagement.",
      link: "#",
      year: "2025"
    },
    {
      title: "Quantum Computing Applications in Workforce Analytics",
      category: "HR Technology",
      date: "March 18, 2025",
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
                    <Button className="group" asChild>
                      <Link to={featuredPost.link}>
                        Read article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
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
                  <TabsTrigger value="compliance">Compliance</TabsTrigger>
                  <TabsTrigger value="future">Future of Work</TabsTrigger>
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
                          <Button variant="ghost" size="sm" className="mt-2 group" asChild>
                            <Link to={post.link}>
                              Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                          </Button>
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
                        <Button variant="ghost" size="sm" className="mt-2 group" asChild>
                          <Link to={post.link}>
                            Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
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
                        <Button variant="ghost" size="sm" className="mt-2 group" asChild>
                          <Link to={post.link}>
                            Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="compliance" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.filter(post => 
                    (activeYear === 'all' || post.year === activeYear) && 
                    post.category === "Compliance"
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
                        <Button variant="ghost" size="sm" className="mt-2 group" asChild>
                          <Link to={post.link}>
                            Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="future" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.filter(post => 
                    (activeYear === 'all' || post.year === activeYear) && 
                    post.category === "Future of Work"
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
                        <Button variant="ghost" size="sm" className="mt-2 group" asChild>
                          <Link to={post.link}>
                            Read more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
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
