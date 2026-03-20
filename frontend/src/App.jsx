import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Shield, ShieldCheck, ShieldAlert, Activity, AlertCircle, FileText, IndianRupee, MapPin, Clock, LogOut, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const API_URL = 'http://localhost:8000';

function LoginScreen({ setUser }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [phone, setPhone] = useState('9876543210');
  const [email, setEmail] = useState('admin@gigshield.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API_URL}/auth/login`, {
        is_admin: isAdmin,
        phone, email, password
      });
      setUser(res.data.user);
      if (isAdmin) navigate('/admin');
      else navigate('/worker');
    } catch (err) {
      setError("Login failed. Check credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center text-primary">
          <Shield size={64} />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Sign in to GigShield
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          AI-Powered Parametric Income Insurance
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-slate-800 py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-slate-700">
          <div className="flex justify-center space-x-4 mb-6">
            <button onClick={() => setIsAdmin(false)} className={`px-4 py-2 rounded-md ${!isAdmin ? 'bg-primary text-white' : 'bg-slate-700 text-gray-300'}`}>Worker</button>
            <button onClick={() => setIsAdmin(true)} className={`px-4 py-2 rounded-md ${isAdmin ? 'bg-primary text-white' : 'bg-slate-700 text-gray-300'}`}>Admin</button>
          </div>
          
          <form className="space-y-6" onSubmit={handleLogin}>
            {!isAdmin ? (
              <div>
                <label className="block text-sm font-medium text-gray-300">Phone Number (Pre-filled for Ravi Kumar)</label>
                <div className="mt-1">
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="appearance-none block w-full px-3 py-2 border border-slate-600 rounded-md shadow-sm bg-slate-700 text-white focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                </div>
              </div>
            ) : (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Email address</label>
                  <div className="mt-1">
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="appearance-none block w-full px-3 py-2 border border-slate-600 rounded-md shadow-sm bg-slate-700 text-white focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Password</label>
                  <div className="mt-1">
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="appearance-none block w-full px-3 py-2 border border-slate-600 rounded-md shadow-sm bg-slate-700 text-white focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
                  </div>
                </div>
              </>
            )}

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function WorkerDashboard({ user, logout }) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    axios.get(`${API_URL}/workers/${user.id}/dashboard`).then(res => setData(res.data));
  }, [user]);

  if (!data) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-100">
      <nav className="bg-slate-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2"><Shield className="text-primary"/> <span className="text-xl font-bold font-sans">GigShield</span></div>
          <div className="flex items-center space-x-4">
            <span>{user.name}</span>
            <button onClick={logout} className="text-gray-300 hover:text-white"><LogOut size={20}/></button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          
          <div className="bg-white overflow-hidden shadow rounded-lg border-t-4 border-primary">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-orange-100 rounded-md p-3">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">Active Plan</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">{data.policy.plan_type}</div>
                  </dd>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500 flex justify-between">
                <span>Premium: Rs. {data.policy.weekly_premium}/wk</span>
                <Link to="/policy" className="text-primary font-medium hover:text-orange-700">View Plans</Link>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg border-t-4 border-green-500">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                  <IndianRupee className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Earnings Protected</dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">Rs. {data.total_earnings_protected}</div>
                  </dd>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <h2 className="text-xl font-bold leading-6 text-gray-900">Recent Claims</h2>
          <Link to="/claim" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-orange-700">
            File a Claim
          </Link>
        </div>

        <div className="mt-4 flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.claims.length === 0 ? <tr><td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-500">No claims filed yet.</td></tr> : data.claims.map((claim) => (
                      <tr key={claim.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(claim.created_at).toLocaleDateString()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{claim.disruption_type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rs. {claim.payout_amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {claim.status === "APPROVED" && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Approved</span>}
                          {claim.status === "SOFT_FLAG" && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Verifying</span>}
                          {claim.status === "HARD_FLAG" && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Review Pending</span>}
                          {claim.status === "REJECTED" && <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">Rejected</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FileClaimPage({ user }) {
  const [type, setType] = useState("Heavy Rain");
  const [zone, setZone] = useState("Chennai Pin 600001");
  const [hours, setHours] = useState(4);
  const [animating, setAnimating] = useState(false);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAnimating(true);
    
    // Simulate AI model calculation animation visually
    let visualScore = 0;
    const interval = setInterval(() => {
      visualScore += Math.floor(Math.random() * 5);
      if(visualScore > 100) visualScore = 0;
      setScore(visualScore);
    }, 100);

    try {
      const res = await axios.post(`${API_URL}/claims/file`, {
        worker_id: user.id,
        disruption_type: type,
        zone: zone,
        blocked_hours: hours
      });
      clearInterval(interval);
      setScore(res.data.claim.fraud_score);
      setResult(res.data.claim);
    } catch (err) {
      clearInterval(interval);
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <nav className="bg-slate-900 text-white shadow-lg p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => navigate('/worker')}><Shield className="inline text-primary mr-2"/> <span className="text-xl font-bold">GigShield</span></div>
          <span>File Claim</span>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-4 py-8">
        {!animating && !result ? (
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Report Disruption</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">Fast, automated payouts. No paperwork.</p>
            </div>
            <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Disruption Type</label>
                <select value={type} onChange={(e) => setType(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 border-gray-300 bg-white border outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md">
                  <option>Heavy Rain</option>
                  <option>Extreme Heat</option>
                  <option>Platform Outage</option>
                  <option>Bandh</option>
                  <option>Minor Accident</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Affected Zone / Pin Code</label>
                <input value={zone} onChange={e => setZone(e.target.value)} type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Hours Blocked (Approx)</label>
                <input value={hours} onChange={e => setHours(e.target.value)} type="number" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary sm:text-sm" />
              </div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-orange-700">
                Submit Claim securely
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white shadow sm:rounded-lg p-10 text-center flex flex-col items-center">
            {result ? (
              <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center">
                {result.status === "APPROVED" ? (
                  <>
                    <CheckCircle className="text-green-500 w-24 h-24 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900">Claim Auto-Approved!</h2>
                    <p className="text-gray-500 mt-2">Fraud check passed (Score: {score})</p>
                    <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200 w-full max-w-sm">
                      <p className="text-sm text-gray-600 uppercase font-semibold text-left">Payout Initiated via UPI</p>
                      <p className="text-3xl font-bold text-green-700 text-left mt-2">Rs. {result.payout_amount}</p>
                    </div>
                  </>
                ) : result.status === "HARD_FLAG" ? (
                   <>
                    <AlertCircle className="text-red-500 w-24 h-24 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900">Further Review Required</h2>
                    <p className="text-gray-500 mt-2">Unusual activity detected (Risk Score: {score})</p>
                    <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200 w-full max-w-sm">
                      <p className="text-sm text-gray-600 uppercase font-semibold text-left">50% Provisional Payout Issued</p>
                      <p className="text-3xl font-bold text-orange-700 text-left mt-2">Rs. {result.payout_amount}</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-4">Remaining amount pending manual human review.</p>
                   </>
                ) : (
                  <>
                    <ShieldAlert className="text-yellow-500 w-24 h-24 mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900">Please Verify</h2>
                    <p className="text-gray-500 mt-2">Upload a quick photo of your surroundings.</p>
                  </>
                )}
                <button onClick={() => navigate('/worker')} className="mt-8 px-6 py-2 bg-slate-900 text-white rounded-md">Return to Dashboard</button>
              </motion.div>
            ) : (
              <div className="flex flex-col items-center py-10">
                <Activity className="text-primary w-16 h-16 animate-pulse mb-4" />
                <h3 className="text-xl font-bold text-slate-800">Analyzing Claim...</h3>
                <p className="text-gray-500 mt-2 text-sm text-center max-w-xs">Cross-referencing satellite weather data, platform API earnings logic, and multi-signal physical presence history.</p>
                <div className="mt-8 text-4xl font-mono text-slate-900 font-bold border-4 border-slate-200 rounded-full w-32 h-32 flex items-center justify-center shadow-inner">
                  {score}
                </div>
                <p className="text-xs text-gray-400 mt-2">AI Fraud Risk Score Computator</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function AdminDashboard({ logout }) {
  const [data, setData] = useState(null);
  
  const loadData = () => axios.get(`${API_URL}/admin/dashboard`).then(res => setData(res.data));

  useEffect(() => { loadData(); }, []);

  const handleAction = async (id, action) => {
    await axios.post(`${API_URL}/admin/claims/${id}/${action}`);
    loadData();
  };

  if (!data) return <div className="p-8">Loading AI Admin Panel...</div>;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-slate-900 text-white flex flex-col shadow-xl">
        <div className="p-6 font-bold text-2xl flex items-center tracking-tight border-b border-slate-800">
           <Shield className="text-primary mr-2"/> Ops Control
        </div>
        <div className="p-4 flex-1 space-y-2">
          <div className="p-3 bg-primary rounded-lg cursor-pointer font-medium mb-2">Claim Queue</div>
          <div className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer text-gray-400">Risk Heatmap</div>
          <div className="p-3 hover:bg-slate-800 rounded-lg cursor-pointer text-gray-400">Policies</div>
        </div>
        <div className="p-4 border-t border-slate-800 text-gray-400 cursor-pointer hover:text-white flex items-center" onClick={logout}>
          <LogOut size={16} className="mr-2"/> Exit
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-6 font-sans">Platform Analytics Overview</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
               <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Active Policies</p>
               <p className="mt-2 text-4xl font-bold text-slate-800">{data.active_policies}</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
               <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Claims This Week</p>
               <p className="mt-2 text-4xl font-bold text-slate-800">{data.claims_this_week}</p>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
               <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Total Payouts</p>
               <p className="mt-2 text-4xl font-bold text-primary">Rs. {data.total_payouts_week}</p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
            <AlertCircle className="text-red-500 mr-2"/> Fraud Review Queue (Hard Flags)
          </h2>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Claim ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Worker</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Risk Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {data.fraud_queue.length === 0 && <tr><td colSpan="5" className="p-6 text-center text-slate-500 italic">Queue is currently empty.</td></tr>}
                {data.fraud_queue.map(el => (
                  <tr key={el.id} className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900 font-medium">#{el.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{el.worker_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs font-bold rounded-full bg-red-100 text-red-800 border border-red-200">{el.score} / 100</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{el.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                       <button onClick={() => handleAction(el.id, 'approve')} className="text-green-600 hover:text-green-900 bg-green-50 px-3 py-1 rounded-md border border-green-200 font-medium">Approve</button>
                       <button onClick={() => handleAction(el.id, 'reject')} className="text-red-600 hover:text-red-900 bg-red-50 px-3 py-1 rounded-md border border-red-200 font-medium">Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function PolicyPage({ user }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-5xl mx-auto">
        <button onClick={() => navigate(-1)} className="mb-4 text-primary font-bold hover:underline">← Back to Dashboard</button>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-8 text-center mt-4">Choose Your Shield</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col rounded-t-lg">
            <h3 className="text-xl font-bold text-slate-900">Basic</h3>
            <p className="mt-4 text-5xl font-extrabold text-slate-900">Rs. 29</p>
            <p className="text-slate-500 mt-1">/ week</p>
            <ul className="mt-8 space-y-4 flex-1">
              <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 h-5 w-5"/> <span className="text-slate-700">Rain & Floods</span></li>
              <li className="flex items-center"><XCircle className="text-gray-300 mr-2 h-5 w-5"/> <span className="text-slate-400">Extreme Heat</span></li>
              <li className="flex items-center"><XCircle className="text-gray-300 mr-2 h-5 w-5"/> <span className="text-slate-400">Social Disruptions</span></li>
            </ul>
            <button className="mt-8 w-full bg-slate-100 text-slate-900 font-bold py-3 rounded-xl border border-slate-300 hover:bg-slate-200 transition-colors">Select Plan</button>
          </div>

          <div className="bg-slate-900 rounded-2xl shadow-xl p-8 flex flex-col relative transform md:-translate-y-4 rounded-t-lg border-2 border-primary">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Most Popular</div>
            <h3 className="text-xl font-bold text-white">Standard</h3>
            <p className="mt-4 text-5xl font-extrabold text-white">Rs. 49</p>
            <p className="text-slate-400 mt-1">/ week</p>
            <ul className="mt-8 space-y-4 flex-1">
              <li className="flex items-center"><CheckCircle className="text-primary mr-2 h-5 w-5"/> <span className="text-slate-200">Rain & Floods</span></li>
              <li className="flex items-center"><CheckCircle className="text-primary mr-2 h-5 w-5"/> <span className="text-slate-200">Extreme Heat & AQI</span></li>
              <li className="flex items-center"><CheckCircle className="text-primary mr-2 h-5 w-5"/> <span className="text-slate-200">Platform Outages</span></li>
              <li className="flex items-center"><XCircle className="text-slate-700 mr-2 h-5 w-5"/> <span className="text-slate-500">Social Disruptions</span></li>
            </ul>
            <button className="mt-8 w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30 text-lg">Current Plan</button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 flex flex-col rounded-t-lg">
            <h3 className="text-xl font-bold text-slate-900">Full Shield</h3>
            <p className="mt-4 text-5xl font-extrabold text-slate-900">Rs. 69</p>
            <p className="text-slate-500 mt-1">/ week</p>
            <ul className="mt-8 space-y-4 flex-1">
              <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 h-5 w-5"/> <span className="text-slate-700">All Weather Events</span></li>
              <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 h-5 w-5"/> <span className="text-slate-700">Platform Outages</span></li>
              <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 h-5 w-5"/> <span className="text-slate-700">Curfews & Bandhs</span></li>
              <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 h-5 w-5"/> <span className="text-slate-700">Minor Accidents</span></li>
            </ul>
            <button className="mt-8 w-full bg-slate-100 text-slate-900 font-bold py-3 rounded-xl border border-slate-300 hover:bg-slate-200 transition-colors">Select Plan</button>
          </div>

        </div>
      </div>
    </div>
  );
}


function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={!user ? <LoginScreen setUser={setUser} /> : user.role === 'admin' ? <AdminDashboard logout={() => setUser(null)} /> : <WorkerDashboard user={user} logout={() => setUser(null)} />} />
        <Route path="/worker" element={<WorkerDashboard user={user} logout={() => setUser(null)} />} />
        <Route path="/admin" element={<AdminDashboard logout={() => setUser(null)} />} />
        <Route path="/claim" element={<FileClaimPage user={user} />} />
        <Route path="/policy" element={<PolicyPage user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;
