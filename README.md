🚀 AI Coaching Voice Agent

An intelligent AI-powered coaching voice assistant built with Next.js, enabling real-time conversational interaction, voice-based guidance, and smart AI-driven responses.

✨ Features
🎙️ Real-time voice-based AI interaction
🤖 Intelligent coaching assistant powered by LLM APIs
🔐 Secure authentication system (Stack Auth integration)
💬 Conversational AI chat + voice experience
📊 Dashboard for user interaction history
☁️ Cloud-based backend with Convex
⚡ Fast performance using Next.js 16 + Turbopack
🌐 Fully responsive UI for all devices


🛠️ Tech Stack
Frontend: Next.js, React, Tailwind CSS
Backend: Convex, Server Actions
Auth: Stack Authentication
AI Services: OpenRouter / Groq / ElevenLabs / AssemblyAI
Deployment: Vercel

📦 Getting Started
1. Clone the repository
git clone https://github.com/your-username/ai-coaching-voice-agent.git
cd ai-coaching-voice-agent

3. Install dependencies
npm install
# or
pnpm install

3. Set up environment variables
Create a .env.local file and add:
NEXT_PUBLIC_STACK_PROJECT_ID=
NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=
STACK_SECRET_SERVER_KEY=
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=
NEXT_PUBLIC_AI_OPENROUTER=
GROQ_API_KEY=
ASSEMBLY_API_KEY=
NEXT_PUBLIC_ELEVENLAB_API_KEY=
NEXT_PUBLIC_AWS_ACCESS_KEY_ID=
NEXT_PUBLIC_AWS_SECRET_KEY=

5. Run the development server
npm run dev
Open 👉 http://localhost:3000

🚀 Deployment
The easiest way to deploy is using Vercel:
Push project to GitHub
Import repository on Vercel
Add environment variables
Click Deploy

📁 Project Structure
app/            → Pages and routes
components/     → Reusable UI components
lib/            → Helper functions & integrations
convex/         → Backend functions
public/         → Static assets

🎯 Future Improvements
Real-time AI coaching analytics
Multi-language voice support
Advanced user dashboard insights
Mobile app integration
Personalized AI coaching memory

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss improvements.

📄 License
This project is licensed for educational and personal use.

⭐ Acknowledgements
Built using:
Next.js by Vercel
Convex Backend
Stack Auth
OpenAI / Groq / OpenRouter APIs

Getting Started First, run the development server: 
npm run dev 
or yarn dev 
or pnpm dev
or bun dev Open http://localhost:3000 with your browser to see the resu
