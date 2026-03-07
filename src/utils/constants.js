export const MEME_API_URL = "https://meme-api.com/gimme/50";

export const ACCORDION_DATA = {
  en: [
    {
      id: "faq-1",
      title: "How does the Infinite Scroll work?",
      content:
        "We use a scroll event listener to calculate 'window.innerHeight + window.scrollY >= document.body.scrollHeight'. When the condition is met, we trigger the next API call to append data.",
    },
    {
      id: "faq-2",
      title: "What is Debouncing?",
      content:
        "It is a performance technique that waits for a user to stop an action (like typing) for a set time (e.g., 300ms) before executing a function, reducing unnecessary API calls.",
    },
    {
      id: "faq-3",
      title: "Explain Lifting State Up.",
      content:
        "This involves moving state to the closest common ancestor of components that need the same data. It ensures synchronized updates and a single source of truth.",
    },
    {
      id: "faq-4",
      title: "Why use the Context API?",
      content:
        "Context API provides a way to pass data through the component tree without having to pass props down manually at every level (avoiding Prop Drilling).",
    },
    {
      id: "faq-5",
      title: "What is Shimmer UI?",
      content:
        "A Shimmer UI is a placeholder that mimics the page's layout while data is loading, providing a much smoother visual experience than a basic loading spinner.",
    },
  ],
  hi: [
    {
      id: "faq-1",
      title: "इन्फिनिट स्क्रॉल कैसे काम करता है?",
      content:
        "हम स्क्रॉल ईवेंट का उपयोग करके यह गणना करते हैं कि उपयोगकर्ता पेज के अंत में कब है, और फिर नया डेटा जोड़ने के लिए अगला API कॉल शुरू करते हैं।",
    },
    {
      id: "faq-2",
      title: "डिबाउंसिंग (Debouncing) क्या है?",
      content:
        "यह एक तकनीक है जो फ़ंक्शन चलाने से पहले उपयोगकर्ता के रुकने का इंतज़ार करती है (जैसे 300ms), जिससे अनावश्यक सर्वर कॉल कम हो जाते हैं।",
    },
    {
      id: "faq-3",
      title: "लिफ्टिंग स्टेट अप क्या है?",
      content:
        "इसमें स्टेट को उन कॉम्पोनेन्ट के सबसे करीबी सामान्य पैरेंट पर ले जाया जाता है जिन्हें एक ही डेटा की आवश्यकता होती है, जिससे डेटा सिंक रहता है।",
    },
    {
      id: "faq-4",
      title: "Context API का उपयोग क्यों करें?",
      content:
        "यह हमें हर लेवल पर प्रॉप्स पास किए बिना पूरे ऐप में डेटा साझा करने की अनुमति देता है, जिससे 'Prop Drilling' की समस्या हल होती है।",
    },
    {
      id: "faq-5",
      title: "शिमर UI (Shimmer UI) क्या है?",
      content:
        "यह एक लोडिंग प्लेसहोल्डर है जो डेटा आने तक असली कंटेंट के लेआउट की नकल करता है, जिससे यूजर एक्सपीरियंस बेहतर होता है।",
    },
  ],
  te: [
    {
      id: "faq-1",
      title: "ఇన్ఫినిట్ స్క్రోల్ ఎలా పనిచేస్తుంది?",
      content:
        "యూజర్ పేజీ చివరకు చేరుకున్నప్పుడు గుర్తించడానికి మేము స్క్రోల్ ఈవెంట్‌ను ఉపయోగిస్తాము మరియు కొత్త డేటా కోసం API కాల్‌ని ప్రారంభిస్తాము.",
    },
    {
      id: "faq-2",
      title: "డిబౌన్సింగ్ అంటే ఏమిటి?",
      content:
        "యూజర్ టైపింగ్ వంటి పనులను ఆపిన కొంత సమయం తర్వాతే ఫంక్షన్‌ని రన్ చేసే పద్ధతిని డిబౌన్సింగ్ అంటారు. ఇది అనవసరమైన API కాల్స్‌ను తగ్గిస్తుంది.",
    },
    {
      id: "faq-3",
      title: "లిఫ్టింగ్ స్టేట్ అప్ అంటే ఏమిటి?",
      content:
        "ఒకే డేటాను ఉపయోగించే కాంపోనెంట్స్ కోసం ఆ స్టేట్‌ను వాటి కామన్ పేరెంట్ కాంపోనెంట్‌కి మార్చడాన్ని లిఫ్టింగ్ స్టేట్ అప్ అంటారు.",
    },
    {
      id: "faq-4",
      title: "Context API ఎందుకు వాడాలి?",
      content:
        "ప్రతి లెవల్‌లో మ్యాన్యువల్‌గా ప్రోప్స్ పంపాల్సిన అవసరం లేకుండా (Prop Drilling లేకుండా) డేటాను షేర్ చేయడానికి ఇది ఉపయోగపడుతుంది.",
    },
    {
      id: "faq-5",
      title: "షిమ్మర్ UI అంటే ఏమిటి?",
      content:
        "డేటా లోడ్ అయ్యేలోపు అసలు కంటెంట్ ఎలా ఉంటుందో చూపించే ఒక ప్లేస్ హోల్డర్ ఇది. ఇది యూజర్‌కి మంచి అనుభూతిని ఇస్తుంది.",
    },
  ],
};

export const SLIDER_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Mountain Peaks",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Snowy Range",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Alpine Valley",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Sunset Lake",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Misty Forest",
  },
];

export const COMMENT_DATA = [
  {
    id: 1,
    username: "Anmir",
    text: "This Meme App is looking Awesome",
    replies: [
      {
        id: 2,
        username: "Binod",
        text: "Thanks! The Image Slider logic was a great win.",
        replies: [
          {
            id: 3,
            username: "Anmir",
            text: "Next stop: Recursion!",
            replies: [
              {
                id: 31,
                username: "Elon Musk",
                text: "Namaste! This is the core of LLD. Keep going.",
                replies: [
                  {
                    id: 311,
                    username: "Anmir",
                    text: "The legend himself! Honored to build this.",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        username: "Frontend_Wizard",
        text: "Are you using Tailwind for the thread lines?",
        replies: [
          {
            id: 6,
            username: "Anmir",
            text: "Yes I am using Tailwind for the styling",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    username: "TechRecruiter",
    text: "Impressive portfolio project. How are you handling performance for deep nesting?",
    replies: [
      {
        id: 6,
        username: "Anmir",
        text: "By using memoization and a clean recursive component pattern!",
        replies: [],
      },
    ],
  },
  {
    id: 7,
    username: "Software_Dev_1",
    text: "Can we add a 'Collapse' feature to these threads later?",
    replies: [
      {
        id: 8,
        username: "Anmir",
        text: "Definitely. That would be a great state-management challenge.",
        replies: [],
      },
    ],
  },
];


const usernames = ["Shaik_Dev", "React_Ninja", "Frontend_Guru", "Akshay_Saini_Fan", "Lofi_Vibes", "BugHunter", "Pixel_Pioneer", "SDE_Intern", "CaffeineCode"];

const messages = [
  "Hello from Ongole! 👋",
  "Is this project using Tailwind?",
  "The Shimmer UI looks amazing! 🔥",
  "Can you explain the recursion again?",
  "LLD is so important for SDE-2 interviews.",
  "Love the dark mode support! 🌙",
  "How are you handling the memory leak?",
  "Subscribed! 🔔",
  "Can we use Redux Toolkit here?",
  "This is better than the original YouTube chat! 🚀"
];

export const generateRandomChatMessage = () => {
  const randomSeed = Math.floor(Math.random() * 1000);
  return {
    id: Math.random().toString(36).substr(2, 9),
    username: usernames[Math.floor(Math.random() * usernames.length)],
    message: messages[Math.floor(Math.random() * messages.length)],
    profilePicture: `https://api.dicebear.com/7.x/avataaars/svg?seed=${randomSeed}`
  };
};