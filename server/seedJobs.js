const mongoose = require('mongoose');
const Job = require('./models/Job'); // adjust the path if needed

const MONGODB_URI = 'mongodb+srv://dubeysarthak47:dubeysarthak@job.0adyv1u.mongodb.net/?retryWrites=true&w=majority&appName=job'; // change to your DB name or URI

const jobs = [
  {
    title: 'Frontend Developer',
    company: 'TechVision',
    location: 'New York, NY',
    description: 'Develop and maintain React applications.',
    link: 'https://techvision.com/jobs/frontend-developer',
  },
  {
    title: 'Backend Developer',
    company: 'CodeWorks',
    location: 'San Francisco, CA',
    description: 'Build scalable APIs using Node.js and Express.',
    link: 'https://codeworks.com/careers/backend',
  },
  {
    title: 'Full Stack Developer',
    company: 'Innovatech',
    location: 'Seattle, WA',
    description: 'Work on full stack solutions using MERN stack.',
    link: 'https://innovatech.io/jobs/fullstack',
  },
  {
    title: 'Data Scientist',
    company: 'DataX',
    location: 'Boston, MA',
    description: 'Analyze large datasets and build predictive models.',
    link: 'https://datax.ai/careers/data-scientist',
  },
  {
    title: 'DevOps Engineer',
    company: 'Cloudify',
    location: 'Remote',
    description: 'Automate CI/CD pipelines and manage cloud infrastructure.',
    link: 'https://cloudify.dev/jobs/devops',
  },
  {
    title: 'Product Manager',
    company: 'Visionary Inc.',
    location: 'Austin, TX',
    description: 'Lead cross-functional teams to build product features.',
    link: 'https://visionary.jobs/product-manager',
  },
  {
    title: 'QA Engineer',
    company: 'TestRight',
    location: 'Chicago, IL',
    description: 'Create and manage automated testing frameworks.',
    link: 'https://testright.com/jobs/qa',
  },
  {
    title: 'UI/UX Designer',
    company: 'PixelPerfect',
    location: 'San Diego, CA',
    description: 'Design user-centric web interfaces and flows.',
    link: 'https://pixelperfect.design/careers/uiux',
  },
  {
    title: 'Machine Learning Engineer',
    company: 'DeepAI',
    location: 'Palo Alto, CA',
    description: 'Develop ML pipelines and deploy models to production.',
    link: 'https://deepai.tech/jobs/ml',
  },
  {
    title: 'Technical Writer',
    company: 'DocuLabs',
    location: 'Remote',
    description: 'Create technical documentation for APIs and SDKs.',
    link: 'https://doculabs.io/careers/technical-writer',
  },
  {
    title: 'Business Analyst',
    company: 'InsightCorp',
    location: 'Newark, NJ',
    description: 'Translate business needs into functional requirements.',
    link: 'https://insightcorp.com/jobs/ba',
  },
  {
    title: 'Software Architect',
    company: 'Systematic',
    location: 'Houston, TX',
    description: 'Design system-level architecture and patterns.',
    link: 'https://systematic.tech/jobs/architect',
  },
  {
    title: 'iOS Developer',
    company: 'Appify',
    location: 'San Jose, CA',
    description: 'Build native iOS apps using Swift.',
    link: 'https://appify.io/careers/ios',
  },
  {
    title: 'Android Developer',
    company: 'DroidSpace',
    location: 'Los Angeles, CA',
    description: 'Develop Android applications using Kotlin.',
    link: 'https://droidspace.dev/jobs/android',
  },
  {
    title: 'Tech Support Specialist',
    company: 'HelpDesk Co.',
    location: 'Phoenix, AZ',
    description: 'Provide technical support and troubleshooting help.',
    link: 'https://helpdeskco.com/jobs/tech-support',
  },
  {
    title: 'Security Analyst',
    company: 'SafeNet',
    location: 'Washington, DC',
    description: 'Monitor and mitigate security threats.',
    link: 'https://safenet.io/jobs/security',
  },
  {
    title: 'Cloud Engineer',
    company: 'NimbusCloud',
    location: 'Denver, CO',
    description: 'Manage AWS and Azure cloud deployments.',
    link: 'https://nimbuscloud.tech/careers/cloud',
  },
  {
    title: 'System Administrator',
    company: 'InfraBase',
    location: 'Atlanta, GA',
    description: 'Maintain and optimize IT infrastructure.',
    link: 'https://infrabase.io/jobs/sysadmin',
  },
  {
    title: 'Scrum Master',
    company: 'AgileForce',
    location: 'Miami, FL',
    description: 'Facilitate Agile ceremonies and remove team blockers.',
    link: 'https://agileforce.com/jobs/scrum-master',
  },
  {
    title: 'Database Administrator',
    company: 'DataSecure',
    location: 'Detroit, MI',
    description: 'Manage and optimize PostgreSQL and MongoDB instances.',
    link: 'https://datasecure.io/jobs/dba',
  },
  {
    title: 'Frontend Developer',
    company: 'TechVerse',
    location: 'Bangalore, India',
    description: 'Develop responsive web UIs using React and Tailwind CSS',
    link: 'https://techverse.in/careers/frontend-dev'
  },
  {
    title: 'Backend Developer',
    company: 'DataForge',
    location: 'Hyderabad, India',
    description: 'Build scalable REST APIs with Node.js and MongoDB',
    link: 'https://dataforge.in/jobs/backend'
  },
  {
    title: 'Full Stack Developer',
    company: 'Stackify',
    location: 'Pune, India',
    description: 'Work on frontend and backend in a MERN stack project',
    link: 'https://stackify.in/careers/fullstack'
  },
  {
    title: 'Mobile App Developer',
    company: 'AppWiz',
    location: 'Mumbai, India',
    description: 'Develop cross-platform apps using Flutter',
    link: 'https://appwiz.in/careers/flutter-dev'
  },
  {
    title: 'DevOps Engineer',
    company: 'CloudNova',
    location: 'Chennai, India',
    description: 'Set up CI/CD pipelines and manage cloud infrastructure',
    link: 'https://cloudnova.in/jobs/devops'
  },
  {
    title: 'UI/UX Designer',
    company: 'PixelMint',
    location: 'Ahmedabad, India',
    description: 'Design user-centric interfaces and conduct usability testing',
    link: 'https://pixelmint.in/careers/uiux'
  },
  {
    title: 'Data Scientist',
    company: 'DataCrux',
    location: 'Delhi, India',
    description: 'Analyze large datasets and build predictive models',
    link: 'https://datacrux.in/jobs/datascientist'
  },
  {
    title: 'AI Engineer',
    company: 'NeuroBit',
    location: 'Kolkata, India',
    description: 'Develop AI solutions using TensorFlow and PyTorch',
    link: 'https://neurobit.in/careers/ai'
  },
  {
    title: 'Cybersecurity Analyst',
    company: 'SecureNet',
    location: 'Noida, India',
    description: 'Monitor and secure network infrastructure from threats',
    link: 'https://securenet.in/careers/security'
  },
  {
    title: 'Cloud Engineer',
    company: 'SkyBase',
    location: 'Gurgaon, India',
    description: 'Deploy and manage applications on AWS and Azure',
    link: 'https://skybase.in/jobs/cloud'
  },
  {
  title: 'Backend Developer',
  company: 'DataCraft',
  location: 'Hyderabad, India',
  description: 'Design and implement scalable APIs using Node.js and Express',
  link: 'https://datacraft.in/jobs/backend'
},
{
  title: 'Full Stack Engineer',
  company: 'CodeNest',
  location: 'Mumbai, India',
  description: 'Work across the frontend and backend with React and Node.js',
  link: 'https://codenest.io/careers/fullstack'
},
{
  title: 'DevOps Engineer',
  company: 'InfraMind',
  location: 'Pune, India',
  description: 'Manage CI/CD pipelines and Kubernetes infrastructure',
  link: 'https://inframind.in/jobs/devops'
},
{
  title: 'Software Tester',
  company: 'BugSquash',
  location: 'Noida, India',
  description: 'Conduct manual and automated testing using Selenium',
  link: 'https://bugsquash.in/careers/tester'
},
{
  title: 'Cloud Architect',
  company: 'SkyNet Systems',
  location: 'Chennai, India',
  description: 'Architect scalable cloud platforms on AWS and Azure',
  link: 'https://skynet.in/jobs/cloud-architect'
},
{
  title: 'Data Scientist',
  company: 'DeepData Labs',
  location: 'Bangalore, India',
  description: 'Build predictive models using Python and machine learning',
  link: 'https://deepdatalabs.ai/careers/data-scientist'
},
{
  title: 'AI Engineer',
  company: 'NeuroTech',
  location: 'Gurgaon, India',
  description: 'Develop AI applications using TensorFlow and NLP',
  link: 'https://neurotech.in/jobs/ai-engineer'
},
{
  title: 'Cybersecurity Analyst',
  company: 'SecureNow',
  location: 'Kolkata, India',
  description: 'Monitor systems and respond to cyber threats',
  link: 'https://securenow.in/careers/cybersecurity'
},
{
  title: 'Mobile App Developer',
  company: 'AppCrate',
  location: 'Ahmedabad, India',
  description: 'Build mobile apps with Flutter and React Native',
  link: 'https://appcrate.in/jobs/mobile-dev'
},
{
  title: 'Blockchain Developer',
  company: 'ChainWorks',
  location: 'Bangalore, India',
  description: 'Create smart contracts and blockchain dApps on Ethereum',
  link: 'https://chainworks.io/careers/blockchain'
},
{
  title: 'UI/UX Designer',
  company: 'PixelBay',
  location: 'Hyderabad, India',
  description: 'Design intuitive interfaces using Figma and Adobe XD',
  link: 'https://pixelbay.in/jobs/ui-ux'
},
{
  title: 'Machine Learning Engineer',
  company: 'ModelMind',
  location: 'Mumbai, India',
  description: 'Implement ML pipelines and deploy models to production',
  link: 'https://modelmind.ai/careers/ml-engineer'
},
{
  title: 'Game Developer',
  company: 'PlayForge Studios',
  location: 'Chennai, India',
  description: 'Develop 2D/3D games using Unity and C#',
  link: 'https://playforge.in/jobs/game-dev'
},
{
  title: 'Tech Support Engineer',
  company: 'HelpDesk Hero',
  location: 'Pune, India',
  description: 'Provide technical support and resolve customer issues',
  link: 'https://helpdeskhero.in/careers/support'
},
{
  title: 'Database Engineer',
  company: 'DataNest',
  location: 'Jaipur, India',
  description: 'Manage PostgreSQL and MongoDB databases for scalability',
  link: 'https://datanest.in/jobs/database'
},
{
  title: 'Site Reliability Engineer',
  company: 'ReliCloud',
  location: 'Bangalore, India',
  description: 'Ensure uptime and reliability of cloud systems',
  link: 'https://relicloud.in/careers/sre'
},
{
  title: 'Systems Engineer',
  company: 'TechGrid',
  location: 'Delhi, India',
  description: 'Maintain server infrastructure and automate operations',
  link: 'https://techgrid.in/jobs/systems'
},
{
  title: 'Product Manager',
  company: 'InnovaTech',
  location: 'Noida, India',
  description: 'Lead product development and manage roadmaps',
  link: 'https://innovatech.in/careers/product'
},
{
  title: 'Technical Writer',
  company: 'DocuCraft',
  location: 'Hyderabad, India',
  description: 'Create technical documentation and guides',
  link: 'https://docucraft.in/jobs/writer'
},
{
  title: 'QA Automation Engineer',
  company: 'AutoTest',
  location: 'Kochi, India',
  description: 'Automate test cases using Cypress and Selenium',
  link: 'https://autotest.in/careers/qa'
},
{
  title: 'ETL Developer',
  company: 'DataMove',
  location: 'Chandigarh, India',
  description: 'Build and manage ETL pipelines using Apache NiFi',
  link: 'https://datamove.in/jobs/etl-dev'
},
{
  title: 'Network Engineer',
  company: 'ConnectIT',
  location: 'Indore, India',
  description: 'Maintain and secure network infrastructure',
  link: 'https://connectit.in/careers/network'
},
{
  title: 'Computer Vision Engineer',
  company: 'VisionWorks',
  location: 'Nagpur, India',
  description: 'Develop vision-based solutions using OpenCV and Deep Learning',
  link: 'https://visionworks.in/jobs/cv'
},
{
  title: 'Technical Recruiter',
  company: 'HireLoop',
  location: 'Lucknow, India',
  description: 'Recruit top tech talent for fast-growing startups',
  link: 'https://hireloop.in/careers/recruiter'
},
{
  title: 'Firmware Engineer',
  company: 'EmbedLab',
  location: 'Bhopal, India',
  description: 'Develop embedded software for IoT devices',
  link: 'https://embedlab.in/jobs/firmware'
},
{
  title: 'IT Support Specialist',
  company: 'TechAssist',
  location: 'Thiruvananthapuram, India',
  description: 'Support users with desktop, software, and network issues',
  link: 'https://techassist.in/careers/it-support'
},
{
  title: 'Digital Marketing Analyst',
  company: 'MarketLabs',
  location: 'Surat, India',
  description: 'Use Google Analytics, SEO, and SEM to drive traffic',
  link: 'https://marketlabs.in/jobs/digital-marketing'
},
{
  title: 'Scrum Master',
  company: 'AgileTrack',
  location: 'Vijayawada, India',
  description: 'Facilitate Agile ceremonies and coach product teams',
  link: 'https://agiletrack.in/careers/scrum-master'
},
{
  title: 'BI Analyst',
  company: 'InsightIQ',
  location: 'Amritsar, India',
  description: 'Create dashboards and analyze KPIs using Power BI',
  link: 'https://insightiq.in/jobs/bi-analyst'
},
{
  title: 'Penetration Tester',
  company: 'HackSecure',
  location: 'Rajkot, India',
  description: 'Perform ethical hacking and application security tests',
  link: 'https://hacksecure.in/careers/pen-tester'
},
{
  title: 'Voice Assistant Developer',
  company: 'VoiceBot AI',
  location: 'Udaipur, India',
  description: 'Build voice-based interfaces using Alexa SDK and Dialogflow',
  link: 'https://voicebot.in/jobs/assistant-dev'
},
{
    title: 'Data Engineer',
    company: 'InfoCraft',
    location: 'Gurgaon, India',
    description: 'Develop and manage scalable data pipelines using Hadoop and Spark.',
    link: 'https://infocraft.com/jobs/dataengineer',
  },
  {
    title: 'Mobile App Developer',
    company: 'AppVelocity',
    location: 'Hyderabad, India',
    description: 'Design and build Android and iOS apps using Flutter.',
    link: 'https://appvelocity.io/careers/mobiledeveloper',
  },
  {
    title: 'UI/UX Designer',
    company: 'VisualNest',
    location: 'Chandigarh, India',
    description: 'Craft intuitive and attractive user interfaces with Figma.',
    link: 'https://visualnest.in/jobs/uiux',
  },
  {
    title: 'Site Reliability Engineer',
    company: 'CloudFix',
    location: 'Kochi, India',
    description: 'Maintain and scale cloud infrastructure using Kubernetes and Prometheus.',
    link: 'https://cloudfix.in/careers/sre',
  },
  {
    title: 'Business Analyst',
    company: 'TechScope',
    location: 'Jaipur, India',
    description: 'Analyze business needs and deliver technical solutions using Agile methodologies.',
    link: 'https://techscope.io/careers/ba',
  },
  {
    title: 'Frontend Developer',
    company: 'WebNest',
    location: 'Noida, India',
    description: 'Build responsive interfaces using React and Tailwind CSS.',
    link: 'https://webnest.io/jobs/frontend',
  },
  {
    title: 'Backend Developer',
    company: 'CoreStack',
    location: 'Ahmedabad, India',
    description: 'Develop scalable APIs using Node.js and Express.',
    link: 'https://corestack.io/careers/backenddev',
  },
  {
    title: 'DevOps Engineer',
    company: 'DeployPro',
    location: 'Indore, India',
    description: 'Implement CI/CD pipelines and manage cloud deployments.',
    link: 'https://deploypro.in/jobs/devops',
  },
  {
    title: 'Full Stack Developer',
    company: 'StackCraft',
    location: 'Nagpur, India',
    description: 'Work across the stack with MERN technologies.',
    link: 'https://stackcraft.io/jobs/fullstack',
  },
  {
    title: 'QA Tester',
    company: 'BugHunter',
    location: 'Bhubaneswar, India',
    description: 'Test web and mobile apps, write automation scripts.',
    link: 'https://bughunter.in/careers/qa',
  },
  {
    title: 'AI Researcher',
    company: 'NeuralGrid',
    location: 'Pune, India',
    description: 'Explore deep learning techniques and NLP models.',
    link: 'https://neuralgrid.ai/jobs/ai-researcher',
  },
  {
    title: 'Cybersecurity Analyst',
    company: 'SecureNet',
    location: 'Lucknow, India',
    description: 'Monitor and respond to security threats.',
    link: 'https://securenet.in/careers/cybersecurity',
  },
  {
    title: 'Blockchain Developer',
    company: 'ChainBuild',
    location: 'Surat, India',
    description: 'Create smart contracts on Ethereum and Polygon.',
    link: 'https://chainbuild.io/jobs/blockchain',
  },
  {
    title: 'Product Manager',
    company: 'IdeaBox',
    location: 'Vadodara, India',
    description: 'Lead product strategy and coordinate with dev teams.',
    link: 'https://ideabox.in/careers/pm',
  },
  {
    title: 'Cloud Engineer',
    company: 'SkyNetCloud',
    location: 'Mysore, India',
    description: 'Design and manage solutions on AWS and Azure.',
    link: 'https://skynetcloud.in/jobs/cloudengineer',
  },
  {
    title: 'Tech Support Specialist',
    company: 'HelpDeskPro',
    location: 'Ranchi, India',
    description: 'Provide L1 and L2 support for SaaS clients.',
    link: 'https://helpdeskpro.in/careers/techsupport',
  },
  {
    title: 'Database Administrator',
    company: 'DBCraft',
    location: 'Patna, India',
    description: 'Optimize MySQL and MongoDB database performance.',
    link: 'https://dbcraft.io/jobs/dba',
  },
  {
    title: 'Data Scientist',
    company: 'PredictiveAI',
    location: 'Bhopal, India',
    description: 'Build ML models for predictive analytics.',
    link: 'https://predictiveai.in/careers/datascientist',
  },
  {
    title: 'Game Developer',
    company: 'PlayLogic',
    location: 'Kolkata, India',
    description: 'Develop 2D and 3D games using Unity.',
    link: 'https://playlogic.in/jobs/gamedev',
  },
  {
    title: 'Technical Writer',
    company: 'DocuGen',
    location: 'Dehradun, India',
    description: 'Create technical documents and API guides.',
    link: 'https://docugen.io/careers/writer',
  },
  {
    title: 'Web Developer',
    company: 'PageMint',
    location: 'Amritsar, India',
    description: 'Develop and maintain CMS-based websites.',
    link: 'https://pagemint.io/jobs/webdeveloper',
  },
  {
    title: 'Machine Learning Engineer',
    company: 'AlgoNest',
    location: 'Trivandrum, India',
    description: 'Train and deploy ML pipelines.',
    link: 'https://algonest.ai/careers/mlengineer',
  },
  {
    title: 'Graphic Designer',
    company: 'PixelPeak',
    location: 'Udaipur, India',
    description: 'Design creatives for digital and print media.',
    link: 'https://pixelpeak.in/jobs/designer',
  },
  {
    title: 'System Administrator',
    company: 'SysSecure',
    location: 'Jodhpur, India',
    description: 'Maintain server infrastructure and internal networks.',
    link: 'https://syssecure.in/jobs/sysadmin',
  },
  {
    title: 'Embedded Systems Engineer',
    company: 'MicroChipTech',
    location: 'Coimbatore, India',
    description: 'Develop firmware for IoT devices.',
    link: 'https://microchiptech.in/jobs/embedded',
  },
  {
    title: 'Robotics Engineer',
    company: 'AutoBots',
    location: 'Nashik, India',
    description: 'Build control algorithms and hardware integration.',
    link: 'https://autobots.in/jobs/robotics',
  },
  {
    title: 'Content Strategist',
    company: 'ThinkPen',
    location: 'Gwalior, India',
    description: 'Plan and produce tech-focused content.',
    link: 'https://thinkpen.io/careers/content',
  },
  {
    title: 'CRM Specialist',
    company: 'EngageSuite',
    location: 'Vijayawada, India',
    description: 'Customize and manage Salesforce and HubSpot.',
    link: 'https://engagesuite.in/jobs/crm',
  },
  {
    title: 'Network Engineer',
    company: 'NetConfig',
    location: 'Raipur, India',
    description: 'Manage routers, switches and network security.',
    link: 'https://netconfig.io/jobs/networking',
  },
  {
    title: 'SEO Analyst',
    company: 'RankPro',
    location: 'Guwahati, India',
    description: 'Optimize content for better search visibility.',
    link: 'https://rankpro.io/careers/seo',
  },
  {
    title: 'Voice UI Developer',
    company: 'VoicePilot',
    location: 'Kanpur, India',
    description: 'Build Alexa and Google Assistant skills.',
    link: 'https://voicepilot.io/jobs/voiceui',
  },
  {
    title: 'AR/VR Developer',
    company: 'ImmersiTech',
    location: 'Agra, India',
    description: 'Create augmented and virtual reality experiences.',
    link: 'https://immersitech.io/jobs/arvr',
  },
  {
    title: 'Digital Marketing Manager',
    company: 'GrowthBolt',
    location: 'Hubli, India',
    description: 'Lead performance marketing campaigns.',
    link: 'https://growthbolt.io/careers/marketing',
  },
  {
    title: 'Analytics Engineer',
    company: 'InsightForge',
    location: 'Bareilly, India',
    description: 'Translate business data into dashboards and metrics.',
    link: 'https://insightforge.io/jobs/analytics',
  },
  {
    title: 'Data Architect',
    company: 'SchemaSoft',
    location: 'Jabalpur, India',
    description: 'Design scalable data warehouse solutions.',
    link: 'https://schemasoft.in/jobs/dataarchitect',
  },
  {
    title: 'Ethical Hacker',
    company: 'HackLabs',
    location: 'Dhanbad, India',
    description: 'Perform penetration testing and report vulnerabilities.',
    link: 'https://hacklabs.in/careers/ethicalhacker',
  },
  {
    title: 'IT Support Executive',
    company: 'TechAssist',
    location: 'Siliguri, India',
    description: 'Troubleshoot IT issues for end-users.',
    link: 'https://techassist.io/jobs/itsupport',
  },
  {
    title: 'Software Engineer Intern',
    company: 'CodeCrate',
    location: 'Aligarh, India',
    description: 'Learn full-stack development and Agile practices.',
    link: 'https://codecrate.in/jobs/intern',
  },
  {
    title: 'IoT Developer',
    company: 'SmartNodes',
    location: 'Vellore, India',
    description: 'Develop smart sensor devices using MQTT and Python.',
    link: 'https://smartnodes.io/careers/iot',
  },
  {
    title: 'Security Analyst',
    company: 'CyberSentinel',
    location: 'Thrissur, India',
    description: 'Analyze logs and investigate security incidents.',
    link: 'https://cybersentinel.in/jobs/security',
  },
  {
    title: 'Scrum Master',
    company: 'AgileSphere',
    location: 'Warangal, India',
    description: 'Facilitate sprints and Agile ceremonies.',
    link: 'https://agilesphere.io/careers/scrum',
  },
  {
    title: 'Linux System Engineer',
    company: 'KernelOps',
    location: 'Bhagalpur, India',
    description: 'Administer Linux systems and shell scripting.',
    link: 'https://kernelops.in/jobs/linux',
  },
  {
    title: 'Java Developer',
    company: 'CodeBrew',
    location: 'Meerut, India',
    description: 'Build enterprise-grade web applications.',
    link: 'https://codebrew.io/jobs/java',
  },
  {
    title: 'Technical Recruiter',
    company: 'HireForge',
    location: 'Ajmer, India',
    description: 'Manage technical hiring pipeline for startups.',
    link: 'https://hireforge.io/careers/recruiter',
  },
  {
    title: 'Hardware Engineer',
    company: 'TechCircuit',
    location: 'Ujjain, India',
    description: 'Design PCBs and embedded hardware systems.',
    link: 'https://techcircuit.io/jobs/hardware',
  },
  {
    title: 'Big Data Engineer',
    company: 'DataLake',
    location: 'Solapur, India',
    description: 'Implement big data solutions with Hadoop and Spark.',
    link: 'https://datalake.in/careers/bigdata',
  },
  {
    title: 'Python Developer',
    company: 'PyCodeTech',
    location: 'Jamnagar, India',
    description: 'Develop web apps using Django and Flask.',
    link: 'https://pycodetech.in/jobs/python',
  },
  {
    title: 'React Native Developer',
    company: 'MobioLab',
    location: 'Gaya, India',
    description: 'Create cross-platform mobile apps using React Native.',
    link: 'https://mobiolab.io/careers/reactnative',
  },{
    "title": "IT Support Executive",
    "company": "NetConfig",
    "location": "Ludhiana, India",
    "description": "Maintain cloud infrastructure and ensure high availability.",
    "link": "https://datawave.io/jobs/frontenddeveloper"
  },
  {
    "title": "Voice UI Developer",
    "company": "CyberSentinel",
    "location": "Hyderabad, India",
    "description": "Manage data pipelines and ETL processes.",
    "link": "https://neuralgrid.io/jobs/backenddeveloper"
  },
  {
    "title": "Content Strategist",
    "company": "NeuralGrid",
    "location": "Gwalior, India",
    "description": "Research and develop innovative AI models.",
    "link": "https://cybergrid.io/jobs/fullstackdeveloper"
  },
  {
    "title": "Power BI Developer",
    "company": "PixelPeak",
    "location": "Raipur, India",
    "description": "Research and develop innovative AI models.",
    "link": "https://deploypro.io/jobs/datascientist"
  },
  {
    "title": "Database Administrator",
    "company": "MicroChipTech",
    "location": "Nashik, India",
    "description": "Analyze and visualize data for strategic decision making.",
    "link": "https://helpdeskpro.io/jobs/devopsengineer"
  },
  {
    "title": "Software Engineer 6",
    "company": "TechCorp6",
    "location": "City7, India",
    "description": "Description for job role number 6.",
    "link": "https://company6.com/jobs/softwareengineer6"
  },
  {
    "title": "Software Engineer 7",
    "company": "TechCorp7",
    "location": "City8, India",
    "description": "Description for job role number 7.",
    "link": "https://company7.com/jobs/softwareengineer7"
  },
  {
    "title": "Software Engineer 8",
    "company": "TechCorp8",
    "location": "City9, India",
    "description": "Description for job role number 8.",
    "link": "https://company8.com/jobs/softwareengineer8"
  },
  {
    "title": "Software Engineer 9",
    "company": "TechCorp9",
    "location": "City10, India",
    "description": "Description for job role number 9.",
    "link": "https://company9.com/jobs/softwareengineer9"
  },
  {
    "title": "Software Engineer 10",
    "company": "TechCorp10",
    "location": "City11, India",
    "description": "Description for job role number 10.",
    "link": "https://company10.com/jobs/softwareengineer10"
  },
  {
    "title": "Software Engineer 11",
    "company": "TechCorp11",
    "location": "City12, India",
    "description": "Description for job role number 11.",
    "link": "https://company11.com/jobs/softwareengineer11"
  },
  {
    "title": "Software Engineer 12",
    "company": "TechCorp12",
    "location": "City13, India",
    "description": "Description for job role number 12.",
    "link": "https://company12.com/jobs/softwareengineer12"
  },
  {
    "title": "Software Engineer 13",
    "company": "TechCorp13",
    "location": "City14, India",
    "description": "Description for job role number 13.",
    "link": "https://company13.com/jobs/softwareengineer13"
  },
  {
    "title": "Software Engineer 14",
    "company": "TechCorp14",
    "location": "City15, India",
    "description": "Description for job role number 14.",
    "link": "https://company14.com/jobs/softwareengineer14"
  },
  {
    "title": "Software Engineer 15",
    "company": "TechCorp15",
    "location": "City16, India",
    "description": "Description for job role number 15.",
    "link": "https://company15.com/jobs/softwareengineer15"
  },
  {
    "title": "Software Engineer 16",
    "company": "TechCorp16",
    "location": "City17, India",
    "description": "Description for job role number 16.",
    "link": "https://company16.com/jobs/softwareengineer16"
  },
  {
    "title": "Software Engineer 17",
    "company": "TechCorp17",
    "location": "City18, India",
    "description": "Description for job role number 17.",
    "link": "https://company17.com/jobs/softwareengineer17"
  },
  {
    "title": "Software Engineer 18",
    "company": "TechCorp18",
    "location": "City19, India",
    "description": "Description for job role number 18.",
    "link": "https://company18.com/jobs/softwareengineer18"
  },
  {
    "title": "Software Engineer 19",
    "company": "TechCorp19",
    "location": "City20, India",
    "description": "Description for job role number 19.",
    "link": "https://company19.com/jobs/softwareengineer19"
  },
  {
    "title": "Software Engineer 20",
    "company": "TechCorp20",
    "location": "City1, India",
    "description": "Description for job role number 20.",
    "link": "https://company20.com/jobs/softwareengineer20"
  },
  {
    "title": "Software Engineer 21",
    "company": "TechCorp21",
    "location": "City2, India",
    "description": "Description for job role number 21.",
    "link": "https://company21.com/jobs/softwareengineer21"
  },
  {
    "title": "Software Engineer 22",
    "company": "TechCorp22",
    "location": "City3, India",
    "description": "Description for job role number 22.",
    "link": "https://company22.com/jobs/softwareengineer22"
  },
  {
    "title": "Software Engineer 23",
    "company": "TechCorp23",
    "location": "City4, India",
    "description": "Description for job role number 23.",
    "link": "https://company23.com/jobs/softwareengineer23"
  },
  {
    "title": "Software Engineer 24",
    "company": "TechCorp24",
    "location": "City5, India",
    "description": "Description for job role number 24.",
    "link": "https://company24.com/jobs/softwareengineer24"
  },
  {
    "title": "Software Engineer 25",
    "company": "TechCorp25",
    "location": "City6, India",
    "description": "Description for job role number 25.",
    "link": "https://company25.com/jobs/softwareengineer25"
  },
  {
    "title": "Software Engineer 26",
    "company": "TechCorp26",
    "location": "City7, India",
    "description": "Description for job role number 26.",
    "link": "https://company26.com/jobs/softwareengineer26"
  },
  {
    "title": "Software Engineer 27",
    "company": "TechCorp27",
    "location": "City8, India",
    "description": "Description for job role number 27.",
    "link": "https://company27.com/jobs/softwareengineer27"
  },
  {
    "title": "Software Engineer 28",
    "company": "TechCorp28",
    "location": "City9, India",
    "description": "Description for job role number 28.",
    "link": "https://company28.com/jobs/softwareengineer28"
  },
  {
    "title": "Software Engineer 29",
    "company": "TechCorp29",
    "location": "City10, India",
    "description": "Description for job role number 29.",
    "link": "https://company29.com/jobs/softwareengineer29"
  },
  {
    "title": "Software Engineer 30",
    "company": "TechCorp30",
    "location": "City11, India",
    "description": "Description for job role number 30.",
    "link": "https://company30.com/jobs/softwareengineer30"
  },
  {
    "title": "Software Engineer 31",
    "company": "TechCorp31",
    "location": "City12, India",
    "description": "Description for job role number 31.",
    "link": "https://company31.com/jobs/softwareengineer31"
  },
  {
    "title": "Software Engineer 32",
    "company": "TechCorp32",
    "location": "City13, India",
    "description": "Description for job role number 32.",
    "link": "https://company32.com/jobs/softwareengineer32"
  },
  {
    "title": "Software Engineer 33",
    "company": "TechCorp33",
    "location": "City14, India",
    "description": "Description for job role number 33.",
    "link": "https://company33.com/jobs/softwareengineer33"
  },
  {
    "title": "Software Engineer 34",
    "company": "TechCorp34",
    "location": "City15, India",
    "description": "Description for job role number 34.",
    "link": "https://company34.com/jobs/softwareengineer34"
  },
  {
    "title": "Software Engineer 35",
    "company": "TechCorp35",
    "location": "City16, India",
    "description": "Description for job role number 35.",
    "link": "https://company35.com/jobs/softwareengineer35"
  },
  {
    "title": "Software Engineer 36",
    "company": "TechCorp36",
    "location": "City17, India",
    "description": "Description for job role number 36.",
    "link": "https://company36.com/jobs/softwareengineer36"
  },
  {
    "title": "Software Engineer 37",
    "company": "TechCorp37",
    "location": "City18, India",
    "description": "Description for job role number 37.",
    "link": "https://company37.com/jobs/softwareengineer37"
  },
  {
    "title": "Software Engineer 38",
    "company": "TechCorp38",
    "location": "City19, India",
    "description": "Description for job role number 38.",
    "link": "https://company38.com/jobs/softwareengineer38"
  },
  {
    "title": "Software Engineer 39",
    "company": "TechCorp39",
    "location": "City20, India",
    "description": "Description for job role number 39.",
    "link": "https://company39.com/jobs/softwareengineer39"
  },
  {
    "title": "Software Engineer 40",
    "company": "TechCorp40",
    "location": "City1, India",
    "description": "Description for job role number 40.",
    "link": "https://company40.com/jobs/softwareengineer40"
  },
  {
    "title": "Software Engineer 41",
    "company": "TechCorp41",
    "location": "City2, India",
    "description": "Description for job role number 41.",
    "link": "https://company41.com/jobs/softwareengineer41"
  },
  {
    "title": "Software Engineer 42",
    "company": "TechCorp42",
    "location": "City3, India",
    "description": "Description for job role number 42.",
    "link": "https://company42.com/jobs/softwareengineer42"
  },
  {
    "title": "Software Engineer 43",
    "company": "TechCorp43",
    "location": "City4, India",
    "description": "Description for job role number 43.",
    "link": "https://company43.com/jobs/softwareengineer43"
  },
  {
    "title": "Software Engineer 44",
    "company": "TechCorp44",
    "location": "City5, India",
    "description": "Description for job role number 44.",
    "link": "https://company44.com/jobs/softwareengineer44"
  },
  {
    "title": "Software Engineer 45",
    "company": "TechCorp45",
    "location": "City6, India",
    "description": "Description for job role number 45.",
    "link": "https://company45.com/jobs/softwareengineer45"
  },
  {
    "title": "Software Engineer 46",
    "company": "TechCorp46",
    "location": "City7, India",
    "description": "Description for job role number 46.",
    "link": "https://company46.com/jobs/softwareengineer46"
  },
  {
    "title": "Software Engineer 47",
    "company": "TechCorp47",
    "location": "City8, India",
    "description": "Description for job role number 47.",
    "link": "https://company47.com/jobs/softwareengineer47"
  },
  {
    "title": "Software Engineer 48",
    "company": "TechCorp48",
    "location": "City9, India",
    "description": "Description for job role number 48.",
    "link": "https://company48.com/jobs/softwareengineer48"
  },
  {
    "title": "Software Engineer 49",
    "company": "TechCorp49",
    "location": "City10, India",
    "description": "Description for job role number 49.",
    "link": "https://company49.com/jobs/softwareengineer49"
  },
  {
    "title": "Software Engineer 50",
    "company": "TechCorp50",
    "location": "City11, India",
    "description": "Description for job role number 50.",
    "link": "https://company50.com/jobs/softwareengineer50"
  },
  {
    "title": "Software Engineer 51",
    "company": "TechCorp51",
    "location": "City12, India",
    "description": "Description for job role number 51.",
    "link": "https://company51.com/jobs/softwareengineer51"
  },
  {
    "title": "Software Engineer 52",
    "company": "TechCorp52",
    "location": "City13, India",
    "description": "Description for job role number 52.",
    "link": "https://company52.com/jobs/softwareengineer52"
  },
  {
    "title": "Software Engineer 53",
    "company": "TechCorp53",
    "location": "City14, India",
    "description": "Description for job role number 53.",
    "link": "https://company53.com/jobs/softwareengineer53"
  },
  {
    "title": "Software Engineer 54",
    "company": "TechCorp54",
    "location": "City15, India",
    "description": "Description for job role number 54.",
    "link": "https://company54.com/jobs/softwareengineer54"
  },
  {
    "title": "Software Engineer 55",
    "company": "TechCorp55",
    "location": "City16, India",
    "description": "Description for job role number 55.",
    "link": "https://company55.com/jobs/softwareengineer55"
  },
  {
    "title": "Software Engineer 56",
    "company": "TechCorp56",
    "location": "City17, India",
    "description": "Description for job role number 56.",
    "link": "https://company56.com/jobs/softwareengineer56"
  },
  {
    "title": "Software Engineer 57",
    "company": "TechCorp57",
    "location": "City18, India",
    "description": "Description for job role number 57.",
    "link": "https://company57.com/jobs/softwareengineer57"
  },
  {
    "title": "Software Engineer 58",
    "company": "TechCorp58",
    "location": "City19, India",
    "description": "Description for job role number 58.",
    "link": "https://company58.com/jobs/softwareengineer58"
  },
  {
    "title": "Software Engineer 59",
    "company": "TechCorp59",
    "location": "City20, India",
    "description": "Description for job role number 59.",
    "link": "https://company59.com/jobs/softwareengineer59"
  },
  {
    "title": "Software Engineer 60",
    "company": "TechCorp60",
    "location": "City1, India",
    "description": "Description for job role number 60.",
    "link": "https://company60.com/jobs/softwareengineer60"
  },
  {
    "title": "Software Engineer 61",
    "company": "TechCorp61",
    "location": "City2, India",
    "description": "Description for job role number 61.",
    "link": "https://company61.com/jobs/softwareengineer61"
  },
  {
    "title": "Software Engineer 62",
    "company": "TechCorp62",
    "location": "City3, India",
    "description": "Description for job role number 62.",
    "link": "https://company62.com/jobs/softwareengineer62"
  },
  {
    "title": "Software Engineer 63",
    "company": "TechCorp63",
    "location": "City4, India",
    "description": "Description for job role number 63.",
    "link": "https://company63.com/jobs/softwareengineer63"
  },
  {
    "title": "Software Engineer 64",
    "company": "TechCorp64",
    "location": "City5, India",
    "description": "Description for job role number 64.",
    "link": "https://company64.com/jobs/softwareengineer64"
  },
  {
    "title": "Software Engineer 65",
    "company": "TechCorp65",
    "location": "City6, India",
    "description": "Description for job role number 65.",
    "link": "https://company65.com/jobs/softwareengineer65"
  },
  {
    "title": "Software Engineer 66",
    "company": "TechCorp66",
    "location": "City7, India",
    "description": "Description for job role number 66.",
    "link": "https://company66.com/jobs/softwareengineer66"
  },
  {
    "title": "Software Engineer 67",
    "company": "TechCorp67",
    "location": "City8, India",
    "description": "Description for job role number 67.",
    "link": "https://company67.com/jobs/softwareengineer67"
  },
  {
    "title": "Software Engineer 68",
    "company": "TechCorp68",
    "location": "City9, India",
    "description": "Description for job role number 68.",
    "link": "https://company68.com/jobs/softwareengineer68"
  },
  {
    "title": "Software Engineer 69",
    "company": "TechCorp69",
    "location": "City10, India",
    "description": "Description for job role number 69.",
    "link": "https://company69.com/jobs/softwareengineer69"
  },
  {
    "title": "Software Engineer 70",
    "company": "TechCorp70",
    "location": "City11, India",
    "description": "Description for job role number 70.",
    "link": "https://company70.com/jobs/softwareengineer70"
  },
  {
    "title": "Software Engineer 71",
    "company": "TechCorp71",
    "location": "City12, India",
    "description": "Description for job role number 71.",
    "link": "https://company71.com/jobs/softwareengineer71"
  },
  {
    "title": "Software Engineer 72",
    "company": "TechCorp72",
    "location": "City13, India",
    "description": "Description for job role number 72.",
    "link": "https://company72.com/jobs/softwareengineer72"
  },
  {
    "title": "Software Engineer 73",
    "company": "TechCorp73",
    "location": "City14, India",
    "description": "Description for job role number 73.",
    "link": "https://company73.com/jobs/softwareengineer73"
  },
  {
    "title": "Software Engineer 74",
    "company": "TechCorp74",
    "location": "City15, India",
    "description": "Description for job role number 74.",
    "link": "https://company74.com/jobs/softwareengineer74"
  },
  {
    "title": "Software Engineer 75",
    "company": "TechCorp75",
    "location": "City16, India",
    "description": "Description for job role number 75.",
    "link": "https://company75.com/jobs/softwareengineer75"
  },
  {
    "title": "Software Engineer 76",
    "company": "TechCorp76",
    "location": "City17, India",
    "description": "Description for job role number 76.",
    "link": "https://company76.com/jobs/softwareengineer76"
  },
  {
    "title": "Software Engineer 77",
    "company": "TechCorp77",
    "location": "City18, India",
    "description": "Description for job role number 77.",
    "link": "https://company77.com/jobs/softwareengineer77"
  },
  {
    "title": "Software Engineer 78",
    "company": "TechCorp78",
    "location": "City19, India",
    "description": "Description for job role number 78.",
    "link": "https://company78.com/jobs/softwareengineer78"
  },
  {
    "title": "Software Engineer 79",
    "company": "TechCorp79",
    "location": "City20, India",
    "description": "Description for job role number 79.",
    "link": "https://company79.com/jobs/softwareengineer79"
  },
  {
    "title": "Software Engineer 80",
    "company": "TechCorp80",
    "location": "City1, India",
    "description": "Description for job role number 80.",
    "link": "https://company80.com/jobs/softwareengineer80"
  },
  {
    "title": "Software Engineer 81",
    "company": "TechCorp81",
    "location": "City2, India",
    "description": "Description for job role number 81.",
    "link": "https://company81.com/jobs/softwareengineer81"
  },
  {
    "title": "Software Engineer 82",
    "company": "TechCorp82",
    "location": "City3, India",
    "description": "Description for job role number 82.",
    "link": "https://company82.com/jobs/softwareengineer82"
  },
  {
    "title": "Software Engineer 83",
    "company": "TechCorp83",
    "location": "City4, India",
    "description": "Description for job role number 83.",
    "link": "https://company83.com/jobs/softwareengineer83"
  },
  {
    "title": "Software Engineer 84",
    "company": "TechCorp84",
    "location": "City5, India",
    "description": "Description for job role number 84.",
    "link": "https://company84.com/jobs/softwareengineer84"
  },
  {
    "title": "Software Engineer 85",
    "company": "TechCorp85",
    "location": "City6, India",
    "description": "Description for job role number 85.",
    "link": "https://company85.com/jobs/softwareengineer85"
  },
  {
    "title": "Software Engineer 86",
    "company": "TechCorp86",
    "location": "City7, India",
    "description": "Description for job role number 86.",
    "link": "https://company86.com/jobs/softwareengineer86"
  },
  {
    "title": "Software Engineer 87",
    "company": "TechCorp87",
    "location": "City8, India",
    "description": "Description for job role number 87.",
    "link": "https://company87.com/jobs/softwareengineer87"
  },
  {
    "title": "Software Engineer 88",
    "company": "TechCorp88",
    "location": "City9, India",
    "description": "Description for job role number 88.",
    "link": "https://company88.com/jobs/softwareengineer88"
  },
  {
    "title": "Software Engineer 89",
    "company": "TechCorp89",
    "location": "City10, India",
    "description": "Description for job role number 89.",
    "link": "https://company89.com/jobs/softwareengineer89"
  },
  {
    "title": "Software Engineer 90",
    "company": "TechCorp90",
    "location": "City11, India",
    "description": "Description for job role number 90.",
    "link": "https://company90.com/jobs/softwareengineer90"
  },
  {
    "title": "Software Engineer 91",
    "company": "TechCorp91",
    "location": "City12, India",
    "description": "Description for job role number 91.",
    "link": "https://company91.com/jobs/softwareengineer91"
  },
  {
    "title": "Software Engineer 92",
    "company": "TechCorp92",
    "location": "City13, India",
    "description": "Description for job role number 92.",
    "link": "https://company92.com/jobs/softwareengineer92"
  },
  {
    "title": "Software Engineer 93",
    "company": "TechCorp93",
    "location": "City14, India",
    "description": "Description for job role number 93.",
    "link": "https://company93.com/jobs/softwareengineer93"
  },
  {
    "title": "Software Engineer 94",
    "company": "TechCorp94",
    "location": "City15, India",
    "description": "Description for job role number 94.",
    "link": "https://company94.com/jobs/softwareengineer94"
  },
  {
    "title": "Software Engineer 95",
    "company": "TechCorp95",
    "location": "City16, India",
    "description": "Description for job role number 95.",
    "link": "https://company95.com/jobs/softwareengineer95"
  },
  {
    "title": "Software Engineer 96",
    "company": "TechCorp96",
    "location": "City17, India",
    "description": "Description for job role number 96.",
    "link": "https://company96.com/jobs/softwareengineer96"
  },
  {
    "title": "Software Engineer 97",
    "company": "TechCorp97",
    "location": "City18, India",
    "description": "Description for job role number 97.",
    "link": "https://company97.com/jobs/softwareengineer97"
  },
  {
    "title": "Software Engineer 98",
    "company": "TechCorp98",
    "location": "City19, India",
    "description": "Description for job role number 98.",
    "link": "https://company98.com/jobs/softwareengineer98"
  },
  {
    "title": "Software Engineer 99",
    "company": "TechCorp99",
    "location": "City20, India",
    "description": "Description for job role number 99.",
    "link": "https://company99.com/jobs/softwareengineer99"
  },
  {
    "title": "Software Engineer 100",
    "company": "TechCorp100",
    "location": "City1, India",
    "description": "Description for job role number 100.",
    "link": "https://company100.com/jobs/softwareengineer100"
  },
  {
    title: 'Frontend Developer',
    company: 'CodeCraft',
    location: 'Bangalore, Karnataka',
    description: 'Develop interactive UIs using React.js and modern JavaScript.',
    link: 'https://codecraft.in/careers/frontend-developer'
  },
  {
    title: 'Backend Engineer',
    company: 'DataNest',
    location: 'Pune, Maharashtra',
    description: 'Build and maintain scalable APIs using Node.js and Express.',
    link: 'https://datanest.io/jobs/backend-engineer'
  },
  {
    title: 'Full Stack Developer',
    company: 'StackNova',
    location: 'Hyderabad, Telangana',
    description: 'Work across the stack using MERN technologies.',
    link: 'https://stacknova.com/careers/full-stack'
  },
  {
    title: 'UI/UX Designer',
    company: 'PixelForge',
    location: 'Chennai, Tamil Nadu',
    description: 'Design seamless experiences and user flows for web apps.',
    link: 'https://pixelforge.in/jobs/uiux-designer'
  },
  {
    title: 'Mobile App Developer',
    company: 'AppVelocity',
    location: 'Kolkata, West Bengal',
    description: 'Develop and deploy cross-platform mobile apps with Flutter.',
    link: 'https://appvelocity.io/careers/mobile-developer'
  },
  {
    title: 'DevOps Engineer',
    company: 'InfraMatrix',
    location: 'Gurgaon, Haryana',
    description: 'Implement CI/CD pipelines and manage cloud infrastructure.',
    link: 'https://inframatrix.in/careers/devops-engineer'
  },
  {
    title: 'QA Automation Engineer',
    company: 'TestBench',
    location: 'Noida, Uttar Pradesh',
    description: 'Automate test cases using Selenium and Cypress.',
    link: 'https://testbench.io/jobs/qa-automation'
  },
  {
    title: 'AI Researcher',
    company: 'NeuroNet',
    location: 'Mumbai, Maharashtra',
    description: 'Work on machine learning models and NLP algorithms.',
    link: 'https://neuronet.ai/careers/ai-researcher'
  },
  {
    title: 'Cloud Engineer',
    company: 'SkyStack',
    location: 'Ahmedabad, Gujarat',
    description: 'Deploy cloud-native apps using AWS and Kubernetes.',
    link: 'https://skystack.in/jobs/cloud-engineer'
  },
  {
    title: 'Cybersecurity Analyst',
    company: 'SecureCore',
    location: 'Nagpur, Maharashtra',
    description: 'Monitor systems for threats and vulnerabilities.',
    link: 'https://securecore.io/careers/cybersecurity-analyst'
  },
  {
    title: 'Machine Learning Engineer',
    company: 'TechScape',
    location: 'Jaipur, Rajasthan',
    description: 'Work on mission-critical systems with a high level of ownership.',
    link: 'https://techscape.in/careers/machine-learning-engineer'
  },
  {
    title: 'Product Manager',
    company: 'BlueMatrix',
    location: 'Surat, Gujarat',
    description: 'Design and build scalable backend services using microservices architecture.',
    link: 'https://bluematrix.in/careers/product-manager'
  },
  {
    title: 'DevOps Engineer',
    company: 'CloudNet Solutions',
    location: 'Nagpur, Maharashtra',
    description: 'Ensure reliable deployment pipelines and scalable infrastructure.',
    link: 'https://cloudnet.in/jobs/devops-engineer'
  },
  {
    title: 'Cybersecurity Analyst',
    company: 'SecureLayer7',
    location: 'Chandigarh, Punjab',
    description: 'Monitor and defend networks from cyber threats.',
    link: 'https://securelayer7.net/jobs/cybersecurity-analyst'
  },
  {
    title: 'Full Stack Developer',
    company: 'WebFusion',
    location: 'Bhopal, Madhya Pradesh',
    description: 'Build and maintain front-end and back-end applications.',
    link: 'https://webfusion.dev/careers/full-stack-dev'
  },
  {
    title: 'UI/UX Designer',
    company: 'PixelCurve',
    location: 'Coimbatore, Tamil Nadu',
    description: 'Design user-friendly interfaces and interactive user experiences.',
    link: 'https://pixelcurve.in/careers/ui-ux-designer'
  },
  {
    title: 'Android Developer',
    company: 'DroidLabs',
    location: 'Kochi, Kerala',
    description: 'Develop robust Android applications for a large user base.',
    link: 'https://droidlabs.io/jobs/android-developer'
  },
  {
    title: 'iOS Developer',
    company: 'SwiftByte',
    location: 'Dehradun, Uttarakhand',
    description: 'Build smooth and scalable iOS applications.',
    link: 'https://swiftbyte.app/careers/ios-developer'
  },
  {
    title: 'Data Engineer',
    company: 'DataBridge',
    location: 'Ranchi, Jharkhand',
    description: 'Create and manage data pipelines and warehousing solutions.',
    link: 'https://databridge.ai/careers/data-engineer'
  },
  {
    title: 'QA Automation Engineer',
    company: 'Testly',
    location: 'Vijayawada, Andhra Pradesh',
    description: 'Automate testing processes and ensure software quality.',
    link: 'https://testly.io/jobs/qa-automation'
  }

];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    await Job.deleteMany(); // optional: clears existing jobs
    const inserted = await Job.insertMany(jobs);
    console.log(`Inserted ${inserted.length} jobs`);
  } catch (err) {
    console.error('Error seeding jobs:', err);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

seedDatabase();
