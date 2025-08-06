// Dynamic Components
import DynamicHero from '../../components/container/Features/DynamicHero'
import DynamicFeatures from '../../components/container/Features/DynamicFeatures'
import DynamicBenefits from '../../components/container/Features/DynamicBenefits'
import DynamicFAQ from '../../components/container/Features/DynamicFAQ'
import DynamicGetStarted from '../../components/container/Features/DynamicGetStarted'

// Icons for features
import { Monitor, Users, Shield, Zap, Eye, Share2, Settings, BarChart3, Video, MessageCircle, Phone, FileText, TrendingUp, Globe, Clock, DollarSign, Target, CheckCircle, Lock, Wifi, Smartphone, Tablet, Search } from 'lucide-react'

export const featuresPagesData = {
  'screen-sharing': {
    sections: [
      {
        component: DynamicHero,
        props: {
          bannerText: "New Screen Sharing Premium - AI-powered collaboration for intelligent presentations",
          title: "Screen Sharing",
          subtitle: "Share your screen seamlessly, collaborate in real-time, and present with confidence from anywhere with our advanced screen sharing technology.",
          primaryCtaText: "Start Sharing Now",
          secondaryCtaText: "Watch Demo",
          stats: [
            { value: "15M+", label: "Screens Shared" },
            { value: "4K", label: "Quality Support" },
            { value: "99.9%", label: "Reliability" },
            { value: "24/7", label: "Support" }
          ]
        }
      },
      {
        component: DynamicFeatures,
        props: {
          title: "Express More with",
          subtitle: "Transform your presentations and collaborations with powerful screen sharing features designed for modern teams and professionals.",
          features: [
            {
              icon: Monitor,
              title: "Present with confidence",
              description: "Share your screen with crystal-clear quality and real-time collaboration tools that make presentations engaging and interactive."
            },
            {
              icon: Users,
              title: "Collaborate seamlessly",
              description: "Enable multiple participants to view and interact with your shared content, fostering better teamwork and communication."
            },
            {
              icon: Shield,
              title: "Secure sharing",
              description: "Advanced security features ensure your sensitive information stays protected during screen sharing sessions."
            },
            {
              icon: Zap,
              title: "Lightning fast",
              description: "Ultra-low latency screen sharing with adaptive quality that works perfectly on any connection speed."
            },
            {
              icon: Eye,
              title: "Selective sharing",
              description: "Choose to share your entire screen, specific applications, or just a portion of your screen for focused presentations."
            },
            {
              icon: Share2,
              title: "Remote control",
              description: "Grant temporary control to participants for collaborative editing and troubleshooting sessions."
            },
            {
              icon: Settings,
              title: "Advanced controls",
              description: "Fine-tune your sharing experience with customizable settings for quality, permissions, and access controls."
            },
            {
              icon: BarChart3,
              title: "Analytics & insights",
              description: "Track engagement, viewership, and interaction metrics to improve your presentation effectiveness."
            }
          ],
          demoTitle: "See Screen Sharing in Action",
          demoDescription: "Experience the power of our screen sharing technology with this interactive demo. See how easy it is to share your screen and collaborate with your team.",
          demoFeatures: ["Real-time collaboration", "4K quality support", "Cross-platform compatibility"]
        }
      },
      {
        component: DynamicBenefits,
        props: {
          title: "How Screen Sharing Can",
          subtitle: "Discover the powerful benefits that screen sharing brings to modern businesses and how it can revolutionize your team's collaboration and productivity.",
          benefits: [
            {
              icon: TrendingUp,
              title: "Increased Productivity",
              description: "Screen sharing eliminates the need for lengthy explanations and enables real-time collaboration, boosting team productivity by up to 40%."
            },
            {
              icon: Globe,
              title: "Global Collaboration",
              description: "Connect with team members worldwide instantly, breaking down geographical barriers and enabling seamless remote work."
            },
            {
              icon: Users,
              title: "Better Communication",
              description: "Visual communication through screen sharing reduces misunderstandings and ensures everyone is on the same page."
            },
            {
              icon: Clock,
              title: "Time Savings",
              description: "Save hours of travel time and meeting setup with instant screen sharing capabilities from anywhere."
            },
            {
              icon: DollarSign,
              title: "Cost Reduction",
              description: "Reduce travel costs, meeting expenses, and infrastructure costs while maintaining high-quality collaboration."
            },
            {
              icon: Target,
              title: "Improved Focus",
              description: "Keep everyone focused on the same content with synchronized screen sharing and real-time annotations."
            }
          ],
          statsTitle: "Screen Sharing Impact",
          statsSubtitle: "Real numbers from businesses using our screen sharing technology",
          useCasesTitle: "Popular Use Cases",
          useCases: [
            { title: "Remote Training", description: "Conduct interactive training sessions with screen sharing, allowing trainees to see exactly what you're doing." },
            { title: "Sales Presentations", description: "Share product demos and presentations with prospects in real-time, increasing engagement and conversion rates." },
            { title: "Technical Support", description: "Provide remote technical support by viewing and controlling users' screens to resolve issues quickly." },
            { title: "Design Reviews", description: "Collaborate on design projects with real-time feedback and annotations on shared screens." },
            { title: "Code Reviews", description: "Conduct thorough code reviews with team members by sharing your development environment." },
            { title: "Virtual Meetings", description: "Enhance virtual meetings with visual content sharing for better engagement and understanding." }
          ]
        }
      },
      {
        component: DynamicFAQ,
        props: {
          subtitle: "Get answers to common questions about screen sharing technology, features, and how it can benefit your team.",
          faqs: [
            {
              question: "What is screen sharing?",
              answer: "Screen sharing is a technology that allows you to display your computer screen to other people in real-time over the internet. It enables you to show presentations, demonstrate software, collaborate on documents, and provide remote technical support."
            },
            {
              question: "What are the advantages of screen sharing?",
              answer: "Screen sharing offers numerous benefits including improved communication through visual aids, increased productivity by eliminating travel time, cost savings on meetings and travel, better collaboration for remote teams, enhanced training capabilities, and more effective sales presentations."
            },
            {
              question: "How secure is screen sharing?",
              answer: "Our screen sharing technology uses enterprise-grade encryption to protect your data. We implement secure authentication, encrypted data transmission, and provide controls to manage who can view your screen. You can also set permissions to prevent unauthorized access."
            },
            {
              question: "What devices support screen sharing?",
              answer: "Our screen sharing solution works across all major platforms including Windows, macOS, Linux, iOS, and Android. You can share your screen from desktop computers, laptops, tablets, and smartphones with full compatibility."
            },
            {
              question: "Can I control who sees my screen?",
              answer: "Yes, you have complete control over your screen sharing sessions. You can invite specific participants, set viewing permissions, revoke access at any time, and choose to share only specific applications or portions of your screen."
            }
          ]
        }
      },
      {
        component: DynamicGetStarted,
        props: {
          title: "Get Started with Screen Sharing Today",
          subtitle: "Join millions of users who are already transforming their collaboration with our powerful screen sharing technology.",
          mainCtaTitle: "Ready to Start Sharing?",
          mainCtaSubtitle: "Download our app and begin your first screen sharing session in minutes",
          primaryCtaText: "Download App",
          platforms: [
            {
              icon: Monitor,
              name: "Desktop",
              description: "Windows, macOS, Linux",
              features: ["Full screen sharing", "Application sharing", "Remote control"]
            },
            {
              icon: Smartphone,
              name: "Mobile",
              description: "iOS, Android",
              features: ["Screen mirroring", "Camera sharing", "Touch annotations"]
            },
            {
              icon: Tablet,
              name: "Tablet",
              description: "iPad, Android tablets",
              features: ["Large screen support", "Pen annotations", "Multi-touch gestures"]
            }
          ],
          finalCtaTitle: "Transform Your Collaboration Today",
          finalCtaSubtitle: "Experience the power of seamless screen sharing and take your team's productivity to the next level"
        }
      }
    ]
  },
  'online-meetings': {
    sections: [
      {
        component: DynamicHero,
        props: {
          bannerText: "New Online Meetings Premium - AI-powered collaboration for intelligent meetings",
          title: "Online Meetings",
          subtitle: "Host professional meetings from anywhere with crystal-clear video, advanced collaboration tools, and seamless integration across all devices.",
          primaryCtaText: "Start Meeting Now",
          secondaryCtaText: "Watch Demo",
          stats: [
            { value: "50M+", label: "Meetings Hosted" },
            { value: "4K", label: "Video Quality" },
            { value: "99.9%", label: "Reliability" },
            { value: "24/7", label: "Support" }
          ]
        }
      },
      {
        component: DynamicFeatures,
        props: {
          title: "Express More with",
          subtitle: "Transform your meetings with powerful online meeting features designed for modern teams and professionals.",
          features: [
            {
              icon: Video,
              title: "HD Video Conferencing",
              description: "Crystal clear video calls with adaptive quality that works perfectly on any connection speed."
            },
            {
              icon: Users,
              title: "Large Meeting Support",
              description: "Host meetings with up to 1000 participants with advanced moderation and management tools."
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              description: "Bank-level encryption and security features to protect your sensitive meeting content."
            },
            {
              icon: Zap,
              title: "Instant Join",
              description: "Join meetings instantly with one-click access and no downloads required for participants."
            },
            {
              icon: CheckCircle,
              title: "Meeting Recording",
              description: "Record your meetings automatically with cloud storage and easy sharing capabilities."
            },
            {
              icon: Settings,
              title: "Advanced Controls",
              description: "Manage participants, control permissions, and customize your meeting experience."
            },
            {
              icon: BarChart3,
              title: "Meeting Analytics",
              description: "Track attendance, engagement, and meeting effectiveness with detailed analytics."
            },
            {
              icon: Lock,
              title: "Privacy Controls",
              description: "Control who can join, mute participants, and manage meeting privacy settings."
            }
          ],
          demoTitle: "See Online Meetings in Action",
          demoDescription: "Experience the power of our online meeting technology with this interactive demo. See how easy it is to host professional meetings.",
          demoFeatures: ["HD video quality", "Large participant support", "Advanced security"]
        }
      },
      {
        component: DynamicBenefits,
        props: {
          title: "How Online Meetings Can",
          subtitle: "Discover the powerful benefits that online meetings bring to modern businesses and how they can revolutionize your team's communication.",
          benefits: [
            {
              icon: TrendingUp,
              title: "Increased Efficiency",
              description: "Online meetings eliminate travel time and enable instant collaboration, boosting team efficiency by up to 50%."
            },
            {
              icon: Globe,
              title: "Global Reach",
              description: "Connect with team members, clients, and partners worldwide without geographical limitations."
            },
            {
              icon: Users,
              title: "Better Engagement",
              description: "Interactive features and visual communication improve engagement and participation in meetings."
            },
            {
              icon: Clock,
              title: "Time Optimization",
              description: "Schedule and join meetings instantly, reducing setup time and increasing productivity."
            },
            {
              icon: DollarSign,
              title: "Cost Savings",
              description: "Eliminate travel costs, meeting room expenses, and infrastructure costs while maintaining quality."
            },
            {
              icon: Target,
              title: "Improved Outcomes",
              description: "Better collaboration tools lead to more productive meetings and better decision-making."
            }
          ],
          statsTitle: "Online Meeting Impact",
          statsSubtitle: "Real numbers from businesses using our online meeting technology",
          useCasesTitle: "Popular Use Cases",
          useCases: [
            { title: "Team Standups", description: "Daily team meetings with video conferencing for better engagement and communication." },
            { title: "Client Presentations", description: "Professional presentations with screen sharing and interactive features." },
            { title: "Training Sessions", description: "Interactive training with recording capabilities and participant engagement tools." },
            { title: "Board Meetings", description: "Secure board meetings with advanced privacy controls and recording features." },
            { title: "Sales Calls", description: "Professional sales calls with presentation tools and follow-up capabilities." },
            { title: "Remote Interviews", description: "Conduct interviews remotely with high-quality video and recording features." }
          ]
        }
      },
      {
        component: DynamicFAQ,
        props: {
          subtitle: "Get answers to common questions about online meeting technology, features, and how it can benefit your team.",
          faqs: [
            {
              question: "What is an online meeting?",
              answer: "An online meeting is a virtual gathering that allows participants to connect via video, audio, and chat from anywhere in the world. It enables real-time collaboration, presentations, and discussions without the need for physical presence."
            },
            {
              question: "How many people can join an online meeting?",
              answer: "Our online meeting solution supports up to 1000 participants depending on your plan. Free users can host meetings with up to 100 participants, while premium plans offer larger capacity."
            },
            {
              question: "What internet speed do I need for online meetings?",
              answer: "For optimal experience, we recommend a minimum of 1 Mbps upload and download speed. Our adaptive technology automatically adjusts quality based on your connection to ensure smooth meetings."
            },
            {
              question: "Can I record online meetings?",
              answer: "Yes, you can record your online meetings for later review, training purposes, or documentation. Recordings are saved securely and can be shared with team members."
            },
            {
              question: "Is it secure to host online meetings?",
              answer: "Our online meeting platform uses enterprise-grade encryption and security features. You can set passwords, waiting rooms, and control participant access to ensure meeting security."
            }
          ]
        }
      },
      {
        component: DynamicGetStarted,
        props: {
          title: "Get Started with Online Meetings Today",
          subtitle: "Join millions of users who are already transforming their communication with our powerful online meeting technology.",
          mainCtaTitle: "Ready to Start Meeting?",
          mainCtaSubtitle: "Download our app and begin your first online meeting in minutes",
          primaryCtaText: "Download App",
          platforms: [
            {
              icon: Monitor,
              name: "Desktop",
              description: "Windows, macOS, Linux",
              features: ["Full meeting features", "Screen sharing", "Advanced controls"]
            },
            {
              icon: Smartphone,
              name: "Mobile",
              description: "iOS, Android",
              features: ["Mobile optimized", "Camera sharing", "Touch controls"]
            },
            {
              icon: Tablet,
              name: "Tablet",
              description: "iPad, Android tablets",
              features: ["Large screen support", "Pen annotations", "Multi-touch gestures"]
            }
          ],
          finalCtaTitle: "Transform Your Meetings Today",
          finalCtaSubtitle: "Experience the power of seamless online meetings and take your team's communication to the next level"
        }
      }
    ]
  },
  'video-conferencing': {
    sections: [
      {
        component: DynamicHero,
        props: {
          bannerText: "New Video Conferencing Premium - AI-powered collaboration for intelligent video calls",
          title: "Video Conferencing",
          subtitle: "Connect with anyone, anywhere, anytime with crystal-clear video quality and advanced collaboration features.",
          primaryCtaText: "Start Video Call",
          secondaryCtaText: "Watch Demo",
          stats: [
            { value: "25M+", label: "Video Calls" },
            { value: "4K", label: "Video Quality" },
            { value: "99.9%", label: "Reliability" },
            { value: "24/7", label: "Support" }
          ]
        }
      },
      {
        component: DynamicFeatures,
        props: {
          title: "Express More with",
          subtitle: "Transform your video calls with powerful conferencing features designed for modern teams and professionals.",
          features: [
            {
              icon: Video,
              title: "HD Video Quality",
              description: "Crystal clear video calls with adaptive quality that works perfectly on any connection speed."
            },
            {
              icon: Users,
              title: "Group Video Calls",
              description: "Host video calls with up to 1000 participants with advanced moderation and management tools."
            },
            {
              icon: Shield,
              title: "Secure Calls",
              description: "Bank-level encryption and security features to protect your sensitive video conversations."
            },
            {
              icon: Zap,
              title: "Instant Connection",
              description: "Join video calls instantly with one-click access and no downloads required for participants."
            },
            {
              icon: CheckCircle,
              title: "Call Recording",
              description: "Record your video calls automatically with cloud storage and easy sharing capabilities."
            },
            {
              icon: Settings,
              title: "Advanced Controls",
              description: "Manage participants, control permissions, and customize your video call experience."
            },
            {
              icon: BarChart3,
              title: "Call Analytics",
              description: "Track attendance, engagement, and call effectiveness with detailed analytics."
            },
            {
              icon: Lock,
              title: "Privacy Controls",
              description: "Control who can join, mute participants, and manage call privacy settings."
            }
          ],
          demoTitle: "See Video Conferencing in Action",
          demoDescription: "Experience the power of our video conferencing technology with this interactive demo.",
          demoFeatures: ["HD video quality", "Large participant support", "Advanced security"]
        }
      },
      {
        component: DynamicBenefits,
        props: {
          title: "How Video Conferencing Can",
          subtitle: "Discover the powerful benefits that video conferencing brings to modern businesses and how it can revolutionize your team's communication.",
          benefits: [
            {
              icon: TrendingUp,
              title: "Increased Productivity",
              description: "Video conferencing enables face-to-face communication without travel, boosting team productivity by up to 40%."
            },
            {
              icon: Globe,
              title: "Global Collaboration",
              description: "Connect with team members worldwide instantly, breaking down geographical barriers."
            },
            {
              icon: Users,
              title: "Better Communication",
              description: "Visual communication through video calls reduces misunderstandings and builds stronger relationships."
            },
            {
              icon: Clock,
              title: "Time Savings",
              description: "Save hours of travel time with instant video conferencing capabilities from anywhere."
            },
            {
              icon: DollarSign,
              title: "Cost Reduction",
              description: "Reduce travel costs, meeting expenses, and infrastructure costs while maintaining quality."
            },
            {
              icon: Target,
              title: "Improved Engagement",
              description: "Face-to-face video calls increase engagement and participation in meetings and discussions."
            }
          ],
          statsTitle: "Video Conferencing Impact",
          statsSubtitle: "Real numbers from businesses using our video conferencing technology",
          useCasesTitle: "Popular Use Cases",
          useCases: [
            { title: "Team Meetings", description: "Regular team meetings with video conferencing for better engagement." },
            { title: "Client Calls", description: "Professional client calls with high-quality video and screen sharing." },
            { title: "Training Sessions", description: "Interactive training with video conferencing and recording capabilities." },
            { title: "Interviews", description: "Remote interviews with high-quality video and professional features." },
            { title: "Sales Calls", description: "Professional sales calls with presentation tools and follow-up capabilities." },
            { title: "Board Meetings", description: "Secure board meetings with advanced privacy controls and recording." }
          ]
        }
      },
      {
        component: DynamicFAQ,
        props: {
          subtitle: "Get answers to common questions about video conferencing technology, features, and how it can benefit your team.",
          faqs: [
            {
              question: "What is video conferencing?",
              answer: "Video conferencing is a technology that allows people to conduct face-to-face meetings over the internet using video and audio. It enables real-time communication and collaboration without physical presence."
            },
            {
              question: "How many people can join a video call?",
              answer: "You can host video calls with up to 1000 participants depending on your plan. Free users can host calls with up to 100 participants, while premium plans offer larger capacity."
            },
            {
              question: "What internet speed do I need for video calls?",
              answer: "For optimal experience, we recommend a minimum of 1 Mbps upload and download speed. Our adaptive technology automatically adjusts quality based on your connection."
            },
            {
              question: "Can I record video calls?",
              answer: "Yes, you can record your video calls for later review, training purposes, or documentation. Recordings are saved securely and can be shared with team members."
            },
            {
              question: "Is video conferencing secure?",
              answer: "Our video conferencing platform uses enterprise-grade encryption and security features. You can set passwords, waiting rooms, and control participant access."
            }
          ]
        }
      },
      {
        component: DynamicGetStarted,
        props: {
          title: "Get Started with Video Conferencing Today",
          subtitle: "Join millions of users who are already transforming their communication with our powerful video conferencing technology.",
          mainCtaTitle: "Ready to Start Video Calling?",
          mainCtaSubtitle: "Download our app and begin your first video call in minutes",
          primaryCtaText: "Download App",
          platforms: [
            {
              icon: Monitor,
              name: "Desktop",
              description: "Windows, macOS, Linux",
              features: ["Full video features", "Screen sharing", "Advanced controls"]
            },
            {
              icon: Smartphone,
              name: "Mobile",
              description: "iOS, Android",
              features: ["Mobile optimized", "Camera sharing", "Touch controls"]
            },
            {
              icon: Tablet,
              name: "Tablet",
              description: "iPad, Android tablets",
              features: ["Large screen support", "Pen annotations", "Multi-touch gestures"]
            }
          ],
          finalCtaTitle: "Transform Your Communication Today",
          finalCtaSubtitle: "Experience the power of seamless video conferencing and take your team's communication to the next level"
        }
      }
    ]
  },
  'instant-messaging': {
    sections: [
      {
        component: DynamicHero,
        props: {
          bannerText: "New Instant Messaging Premium - AI-powered collaboration for intelligent chat",
          title: "Instant Messaging",
          subtitle: "Real-time communication for teams with advanced features, file sharing, and seamless integration across all devices.",
          primaryCtaText: "Start Chatting",
          secondaryCtaText: "Watch Demo",
          stats: [
            { value: "100M+", label: "Messages Sent" },
            { value: "Real-time", label: "Delivery" },
            { value: "99.9%", label: "Reliability" },
            { value: "24/7", label: "Support" }
          ]
        }
      },
      {
        component: DynamicFeatures,
        props: {
          title: "Express More with",
          subtitle: "Transform your team communication with powerful instant messaging features designed for modern teams and professionals.",
          features: [
            {
              icon: MessageCircle,
              title: "Real-time Chat",
              description: "Instant messaging with read receipts, typing indicators, and real-time notifications."
            },
            {
              icon: FileText,
              title: "File Sharing",
              description: "Share documents, images, and files instantly with drag-and-drop functionality."
            },
            {
              icon: Shield,
              title: "Secure Messaging",
              description: "End-to-end encryption and security features to protect your sensitive conversations."
            },
            {
              icon: Zap,
              title: "Instant Delivery",
              description: "Messages are delivered instantly with push notifications across all devices."
            },
            {
              icon: Users,
              title: "Group Chats",
              description: "Create unlimited group chats with team members for better collaboration."
            },
            {
              icon: Search,
              title: "Message Search",
              description: "Find any message with powerful search capabilities and filters."
            },
            {
              icon: Settings,
              title: "Advanced Controls",
              description: "Manage conversations, control permissions, and customize your chat experience."
            },
            {
              icon: BarChart3,
              title: "Chat Analytics",
              description: "Track engagement, response times, and communication effectiveness."
            }
          ],
          demoTitle: "See Instant Messaging in Action",
          demoDescription: "Experience the power of our instant messaging technology with this interactive demo.",
          demoFeatures: ["Real-time delivery", "File sharing", "Advanced security"]
        }
      },
      {
        component: DynamicBenefits,
        props: {
          title: "How Instant Messaging Can",
          subtitle: "Discover the powerful benefits that instant messaging brings to modern businesses and how it can revolutionize your team's communication.",
          benefits: [
            {
              icon: TrendingUp,
              title: "Increased Efficiency",
              description: "Instant messaging enables quick communication and decision-making, boosting team efficiency by up to 30%."
            },
            {
              icon: Globe,
              title: "Global Communication",
              description: "Connect with team members worldwide instantly, regardless of time zones or locations."
            },
            {
              icon: Users,
              title: "Better Collaboration",
              description: "Real-time messaging fosters better collaboration and keeps everyone informed and connected."
            },
            {
              icon: Clock,
              title: "Time Savings",
              description: "Quick questions and answers save time compared to emails or phone calls."
            },
            {
              icon: DollarSign,
              title: "Cost Reduction",
              description: "Reduce communication costs while maintaining high-quality team collaboration."
            },
            {
              icon: Target,
              title: "Improved Engagement",
              description: "Instant messaging increases team engagement and participation in discussions."
            }
          ],
          statsTitle: "Instant Messaging Impact",
          statsSubtitle: "Real numbers from businesses using our instant messaging technology",
          useCasesTitle: "Popular Use Cases",
          useCases: [
            { title: "Team Communication", description: "Daily team communication with instant messaging for quick updates and discussions." },
            { title: "Project Collaboration", description: "Project teams using instant messaging for real-time collaboration and updates." },
            { title: "Customer Support", description: "Quick customer support with instant messaging and file sharing capabilities." },
            { title: "Remote Work", description: "Remote teams staying connected with instant messaging and video calls." },
            { title: "Sales Teams", description: "Sales teams using instant messaging for quick updates and client communication." },
            { title: "Emergency Communication", description: "Emergency communication with instant messaging for urgent updates." }
          ]
        }
      },
      {
        component: DynamicFAQ,
        props: {
          subtitle: "Get answers to common questions about instant messaging technology, features, and how it can benefit your team.",
          faqs: [
            {
              question: "What is instant messaging?",
              answer: "Instant messaging is a form of real-time communication that allows users to send and receive text messages instantly over the internet. It enables quick, efficient communication between team members."
            },
            {
              question: "Can I search through old messages?",
              answer: "Yes, our powerful search feature lets you find any message instantly. You can search by keywords, date, sender, or conversation."
            },
            {
              question: "Are messages encrypted?",
              answer: "All messages are end-to-end encrypted for maximum security. We implement enterprise-grade encryption to protect your conversations."
            },
            {
              question: "Can I create group chats?",
              answer: "Yes, you can create unlimited group chats with team members. Group chats support file sharing, reactions, and advanced moderation features."
            },
            {
              question: "What devices support instant messaging?",
              answer: "Our instant messaging solution works across all major platforms including Windows, macOS, Linux, iOS, and Android."
            }
          ]
        }
      },
      {
        component: DynamicGetStarted,
        props: {
          title: "Get Started with Instant Messaging Today",
          subtitle: "Join millions of users who are already transforming their communication with our powerful instant messaging technology.",
          mainCtaTitle: "Ready to Start Chatting?",
          mainCtaSubtitle: "Download our app and begin your first conversation in minutes",
          primaryCtaText: "Download App",
          platforms: [
            {
              icon: Monitor,
              name: "Desktop",
              description: "Windows, macOS, Linux",
              features: ["Full messaging features", "File sharing", "Advanced controls"]
            },
            {
              icon: Smartphone,
              name: "Mobile",
              description: "iOS, Android",
              features: ["Mobile optimized", "Push notifications", "Touch controls"]
            },
            {
              icon: Tablet,
              name: "Tablet",
              description: "iPad, Android tablets",
              features: ["Large screen support", "Pen annotations", "Multi-touch gestures"]
            }
          ],
          finalCtaTitle: "Transform Your Communication Today",
          finalCtaSubtitle: "Experience the power of seamless instant messaging and take your team's communication to the next level"
        }
      }
    ]
  }
} 