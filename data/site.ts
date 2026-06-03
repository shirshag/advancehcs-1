export type Hospital = {
  slug: string;
  name: string;
  shortName: string;
  type: string;
  city: string;
  district: string;
  location: string;
  email: string;
  phone: string;
  image: string;
  beds: number;
  doctors: number;
  established: number;
  specialities: string[];
  address: string;
  coordinates: { x: number; y: number };
};

export type Speciality = {
  slug: string;
  name: string;
  icon: string;
  description: string;
  conditions: string[];
};

export type Doctor = {
  slug: string;
  name: string;
  designation: string;
  speciality: string;
  hospitalSlugs: string[];
  experience?: number;
  gender?: "Male" | "Female";
  availability?: string;
  image: string;
  languages: string[];
  qualifications: string[];
  specialisationAreas: string[];
  conditions: string[];
};

export const company = {
  name: "Advance HCS Pvt. Ltd.",
  brand: "Glocal Hospital",
  tagline: "Transforming Healthcare, Touching Lives",
  subTagline:
    "Comprehensive, Compassionate, and Cutting-Edge Medical Care - Because Your Health Matters",
  phone: "6294441651",
  phoneDisplay: "6294441651",
  whatsapp: "https://wa.me/916294441651",
  email: "care@advancehcs.in",
  copyright: "© 2025 Advance HCS Pvt Ltd",
  about:
    "Advance HCS Pvt. Ltd. is a leading healthcare organization committed to operating and managing multiple hospitals across West Bengal. At Glocal (AHCS), our mission is to provide high-quality, accessible, and affordable healthcare services with compassion, dignity, and respect."
};

export const stats = [
  { label: "Hospitals and Healthcare Centres", value: 5, suffix: "" },
  { label: "Doctors and Care Givers", value: 180, suffix: "+" },
  { label: "Surgeries Performed", value: 18710, suffix: "+" },
  { label: "Intensive Care Unit Cases", value: 5950, suffix: "+" }
];

export const specialities: Speciality[] = [
  {
    slug: "general-medicine",
    name: "General Medicine",
    icon: "stethoscope",
    description: "Comprehensive diagnosis and treatment for adult medical conditions.",
    conditions: ["Fever", "Diabetes", "Hypertension", "Infections", "Preventive care"]
  },
  {
    slug: "surgery",
    name: "Surgery",
    icon: "scalpel",
    description: "Planned and emergency surgical care with modern operating support.",
    conditions: ["Appendicitis", "Hernia", "Gall bladder disease", "Trauma wounds"]
  },
  {
    slug: "gynaecology-obstetrics",
    name: "Gynaecology & Obstetrics",
    icon: "heart",
    description: "Women's health, maternity, infertility, and advanced laparoscopic care.",
    conditions: ["High-risk pregnancy", "Fibroids", "PCOS", "Infertility", "Menstrual disorders"]
  },
  {
    slug: "orthopaedics",
    name: "Orthopaedics",
    icon: "bone",
    description: "Bone, joint, spine, and trauma care for all age groups.",
    conditions: ["Fractures", "Back pain", "Arthritis", "Sports injuries", "Spine disorders"]
  },
  {
    slug: "ent-head-neck",
    name: "ENT & Head Neck",
    icon: "ear",
    description: "Specialized care for ear, nose, throat, and head-neck conditions.",
    conditions: ["Sinusitis", "Tonsillitis", "Hearing issues", "Voice disorders"]
  },
  {
    slug: "cardiology",
    name: "Cardiology",
    icon: "activity",
    description: "Heart health, risk assessment, emergency cardiac stabilization, and follow-up.",
    conditions: ["Chest pain", "Arrhythmia", "Heart failure", "Hypertension"]
  },
  {
    slug: "paediatrics",
    name: "Paediatrics",
    icon: "baby",
    description: "Child health, vaccinations, neonatal care, and growth monitoring.",
    conditions: ["Child fever", "Asthma", "Nutrition", "Vaccination", "Newborn care"]
  },
  {
    slug: "neurology",
    name: "Neurology",
    icon: "brain",
    description: "Assessment and care for brain, nerve, seizure, and stroke-related conditions.",
    conditions: ["Stroke", "Migraine", "Epilepsy", "Neuropathy", "Vertigo"]
  },
  {
    slug: "dermatology",
    name: "Dermatology",
    icon: "sparkles",
    description: "Skin, hair, nail, allergy, and infection care.",
    conditions: ["Acne", "Eczema", "Fungal infections", "Hair loss", "Psoriasis"]
  },
  {
    slug: "emergency-trauma",
    name: "Emergency & Trauma",
    icon: "ambulance",
    description: "Round-the-clock stabilization for critical illness, accidents, and trauma.",
    conditions: ["Accidents", "Poisoning", "Breathing distress", "Acute pain"]
  },
  {
    slug: "radiology-imaging",
    name: "Radiology & Imaging",
    icon: "scan",
    description: "Diagnostic imaging support for fast clinical decisions.",
    conditions: ["X-ray", "Ultrasound", "CT referral", "Image-guided diagnosis"]
  },
  {
    slug: "laparoscopic-surgery",
    name: "Laparoscopic Surgery",
    icon: "scope",
    description: "Minimally invasive surgical care with shorter recovery pathways.",
    conditions: ["Gall bladder stones", "Hernia", "Ovarian cysts", "Appendix"]
  },
  {
    slug: "nephrology",
    name: "Nephrology",
    icon: "activity",
    description: "Specialist care for kidney disease, dialysis planning, and renal health.",
    conditions: ["Kidney disease", "Renal failure", "Dialysis care", "Hypertension"]
  },
  {
    slug: "maxillofacial-dental",
    name: "Maxillofacial & Dental",
    icon: "heart",
    description: "Dental and oral-maxillofacial assessment, treatment, and surgical care.",
    conditions: ["Dental pain", "Jaw disorders", "Oral surgery", "Facial trauma"]
  },
  {
    slug: "urology",
    name: "Urology",
    icon: "activity",
    description: "Diagnosis and treatment for urinary tract and male reproductive conditions.",
    conditions: ["Kidney stones", "Urinary problems", "Prostate care", "Urological surgery"]
  },
  {
    slug: "chest-medicine",
    name: "Chest Medicine",
    icon: "stethoscope",
    description: "Respiratory medicine for lung disease, breathing issues, and chest conditions.",
    conditions: ["Asthma", "COPD", "Breathing difficulty", "Chest infections"]
  },
  {
    slug: "oncology",
    name: "Oncology",
    icon: "heart",
    description: "Specialist evaluation and coordinated care for cancer-related conditions.",
    conditions: ["Cancer evaluation", "Treatment planning", "Follow-up care", "Symptom support"]
  },
  {
    slug: "pain-management",
    name: "Pain Management",
    icon: "activity",
    description: "Assessment and treatment planning for acute and chronic pain.",
    conditions: ["Chronic pain", "Back pain", "Joint pain", "Post-operative pain"]
  },
  {
    slug: "neuro-surgery",
    name: "Neuro-Surgery",
    icon: "brain",
    description: "Surgical care for conditions affecting the brain, spine, and nervous system.",
    conditions: ["Brain surgery", "Spine surgery", "Nerve conditions", "Neurosurgical trauma"]
  },
  {
    slug: "gynecologic-oncology",
    name: "Gynecologic Oncology",
    icon: "heart",
    description: "Specialist cancer care for the female reproductive system.",
    conditions: ["Cervical cancer", "Ovarian cancer", "Uterine cancer", "Cancer follow-up"]
  },
  {
    slug: "plastic-reconstructive-surgery",
    name: "Plastic & Reconstructive Surgery",
    icon: "scalpel",
    description: "Reconstructive and restorative surgical care following injury or illness.",
    conditions: ["Reconstructive surgery", "Wound care", "Burn care", "Trauma repair"]
  },
  {
    slug: "pulmonology",
    name: "Pulmonology",
    icon: "stethoscope",
    description: "Specialist respiratory care for lung and breathing conditions.",
    conditions: ["Asthma", "COPD", "Breathing difficulty", "Chest infections"]
  },
  {
    slug: "physiotherapy-rehabilitation",
    name: "Physiotherapy & Rehabilitation",
    icon: "activity",
    description: "Movement, strength, and recovery support through physiotherapy and rehabilitation.",
    conditions: ["Mobility recovery", "Post-operative rehabilitation", "Pain management", "Strength training"]
  },
  {
    slug: "dietetics",
    name: "Dietetics",
    icon: "heart",
    description: "Nutrition assessment and diet planning to support treatment and wellbeing.",
    conditions: ["Diet planning", "Clinical nutrition", "Weight management", "Nutrition counselling"]
  },
  {
    slug: "ophthalmology",
    name: "Ophthalmology",
    icon: "scan",
    description: "Medical and surgical care for eye health and vision conditions.",
    conditions: ["Vision problems", "Cataract", "Eye infection", "Eye surgery"]
  }
];

export const hospitals: Hospital[] = [
  {
    slug: "glocal-krishnanagar",
    name: "Glocal Hospital - Krishnanagar, Nadia",
    shortName: "Glocal Krishnanagar",
    type: "O&M by Advance HCS Pvt Ltd",
    city: "Krishnanagar",
    district: "Nadia",
    location: "Krishnanagar, Nadia",
    email: "glocalknj.hcs@mail.com",
    phone: "+91-9775978601/02",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
    beds: 65,
    doctors: 42,
    established: 2012,
    specialities: ["general-medicine", "gynaecology-obstetrics", "ent-head-neck", "orthopaedics", "emergency-trauma", "radiology-imaging"],
    address: "Krishnanagar, Nadia, West Bengal",
    coordinates: { x: 55, y: 27 }
  },
  {
    slug: "glocal-sonamukhi",
    name: "Glocal Hospital - Sonamukhi, Bankura",
    shortName: "Glocal Sonamukhi",
    type: "O&M by Advance HCS Pvt Ltd",
    city: "Sonamukhi",
    district: "Bankura",
    location: "Sonamukhi, Bankura",
    email: "glocalhospitalpm1@gmail.com",
    phone: "+91-9830202964",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    beds: 45,
    doctors: 28,
    established: 2015,
    specialities: ["general-medicine", "surgery", "gynaecology-obstetrics", "paediatrics", "emergency-trauma", "radiology-imaging"],
    address: "Sonamukhi, Bankura, West Bengal",
    coordinates: { x: 35, y: 55 }
  },
  {
    slug: "glocal-paschim-medinipur",
    name: "Glocal Hospital - Paschim Medinipur",
    shortName: "Glocal Paschim Medinipur",
    type: "O&M by Advance HCS Pvt Ltd",
    city: "Paschim Medinipur",
    district: "Paschim Medinipur",
    location: "Paschim Medinipur",
    email: "sonamukhiglocal.in@gmail.com",
    phone: "+91-9474734758",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1200&q=80",
    beds: 38,
    doctors: 35,
    established: 2016,
    specialities: ["general-medicine", "surgery", "orthopaedics", "gynaecology-obstetrics", "neurology", "nephrology", "maxillofacial-dental", "urology", "ent-head-neck", "chest-medicine", "oncology", "pain-management", "cardiology", "paediatrics"],
    address: "Paschim Medinipur, West Bengal",
    coordinates: { x: 31, y: 71 }
  },
  {
    slug: "aahil-hospitex-berhampore",
    name: "AAHIL HOSPITEX - Berhampore, Murshidabad",
    shortName: "AAHIL HOSPITEX",
    type: "A Unit of Advance HCS Pvt Ltd",
    city: "Berhampore",
    district: "Murshidabad",
    location: "Karbala Road, Cossimbazar, Berhampore",
    email: "aahilhospitex@gmail.com",
    phone: "+91-9775978603/06",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80",
    beds: 55,
    doctors: 59,
    established: 2018,
    specialities: ["orthopaedics", "surgery", "gynaecology-obstetrics", "neuro-surgery", "gynecologic-oncology", "radiology-imaging", "plastic-reconstructive-surgery", "pulmonology", "urology", "nephrology", "ent-head-neck", "general-medicine", "physiotherapy-rehabilitation", "dietetics", "ophthalmology"],
    address: "Karbala Road, Near Chalpatti, P.O-Cossimbazar, P.S-Berhampore, Murshidabad-742102",
    coordinates: { x: 49, y: 18 }
  },
  {
    slug: "octave-healthcare-kalyani",
    name: "Octave Healthcare - Mohanpur, Barajaguli, Kalyani",
    shortName: "Octave Healthcare Kalyani",
    type: "O&M by Advance HCS Pvt Ltd",
    city: "Kalyani",
    district: "Nadia (Kalyani)",
    location: "Mohanpur, Barajaguli, Kalyani",
    email: "healthcareoctave@gmail.com",
    phone: "+91-9775978615/16",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&w=1200&q=80",
    beds: 50,
    doctors: 31,
    established: 2021,
    specialities: ["general-medicine", "gynaecology-obstetrics", "orthopaedics", "dermatology", "laparoscopic-surgery", "radiology-imaging"],
    address: "Mohanpur, Barajaguli, Kalyani, West Bengal",
    coordinates: { x: 52, y: 36 }
  }
];

type DoctorSeed = {
  slug: string;
  name: string;
  designation: string;
  speciality: string;
  qualification?: string;
  availability?: string;
  hospitalSlug?: string;
};

const medinipurDoctorSeeds: DoctorSeed[] = [
  { slug: "dr-sudip-roy", name: "Dr. Sudip Roy", designation: "Medicine Unit", speciality: "general-medicine", qualification: "MBBS, MD Medicine", hospitalSlug: "glocal-paschim-medinipur" },
  { slug: "dr-manju-nath-poral", name: "Dr. Manju Nath Poral", designation: "Medicine Unit", speciality: "general-medicine", qualification: "MBBS, MD, DM-Nephrology" },
  { slug: "dr-pankaj-kumar-sinha", name: "Dr. Pankaj Kumar Sinha", designation: "Medicine Unit", speciality: "general-medicine" },
  { slug: "dr-swapan-dab", name: "Dr. Swapan Dab", designation: "Medicine Unit", speciality: "general-medicine", qualification: "General Medicine" },
  { slug: "dr-rajarshi-dey", name: "Dr. Rajarshi Dey", designation: "General Surgery Unit", speciality: "surgery", qualification: "MBBS, MS (Gen. Surgeon)" },
  { slug: "dr-biswajit-panda", name: "Dr. Biswajit Panda", designation: "General Surgery Unit", speciality: "surgery", qualification: "MBBS, MS (Gen. Surgeon)" },
  { slug: "dr-abdul-latif", name: "Dr. Abdul Latif", designation: "Orthopedic Unit", speciality: "orthopaedics", qualification: "MBBS, MS, MCh-Ortho" },
  { slug: "dr-pranabendu-mondal", name: "Dr. Pranabendu Mondal", designation: "Orthopedic Unit", speciality: "orthopaedics", qualification: "MBBS, MS-Ortho" },
  { slug: "dr-biplab-barman", name: "Dr. Biplab Barman", designation: "Orthopedic Unit", speciality: "orthopaedics", qualification: "MBBS, MS-Ortho" },
  { slug: "dr-chayan-kr-pal", name: "Dr. Chayan Kr Pal", designation: "Orthopedic Unit", speciality: "orthopaedics", qualification: "MBBS, MS-Ortho" },
  { slug: "dr-jieshnu-mukhopadhyay", name: "Dr. Jieshnu Mukhopadhyay", designation: "Orthopedic Unit", speciality: "orthopaedics", qualification: "MBBS, D-Ortho" },
  { slug: "dr-bivash-mondal", name: "Dr. Bivash Mondal", designation: "Obstetrics & Gynaecology Unit", speciality: "gynaecology-obstetrics", qualification: "MBBS, MS (Obst & Gynae)" },
  { slug: "dr-alolika-deb", name: "Dr. Alolika Deb", designation: "Obstetrics & Gynaecology Unit", speciality: "gynaecology-obstetrics", qualification: "MBBS, MS (Obst & Gynae)" },
  { slug: "dr-gairik-bera", name: "Dr. Gairik Bera", designation: "Obstetrics & Gynaecology Unit", speciality: "gynaecology-obstetrics", qualification: "MBBS, MS (Obst & Gynae)" },
  { slug: "dr-md-sarwar-neurology", name: "Dr. MD Sarwar", designation: "Neurologist Unit", speciality: "neurology", qualification: "MBBS, MD, DM (Neuro Med)" },
  { slug: "dr-sumit-arora-neurology", name: "Dr. Sumit Arora", designation: "Neurologist Unit", speciality: "neurology", qualification: "MBBS, MCh (Neuro Surg)" },
  { slug: "dr-amlan-kanti-biswas", name: "Dr. Amlan Kanti Biswas", designation: "Nephrologist Unit", speciality: "nephrology", qualification: "MBBS, MD, DM-Nephrology" },
  { slug: "dr-uttayan-chakraborty", name: "Dr. Uttayan Chakraborty", designation: "Nephrologist Unit", speciality: "nephrology", qualification: "MBBS, MD, DM-Nephrology" },
  { slug: "dr-md-sarwar-dental", name: "Dr. MD Sarwar", designation: "Maxillofacial & Dental", speciality: "maxillofacial-dental", qualification: "BDS, MDS (Oral & Maxillofacial Surg.)" },
  { slug: "dr-sumit-arora-dental", name: "Dr. Sumit Arora", designation: "Maxillofacial & Dental", speciality: "maxillofacial-dental", qualification: "BDS (Oral & Maxillofacial Surg.)" },
  { slug: "dr-purnimesh-mandal", name: "Dr. Purnimesh Mandal", designation: "Maxillofacial & Dental", speciality: "maxillofacial-dental", qualification: "BDS (Oral & Maxillofacial Surg.)" },
  { slug: "dr-md-dawood-khan", name: "Dr. MD Dawood Khan", designation: "Urologist Unit", speciality: "urology", qualification: "MBBS, MS (Gen. Surgeon), MCh Urology" },
  { slug: "dr-sidhharta-dutta", name: "Dr. Sidhharta Dutta", designation: "Urologist Unit", speciality: "urology", qualification: "MBBS, MS (Gen. Surgeon), MCh Urology" },
  { slug: "dr-maharaj-mondal", name: "Dr. Maharaj Mondal", designation: "Urologist Unit", speciality: "urology" },
  { slug: "dr-swagato-roy", name: "Dr. Swagato Roy", designation: "ENT Unit", speciality: "ent-head-neck", qualification: "MBBS, MS (ENT)" },
  { slug: "dr-anamika", name: "Dr. Anamika", designation: "ENT Unit", speciality: "ent-head-neck", qualification: "MBBS, MS (ENT)" },
  { slug: "dr-shomik-banerjee", name: "Dr. Shomik Banerjee", designation: "Chest Medicine", speciality: "chest-medicine" },
  { slug: "dr-subham-chanda", name: "Dr. Subham Chanda", designation: "Chest Medicine", speciality: "chest-medicine" },
  { slug: "dr-saikat-sheet", name: "Dr. Saikat Sheet", designation: "Oncology Unit", speciality: "oncology" },
  { slug: "dr-deepak-dash", name: "Dr. Deepak Dash", designation: "Pain Management", speciality: "pain-management", qualification: "Pain Management" },
  { slug: "dr-anup-banerjee", name: "Dr. Anup Banerjee", designation: "Cardiologist", speciality: "cardiology", qualification: "MD, DM" },
  { slug: "dr-baivab-mishra", name: "Dr. Baivab Mishra", designation: "Cardiologist", speciality: "cardiology", qualification: "MD, DM" },
  { slug: "dr-ayan-ghosh", name: "Dr. Ayan Ghosh", designation: "Pediatrician", speciality: "paediatrics" },
  { slug: "dr-himadri-sekhar-kisku", name: "Dr. Himadri Sekhar Kisku", designation: "Pediatrician", speciality: "paediatrics" },
  { slug: "dr-parvej-biswas", name: "Dr. Parvej Biswas", designation: "Pediatrician", speciality: "paediatrics" }
];

const aahilDoctorSeeds: DoctorSeed[] = [
  { slug: "dr-debangan-dhar", name: "Dr. Debangan Dhar", designation: "Orthopedic & Spine Surgery", speciality: "orthopaedics", qualification: "MBBS, MS" },
  { slug: "dr-rayan-dalal", name: "Dr. Rayan Dalal", designation: "Orthopedic & Spine Surgery", speciality: "orthopaedics", qualification: "MBBS, MS" },
  { slug: "dr-pritam-pal", name: "Dr. Pritam Pal", designation: "Orthopedic & Spine Surgery", speciality: "orthopaedics", qualification: "MBBS, MS" },
  { slug: "dr-abdul-jabbar-shaikh", name: "Dr. Abdul Jabbar Shaikh", designation: "Orthopedic & Spine Surgery", speciality: "orthopaedics", qualification: "MBBS, MS" },
  { slug: "dr-faiyaz-khan", name: "Dr. Faiyaz Khan", designation: "Orthopedic & Spine Surgery", speciality: "orthopaedics", qualification: "MBBS, MS" },
  { slug: "dr-a-k-garg", name: "Dr. A K Garg", designation: "Orthopedic & Spine Surgery", speciality: "orthopaedics", qualification: "MBBS, MS" },
  { slug: "dr-surjanshu-roy", name: "Dr. Surjanshu Roy", designation: "Orthopedic & Spine Surgery", speciality: "orthopaedics", qualification: "MBBS, MS" },
  { slug: "dr-sanjoy-kumar", name: "Dr. Sanjoy Kumar", designation: "Orthopedic & Spine Surgery", speciality: "orthopaedics", qualification: "MBBS, MS" },
  { slug: "dr-mifijul-rahaman", name: "Dr. Mifijul Rahaman", designation: "Orthopedic & Spine Surgery", speciality: "orthopaedics", qualification: "MBBS, MS" },
  { slug: "dr-gaganprit-sing", name: "Dr. Gaganprit Sing (Ped)", designation: "Orthopedic & Spine Surgery", speciality: "orthopaedics", qualification: "MBBS, MS" },
  { slug: "dr-rajendra-sahoo", name: "Dr. Rajendra Sahoo", designation: "General Surgery", speciality: "surgery", qualification: "MBBS, MS" },
  { slug: "dr-tanmay-tikadar", name: "Dr. Tanmay Tikadar", designation: "General Surgery", speciality: "surgery", qualification: "MBBS, MS" },
  { slug: "dr-arnab-naha", name: "Dr. Arnab Naha", designation: "General Surgery", speciality: "surgery", qualification: "MBBS, MS" },
  { slug: "dr-sayan-majumder", name: "Dr. Sayan Majumder", designation: "General Surgery", speciality: "surgery", qualification: "MBBS, MS" },
  { slug: "dr-r-k-san", name: "Dr. R K San", designation: "General Surgery", speciality: "surgery", qualification: "MBBS, MS" },
  { slug: "dr-c-p-sharma", name: "Dr. C P Sharma", designation: "General Surgery", speciality: "surgery", qualification: "MBBS, MS" },
  { slug: "dr-abdul-rouf", name: "Dr. Abdul Rouf", designation: "General Surgery", speciality: "surgery", qualification: "MBBS, MS" },
  { slug: "dr-mohit-kumar-mandal", name: "Dr. Mohit Kumar Mandal", designation: "General Surgery", speciality: "surgery", qualification: "MBBS, MS" },
  { slug: "dr-g-d-pan", name: "Dr. G D Pan (Ped)", designation: "General Surgery", speciality: "surgery", qualification: "MBBS, MS" },
  { slug: "dr-kishor-kr-roy", name: "Dr. Kishor Kr Roy", designation: "General Surgery", speciality: "surgery", qualification: "MBBS, MS, FAMS, Fellowship in Surgical Oncology" },
  { slug: "dr-pranati-kashyapi", name: "Dr. Pranati Kashyapi", designation: "Obstetrics & Gynecology", speciality: "gynaecology-obstetrics", qualification: "MBBS, MS" },
  { slug: "dr-ankita-ghosh", name: "Dr. Ankita Ghosh", designation: "Obstetrics & Gynecology", speciality: "gynaecology-obstetrics", qualification: "MBBS, MS" },
  { slug: "dr-tarana-haque", name: "Dr. Tarana Haque", designation: "Obstetrics & Gynecology", speciality: "gynaecology-obstetrics", qualification: "MBBS, MS" },
  { slug: "dr-asif-kamal", name: "Dr. Asif Kamal", designation: "Obstetrics & Gynecology", speciality: "gynaecology-obstetrics", qualification: "MBBS, MS" },
  { slug: "dr-enamul-hasan", name: "Dr. Enamul Hasan", designation: "Obstetrics & Gynecology", speciality: "gynaecology-obstetrics", qualification: "MBBS, MS" },
  { slug: "dr-rahul-dey", name: "Dr. Rahul Dey", designation: "Neuro-Surgery", speciality: "neuro-surgery", qualification: "MBBS, MS, MCh" },
  { slug: "dr-gulam-salwal", name: "Dr. Gulam Salwal", designation: "Neuro-Surgery", speciality: "neuro-surgery", qualification: "MBBS, MS, MCh" },
  { slug: "dr-monoranjan-jena", name: "Dr. Monoranjan Jena", designation: "Neuro-Surgery", speciality: "neuro-surgery", qualification: "MBBS, MS, MCh" },
  { slug: "dr-azizul-purakait", name: "Dr. Azizul Purakait", designation: "Gynecologic Oncology", speciality: "gynecologic-oncology", qualification: "MBBS, MD (Clinical Oncology)" },
  { slug: "dr-rejakul-islam", name: "Dr. Rejakul Islam", designation: "Gynecologic Oncology", speciality: "gynecologic-oncology", qualification: "MBBS, FNB" },
  { slug: "dr-trijoy-saha", name: "Dr. Trijoy Saha", designation: "Radiology", speciality: "radiology-imaging", qualification: "MBBS, MD Radiologist" },
  { slug: "dr-p-banerjee", name: "Dr. P Banerjee", designation: "Radiology", speciality: "radiology-imaging", qualification: "MBBS, Sonologist" },
  { slug: "dr-sushovan-saha", name: "Dr. Sushovan Saha", designation: "Plastic & Reconstructive Surgeon", speciality: "plastic-reconstructive-surgery", qualification: "MBBS, MS, MCh" },
  { slug: "dr-rubel-ganguli", name: "Dr. Rubel Ganguli", designation: "Plastic & Reconstructive Surgeon", speciality: "plastic-reconstructive-surgery", qualification: "MBBS, MS, MCh" },
  { slug: "dr-gouranga-dutta", name: "Dr. Gouranga Dutta", designation: "Plastic & Reconstructive Surgeon", speciality: "plastic-reconstructive-surgery", qualification: "MBBS, MS, MCh" },
  { slug: "dr-anirban-ray", name: "Dr. Anirban Ray", designation: "Pulmonology", speciality: "pulmonology", qualification: "MBBS, DTCD, DNB" },
  { slug: "dr-dawood-khan", name: "Dr. Dawood Khan", designation: "Urology", speciality: "urology", qualification: "MBBS, MS, MCh" },
  { slug: "dr-dipankar-bera", name: "Dr. Dipankar Bera", designation: "Urology", speciality: "urology", qualification: "MBBS, MS, MCh" },
  { slug: "dr-k-k-das", name: "Dr. K K Das", designation: "Urology", speciality: "urology", qualification: "DNB Urologist" },
  { slug: "dr-sourav-sadhukhan", name: "Dr. Sourav Sadhukhan", designation: "Nephrologist", speciality: "nephrology", qualification: "MBBS, MD, DM" },
  { slug: "dr-tapabrata-das", name: "Dr. Tapabrata Das", designation: "Nephrologist", speciality: "nephrology", qualification: "MBBS, DM", availability: "1st Sunday every month" },
  { slug: "dr-atin-maity", name: "Dr. Atin Maity", designation: "Nephrologist", speciality: "nephrology", qualification: "MBBS, DM", availability: "Last Friday every month" },
  { slug: "dr-somnath-das-gupta", name: "Dr. Somnath Das Gupta", designation: "Nephrologist", speciality: "nephrology", qualification: "MBBS, DM", availability: "3rd Sunday every month" },
  { slug: "dr-sabyasachi-ghosh", name: "Dr. Sabyasachi Ghosh", designation: "ENT Surgery", speciality: "ent-head-neck", qualification: "MBBS, MS" },
  { slug: "dr-ankita-mukherjee", name: "Dr. Ankita Mukherjee", designation: "ENT Surgery", speciality: "ent-head-neck", qualification: "MBBS, MS" },
  { slug: "dr-debadeep-day", name: "Dr. Debadeep Day", designation: "ENT Surgery", speciality: "ent-head-neck", qualification: "MBBS, MS" },
  { slug: "dr-raju-nmondal", name: "Dr. Raju Nmondal", designation: "ENT Surgery", speciality: "ent-head-neck", qualification: "MBBS, MS" },
  { slug: "dr-subum-kasua-bani", name: "Dr. Subum Kasua Bani", designation: "ENT Surgery", speciality: "ent-head-neck", qualification: "MBBS, MS" },
  { slug: "dr-abir-chowdhury", name: "Dr. Abir Chowdhury", designation: "ENT Surgery", speciality: "ent-head-neck", qualification: "MBBS, MS" },
  { slug: "dr-m-a-khandakar", name: "Dr. M A Khandakar", designation: "Critical Care & General Medicine", speciality: "general-medicine", qualification: "MBBS, MD" },
  { slug: "dr-sujon-das", name: "Dr. Sujon Das", designation: "Critical Care & General Medicine", speciality: "general-medicine", qualification: "MBBS, MD" },
  { slug: "dr-dibyendu-laha", name: "Dr. Dibyendu Laha", designation: "Critical Care & General Medicine", speciality: "general-medicine", qualification: "MBBS, Cardiology (RCP)" },
  { slug: "dr-ilias-malla", name: "Dr. Ilias Malla", designation: "Critical Care & General Medicine", speciality: "general-medicine", qualification: "MBBS, MD, CPCDM, MCC" },
  { slug: "s-arifin", name: "S. Arifin", designation: "Science in Physiotherapy with Rehabilitation", speciality: "physiotherapy-rehabilitation", qualification: "DPT" },
  { slug: "sahid-almer", name: "Sahid Almer", designation: "Science in Physiotherapy with Rehabilitation", speciality: "physiotherapy-rehabilitation", qualification: "DPT" },
  { slug: "subhashree-sarkar", name: "Subhashree Sarkar", designation: "Dietician", speciality: "dietetics" },
  { slug: "dr-h-k-biswas", name: "Dr. H. K Biswas", designation: "Eye", speciality: "ophthalmology", qualification: "MBBS, MS" },
  { slug: "dr-ramanuj-singh", name: "Dr. Ramanuj Singh", designation: "Eye", speciality: "ophthalmology", qualification: "MBBS, MS" },
  { slug: "dr-animesh-ghosh", name: "Dr. Animesh Ghosh", designation: "Eye", speciality: "ophthalmology", qualification: "MBBS, MS" }
].map((doctor) => ({ ...doctor, hospitalSlug: "aahil-hospitex-berhampore" }));

export const doctors: Doctor[] = [...medinipurDoctorSeeds, ...aahilDoctorSeeds].map((doctor) => {
  const { qualification, hospitalSlug, ...doctorDetails } = doctor;

  return {
    ...doctorDetails,
    hospitalSlugs: [hospitalSlug ?? "glocal-paschim-medinipur"],
    image: "/doctor-placeholder.svg",
    languages: [],
    qualifications: qualification ? [qualification] : [],
    specialisationAreas: [doctor.designation],
    conditions: []
  };
});

export const insurancePartners = [
  "Star Health",
  "New India Assurance",
  "United India",
  "CGHS",
  "ECHS",
  "Medi Assist",
  "Raksha TPA",
  "MDIndia",
  "Paramount TPA",
  "Health India",
  "Vidal Health",
  "FHPL"
];

export const articles = [
  "Managing diabetes with regular rural clinic follow-ups",
  "Warning signs of chest pain that need urgent attention",
  "Pregnancy care checklist for the first trimester",
  "How to prevent monsoon infections in children",
  "Why early imaging matters after a fall or accident",
  "Skin allergy care during humid weather"
];

export function getHospital(slug: string) {
  return hospitals.find((hospital) => hospital.slug === slug);
}

export function getSpeciality(slug: string) {
  return specialities.find((speciality) => speciality.slug === slug);
}

export function getDoctor(slug: string) {
  return doctors.find((doctor) => doctor.slug === slug);
}

export function doctorsForHospital(hospitalSlug: string) {
  return doctors.filter((doctor) => doctor.hospitalSlugs.includes(hospitalSlug));
}

export function doctorsForSpeciality(specialitySlug: string) {
  return doctors.filter((doctor) => doctor.speciality === specialitySlug);
}

export function specialitiesForHospital(hospitalSlug: string) {
  const hospital = getHospital(hospitalSlug);
  return specialities.filter((speciality) => hospital?.specialities.includes(speciality.slug));
}
