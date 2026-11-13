import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, Minimize2, Maximize2 } from "lucide-react";

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content: "Hi! I'm Zohaib's AI assistant. I can help you learn about his skills, projects, and experience. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    "What are Zohaib's main skills?",
    "Tell me about his AI projects",
    "What services does he offer?",
    "How can I contact him?",
  ];

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Skills
    if (lowerMessage.includes("skill") || lowerMessage.includes("expertise") || lowerMessage.includes("technology")) {
      return "Zohaib specializes in:\n\n🤖 **AI & Machine Learning:**\n- LangChain, LangGraph, CrewAI multi-agent systems\n- RAG (Retrieval-Augmented Generation)\n- Deep Learning: PyTorch, TensorFlow, Keras\n- Computer Vision, NLP, Time Series\n\n💻 **Development:**\n- Python, TypeScript, JavaScript\n- React, Next.js, FastAPI\n- PostgreSQL, MongoDB, Redis\n- Docker, Kubernetes, AWS\n\n📊 **Data Science:**\n- Power BI, Tableau dashboards\n- Statistical analysis & ML pipelines\n- MLOps (MLflow, Weights & Biases)";
    }

    // Projects
    if (lowerMessage.includes("project") || lowerMessage.includes("portfolio") || lowerMessage.includes("work")) {
      return "Here are some of Zohaib's featured projects:\n\n🔬 **Meridian AI** - Enterprise research intelligence platform with semantic search and LLM copilot\n\n🛡️ **Sentinel Grid** - AI-powered SIEM security operations platform with multi-agent pipeline\n\n💬 **RingBack AI** - WhatsApp business assistant for missed-call recovery and lead qualification\n\n🤖 **Agent of Agents** - Master orchestrator managing 337+ specialized AI agents\n\n🏥 **IoT Health Kiosk** - Biometric monitoring system with 87% glucose estimation accuracy\n\nCheck out the Portfolio page for all 22+ projects!";
    }

    // Services
    if (lowerMessage.includes("service") || lowerMessage.includes("offer") || lowerMessage.includes("do")) {
      return "Zohaib offers comprehensive AI & development services:\n\n🤖 **AI Agents & Automation** - Custom agents for support, sales, and workflows\n\n🧠 **Machine Learning Solutions** - Fraud detection, forecasting, classification\n\n✨ **Generative AI Integration** - RAG systems, GPT-powered tools, fine-tuning\n\n📊 **Data Science & Analytics** - Power BI dashboards, ETL pipelines, KPIs\n\n🔌 **IoT & Embedded AI** - ESP32 firmware, edge AI, predictive maintenance\n\n💻 **Full-Stack Development** - Modern web apps, APIs, cloud deployment\n\nEvery project ends in production code, not presentations!";
    }

    // Contact
    if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("reach") || lowerMessage.includes("hire")) {
      return "📧 **Email:** zohaibsumbal8@gmail.com\n📱 **Phone:** +92 306 1032323\n💬 **WhatsApp:** Available for quick chats\n🔗 **LinkedIn:** linkedin.com/in/zohaib-ahmed-khan-sumbal\n💻 **GitHub:** github.com/zohaibsumbal786\n\nHead to the Contact page to send a message directly, or reach out via any of these channels. Zohaib typically responds within 24 hours!";
    }

    // Education
    if (lowerMessage.includes("education") || lowerMessage.includes("degree") || lowerMessage.includes("university") || lowerMessage.includes("study")) {
      return "🎓 **Education:**\n\n**BS Data Science** (2022-2026)\nMuhammad Nawaz Sharif University of Agriculture, Multan\n\nFocused on machine learning, deep learning, AI systems, statistics, and data engineering. Published researcher in IoT-based health monitoring using embedded ML.\n\n**Certifications:**\n- Google Data Science (Coursera)\n- Microsoft Azure AI\n- Microsoft Power BI\n- IoT Systems (UC Irvine)\n- And 7+ more!\n\nCheck the About page for certificate details!";
    }

    // Experience
    if (lowerMessage.includes("experience") || lowerMessage.includes("work") || lowerMessage.includes("job")) {
      return "💼 **Professional Experience:**\n\nZohaib has 3+ years of experience building production AI systems:\n\n✅ **30+ projects completed** across AI agents, ML pipelines, and full-stack apps\n✅ **22+ featured projects** in his portfolio\n✅ **Published research** in IoT health monitoring\n✅ **Professional internship** in AI/ML (September 2026)\n\nHe specializes in agentic AI, RAG systems, computer vision, and IoT solutions. Every engagement focuses on shipping working software, not just prototypes.";
    }

    // Location
    if (lowerMessage.includes("location") || lowerMessage.includes("where") || lowerMessage.includes("based")) {
      return "📍 Zohaib is based in **Pakistan** and works as a **remote-first engineer**.\n\nHe's available for:\n✅ Remote freelance projects\n✅ Contract work\n✅ Full-time remote positions\n✅ Consulting engagements\n\nTime zone: PKT (UTC+5) — but flexible for global collaboration!";
    }

    // Pricing
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("rate") || lowerMessage.includes("budget")) {
      return "💰 **Project Pricing:**\n\nZohaib's pricing depends on project scope and complexity:\n\n🔹 **MVPs & Small Projects:** 4-8 weeks typical turnaround\n🔹 **Enterprise Solutions:** Custom timeline and pricing\n🔹 **Consulting:** Hourly or project-based rates\n\nFor an accurate quote:\n1. Visit the Contact page\n2. Describe your project in detail\n3. Include your timeline and budget range\n\nZohaib will respond within 24 hours with a proposal!";
    }

    // Technologies
    if (lowerMessage.includes("langchain") || lowerMessage.includes("rag") || lowerMessage.includes("gpt") || lowerMessage.includes("openai")) {
      return "🤖 **AI Tech Stack:**\n\n**Agent Frameworks:**\n- LangChain & LangGraph\n- CrewAI multi-agent systems\n- Semantic Kernel, AutoGen\n\n**LLMs:**\n- OpenAI (GPT-4, GPT-3.5)\n- Anthropic Claude\n- Google Gemini, Cohere, Groq\n\n**Vector Databases:**\n- Pinecone, Weaviate, Chroma\n- Embeddings & semantic search\n\n**Techniques:**\n- RAG (Retrieval-Augmented Generation)\n- Fine-tuning & PEFT (LoRA, QLoRA)\n- Function calling & tool use\n- Prompt engineering\n\nZohaib builds production-grade AI systems with proper monitoring and guardrails!";
    }

    // Default response
    return "I can help you learn about:\n\n🎯 Zohaib's **skills and expertise**\n💼 His **projects and portfolio**\n⚙️ **Services** he offers\n📚 **Education** and certifications\n📧 How to **contact or hire** him\n\nJust ask me anything, or click one of the quick questions below!";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getResponse(userMessage);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickQuestion = (question: string) => {
    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(question);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Chatbot Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899] shadow-[0_0_40px_rgba(124,58,237,0.4)] transition-all hover:scale-110 hover:shadow-[0_0_60px_rgba(124,58,237,0.6)]"
          aria-label="Open AI Assistant"
        >
          <Bot className="h-6 w-6 text-white" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EC4899] opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#EC4899]" />
          </span>
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div
          className={`fixed bottom-6 left-6 z-50 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[oklch(0.17_0.035_255)] shadow-2xl backdrop-blur-xl transition-all ${
            isMinimized ? "h-16 w-80" : "h-[600px] w-96"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#06B6D4]/10 to-[#7C3AED]/10 px-4 py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold text-foreground">AI Assistant</h3>
                <p className="text-xs text-muted-foreground">Always here to help</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                aria-label={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-gradient-brand text-white"
                          : "border border-white/10 bg-white/5 text-foreground"
                      }`}
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {msg.content}
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex justify-start">
                    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 animate-bounce rounded-full bg-[#06B6D4]" style={{ animationDelay: "0ms" }} />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-[#7C3AED]" style={{ animationDelay: "150ms" }} />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-[#EC4899]" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions */}
              {messages.length === 1 && (
                <div className="border-t border-white/10 p-4">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Quick Questions:</p>
                  <div className="space-y-2">
                    {quickQuestions.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickQuestion(q)}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-left text-xs text-foreground transition-all hover:border-[#06B6D4]/40 hover:bg-[#06B6D4]/10"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask me anything..."
                    className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#06B6D4]/40 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/20"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim()}
                    className="rounded-lg bg-gradient-brand px-4 py-2.5 text-white transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
