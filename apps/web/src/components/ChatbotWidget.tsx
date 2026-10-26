import { useMemo, useState } from 'react';
import { MessageCircle, Send, Sparkles, X } from 'lucide-react';

type Message = {
  id: number;
  from: 'bot' | 'user';
  text: string;
};

const quickPrompts = [
  'Book a consultation',
  'Need ISO 27001 support',
  'What cybersecurity services do you offer?',
];

function getBotReply(input: string) {
  const text = input.toLowerCase();

  if (text.includes('iso 27001') || text.includes('27001')) {
    return 'Cybereye Intelitech can help you design a practical ISO 27001 roadmap, align controls to business risk, and prepare evidence for audit readiness.';
  }

  if (text.includes('soc 2') || text.includes('soc2')) {
    return 'We support SOC 2 readiness through risk-based control reviews, gap assessments, policy alignment, and evidence mapping for stakeholder confidence.';
  }

  if (text.includes('consult') || text.includes('book') || text.includes('call')) {
    return 'Absolutely. You can request a consultation through the contact form or use the live consultation page to share your goals and timeline.';
  }

  if (text.includes('security') || text.includes('vapt') || text.includes('penetration')) {
    return 'Our security programs cover VAPT, risk-based testing, control improvement, and executive-ready reporting to reduce real business exposure.';
  }

  if (text.includes('hello') || text.includes('hi')) {
    return 'Hi there! I’m the Cybereye Intelitech assistant. How can I help with your compliance, security, or governance goals today?';
  }

  return 'Thanks for reaching out. Cybereye Intelitech helps organizations strengthen security governance, improve certification readiness, and reduce operational risk with practical guidance.';
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: 'bot',
      text: 'Hello! I’m the Cybereye Intelitech assistant. Ask about ISO readiness, cybersecurity, or compliance support.',
    },
  ]);

  const helperText = useMemo(
    () =>
      'Need a quick answer? Ask about ISO 27001, SOC 2, VAPT, or a consultation.',
    [],
  );

  const sendMessage = (value: string) => {
    const trimmed = value.trim();
    if (!trimmed) {
      return;
    }

    const nextUser: Message = { id: Date.now(), from: 'user', text: trimmed };
    const nextBot: Message = {
      id: Date.now() + 1,
      from: 'bot',
      text: getBotReply(trimmed),
    };

    setMessages((previous) => [...previous, nextUser, nextBot]);
    setInput('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="w-[350px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-navy px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-accent" />
              <span className="font-semibold">Cybereye Intelitech Bot</span>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close chatbot" className="rounded-full p-1 hover:bg-white/10">
              <X size={18} />
            </button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto bg-slate-50 p-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                    message.from === 'user'
                      ? 'bg-navy text-white'
                      : 'bg-white text-slate-700 shadow-sm'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 bg-white p-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-100"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    sendMessage(input);
                  }
                }}
                placeholder="Ask a question..."
                className="w-full bg-transparent px-2 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                aria-label="Chatbot message"
              />
              <button
                type="button"
                onClick={() => sendMessage(input)}
                className="rounded-lg bg-navy p-2 text-white transition hover:bg-slate-800"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
            <p className="mt-2 text-[11px] text-slate-500">{helperText}</p>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 rounded-full bg-navy px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-900"
          aria-label="Open chatbot"
        >
          <MessageCircle size={18} />
          <span>Ask AI</span>
        </button>
      )}
    </div>
  );
}
