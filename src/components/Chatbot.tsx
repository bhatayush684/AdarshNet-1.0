import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
}

const faqs = [
  { question: 'How do I track project progress?', answer: 'Navigate to your dashboard and view the projects section. Each project shows its completion percentage and timeline.' },
  { question: 'How can I submit feedback?', answer: 'Go to the Feedback section in your dashboard and fill out the feedback form. Your input helps improve village development.' },
  { question: 'What are the different user roles?', answer: 'AdarshNet has 5 roles: Admin (system management), Officer (project oversight), Volunteer (data collection), Village Head (village management), and Citizen (transparency access).' },
  { question: 'How do I download reports?', answer: 'Visit the Reports section in your dashboard and click the "Download Report" button to get a PDF summary.' },
  { question: 'What projects are tracked?', answer: 'We track projects in 4 categories: Electrification, Sanitation, Healthcare, and Education across all villages.' },
  { question: 'How many villages are onboarded?', answer: 'Currently, 10 villages are part of the AdarshNet platform with 50 active projects.' },
  { question: 'Can I see all village statistics?', answer: 'Citizens can view transparency dashboards. Officers and Admins have access to detailed analytics and management tools.' },
  { question: 'How is data verified?', answer: 'Volunteers collect ground data with GPS verification, Officers review and approve, and Admins maintain overall quality control.' },
  { question: 'What is the average project completion rate?', answer: 'The current average completion rate across all projects is 65%, with ongoing efforts to accelerate development.' },
  { question: 'How can I request a new project?', answer: 'Village Heads can submit project requests through their dashboard. These are reviewed and approved by Officers and Admins.' },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: 'Hello! I\'m the AdarshNet assistant. Ask me anything about the platform!', isUser: false }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);

    // Find matching FAQ
    const matchedFaq = faqs.find(faq => 
      input.toLowerCase().includes(faq.question.toLowerCase().split(' ').slice(0, 3).join(' '))
    );

    const botResponse = matchedFaq 
      ? { text: matchedFaq.answer, isUser: false }
      : { text: 'I can help you with questions about tracking projects, submitting feedback, user roles, downloading reports, and more. Try asking about these topics!', isUser: false };

    setTimeout(() => {
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInput('');
  };

  const handleQuickQuestion = (question: string) => {
    setInput(question);
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
