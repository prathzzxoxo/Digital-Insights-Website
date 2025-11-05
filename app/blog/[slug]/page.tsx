"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blogPosts: Record<string, any> = {
  "ai-powered-threat-detection": {
    title: "The Future of Cybersecurity: AI-Powered Threat Detection",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "AI & Security",
    author: "Digital Insights Team",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    content: `
# The Evolution of Threat Detection

The cybersecurity landscape is evolving at an unprecedented pace. Traditional security measures, while still important, are no longer sufficient to protect against sophisticated cyber threats. This is where artificial intelligence steps in to revolutionize our approach to cybersecurity.

## Real-Time Threat Analysis

AI-powered systems can analyze millions of data points in seconds, identifying patterns that would take human analysts hours or even days to discover. Machine learning algorithms continuously learn from new threats, adapting their detection methods to stay ahead of attackers.

### Key Benefits:

- **Speed**: AI can detect and respond to threats in milliseconds
- **Accuracy**: Reduced false positives through advanced pattern recognition
- **Scalability**: Handle massive amounts of data across global networks
- **Automation**: Immediate response protocols that contain breaches instantly

## Behavioral Analysis

Modern AI systems don't just look for known threats - they understand normal behavior patterns and can instantly flag anomalies. This behavioral approach catches zero-day exploits and previously unknown attack vectors.

## The Human-AI Partnership

While AI is powerful, the most effective security strategy combines artificial intelligence with human expertise. Security analysts work alongside AI systems, using their judgment to interpret complex scenarios and make critical decisions.

## Looking Forward

As cyber threats become more sophisticated, AI-powered security solutions will become essential for organizations of all sizes. The question is no longer whether to implement AI security, but how quickly you can do so.
    `
  },
  "zero-trust-architecture": {
    title: "Implementing Zero Trust Architecture in Modern Enterprises",
    date: "2025-01-12",
    readTime: "10 min read",
    category: "Enterprise Security",
    author: "Security Architects",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
    content: `
# Why Zero Trust Matters

The traditional "castle-and-moat" security model assumes everything inside the network is trustworthy. This assumption has proven dangerous in today's threat landscape, where breaches often come from within.

## Core Principles of Zero Trust

Zero Trust operates on a simple but powerful principle: **never trust, always verify**. Every user, device, and application must prove their identity and authorization continuously.

### Implementation Strategy:

1. **Identity Verification**: Multi-factor authentication for all access points
2. **Micro-Segmentation**: Network divided into secure zones
3. **Least Privilege Access**: Users only get access to what they absolutely need
4. **Continuous Monitoring**: Real-time analysis of all network activity

## Breaking Down the Network

Traditional networks operate like open office spaces - once you're in, you can see everything. Zero Trust networks are more like hotels with individual rooms, each requiring separate authentication.

## Device Trust

In a Zero Trust model, device health matters as much as user identity. Systems continuously verify that devices meet security standards before granting access to resources.

## The Journey to Zero Trust

Implementing Zero Trust isn't an overnight process. It requires careful planning, phased rollout, and constant refinement. Start with your most critical assets and expand outward.

## Measuring Success

Track metrics like:
- Reduced lateral movement in breach scenarios
- Decreased incident response times
- Improved compliance audit results
- Enhanced visibility across your network
    `
  },
  "ransomware-protection": {
    title: "Ransomware in 2025: Advanced Protection Strategies",
    date: "2025-01-10",
    readTime: "12 min read",
    category: "Threat Intelligence",
    author: "Threat Research Team",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    content: `
# The Ransomware Evolution

Ransomware has evolved from simple file encryption to sophisticated multi-stage operations. Modern ransomware groups don't just encrypt - they exfiltrate data and threaten to leak it, a tactic known as double extortion.

## Understanding Modern Ransomware Tactics

Today's ransomware operators are organized criminal enterprises with:
- Professional development teams
- Customer service departments
- Negotiation specialists
- Bug bounty programs for their own malware

### Attack Chain Analysis:

1. **Initial Access**: Phishing, exploits, or compromised credentials
2. **Privilege Escalation**: Moving from user to admin access
3. **Lateral Movement**: Spreading across the network
4. **Data Exfiltration**: Stealing sensitive information
5. **Encryption**: Locking critical systems
6. **Extortion**: Demanding payment under threat of data release

## Defense in Depth

Protecting against ransomware requires multiple layers of defense:

### Prevention:
- Regular security awareness training
- Patch management programs
- Email filtering and web security
- Network segmentation

### Detection:
- Behavioral analysis tools
- Anomaly detection systems
- 24/7 security monitoring
- Threat intelligence integration

### Response:
- Incident response plans
- Offline, immutable backups
- Communication protocols
- Legal and PR preparation

## The Backup Strategy

Your backup strategy is your last line of defense. Follow the 3-2-1 rule:
- **3** copies of your data
- **2** different media types
- **1** copy offsite (and offline)

## Testing Your Defenses

Regular security assessments and simulated ransomware attacks help identify weaknesses before real attackers do.
    `
  },
  "cloud-security-best-practices": {
    title: "Cloud Security Best Practices for AWS and Azure",
    date: "2025-01-08",
    readTime: "15 min read",
    category: "Cloud Security",
    author: "Cloud Security Team",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    content: `
# Securing the Cloud

Cloud infrastructure offers incredible benefits, but it also introduces unique security challenges. The shared responsibility model means you're accountable for securing your data, even when it's stored on someone else's hardware.

## Identity and Access Management (IAM)

IAM is the foundation of cloud security. Poor IAM configuration is consistently the top cause of cloud breaches.

### IAM Best Practices:

- Use principle of least privilege
- Enable multi-factor authentication everywhere
- Regularly audit and rotate credentials
- Implement strong password policies
- Use service accounts for applications
- Monitor for unusual access patterns

## Network Security

Cloud networks need the same attention to security as traditional infrastructure:

### Key Components:

- **Security Groups**: Virtual firewalls for instances
- **Network ACLs**: Subnet-level traffic control
- **VPC Isolation**: Separate environments for different workloads
- **Private Subnets**: Keep sensitive resources off the public internet

## Data Protection

### Encryption Standards:

- **At Rest**: All storage encrypted with strong algorithms
- **In Transit**: TLS 1.2 or higher for all communications
- **Key Management**: Hardware security modules (HSMs) for key storage
- **Regular Rotation**: Automated key rotation policies

## Monitoring and Logging

You can't secure what you can't see. Comprehensive logging is essential:

- Enable CloudTrail (AWS) or Activity Logs (Azure)
- Centralize logs in a SIEM system
- Set up alerts for suspicious activities
- Retain logs for compliance requirements
- Regular log analysis and review

## Compliance Frameworks

Cloud providers offer tools to help meet compliance requirements:
- SOC 2
- ISO 27001
- PCI DSS
- HIPAA
- GDPR

## Cost of Security

Security doesn't have to break the bank. Many cloud security best practices are free or low-cost - they just require consistent implementation and monitoring.
    `
  },
  "incident-response-playbook": {
    title: "Building an Effective Incident Response Playbook",
    date: "2025-01-05",
    readTime: "11 min read",
    category: "Incident Response",
    author: "DFIR Team",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
    content: `
# When Seconds Count

When a security incident occurs, having a well-documented incident response playbook can mean the difference between a minor disruption and a catastrophic breach.

## The Six Phases of Incident Response

### 1. Preparation
Before an incident occurs:
- Establish an incident response team
- Define roles and responsibilities
- Set up communication channels
- Prepare necessary tools and access
- Document contact information

### 2. Detection and Analysis
Identifying that an incident has occurred:
- Monitor security alerts
- Analyze suspicious activity
- Determine scope and severity
- Document initial findings
- Classify the incident type

### 3. Containment
Limiting the damage:

**Short-term containment:**
- Isolate affected systems
- Block malicious IPs
- Disable compromised accounts
- Prevent lateral movement

**Long-term containment:**
- Apply security patches
- Implement additional monitoring
- Prepare for recovery

### 4. Eradication
Removing the threat:
- Delete malware
- Close vulnerabilities
- Reset compromised credentials
- Verify threat removal
- Document remediation steps

### 5. Recovery
Returning to normal operations:
- Restore systems from clean backups
- Validate system integrity
- Monitor for recurrence
- Gradual return to production
- Continued enhanced monitoring

### 6. Post-Incident Analysis
Learning from the incident:
- Conduct thorough review
- Document lessons learned
- Update playbooks
- Improve defenses
- Share knowledge with team

## Building Your Playbook

Your playbook should include:
- Clear decision trees
- Contact lists (internal and external)
- Technical procedures
- Communication templates
- Legal and compliance considerations
- Evidence preservation guidelines

## Practice Makes Perfect

Regular tabletop exercises and simulations help your team respond effectively when real incidents occur.
    `
  },
  "phishing-awareness-training": {
    title: "Why Employee Phishing Awareness Training is Critical",
    date: "2025-01-03",
    readTime: "7 min read",
    category: "Training",
    author: "Training Department",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
    content: `
# The Human Factor

Despite billions invested in security technologies, human error remains the primary vector for successful cyberattacks. Phishing attacks are becoming increasingly sophisticated, making employee awareness more critical than ever.

## Modern Phishing Techniques

### Types of Phishing:

**Email Phishing**: Mass campaigns targeting many users
- Fake invoices
- Package delivery notifications
- Password reset requests
- Urgent security alerts

**Spear Phishing**: Targeted attacks on specific individuals
- Researched and personalized
- Leverages social media information
- Uses company context
- Highly convincing

**Whaling**: Attacks targeting executives
- High-value targets
- Sophisticated social engineering
- Business email compromise
- Wire transfer fraud

**Smishing**: SMS-based phishing
- Text message attacks
- Shorter attention span exploitation
- Mobile device targeting

**Vishing**: Voice phishing calls
- Impersonation of IT support
- Financial institution fraud
- Government agency scams

## Warning Signs to Teach

Train employees to recognize:
- Urgent or threatening language
- Requests for credentials
- Unexpected attachments
- Suspicious sender addresses
- Generic greetings
- Poor grammar or spelling
- Unusual requests from known contacts

## Effective Training Programs

### Key Components:

1. **Regular Training**: Monthly or quarterly sessions
2. **Simulated Phishing**: Test employee awareness
3. **Immediate Feedback**: Learn from mistakes in real-time
4. **Gamification**: Make learning engaging
5. **Executive Buy-in**: Leadership participation sets tone

## Building a Security Culture

Security awareness isn't a one-time training - it's an ongoing cultural shift. Employees should feel:
- Empowered to report suspicious emails
- Comfortable asking questions
- Rewarded for vigilance
- Part of the security team

## Measuring Success

Track metrics like:
- Phishing simulation click rates
- Reported suspicious emails
- Time to report incidents
- Training completion rates
- Real-world incident prevention

## The Investment Returns

Organizations with strong security awareness programs see:
- Reduced successful phishing attacks
- Faster incident detection
- Lower breach costs
- Better compliance posture
- Enhanced security culture

Remember: Your employees can be your strongest defense or your weakest link. Invest in their training.
    `
  }
};

const BlogPost = () => {
  const params = useParams();
  const slug = params.slug as string;

  const post = blogPosts[slug] || {
    title: "Blog Post Not Found",
    date: new Date().toISOString().split('T')[0],
    readTime: "5 min read",
    category: "General",
    author: "Digital Insights Team",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
    content: "This blog post could not be found. Please return to the blog page."
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-red-500 hover:text-red-400 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-96 rounded-2xl overflow-hidden mb-12"
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1 bg-gradient-to-r from-red-600 to-red-800 rounded-full text-white text-sm font-semibold mb-4">
            {post.category}
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-400">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-red-500" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-red-500" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-5 h-5 text-red-500" />
              <span>{post.author}</span>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-black border border-red-500/30 rounded-2xl p-8 text-gray-300 space-y-6">
            {post.content.split('\n').map((line: string, index: number) => {
              // Remove leading/trailing whitespace
              const trimmedLine = line.trim();

              // Skip empty lines
              if (!trimmedLine) return null;

              // H1 headers (# )
              if (trimmedLine.startsWith('# ')) {
                return <h1 key={index} className="text-4xl font-bold text-red-500 mb-6 mt-8">{trimmedLine.substring(2)}</h1>;
              }

              // H2 headers (## )
              if (trimmedLine.startsWith('## ')) {
                return <h2 key={index} className="text-3xl font-bold text-red-400 mb-4 mt-8">{trimmedLine.substring(3)}</h2>;
              }

              // H3 headers (### )
              if (trimmedLine.startsWith('### ')) {
                return <h3 key={index} className="text-2xl font-semibold text-red-300 mb-3 mt-6">{trimmedLine.substring(4)}</h3>;
              }

              // Bold text (**text**)
              if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
                return <p key={index} className="text-white font-bold text-lg mb-4">{trimmedLine.slice(2, -2)}</p>;
              }

              // List items (- )
              if (trimmedLine.startsWith('- ')) {
                const content = trimmedLine.substring(2);
                // Handle bold within list items
                if (content.includes('**')) {
                  const parts = content.split('**');
                  return (
                    <li key={index} className="ml-6 mb-2 text-gray-300 list-disc">
                      {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part)}
                    </li>
                  );
                }
                return <li key={index} className="ml-6 mb-2 text-gray-300 list-disc">{content}</li>;
              }

              // Numbered lists (1. 2. etc)
              if (/^\d+\.\s/.test(trimmedLine)) {
                const content = trimmedLine.replace(/^\d+\.\s/, '');
                if (content.includes('**')) {
                  const parts = content.split('**');
                  return (
                    <li key={index} className="ml-6 mb-2 text-gray-300 list-decimal">
                      {parts.map((part, i) => i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part)}
                    </li>
                  );
                }
                return <li key={index} className="ml-6 mb-2 text-gray-300 list-decimal">{content}</li>;
              }

              // Regular paragraphs
              return <p key={index} className="text-gray-300 leading-relaxed mb-4">{trimmedLine}</p>;
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="p-8 bg-gradient-to-br from-red-950/50 via-black to-black border-2 border-red-500 rounded-2xl text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.2) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Cybersecurity Assistance?
            </h3>
            <p className="text-gray-400 mb-6">
              Our team of experts is ready to help secure your organization
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;
