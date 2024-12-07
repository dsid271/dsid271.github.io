import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

export function Hero() {
  return (
    <section className="bg-[#2a2a2a] text-[#00ff00] py-20 scanline">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="glitch-wrapper">
            <h1 className="glitch" data-text="ML ENGINEER_">
              ML ENGINEER_
            </h1>
          </div>
          <p className="text-xl text-[#00ffff] mb-8 pixel-text">
            &gt; FINAL YEAR B.TECH STUDENT<br/>
            &gt; SPECIALIZING IN AI/ML<br/>
            &gt; READY TO DEBUG THE MATRIX
          </p>
          <motion.div 
            className="flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <a href="#projects" className="pixel-button">
              VIEW_PROJECTS.exe
            </a>
            <a href="#contact" className="pixel-button bg-[#ff00ff]">
              CONTACT.bat
            </a>
          </motion.div>
        </motion.div>
        <motion.div 
          className="md:w-1/2 pixel-border p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="bg-black p-4 rounded">
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="text-[#00ff00]" />
              <span className="text-[#00ff00]">terminal.exe</span>
            </div>
            <div className="font-[Extrude]">
              <p className="text-[#00ff00]">&gt; Loading skills...</p>
              <p className="text-[#00ffff]">&gt; Python loaded ████████████ 100%</p>
              <p className="text-[#00ffff]">&gt; TensorFlow loaded ████████████ 100%</p>
              <p className="text-[#00ffff]">&gt; PyTorch loaded ████████████ 100%</p>
              <p className="text-[#ff00ff]">&gt; Neural networks initialized...</p>
              <p className="text-[#00ff00]">&gt; Ready for deployment_</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}