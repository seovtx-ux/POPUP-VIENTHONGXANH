/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Check, Phone, Zap, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim().length >= 9) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsSubmitted(false);
        setPhoneNumber("");
      }, 3000); // Close after 3 seconds of success message
    }
  };

  if (!isVisible) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <button 
          onClick={() => setIsVisible(true)}
          className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
        >
          Hiển thị lại Popup Khuyến Mãi
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative font-sans overflow-hidden bg-slate-50">
      {/* Background simulating the user's website */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 select-none">
         <div className="w-full h-20 border-b border-gray-200 bg-white flex items-center px-10 shadow-sm">
           <div className="w-40 h-10 bg-gray-200 rounded-lg"></div>
           <div className="ml-auto w-96 h-10 bg-gray-100 rounded-full border border-gray-200"></div>
         </div>
         <div className="max-w-7xl mx-auto px-10 mt-12 flex gap-10">
            <div className="w-72 h-[600px] bg-white border border-gray-100 rounded-2xl shadow-sm"></div>
            <div className="flex-1">
              <div className="w-full h-[400px] bg-white border border-gray-100 rounded-2xl mb-8 shadow-sm"></div>
              <div className="grid grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                   <div key={i} className="h-56 bg-white border border-gray-100 rounded-2xl shadow-sm"></div>
                ))}
              </div>
            </div>
         </div>
      </div>

      {/* Dark Overlay with backdrop blur */}
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-40 flex items-center justify-center p-6 sm:p-8 animate-in fade-in duration-300">
        
        {/* Modal Wrapper for absolute positioning outside */}
        <div className="relative w-full max-w-[95%] mx-auto sm:max-w-[1000px] animate-in zoom-in-[0.98] duration-500 ease-out">
          
          {/* Close Icon (Outside on PC, Inside on Mobile) */}
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute z-[60] top-3 right-3 md:-top-5 md:-right-5 lg:-top-6 lg:-right-6 flex items-center p-2 sm:p-2.5 bg-red-100 text-red-600 hover:bg-red-200 hover:text-red-700 rounded-full transition-all duration-300 group focus:outline-none shadow-sm md:shadow-lg border-2 border-blue-600 overflow-hidden"
            aria-label="Đóng popup"
          >
            <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 group-hover:mr-1 group-hover:ml-1 transition-all duration-500 ease-in-out text-[10px] sm:text-xs font-bold text-black">
              KHÔNG, TÔI MUỐN MUA GIÁ GỐC
            </span>
            <X size={18} className="group-hover:rotate-90 transition-transform duration-300 sm:w-5 sm:h-5 flex-shrink-0" />
          </button>

          {/* Modal Container - Premium Look */}
          <div className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-[0_0_50px_rgba(59,130,246,0.4)] border-4 border-blue-400 overflow-hidden flex flex-col md:flex-row max-h-[85vh] overflow-y-auto md:max-h-[90vh]">
            
            {/* Left Side: Product Image & Branding */}
          <div className="w-full md:w-[45%] bg-slate-900 relative flex flex-col items-center justify-center overflow-hidden h-[160px] sm:h-[300px] md:h-auto md:min-h-[500px] group/img">
             {/* Tech glowing background effect */}
             <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-[conic-gradient(at_center_center,rgba(56,189,248,0.1)_0deg,transparent_120deg,transparent_240deg,rgba(56,189,248,0.1)_360deg)] animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>
             </div>
             
             {/* Product Image */}
             <img 
               src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop" 
               alt="Router and Tech Equipment" 
               className="relative z-10 w-full h-[120%] object-cover object-center transition-transform duration-[2000ms] ease-out md:group-hover/img:scale-125 cursor-pointer shadow-[2px_0_10px_rgba(0,0,0,0.5)]"
             />

             {/* Overlay Gradient on Image */}
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10"></div>


          </div>

          {/* Right Side: Content & Form Area */}
          <div className="w-full md:w-[55%] p-4 sm:p-8 md:p-10 lg:p-12 flex flex-col bg-white relative">
             
             {isSubmitted ? (
               <div className="flex-1 flex flex-col items-center justify-center text-center animate-in zoom-in-95 duration-300 py-6 sm:py-10">
                 <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                   <div className="w-10 h-10 sm:w-14 sm:h-14 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                     <Check size={24} className="text-white sm:w-8 sm:h-8" strokeWidth={3} />
                   </div>
                 </div>
                 <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">Đăng ký thành công!</h3>
                 <p className="text-sm sm:text-lg text-gray-600">Chuyên viên tư vấn của chúng tôi sẽ liên hệ với bạn trong ít phút để xác nhận ưu đãi.</p>
               </div>
             ) : (
               <div className="flex flex-col h-full animate-in fade-in duration-500 delay-100 fill-mode-both">
                 {/* Flash Sale Header */}
                 <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 mb-3 sm:mb-6">
                   <span className="flex items-center gap-1 sm:gap-1.5 bg-blue-100/50 text-blue-700 px-2 sm:px-3 py-0.5 sm:py-1.5 rounded-full text-[0.65rem] sm:text-sm font-bold uppercase tracking-wide border border-blue-200">
                     <Check size={12} strokeWidth={3} className="sm:w-4 sm:h-4 w-3 h-3 text-blue-600" />
                     Đầy đủ CO, CQ
                   </span>
                   <div className="flex items-center gap-1 sm:gap-1.5 bg-green-100/50 text-green-700 px-2 sm:px-3 py-0.5 sm:py-1.5 rounded-full text-[0.65rem] sm:text-sm font-bold uppercase tracking-wide border border-green-200">
                     <Zap size={12} className="fill-green-600 sm:w-4 sm:h-4 w-3 h-3" />
                     <span className="text-green-700">
                       Giao siêu tốc - Sẵn hàng
                     </span>
                   </div>
                 </div>

                 {/* Headline */}
                 <h2 className="text-[1.35rem] sm:text-3xl lg:text-[2.25rem] leading-[1.15] font-black text-slate-900 tracking-tight mb-3 sm:mb-4">
                   Nâng Tầm Kết Nối <br className="hidden sm:block"/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 inline-block mt-0.5 sm:mt-0">
                     Hạ Tầng Mạng Đỉnh Cao
                   </span>
                 </h2>

                 {/* Value Propositions / Specs */}
                 <ul className="space-y-1.5 sm:space-y-3.5 mb-4 sm:mb-8">
                   {[
                     "Tốc độ siêu cao, đường truyền ổn định 24/7",
                     "Triển khai lắp đặt tận nơi, nhanh chóng",
                     "Bảo hành chính hãng, hỗ trợ kỹ thuật trọn đời"
                   ].map((text, i) => (
                     <li key={i} className="flex items-start sm:items-center group">
                       <div className="bg-blue-50 p-1 sm:p-1.5 rounded-full mr-2 sm:mr-3 group-hover:bg-blue-100 transition-colors mt-0.5 sm:mt-0 flex-shrink-0">
                         <Check size={12} strokeWidth={3} className="text-blue-600 sm:w-4 sm:h-4 w-3 h-3" />
                       </div>
                       <span className="text-gray-700 font-medium text-[0.85rem] sm:text-[1.05rem] leading-tight sm:leading-snug">{text}</span>
                     </li>
                   ))}
                 </ul>

                 {/* Lead Gen Form */}
                 <div className="mt-auto bg-gradient-to-br from-orange-50 to-orange-100/50 p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border border-orange-200 shadow-[0_0_15px_rgba(251,146,60,0.15)] relative overflow-hidden">
                    {/* Subtle highlight effect on the container */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 via-red-400 to-orange-300 opacity-50"></div>
                    
                    <p className="text-[0.65rem] sm:text-sm font-bold text-red-600 mb-2.5 sm:mb-4 uppercase tracking-wider flex items-center gap-1.5">
                      <Zap size={14} className="fill-red-600" /> Nhập SĐT để giữ giá sốc
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 sm:gap-4 relative z-10">
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none text-orange-500 group-focus-within:text-red-500 transition-colors">
                          <Phone size={16} className="sm:w-5 sm:h-5 w-4 h-4 animate-phone-shake text-red-500 fill-red-100" />
                        </div>
                        <input 
                          type="tel" 
                          required
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="block w-full pl-9 sm:pl-11 pr-3 sm:pr-4 py-2.5 sm:py-4 md:py-3.5 text-[0.9rem] sm:text-lg bg-white border-2 border-orange-200 rounded-lg sm:rounded-xl focus:ring-4 focus:ring-red-100 focus:border-red-500 transition-all outline-none text-gray-900 placeholder:text-gray-400 font-semibold shadow-sm hover:border-orange-300"
                          placeholder="Nhập số điện thoại của bạn..."
                        />
                      </div>
                      <button 
                        type="submit"
                        className="group relative w-full bg-red-600 hover:bg-red-700 text-white text-[0.9rem] sm:text-lg font-bold py-2.5 sm:py-4 rounded-lg sm:rounded-xl shadow-[0_8px_20px_rgba(220,38,38,0.25)] hover:shadow-[0_12px_25px_rgba(220,38,38,0.35)] transition-all ease-out duration-300 transform hover:-translate-y-0.5 focus:ring-4 focus:ring-red-200 focus:outline-none flex items-center justify-center gap-2 overflow-hidden"
                      >
                        {/* Button shine effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        <span>NHẬN TƯ VẤN & BÁO GIÁ</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform sm:w-5 sm:h-5 w-4 h-4" />
                      </button>
                    </form>
                    <p className="text-center text-[0.6rem] sm:text-xs text-gray-400 mt-2.5 sm:mt-4 font-medium flex justify-center items-center gap-1">
                      <LockIcon /> Thông tin của bạn được cam kết bảo mật tuyệt đối.
                    </p>
                 </div>
               </div>
             )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

// Simple Lock Icon for privacy text
function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );
}


