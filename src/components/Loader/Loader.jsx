import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 bg-[#050816] z-[9999] flex flex-col justify-center items-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="mono text-blue-400 mt-6">
            Initializing Portfolio...
          </p>

          <div className="w-64 h-1 bg-gray-800 mt-8 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-blue-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;