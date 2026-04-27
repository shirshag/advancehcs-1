import type { Metadata } from "next";
import FeeSection from "./FeeSection";

export const metadata: Metadata = {
  title: "Academics Department",
  description: "Medical education, nursing education, and healthcare training programs."
};

const hospitals = [
  {
    name: "Glocal Hospital - Krishnanagar",
    image: "/aca-mm1.jpg", // ✅ FIXED
  },
  {
    name: "Glocal Hospital - Medinipur (Paschim)",
    image: "/aca-mm.jpg",
  },
];






const courses = [
  {
    title: "2 Year MBA",
    desc: "Celebrating a rich tapestry of backgrounds, perspectives, and talents",
    img: "./interior-view-operating-room.jpg",
  },
  {
    title: "5 Year Integrated BBA-MBA",
    desc: "Striving for academic and research excellence in all endeavors.",
    img: "./interior-view-operating-room.jpg",
  },
  {
    title: "4 Year BBA (Hons)",
    desc: "Encouraging creativity, critical thinking, and a spirit of innovation.",
    img: "./interior-view-operating-room.jpg",
  },
  {
    title: "1 Year PG Diploma in Management",
    desc: "Our commitment to academic excellence is reflected in the diverse range",
    img: "./interior-view-operating-room.jpg",
  },


  {
    title: "1 Year PG Diploma in Nursing Administration",
    desc: "Focused on leadership and administration in healthcare environments.",
    img: "./interior-view-operating-room.jpg",
  },
  {
    title: "1 Year PG Diploma in Operation Management",
    desc: "Develop expertise in operations, logistics, and process optimization.",
    img: "./interior-view-operating-room.jpg",
  },
  {
    title: "1 Year PG Diploma in Quality Management",
    desc: "Learn quality standards, audits, and continuous improvement strategies.",
    img: "./interior-view-operating-room.jpg",
  },
];
const leftCourses = courses.filter((_, i) => i % 2 === 0);
const rightCourses = courses.filter((_, i) => i % 2 !== 0);

export default function AcademicsPage() {

  return (
    <>
      <section className="page-banner">
        <div className="container">
          <span>Home / Academics</span>
          <h1>Academics Department</h1>
        </div>
      </section>

      <div className="py-16 px-6">
        <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">

          {hospitals.map((hospital, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Image */}
              <div className="h-56 flex items-center justify-center bg-gray-50">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="h-60 object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                  {hospital.name}
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  Premium Healthcare Facility
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>








      <section className="bg-[#e8f3ff]">
        <div className="px-4">

          <div className="grid lg:grid-cols-2 gap-12 items-center ">

            {/* LEFT CONTENT */}
            <div>

              {/* MAIN TITLE */}
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-snug px-4">
                We are a Leadership B School
              </h2>

              {/* OUR FOCUS */}
              <div className="mb-8 px-4">
                <h4 className="text-lg font-semibold text-blue-500 mb-2">
                  Our Focus
                </h4>

                <p className="text-gray-600 text-lg leading-relaxed mb-3 px-4">
                  The emerging technologies are fast gaining prominence in healthcare,
                  environment and sustainable living that will be woven into higher
                  education for enhancing the employability of the youth.
                </p>

                <p className="text-gray-600 text-lg leading-relaxed px-4">
                  HCS PARAMEDICIAL & MANAGEMENT INSTITUTE is introducing cutting-edge
                  futuristic technologies such as Artificial Intelligence, Data Science,
                  Machine Learning, IoT, Blockchain, Robotics, Simulation, 3D Printing,
                  Nanotechnology, and Neuroscience.
                </p>
              </div>

              {/* WHY CHOOSE US */}
              <div>
                <h4 className="text-lg font-semibold text-blue-500 mb-4 px-4">
                  Why Choose Us
                </h4>

                <div className="space-y-6 px-4">

                  {/* PROFESSIONAL */}
                  <div className="flex gap-4 ">
                    <span className="text-blue-500 text-2xl font-bold">1</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">
                        Professional Development
                      </h5>
                      <p className="text-gray-600 text-lg mt-2 leading-relaxed">
                        Career growth with high-level managerial skills including
                        leadership, teamwork, and negotiation; entrepreneurial abilities
                        needed for any business; global credentials; and strong earning
                        potential.
                      </p>
                    </div>
                  </div>

                  {/* PERSONAL */}
                  <div className="flex gap-4">
                    <span className="text-blue-500 text-2xl font-bold">2</span>
                    <div>
                      <h5 className="font-semibold text-gray-900">
                        Personal Development
                      </h5>
                      <p className="text-gray-600 text-lg mt-2 leading-relaxed">
                        Personality development, confidence building, communication and
                        soft skills, domain knowledge, critical thinking, problem solving,
                        and real-world operational exposure to become a successful
                        management professional.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative lg:sticky lg:top-24 self-start">

              {/* IMAGE */}
              <img
                src="./interior-view-operating-room.jpg"
                alt="Leadership"
                className="w-full h-[850px] object-cover rounded-md"
              />

              {/* DARK GRADIENT (helps glass visibility) */}
              <div className="absolute inset-0 bg-black/30 rounded-md"></div>

              {/* CENTERED GLASS CARD */}
              <div className="absolute inset-0 flex items-center justify-center px-6">

                <div className="
      w-full max-w-md
      bg-white/10
      backdrop-blur-xl
      border border-white/20
      text-white
      p-6 rounded-xl
      shadow-2xl
    ">

                  {/* CONTACT */}
                  <div className="mb-4 text-center">
                    <h5 className="text-lg font-semibold text-red-300 uppercase mb-2 tracking-wide">
                      Contact Us
                    </h5>
                    <p className="font-medium">6294441651</p>
                    <p className="font-medium">7003872294</p>
                  </div>

                  {/* DIVIDER */}
                  <div className="border-t border-white/20 my-4"></div>

                  {/* NEP */}
                  <div className="text-center">
                    <h5 className="text-lg font-semibold text-red-300 uppercase mb-2 tracking-wide">
                      NEP 2020
                    </h5>
                    <p className="text-lg leading-relaxed text-white/90">
                      The National Education Policy (NEP)-2020 in India aims to integrate
                      technology into education to improve quality and ensure equal access
                      for all learners.
                    </p>
                  </div>

                </div>

              </div>

            </div>
          </div>


        </div>
      </section>








      <section className="relative py-20 bg-white overflow-hidden">

        {/* LEFT SHAPE */}
        <div className="absolute bottom-0 right-0 hidden xl:block z-0">
          <img
            src="/feature-shep-2-home-1.png"
            alt=""
            className="w-full opacity-90"
          />
        </div>

        {/* RIGHT DOT PATTERN */}
        <div className="absolute top-0 right-0 h-full w-[320px] hidden md:block z-0 
    bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
    [background-size:12px_12px] opacity-40">
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">

          <div className="border border-gray-300 p-10 md:p-8 rounded-md bg-white">
            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* LEFT */}
              <div className="text-center">
                <img
                  src="/Iftekeruddin.jpg"
                  alt="Md. Iftekeruddin"
                  className="mx-auto w-full max-w-md h-[320px] md:h-[380px] object-contain rounded-md"
                />

                <h3 className="text-2xl font-bold text-gray-800 mt-4">
                  Md. Iftekeruddin
                </h3>

                <p className="text-blue-500 font-medium mb-4">
                  Director
                </p>
              </div>

              {/* RIGHT */}
              <div className="relative">

                <p className="text-gray-600 leading-relaxed mb-4">
                  Md. Iftekeruddin is a renowned entrepreneur and expert in healthcare management and radiodiagnostics, with over 18 years of experience across industry, research, business, and academia. He has handled several high-level professional assignments in both public and corporate healthcare organizations.
                </p>

                <p className="text-gray-600 leading-relaxed mb-4">
                  He currently operates 7 multispecialty hospitals across West Bengal, with a dedicated team of 500+ professionals, and actively contributes to the planning and operation of pharmacy chains and polyclinics across the state. His leadership in surgical care, management skills, and strategic communication has created a strong impact in the sector.
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Beyond business, he is deeply engaged in social service, delivering quality healthcare to the underprivileged at an affordable cost.
                </p>

                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="text-gray-700 italic leading-relaxed">
                    “The world of business is full of threats and challenges. Don’t get scared of any adverse situation. Brave people change the world. The secret of freedom is courage. HPMI is a place to build that courage – to face new challenges, follow your own passion, nurture it, and stay hungry for life. I’m sure, you’ll find your life here.”
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>





      <section className=" bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800">
              Our Courses
            </h2>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-gray-300 transform -translate-x-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

              {/* LEFT SIDE */}
              <div className="space-y-20 text-right  mt-24">
                {rightCourses.map((course, index) => (

                  <div key={index} className="relative pr-10">

                    <h5 className="text-lg font-semibold inline-block">
                      {course.title}
                      <span className="absolute top-[10px] right-[-30px] w-12 h-[1px] bg-gray-300"></span>
                    </h5>

                    <p className="text-gray-500 mt-2 mb-4 max-w-md ml-auto">
                      {course.desc}
                    </p>


                  </div>
                ))}
              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-20 text-left mt-4">
                {leftCourses.map((course, index) => (

                  <div key={index} className="relative pl-10">

                    <h5 className="text-lg font-semibold inline-block">
                      {course.title}
                      <span className="absolute top-[10px] left-[-30px] w-12 h-[1px] bg-gray-300"></span>
                    </h5>

                    <p className="text-gray-500 mt-2 mb-4 max-w-md">
                      {course.desc}
                    </p>

                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>



      <section className="bg-[#0F286B] py-14">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
              Specialization Areas
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-center text-white">

            {/* Item 1 */}
            <div className="py-6 border-r border-white/20">
              <h3 className="text-xl md:text-2xl font-semibold">
                Finance
              </h3>
            </div>

            {/* Item 2 */}
            <div className="py-6 border-r border-white/20">
              <h3 className="text-xl md:text-2xl font-semibold">
                Analytics
              </h3>
            </div>

            {/* Item 3 */}
            <div className="py-6 border-r border-white/20">
              <h3 className="text-xl md:text-2xl font-semibold">
                Marketing
              </h3>
            </div>

            {/* Item 4 */}
            <div className="py-6 border-r border-white/20">
              <h3 className="text-xl md:text-2xl font-semibold">
                Healthcare & Hospital
              </h3>
            </div>

            {/* Item 5 */}
            <div className="py-6 border-r border-white/20">
              <h3 className="text-xl md:text-2xl font-semibold">
                Public Health
              </h3>
            </div>

            {/* Item 6 */}
            <div className="py-6">
              <h3 className="text-xl md:text-2xl font-semibold">
                Retail & Logistics
              </h3>
            </div>

          </div>

        </div>
      </section>






      <FeeSection />





    </>
  );
}