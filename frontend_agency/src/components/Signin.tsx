import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Mail, Lock, ArrowRight } from 'lucide-react';
import axios from "axios";
import { ToastContainer,Toast,ToastType } from './Toast';
import { Loader } from './Loader';

interface SignInProps {
  onSignUp: () => void;
  onClose: () => void;
}

export const SignIn = ({ onSignUp, onClose }: SignInProps) => {
  const [signinData, setSigninData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (type: ToastType, message: string) => {
    const newToast = {
      id: Date.now(),
      type,
      message
    };
    setToasts(prev => [...prev, newToast]);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
      const response = await axios.post("http://localhost:3000/auth/signin", signinData, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      showToast('success', 'Sign in successful!');
      console.log("Signin successful:", response.data);
      
    } catch (error) {
      showToast('error', 'Sign in failed. Please try again.');
      console.error("Signin error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="backdrop-blur-xl bg-white/10 rounded-3xl shadow-2xl overflow-hidden border border-white/20 relative"
    >
      <ToastContainer toasts={toasts} removeToast={removeToast} />

      <div className="p-8 sm:p-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
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
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
              <input
                type="email"
                value={signinData.email}
                onChange={(e) => setSigninData({ ...signinData, email: e.target.value })}
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
                value={signinData.password}
                onChange={(e) => setSigninData({ ...signinData, password: e.target.value })}
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
            className="w-full bg-gradient-to-r from-blue-500/80 to-indigo-600/80 text-white py-3 px-4 rounded-xl hover:from-blue-600/80 hover:to-indigo-700/80 flex items-center justify-center gap-2 transition-all shadow-lg"
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center gap-3">
                <Loader size="md" color="white" />
                <span>Signing in...</span>
              </div>
            ) : (
              <>
                <span>Sign In</span>
                <ArrowRight size={20} />
              </>
            )}
          </motion.button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-sm text-white/70">
            Don't have an account?{' '}
            <button
              onClick={onSignUp}
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </motion.div>
  );
};