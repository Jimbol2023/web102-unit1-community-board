import './App.css'
import Card from './components/Card'

const resources = [
  {
    icon: '🤖',
    title: 'ChatGPT',
    description: 'AI assistant for learning, coding, and productivity.',
    link: 'https://chatgpt.com',
  },
  {
    icon: '🧠',
    title: 'Claude',
    description: 'AI assistant focused on reasoning and writing.',
    link: 'https://claude.ai',
  },
  {
    icon: '💻',
    title: 'GitHub Copilot',
    description: 'AI coding assistant for developers.',
    link: 'https://github.com/features/copilot',
  },
  {
    icon: '🛡️',
    title: 'OWASP',
    description: 'Web application security resources.',
    link: 'https://owasp.org',
  },
  {
    icon: '🔓',
    title: 'TryHackMe',
    description: 'Hands-on cybersecurity training platform.',
    link: 'https://tryhackme.com',
  },
  {
    icon: '🎯',
    title: 'Hack The Box',
    description: 'Cybersecurity labs and challenges.',
    link: 'https://www.hackthebox.com',
  },
  {
    icon: '🌐',
    title: 'Cisco Networking Academy',
    description: 'Networking and cybersecurity courses.',
    link: 'https://www.netacad.com',
  },
  {
    icon: '🚀',
    title: 'CodePath',
    description: 'Career-focused software engineering training.',
    link: 'https://www.codepath.org',
  },
  {
    icon: '📚',
    title: 'Coursera Cybersecurity',
    description: 'Online cybersecurity certificates and courses.',
    link: 'https://www.coursera.org',
  },
  {
    icon: '🔐',
    title: 'Google Cybersecurity Certificate',
    description: 'Beginner-friendly cybersecurity program.',
    link: 'https://grow.google',
  },
]

function App() {
  return (
    <main className="app">
      <header className="header">
        <h1>AI & Cybersecurity Learning Hub</h1>
        <p className="subtitle">
          Top resources for learning Artificial Intelligence and Cybersecurity.
        </p>
      </header>

      <section className="card-container">
        {resources.map((resource) => (
          <Card
            key={resource.title}
            icon={resource.icon}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </section>
    </main>
  )
}

export default App
