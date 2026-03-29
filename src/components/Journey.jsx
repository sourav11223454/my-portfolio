import { motion } from "framer-motion";

function Journey() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <section id="journey" className="w-full py-28 bg-white text-black ">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-4xl font-extrabold text-center mb-12 tracking-tight">
            About Me
          </h1>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* BIG CARD - Now Vertically Centered */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="h-full flex flex-col justify-center rounded-3xl px-5 py-8 md:px-10 md:py-12 
                bg-black text-white shadow-2xl border border-gray-800"
                style={{paddingLeft:'25px',paddingRight:'25px',}}
              >
                <h2 className="text-4xl font-bold mb-6 mt-4">Hey, I'm Sourav</h2>
                <p className="text-gray-300 text-lg leading-loose">
                  I build <span className="text-gray-400 font-semibold">modern web applications</span> that people actually enjoy using.
                  I specialize in <span className="text-blue-400 font-semibold">MERN stack development</span> and love turning ideas into real products.
                </p>
                <p className="text-gray-400 mt-6 text-base italic border-l-2 border-gray-700 pl-4">
                  "Write clean code, ship fast, and improve continuously."
                </p>
              </motion.div>
            </div>

            {/* RIGHT SIDE - Status Cards */}
            <div className="flex flex-col gap-6">
              {[
                { title: "📍 Based in", val: "India", sub: "Calicut" },
                { title: "🟢 Status", val: "Open for work", sub: "Available for freelance", color: "text-green-600" },
                { title: "⚡ Currently", val: "Building full-stack apps", sub: "Learning advanced React" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex-1 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-white hover:shadow-xl transition-all duration-300"
                  style={{padding:'15px 25px'}}
                >
                  <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500">{item.title}</h4>
                  <p className={`text-xl font-bold mt-1 ${item.color || "text-gray-900"}`}>{item.val}</p>
                  <p className="text-gray-500 text-sm mt-1">{item.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* TECHNOLOGIES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-12 bg-black text-white border border-gray-800 shadow-2xl"
            style={{marginTop:'10px'}}
          >
            <h3 className="text-center mt-2">Main Tech Stack</h3>
            <div className="scroll-container" style={{padding:'20px'}}>
              <div className="scroll-track">
                <div className="scroll-text">
                  MERN STACK • HTML • CSS • JAVASCRIPT • REACT • NODE.JS • EXPRESS.JS • MONGODB •
                </div>
                <div className="scroll-text">
                  MERN STACK • HTML • CSS • JAVASCRIPT • REACT • NODE.JS • EXPRESS.JS • MONGODB •
                </div>
              </div>
            </div>
          </motion.div>


        </div>
      </section>
    </div>
  );
}

export default Journey;