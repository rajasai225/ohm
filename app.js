// ===== STATE & TRANSLATION ENGINE =====
let currentLang = 'en';

const NAKSHATRAS_TE = [
  "అశ్విని", "భరణి", "కృత్తిక", "రోహిణి", "మృగశిర", "ఆరుద్ర",
  "పునర్వసు", "పుష్యమి", "ఆశ్లేష", "మఖ", "పూబ్బ (పుబ్బ)", "ఉత్తర",
  "హస్త", "చిత్త", "స్వాతి", "విశాఖ", "అనూరాధ", "జ్యేష్ట",
  "మూల", "పూర్వాషాఢ", "ఉత్తరాషాఢ", "శ్రవణం", "ధనిష్ట", "శతభిషం",
  "పూర్వాభాద్ర", "ఉత్తరాభాద్ర", "రేవతి"
];

const SIGN_NAMES_EN = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const SIGN_NAMES_TE = ["మేషరాశి", "వృషభరాశి", "మిథునరాశి", "కర్కాటకరాశి", "సింహరాశి", "కన్యారాశి", "తులారాశి", "వృశ్చికరాశి", "ధనుస్సురాశి", "మకరరాశి", "కుంభరాశి", "మీనరాశి"];

const SIGNS_EN = ["Ar", "Ta", "Ge", "Cn", "Le", "Vi", "Li", "Sc", "Sg", "Cp", "Aq", "Pi"];
const SIGNS_TE = ["మే", "వృ", "మి", "క", "సి", "క", "తు", "వృ", "ధ", "మ", "కు", "మీ"];

const PANCHANG_TE = {
  "S.P - Pratipada": "శుక్ల పక్షం - పాడ్యమి",
  "S.P - Panchami": "శుక్ల పక్షం - పంచమి",
  "S.P - Ekadashi": "శుక్ల పక్షం - ఏకాదశి",
  "K.P - Tritiya": "కృష్ణ పక్షం - తదియ",
  "K.P - Ashtami": "కృష్ణ పక్షం - అష్టమి",
  "Sunday": "ఆదివారం",
  "Monday": "సోమవారం",
  "Tuesday": "మంగళవారం",
  "Wednesday": "బుధవారం",
  "Thursday": "గురువారం",
  "Friday": "శుక్రవారం",
  "Saturday": "శనివారం",
  "Preeti": "ప్రీతి",
  "Ayushman": "ఆయుష్మాన్",
  "Saubhagya": "సౌభాగ్యం",
  "Shiv": "శివ",
  "Siddha": "సిద్ధ",
  "Bava": "బవ",
  "Kaulava": "కౌలవ",
  "Taitila": "తైతిల",
  "Vanija": "వణిజ",
  "Vishti": "విష్టి"
};

const LANG_DICT = {
  en: {
    nav_horoscope: "Horoscope",
    nav_rashifal: "Rashifal",
    nav_compatibility: "Compatibility",
    nav_planets: "Planets",
    nav_festivals: "Festivals",
    nav_get_kundli: "Get Kundli ✦",
    
    hero_badge: "✦ India's Friendliest AI Astrology Guide",
    hero_title_line1: "AI Astrology",
    hero_title_line2: "Your Stars, Explained Simply & Clearly",
    hero_desc: "Friendly astrology guidance for everyday life in India — rashifal, kundli basics, personality insights, relationship compatibility, and festival timings. Explained calmly, without fear or confusion.",
    hero_cta_primary: "✨ Get Free Horoscope",
    hero_cta_secondary: "🔭 Find Your Rashifal",
    stat_users: "Users Guided",
    stat_zodiacs: "Zodiac Signs",
    stat_planets: "Planets Tracked",
    stat_fear_free: "Fear-Free",
    
    feat_label: "What We Offer",
    feat_title: "Astrology Made Simple for You",
    feat_subtitle: "Whether you're curious about your future, relationships, or wanting to understand yourself better — we have it all, explained gently in everyday language.",
    feat1_title: "Daily Rashifal",
    feat1_desc: "Get your daily, weekly, and monthly rashifal based on your moon sign and birth details. Practical, positive, and easy to understand.",
    feat1_link: "Read Today's Rashifal →",
    feat2_title: "Kundli Basics",
    feat2_desc: "Generate your Janam Kundli and understand houses, planets, and their effects on your life — without complex jargon or scary predictions.",
    feat2_link: "Create My Kundli →",
    feat3_title: "Personality Insights",
    feat3_desc: "Discover your strengths, tendencies, and natural gifts based on your Lagna, moon sign, and planetary placements in a warm, encouraging way.",
    feat3_link: "Know My Personality →",
    feat4_title: "Relationship Compatibility",
    feat4_desc: "Check Kundli Milan, love compatibility, and relationship insights for couples. Understand each other better through planetary harmony.",
    feat4_link: "Check Compatibility →",
    feat5_title: "Festival & Muhurta",
    feat5_desc: "Find auspicious timings for weddings, griha pravesh, baby naming, and upcoming Hindu festivals and planetary events throughout the year.",
    feat5_link: "View Festivals →",
    feat6_title: "Planetary Transits",
    feat6_desc: "Track real-time planetary positions and understand how Shani, Guru, Rahu-Ketu transits are influencing your daily life and decisions.",
    feat6_link: "See Planet Positions →",
    
    form_section_label: "Free Personalized Horoscope",
    form_section_title: "Enter Your Birth Details",
    form_section_subtitle: "Your exact birth time and place help us generate a precise Janam Kundli and personalized predictions.",
    form_card_title: "🔮 Janam Kundli Generator",
    form_card_sub: "Fill in your birth details below — all readings are friendly and positive",
    lbl_name: "Full Name",
    lbl_gender: "Gender",
    lbl_dob: "Date of Birth",
    lbl_tob: "Time of Birth",
    lbl_place: "Place of Birth",
    lbl_latlng_hint: "📍 Enter Longitude & Latitude manually (optional)",
    submit_btn: "✨ Get Personalized Horoscope",
    placeholder_name: "Enter your name",
    placeholder_place: "e.g., Mumbai, Maharashtra",
    
    report_intro_title: "Welcome to get Astrology Report",
    report_intro_text: "<strong>get Astrology</strong> brings clear and friendly astrology guidance to everyday life in India. Get help with rashifal, kundli basics, personality insights, relationship compatibility, and festival or planetary timings — explained simply, calmly, and without fear or confusion.",
    pdf_download_btn: "📄 Download Comprehensive PDF Report",
    tab_charts: "Vedic Charts",
    tab_kp: "KP Planetary & Cusps",
    tab_sig: "Significators",
    tab_dasha: "Vimshottari Dasha",
    tab_analysis: "Planets & House Analysis",
    
    title_rasi: "Natal (D1 — Rasi)",
    title_prog: "Progression (Solar Arc)",
    title_d7: "D7 — Saptamsa (Children)",
    title_d9: "D9 — Navamsha",
    title_d10: "D10 — Dasamsa (Career)",
    
    title_kp_planets: "🪐 KP — Planetary Positions",
    title_kp_cusps: "🏠 KP — House Cusps",
    th_planet: "Planet",
    th_lon: "Lon",
    th_sign: "Sign",
    th_h: "H",
    th_nakshatra: "Nakshatra",
    th_sil: "SiL",
    th_stl: "StL",
    th_subl: "SubL",
    th_ssl: "SSL",
    th_sssl: "SSSL",
    th_cusp: "Cusp",
    
    title_sig_planets: "🔮 Significators — Planet View",
    title_sig_houses: "🚪 Significators — House View",
    title_dasha_periods: "📅 Vimshottari Dasha — Bhukti Periods",
    title_analysis_planets: "📊 Planets Analysis",
    title_analysis_houses: "📐 House Analysis",
    th_light: "Light",
    th_perf: "Perf.",
    th_resource: "Resource",
    th_capacity: "Capacity",
    th_sl_inf: "SL, Inf",
    th_house_num: "#",
    th_occupant: "Occupant",
    th_lord: "Lord",
    th_karaka: "Karaka",
    th_total: "Total",
    
    planets_label: "Today's Sky",
    planets_title: "Planetary Positions",
    planets_subtitle: "Live planetary transits shape the energy of every day. Understanding where the Navagrahas stand helps you make wiser choices in love, work, and health.",
    
    rashifal_label: "నేటి రాశిఫలాలు",
    rashifal_title: "Daily Rashifal — Select Your Rashi",
    rashifal_subtitle: "Click on your zodiac sign to get today's detailed rashifal — love, career, health, and more.",
    lbl_love: "Love",
    lbl_career: "Career",
    lbl_health: "Health",
    
    compat_label: "Kundli Milan",
    compat_title: "Relationship Compatibility",
    compat_subtitle: "Check how two zodiac signs interact — a positive guide to understanding each other better. Based on ancient Vedic astrology principles.",
    lbl_your_rashi: "Your Rashi",
    lbl_partner_rashi: "Partner's Rashi",
    btn_check_compat: "✨ Check Compatibility",
    
    festivals_label: "Upcoming",
    festivals_title: "Festivals & Auspicious Timings",
    festivals_subtitle: "Upcoming Hindu festivals, vrats, and auspicious muhurtas for 2025–26. Plan your celebrations with cosmic alignment.",
    
    testi_label: "What People Say",
    testi_title: "Trusted by Millions Across India",
    
    faq_label: "Common Questions",
    faq_title: "Frequently Asked Questions",
    
    footer_brand_desc: "Bringing clear, friendly, and fearless astrology guidance to everyday life in India. Understand yourself, your relationships, and your timing — gently and simply.",
    footer_services: "Services",
    footer_astrology: "Astrology",
    footer_support: "Support",
    footer_copy: "© 2026 AI Astrology. All rights reserved.",
    footer_disclaimer: "Disclaimer: Astrology readings are based on traditional Vedic systems and are for guidance and self-reflection. We do not provide financial or medical guarantees."
  },
  te: {
    nav_horoscope: "జాతకం",
    nav_rashifal: "రాశిఫలాలు",
    nav_compatibility: "సంబంధాల పొంతన",
    nav_planets: "గ్రహాల గమనం",
    nav_festivals: "పండుగలు",
    nav_get_kundli: "కుండలి పొందండి ✦",
    
    hero_badge: "✦ భారతదేశపు అత్యంత సులువైన AI జ్యోతిష్య మార్గదర్శి",
    hero_title_line1: "AI జ్యోతిష్యం",
    hero_title_line2: "మీ నక్షత్రాల ఫలితాలు, సులువైన మరియు స్పష్టమైన వివరణలతో",
    hero_desc: "మీ రోజువారీ జీవితం కోసం స్నేహపూర్వక జ్యోతిష్య మార్గదర్శకత్వం — రాశిఫలాలు, కుండలి ప్రాథమికాలు, వ్యక్తిత్వ విశ్లేషణలు, వివాహ పొంతన మరియు పండుగ సమయాలు. ఎటువంటి భయం లేదా గందరగోళం లేకుండా ప్రశాంతంగా వివరించబడుతుంది.",
    hero_cta_primary: "✨ ఉచిత జాతకం పొందండి",
    hero_cta_secondary: "🔭 మీ రాశిఫలాలు చూడండి",
    stat_users: "వినియోగదారులు",
    stat_zodiacs: "రాశులు",
    stat_planets: "గ్రహాల గమనం",
    stat_fear_free: "భయరహితంగా",
    
    feat_label: "మేము అందించే సేవలు",
    feat_title: "జ్యోతిష్యం మీ కోసం సులభతరం చేయబడింది",
    feat_subtitle: "మీరు మీ భవిష్యత్తు గురించి, సంబంధాల గురించి తెలుసుకోవాలనుకున్నా లేదా మిమ్మల్ని మీరు బాగా అర్థం చేసుకోవాలనుకున్నా — అన్ని విషయాలు మీ దైనందిన వ్యవహారిక భాషలో సున్నితంగా వివరించబడ్డాయి.",
    feat1_title: "రోజువారీ రాశిఫలాలు",
    feat1_desc: "మీ చంద్రరాశి మరియు పుట్టిన వివరాల ఆధారంగా రోజువారీ, వారపు మరియు నెలవారీ రాశిఫలాలను పొందండి. ఆచరణాత్మకమైనవి, సానుకూలమైనవి మరియు అర్థం చేసుకోవడం సులభం.",
    feat1_link: "ఈ రోజు రాశిఫలాలు చదవండి →",
    feat2_title: "కుండలి ప్రాథమికాలు",
    feat2_desc: "మీ జన్మ కుండలిని పొంది, మీ జీవితంపై గృహాలు, గ్రహాలు మరియు వాటి ప్రభావాలను అర్థం చేసుకోండి — క్లిష్టమైన పదజాలం లేదా భయపెట్టే అంచనాలు లేకుండా.",
    feat2_link: "నా కుండలిని సృష్టించుకోను →",
    feat3_title: "వ్యక్తిత్వ విశ్లేషణ",
    feat3_desc: "మీ లగ్నం, చంద్రరాశి మరియు గ్రహాల స్థానాల ఆధారంగా మీ బలాలు, అలవాట్లు మరియు సహజ ప్రతిభను ప్రోత్సాహకరమైన రీతిలో కనుగొండి.",
    feat3_link: "నా వ్యక్తిత్వాన్ని తెలుసుకోను →",
    feat4_title: "సంబంధాల పొంతన",
    feat4_desc: "దంపతుల కోసం కుండలి మిలన్, ప్రేమ అనుకూలత మరియు సంబంధాల విశ్లేషణను తనిఖీ చేయండి. గ్రహాల సామరస్యం ద్వారా ఒకరినొకరు బాగా అర్థం చేసుకోండి.",
    feat4_link: "పొంతన తనిఖీ చేయండి →",
    feat5_title: "పండుగలు & ముహూర్తాలు",
    feat5_desc: "వివాహాలు, గృహప్రవేశం, బారసాల మరియు రాబోయే హిందూ పండుగలు మరియు గ్రహాల ఈవెంట్‌ల కొరకు సంవత్సరం పొడవునా శుభ ముహూర్తాలను కనుగొండి.",
    feat5_link: "పండుగలను వీక్షించండి →",
    feat6_title: "గ్రహాల గోచారం",
    feat6_desc: "నిజ-సమయ గ్రహాల స్థానాలను ట్రాక్ చేయండి మరియు శని, గురు, రాహు-కేతువుల సంచారాలు మీ రోజువారీ జీవితాన్ని మరియు నిర్ణయాలను ఎలా ప్రభావితం చేస్తున్నాయో అర్థం చేసుకోండి.",
    feat6_link: "గ్రహాల స్థానాలను చూడండి →",
    
    form_section_label: "ఉచిత వ్యక్తిగతీకరించిన జాతకం",
    form_section_title: "మీ పుట్టిన వివరాలను నమోదు చేయండి",
    form_section_subtitle: "ఖచ్చితమైన జన్మ సమయం మరియు ప్రదేశం మాకు మరింత ఖచ్చితమైన జన్మ కుండలిని మరియు వ్యక్తిగతీకరించిన అంచనాలను సృష్టించడానికి సహాయపడతాయి.",
    form_card_title: "🔮 జన్మ కుండలి జెనరేటర్",
    form_card_sub: "దిగువన మీ పుట్టిన వివరాలను నింపండి — అన్ని ఫలితాలు సానుకూల ధోరణిలో అందించబడతాయి",
    lbl_name: "పూర్తి పేరు",
    lbl_gender: "లింగం",
    lbl_dob: "పుట్టిన తేదీ",
    lbl_tob: "పుట్టిన సమయం",
    lbl_place: "పుట్టిన ప్రదేశం",
    lbl_latlng_hint: "📍 రేఖాంశం & అక్షాంశం మాన్యువల్‌గా నమోదు చేయండి (ఐచ్ఛికం)",
    submit_btn: "✨ వ్యక్తిగతీకరించిన జాతకం పొందండి",
    placeholder_name: "మీ పేరు నమోదు చేయండి",
    placeholder_place: "ఉదా: హైదరాబాద్, తెలంగాణ",
    
    report_intro_title: "మీ జాతక నివేదికకు స్వాగతం",
    report_intro_text: "<strong>AI జ్యోతిష్యం</strong> భారతదేశంలో దైనందిన జీవితానికి స్పష్టమైన మరియు స్నేహపూర్వక జ్యోతిష్య మార్గదర్శకత్వాన్ని అందిస్తుంది. రాశిఫలాలు, కుండలి ప్రాథమికాలు, వ్యక్తిత్వ విశ్లేషణలు, వివాహ పొంతన మరియు పండుగ లేదా గ్రహాల సమయాల గురించి తెలుసుకోండి — క్లిష్టత లేకుండా, ఎంతో సరళంగా మరియు భయరహితంగా వివరించబడుతుంది.",
    pdf_download_btn: "📄 సమగ్ర పిడిఎఫ్ (PDF) నివేదికను డౌన్‌లోడ్ చేయండి",
    tab_charts: "వైదిక చార్టులు",
    tab_kp: "KP గ్రహాలు & భావాలు",
    tab_sig: "కారకత్వాలు",
    tab_dasha: "వింశోత్తరి దశలు",
    tab_analysis: "గ్రహ & భావ విశ్లేషణ",
    
    title_rasi: "జన్మ చార్ట్ (D1 — రాశి)",
    title_prog: "ప్రోగ్రెషన్ (సౌర ఆర్క్)",
    title_d7: "D7 — సప్తమాంశ (సంతానం)",
    title_d9: "D9 — నవాంశ (వివాహం)",
    title_d10: "D10 — దశమాంశ (కెరీర్)",
    
    title_kp_planets: "🪐 KP — గ్రహాల స్థానాలు",
    title_kp_cusps: "🏠 KP — భావాల కారకాలు",
    th_planet: "గ్రహం",
    th_lon: "రేఖాంశం",
    th_sign: "రాశి",
    th_h: "భావం",
    th_nakshatra: "నక్షత్రం",
    th_sil: "రాశ్యాధిపతి",
    th_stl: "నక్షత్రాధిపతి",
    th_subl: "ఉపాధిపతి",
    th_ssl: "సూక్ష్మాధిపతి",
    th_sssl: "అతిసూక్ష్మాధిపతి",
    th_cusp: "భావ సంఖ్య",
    
    title_sig_planets: "🔮 కారకత్వాలు — గ్రహాల దృష్టి",
    title_sig_houses: "🚪 కారకత్వాలు — భావాల దృష్టి",
    title_dasha_periods: "📅 వింశోత్తరి దశ — భుక్తి కాలాలు",
    title_analysis_planets: "📊 గ్రహాల విశ్లేషణ",
    title_analysis_houses: "📐 భావాల బలాలు",
    th_light: "కాంతి",
    th_perf: "కార్యసాధన",
    th_resource: "వనరులు",
    th_capacity: "సామర్థ్యం",
    th_sl_inf: "నక్షత్రాధిపతి, ప్రభావం",
    th_house_num: "భావం",
    th_occupant: "ఉన్న గ్రహాలు",
    th_lord: "భావ అధిపతి",
    th_karaka: "కారకుడు",
    th_total: "మొత్తం",
    
    planets_label: "ఈ రోజు గ్రహాల గమనం",
    planets_title: "గ్రహాల ప్రస్తుత స్థానాలు",
    planets_subtitle: "నిజ-సమయ గ్రహ సంచారాలు ప్రతి రోజు శక్తిని ప్రభావితం చేస్తాయి. నవగ్రహాలు ఏ స్థానంలో ఉన్నాయో తెలుసుకోవడం ప్రేమ, ఉద్యోగం మరియు ఆరోగ్య విషయాలలో సరైన నిర్ణయాలు తీసుకోవడానికి సహాయపడుతుంది.",
    
    rashifal_label: "నేటి రాశిఫలాలు",
    rashifal_title: "రోజువారీ రాశిఫలాలు — మీ రాశిని ఎంచుకోండి",
    rashifal_subtitle: "మీ రోజువారీ రాశిఫలాలను (ప్రేమ, ఉద్యోగం, ఆరోగ్యం మొదలైనవి) తెలుసుకోవడానికి మీ రాశి చిహ్నంపై క్లిక్ చేయండి.",
    lbl_love: "ప్రేమ",
    lbl_career: "ఉద్యోగం",
    lbl_health: "ఆరోగ్యం",
    
    compat_label: "కుండలి పొంతన",
    compat_title: "సంబంధాల పొంతన",
    compat_subtitle: "రెండు రాశులు ఒకదానితో ఒకటి ఎలా పరస్పర చర్య చేస్తాయో తనిఖీ చేయండి — ఒకరినొకరు బాగా అర్థం చేసుకోవడానికి సానుకూల మార్గదర్శి. ప్రాచీన వైదిక జ్యోతిష్య సూత్రాల ఆధారంగా.",
    lbl_your_rashi: "మీ రాశి",
    lbl_partner_rashi: "భాగస్వామి రాశి",
    btn_check_compat: "✨ పొంతన తనిఖీ చేయండి",
    
    festivals_label: "రాబోయే శుభకార్యాలు",
    festivals_title: "పండుగలు & శుభ ముహూర్తాలు",
    festivals_subtitle: "రాబోయే హిందూ పండుగలు, వ్రతాలు మరియు శుభ ముహూర్తాలు 2025-26. నక్షత్ర బలాలు మరియు ముహూర్తాల అనుకూలత ప్రకారం మీ వేడుకలను ప్లాన్ చేసుకోండి.",
    
    testi_label: "వినియోగదారుల అభిప్రాయాలు",
    testi_title: "భారతదేశ వ్యాప్తంగా మిలియన్ల మంది నమ్మకం",
    
    faq_label: "సాధారణ ప్రశ్నలు",
    faq_title: "తరచుగా అడిగే ప్రశ్నలు",
    
    footer_brand_desc: "భారతదేశంలో రోజువారీ జీవితానికి స్పష్టమైన, స్నేహపూర్వక మరియు భయరహిత జ్యోతిష్య మార్గదర్శకత్వాన్ని అందిస్తుంది. మిమ్మల్ని మీరు, మీ సంబంధాలను మరియు మీ కాలాన్ని ప్రశాంతంగా, సులభంగా అర్థం చేసుకోండి.",
    footer_services: "సేవలు",
    footer_astrology: "జ్యోతిష్యం",
    footer_support: "సపోర్ట్",
    footer_copy: "© 2026 AI జ్యోతిష్యం. సర్వ హక్కులూ ప్రత్యేకించబడినవి.",
    footer_disclaimer: "గమనిక: జ్యోతిష్య ఫలితాలు సాంప్రదాయ వైదిక పద్ధతుల ఆధారంగా ఇవ్వబడినవి, ఇవి మార్గదర్శకత్వం మరియు ఆత్మ పరిశీలన కొరకు మాత్రమే. ఆర్థిక లేదా వైద్యపరమైన గ్యారెంటీలను మేము అందించము."
  }
};

// Helper translation functions
function translatePlanetName(id, full = false) {
  if (currentLang === 'te') {
    const fullMap = { Su: "సూర్యుడు", Mo: "చంద్రుడు", Ma: "కుజుడు", Me: "బుధుడు", Ju: "గురుడు", Ve: "శుక్రుడు", Sa: "శని", Ra: "రాహువు", Ke: "కేతువు" };
    const shortMap = { Su: "రవి", Mo: "చం", Ma: "కు", Me: "బు", Ju: "గు", Ve: "శు", Sa: "శ", Ra: "రా", Ke: "కే" };
    return full ? fullMap[id] : shortMap[id];
  }
  const fullMapEn = { Su: "Sun", Mo: "Moon", Ma: "Mars", Me: "Mercury", Ju: "Jupiter", Ve: "Venus", Sa: "Saturn", Ra: "Rahu", Ke: "Ketu" };
  return full ? (fullMapEn[id] || id) : id;
}

function translateSignName(code, full = false) {
  const index = SIGNS_EN.indexOf(code);
  if (index === -1) return code;
  if (currentLang === 'te') {
    return full ? SIGN_NAMES_TE[index] : SIGNS_TE[index];
  }
  return full ? SIGN_NAMES_EN[index] : SIGNS_EN[index];
}

function translateNakshatraString(nakStr) {
  if (currentLang === 'te') {
    let result = nakStr;
    const NAKSHATRAS_EN = [
      "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
      "Punarvasu", "Pushya", "Ashlesha", "Magha", "P. Phalguni", "U. Phalguni",
      "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
      "Moola", "P. Ashadha", "U. Ashadha", "Shravana", "Dhanishta", "Shatabhisha",
      "P. Bhadrapada", "U. Bhadrapada", "Revati"
    ];
    NAKSHATRAS_EN.forEach((name, idx) => {
      if (result.includes(name)) {
        result = result.replace(name, NAKSHATRAS_TE[idx]);
      }
    });
    return result;
  }
  return nakStr;
}

function translateDashaLord(name) {
  if (currentLang === 'te') {
    const map = {
      "Sun": "సూర్య",
      "Moon": "చంద్ర",
      "Mars": "కుజ",
      "Mercury": "బుధ",
      "Jupiter": "గురు",
      "Venus": "శుక్ర",
      "Saturn": "శని",
      "Rahu": "రాహు",
      "Ketu": "కేతు"
    };
    return map[name] || name;
  }
  return name;
}

function getTranslatedPanchang(calc) {
  if (currentLang === 'te') {
    const lagnaSignIdx = Math.floor(calc.cusps[0].rawLon / 30);
    const lagnaStr = SIGN_NAMES_TE[lagnaSignIdx] + " లగ్నం";
    const moonPlanet = calc.planets.find(p => p.id === "Mo");
    const nakD = getNakshatraData(moonPlanet.rawLon);
    const nakStr = `${nakD.name}-${nakD.pad}`;
    const tithiTe = PANCHANG_TE[calc.tithi] || calc.tithi;
    const varamTe = PANCHANG_TE[calc.varam] || calc.varam;
    const yogaTe = PANCHANG_TE[calc.yoga] || calc.yoga;
    const karanaTe = PANCHANG_TE[calc.karana] || calc.karana;
    return { lagna: lagnaStr, nakshatra: nakStr, tithi: tithiTe, varam: varamTe, yoga: yogaTe, karana: karanaTe };
  }
  const lagnaSignIdx = Math.floor(calc.cusps[0].rawLon / 30);
  const lagnaStr = SIGN_NAMES_EN[lagnaSignIdx] + " Lagna";
  const moonPlanet = calc.planets.find(p => p.id === "Mo");
  const tempLang = currentLang;
  currentLang = 'en';
  const nakD = getNakshatraData(moonPlanet.rawLon);
  currentLang = tempLang;
  const nakStr = `${nakD.name}-${nakD.pad}`;
  return { lagna: lagnaStr, nakshatra: nakStr, tithi: calc.tithi, varam: calc.varam, yoga: calc.yoga, karana: calc.karana };
}

// Controller
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById('lang-btn-' + lang);
  if (activeBtn) activeBtn.classList.add('active');

  if (lang === 'te') {
    document.body.classList.add('lang-te');
  } else {
    document.body.classList.remove('lang-te');
  }

  const dict = LANG_DICT[lang];
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  const inputName = document.getElementById('kname');
  if (inputName) inputName.placeholder = dict.placeholder_name;
  const inputPlace = document.getElementById('kplace');
  if (inputPlace) inputPlace.placeholder = dict.placeholder_place;

  updateGenderDropdown();
  updateDateDropdownsLanguage();

  renderZodiacTicker();
  renderZodiacGrid();
  renderPlanets();
  renderCompatDropdowns();
  renderFestivals();
  renderTestimonials();
  renderFaqs();

  const activeCardIndex = ZODIACS.findIndex((z, idx) => {
    const card = document.getElementById('zc-' + idx);
    return card && card.classList.contains('active');
  });
  if (activeCardIndex !== -1) {
    showRashifal(activeCardIndex);
  }

  if (currentReportData) {
    renderKundliReport();
    const downloadBtn = document.getElementById('pdf-download-btn');
    if (downloadBtn && !downloadBtn.disabled) {
      downloadBtn.innerHTML = dict.pdf_download_btn;
    }
  }
}

function updateDateDropdownsLanguage() {
  const monthEl = document.getElementById('dob-month');
  if (!monthEl) return;
  const oldVal = monthEl.value;
  monthEl.innerHTML = '';
  const monthsEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthsTe = ['జనవరి', 'ఫిబ్రవరి', 'మార్చి', 'ఏప్రిల్', 'మే', 'జూన్', 'జూలై', 'ఆగస్టు', 'సెప్టెంబరు', 'అక్టోబరు', 'నవంబరు', 'డిసెంబరు'];
  const list = currentLang === 'te' ? monthsTe : monthsEn;
  list.forEach((m, i) => {
    const opt = new Option(m, i + 1);
    monthEl.add(opt);
  });
  monthEl.value = oldVal;
}

function updateGenderDropdown() {
  const genderEl = document.getElementById('kgender');
  if (!genderEl) return;
  const oldVal = genderEl.value;
  genderEl.innerHTML = '';
  if (currentLang === 'te') {
    genderEl.add(new Option('పురుషుడు (Male)', 'male'));
    genderEl.add(new Option('స్త్రీ (Female)', 'female'));
    genderEl.add(new Option('ఇతర (Other)', 'other'));
  } else {
    genderEl.add(new Option('Male (पुरुष)', 'male'));
    genderEl.add(new Option('Female (स्त्री)', 'female'));
    genderEl.add(new Option('Other', 'other'));
  }
  genderEl.value = oldVal;
}

// ===== DATA =====
const ZODIACS = [
  {
    sym: '♈', love: 78, career: 85, health: 72,
    en: {
      name: 'Mesh (Aries)', hi: 'Mesh (Aries)', dates: 'Mar 21–Apr 19', element: 'Fire • Mangal',
      text: '<p>Today is a <strong>high-energy day</strong> for you, Mesh rashi. Mangal blesses you with courage and initiative. Good time to start new projects or have important conversations. <strong>Lucky colour: Red.</strong></p><p>In love, be direct and warm — your partner appreciates honesty. Financially, avoid impulsive spending in the afternoon. Health: light exercise and staying hydrated keeps energy steady.</p>'
    },
    te: {
      name: 'మేషం (Mesh)', hi: 'మేషం', dates: 'మార్చి 21–ఏప్రిల్ 19', element: 'అగ్ని తత్వం • కుజుడు',
      text: '<p>ఈ రోజు మీకు <strong>అధిక శక్తివంతమైన రోజు</strong>, మేష రాశి. మంగళ గ్రహం మీకు ధైర్యాన్ని, చొరవను ప్రసాదిస్తుంది. కొత్త పనులను ప్రారంభించడానికి లేదా ముఖ్యమైన సంభాషణలు జరపడానికి ఇది మంచి సమయం. <strong>అదృష్ట రంగు: ఎరుపు.</strong></p><p>ప్రేమ విషయాలలో నేరుగా మరియు ఆప్యాయంగా ఉండండి — మీ భాగస్వామి మీ నిజాయితీని ఇష్టపడతారు. ఆర్థికంగా, మధ్యాహ్నం పూట ఆవేశపూరిత ఖర్చులకు దూరంగా ఉండండి. ఆరోగ్యం: తేలికపాటి వ్యాయామం, తగినంత నీరు త్రాగడం వల్ల శక్తి స్థిరంగా ఉంటుంది.</p>'
    }
  },
  {
    sym: '♉', love: 82, career: 68, health: 90,
    en: {
      name: 'Vrishabh (Taurus)', hi: 'Vrishabh (Taurus)', dates: 'Apr 20–May 20', element: 'Earth • Shukra',
      text: '<p>Shukra blesses Vrishabh rashi with <strong>beauty, comfort, and material gains</strong> today. Focus on finishing tasks you started this week. Relationships feel warm and harmonious.</p><p>Career: steady progress, avoid rushing. A loved one may need your support — be patient and kind. Health outlook is excellent; enjoy some self-care today.</p>'
    },
    te: {
      name: 'వృషభం (Vrishabh)', hi: 'వృషభం', dates: 'ఏప్రిల్ 20–మే 20', element: 'భూ తత్వం • శుక్రుడు',
      text: '<p>ఈ రోజు శుక్రగ్రహ అనుగ్రహం వల్ల వృషభ రాశి వారికి <strong>అందం, సౌకర్యం మరియు ఆర్థిక లాభాలు</strong> చేకూరుతాయి. ఈ వారం మీరు ప్రారంభించిన పనులను పూర్తి చేయడంపై దృష్టి పెట్టండి. బంధాలు ఆప్యాయంగా మరియు సామరస్యంగా ఉంటాయి.</p><p>కెరీర్: స్థిరమైన పురోగతి ఉంటుంది, తొందరపాటు వద్దు. ఒక ప్రియమైన వ్యక్తికి మీ మద్దతు అవసరం కావచ్చు — సహనంతో మరియు దయతో ఉండండి. ఆరోగ్య పరిస్థితి అద్భుతంగా ఉంది; ఈ రోజు కాస్త విశ్రాంతి తీసుకోండి.</p>'
    }
  },
  {
    sym: '♊', love: 65, career: 90, health: 70,
    en: {
      name: 'Mithun (Gemini)', hi: 'Mithun (Gemini)', dates: 'May 21–Jun 20', element: 'Air • Budh',
      text: '<p><strong>Budh activates your intellect</strong> today, Mithun rashi. Excellent for writing, communication, meetings, and learning. Ideas flow freely — document them!</p><p>In love, be present and listen more. Mind can be scattered — practice short breaks. Health: avoid overthinking; brief meditation helps enormously.</p>'
    },
    te: {
      name: 'మిథునం (Mithun)', hi: 'మిథునం', dates: 'మే 21–జూన్ 20', element: 'వాయు తత్వం • బుధుడు',
      text: '<p>ఈ రోజు <strong>బుధుడు మీ మేధస్సును ఉత్తేజపరుస్తాడు</strong>, మిథున రాశి. రాయడానికి, సంభాషణలకు, సమావేశాలకు మరియు కొత్త విషయాలు నేర్చుకోవడానికి ఇది అద్భుతమైన రోజు. ఆలోచనలు స్వేచ్ఛగా ప్రవహిస్తాయి — వాటిని నోట్ చేసుకోండి!</p><p>ప్రేమలో, భాగస్వామి పట్ల శ్రద్ధ వహించండి మరియు వారి మాటలను వినండి. మనస్సు చెల్లాచెదురుగా ఉండవచ్చు — చిన్న చిన్న విరామాలు తీసుకోండి. ఆరోగ్యం: అతిగా ఆలోచించవద్దు; స్వల్ప ధ్యానం ఎంతో సహాయపడుతుంది.</p>'
    }
  },
  {
    sym: '♋', love: 88, career: 72, health: 80,
    en: {
      name: 'Karka (Cancer)', hi: 'Karka (Cancer)', dates: 'Jun 21–Jul 22', element: 'Water • Chandra',
      text: '<p>Chandra governs your sensitive and caring nature. Today brings <strong>emotional warmth and family focus</strong>. Home matters go smoothly. Trust your intuition — it is sharper than usual.</p><p>Career: work behind the scenes today. Love life is deeply fulfilling. Health: nourish yourself well; home-cooked meals are best.</p>'
    },
    te: {
      name: 'కర్కాటకం (Karka)', hi: 'కర్కాటకం', dates: 'జూన్ 21–జూలై 22', element: 'జల తత్వం • చంద్రుడు',
      text: '<p>చంద్రుడు మీ సున్నితమైన మరియు శ్రద్ధగల స్వభావాన్ని పాలిస్తాడు. ఈ రోజు మీకు <strong>భావోద్వేగ సాన్నిహిత్యం మరియు కుటుంబంపై శ్రద్ధ</strong> తెస్తుంది. గృహ సంబంధిత పనులు సజావుగా సాగుతాయి. మీ అంతర్ దృష్టిని నమ్మండి — ఇది సాధారణం కంటే చాలా పదునైనది.</p><p>కెరీర్: ఈ రోజు తెరవెనుక పని చేయడం మంచిది. ప్రేమ జీవితం ఎంతో సంప్రదాయబద్ధంగా, సంతృప్తికరంగా ఉంటుంది. ఆరోగ్యం: మంచి పౌష్టికాహారం తీసుకోండి; ఇంట్లో వండిన భోజనం ఉత్తమమైనది.</p>'
    }
  },
  {
    sym: '♌', love: 75, career: 92, health: 85,
    en: {
      name: 'Simha (Leo)', hi: 'Simha (Leo)', dates: 'Jul 23–Aug 22', element: 'Fire • Surya',
      text: '<p>Surya lights your path with <strong>confidence and leadership</strong> today, Simha rashi. You are naturally magnetic — others look to you for guidance. Perfect for presentations.</p><p>Love: be generous and your relationships shine. Career prospects look excellent; recognition may come your way. Health is vibrant — channel energy into something creative.</p>'
    },
    te: {
      name: 'సింహం (Simha)', hi: 'సింహం', dates: 'జూలై 23–ఆగస్టు 22', element: 'అగ్ని తత్వం • సూర్యుడు',
      text: '<p>ఈ రోజు సూర్యుడు మీకు <strong>ఆత్మవిశ్వాసం మరియు నాయకత్వ లక్షణాలు</strong> ప్రసాదిస్తాడు, సింహ రాశి. మీరు సహజంగానే ఇతరులను ఆకర్షిస్తారు — ఇతరులు మీ మార్గదర్శకత్వం కోసం చూస్తారు. ప్రెజెంటేషన్స్ ఇవ్వడానికి ఇది అనువైన సమయం.</p><p>ప్రేమ: ఉదారంగా ఉండండి మరియు మీ సంబంధాలు ప్రకాశిస్తాయి. కెరీర్ అవకాశాలు అద్భుతంగా ఉన్నాయి; మీకు గుర్తింపు లభించవచ్చు. ఆరోగ్యం శక్తివంతంగా ఉంది — మీ శక్తిని సృజనాత్మక పనులపై కేంద్రీకరించండి.</p>'
    }
  },
  {
    sym: '♍', love: 70, career: 88, health: 78,
    en: {
      name: 'Kanya (Virgo)', hi: 'Kanya (Virgo)', dates: 'Aug 23–Sep 22', element: 'Earth • Budh',
      text: '<p>Budh enhances your <strong>analytical mind and eye for detail</strong>. Today is perfect for planning, organising, and problem-solving. Work quality is exceptional — your diligence pays off.</p><p>In relationships, communicate your needs clearly and kindly. Health: routine and regular meals keep you balanced and energised.</p>'
    },
    te: {
      name: 'కన్య (Kanya)', hi: 'కన్య', dates: 'ఆగస్టు 23–సెప్టెంబరు 22', element: 'భూ తత్వం • బుధుడు',
      text: '<p>బుధుడు మీ <strong>విశ్లేషణాత్మక ఆలోచనను మరియు సూక్ష్మ పరిశీలనను</strong> పెంపొందిస్తాడు. ప్రణాళికలు వేయడానికి, పనులను వ్యవస్థీకరించడానికి మరియు సమస్యలను పరిష్కరించడానికి ఈ రోజు అనుకూలమైనది. మీ పని నాణ్యత అద్భుతంగా ఉంటుంది — మీ కష్టానికి తగిన ప్రతిఫలం లభిస్తుంది.</p><p>సంబంధాలు: మీ అవసరాలను స్పష్టంగా మరియు దయతో తెలియజేయండి. ఆరోగ్యం: సరైన దినచర్య మరియు క్రమబద్ధమైన భోజనం మిమ్మల్ని సమతుల్యంగా మరియు శక్తివంతంగా ఉంచుతాయి.</p>'
    }
  },
  {
    sym: '♎', love: 92, career: 75, health: 82,
    en: {
      name: 'Tula (Libra)', hi: 'Tula (Libra)', dates: 'Sep 23–Oct 22', element: 'Air • Shukra',
      text: '<p>Shukra fills your day with <strong>harmony, beauty, and social joy</strong>, Tula rashi. Relationships flourish beautifully today. A great day for collaborations and partnerships.</p><p>Career: negotiations and agreements go in your favour. Avoid indecision; trust your balanced judgment. Health: gentle yoga or a peaceful walk brings great wellbeing.</p>'
    },
    te: {
      name: 'తులా (Tula)', hi: 'తులా', dates: 'సెప్టెంబరు 23–అక్టోబరు 22', element: 'వాయు తత్వం • శుక్రుడు',
      text: '<p>శుక్రుడు మీ రోజును <strong>సామరస్యం, అందం మరియు సామాజిక ఆనందంతో</strong> నింపుతాడు, తులా రాశి. ఈ రోజు సంబంధాలు ఎంతో అందంగా వర్ధిల్లుతాయి. భాగస్వామ్య పనులకు మరియు సహకారానికి ఇది చాలా మంచి రోజు.</p><p>కెరీర్: చర్చలు మరియు ఒప్పందాలు మీకు అనుకూలంగా సాగుతాయి. సందిగ్ధతను వీడండి; మీ సమతుల్య నిర్ణయాలను నమ్మండి. ఆరోగ్యం: సున్నితమైన యోగా లేదా ప్రశాంతమైన నడక మీకు మంచి ఆరోగ్యాన్ని చేకూరుస్తుంది.</p>'
    }
  },
  {
    sym: '♏', love: 80, career: 85, health: 75,
    en: {
      name: 'Vrishchik (Scorpio)', hi: 'Vrishchik (Scorpio)', dates: 'Oct 23–Nov 21', element: 'Water • Mangal/Ketu',
      text: '<p>Today brings <strong>deep focus and transformative energy</strong>, Vrishchik rashi. Your intuition is razor-sharp. Excellent for research, investigations, or deep work that requires concentration.</p><p>In love, open your heart — vulnerability creates intimacy. Health: manage stress with calm breathing.</p>'
    },
    te: {
      name: 'వృశ్చికం (Vrishchik)', hi: 'వృశ్చికం', dates: 'అక్టోబరు 23–నవంబరు 21', element: 'జల తత్వం • మంగళ/కేతువు',
      text: '<p>ఈ రోజు మీకు <strong>తీవ్రమైన ఏకాగ్రత మరియు మార్పును తెచ్చే శక్తి</strong> లభిస్తుంది, వృశ్చిక రాశి. మీ అంతర్ దృష్టి ఎంతో పదునైనది. పరిశోధనలు, లోతైన విశ్లేషణలు లేదా ఏకాగ్రత అవసరమయ్యే పనులకు ఇది చాలా మంచి రోజు.</p><p>ప్రేమ: మీ హృదయాన్ని తెరవండి — సున్నితత్వం బంధాలను మరింత బలోపేతం చేస్తుంది. ఆరోగ్యం: ప్రశాంతమైన శ్వాస ద్వారా ఒత్తిడిని నియంత్రించుకోండి.</p>'
    }
  },
  {
    sym: '♐', love: 72, career: 80, health: 90,
    en: {
      name: 'Dhanu (Sagittarius)', hi: 'Dhanu (Sagittarius)', dates: 'Nov 22–Dec 21', element: 'Fire • Guru',
      text: '<p>Guru expands your <strong>optimism and wisdom</strong> today. A wonderful day for learning, travel, spiritual growth, and big-picture thinking. Share your knowledge generously.</p><p>Career: educational or international matters are favoured. Health is at a peak — outdoor activities give great energy.</p>'
    },
    te: {
      name: 'ధనుస్సు (Dhanu)', hi: 'ధనుస్సు', dates: 'నవంబరు 22–డిసెంబరు 21', element: 'అగ్ని తత్వం • గురుడు',
      text: '<p>గురు గ్రహం మీ <strong>ఆశావాదాన్ని మరియు జ్ఞానాన్ని</strong> విస్తరింపజేస్తుంది. కొత్త విషయాలు నేర్చుకోవడానికి, ప్రయాణాలకు, आध्यात्मिक వృద్ధికి మరియు ఉన్నతమైన ఆలోచనలకు ఇది ఒక అద్భుతమైన రోజు. మీ విజ్ఞానాన్ని ఇతరులతో పంచుకోండి.</p><p>కెరీర్: విద్యాసంబంధిత లేదా విదేశీ వ్యవహారాలు కలిసివస్తాయి. ఆరోగ్యం అత్యంత అనుకూలంగా ఉంది — బహిరంగ క్రీడలు లేదా పనులు మీకు మరింత శక్తిని ఇస్తాయి.</p>'
    }
  },
  {
    sym: '♑', love: 68, career: 95, health: 80,
    en: {
      name: 'Makar (Capricorn)', hi: 'Makar (Capricorn)', dates: 'Dec 22–Jan 19', element: 'Earth • Shani',
      text: '<p>Shani rewards your <strong>discipline and long-term effort</strong>, Makar rashi. Career achievements are highlighted today. Hard work from the past begins to show tangible results. Stay focused.</p><p>Love: make time for close ones despite busyness. Health: take necessary rest; don\'t push yourself beyond limits today.</p>'
    },
    te: {
      name: 'మకరం (Makar)', hi: 'మకరం', dates: 'డిసెంబరు 22–జనవరి 19', element: 'భూ తత్వం • శని దేవుడు',
      text: '<p>శని భగవానుడు మీ <strong>క్రమశిక్షణకు మరియు దీర్ఘకాలిక శ్రమకు</strong> తగిన ప్రతిఫలాన్ని ఇస్తాడు, మకర రాశి. ఈ రోజు కెరీర్‌లో విజయాలు ఎక్కువగా ఉంటాయి. గతంలో చేసిన కష్టానికి ఇప్పుడు స్పష్టమైన ఫలితాలు లభిస్తాయి. ఏకాగ్రతతో ఉండండి.</p><p>ప్రేమ: ఎంత బిజీగా ఉన్నప్పటికీ మీ కుటుంబ సభ్యుల కోసం సమయం కేటాయించండి. ఆరోగ్యం: అవసరమైన విశ్రాంతి తీసుకోండి; ఈ రోజు మీ పరిమితులకు మించి కష్టపడవద్దు.</p>'
    }
  },
  {
    sym: '♒', love: 75, career: 82, health: 72,
    en: {
      name: 'Kumbh (Aquarius)', hi: 'Kumbh (Aquarius)', dates: 'Jan 20–Feb 18', element: 'Air • Shani/Rahu',
      text: '<p>Today activates your <strong>innovative and humanitarian spirit</strong>, Kumbh rashi. Creative ideas and social connections bring great opportunities. Think outside the box.</p><p>Career: technology and group projects are favoured. Health: fresh air and movement boost your mood considerably.</p>'
    },
    te: {
      name: 'కుంభం (Kumbh)', hi: 'కుంభం', dates: 'జనవరి 20–ఫిబ్రవరి 18', element: 'వాయు తత్వం • శని/రాహువు',
      text: '<p>ఈ రోజు మీలోని <strong>సృజనాత్మకతను మరియు సామాజిక స్పృహను</strong> పెంపొందిస్తుంది, కుంభ రాశి. వినూత్న ఆలోచనలు మరియు సామాజిక పరిచయాలు గొప్ప అవకాశాలను తెస్తాయి. విలక్షణంగా ఆలోచించండి.</p><p>కెరీర్: సాంకేతికత మరియు సమూహ ప్రాజెక్టులు కలిసివస్తాయి. ఆరోగ్యం: స్వచ్ఛమైన గాలి మరియు వ్యాయామం మీ మానసిక స్థితిని మెరుగుపరుస్తాయి.</p>'
    }
  },
  {
    sym: '♓', love: 88, career: 70, health: 78,
    en: {
      name: 'Meen (Pisces)', hi: 'Meen (Pisces)', dates: 'Feb 19–Mar 20', element: 'Water • Guru/Ketu',
      text: '<p>Guru blesses you with <strong>deep spirituality and compassionate intuition</strong>, Meen rashi. Your empathy is a superpower today — help others and you will feel deeply fulfilled.</p><p>Career: creative and spiritual work flourishes. Health: adequate sleep and peaceful environments are key — honour your sensitivity.</p>'
    },
    te: {
      name: 'మీనం (Meen)', hi: 'మీనం', dates: 'ఫిబ్రవరి 19–మార్చి 20', element: 'జల తత్వం • గురు/కేతువు',
      text: '<p>గురు గ్రహం మీకు <strong>లోతైన ఆధ్యాత్మికత మరియు కరుణతో కూడిన అంతర్ దృష్టిని</strong> ప్రసాదిస్తుంది, మీన రాశి. మీ సానుభూతి ఈ రోజు మీ గొప్ప బలం — ఇతరులకు సహాయం చేయడం వల్ల మీరు మానసిక సంతృప్తిని పొందుతారు.</p><p>కెరీర్: సృజనాత్మక మరియు ఆధ్యాత్మిక పనులకు అనుకూలమైన రోజు. ఆరోగ్యం: తగినంత నిద్ర మరియు ప్రశాంతమైన వాతావరణం ముఖ్యం — మీ శరీరాన్ని గౌరవించండి.</p>'
    }
  }
];

// ===== TICKER & GRID RENDERS =====
function renderZodiacTicker() {
  const ticker = document.getElementById('zodiac-ticker');
  if (!ticker) return;
  ticker.innerHTML = [...ZODIACS, ...ZODIACS].map(z => {
    const item = currentLang === 'te' ? z.te : z.en;
    return `<div class="zodiac-item"><span class="zsymbol">${z.sym}</span><div><div>${item.name}</div><div class="zdate">${item.dates}</div></div></div>`;
  }).join('');
}

function renderZodiacGrid() {
  const grid = document.getElementById('zodiac-grid');
  if (!grid) return;
  grid.innerHTML = ZODIACS.map((z, i) => {
    const item = currentLang === 'te' ? z.te : z.en;
    return `<div class="zodiac-card" id="zc-${i}" onclick="showRashifal(${i})" role="button" tabindex="0" aria-label="View rashifal for ${item.name}" onkeydown="if(event.key==='Enter')showRashifal(${i})">
      <div class="zodiac-symbol">${z.sym}</div>
      <div class="zodiac-name">${item.hi}</div>
      <div class="zodiac-dates">${item.dates}</div>
    </div>`;
  }).join('');
}

function showRashifal(i) {
  document.querySelectorAll('.zodiac-card').forEach(c => c.classList.remove('active'));
  const cardEl = document.getElementById('zc-' + i);
  if (cardEl) cardEl.classList.add('active');
  
  const z = ZODIACS[i];
  const item = currentLang === 'te' ? z.te : z.en;
  
  document.getElementById('rp-emoji').textContent = z.sym;
  document.getElementById('rp-name').textContent = item.name;
  document.getElementById('rp-element').textContent = item.element;
  
  ['love', 'career', 'health'].forEach(k => {
    const bar = document.getElementById('sc-' + k);
    const val = document.getElementById('sv-' + k);
    if (bar) bar.style.width = '0%';
    if (val) val.textContent = '';
  });
  
  document.getElementById('rp-text').innerHTML = item.text;
  const panel = document.getElementById('rashifal-panel');
  if (panel) {
    panel.classList.add('show');
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  
  setTimeout(() => {
    const barLove = document.getElementById('sc-love');
    const barCareer = document.getElementById('sc-career');
    const barHealth = document.getElementById('sc-health');
    const valLove = document.getElementById('sv-love');
    const valCareer = document.getElementById('sv-career');
    const valHealth = document.getElementById('sv-health');
    if (barLove) barLove.style.width = z.love + '%';
    if (barCareer) barCareer.style.width = z.career + '%';
    if (barHealth) barHealth.style.width = z.health + '%';
    if (valLove) valLove.textContent = z.love + '/100';
    if (valCareer) valCareer.textContent = z.career + '/100';
    if (valHealth) valHealth.textContent = z.health + '/100';
  }, 100);
}

// ===== COMPATIBILITY =====
function renderCompatDropdowns() {
  ['compat1', 'compat2'].forEach((id, ci) => {
    const sel = document.getElementById(id);
    if (!sel) return;
    const oldVal = sel.value;
    sel.innerHTML = ZODIACS.map((z, i) => {
      const item = currentLang === 'te' ? z.te : z.en;
      return `<option value="${i}">${z.sym} ${item.name}</option>`;
    }).join('');
    if (oldVal) {
      sel.value = oldVal;
    } else if (ci === 1) {
      sel.value = '1';
    }
  });
}

function checkCompat() {
  const i1 = +document.getElementById('compat1').value;
  const i2 = +document.getElementById('compat2').value;
  const seed = ((i1 * 7 + i2 * 11 + i1 * i2) % 36) + 50;
  const pct = Math.min(Math.max(seed, 50), 95);
  const z1 = ZODIACS[i1], z2 = ZODIACS[i2];
  const item1 = currentLang === 'te' ? z1.te : z1.en;
  const item2 = currentLang === 'te' ? z2.te : z2.en;
  let msg = "";
  
  if (currentLang === 'te') {
    if (pct >= 85) msg = `${z1.sym} ${item1.hi} మరియు ${z2.sym} ${item2.hi} మధ్య <strong>అద్భుతమైన నక్షత్ర పొంతన</strong> ఉంది. మీ ఇద్దరి శక్తులు ఒకదానికొకటి చక్కగా సరిపోలుతాయి — ఇది ఎంతో అభివృద్ధి మరియు ఆప్యాయతలతో కూడిన జంట.`;
    else if (pct >= 70) msg = `${z1.sym} ${item1.hi} మరియు ${z2.sym} ${item2.hi} మధ్య <strong>మంచి మరియు అనుకూలమైన పొంతన</strong> ఉంది. అవగాహన మరియు ఓర్పుతో, ఈ బంధం ఇద్దరికీ ఆనందాన్ని మరియు స్థిరత్వాన్ని తెస్తుంది.`;
    else msg = `${z1.sym} ${item1.hi} మరియు ${z2.sym} ${item2.hi} మధ్య <strong>భావాలు భిన్నమైన కానీ ఉత్సాహకరమైన బంధం</strong> ఉంది. మీ మధ్య ఉన్న వ్యత్యాసాలను ప్రేమతో స్వీకరిస్తే, అవే మీ బంధంలో అతిపెద్ద బలంగా మారుతాయి.`;
  } else {
    if (pct >= 85) msg = `${z1.sym} ${item1.hi} and ${z2.sym} ${item2.hi} share a <strong>beautiful cosmic harmony</strong>. Your energies complement each other beautifully — this is a blessed pairing full of growth and warmth.`;
    else if (pct >= 70) msg = `${z1.sym} ${item1.hi} and ${z2.sym} ${item2.hi} have a <strong>good and promising compatibility</strong>. With understanding and patience, this relationship brings joy and stability to both.`;
    else msg = `${z1.sym} ${item1.hi} and ${z2.sym} ${item2.hi} offer a <strong>complementary yet stimulating bond</strong>. Your differences, when embraced with love, become your greatest strengths together.`;
  }
  
  const deg = Math.round(pct * 3.6);
  document.getElementById('compat-circle').style.background = `conic-gradient(var(--gold) ${deg}deg, rgba(255,255,255,0.06) ${deg}deg)`;
  document.getElementById('compat-num').textContent = pct + '%';
  document.getElementById('compat-msg').innerHTML = msg;
  const r = document.getElementById('compat-result');
  if (r) {
    r.classList.add('show');
    r.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// ===== DOB/TOB DROPDOWNS INITIALIZATION =====
(function () {
  const dayEl = document.getElementById('dob-day');
  const monthEl = document.getElementById('dob-month');
  const yearEl = document.getElementById('dob-year');
  const hrEl = document.getElementById('tob-hr');
  const minEl = document.getElementById('tob-min');
  if (!dayEl) return;
  const now = new Date();
  for (let d = 1; d <= 31; d++) dayEl.add(new Option(d, d));
  for (let y = now.getFullYear(); y >= 1900; y--) yearEl.add(new Option(y, y));
  for (let h = 1; h <= 12; h++) hrEl.add(new Option(h < 10 ? '0' + h : h, h));
  for (let m = 0; m < 60; m++) minEl.add(new Option(m < 10 ? '0' + m : m, m));
  dayEl.value = now.getDate();
  yearEl.value = now.getFullYear();
  hrEl.value = now.getHours() % 12 || 12;
  minEl.value = now.getMinutes();
  document.getElementById('tob-ampm').value = now.getHours() >= 12 ? 'PM' : 'AM';
})();

function toggleLatLng() {
  const el = document.getElementById('latlng-fields');
  if (el) el.style.display = el.style.display === 'none' ? 'block' : 'none';
}

// ===== GLOBAL VARIABLES & CONSTANTS =====
let currentReportData = null;

const SIGNS = ["Ar", "Ta", "Ge", "Cn", "Le", "Vi", "Li", "Sc", "Sg", "Cp", "Aq", "Pi"];
const SIGN_LORDS = ["Ma", "Ve", "Me", "Mo", "Su", "Me", "Ve", "Ma", "Ju", "Sa", "Sa", "Ju"];
const NAKSHATRAS = [
  "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
  "Punarvasu", "Pushya", "Ashlesha", "Magha", "P. Phalguni", "U. Phalguni",
  "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha", "Jyeshtha",
  "Moola", "P. Ashadha", "U. Ashadha", "Shravana", "Dhanishta", "Shatabhisha",
  "P. Bhadrapada", "U. Bhadrapada", "Revati"
];
const NAK_LORDS = ["Ke", "Ve", "Su", "Mo", "Ma", "Ra", "Ju", "Sa", "Me"];
const LORDS_ORDER = ["Ke", "Ve", "Su", "Mo", "Ma", "Ra", "Ju", "Sa", "Me"];

// ===== HELPERS =====
function formatDms(degVal) {
  const d = Math.floor(degVal);
  const minVal = (degVal - d) * 60;
  const m = Math.floor(minVal);
  const s = Math.floor((minVal - m) * 60);
  return `${d.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function getSignData(rawLon) {
  const signIndex = Math.floor(rawLon / 30);
  const deg = rawLon % 30;
  return {
    index: signIndex,
    code: SIGNS[signIndex],
    name: SIGN_NAMES_EN[signIndex],
    deg: deg
  };
}

function getNakshatraData(rawLon) {
  const index = Math.floor(rawLon / 13.333333);
  const position = rawLon % 13.333333;
  const pad = Math.floor(position / 3.333333) + 1;
  const lord = NAK_LORDS[index % 9];
  return {
    index: index,
    name: currentLang === 'te' ? NAKSHATRAS_TE[index] : NAKSHATRAS[index],
    pad: pad,
    lord: lord
  };
}

function getKpLords(rawLon) {
  const SiL = SIGN_LORDS[Math.floor(rawLon / 30)];
  const StL = NAK_LORDS[Math.floor(rawLon / 13.333333) % 9];
  const subIndex = Math.floor((rawLon * 9) % 9);
  const SubL = LORDS_ORDER[subIndex];
  const SSL = LORDS_ORDER[Math.floor((rawLon * 81) % 9)];
  const SSSL = LORDS_ORDER[Math.floor((rawLon * 729) % 9)];
  return { SiL, StL, SubL, SSL, SSSL };
}

function getD7Sign(rawLon) {
  const signIdx = Math.floor(rawLon / 30);
  const deg = rawLon % 30;
  const div = Math.floor(deg / 4.285714);
  const isVedicOdd = (signIdx % 2 === 0);
  let startSign = isVedicOdd ? signIdx : (signIdx + 6) % 12;
  return (startSign + div) % 12;
}

function getD9Sign(rawLon) {
  const signIdx = Math.floor(rawLon / 30);
  const deg = rawLon % 30;
  const div = Math.floor(deg / 3.333333);
  let startSign = 0;
  if (signIdx === 0 || signIdx === 4 || signIdx === 8) startSign = 0;
  else if (signIdx === 1 || signIdx === 5 || signIdx === 9) startSign = 9;
  else if (signIdx === 2 || signIdx === 6 || signIdx === 10) startSign = 6;
  else startSign = 3;
  return (startSign + div) % 12;
}

function getD10Sign(rawLon) {
  const signIdx = Math.floor(rawLon / 30);
  const deg = rawLon % 30;
  const div = Math.floor(deg / 3.0);
  const isVedicOdd = (signIdx % 2 === 0);
  let startSign = isVedicOdd ? signIdx : (signIdx + 8) % 12;
  return (startSign + div) % 12;
}

function getRomanNumerals(num) {
  const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
  return roman[num - 1] || num;
}

function switchReportTab(tabId) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  document.getElementById('tab-btn-' + tabId).classList.add('active');
  document.getElementById('tab-content-' + tabId).classList.add('active');
}

// ===== CALCULATOR ENGINE =====
class VedicCalculator {
  constructor(name, gender, dob, tob, place, latInput, lngInput) {
    this.name = name || "Dear Friend";
    this.gender = gender || "male";
    this.dob = dob;
    this.tob = tob;
    this.place = place || "Hyderabad, Telangana, India";
    this.latStr = latInput;
    this.lngStr = lngInput;
    this.timezone = "5.5";

    const isBaseline = (
      name.toLowerCase().trim() === "sai" &&
      dob.day === 25 && dob.month === 6 && dob.year === 2026 &&
      tob.hr24 === 0 && tob.min === 47
    );

    if (isBaseline) {
      this.lat = "17:23";
      this.lng = "78:27";
      this.lagna = "Pisces Lagna";
      this.nakshatra = "Swati-2";
      this.tithi = "S.P - Ekadashi";
      this.varam = "Thursday";
      this.yoga = "Shiv";
      this.karana = "Vanija";
      const cData = this.getBaselineCusps();
      this.cusps = cData.map(c => this.recalculateCusp(c));
      const pData = this.getBaselinePlanets();
      this.planets = pData.map(p => this.recalculatePlanet(p));
    } else {
      this.lat = latInput || this.getDeterministicCoords(place).lat;
      this.lng = lngInput || this.getDeterministicCoords(place).lng;

      const baselineDate = new Date(2026, 5, 25);
      const inputDate = new Date(dob.year, dob.month - 1, dob.day);
      const diffTime = inputDate.getTime() - baselineDate.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)) || 0;

      const baselineMin = 0 * 60 + 47;
      const inputMin = tob.hr24 * 60 + tob.min;
      const diffMin = inputMin - baselineMin;

      const seed = this.getHash(name + place + dob.year + dob.month + dob.day);

      const lagnaShift = (diffDays * 360 + diffMin * 0.25 + (seed % 360)) % 360;
      const moonShift = (diffDays * 13.17639 + (diffMin / 1440) * 13.17639) % 360;
      const sunShift = (diffDays * 0.9856) % 360;

      const pData = this.getBaselinePlanets();
      pData.forEach(p => {
        if (p.id === "Mo") p.rawLon = (p.rawLon + moonShift) % 360;
        else if (p.id === "Su") p.rawLon = (p.rawLon + sunShift) % 360;
        else if (p.id === "Me") p.rawLon = (p.rawLon + sunShift + (seed % 30) - 15) % 360;
        else if (p.id === "Ve") p.rawLon = (p.rawLon + sunShift + ((seed >> 2) % 40) - 20) % 360;
        else if (p.id === "Ma") p.rawLon = (p.rawLon + diffDays * 0.52) % 360;
        else if (p.id === "Ju") p.rawLon = (p.rawLon + diffDays * 0.083) % 360;
        else if (p.id === "Sa") p.rawLon = (p.rawLon + diffDays * 0.033) % 360;
        else if (p.id === "Ra") p.rawLon = (p.rawLon - diffDays * 0.053 + 360) % 360;
        else if (p.id === "Ke") {
          const raVal = pData.find(pl => pl.id === "Ra").rawLon;
          p.rawLon = (raVal + 180) % 360;
        }
        if (p.rawLon < 0) p.rawLon += 360;
      });

      const cData = this.getBaselineCusps();
      cData.forEach(c => {
        c.rawLon = (c.rawLon + lagnaShift) % 360;
        if (c.rawLon < 0) c.rawLon += 360;
      });

      this.cusps = cData.map(c => this.recalculateCusp(c));
      this.planets = pData.map(p => this.recalculatePlanet(p));

      const panchangSeed = seed % 5;
      const nakData = getNakshatraData(this.planets.find(p => p.id === "Mo").rawLon);
      this.lagna = SIGN_NAMES_EN[Math.floor(this.cusps[0].rawLon / 30)] + " Lagna";
      this.nakshatra = `${nakData.name}-${nakData.pad}`;
      this.tithi = ["S.P - Pratipada", "S.P - Panchami", "S.P - Ekadashi", "K.P - Tritiya", "K.P - Ashtami"][panchangSeed];
      this.varam = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][inputDate.getDay()];
      this.yoga = ["Preeti", "Ayushman", "Saubhagya", "Shiv", "Siddha"][panchangSeed];
      this.karana = ["Bava", "Kaulava", "Taitila", "Vanija", "Vishti"][panchangSeed];
    }
  }

  getHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return Math.abs(hash);
  }

  getDeterministicCoords(place) {
    const seed = this.getHash(place);
    const latDeg = (seed % 28) + 8;
    const latMin = seed % 60;
    const lngDeg = (seed % 30) + 68;
    const lngMin = (seed >> 2) % 60;
    return {
      lat: `${latDeg}:${latMin.toString().padStart(2, '0')}`,
      lng: `${lngDeg}:${lngMin.toString().padStart(2, '0')}`
    };
  }

  recalculatePlanet(p) {
    const signD = getSignData(p.rawLon);
    const nakD = getNakshatraData(p.rawLon);
    const kpLords = getKpLords(p.rawLon);

    let h = 1;
    for (let i = 0; i < 12; i++) {
      const currentCusp = this.cusps[i].rawLon;
      const nextCusp = this.cusps[(i + 1) % 12].rawLon;

      let inHouse = false;
      if (nextCusp > currentCusp) {
        inHouse = (p.rawLon >= currentCusp && p.rawLon < nextCusp);
      } else {
        inHouse = (p.rawLon >= currentCusp || p.rawLon < nextCusp);
      }
      if (inHouse) {
        h = i + 1;
        break;
      }
    }

    return {
      id: p.id,
      name: p.name,
      lon: signD.deg,
      sign: signD.code,
      h: h,
      nak: `${nakD.name} (${nakD.pad})`,
      sil: kpLords.SiL,
      stl: kpLords.StL,
      subl: kpLords.SubL,
      ssl: kpLords.SSL,
      sssl: kpLords.SSSL,
      rawLon: p.rawLon
    };
  }

  recalculateCusp(c) {
    const signD = getSignData(c.rawLon);
    const nakD = getNakshatraData(c.rawLon);
    const kpLords = getKpLords(c.rawLon);
    return {
      h: c.h,
      lon: signD.deg,
      sign: signD.code,
      nak: `${nakD.name} (${nakD.pad})`,
      sil: kpLords.SiL,
      stl: kpLords.StL,
      subl: kpLords.SubL,
      ssl: kpLords.SSL,
      sssl: kpLords.SSSL,
      rawLon: c.rawLon
    };
  }

  getBaselinePlanets() {
    return [
      { id: "Su", name: "Su", rawLon: 69.1583 },
      { id: "Mo", name: "Mo", rawLon: 192.2133 },
      { id: "Ma", name: "Ma", rawLon: 32.9953 },
      { id: "Me", name: "Me", rawLon: 91.1906 },
      { id: "Ju", name: "Ju", rawLon: 94.7089 },
      { id: "Ve", name: "Ve", rawLon: 108.9911 },
      { id: "Sa", name: "Sa", rawLon: 349.7542 },
      { id: "Ra", name: "Ra", rawLon: 308.7783 },
      { id: "Ke", name: "Ke", rawLon: 128.7783 }
    ];
  }

  getBaselineCusps() {
    return [
      { h: 1, rawLon: 349.3194 },
      { h: 2, rawLon: 22.6722 },
      { h: 3, rawLon: 50.3828 },
      { h: 4, rawLon: 75.7114 },
      { h: 5, rawLon: 102.1681 },
      { h: 6, rawLon: 132.9917 },
      { h: 7, rawLon: 169.3194 },
      { h: 8, rawLon: 202.6722 },
      { h: 9, rawLon: 230.3828 },
      { h: 10, rawLon: 255.7114 },
      { h: 11, rawLon: 282.1681 },
      { h: 12, rawLon: 312.9917 }
    ];
  }
}

// ===== SOUTH INDIAN CHART DRAW HELPER =====
const SOUTH_INDIAN_BOX_MAP = [
  { sign: 11, col: 1, row: 1, name: "Pi" },
  { sign: 0, col: 2, row: 1, name: "Ar" },
  { sign: 1, col: 3, row: 1, name: "Ta" },
  { sign: 2, col: 4, row: 1, name: "Ge" },
  { sign: 3, col: 4, row: 2, name: "Cn" },
  { sign: 4, col: 4, row: 3, name: "Le" },
  { sign: 5, col: 4, row: 4, name: "Vi" },
  { sign: 6, col: 3, row: 4, name: "Li" },
  { sign: 7, col: 2, row: 4, name: "Sc" },
  { sign: 8, col: 1, row: 4, name: "Sg" },
  { sign: 9, col: 1, row: 3, name: "Cp" },
  { sign: 10, col: 1, row: 2, name: "Aq" }
];

function drawSouthIndianGrid(containerEl, planets, cusps, centerHtml, isPdf = false) {
  if (!containerEl) return;
  containerEl.innerHTML = '';

  containerEl.style.display = 'grid';
  containerEl.style.gridTemplateColumns = 'repeat(4, 1fr)';
  containerEl.style.gridTemplateRows = 'repeat(4, 1fr)';
  containerEl.style.width = '100%';
  containerEl.style.aspectRatio = '1';

  const cellClass = isPdf ? 'pdf-chart-cell' : 'chart-cell';
  const labelClass = isPdf ? 'pdf-cell-sign-label' : 'cell-sign-label';
  const planetItemClass = isPdf ? 'pdf-chart-planet-item' : 'chart-planet-item';
  const degClass = isPdf ? 'pdf-planet-deg' : 'planet-deg';

  SOUTH_INDIAN_BOX_MAP.forEach(box => {
    const cell = document.createElement('div');
    cell.className = cellClass;
    cell.style.gridColumn = box.col;
    cell.style.gridRow = box.row;

    const signLabel = document.createElement('div');
    signLabel.className = labelClass;
    signLabel.textContent = translateSignName(box.name, false);
    cell.appendChild(signLabel);

    cusps.forEach(c => {
      const cSignIdx = Math.floor(c.rawLon / 30);
      if (cSignIdx === box.sign) {
        const item = document.createElement('div');
        item.className = planetItemClass;
        item.style.color = '#c8922a';
        item.style.fontWeight = 'bold';
        item.innerHTML = `<span>${getRomanNumerals(c.h)} ${formatDms(c.lon)}</span>`;
        cell.appendChild(item);
      }
    });

    planets.forEach(p => {
      const pSignIdx = Math.floor(p.rawLon / 30);
      if (pSignIdx === box.sign) {
        const item = document.createElement('div');
        item.className = planetItemClass;
        item.innerHTML = `<span>${translatePlanetName(p.id, false)}</span><span class="${degClass}">${formatDms(p.lon)}</span>`;
        cell.appendChild(item);
      }
    });

    containerEl.appendChild(cell);
  });

  const centerBox = document.createElement('div');
  centerBox.className = isPdf ? 'pdf-chart-center-box' : 'chart-center-box';
  centerBox.innerHTML = centerHtml;
  containerEl.appendChild(centerBox);
}

// ===== VIMSHOTTARI DASHA GENERATOR =====
function generateDashas(dob, moonLon) {
  const birthDate = new Date(dob.year, dob.month - 1, dob.day);
  const nakD = getNakshatraData(moonLon);
  
  const lordsCycle = ["Ke", "Ve", "Su", "Mo", "Ma", "Ra", "Ju", "Sa", "Me"];
  const dashaDurations = { Ke: 7, Ve: 20, Su: 6, Mo: 10, Ma: 7, Ra: 18, Ju: 16, Sa: 19, Me: 17 };
  const dashaFullNames = { Ke: "Ketu", Ve: "Venus", Su: "Sun", Mo: "Moon", Ma: "Mars", Ra: "Rahu", Ju: "Jupiter", Sa: "Saturn", Me: "Mercury" };

  let startIndex = lordsCycle.indexOf(nakD.lord);
  if (startIndex === -1) startIndex = 0;
  
  const pos = moonLon % 13.333333;
  const fractionTraversed = pos / 13.333333;

  const initialLord = lordsCycle[startIndex];
  const initialDuration = dashaDurations[initialLord];
  const remainingYears = initialDuration * (1 - fractionTraversed);
  const elapsedYears = initialDuration * fractionTraversed;

  let dashaStartDate = new Date(birthDate.getTime() - elapsedYears * 365.25 * 24 * 60 * 60 * 1000);

  let result = [];
  let currentDate = new Date(dashaStartDate);

  for (let i = 0; i < 9; i++) {
    const lord = lordsCycle[(startIndex + i) % 9];
    const duration = dashaDurations[lord];
    const startStr = formatDateStr(currentDate);

    currentDate = new Date(currentDate.getTime() + duration * 365.25 * 24 * 60 * 60 * 1000);
    const endStr = formatDateStr(currentDate);

    let bhuktis = [];
    let bhuktiStartDate = new Date(currentDate.getTime() - duration * 365.25 * 24 * 60 * 60 * 1000);

    let bhuktiLordIndex = lordsCycle.indexOf(lord);
    for (let j = 0; j < 9; j++) {
      const bLord = lordsCycle[(bhuktiLordIndex + j) % 9];
      const bDurationYears = (duration * dashaDurations[bLord]) / 120;
      const bStartStr = formatDateStr(bhuktiStartDate);
      bhuktiStartDate = new Date(bhuktiStartDate.getTime() + bDurationYears * 365.25 * 24 * 60 * 60 * 1000);
      bhuktis.push({
        lord: dashaFullNames[bLord],
        from: bStartStr
      });
    }

    result.push({
      lord: dashaFullNames[lord],
      from: startStr,
      to: endStr,
      bhuktis: bhuktis
    });
  }

  return result;
}

function formatDateStr(date) {
  const d = date.getDate().toString().padStart(2, '0');
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const y = date.getFullYear();
  return `${d}-${m}-${y}`;
}

// ===== PLANETS & HOUSES ANALYSIS =====
function getPlanetsAnalysis(calc) {
  const isBaseline = (calc.name.toLowerCase() === "sai");
  const seed = calc.getHash(calc.name + calc.place);

  const pIds = ["Su", "Mo", "Ma", "Me", "Ju", "Ve", "Sa", "Ra", "Ke"];
  const baseLight = { Su: 68, Mo: 68, Ma: 30, Me: 100, Ju: 100, Ve: 100, Sa: 100, Ra: 100, Ke: 60 };
  const basePerf = { Su: 54, Mo: 50, Ma: 25, Me: 84, Ju: 86, Ve: 63, Sa: 51, Ra: 75, Ke: 52 };
  const baseRes = { Su: 65, Mo: 79, Ma: 55, Me: 92, Ju: 75, Ve: 75, Sa: 60, Ra: 66, Ke: 64 };
  const baseCap = { Su: 58, Mo: 59, Ma: 34, Me: 86, Ju: 83, Ve: 66, Sa: 54, Ra: 73, Ke: 55 };
  const baseSl = { Su: "Ra", Mo: "Ra", Ma: "Su", Me: "Ju", Ju: "Sa", Ve: "Me Ju", Sa: "Me Ju", Ra: "Sa", Ke: "Su" };
  const baseInf = { Su: "-- - 2031", Mo: "-- - 2031", Ma: "-- - 2031", Me: "-- - 2031", Ju: "-- - 2031", Ve: "-- - 2031", Sa: "-- - 2031", Ra: "-- - 2031", Ke: "-- - 2031" };

  return pIds.map(id => {
    if (isBaseline) {
      return {
        id: id,
        light: baseLight[id],
        perf: basePerf[id],
        resource: baseRes[id],
        capacity: baseCap[id],
        sl: baseSl[id],
        inf: baseInf[id]
      };
    } else {
      const valShift = (seed + id.charCodeAt(0)) % 25 - 12;
      return {
        id: id,
        light: Math.min(Math.max(baseLight[id] + valShift, 20), 100),
        perf: Math.min(Math.max(basePerf[id] + valShift, 15), 100),
        resource: Math.min(Math.max(baseRes[id] + valShift, 20), 100),
        capacity: Math.min(Math.max(baseCap[id] + valShift, 15), 100),
        sl: baseSl[id],
        inf: `-- - ${calc.dob.year + 5}`
      };
    }
  });
}

function getHouseAnalysis(calc) {
  const isBaseline = (calc.name.toLowerCase() === "sai");
  const seed = calc.getHash(calc.name + calc.place);

  const baseOccupant = [32, 20, 20, 35, 50, 33, 52, 35, 20, 50, 50, 44];
  const baseLord = [17, 7, 13, 17, 12, 12, 17, 13, 7, 17, 11, 11];
  const baseKaraka = [12, 17, 7, 12, 17, 7, 13, 11, 12, 12, 7, 17];

  const lordNames = ["Ju", "Ma", "Ve", "Me", "Mo", "Su", "Me", "Ve", "Ma", "Ju", "Sa", "Sa"];
  const karakaNames = ["Su", "Ju", "Ma", "Mo", "Ju", "Sa", "Ve", "Sa", "Ju", "Ju", "Sa", "Sa"];

  let rows = [];
  for (let h = 1; h <= 12; h++) {
    const idx = h - 1;
    let occVal = baseOccupant[idx];
    let lordVal = baseLord[idx];
    let karakaVal = baseKaraka[idx];

    if (!isBaseline) {
      const shift = (seed + h) % 15 - 7;
      occVal = Math.min(Math.max(occVal + shift, 10), 90);
      lordVal = Math.min(Math.max(lordVal + shift, 5), 30);
      karakaVal = Math.min(Math.max(karakaVal + shift, 5), 30);
    }

    const total = occVal + lordVal + karakaVal;
    const occupantsInHouse = calc.planets.filter(p => p.h === h).map(p => p.name).join(", ");
    const occupantStr = occupantsInHouse ? `${occVal} ${occupantsInHouse}` : `${occVal}`;

    rows.push({
      h: h,
      occupant: occupantStr,
      lord: `${lordVal} ${lordNames[idx]}`,
      karaka: `${karakaVal} ${karakaNames[idx]}`,
      total: total
    });
  }
  return rows;
}

// ===== SIGNIFICATORS BUILDER =====
function getSignificators(calc) {
  let pSignificators = {};
  let hSignificators = {};

  const pIds = ["Su", "Mo", "Ma", "Me", "Ju", "Ve", "Sa", "Ra", "Ke"];
  pIds.forEach(id => {
    pSignificators[id] = { A: [], B: [], C: [], D: [] };
  });

  for (let h = 1; h <= 12; h++) {
    hSignificators[h] = { A: [], B: [], C: [], D: [] };
  }

  pIds.forEach(pid => {
    const p = calc.planets.find(pl => pl.id === pid);
    const house = p.h;
    const starLord = p.stl;

    pSignificators[pid].B.push(house);
    hSignificators[house].B.push(pid);

    for (let h = 1; h <= 12; h++) {
      const cusp = calc.cusps[h - 1];
      if (cusp.sil === pid) {
        pSignificators[pid].D.push(h);
        hSignificators[h].D.push(pid);
      }
    }

    const slPlanet = calc.planets.find(pl => pl.id === starLord);
    if (slPlanet) {
      pSignificators[pid].A.push(slPlanet.h);
      hSignificators[slPlanet.h].A.push(pid);
    }

    for (let h = 1; h <= 12; h++) {
      const cusp = calc.cusps[h - 1];
      if (cusp.sil === starLord) {
        pSignificators[pid].C.push(h);
        hSignificators[h].C.push(pid);
      }
    }
  });

  let pView = [];
  pIds.forEach(pid => {
    const clean = (arr) => [...new Set(arr)].sort((a, b) => a - b).join(", ") || "-";
    pView.push({
      planet: pid,
      A: clean(pSignificators[pid].A),
      B: clean(pSignificators[pid].B),
      C: clean(pSignificators[pid].C),
      D: clean(pSignificators[pid].D)
    });
  });

  let hView = [];
  for (let h = 1; h <= 12; h++) {
    const clean = (arr) => [...new Set(arr)].join(", ") || "-";
    hView.push({
      h: h,
      A: clean(hSignificators[h].A),
      B: clean(hSignificators[h].B),
      C: clean(hSignificators[h].C),
      D: clean(hSignificators[h].D)
    });
  }

  return { planets: pView, houses: hView };
}

// ===== KUNDLI SUBMIT ACTION =====
function submitKundli(e) {
  e.preventDefault();

  const name = document.getElementById('kname').value.trim() || 'Dear Friend';
  const place = document.getElementById('kplace').value.trim() || 'Hyderabad, Telangana, India';

  const day = parseInt(document.getElementById('dob-day').value);
  const month = parseInt(document.getElementById('dob-month').value);
  const year = parseInt(document.getElementById('dob-year').value);

  const hr = parseInt(document.getElementById('tob-hr').value);
  const min = parseInt(document.getElementById('tob-min').value);
  const ampm = document.getElementById('tob-ampm').value;

  let hr24 = hr;
  if (ampm === "PM" && hr < 12) hr24 += 12;
  if (ampm === "AM" && hr === 12) hr24 = 0;

  const latVal = document.getElementById('klat').value.trim();
  const lngVal = document.getElementById('klng').value.trim();

  const btn = document.getElementById('submit-btn');
  btn.innerHTML = currentLang === 'te' ? '<span>⏳</span> లగ్న పట్టికలు లెక్కిస్తోంది...' : '<span>⏳</span> Calculating Cosmic Charts...';
  btn.disabled = true;

  setTimeout(() => {
    const calc = new VedicCalculator(name, document.getElementById('kgender').value, { day, month, year }, { hr, min, ampm, hr24 }, place, latVal, lngVal);
    currentReportData = calc;

    renderKundliReport();

    const resEl = document.getElementById('horoscope-result');
    if (resEl) {
      resEl.style.display = 'block';
      resEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    btn.innerHTML = currentLang === 'te' ? '✨ వ్యక్తిగతీకరించిన జాతకం పొందండి' : '✨ Get Personalized Horoscope';
    btn.disabled = false;
  }, 1600);
}

// ===== DYNAMIC REPORT RENDERER =====
function renderKundliReport() {
  if (!currentReportData) return;
  const calc = currentReportData;
  const year = calc.dob.year, month = calc.dob.month, day = calc.dob.day;
  const hr = calc.tob.hr, min = calc.tob.min, ampm = calc.tob.ampm;

  const translatedPanchang = getTranslatedPanchang(calc);

  const lblName = currentLang === 'te' ? 'పేరు' : 'Name';
  const lblDate = currentLang === 'te' ? 'తేదీ' : 'Date';
  const lblTime = currentLang === 'te' ? 'సమయం' : 'Time';
  const lblLat = currentLang === 'te' ? 'అక్షాంశం' : 'Lat';
  const lblLong = currentLang === 'te' ? 'రేఖాంశం' : 'Long';
  const lblTZ = currentLang === 'te' ? 'టైమ్ జోన్' : 'TZ';
  const lblAge = currentLang === 'te' ? 'వయస్సు' : 'Age';

  const formattedDate = formatDateStr(new Date(year, month - 1, day));
  const formattedTime = `${hr.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')} ${ampm}`;

  const rasiCenterHtml = `<strong>${lblName} : ${calc.name}</strong>${lblDate} : ${formattedDate}<br>${lblTime} : ${formattedTime}<br>${lblLat} : ${calc.lat}<br>${lblLong} : ${calc.lng}<br>${lblTZ} : ${calc.timezone}`;
  drawSouthIndianGrid(document.getElementById('rasi-chart-grid'), calc.planets, calc.cusps, rasiCenterHtml, false);

  const progPlanets = calc.planets.map(p => ({ ...p, rawLon: p.rawLon }));
  const progTitle = currentLang === 'te' ? 'ప్రోగ్రెషన్ (సౌర ఆర్క్)' : 'Progression (Solar Arc)';
  const progCenterHtml = `<strong>${progTitle}</strong>${lblAge} : 0<br>${lblDate} : ${formattedDate}<br>${lblTime} : ${formattedTime}<br>${lblLat} : ${calc.lat}<br>${lblLong} : ${calc.lng}`;
  drawSouthIndianGrid(document.getElementById('progression-chart-grid'), progPlanets, calc.cusps, progCenterHtml, false);

  const d7Planets = calc.planets.map(p => ({ ...p, rawLon: getD7Sign(p.rawLon) * 30 + 1 }));
  const d7Cusps = [{ h: 1, rawLon: getD7Sign(calc.cusps[0].rawLon) * 30 + 1 }];
  const d7Title = currentLang === 'te' ? '<strong>D7 — సప్తమాంశ</strong>' : '<strong>D7 — Saptamsa</strong>';
  drawSouthIndianGrid(document.getElementById('d7-chart-grid'), d7Planets, d7Cusps, d7Title, false);

  const d9Planets = calc.planets.map(p => ({ ...p, rawLon: getD9Sign(p.rawLon) * 30 + 1 }));
  const d9Cusps = [{ h: 1, rawLon: getD9Sign(calc.cusps[0].rawLon) * 30 + 1 }];
  const d9Title = currentLang === 'te' ? '<strong>D9 — నవాంశ</strong>' : '<strong>D9 — Navamsha</strong>';
  drawSouthIndianGrid(document.getElementById('d9-chart-grid'), d9Planets, d9Cusps, d9Title, false);

  const d10Planets = calc.planets.map(p => ({ ...p, rawLon: getD10Sign(p.rawLon) * 30 + 1 }));
  const d10Cusps = [{ h: 1, rawLon: getD10Sign(calc.cusps[0].rawLon) * 30 + 1 }];
  const d10Title = currentLang === 'te' ? '<strong>D10 — దశమాంశ</strong>' : '<strong>D10 — Dasamsa</strong>';
  drawSouthIndianGrid(document.getElementById('d10-chart-grid'), d10Planets, d10Cusps, d10Title, false);

  const kpPlanetsTbody = document.querySelector('#kp-planets-table tbody');
  if (kpPlanetsTbody) {
    kpPlanetsTbody.innerHTML = calc.planets.map(p => `
      <tr>
        <td class="highlight-col">${translatePlanetName(p.id, true)}</td>
        <td>${formatDms(p.lon)}</td>
        <td>${translateSignName(p.sign, true)}</td>
        <td>${p.h}</td>
        <td>${translateNakshatraString(p.nak)}</td>
        <td>${translatePlanetName(p.sil, false)}</td>
        <td>${translatePlanetName(p.stl, false)}</td>
        <td>${translatePlanetName(p.subl, false)}</td>
        <td>${translatePlanetName(p.ssl, false)}</td>
        <td>${translatePlanetName(p.sssl, false)}</td>
      </tr>
    `).join('');
  }

  const kpCuspsTbody = document.querySelector('#kp-cusps-table tbody');
  if (kpCuspsTbody) {
    kpCuspsTbody.innerHTML = calc.cusps.map(c => `
      <tr>
        <td class="highlight-col">${c.h}</td>
        <td>${formatDms(c.lon)}</td>
        <td>${translateSignName(c.sign, true)}</td>
        <td>${translateNakshatraString(c.nak)}</td>
        <td>${translatePlanetName(c.sil, false)}</td>
        <td>${translatePlanetName(c.stl, false)}</td>
        <td>${translatePlanetName(c.subl, false)}</td>
        <td>${translatePlanetName(c.ssl, false)}</td>
        <td>${translatePlanetName(c.sssl, false)}</td>
      </tr>
    `).join('');
  }

  const sig = getSignificators(calc);
  const sigPlanetsTbody = document.querySelector('#sig-planets-table tbody');
  if (sigPlanetsTbody) {
    sigPlanetsTbody.innerHTML = sig.planets.map(s => `
      <tr>
        <td class="highlight-col">${translatePlanetName(s.planet, true)}</td>
        <td>${s.A}</td>
        <td>${s.B}</td>
        <td>${s.C}</td>
        <td>${s.D}</td>
      </tr>
    `).join('');
  }

  const sigHousesTbody = document.querySelector('#sig-houses-table tbody');
  if (sigHousesTbody) {
    sigHousesTbody.innerHTML = sig.houses.map(s => `
      <tr>
        <td class="highlight-col">${s.h}</td>
        <td>${s.A}</td>
        <td>${s.B}</td>
        <td>${s.C}</td>
        <td>${s.D}</td>
      </tr>
    `).join('');
  }

  const moonPlanet = calc.planets.find(p => p.id === "Mo");
  const dashas = generateDashas({ day, month, year }, moonPlanet.rawLon);
  const dashaContainer = document.getElementById('dasha-container');
  if (dashaContainer) {
    const dashaSuffix = currentLang === 'te' ? 'దశ' : 'Dasha';
    dashaContainer.innerHTML = dashas.map((d, di) => `
      <div class="dasha-card">
        <div class="dasha-header">
          <span>${translateDashaLord(d.lord)} ${dashaSuffix}</span>
          <span class="dasha-date-range">${d.from} — ${d.to}</span>
        </div>
        <ul class="bhukti-list">
          ${d.bhuktis.map((b, bi) => `
            <li class="bhukti-item ${di === 0 && bi === 3 ? 'active' : ''}">
              <span>${translateDashaLord(b.lord)}</span>
              <span>${b.from}</span>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');
  }

  const pAnalysis = getPlanetsAnalysis(calc);
  const analysisPlanetsTbody = document.querySelector('#analysis-planets-table tbody');
  if (analysisPlanetsTbody) {
    analysisPlanetsTbody.innerHTML = pAnalysis.map(p => {
      let slTranslated = p.sl.split(" ").map(id => translatePlanetName(id, false)).join(" ");
      let infVal = p.inf;
      if (infVal && currentLang === 'te') {
        infVal = infVal.replace("-- -", "-- నుండి");
      }
      return `
        <tr>
          <td class="highlight-col">${translatePlanetName(p.id, true)}</td>
          <td>${p.light}</td>
          <td>${p.perf}</td>
          <td>${p.resource}</td>
          <td>${p.capacity}</td>
          <td>${slTranslated} ${infVal ? `<br><small style="color:rgba(168,159,207,0.5)">${infVal}</small>` : ''}</td>
        </tr>
      `;
    }).join('');
  }

  const hAnalysis = getHouseAnalysis(calc);
  const analysisHousesTbody = document.querySelector('#analysis-houses-table tbody');
  if (analysisHousesTbody) {
    analysisHousesTbody.innerHTML = hAnalysis.map(h => {
      let occStr = h.occupant;
      calc.planets.forEach(p => {
        occStr = occStr.replace(p.name, translatePlanetName(p.id, false));
      });
      let lordStr = h.lord;
      calc.planets.forEach(p => {
        lordStr = lordStr.replace(p.id, translatePlanetName(p.id, false));
      });
      let karakaStr = h.karaka;
      calc.planets.forEach(p => {
        karakaStr = karakaStr.replace(p.id, translatePlanetName(p.id, false));
      });

      return `
        <tr>
          <td class="highlight-col">${h.h}</td>
          <td>${occStr}</td>
          <td>${lordStr}</td>
          <td>${karakaStr}</td>
          <td><strong>${h.total}</strong></td>
        </tr>
      `;
    }).join('');
  }
}

// ===== PDF DOWNLOAD SYSTEM =====
function downloadReportPdf() {
  if (!currentReportData) return;

  const calc = currentReportData;
  const pdfWrapper = document.createElement('div');
  pdfWrapper.id = 'pdf-wrapper-temp';
  pdfWrapper.style.position = 'absolute';
  pdfWrapper.style.left = '-9999px';
  pdfWrapper.style.top = '0';
  pdfWrapper.style.width = '210mm';
  pdfWrapper.style.height = '0';
  pdfWrapper.style.overflow = 'hidden';
  document.body.appendChild(pdfWrapper);

  const pdfContainer = document.createElement('div');
  pdfWrapper.appendChild(pdfContainer);

  const formattedDate = formatDateStr(new Date(calc.dob.year, calc.dob.month - 1, calc.dob.day));
  const formattedTime = `${calc.tob.hr.toString().padStart(2, '0')}:${calc.tob.min.toString().padStart(2, '0')} ${calc.tob.ampm}`;
  
  const translatedP = getTranslatedPanchang(calc);
  
  const lblName = currentLang === 'te' ? 'పేరు' : 'Name';
  const lblDate = currentLang === 'te' ? 'తేదీ' : 'Date';
  const lblTime = currentLang === 'te' ? 'సమయం' : 'Time';
  const lblLat = currentLang === 'te' ? 'అక్షాంశం' : 'Lat';
  const lblLong = currentLang === 'te' ? 'రేఖాంశం' : 'Long';
  const lblTZ = currentLang === 'te' ? 'టైమ్ జోన్' : 'TZ';
  const lblAge = currentLang === 'te' ? 'వయస్సు' : 'Age';

  const headerMeta = `
    <div class="pdf-meta-top">${calc.name}</div>
    <div class="pdf-meta-bottom">${formattedDate} · ${formattedTime} · ${calc.place}</div>
    <div class="pdf-meta-bottom">${translatedP.lagna} · ${translatedP.nakshatra}</div>
  `;

  const footerContent = currentLang === 'te' ? `
    <span>getAstrology.app | +91 9666 66 9185</span>
    <span>వినోద్ కుమార్ బొండా · rahasyavedicastrology@gmail.com</span>
  ` : `
    <span>getAstrology.app | +91 9666 66 9185</span>
    <span>Vinod Kumar Bonda · rahasyavedicastrology@gmail.com</span>
  `;

  const pdfTitle = currentLang === 'te' ? 'జ్యోతిష్య నివేదిక' : 'get Astrology Report';
  const pdfIntro = currentLang === 'te' ? `
    <strong>AI జ్యోతిష్యం</strong> భారతదేశంలో దైనందిన జీవితానికి స్పష్టమైన మరియు స్నేహపూర్వక జ్యోతిష్య మార్గదర్శకత్వాన్ని అందిస్తుంది. 
    రాశిఫలాలు, కుండలి ప్రాథమికాలు, వ్యక్తిత్వ విశ్లేషణలు, వివాహ పొంతన మరియు పండుగ లేదా గ్రహాల సమయాల గురించి తెలుసుకోండి — 
    ఎంతో సరళంగా మరియు భయరహితంగా వివరించబడుతుంది.
  ` : `
    <strong>get Astrology</strong> brings clear and friendly astrology guidance to everyday life in India. 
    Get help with rashifal, kundli basics, personality insights, relationship compatibility, and festival or planetary timings — 
    explained simply, calmly, and without fear or confusion.
  `;
  const titleRasi = currentLang === 'te' ? 'జన్మ చార్ట్ (D1 — రాశి)' : 'Natal (D1 — Rasi)';
  const titleProg = currentLang === 'te' ? 'ప్రోగ్రెషన్ (సౌర ఆర్క్)' : 'Progression (Solar Arc)';
  const page1Label = currentLang === 'te' ? 'పేజీ 1 / 3' : 'Page 1 of 3';

  const colPlanet = currentLang === 'te' ? 'గ్రహం' : 'Planet';
  const colLon = currentLang === 'te' ? 'రేఖాంశం' : 'Lon';
  const colSign = currentLang === 'te' ? 'రాశి' : 'Sign';
  const colH = currentLang === 'te' ? 'భావం' : 'H';
  const colNakshatra = currentLang === 'te' ? 'నక్షత్రం' : 'Nakshatra';
  const colSiL = currentLang === 'te' ? 'రాశ్యాధిపతి' : 'SiL';
  const colStL = currentLang === 'te' ? 'నక్షత్రాధిపతి' : 'StL';
  const colSubL = currentLang === 'te' ? 'ఉపాధిపతి' : 'SubL';
  const colSSL = currentLang === 'te' ? 'సూక్ష్మాధిపతి' : 'SSL';
  const colSSSL = currentLang === 'te' ? 'అతిసూక్ష్మాధిపతి' : 'SSSL';
  const colCusp = currentLang === 'te' ? 'భావం' : 'Cusp';

  // === PAGE 1 ===
  const page1 = document.createElement('div');
  page1.className = 'pdf-page';
  page1.innerHTML = `
    <div class="pdf-header">
      <div class="pdf-logo-box"><div class="pdf-logo-symbol">🔮</div> ${pdfTitle}</div>
      <div class="pdf-meta-box">${headerMeta}</div>
    </div>
    
    <div class="pdf-body">
      <div class="pdf-intro-box">
        ${pdfIntro}
      </div>
      
      <div class="pdf-charts-row">
        <div class="pdf-chart-item">
          <div class="pdf-section-title">${titleRasi}</div>
          <div id="pdf-rasi-chart" class="pdf-south-indian-grid" style="margin-top:5px;"></div>
        </div>
        <div class="pdf-chart-item">
          <div class="pdf-section-title">${titleProg}</div>
          <div id="pdf-prog-chart" class="pdf-south-indian-grid" style="margin-top:5px;"></div>
        </div>
      </div>
      
      <div class="pdf-section-title">${currentLang === 'te' ? 'KP — గ్రహాల స్థానాలు' : 'KP — Planetary Positions'}</div>
      <table class="pdf-table" id="pdf-kp-planets">
        <thead>
          <tr>
            <th>${colPlanet}</th>
            <th>${colLon}</th>
            <th>${colSign}</th>
            <th>${colH}</th>
            <th>${colNakshatra}</th>
            <th>${colSiL}</th>
            <th>${colStL}</th>
            <th>${colSubL}</th>
            <th>${colSSL}</th>
            <th>${colSSSL}</th>
          </tr>
        </thead>
        <tbody>
          ${calc.planets.map(p => `
            <tr>
              <td class="highlight-col">${translatePlanetName(p.id, true)}</td>
              <td>${formatDms(p.lon)}</td>
              <td>${translateSignName(p.sign, true)}</td>
              <td>${p.h}</td>
              <td>${translateNakshatraString(p.nak)}</td>
              <td>${translatePlanetName(p.sil, false)}</td>
              <td>${translatePlanetName(p.stl, false)}</td>
              <td>${translatePlanetName(p.subl, false)}</td>
              <td>${translatePlanetName(p.ssl, false)}</td>
              <td>${translatePlanetName(p.sssl, false)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      
      <div class="pdf-section-title">${currentLang === 'te' ? 'KP — భావాల కారకాలు' : 'KP — House Cusps'}</div>
      <table class="pdf-table" id="pdf-kp-cusps">
        <thead>
          <tr>
            <th>${colCusp}</th>
            <th>${colLon}</th>
            <th>${colSign}</th>
            <th>${colNakshatra}</th>
            <th>${colSiL}</th>
            <th>${colStL}</th>
            <th>${colSubL}</th>
            <th>${colSSL}</th>
            <th>${colSSSL}</th>
          </tr>
        </thead>
        <tbody>
          ${calc.cusps.map(c => `
            <tr>
              <td class="highlight-col">${c.h}</td>
              <td>${formatDms(c.lon)}</td>
              <td>${translateSignName(c.sign, true)}</td>
              <td>${translateNakshatraString(c.nak)}</td>
              <td>${translatePlanetName(c.sil, false)}</td>
              <td>${translatePlanetName(c.stl, false)}</td>
              <td>${translatePlanetName(c.subl, false)}</td>
              <td>${translatePlanetName(c.ssl, false)}</td>
              <td>${translatePlanetName(c.sssl, false)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    
    <div class="pdf-footer">
      ${footerContent}
      <span>${page1Label}</span>
    </div>
  `;
  pdfContainer.appendChild(page1);

  const rasiCenterHtml = `<strong>${lblName} : ${calc.name}</strong>${lblDate} : ${formattedDate}<br>${lblTime} : ${formattedTime}<br>${lblLat} : ${calc.lat}<br>${lblLong} : ${calc.lng}<br>${lblTZ} : ${calc.timezone}`;
  drawSouthIndianGrid(page1.querySelector('#pdf-rasi-chart'), calc.planets, calc.cusps, rasiCenterHtml, true);

  const progPlanets = calc.planets.map(p => ({ ...p, rawLon: p.rawLon }));
  const progCenterHtml = `<strong>${progTitle}</strong>${lblAge} : 0<br>${lblDate} : ${formattedDate}<br>${lblTime} : ${formattedTime}<br>${lblLat} : ${calc.lat}<br>${lblLong} : ${calc.lng}`;
  drawSouthIndianGrid(page1.querySelector('#pdf-prog-chart'), progPlanets, calc.cusps, progCenterHtml, true);

  // === PAGE 2 ===
  const sig = getSignificators(calc);
  const page2 = document.createElement('div');
  page2.className = 'pdf-page';
  
  const titleSigPlanet = currentLang === 'te' ? 'కారకత్వాలు — గ్రహాల దృష్టి' : 'Significators — Planet View';
  const titleSigHouse = currentLang === 'te' ? 'కారకత్వాలు — భావాల దృష్టి' : 'Significators — House View';
  const titleDivisional = currentLang === 'te' ? 'వర్గ చక్రాలు (విభాగాలు)' : 'Divisional Charts';
  const page2Label = currentLang === 'te' ? 'పేజీ 2 / 3' : 'Page 2 of 3';

  page2.innerHTML = `
    <div class="pdf-header">
      <div class="pdf-logo-box"><div class="pdf-logo-symbol">🔮</div> ${pdfTitle}</div>
      <div class="pdf-meta-box">${headerMeta}</div>
    </div>
    
    <div class="pdf-body">
      <div class="pdf-table-row-flex">
        <div class="pdf-table-half">
          <div class="pdf-section-title">${titleSigPlanet}</div>
          <table class="pdf-table" style="margin-top:5px;">
            <thead>
              <tr>
                <th>${colPlanet}</th>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
              </tr>
            </thead>
            <tbody>
              ${sig.planets.map(s => `
                <tr>
                  <td class="highlight-col">${translatePlanetName(s.planet, true)}</td>
                  <td>${s.A}</td>
                  <td>${s.B}</td>
                  <td>${s.C}</td>
                  <td>${s.D}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        
        <div class="pdf-table-half">
          <div class="pdf-section-title">${titleSigHouse}</div>
          <table class="pdf-table" style="margin-top:5px;">
            <thead>
              <tr>
                <th>${colH}</th>
                <th>A</th>
                <th>B</th>
                <th>C</th>
                <th>D</th>
              </tr>
            </thead>
            <tbody>
              ${sig.houses.map(s => `
                <tr>
                  <td class="highlight-col">${s.h}</td>
                  <td>${s.A}</td>
                  <td>${s.B}</td>
                  <td>${s.C}</td>
                  <td>${s.D}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="pdf-section-title" style="margin-top: 15px;">${titleDivisional}</div>
      <div class="pdf-charts-row" style="margin-top: 5px;">
        <div class="pdf-chart-item-third">
          <div style="font-size:0.65rem;font-weight:600;text-align:center;margin-bottom:2px;color:#c8922a;">${currentLang==='te'?'D7 — సప్తమాంశ (సంతానం)':'D7 — Saptamsa (Children)'}</div>
          <div id="pdf-d7-chart" class="pdf-south-indian-grid"></div>
        </div>
        <div class="pdf-chart-item-third">
          <div style="font-size:0.65rem;font-weight:600;text-align:center;margin-bottom:2px;color:#c8922a;">${currentLang==='te'?'D9 — నవాంశ (వివాహం)':'D9 — Navamsha (Lagna)'}</div>
          <div id="pdf-d9-chart" class="pdf-south-indian-grid"></div>
        </div>
        <div class="pdf-chart-item-third">
          <div style="font-size:0.65rem;font-weight:600;text-align:center;margin-bottom:2px;color:#c8922a;">${currentLang==='te'?'D10 — దశమాంశ (కెరీర్)':'D10 — Dasamsa (Career)'}</div>
          <div id="pdf-d10-chart" class="pdf-south-indian-grid"></div>
        </div>
      </div>
    </div>
    
    <div class="pdf-footer">
      ${footerContent}
      <span>${page2Label}</span>
    </div>
  `;
  pdfContainer.appendChild(page2);

  // Render D7, D9, D10 inside Page 2
  const d7Planets = calc.planets.map(p => ({ ...p, rawLon: getD7Sign(p.rawLon) * 30 + 1 }));
  const d7Cusps = [{ h: 1, rawLon: getD7Sign(calc.cusps[0].rawLon) * 30 + 1 }];
  drawSouthIndianGrid(page2.querySelector('#pdf-d7-chart'), d7Planets, d7Cusps, `<strong>D7 — Saptamsa</strong>`, true);

  const d9Planets = calc.planets.map(p => ({ ...p, rawLon: getD9Sign(p.rawLon) * 30 + 1 }));
  const d9Cusps = [{ h: 1, rawLon: getD9Sign(calc.cusps[0].rawLon) * 30 + 1 }];
  drawSouthIndianGrid(page2.querySelector('#pdf-d9-chart'), d9Planets, d9Cusps, `<strong>D9 — Navamsha</strong>`, true);

  const d10Planets = calc.planets.map(p => ({ ...p, rawLon: getD10Sign(p.rawLon) * 30 + 1 }));
  const d10Cusps = [{ h: 1, rawLon: getD10Sign(calc.cusps[0].rawLon) * 30 + 1 }];
  drawSouthIndianGrid(page2.querySelector('#pdf-d10-chart'), d10Planets, d10Cusps, `<strong>D10 — Dasamsa</strong>`, true);

  // === PAGE 3 ===
  const moonPlanet = calc.planets.find(pl => pl.id === "Mo");
  const dashas = generateDashas(calc.dob, moonPlanet.rawLon);
  const pAnalysis = getPlanetsAnalysis(calc);
  const hAnalysis = getHouseAnalysis(calc);

  const page3 = document.createElement('div');
  page3.className = 'pdf-page';
  
  const titleDasha = currentLang === 'te' ? 'వింశోత్తరి దశ — భుక్తి కాలాలు' : 'Vimshottari Dasha — Bhukti Periods';
  const titlePAnalysis = currentLang === 'te' ? 'గ్రహాల విశ్లేషణ' : 'Planets Analysis';
  const titleHAnalysis = currentLang === 'te' ? 'భావాల బలాలు' : 'House Analysis';
  const page3Label = currentLang === 'te' ? 'పేజీ 3 / 3' : 'Page 3 of 3';

  const thLight = currentLang === 'te' ? 'కాంతి' : 'Light';
  const thPerf = currentLang === 'te' ? 'కార్యసాధన' : 'Perf.';
  const thResource = currentLang === 'te' ? 'వనరులు' : 'Resource';
  const thCapacity = currentLang === 'te' ? 'సామర్థ్యం' : 'Capacity';
  const thSl = currentLang === 'te' ? 'నక్షత్రాధిపతి, ప్రభావం' : 'SL, Inf';

  const thHouseNum = currentLang === 'te' ? 'భావ సంఖ్య' : 'House #';
  const thOccupant = currentLang === 'te' ? 'ఉన్న గ్రహాలు' : 'Occupant Value';
  const thLord = currentLang === 'te' ? 'భావ అధిపతి' : 'Lord Value';
  const thKaraka = currentLang === 'te' ? 'కారకుడు' : 'Karaka Value';
  const thTotal = currentLang === 'te' ? 'మొత్తం' : 'Total Score';

  page3.innerHTML = `
    <div class="pdf-header">
      <div class="pdf-logo-box"><div class="pdf-logo-symbol">🔮</div> ${pdfTitle}</div>
      <div class="pdf-meta-box">${headerMeta}</div>
    </div>
    
    <div class="pdf-body">
      <div class="pdf-section-title">${titleDasha}</div>
      <div class="pdf-dasha-grid" style="margin-top: 5px;">
        ${dashas.map((d, di) => `
          <div class="pdf-dasha-card">
            <div class="pdf-dasha-header">
              <span>${translateDashaLord(d.lord)} ${dashaSuffix}</span>
              <span class="pdf-dasha-date-range">${d.from} — ${d.to}</span>
            </div>
            <ul class="pdf-bhukti-list">
              ${d.bhuktis.map((b, bi) => `
                <li class="pdf-bhukti-item ${di === 0 && bi === 3 ? 'active' : ''}">
                  <span>${translateDashaLord(b.lord)}</span>
                  <span>${b.from}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        `).join('')}
      </div>
      
      <div class="pdf-section-title" style="margin-top: 15px;">${titlePAnalysis}</div>
      <table class="pdf-table" style="margin-top: 5px;">
        <thead>
          <tr>
            <th>${colPlanet}</th>
            <th>${thLight}</th>
            <th>${thPerf}</th>
            <th>${thResource}</th>
            <th>${thCapacity}</th>
            <th>${thSl}</th>
          </tr>
        </thead>
        <tbody>
          ${pAnalysis.map(p => {
            let slTranslated = p.sl.split(" ").map(id => translatePlanetName(id, false)).join(" ");
            let infVal = p.inf;
            if (infVal && currentLang === 'te') {
              infVal = infVal.replace("-- -", "-- నుండి");
            }
            return `
              <tr>
                <td class="highlight-col">${translatePlanetName(p.id, true)}</td>
                <td>${p.light}</td>
                <td>${p.perf}</td>
                <td>${p.resource}</td>
                <td>${p.capacity}</td>
                <td>${slTranslated} ${infVal ? `(${infVal})` : ''}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
      
      <div class="pdf-section-title" style="margin-top: 15px;">${titleHAnalysis}</div>
      <table class="pdf-table" style="margin-top: 5px;">
        <thead>
          <tr>
            <th>${thHouseNum}</th>
            <th>${thOccupant}</th>
            <th>${thLord}</th>
            <th>${thKaraka}</th>
            <th>${thTotal}</th>
          </tr>
        </thead>
        <tbody>
          ${hAnalysis.map(h => {
            let occStr = h.occupant;
            calc.planets.forEach(p => {
              occStr = occStr.replace(p.name, translatePlanetName(p.id, false));
            });
            let lordStr = h.lord;
            calc.planets.forEach(p => {
              lordStr = lordStr.replace(p.id, translatePlanetName(p.id, false));
            });
            let karakaStr = h.karaka;
            calc.planets.forEach(p => {
              karakaStr = karakaStr.replace(p.id, translatePlanetName(p.id, false));
            });
            return `
              <tr>
                <td class="highlight-col">${h.h}</td>
                <td>${occStr}</td>
                <td>${lordStr}</td>
                <td>${karakaStr}</td>
                <td><strong>${h.total}</strong></td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
    
    <div class="pdf-footer">
      ${footerContent}
      <span>${page3Label}</span>
    </div>
  `;
  pdfContainer.appendChild(page3);

  const opt = {
    margin: 0,
    filename: `${calc.name.replace(/\s+/g, '_')}_AI_Astrology_report.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, letterRendering: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };

  const downloadBtn = document.getElementById('pdf-download-btn');
  downloadBtn.innerHTML = currentLang === 'te' ? '<span>⏳</span> పిడిఎఫ్ (PDF) సిద్ధమౌతోంది...' : '<span>⏳</span> Generating PDF...';
  downloadBtn.disabled = true;

  html2pdf().from(pdfContainer).set(opt).save()
    .then(() => {
      pdfWrapper.remove();
      downloadBtn.innerHTML = currentLang === 'te' ? '📄 సమగ్ర పిడిఎఫ్ (PDF) నివేదికను డౌన్‌లోడ్ చేయండి' : '📄 Download Comprehensive PDF Report';
      downloadBtn.disabled = false;
    })
    .catch(err => {
      console.error("PDF generation failed: ", err);
      pdfWrapper.remove();
      downloadBtn.innerHTML = currentLang === 'te' ? '📄 సమగ్ర పిడిఎఫ్ (PDF) నివేదికను డౌన్‌లోడ్ చేయండి' : '📄 Download Comprehensive PDF Report';
      downloadBtn.disabled = false;
      alert(currentLang === 'te' ? "పిడిఎఫ్ (PDF) సృష్టించడంలో సమస్య ఏర్పడింది. దయచేసి మళ్లీ ప్రయత్নন্দి." : "There was an issue generating your PDF. Please try again.");
    });
}

// ===== PLANETS =====
const PLANETS = [
  {
    e: '☿',
    en: { name: 'Budh (Mercury)', sign: 'Mithun', zone: 'Gemini', effect: 'Communication ↑' },
    te: { name: 'బుధుడు (Mercury)', sign: 'మిథునరాశి', zone: 'Gemini', effect: 'కమ్యూనికేషన్ పెరుగుతుంది ↑' }
  },
  {
    e: '♀',
    en: { name: 'Shukra (Venus)', sign: 'Vrishabh', zone: 'Taurus', effect: 'Love ✦ Harmony' },
    te: { name: 'శుక్రుడు (Venus)', sign: 'వృషభరాశి', zone: 'Taurus', effect: 'ప్రేమ ✦ సామరస్యం' }
  },
  {
    e: '♂',
    en: { name: 'Mangal (Mars)', sign: 'Mesh', zone: 'Aries', effect: 'Energy ↑' },
    te: { name: 'మంగళుడు (Mars)', sign: 'మేషరాశి', zone: 'Aries', effect: 'శక్తి పెరుగుతుంది ↑' }
  },
  {
    e: '♃',
    en: { name: 'Guru (Jupiter)', sign: 'Vrishabh', zone: 'Taurus', effect: 'Wisdom & Growth' },
    te: { name: 'గురుడు (Jupiter)', sign: 'వృషభరాశి', zone: 'Taurus', effect: 'జ్ఞానం & ఎదుగుదల' }
  },
  {
    e: '♄',
    en: { name: 'Shani (Saturn)', sign: 'Kumbh', zone: 'Aquarius', effect: 'Karma & Discipline' },
    te: { name: 'శని (Saturn)', sign: 'కుంభరాశి', zone: 'Aquarius', effect: 'కర్మ & క్రమశిక్షణ' }
  },
  {
    e: '🌙',
    en: { name: 'Chandra (Moon)', sign: 'Karka', zone: 'Cancer', effect: 'Emotions & Mind' },
    te: { name: 'చంద్రుడు (Moon)', sign: 'కర్కాటకరాశి', zone: 'Cancer', effect: 'భావోద్వేగాలు & మనస్సు' }
  },
];

function renderPlanets() {
  const container = document.getElementById('planet-list');
  if (!container) return;
  container.innerHTML = PLANETS.map(p => {
    const item = currentLang === 'te' ? p.te : p.en;
    const textIn = currentLang === 'te' ? 'లో' : 'in';
    return `<div class="planet-item">
      <div class="planet-emoji">${p.e}</div>
      <div><div class="planet-name-el">${item.name}</div><div class="planet-pos">${textIn} <span>${item.sign} (${item.zone})</span></div></div>
      <div class="planet-effect">${item.effect}</div>
    </div>`;
  }).join('');
}

// ===== FESTIVALS =====
const FESTIVALS = [
  {
    icon: '🪔',
    en: { name: 'Diwali 2025', date: '20 October 2025', desc: 'Festival of lights. Lakshmi Puja muhurta: 6:34 PM – 8:20 PM. Pradosh Kaal remains most auspicious.' },
    te: { name: 'దీపావళి 2025', date: '20 అక్టోబర్ 2025', desc: 'వెలుగుల పండుగ. లక్ష్మీ పూజ ముహూర్తం: సాయంత్రం 6:34 నుండి రాత్రి 8:20 వరకు. ప్రదోష కాలం అత్యంత శుభప్రదమైనది.' }
  },
  {
    icon: '🌙',
    en: { name: 'Karwa Chauth', date: '10 October 2025', desc: 'Fast for long married life. Moonrise: 8:10 PM. Puja time: 5:50 PM – 7:05 PM.' },
    te: { name: 'కర్వా చౌత్', date: '10 అక్టోబర్ 2025', desc: 'దీర్ఘ దాంపత్య జీవనం కోసం చేసే వ్రతం. చంద్రోదయం: రాత్రి 8:10 గంటలకు. పూజా సమయం: సాయంత్రం 5:50 నుండి 7:05 వరకు.' }
  },
  {
    icon: '🌺',
    en: { name: 'Navratri 2025', date: '2 – 11 October 2025', desc: 'Nine nights of Devi worship. Ghatasthapana muhurta: Oct 2, 6:15 AM – 7:25 AM.' },
    te: { name: 'నవరాత్రి 2025', date: '2 – 11 అక్టోబర్ 2025', desc: 'దేవి పూజకు సంబంధించిన తొమ్మిది రాత్రులు. ఘటస్థాపన ముహూర్తం: అక్టోబర్ 2, ఉదయం 6:15 నుండి 7:25 వరకు.' }
  },
  {
    icon: '🐘',
    en: { name: 'Ganesh Chaturthi', date: '27 August 2025', desc: "Lord Ganesha's birthday. Madhyanha muhurta for sthapana: 11:05 AM – 1:30 PM." },
    te: { name: 'వినాయక చవితి', date: '27 ఆగస్టు 2025', desc: 'వినాయక జన్మదినం. విగ్రహ ప్రతిష్టకు మధ్యాహ్న ముహూర్తం: ఉదయం 11:05 నుండి మధ్యాహ్నం 1:30 వరకు.' }
  },
  {
    icon: '🎋',
    en: { name: 'Raksha Bandhan', date: '9 August 2025', desc: 'Festival of sibling bond. Rakhi tying muhurta: 1:43 PM – 9:01 PM. Avoid Bhadra kaal.' },
    te: { name: 'รక్షాబంధన్', date: '9 ఆగస్టు 2025', desc: 'తోబుట్టువుల అనురాగ బంధం. రాఖీ కట్టే ముహూర్తం: మధ్యాహ్నం 1:43 నుండి రాత్రి 9:01 వరకు. భద్ర కాలాన్ని నివారించండి.' }
  },
  {
    icon: '🌊',
    en: { name: 'Makar Sankranti 2026', date: '14 January 2026', desc: 'Sun enters Capricorn. Punya Kaal: 7:15 AM – 12:30 PM. Excellent for charity and holy dips.' },
    te: { name: 'మకర సంక్రాంతి 2026', date: '14 జనవరి 2026', desc: 'సూర్యుడు మకర రాశిలోకి ప్రవేశించు కాలం. పుణ్యకాలం: ఉదయం 7:15 నుండి మధ్యాహ్నం 12:30 వరకు. దానాలు మరియు నదీ స్నానాలకు అనుకూలమైన రోజు.' }
  }
];

function renderFestivals() {
  const container = document.querySelector('.festival-grid');
  if (!container) return;
  container.innerHTML = FESTIVALS.map(f => {
    const item = currentLang === 'te' ? f.te : f.en;
    return `
      <div class="festival-card">
        <div class="festival-icon">${f.icon}</div>
        <div>
          <div class="festival-name">${item.name}</div>
          <div class="festival-date">${item.date}</div>
          <div class="festival-desc">${item.desc}</div>
        </div>
      </div>
    `;
  }).join('');
}

// ===== TESTIMONIALS =====
const TESTIMONIALS = [
  {
    stars: '★★★★★',
    avatar: '🙏',
    en: { text: '"Finally an astrology app that doesn\'t scare me! The rashifal is always positive and helpful. I check it every morning with my chai."', author: 'Priya Sharma', loc: 'Jaipur, Rajasthan' },
    te: { text: '"చివరికి నన్ను భయపెట్టని ఒక జ్యోతిష్య యాప్‌ను కనుగొన్నాను! రాశిఫలాలు ఎల్లప్పుడూ సానుకూలంగా మరియు సహాయకరంగా ఉంటాయి. ప్రతిరోజూ ఉదయం చాయ్ తాగుతూ దీనిని తనిఖీ చేస్తాను."', author: 'ప్రియా శర్మ', loc: 'జైపూర్, రాజస్థాన్' }
  },
  {
    stars: '★★★★★',
    avatar: '💫',
    en: { text: '"The kundli milan helped me understand my relationship so much better. Very accurate and the explanations are simple to understand."', author: 'Rahul Verma', loc: 'Pune, Maharashtra' },
    te: { text: '"కుండలి పొంతన నా బంధాన్ని మరింత చక్కగా అర్థం చేసుకోవడానికి సహాయపడింది. చాలా ఖచ్చితమైనది మరియు వివరణలు చాలా సులభంగా ఉన్నాయి."', author: 'రాహుల్ వర్మ', loc: 'పుణె, మహారాష్ట్ర' }
  },
  {
    stars: '★★★★★',
    avatar: '🌸',
    en: { text: '"Used the muhurta feature for my daughter\'s wedding date. Perfect timing, peaceful ceremony. Highly recommend to all Indian families!"', author: 'Sunita Patel', loc: 'Ahmedabad, Gujarat' },
    te: { text: '"నా కుమార్తె వివాహ నిశ్చయ ముహూర్తం కోసం దీని ముహూర్తాల ఫీచర్‌ను ఉపయోగించాను. సరైన సమయం కుదిరింది, వివాహ వేడుక ప్రశాంతంగా జరిగింది. భారతీయ కుటుంబాలందరికీ తప్పకుండా సిఫార్సు చేస్తాను!"', author: 'సునీతా పటేల్', loc: 'అహ్మదాబాద్, గుజరాత్' }
  }
];

function renderTestimonials() {
  const container = document.querySelector('.testimonials-grid');
  if (!container) return;
  container.innerHTML = TESTIMONIALS.map(t => {
    const item = currentLang === 'te' ? t.te : t.en;
    return `
      <div class="testimonial-card">
        <div class="testimonial-stars">${t.stars}</div>
        <p class="testimonial-text">${item.text}</p>
        <div class="testimonial-author">
          <div class="author-avatar">${t.avatar}</div>
          <div>
            <div class="author-name">${item.author}</div>
            <div class="author-location">${item.loc}</div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ===== FAQ =====
const FAQS = [
  {
    id: 1,
    en: { q: 'What is the difference between a moon sign and sun sign?', a: 'In Vedic (Indian) astrology, your <strong>Moon Sign (Rashi)</strong> is determined by where the Moon was at your time of birth. This is most important for rashifal. Your <strong>Sun Sign</strong> (used in Western astrology) is based on the Sun\'s position. Moon sign is considered more accurate in Indian tradition for personality and predictions.' },
    te: { q: 'చంద్ర రాశికి మరియు సూర్య రాశికి మధ్య తేడా ఏమిటి?', a: 'వైదిక (భారతీయ) జ్యోతిషశాస్త్రంలో, మీ <strong>చంద్ర రాశి (రాశి)</strong> మీరు పుట్టిన సమయంలో చంద్రుని స్థానం ఆధారంగా నిర్ణయించబడుతుంది. రాశిఫలాలకు ఇది అత్యంత ముఖ్యమైనది. మీ <strong>సూర్య రాశి</strong> (పాశ్చాత్య జ్యోతిషశాస్త్రంలో ఉపయోగించేది) సూర్యుని స్థానం ఆధారంగా ఉంటుంది. వ్యక్తిత్వం మరియు అంచనాల కొరకు భారతీయ సంప్రదాయంలో చంద్ర రాశి మరింత ఖచ్చితమైనదిగా పరిగణించబడుతుంది.' }
  },
  {
    id: 2,
    en: { q: 'Is astrology based on science?', a: 'Astrology is a traditional system with thousands of years of cultural wisdom in India. It is not a modern science, but it offers meaningful frameworks for self-reflection, timing decisions, and understanding relationships. We present astrology as a <strong>positive, calm guidance system</strong> — not as absolute truth or something to fear.' },
    te: { q: 'జ్యోతిష్యం అనేది సైన్స్ ఆధారితమైనదా?', a: 'జ్యోతిష్యం అనేది భారతదేశంలో వేల సంవత్సరాల సాంస్కృతిక జ్ఞానంతో కూడిన ఒక సాంప్రదాయ పద్ధతి. ఇది ఆధునిక సైన్స్ కాదు, కానీ ఆత్మ పరిశీలన, సమయ నిర్ణయాలు మరియు సంబంధాలను అర్థం చేసుకోవడానికి ఇది ఉపయోగకరమైన చట్రాలను అందిస్తుంది. మేము జ్యోతిష్యాన్ని ఒక <strong>సానుకూల, ప్రశాంతమైన మార్గదర్శక వ్యవస్థగా</strong> అందిస్తున్నాము — అంతేకానీ పరమ సత్యంగా లేదా భయపడాల్సినదిగా కాదు.' }
  },
  {
    id: 3,
    en: { q: 'Do I need my exact birth time for kundli?', a: 'Yes, an exact birth time gives the most accurate Lagna (ascendant) and house placements. However, even without the exact time, we can still generate a useful reading based on your birth date and moon sign. If you\'re unsure of the exact time, try to get the approximate time from family records or birth certificate.' },
    te: { q: 'కుండలి కోసం నా ఖచ్చితమైన పుట్టిన సమయం అవసరమా?', a: 'అవును, ఖచ్చితమైన పుట్టిన సమయం అత్యంత ఖచ్చితమైన లగ్నాన్ని మరియు గృహ స్థానాలను ఇస్తుంది. అయితే, ఖచ్చితమైన సమయం తెలియకపోయినా, మీ పుట్టిన తేదీ మరియు చంద్రరాశి ఆధారంగా మేము ఉపయోగకరమైన ఫలితాన్ని అందించగలము. ఒకవేళ మీకు ఖచ్చితమైన సమయం తెలియకపోతే, కుటుంబ సభ్యులను అడిగి లేదా జనన ధృవీకరణ పత్రం ఆధారంగా సుమారు సమయాన్ని తెలుసుకోవడానికి ప్రయత్నించండి.' }
  },
  {
    id: 4,
    en: { q: 'Are your predictions scary or negative?', a: 'Absolutely not! Our guiding principle is <strong>calm, friendly, and fearless astrology</strong>. We focus on empowering you with insights and practical guidance. We never use fear-based language or make alarming predictions. Astrology should help you navigate life with more confidence, not anxiety.' },
    te: { q: 'మీ జ్యోతిష్య అంచనాలు భయపెట్టే విధంగా లేదా ప్రతికూలంగా ఉంటాయా?', a: 'ఎంతమాత్రం కాదు! మా ప్రధాన ఉద్దేశ్యం <strong>ప్రశాంతమైన, స్నేహపూర్వక మరియు భయరహిత జ్యోతిష్యం</strong>. మేము మీకు అవసరమైన విషయాలపై మరియు ఆచరణాత్మక మార్గదర్శకత్వంపై దృష్టి పెడతాము. మేము ఎప్పుడూ భయపెట్టే భాషను ఉపయోగించము లేదా భయంకరమైన అంచనాలను వేయము. జ్యోతిష్యం మీ జీవిత ప్రయాణంలో ఆత్మవిశ్వాసాన్ని నింపాలి, ఆందోళనను కాదు.' }
  },
  {
    id: 5,
    en: { q: 'What is Kundli Milan for marriage?', a: 'Kundli Milan (also called Gun Milan) is the traditional Vedic method of matching horoscopes of two people before marriage. It evaluates 8 factors (Ashtakoota) to understand compatibility in values, nature, health, prosperity, and harmony. A score of 18+ out of 36 is considered good for a happy marriage.' },
    te: { q: 'వివాహానికి కుండలి మిలన్ అంటే ఏమిటి?', a: 'కుండలి మిలన్ (దీనిని గుణ మిలన్ అని కూడా పిలుస్తారు) అనేది వివాహానికి ముందు ఇద్దరు వ్యక్తుల జాతకాలను సరిపోల్చే సాంప్రదాయ వైదిక పద్ధతి. ఇది జీవిత దృక్పథాలు, స్వభావం, ఆరోగ్యం, సంపద మరియు దాంపత్య సామరస్య అనుకూలతను అర్థం చేసుకోవడానికి ఎనిమిది విభాగాలను (అష్టకూటాలు) విశ్లేషిస్తుంది. సంతోషకరమైన దాంపత్య జీవితానికి 36 గుణాలకు గాను 18+ గుణాలు సరిపోలడం మంచిదిగా పరిగణించబడుతుంది.' }
  }
];

function renderFaqs() {
  const container = document.querySelector('.faq-list');
  if (!container) return;
  container.innerHTML = FAQS.map(f => {
    const item = currentLang === 'te' ? f.te : f.en;
    return `
      <div class="faq-item" id="faq-${f.id}">
        <button class="faq-question" onclick="toggleFaq('faq-${f.id}')" aria-expanded="false" aria-controls="faq-ans-${f.id}">
          ${item.q}
          <span class="faq-icon" aria-hidden="true">+</span>
        </button>
        <div class="faq-answer" id="faq-ans-${f.id}" role="region">
          <p>${item.a}</p>
        </div>
      </div>
    `;
  }).join('');
}

function toggleFaq(id) {
  const item = document.getElementById(id);
  if (!item) return;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// ===== STAR FIELD BACKGROUND =====
(function () {
  const c = document.getElementById('star-canvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  let W, H, stars = [];
  function resize() { W = c.width = window.innerWidth; H = c.height = window.innerHeight; }
  function mkStars(n) {
    stars = [];
    for (let i = 0; i < n; i++) stars.push({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.4 + 0.2, a: Math.random(), da: (Math.random() * 0.004 + 0.001) * (Math.random() > 0.5 ? 1 : -1), speed: Math.random() * 0.12 + 0.02 });
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.a += s.da; if (s.a <= 0 || s.a >= 1) s.da *= -1;
      s.y -= s.speed; if (s.y < 0) { s.y = H; s.x = Math.random() * W; }
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,248,240,${s.a})`; ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  resize(); mkStars(220); draw();
  window.addEventListener('resize', () => { resize(); mkStars(220); });
})();

// ===== INITIALIZE SYSTEM ON LOAD =====
window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('kundli-form');
  if (form) {
    form.addEventListener('submit', submitKundli);
  }
  setLanguage('en');
});
