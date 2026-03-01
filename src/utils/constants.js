export const MEME_API_URL = "https://meme-api.com/gimme/50";

export const ACCORDION_DATA = {
  en: [
    {
      id: "faq-1",
      title: "How does the Infinite Scroll work?",
      content: "We use a scroll event listener to calculate 'window.innerHeight + window.scrollY >= document.body.scrollHeight'. When the condition is met, we trigger the next API call to append data."
    },
    {
      id: "faq-2",
      title: "What is Debouncing?",
      content: "It is a performance technique that waits for a user to stop an action (like typing) for a set time (e.g., 300ms) before executing a function, reducing unnecessary API calls."
    },
    {
      id: "faq-3",
      title: "Explain Lifting State Up.",
      content: "This involves moving state to the closest common ancestor of components that need the same data. It ensures synchronized updates and a single source of truth."
    },
    {
      id: "faq-4",
      title: "Why use the Context API?",
      content: "Context API provides a way to pass data through the component tree without having to pass props down manually at every level (avoiding Prop Drilling)."
    },
    {
      id: "faq-5",
      title: "What is Shimmer UI?",
      content: "A Shimmer UI is a placeholder that mimics the page's layout while data is loading, providing a much smoother visual experience than a basic loading spinner."
    }
  ],
  hi: [
    {
      id: "faq-1",
      title: "इन्फिनिट स्क्रॉल कैसे काम करता है?",
      content: "हम स्क्रॉल ईवेंट का उपयोग करके यह गणना करते हैं कि उपयोगकर्ता पेज के अंत में कब है, और फिर नया डेटा जोड़ने के लिए अगला API कॉल शुरू करते हैं।"
    },
    {
      id: "faq-2",
      title: "डिबाउंसिंग (Debouncing) क्या है?",
      content: "यह एक तकनीक है जो फ़ंक्शन चलाने से पहले उपयोगकर्ता के रुकने का इंतज़ार करती है (जैसे 300ms), जिससे अनावश्यक सर्वर कॉल कम हो जाते हैं।"
    },
    {
      id: "faq-3",
      title: "लिफ्टिंग स्टेट अप क्या है?",
      content: "इसमें स्टेट को उन कॉम्पोनेन्ट के सबसे करीबी सामान्य पैरेंट पर ले जाया जाता है जिन्हें एक ही डेटा की आवश्यकता होती है, जिससे डेटा सिंक रहता है।"
    },
    {
      id: "faq-4",
      title: "Context API का उपयोग क्यों करें?",
      content: "यह हमें हर लेवल पर प्रॉप्स पास किए बिना पूरे ऐप में डेटा साझा करने की अनुमति देता है, जिससे 'Prop Drilling' की समस्या हल होती है।"
    },
    {
      id: "faq-5",
      title: "शिमर UI (Shimmer UI) क्या है?",
      content: "यह एक लोडिंग प्लेसहोल्डर है जो डेटा आने तक असली कंटेंट के लेआउट की नकल करता है, जिससे यूजर एक्सपीरियंस बेहतर होता है।"
    }
  ],
  te: [
    {
      id: "faq-1",
      title: "ఇన్ఫినిట్ స్క్రోల్ ఎలా పనిచేస్తుంది?",
      content: "యూజర్ పేజీ చివరకు చేరుకున్నప్పుడు గుర్తించడానికి మేము స్క్రోల్ ఈవెంట్‌ను ఉపయోగిస్తాము మరియు కొత్త డేటా కోసం API కాల్‌ని ప్రారంభిస్తాము."
    },
    {
      id: "faq-2",
      title: "డిబౌన్సింగ్ అంటే ఏమిటి?",
      content: "యూజర్ టైపింగ్ వంటి పనులను ఆపిన కొంత సమయం తర్వాతే ఫంక్షన్‌ని రన్ చేసే పద్ధతిని డిబౌన్సింగ్ అంటారు. ఇది అనవసరమైన API కాల్స్‌ను తగ్గిస్తుంది."
    },
    {
      id: "faq-3",
      title: "లిఫ్టింగ్ స్టేట్ అప్ అంటే ఏమిటి?",
      content: "ఒకే డేటాను ఉపయోగించే కాంపోనెంట్స్ కోసం ఆ స్టేట్‌ను వాటి కామన్ పేరెంట్ కాంపోనెంట్‌కి మార్చడాన్ని లిఫ్టింగ్ స్టేట్ అప్ అంటారు."
    },
    {
      id: "faq-4",
      title: "Context API ఎందుకు వాడాలి?",
      content: "ప్రతి లెవల్‌లో మ్యాన్యువల్‌గా ప్రోప్స్ పంపాల్సిన అవసరం లేకుండా (Prop Drilling లేకుండా) డేటాను షేర్ చేయడానికి ఇది ఉపయోగపడుతుంది."
    },
    {
      id: "faq-5",
      title: "షిమ్మర్ UI అంటే ఏమిటి?",
      content: "డేటా లోడ్ అయ్యేలోపు అసలు కంటెంట్ ఎలా ఉంటుందో చూపించే ఒక ప్లేస్ హోల్డర్ ఇది. ఇది యూజర్‌కి మంచి అనుభూతిని ఇస్తుంది."
    }
  ]
};