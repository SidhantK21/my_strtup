import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, AlertTriangle } from 'lucide-react';
import { useEffect } from 'react';

export type ToastType = 'success' | 'error';

export interface Toast {
  id: number;
  type: ToastType;
  message: string;
}

interface ToastProps {
  toasts: Toast[];
  removeToast: (id: number) => void;
}

export const ToastContainer = ({ toasts, removeToast }: ToastProps) => {
  // Auto-remove toasts after 4 seconds
  useEffect(() => {
    const timers = toasts.map(toast => {
      return setTimeout(() => {
        removeToast(toast.id);
      }, 4000);
    });

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [toasts, removeToast]);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center gap-4">
      <AnimatePresence>
        {toasts.map(toast => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ 
              duration: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            className={`rounded-lg shadow-xl backdrop-blur-md p-4 flex items-center justify-between w-80 relative
              ${toast.type === 'success' 
                ? 'bg-gradient-to-r from-emerald-500/90 to-green-600/90 border border-emerald-400/30' 
                : 'bg-gradient-to-r from-rose-500/90 to-red-600/90 border border-rose-400/30'}`}
          >
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {toast.type === 'success' ? (
                  <CheckCircle className="text-white" size={20} />
                ) : (
                  <AlertTriangle className="text-white" size={20} />
                )}
              </motion.div>
              <p className="text-white font-medium">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
            
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-full w-full overflow-hidden">
              <motion.div 
                className={`h-full rounded-full ${toast.type === 'success' ? 'bg-emerald-300' : 'bg-rose-300'}`}
                initial={{ x: '0%' }}
                animate={{ x: '-100%' }}
                transition={{ duration: 4, ease: 'linear' }}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};