import { useState } from 'react';
import { motion} from 'framer-motion';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';
import axios from 'axios';
import { ToastContainer, Toast as ToastType } from './Toast';
import { Loader } from './Loader';

interface SignUpProps {
  onSignIn: () => void;
  onClose: () => void;
}

export const SignUp = ({ onSignIn, onClose }: SignUpProps) => {
  const [signupData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = (message: string, type: ToastType['type']) => {
    const newToast: ToastType = {
      id: Date.now(),
      message,
      type
    };
    setToasts(prev => [...prev, newToast]);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(async () => {
      try {
        const response = await axios.post("http://localhost:3000/auth/signup", signupData);
        console.log("This is the response", response);
        addToast('Account created successfully!', 'success');
        setTimeout(() => {
          onSignIn();
        }, 2000);
      } catch (error:any) {
        addToast(
          error.response?.data?.message || 'Failed to create account. Please try again.',
          'error'
        );
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };
  

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl overflow-hidden border border-white/20"
      >
        <div className="p-8 sm:p-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Create Account</h2>
            <button
              onClick={onClose}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                <input
                  type="text"
                  value={signupData.fullname}
                  onChange={(e) => setFormData({ ...signupData, fullname: e.target.value })}
                  className="pl-10 w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:ring-2 focus:ring-white/20 focus:border-white/20 text-white placeholder-white/30"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                <input
                  type="email"
                  value={signupData.email}
                  onChange={(e) => setFormData({ ...signupData, email: e.target.value })}
                  className="pl-10 w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:ring-2 focus:ring-white/20 focus:border-white/20 text-white placeholder-white/30"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
                <input
                  type="password"
                  value={signupData.password}
                  onChange={(e) => setFormData({ ...signupData, password: e.target.value })}
                  className="pl-10 w-full px-4 py-3 bg-white/10 border border-white/10 rounded-xl focus:ring-2 focus:ring-white/20 focus:border-white/20 text-white placeholder-white/30"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-500/80 to-indigo-600/80 text-white py-3 px-4 rounded-xl hover:from-blue-600/80 hover:to-indigo-700/80 flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              {isLoading ? (
              <div className="flex items-center gap-3">
                <Loader size="md" color="white" />
                <span>Signing up...</span>
              </div>
            ) : (
              <>
                <span>Create Account</span>
                <ArrowRight size={20} />
              </>
            )}
            </motion.button>
          </form>
          
          <div className="mt-8 text-center">
          <p className="text-sm text-white/70">
            Already have an account?{' '}
            <button
              onClick={onSignIn}
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Sign In
            </button>
          </p>
        </div>

        </div>
      </motion.div>
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </>
  );
};
