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
  experience: number;
  gender: "Male" | "Female";
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
    "Established in 2010, Glocal Healthcare has quickly become synonymous with affordable and accessible medical care, deeply rooted in a mission to bridge healthcare gaps in underserved communities. Driven by a commitment to innovative and ethical healthcare, Glocal operates a growing network of multi-specialty hospitals and digital dispensaries, particularly across rural and semi-urban West Bengal. These state-of-the-art facilities combine cutting-edge technology with compassionate, high-quality service, ensuring that advanced medical care reaches those who need it most."
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
    doctors: 24,
    established: 2016,
    specialities: ["general-medicine", "orthopaedics", "cardiology", "dermatology", "emergency-trauma", "radiology-imaging"],
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
    location: "Berhampore, Murshidabad",
    email: "aahilhospitex@gmail.com",
    phone: "+91-9775978603/06",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80",
    beds: 55,
    doctors: 35,
    established: 2018,
    specialities: ["general-medicine", "surgery", "cardiology", "neurology", "paediatrics", "emergency-trauma"],
    address: "Berhampore, Murshidabad, West Bengal",
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

export const doctors: Doctor[] = [
  {
    slug: "dr-dipu-sarkar",
    name: "Dr. Dipu Sarkar",
    designation: "Consultant Obstetrics and Gynaecology",
    speciality: "gynaecology-obstetrics",
    hospitalSlugs: ["glocal-krishnanagar", "octave-healthcare-kalyani"],
    experience: 14,
    gender: "Male",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80",
    languages: ["Bengali", "Hindi", "English"],
    qualifications: ["MBBS", "MS Obstetrics & Gynaecology"],
    specialisationAreas: ["High-risk pregnancy", "Antenatal care", "Women's wellness"],
    conditions: ["Pregnancy care", "PCOS", "Menstrual disorders", "Fibroids"]
  },
  {
    slug: "dr-sanjoy-ghosh",
    name: "Dr. Sanjoy Ghosh",
    designation: "Consultant, ENT & Head Neck Surgery",
    speciality: "ent-head-neck",
    hospitalSlugs: ["glocal-krishnanagar"],
    experience: 16,
    gender: "Male",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=800&q=80",
    languages: ["Bengali", "Hindi", "English"],
    qualifications: ["MBBS", "MS ENT"],
    specialisationAreas: ["Sinus care", "Head-neck surgery", "Hearing disorders"],
    conditions: ["Sinusitis", "Tonsillitis", "Ear infections", "Voice disorders"]
  },
  {
    slug: "dr-lovely-agarwal",
    name: "Dr. Lovely Agarwal",
    designation: "Consultant Obstetrics, Gynaecology & Advanced Laparoscopic Surgeon",
    speciality: "gynaecology-obstetrics",
    hospitalSlugs: ["glocal-sonamukhi", "octave-healthcare-kalyani"],
    experience: 12,
    gender: "Female",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    languages: ["Bengali", "Hindi", "English"],
    qualifications: ["MBBS", "DGO", "Fellowship in Laparoscopy"],
    specialisationAreas: ["Advanced laparoscopy", "Maternity care", "Infertility support"],
    conditions: ["Ovarian cysts", "Fibroids", "Endometriosis", "Infertility"]
  },
  {
    slug: "dr-anupam-roy",
    name: "Dr. Anupam Roy",
    designation: "Consultant Gynaecologist, Obstetrician, Laparoscopic Surgeon & Infertility Specialist",
    speciality: "laparoscopic-surgery",
    hospitalSlugs: ["glocal-krishnanagar", "glocal-sonamukhi"],
    experience: 18,
    gender: "Male",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800&q=80",
    languages: ["Bengali", "Hindi", "English"],
    qualifications: ["MBBS", "MS", "FMAS"],
    specialisationAreas: ["Laparoscopic surgery", "Infertility", "Complex gynaecology"],
    conditions: ["Infertility", "Fibroids", "Endometriosis", "Ovarian cysts"]
  },
  {
    slug: "dr-faiyaz-khan",
    name: "Dr. Faiyaz Khan",
    designation: "Consultant Orthopedic & Spine Surgeon",
    speciality: "orthopaedics",
    hospitalSlugs: ["glocal-paschim-medinipur", "octave-healthcare-kalyani"],
    experience: 13,
    gender: "Male",
    image: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?auto=format&fit=crop&w=800&q=80",
    languages: ["Bengali", "Hindi", "English"],
    qualifications: ["MBBS", "MS Orthopaedics"],
    specialisationAreas: ["Spine surgery", "Trauma", "Joint care"],
    conditions: ["Fractures", "Back pain", "Arthritis", "Disc disease"]
  },
  {
    slug: "dr-rima-banerjee",
    name: "Dr. Rima Banerjee",
    designation: "Consultant Cardiologist",
    speciality: "cardiology",
    hospitalSlugs: ["aahil-hospitex-berhampore", "glocal-paschim-medinipur"],
    experience: 11,
    gender: "Female",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=800&q=80",
    languages: ["Bengali", "Hindi", "English"],
    qualifications: ["MBBS", "MD Medicine", "DM Cardiology"],
    specialisationAreas: ["Cardiac risk", "Hypertension", "Heart failure"],
    conditions: ["Chest pain", "Arrhythmia", "Hypertension", "Heart failure"]
  },
  {
    slug: "dr-abhishek-mondal",
    name: "Dr. Abhishek Mondal",
    designation: "Consultant General Medicine",
    speciality: "general-medicine",
    hospitalSlugs: ["glocal-sonamukhi", "aahil-hospitex-berhampore"],
    experience: 10,
    gender: "Male",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80",
    languages: ["Bengali", "Hindi", "English"],
    qualifications: ["MBBS", "MD Medicine"],
    specialisationAreas: ["Diabetes", "Infections", "Critical medicine"],
    conditions: ["Fever", "Diabetes", "Hypertension", "Respiratory illness"]
  },
  {
    slug: "dr-nandita-sen",
    name: "Dr. Nandita Sen",
    designation: "Consultant Paediatrician",
    speciality: "paediatrics",
    hospitalSlugs: ["glocal-sonamukhi", "aahil-hospitex-berhampore"],
    experience: 9,
    gender: "Female",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80",
    languages: ["Bengali", "Hindi", "English"],
    qualifications: ["MBBS", "MD Paediatrics"],
    specialisationAreas: ["Child fever", "Vaccination", "Newborn care"],
    conditions: ["Asthma", "Fever", "Growth concerns", "Newborn jaundice"]
  },
  {
    slug: "dr-arindam-dutta",
    name: "Dr. Arindam Dutta",
    designation: "Consultant Neurologist",
    speciality: "neurology",
    hospitalSlugs: ["aahil-hospitex-berhampore"],
    experience: 15,
    gender: "Male",
    image: "https://images.unsplash.com/photo-1629308335485-3d668f98ddbb?auto=format&fit=crop&w=800&q=80",
    languages: ["Bengali", "Hindi", "English"],
    qualifications: ["MBBS", "MD Medicine", "DM Neurology"],
    specialisationAreas: ["Stroke", "Epilepsy", "Neuropathy"],
    conditions: ["Stroke", "Migraine", "Seizures", "Vertigo"]
  },
  {
    slug: "dr-priyanka-pal",
    name: "Dr. Priyanka Pal",
    designation: "Consultant Dermatologist",
    speciality: "dermatology",
    hospitalSlugs: ["glocal-paschim-medinipur", "octave-healthcare-kalyani"],
    experience: 8,
    gender: "Female",
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=800&q=80",
    languages: ["Bengali", "Hindi", "English"],
    qualifications: ["MBBS", "MD Dermatology"],
    specialisationAreas: ["Skin allergy", "Hair disorders", "Acne care"],
    conditions: ["Acne", "Eczema", "Fungal infections", "Hair loss"]
  },
  {
    slug: "dr-soumen-paul",
    name: "Dr. Soumen Paul",
    designation: "Emergency Medicine Consultant",
    speciality: "emergency-trauma",
    hospitalSlugs: ["glocal-krishnanagar", "glocal-sonamukhi", "glocal-paschim-medinipur"],
    experience: 12,
    gender: "Male",
    image: "https://images.unsplash.com/photo-1584467735871-8d8f25fa47b4?auto=format&fit=crop&w=800&q=80",
    languages: ["Bengali", "Hindi", "English"],
    qualifications: ["MBBS", "MEM"],
    specialisationAreas: ["Trauma response", "Critical stabilization", "Emergency triage"],
    conditions: ["Accidents", "Breathing distress", "Poisoning", "Acute pain"]
  },
  {
    slug: "dr-moumita-roy",
    name: "Dr. Moumita Roy",
    designation: "Consultant Radiologist",
    speciality: "radiology-imaging",
    hospitalSlugs: ["glocal-krishnanagar", "octave-healthcare-kalyani"],
    experience: 7,
    gender: "Female",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    languages: ["Bengali", "Hindi", "English"],
    qualifications: ["MBBS", "MD Radiodiagnosis"],
    specialisationAreas: ["Ultrasound", "X-ray reporting", "Emergency imaging"],
    conditions: ["Abdominal pain", "Pregnancy scans", "Trauma imaging", "Chest imaging"]
  },
  {
    slug: "dr-sayan-chatterjee",
    name: "Dr. Sayan Chatterjee",
    designation: "Consultant General & Laparoscopic Surgeon",
    speciality: "surgery",
    hospitalSlugs: ["glocal-sonamukhi", "aahil-hospitex-berhampore"],
    experience: 10,
    gender: "Male",
    image: "https://images.unsplash.com/photo-1637059824899-a441006a6875?auto=format&fit=crop&w=800&q=80",
    languages: ["Bengali", "Hindi", "English"],
    qualifications: ["MBBS", "MS General Surgery"],
    specialisationAreas: ["General surgery", "Laparoscopy", "Emergency surgery"],
    conditions: ["Appendicitis", "Hernia", "Gall bladder stones", "Trauma wounds"]
  }
];

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
