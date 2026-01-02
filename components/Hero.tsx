import React, { useState } from 'react';
import { ArrowRight, PlayCircle, Activity, AlertTriangle, CheckCircle, Server, Database, Cpu, X, Terminal, GitCommit, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const [activeAlert, setActiveAlert] = useState<boolean>(false);
  const [remediated, setRemediated] = useState<boolean>(false);
  const [remediating, setRemediating] = useState<boolean>(false);

  const handleRemediate = () => {
    setRemediating(true);
    setTimeout(() => {
      setRemediating(false);
      setRemediated(true);
    }, 1500);
  };

  const closeAlert = () => {
    setActiveAlert(false);
    // Reset remediation state after a delay when closed so it can be demoed again
    setTimeout(() => {
      setRemediated(false);
    }, 500);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-light-bg dark:bg-dark-900 transition-colors duration-300">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary-300/20 dark:bg-primary-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              New: Auto-Remediation 2.0 Live
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight text-light-text dark:text-white animate-slide-up">
              Prevent System Failures <br />
              <span className="gradient-text">Before They Happen</span>
            </h1>
            
            <p className="text-lg md:text-xl text-light-textSecondary dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              InfraSense predicts incidents 3-12 hours before they occur, analyzes root causes automatically, and executes remediation—so your users never experience downtime.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link to="/demo" className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-600 text-white rounded-lg font-semibold text-lg transition-all shadow-orange-glow flex items-center justify-center gap-2">
                Request Demo <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#how-it-works" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-primary/5 border border-primary/30 text-light-text dark:text-white rounded-lg font-semibold text-lg transition-all flex items-center justify-center gap-2">
                <PlayCircle className="w-5 h-5 text-primary" /> See How It Works
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-light-textSecondary dark:text-gray-500 font-medium">
               <span>Trusted by enterprises managing 10M+ requests/day</span>
            </div>
          </div>

          {/* Visual Content: Simplified Animated Mock Dashboard */}
          <div className="lg:w-1/2 w-full relative z-10">
             {/* Main Card */}
             <div className="w-full bg-light-surface dark:bg-dark-900 border border-light-border dark:border-dark-700 rounded-xl shadow-2xl overflow-hidden relative group h-[420px] flex flex-col">
                
                {/* Header / Toolbar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-light-border dark:border-dark-700 bg-light-bg/50 dark:bg-dark-800/50 flex-shrink-0">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-danger/80"></div>
                      <div className="w-3 h-3 rounded-full bg-accent/80"></div>
                      <div className="w-3 h-3 rounded-full bg-secondary/80"></div>
                   </div>
                   <div className="flex items-center gap-2 text-xs font-mono text-light-textSecondary dark:text-gray-500">
                      <Activity className="w-3 h-3 text-primary animate-pulse" />
                      <span>Live Monitoring</span>
                   </div>
                </div>

                {/* Main Content Area */}
                <div className="p-6 space-y-6 relative flex-1">
                   
                   {/* Top Metrics Row */}
                   <div className="grid grid-cols-3 gap-4">
                      {/* Metric 1 */}
                      <div className="p-3 bg-light-bg dark:bg-dark-800 rounded-lg border border-light-border dark:border-dark-700">
                         <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                            <Cpu className="w-3 h-3" /> CPU Load
                         </div>
                         <div className="text-xl font-mono font-bold text-light-text dark:text-white flex items-end gap-2">
                            42% <span className="text-xs text-secondary mb-1">▼</span>
                         </div>
                         {/* Mini Bar Graph */}
                         <div className="flex gap-0.5 mt-2 h-4 items-end">
                            {[40, 60, 45, 30, 42].map((h, i) => (
                               <div key={i} style={{height: `${h}%`}} className="w-full bg-primary/20 rounded-sm"></div>
                            ))}
                         </div>
                      </div>

                       {/* Metric 2 - Danger State */}
                      <div className="p-3 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20 relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-full blur-xl -translate-y-8 translate-x-8"></div>
                         <div className="flex items-center gap-2 text-xs text-primary mb-1">
                            <AlertTriangle className="w-3 h-3" /> Risk Score
                         </div>
                         <div className="text-xl font-mono font-bold text-primary flex items-end gap-2">
                            High <span className="text-xs text-primary mb-1 animate-pulse">●</span>
                         </div>
                         <div className="w-full bg-dark-700 h-1 mt-3 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[85%] animate-[pulse_2s_infinite]"></div>
                         </div>
                      </div>

                       {/* Metric 3 */}
                      <div className="p-3 bg-light-bg dark:bg-dark-800 rounded-lg border border-light-border dark:border-dark-700">
                         <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                            <Database className="w-3 h-3" /> Latency
                         </div>
                         <div className="text-xl font-mono font-bold text-light-text dark:text-white flex items-end gap-2">
                            24ms <span className="text-xs text-secondary mb-1">−</span>
                         </div>
                         <div className="flex gap-0.5 mt-2 h-4 items-end">
                            {[20, 22, 24, 23, 24].map((h, i) => (
                               <div key={i} style={{height: `${h*2}%`}} className="w-full bg-secondary/20 rounded-sm"></div>
                            ))}
                         </div>
                      </div>
                   </div>

                   {/* Central Graph / Timeline Animation */}
                   <div className="bg-light-bg dark:bg-dark-800 rounded-lg border border-light-border dark:border-dark-700 p-4 relative overflow-hidden h-32">
                      <div className="absolute inset-0 flex items-center justify-center opacity-10">
                          {/* Grid Lines */}
                          <div className="w-full h-px bg-primary absolute top-1/4"></div>
                          <div className="w-full h-px bg-primary absolute top-2/4"></div>
                          <div className="w-full h-px bg-primary absolute top-3/4"></div>
                          <div className="h-full w-px bg-primary absolute left-1/4"></div>
                          <div className="h-full w-px bg-primary absolute left-2/4"></div>
                          <div className="h-full w-px bg-primary absolute left-3/4"></div>
                      </div>
                      
                      {/* Animated Sine Wave CSS */}
                      <div className="absolute inset-x-0 bottom-0 h-20 flex items-end">
                         <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                            <path 
                              d="M0,50 Q50,20 100,50 T200,50 T300,50 T400,50" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              className="text-primary opacity-50"
                            />
                            <path 
                              d="M0,50 Q50,20 100,50 T200,50 T300,50 T400,50" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              className="text-primary animate-pulse"
                            />
                             {/* Fill Area */}
                             <path 
                              d="M0,50 Q50,20 100,50 T200,50 T300,50 T400,50 V100 H0 Z" 
                              className="fill-primary/10 stroke-none"
                            />
                         </svg>
                      </div>
                      
                      {/* Prediction Marker */}
                      <div className="absolute top-4 right-1/4 flex flex-col items-center">
                         <div className="w-px h-24 bg-primary/50 border-l border-dashed border-primary"></div>
                         <div className="absolute top-0 bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-bold shadow-lg shadow-primary/50 whitespace-nowrap z-10">
                            Prediction Point
                         </div>
                      </div>
                   </div>

                   {/* Activity List */}
                   <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-gray-500 font-medium px-1">
                         <span>Recent Activity</span>
                         <span>Status</span>
                      </div>
                      
                      {/* Item 1 */}
                      <div className="flex items-center gap-3 p-2 rounded bg-light-bg dark:bg-dark-800 border border-light-border dark:border-dark-700">
                         <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                         <div className="flex-1 text-xs text-light-text dark:text-gray-300 font-mono">
                            Pod autoscaling triggered
                         </div>
                         <span className="text-[10px] text-gray-500">Just now</span>
                      </div>

                      {/* Item 2 - The Prediction Event */}
                      <div className="flex items-center gap-3 p-2 rounded bg-primary/5 border border-primary/20 relative overflow-hidden group/item">
                         {/* Scan effect */}
                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                         
                         <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                         <div className="flex-1 text-xs text-light-text dark:text-gray-200 font-mono font-medium">
                            <span className="text-primary">PREDICTION:</span> Memory leak detected
                         </div>
                         <button 
                            onClick={() => setActiveAlert(true)}
                            className="text-[10px] bg-primary hover:bg-primary-600 text-white px-2 py-0.5 rounded transition-colors cursor-pointer relative z-10 shadow-sm"
                          >
                            View
                         </button>
                      </div>
                   </div>
                </div>

                {/* Scanline Overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-[10px] w-full animate-[scan_3s_linear_infinite] opacity-30"></div>

                {/* Interactive Detail Overlay */}
                {activeAlert && (
                  <div className="absolute inset-0 bg-light-surface/95 dark:bg-dark-900/95 backdrop-blur-sm z-30 animate-in fade-in zoom-in-95 duration-200 flex flex-col p-6">
                    {/* Overlay Header */}
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-light-border dark:border-dark-700">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-primary" />
                        <div>
                          <h3 className="text-sm font-bold text-light-text dark:text-white">Incident Analysis #4921</h3>
                          <p className="text-xs text-gray-500">Prediction Confidence: 98%</p>
                        </div>
                      </div>
                      <button onClick={closeAlert} className="text-gray-400 hover:text-primary transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-dark-800">
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {remediated ? (
                       <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in slide-in-from-bottom-4">
                          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                            <ShieldCheck className="w-8 h-8 text-secondary" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-light-text dark:text-white">Threat Neutralized</h4>
                            <p className="text-sm text-gray-500">Service health restored to 100%.</p>
                          </div>
                          <div className="text-xs font-mono bg-light-bg dark:bg-dark-800 p-3 rounded text-secondary border border-secondary/20 mt-4">
                            > Scaling complete: 5 replicas active<br/>
                            > Memory usage stabilized at 45%<br/>
                            > Ticket #4921 closed automatically
                          </div>
                          <button onClick={closeAlert} className="text-xs text-gray-500 hover:text-light-text dark:hover:text-white mt-4 underline">
                            Return to Dashboard
                          </button>
                       </div>
                    ) : (
                      <div className="flex-1 flex flex-col overflow-hidden">
                        {/* RCA Content */}
                        <div className="space-y-4 font-mono text-xs overflow-y-auto pr-2">
                          <div className="bg-light-bg dark:bg-dark-800 p-3 rounded border border-light-border dark:border-dark-700">
                            <div className="flex items-center gap-2 text-primary mb-1 font-bold">
                              <Activity className="w-3 h-3" /> Root Cause Identified
                            </div>
                            <div className="text-light-text dark:text-gray-300">
                              Memory leak in <span className="text-white bg-gray-600 px-1 rounded">payment-service-v2</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-500 uppercase tracking-wider text-[10px] font-bold">
                              <GitCommit className="w-3 h-3" /> Correlated Change
                            </div>
                            <div className="bg-light-bg dark:bg-dark-800 p-2 rounded border border-light-border dark:border-dark-700 flex justify-between items-center">
                               <span className="text-blue-500">feat: update cache logic</span>
                               <span className="text-gray-500">2h ago by @dev-team</span>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-500 uppercase tracking-wider text-[10px] font-bold">
                              <Terminal className="w-3 h-3" /> Automated Diagnosis
                            </div>
                            <div className="bg-black/50 p-3 rounded text-gray-400 border border-dark-700">
                              <span className="text-blue-400">log_trace:</span><br/>
                              <span className="text-red-400">> [ERROR] Heap usage &gt; 95% (Trend: +5%/hr)</span><br/>
                              > [WARN] GC thrashing detected in pod-8xf<br/>
                              > [REC] Restart pod & rollback to v2.4.0
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-auto pt-4">
                           <button 
                              onClick={handleRemediate}
                              disabled={remediating}
                              className="w-full bg-primary hover:bg-primary-600 text-white py-3 rounded-lg font-bold shadow-lg shadow-orange-glow transition-all flex items-center justify-center gap-2"
                            >
                              {remediating ? (
                                <>Processing <span className="animate-spin">⟳</span></>
                              ) : (
                                <>Execute Auto-Remediation <ShieldCheck className="w-4 h-4" /></>
                              )}
                           </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};