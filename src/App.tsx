import React, { useState } from 'react';
import SahasranandImage from './assets/sah_pic.png';
import ShreyImage from './assets/shreyansh_Photo_5kb.jpg';
import YashImage from './assets/yash yadav.jpg';
import { Brain, Database, Eye, FileCode2, Network, GitBranch, Cpu, BookOpen, X, 
  Camera, Notebook as Robot, MessageSquare, Lightbulb, Code, HardDrive, Settings, 
  Trophy, Users, Medal, Rocket, Mail, Phone, GraduationCap, Briefcase, BookText, Layers, Microscope } from 'lucide-react';
import { images } from './assets/images';

const getProjectIcon = (area) => {
  switch(area) {
    case 'Computer Vision':
      return <Camera className="w-6 h-6 text-amber-500 flex-shrink-0" />;
    case 'Deep Learning':
      return <Robot className="w-6 h-6 text-amber-500 flex-shrink-0" />;
    case 'Natural Language Processing':
      return <MessageSquare className="w-6 h-6 text-amber-500 flex-shrink-0" />;
    case 'Explainable AI':
      return <Lightbulb className="w-6 h-6 text-amber-500 flex-shrink-0" />;
    case 'Machine Learning':
      return <Code className="w-6 h-6 text-amber-500 flex-shrink-0" />;
    case 'Distributed Storage Systems':
      return <HardDrive className="w-6 h-6 text-amber-500 flex-shrink-0" />;
    case 'Optimization':
      return <Settings className="w-6 h-6 text-amber-500 flex-shrink-0" />;
    default:
      return null;
  }
};

const projectsByArea = {
  'Computer Vision': [
    'Glacial lake segmentation from Landsat Image',
    'Scene Text Recognition for Indic Scripts',
    'Deep Fake Detection With Justification'
  ],
  'Deep Learning': [
    'Classification of Noisy Acoustic Underwater Signals',
    'Soil Moisture Prediction Using Explainable AI/ML',
    'Crop Yield Prediction Using Deep Learning',
    'Molecule Generations Using Flow Model',
    'Bayesian Deep Learning: Continual Meta-Learning Over Heterogeneous Tasks'
  ],
  'Natural Language Processing': [
    'Knowledge Graphs Representation For Numerical Facts',
    'Consolidating Extracted Assertions for Numerical Facts',
    'Machine Translation from Khasi to English',
    'Solving Math Word Problem'
  ],
  'Explainable AI': [
    'Python Library for Generating Counterfactual Explanations for Algorithmic Recourse',
    'StegaVisionNet : An Explainable Approach for Steganography Detection and Decryption'
  ],
  'Machine Learning': [
    'Efficient Algorithms for High Dimensional Sparse Recovery using Compressed Sensing'
  ],
  'Distributed Storage Systems': [
    'Analyzing Low Field Size Constructions for Access-Optimal Convertible Codes'
  ],
  'Optimization': []
};

const researchAreas = [
  {
    title: 'Computer Vision',
    icon: <Eye className="w-8 h-8 mb-4 text-amber-500" />,
    description: 'Advanced image processing and visual understanding systems'
  },
  {
    title: 'Deep Learning',
    icon: <Brain className="w-8 h-8 mb-4 text-amber-500" />,
    description: 'Neural networks and advanced AI architectures'
  },
  {
    title: 'Natural Language Processing',
    icon: <FileCode2 className="w-8 h-8 mb-4 text-amber-500" />,
    description: 'Text analysis and language understanding systems'
  },
  {
    title: 'Explainable AI',
    icon: <BookOpen className="w-8 h-8 mb-4 text-amber-500" />,
    description: 'Transparent and interpretable AI systems'
  },
  {
    title: 'Machine Learning',
    icon: <Cpu className="w-8 h-8 mb-4 text-amber-500" />,
    description: 'Statistical modeling and predictive analytics'
  },
  {
    title: 'Distributed Storage Systems',
    icon: <Database className="w-8 h-8 mb-4 text-amber-500" />,
    description: 'Scalable and efficient data storage solutions'
  },
  {
    title: 'Optimization',
    icon: <GitBranch className="w-8 h-8 mb-4 text-amber-500" />,
    description: 'Advanced algorithms and performance tuning'
  }
];

const skills = [
  'Python', 'Data Analysis', 'Big Data', 'Computer Vision',
  'scikit-learn', 'NumPy', 'MLOps', 'Pandas',
  'TensorFlow', 'Keras', 'SQL', 'Spark', 'Hadoop','Data Visualization' , 'Exploratory Data Analysis',  'Machine Learning' , 'Deep Learning', 'Natural Language Processing',  'Reinforcement Learning' , 'Data Mining' ,'Data Engineering', 'Multiagent Systems'
];

const interIITAchievements = [
  {
    company: 'Adobe',
    position: '9th',
    description: 'Innovative solutions in computer vision and AI image differentiation'
  },
  {
    company: 'Dream11',
    position: '4th',
    description: 'Exceptional predictive models and AI-based app redevelopment'
  },
  {
    company: 'Astronomy',
    position: '5th',
    description: 'Stellar performance in celestial data analysis using telescopes'
  },
  {
    company: 'ISRO Data Analytics',
    position: '8th',
    description: 'Overcoming challenges in handling massive datasets'
  },
  {
    company: 'Pathway',
    position: '12th',
    description: 'Developing a RAG based chatbot with industry and real world use cases'
  },
  {
    company: 'Zelta Untrade',
    position: '13th',
    description: 'Innovative trading strategies for BTC and ETH market'
  }
];

const educationalHighlights = [
  {
    icon: <BookText className="w-10 h-10 text-amber-500" />,
    title: "First Principles Approach",
    description: "Our courses emphasize learning from the first principles of Data Science and AI with a focus on solving real-world and interdisciplinary problems."
  },
  {
    icon: <Layers className="w-10 h-10 text-amber-500" />,
    title: "Balanced Curriculum",
    description: "Courses on Machine Learning and AI focus on fundamentals, while Data Engineering and System Architecture cover engineering aspects. Advanced topics include Computer Vision, NLP, and Privacy."
  },
  {
    icon: <Microscope className="w-10 h-10 text-amber-500" />,
    title: "Hands-on Experience",
    description: "Project-based courses allow students to apply theoretical knowledge to real-world problems, providing practical exposure to cutting-edge technologies and tools."
  },
  {
    icon: <Briefcase className="w-10 h-10 text-amber-500" />,
    title: "Industry Integration",
    description: "UG students are encouraged to take up industry internships, while MTech students undertake year-long industry projects as part of their curriculum requirement."
  }
];

function Modal({ isOpen, onClose, title, projects }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-3xl w-full max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h3 className="text-2xl font-semibold text-gray-900">{title} Projects</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          {projects.length > 0 ? (
            <ul className="space-y-4">
              {projects.map((project, index) => (
                <li
                  key={index}
                  className="p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-4 group"
                >
                  {getProjectIcon(title)}
                  <span className="text-lg font-medium text-gray-800 group-hover:text-amber-600 transition-colors">
                    {project}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center">No projects available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.hero}
            alt="Data Science Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Data Science Department
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Pioneering research in artificial intelligence, machine learning, and data analytics
          </p>
        </div>
      </header>

      {/* Why Recruit Our Students Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-amber-500" />
              <h2 className="text-3xl font-bold text-gray-900">Why Recruit Our Students?</h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our unique course designs prepare students with both theoretical foundations and practical skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {educationalHighlights.map((highlight, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="bg-amber-50 p-4 rounded-full flex-shrink-0">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-700">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="w-8 h-8 text-amber-600" />
              <h3 className="text-2xl font-bold text-gray-900">Industry & Research Excellence</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold text-lg">•</span>
                <p>The school provides a vibrant research environment through talks and visits by industry and academic experts.</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold text-lg">•</span>
                <p>Students are nurtured to publish research papers at the top venues of Data Science and AI.</p>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 font-bold text-lg">•</span>
                <p>Industry experts offer specialized courses to bridge academic learning with real-world applications.</p>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-amber-100 rounded-lg border border-amber-300">
              <p className="text-amber-800 font-medium text-center">
                Our first batch of UG students are in their 3rd year and eagerly looking forward to industry internships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">
          Research Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-amber-200"
            >
              <div className="flex flex-col items-center text-center">
                {area.icon}
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <button
                  onClick={() => setSelectedArea(area.title)}
                  className="px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors font-medium"
                >
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">
            Key Technical Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-shadow duration-300 hover:bg-gray-50"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-amber-500 mb-2">50+</div>
            <div className="text-gray-600">Research Projects</div>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-amber-500 mb-2">100+</div>
            <div className="text-gray-600">Publications</div>
          </div>
          <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-amber-500 mb-2">30+</div>
            <div className="text-gray-600">Industry Partners</div>
          </div>
        </div>
      </section>

      {/* New AI Club Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-amber-500" />
                <h2 className="text-3xl font-bold text-gray-900">Beyond Academics</h2>
              </div>
              <h3 className="text-2xl font-semibold text-amber-600 mb-4">
                CognifAI - AI Club IIT Palakkad
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                CognifAI aims to provide a platform for students to explore, learn, and create with AI, 
                empowering them to understand and contribute to these transformative technologies shaping our world. 
                Our mission is to cultivate a thriving AI culture, where exploration and innovation know no bounds.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors font-medium"
              >
                <Rocket className="w-5 h-5" />
                Visit Club Page
              </a>
            </div>
            <div className="flex-1">
              <img
                src={images.collaboration}
                alt="Students collaborating"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Student Achievements Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="w-8 h-8 text-amber-500" />
              <h2 className="text-3xl font-bold text-gray-900">Student Achievements</h2>
            </div>
            <p className="text-xl text-gray-700">
              IIT Palakkad's outstanding performances at the Inter IIT Tech Meet 13.0
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interIITAchievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-amber-100"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 p-3 rounded-full">
                    <Medal className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {achievement.company}
                    </h3>
                    <div className="text-amber-500 font-bold mb-2">
                      Secured {achievement.position} position
                    </div>
                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Hackathon Achievement */}
          <div className="mt-12 bg-white rounded-lg p-8 shadow-lg border border-amber-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Hackathons</h3>
            <div className="flex items-center gap-4">
              <div className="bg-amber-50 p-4 rounded-full">
                <Code className="w-8 h-8 text-amber-500" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  "The Architect" Hackathon by Zelta Labs
                </h4>
                <p className="text-gray-600 mt-2">
                  Successfully participated and demonstrated innovative solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coordinators Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Coordinators</h2>
            <p className="text-xl text-gray-700">
              Dedicated team ensuring seamless coordination between academia and industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Department CDC Representative */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src={SahasranandImage}
                  alt="Sahasranand K R"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sahasranand K R</h3>
                <p className="text-amber-600 font-medium mb-4">Department CDC Representative</p>
                <div className="space-y-2">
                  <a 
                    href="mailto:Sahasranand@iitpkd.ac.in" 
                    className="flex items-center gap-2 text-gray-600 hover:text-amber-500 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Sahasranand@iitpkd.ac.in</span>
                  </a>
                </div>
              </div>
            </div>

            {/* M.Tech Coordinator */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src={ShreyImage}
                  alt="Shreyansh Acharya"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Shreyansh Acharya</h3>
                <p className="text-amber-600 font-medium mb-4">M.Tech Student Placement CDC Coordinator</p>
                <div className="space-y-2">
                  <a 
                    href="tel:7060472773" 
                    className="flex items-center gap-2 text-gray-600 hover:text-amber-500 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 7060472773</span>
                  </a>
                  <a 
                    href="mailto:142302013@smail.iitpkd.ac.in" 
                    className="flex items-center gap-2 text-gray-600 hover:text-amber-500 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>142302013@smail.iitpkd.ac.in</span>
                  </a>
                </div>
              </div>
            </div>

            {/* B.Tech Coordinator */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src={YashImage}
                  alt="Yash Yadav"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Yash Yadav</h3>
                <p className="text-amber-600 font-medium mb-4">B.Tech Student Placement CDC Coordinator</p>
                <div className="space-y-2">
                  <a 
                    href="tel:9778069425" 
                    className="flex items-center gap-2 text-gray-600 hover:text-amber-500 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 9778069425</span>
                  </a>
                  <a 
                    href="mailto:144201024@smail.iitpkd.ac.in" 
                    className="flex items-center gap-2 text-gray-600 hover:text-amber-500 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>144201024@smail.iitpkd.ac.in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Network className="w-8 h-8 mx-auto mb-4 text-amber-500" />
          <p className="text-gray-400">
            © 2024 Data Science Department. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Projects Modal */}
      <Modal
        isOpen={selectedArea !== null}
        onClose={() => setSelectedArea(null)}
        title={selectedArea}
        projects={selectedArea ? projectsByArea[selectedArea] : []}
      />
    </div>
  );
}

export default App;