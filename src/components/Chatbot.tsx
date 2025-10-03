import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send } from 'lucide-react';
import { loadChatbotState, saveChatbotState, type ChatbotState } from '@/lib/persistence';

interface Message {
  text: string;
  isUser: boolean;
}

type FAQ = { question: string; answer: string; keywords: string[] };

const faqs: FAQ[] = [
  { question: 'How do I track project progress?', answer: 'Go to your role dashboard (Admin/Officer/etc.) and check the Projects or Overview sections. Progress bars and percentages are shown per project.', keywords: ['track','project','progress','dashboard','overview'] },
  { question: 'How can I submit feedback?', answer: 'Open Citizen Portal > Submit Feedback. Enter your message and submit. It is stored and visible in Recent Feedback.', keywords: ['submit','feedback','citizen','portal','message'] },
  { question: 'What are the different user roles?', answer: 'Roles: Admin (system), Officer (projects), Volunteer (data collection), Village Head (village mgmt), Citizen (transparency).', keywords: ['roles','admin','officer','volunteer','village head','citizen'] },
  { question: 'How do I download reports?', answer: 'Officer Dashboard > Generate Reports. Use Monthly Progress or Budget Utilization. Click to download CSV.', keywords: ['download','report','csv','monthly','budget'] },
  { question: 'What projects are tracked?', answer: 'Categories: Electrification, Sanitation, Healthcare, Education. See project lists per village and in Citizen Portal.', keywords: ['projects','categories','electrification','sanitation','healthcare','education'] },
  { question: 'How many villages are onboarded?', answer: 'Currently 10 demo villages are available in the dataset.', keywords: ['villages','onboarded','how many','count'] },
  { question: 'How is data verified?', answer: 'Volunteers collect field data; Officers review/approve; Admin ensures quality control.', keywords: ['data','verify','verification','volunteer','officer','admin'] },
  { question: 'Average completion rate?', answer: 'Demo average completion is around 65% across projects.', keywords: ['average','completion','rate','progress'] },
  { question: 'How can I request a new project?', answer: 'Village Head can submit proposals; Officers/Admins review and approve. In the demo, Officers can add via New Project form.', keywords: ['request','new','project','proposal','village head'] },
  { question: 'How do I login?', answer: 'Use demo credentials on the Login page (e.g., admin@adarsh.com / admin123). You will be redirected by role.', keywords: ['login','credentials','signin'] },
  { question: 'Why am I seeing unauthorized?', answer: 'You tried to access a route not allowed for your role. Login with the right role or navigate to permitted pages.', keywords: ['unauthorized','permission','forbidden','access'] },
  { question: 'Where can I see all projects?', answer: 'Citizen Portal lists all projects with budget and progress. Role dashboards show filtered views.', keywords: ['all projects','citizen portal','list projects'] },
  { question: 'How do I view village stats?', answer: 'Open the interactive village map and click markers. Details show electrification, sanitation, healthcare, and education metrics.', keywords: ['village','map','stats','metrics'] },
  { question: 'How do I change theme?', answer: 'Use the theme switcher if present in the UI. In this demo, UI follows system/theme defaults.', keywords: ['theme','dark mode','light mode'] },
  { question: 'How do I report a bug?', answer: 'Use Submit Feedback and describe the issue. In production, you would open a support ticket.', keywords: ['bug','issue','problem','error'] },
  { question: 'Can I filter projects by category?', answer: 'Dashboards show grouped summaries; finer filtering can be added. In this demo, use tables and visual groupings.', keywords: ['filter','category','search'] },
  { question: 'How to export data?', answer: 'Officer Dashboard has CSV exports for progress and budget.', keywords: ['export','csv','download','data'] },
  { question: 'How to deploy to Vercel?', answer: 'Connect GitHub repo on Vercel, framework Vite, build "npm run build", output "dist". vercel.json handles SPA routing.', keywords: ['deploy','vercel','build','vite','dist'] },
  { question: 'Does it work offline?', answer: 'Core UI works; some features use localStorage to persist state (chat, feedback, projects).', keywords: ['offline','persistence','localstorage','save'] },
  { question: 'How to logout?', answer: 'Use the Logout button in the navbar; it clears the demo auth state and redirects to Login.', keywords: ['logout','sign out','exit'] },
];

const Chatbot = () => {
  const initial = loadChatbotState({
    isOpen: false,
    messages: [{ text: "Hello! I'm the AdarshNet assistant. Ask me anything about the platform!", isUser: false }],
  } as ChatbotState);
  const [isOpen, setIsOpen] = useState(initial.isOpen);
  const [messages, setMessages] = useState<Message[]>(initial.messages as Message[]);
  const [input, setInput] = useState('');

  useEffect(() => {
    saveChatbotState({ isOpen, messages });
  }, [isOpen, messages]);

  const normalize = (s: string) => s.toLowerCase();
  const tokenize = (s: string) => normalize(s).split(/[^a-z0-9]+/).filter(Boolean);

  const score = (inputText: string, entry: FAQ) => {
    const words = new Set(tokenize(inputText));
    let sc = 0;
    for (const k of entry.keywords) if (words.has(normalize(k))) sc += 2; // keyword matches weight
    // loose substring bonus
    const q = normalize(entry.question);
    if (normalize(inputText).includes(q.slice(0, Math.min(q.length, 15)))) sc += 1;
    return sc;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);

    // Score and find best FAQ
    let best: FAQ | null = null;
    let bestScore = 0;
    for (const f of faqs) {
      const s = score(input, f);
      if (s > bestScore) {
        best = f; bestScore = s;
      }
    }

    const botResponse = best && bestScore > 0
      ? { text: best.answer, isUser: false }
      : { text: 'I can help with: projects, feedback, roles, reports, villages, deployment, and more. Try keywords like "report csv", "submit feedback", "village stats", "login".', isUser: false };

    setTimeout(() => {
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInput('');
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
    // immediately answer
    setTimeout(() => {
      // Allows input state to update first
      const q = question;
      const userMessage = { text: q, isUser: true };
      setMessages(prev => [...prev, userMessage]);
      let best: FAQ | null = null; let bestScore = 0;
      for (const f of faqs) { const s = score(q, f); if (s > bestScore) { best = f; bestScore = s; } }
      const bot = best ? { text: best.answer, isUser: false } : { text: 'Let me know more details about your question.', isUser: false };
      setMessages(prev => [...prev, bot]);
      setInput('');
    }, 0);
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b">
            <CardTitle className="text-lg">AdarshNet Assistant</CardTitle>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-lg p-3 ${msg.isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="space-y-2">
                <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                {faqs.slice(0, 3).map((faq, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    size="sm"
                    className="w-full text-xs justify-start h-auto py-2"
                    onClick={() => handleQuickQuestion(faq.question)}
                  >
                    {faq.question}
                  </Button>
                ))}
              </div>
            )}
          </CardContent>
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
