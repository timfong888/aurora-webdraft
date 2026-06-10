'use client';

import { useState, useEffect } from 'react';

const CSS = `
  :root{
    --bg:#070b10;--bg-2:#0c121a;--panel:#0f1722;--panel-2:#121d2b;
    --line:#1d2a3a;--text:#e8eef5;--muted:#93a3b6;
    --accent:#0dd5cf;--accent-2:#3aa0ff;--accent-dim:rgba(13,213,207,.12);
    --radius:14px;--max:1180px;
  }
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{
    margin:0!important;background:var(--bg)!important;color:var(--text)!important;
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Inter,Roboto,Helvetica,Arial,sans-serif!important;
    line-height:1.6;-webkit-font-smoothing:antialiased;
    display:block!important;min-height:initial!important;
  }
  a{color:inherit;text-decoration:none}
  .wrap{max-width:var(--max);margin:0 auto;padding:0 24px}
  h1,h2,h3,h4{line-height:1.15;margin:0 0 .4em;font-weight:700;letter-spacing:-.02em;color:var(--text)}
  h1{font-size:clamp(2.1rem,5vw,3.6rem)}
  h2{font-size:clamp(1.6rem,3vw,2.4rem)}
  h3{font-size:1.2rem}
  p{margin:0 0 1rem;color:var(--muted)}
  .eyebrow{color:var(--accent);font-size:.78rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;margin-bottom:14px}
  .accent{color:var(--accent)}
  header.nav{position:sticky;top:0;z-index:50;background:rgba(7,11,16,.82);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
  .nav-inner{display:flex;align-items:center;gap:28px;height:66px}
  .logo{display:flex;align-items:center;gap:9px;font-weight:800;letter-spacing:.02em;font-size:1.15rem;cursor:pointer;color:var(--text)}
  .logo .dot{width:13px;height:13px;border-radius:50%;background:radial-gradient(circle at 30% 30%,var(--accent),var(--accent-2));box-shadow:0 0 14px var(--accent)}
  nav.links{display:flex;gap:6px;margin-left:6px}
  nav.links a{padding:8px 13px;border-radius:9px;font-size:.92rem;color:var(--muted);font-weight:500;cursor:pointer}
  nav.links a:hover{color:var(--text);background:var(--panel)}
  nav.links a.active{color:var(--accent)}
  .nav-cta{margin-left:auto;display:flex;gap:10px;align-items:center}
  .btn{display:inline-flex;align-items:center;gap:8px;padding:10px 18px;border-radius:10px;font-weight:600;font-size:.9rem;cursor:pointer;border:1px solid transparent;transition:.18s;white-space:nowrap}
  .btn-primary{background:linear-gradient(135deg,var(--accent),var(--accent-2));color:#04141a}
  .btn-primary:hover{filter:brightness(1.08);transform:translateY(-1px)}
  .btn-ghost{border-color:var(--line);color:var(--text);background:var(--panel)}
  .btn-ghost:hover{border-color:var(--accent);color:var(--accent)}
  .btn-sm{padding:8px 14px;font-size:.85rem}
  .login{font-size:.88rem;color:var(--muted);cursor:pointer;padding:8px 6px}
  .login:hover{color:var(--text)}
  .page{display:none;animation:fade .35s ease}
  .page.active{display:block}
  @keyframes fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
  section{padding:74px 0;border-bottom:1px solid var(--line)}
  .hero{position:relative;overflow:hidden;padding:96px 0 86px}
  .hero::before{content:"";position:absolute;inset:0;background:
    radial-gradient(900px 460px at 72% -8%,rgba(13,213,207,.16),transparent 60%),
    radial-gradient(680px 420px at 8% 16%,rgba(58,160,255,.12),transparent 60%);
    pointer-events:none}
  .hero .wrap{position:relative}
  .hero h1{max-width:16ch}
  .hero p.lead{font-size:1.18rem;max-width:60ch;color:#c4d1de}
  .hero-cta{display:flex;gap:13px;margin-top:30px;flex-wrap:wrap}
  .trust{display:flex;gap:26px;flex-wrap:wrap;margin-top:42px;color:var(--muted);font-size:.85rem}
  .trust span{display:flex;align-items:center;gap:8px}
  .trust span::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--accent)}
  .grid{display:grid;gap:20px}
  .g2{grid-template-columns:repeat(2,1fr)}
  .g3{grid-template-columns:repeat(3,1fr)}
  .g4{grid-template-columns:repeat(4,1fr)}
  .card{background:linear-gradient(180deg,var(--panel),var(--bg-2));border:1px solid var(--line);border-radius:var(--radius);padding:26px;transition:.2s}
  .card:hover{border-color:rgba(13,213,207,.45);transform:translateY(-3px)}
  .card .ic{width:42px;height:42px;border-radius:11px;background:var(--accent-dim);display:flex;align-items:center;justify-content:center;margin-bottom:16px;color:var(--accent)}
  .card h3{margin-bottom:6px}
  .card p{font-size:.93rem;margin-bottom:12px}
  .card .more{color:var(--accent);font-size:.86rem;font-weight:600;cursor:pointer}
  .card ul{margin:10px 0 0;padding-left:18px}
  .card ul li{color:var(--muted);font-size:.9rem;margin-bottom:5px}
  .sec-head{max-width:62ch;margin-bottom:38px}
  .sec-head.center{margin:0 auto 44px;text-align:center}
  .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
  .metric{background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);padding:24px;text-align:center}
  .metric .num{font-size:2rem;font-weight:800;color:var(--accent);letter-spacing:-.02em}
  .metric .lbl{font-size:.83rem;color:var(--muted)}
  .feat{display:flex;gap:14px;align-items:flex-start;padding:16px 0;border-bottom:1px solid var(--line)}
  .feat:last-child{border-bottom:none}
  .feat .tick{flex:0 0 22px;height:22px;border-radius:6px;background:var(--accent-dim);color:var(--accent);display:flex;align-items:center;justify-content:center;font-size:.8rem;margin-top:2px}
  .feat h4{margin:0 0 3px;font-size:1rem}
  .feat p{margin:0;font-size:.9rem}
  table{width:100%;border-collapse:collapse;margin-top:10px;font-size:.92rem}
  th,td{text-align:left;padding:14px 16px;border-bottom:1px solid var(--line)}
  th{color:var(--muted);font-weight:600;font-size:.82rem;text-transform:uppercase;letter-spacing:.05em}
  td{color:var(--text)}
  td.price{color:var(--accent);font-weight:700}
  .tbl-wrap{border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;background:var(--panel)}
  .split{display:grid;grid-template-columns:1.05fr .95fr;gap:46px;align-items:center}
  .panel-box{background:linear-gradient(180deg,var(--panel-2),var(--bg-2));border:1px solid var(--line);border-radius:18px;padding:30px}
  .pill{display:inline-block;padding:5px 12px;border:1px solid var(--line);border-radius:999px;font-size:.78rem;color:var(--accent);margin:0 6px 8px 0;background:var(--accent-dim)}
  .ctaband{background:linear-gradient(135deg,rgba(13,213,207,.1),rgba(58,160,255,.08));border:1px solid var(--line);border-radius:20px;padding:48px;text-align:center}
  .ctaband h2{margin-bottom:8px}
  .ctaband .hero-cta{justify-content:center}
  .tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:6px}
  footer{padding:50px 0 40px;background:var(--bg-2)}
  .foot{display:flex;justify-content:space-between;gap:30px;flex-wrap:wrap;align-items:center}
  .foot-links{display:flex;gap:20px;flex-wrap:wrap;font-size:.9rem;color:var(--muted)}
  .foot-links a{cursor:pointer}
  .foot-links a:hover{color:var(--accent)}
  .copyright{color:var(--muted);font-size:.82rem;margin-top:20px;border-top:1px solid var(--line);padding-top:20px}
  .note{font-size:.8rem;color:var(--muted);font-style:italic}
  .map-wrap{position:relative;background:linear-gradient(180deg,var(--panel),var(--bg-2));border:1px solid var(--line);border-radius:18px;padding:24px;overflow:hidden}
  .map-wrap svg{width:100%;height:auto;display:block}
  .map-dot{fill:var(--accent)}
  .map-ping{fill:var(--accent);opacity:.5;transform-origin:center;animation:ping 2.4s ease-out infinite}
  @keyframes ping{0%{transform:scale(1);opacity:.55}70%{transform:scale(3.2);opacity:0}100%{opacity:0}}
  .land{fill:#16222f;stroke:#22344a;stroke-width:.6}
  .region-legend{display:flex;flex-wrap:wrap;gap:10px;margin-top:18px}
  .region-legend span{display:inline-flex;align-items:center;gap:7px;font-size:.84rem;color:var(--muted);border:1px solid var(--line);background:var(--bg-2);padding:6px 12px;border-radius:999px}
  .region-legend span::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--accent);box-shadow:0 0 8px var(--accent)}
  .cost-blade{display:grid;grid-template-columns:1fr 1fr;gap:50px;align-items:center;background:linear-gradient(135deg,var(--panel),var(--bg-2));border:1px solid var(--line);border-radius:20px;padding:48px}
  .cost-compare{display:flex;align-items:stretch;gap:16px}
  .cost-item{flex:1;border-radius:var(--radius);padding:24px 20px}
  .cost-bad{background:rgba(239,68,68,.07);border:1px solid rgba(239,68,68,.18)}
  .cost-good{background:var(--accent-dim);border:1px solid rgba(13,213,207,.28)}
  .cost-lbl{font-size:.75rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-bottom:12px}
  .cost-bad .cost-lbl{color:#f87171}
  .cost-good .cost-lbl{color:var(--accent)}
  .cost-sub{font-size:.9rem;color:var(--muted);line-height:1.6}
  .cost-vs{display:flex;align-items:center;justify-content:center;font-size:.9rem;font-weight:700;color:var(--muted);flex:0 0 28px}
  @media(max-width:900px){
    .g3,.g4,.metrics{grid-template-columns:repeat(2,1fr)}
    .g2,.split,.cost-blade{grid-template-columns:1fr}
    .login{display:none}
    .nav-inner{gap:14px}
    nav.links{margin-left:0;gap:2px;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none}
    nav.links::-webkit-scrollbar{display:none}
    nav.links a{padding:7px 9px;font-size:.82rem;white-space:nowrap}
    .hero{padding:64px 0}
  }
  @media(max-width:560px){
    .g3,.g4,.metrics{grid-template-columns:1fr}
    .nav-cta .btn-ghost{display:none}
    .logo{font-size:1rem}
    .nav-cta .btn-sm{padding:7px 11px;font-size:.78rem}
    .cost-compare{flex-direction:column}
    .cost-vs{flex-direction:row}
  }
`;

export default function Home() {
  const [page, setPage] = useState('home');

  function go(id: string) {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
    history.replaceState(null, '', '#' + id);
  }

  useEffect(() => {
    const h = location.hash.replace('#', '');
    const valid = ['home','aicloud','gpu','storage','edge','resources','contact','products'];
    if (h && valid.includes(h)) setPage(h);
  }, []);

  const pc = (id: string) => `page${page === id ? ' active' : ''}`;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <header className="nav">
        <div className="wrap nav-inner">
          <div className="logo" onClick={() => go('home')}><span className="dot"></span> AURORA</div>
          <nav className="links">
            <a onClick={() => go('aicloud')} className={page === 'aicloud' ? 'active' : ''}>AI Cloud</a>
            <a onClick={() => go('gpu')} className={page === 'gpu' ? 'active' : ''}>GPU</a>
            <a onClick={() => go('storage')} className={page === 'storage' ? 'active' : ''}>Storage</a>
            <a onClick={() => go('edge')} className={page === 'edge' ? 'active' : ''}>Edge</a>
            <a onClick={() => go('resources')} className={page === 'resources' ? 'active' : ''}>Resources</a>
          </nav>
          <div className="nav-cta">
            <span className="login">Login</span>
            <span className="btn btn-ghost btn-sm" onClick={() => go('contact')}>Talk to Sales</span>
            <span className="btn btn-primary btn-sm" onClick={() => go('contact')}>Reserve GPUs</span>
          </div>
        </div>
      </header>

      <main>

        {/* HOME */}
        <section className={pc('home')} id="home" style={{padding:0,border:'none'}}>
          <div className="hero">
            <div className="wrap">
              <div className="eyebrow">Full-Stack AI Infrastructure</div>
              <h1>AI infrastructure built for production — from bare metal to inference.</h1>
              <p className="lead">Reserve GPU clusters, run inference and agents at scale, and store the data that feeds them — built, deployed, and operated by Aurora.</p>
              <div className="hero-cta">
                <span className="btn btn-primary" onClick={() => go('contact')}>Reserve GPUs →</span>
                <span className="btn btn-ghost" onClick={() => go('contact')}>Talk to Sales</span>
              </div>
              <div className="trust">
                <span>Fast lead times</span>
                <span>Reliable delivery</span>
                <span>Fully managed</span>
                <span>MW-scale capacity</span>
              </div>
            </div>
          </div>

          <section>
            <div className="wrap">
              <div className="sec-head">
                <div className="eyebrow">The Aurora Stack</div>
                <h2>One stack for the full AI lifecycle.</h2>
                <p>From the GPUs that train and serve your models to the storage that feeds them and the edge that extends them — all delivered as a managed service.</p>
              </div>
              <div className="grid g4">
                <div className="card" onClick={() => go('aicloud')} style={{cursor:'pointer'}}>
                  <div className="ic">◈</div>
                  <h3>AI Cloud</h3>
                  <p>Inference, agents, and dedicated compute — serverless to stateful.</p>
                  <span className="more">Explore →</span>
                </div>
                <div className="card" onClick={() => go('gpu')} style={{cursor:'pointer'}}>
                  <div className="ic">▦</div>
                  <h3>GPU</h3>
                  <p>Managed GPU clusters from 16 to 10,000+ nodes, built in weeks.</p>
                  <span className="more">Explore →</span>
                </div>
                <div className="card" onClick={() => go('storage')} style={{cursor:'pointer'}}>
                  <div className="ic">▤</div>
                  <h3>Storage</h3>
                  <p>High-performance and high-density AI storage in one platform.</p>
                  <span className="more">Explore →</span>
                </div>
                <div className="card" onClick={() => go('edge')} style={{cursor:'pointer'}}>
                  <div className="ic">◉</div>
                  <h3>Edge</h3>
                  <p>Low-latency inference, milliseconds from your users and devices.</p>
                  <span className="more">Explore →</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="metrics">
                <div className="metric"><div className="num">8–16 wks</div><div className="lbl">GPU build lead time</div></div>
                <div className="metric"><div className="num">99.9%</div><div className="lbl">Uptime SLA</div></div>
                <div className="metric"><div className="num">10,000+</div><div className="lbl">Nodes per deployment</div></div>
                <div className="metric"><div className="num">24×7</div><div className="lbl">Managed operations</div></div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="cost-blade">
                <div>
                  <div className="eyebrow">Cost Optimization</div>
                  <h2>Agentic AI maxes tokens by default.</h2>
                  <p>Per-token prices fall — but agentic consumption rises faster. Multi-step reasoning, tool loops, and agent fan-out have no natural ceiling. Total inference spend climbs regardless.</p>
                  <p>Aurora decouples capability from cost: reserve capacity at a fixed price, run every token through an optimization layer, and stay inside the budget.</p>
                </div>
                <div>
                  <div className="cost-compare">
                    <div className="cost-item cost-bad">
                      <div className="cost-lbl">Per-Token Pricing</div>
                      <div className="cost-sub">Every agent step, reasoning chain, and fan-out adds to the bill. More capable AI means higher spend — with no natural ceiling.</div>
                    </div>
                    <div className="cost-vs">vs</div>
                    <div className="cost-item cost-good">
                      <div className="cost-lbl">Aurora Reserved</div>
                      <div className="cost-sub">Fixed capacity at a monthly price. Optimization runs inside the reservation — more throughput, not a larger invoice.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap split">
              <div>
                <div className="eyebrow">Why Aurora</div>
                <h2>Fast lead times. Reliable delivery.</h2>
                <p>Acquiring GPUs and standing up production AI infrastructure usually takes quarters. Aurora compresses that to weeks — and stays in the stack to operate it.</p>
                <p>Every engagement is a managed new build, scoped to your workload and run by Aurora&apos;s engineering team end to end.</p>
                <div className="hero-cta"><span className="btn btn-ghost" onClick={() => go('products')}>See the full stack →</span></div>
              </div>
              <div className="panel-box">
                <div className="feat"><div className="tick">✓</div><div><h4>Speed to production</h4><p>Clusters live in weeks, not quarters.</p></div></div>
                <div className="feat"><div className="tick">✓</div><div><h4>Reliable by design</h4><p>24×7 operations, 99.9% uptime SLA, full break/fix.</p></div></div>
                <div className="feat"><div className="tick">✓</div><div><h4>Fully managed</h4><p>Bare metal to inference — Aurora operates what it builds.</p></div></div>
                <div className="feat"><div className="tick">✓</div><div><h4>Engineering-led</h4><p>Deep systems and large-scale infrastructure expertise.</p></div></div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="sec-head">
                <div className="eyebrow">Data Center Footprint</div>
                <h2>Deployed close to where you operate.</h2>
                <p>Aurora builds and operates AI data center capacity across North America, Western Europe, the Nordics, GCC, and APAC.</p>
              </div>
              <div className="map-wrap">
                <svg viewBox="0 0 1000 480" xmlns="http://www.w3.org/2000/svg" aria-label="Aurora global deployment map">
                  <g>
                    <path className="land" d="M120 70 L250 60 L300 110 L280 175 L235 250 L180 250 L150 200 L110 150 Z"/>
                    <path className="land" d="M250 270 L300 260 L310 320 L280 400 L250 420 L235 360 L240 310 Z"/>
                    <path className="land" d="M470 90 L560 80 L585 120 L560 160 L500 165 L465 135 Z"/>
                    <path className="land" d="M480 180 L580 175 L600 250 L560 340 L515 350 L485 280 L470 220 Z"/>
                    <path className="land" d="M600 70 L820 60 L880 120 L850 200 L760 220 L650 200 L600 150 Z"/>
                    <path className="land" d="M650 210 L720 215 L760 250 L720 300 L670 280 L645 240 Z"/>
                    <path className="land" d="M810 320 L900 315 L920 365 L870 400 L815 385 L800 350 Z"/>
                  </g>
                  <circle className="map-ping" cx="200" cy="150" r="6"/><circle className="map-dot" cx="200" cy="150" r="5"/>
                  <circle className="map-ping" cx="510" cy="120" r="6"/><circle className="map-dot" cx="510" cy="120" r="5"/>
                  <circle className="map-ping" cx="535" cy="78" r="6"/><circle className="map-dot" cx="535" cy="78" r="5"/>
                  <circle className="map-ping" cx="620" cy="200" r="6"/><circle className="map-dot" cx="620" cy="200" r="5"/>
                  <circle className="map-ping" cx="800" cy="180" r="6"/><circle className="map-dot" cx="800" cy="180" r="5"/>
                </svg>
                <div className="region-legend">
                  <span>North America</span>
                  <span>Western Europe</span>
                  <span>Nordics</span>
                  <span>GCC</span>
                  <span>APAC</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="ctaband">
                <h2>Tell us what you&apos;re building.</h2>
                <p>We&apos;ll scope the right infrastructure and get you to a plan.</p>
                <div className="hero-cta">
                  <span className="btn btn-primary" onClick={() => go('contact')}>Reserve GPUs →</span>
                  <span className="btn btn-ghost" onClick={() => go('contact')}>Talk to Sales</span>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* PRODUCTS */}
        <section className={pc('products')} id="products" style={{padding:0,border:'none'}}>
          <div className="hero">
            <div className="wrap">
              <div className="eyebrow">Products</div>
              <h1>The Aurora stack, end to end.</h1>
              <p className="lead">Bare metal → GPU → inference &amp; agents → storage → edge. One managed platform, scoped and operated for you.</p>
            </div>
          </div>
          <section>
            <div className="wrap">
              <div className="grid g2">
                <div className="card" onClick={() => go('aicloud')} style={{cursor:'pointer'}}>
                  <div className="ic">◈</div><h3>AI Cloud</h3>
                  <p>Run inference and agents in production — from serverless endpoints to dedicated, stateful compute.</p>
                  <ul><li>OpenAI-compatible inference</li><li>Persistent-state inference for agents</li><li>Dedicated CPU &amp; VMs</li></ul>
                  <span className="more">Explore AI Cloud →</span>
                </div>
                <div className="card" onClick={() => go('gpu')} style={{cursor:'pointer'}}>
                  <div className="ic">▦</div><h3>GPU</h3>
                  <p>Dedicated GPU clusters, built and managed for you — fast, from 16 to 10,000+ nodes.</p>
                  <ul><li>B200 / B300 / GB300</li><li>InfiniBand fabric, GPU-aware Kubernetes</li><li>8–16 week lead times</li></ul>
                  <span className="more">Explore GPU →</span>
                </div>
                <div className="card" onClick={() => go('storage')} style={{cursor:'pointer'}}>
                  <div className="ic">▤</div><h3>Storage</h3>
                  <p>AI storage in one platform — high-performance to feed GPUs, high-density to scale economically.</p>
                  <ul><li>Weka, DDN, GPFS, VAST</li><li>Tiered, single namespace</li><li>File, block, object</li></ul>
                  <span className="more">Explore Storage →</span>
                </div>
                <div className="card" onClick={() => go('edge')} style={{cursor:'pointer'}}>
                  <div className="ic">◉</div><h3>Edge</h3>
                  <p>Fast inference at the edge — milliseconds from your users, devices, and data.</p>
                  <ul><li>Distributed inference nodes</li><li>Fleet management across sites</li><li>Hub-and-spoke with Aurora cloud</li></ul>
                  <span className="more">Explore Edge →</span>
                </div>
              </div>
              <p style={{marginTop:'30px'}} className="note">How it fits together: GPU clusters train and serve models, AI Storage keeps them fed, AI Cloud turns capacity into inference and agent workloads, and Edge extends inference to where data is generated.</p>
            </div>
          </section>
        </section>

        {/* AI CLOUD */}
        <section className={pc('aicloud')} id="aicloud" style={{padding:0,border:'none'}}>
          <div className="hero">
            <div className="wrap">
              <div className="eyebrow">AI Cloud · Inference &amp; Agent Infrastructure</div>
              <h1>Run inference and agents in production.</h1>
              <p className="lead">From serverless endpoints to dedicated, stateful compute — Aurora AI Cloud serves models, holds state, and runs the agents that orchestrate them.</p>
              <div className="hero-cta">
                <span className="btn btn-primary" onClick={() => go('contact')}>Start in console →</span>
                <span className="btn btn-ghost" onClick={() => go('contact')}>Talk to Sales</span>
              </div>
            </div>
          </div>

          <section>
            <div className="wrap">
              <div className="sec-head"><div className="eyebrow">Inference</div><h2>Serverless to dedicated, on one platform.</h2><p>Start serverless and scale into dedicated GPU endpoints as traffic grows — no re-architecture.</p></div>
              <div className="grid g3">
                <div className="card"><h3>OpenAI-compatible API</h3><p>Drop-in endpoints for a curated catalog of open-weight LLM and multimodal models.</p></div>
                <div className="card"><h3>Autoscaling &amp; batching</h3><p>Latency-aware scheduling, request batching, and scale-to-zero so you pay for what you serve.</p></div>
                <div className="card"><h3>Performance economics</h3><p>Tuned for maximum tokens-per-dollar with predictable latency and throughput under load.</p></div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap split">
              <div>
                <div className="eyebrow">Inference with persistent state</div>
                <h2>Stateful inference for agents.</h2>
                <p>Long-lived conversations and agents keep a persistent KV-cache and session state across requests — advancing on only the new tokens each turn, instead of re-prefilling the whole context.</p>
                <p>Session affinity keeps every turn on the instance that holds the context, and Aurora AI Storage backs the memory, checkpoints, and outputs behind it.</p>
                <div className="tags">
                  <span className="pill">Persistent KV-cache</span><span className="pill">Session affinity</span>
                  <span className="pill">No re-prefill penalty</span><span className="pill">Durable agent memory</span>
                </div>
              </div>
              <div className="panel-box">
                <div className="feat"><div className="tick">✓</div><div><h4>State across requests</h4><p>Sessions persist instead of resetting every call.</p></div></div>
                <div className="feat"><div className="tick">✓</div><div><h4>Lower latency at depth</h4><p>Avoids costly re-prefill as context grows.</p></div></div>
                <div className="feat"><div className="tick">✓</div><div><h4>Storage-backed memory</h4><p>Checkpoints and outputs land on Aurora AI Storage.</p></div></div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap split">
              <div className="panel-box">
                <div className="feat"><div className="tick">✓</div><div><h4>Dedicated CPUs via VMs</h4><p>Background workers, tool calls, and orchestration.</p></div></div>
                <div className="feat"><div className="tick">✓</div><div><h4>Persistent sandboxes</h4><p>Workspaces that hold state across sessions.</p></div></div>
                <div className="feat"><div className="tick">✓</div><div><h4>CPU + GPU, together</h4><p>Agents run on CPU and call models on GPU.</p></div></div>
              </div>
              <div>
                <div className="eyebrow">Dedicated CPU &amp; VMs</div>
                <h2>Infrastructure for agents, not just models.</h2>
                <p>Production agents need more than a model endpoint. They need persistent compute to hold state, background workers for async work, and a place to run code safely.</p>
                <p>Aurora pairs dedicated CPUs and VMs with GPU inference on one network — so the agent layer and the model layer live side by side, without crossing a billing or latency boundary.</p>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="sec-head"><div className="eyebrow">Also included</div><h2>Fine-tuning &amp; managed operations.</h2></div>
              <div className="grid g3">
                <div className="card"><h3>Fine-tuning</h3><p>Adapt open-weight models to your data with serverless, API-driven pipelines.</p></div>
                <div className="card"><h3>Managed orchestration</h3><p>Provisioning, autoscaling, and lifecycle management handled by Aurora.</p></div>
                <div className="card"><h3>Monitoring &amp; SLA</h3><p>Observability and SLA-backed reliability across every workload.</p></div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="ctaband">
                <h2>Deploy models. Run agents. Scale automatically.</h2>
                <div className="hero-cta">
                  <span className="btn btn-primary" onClick={() => go('contact')}>Start in console →</span>
                  <span className="btn btn-ghost" onClick={() => go('contact')}>Talk to Sales</span>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* GPU */}
        <section className={pc('gpu')} id="gpu" style={{padding:0,border:'none'}}>
          <div className="hero">
            <div className="wrap">
              <div className="eyebrow">GPU Infrastructure</div>
              <h1>GPU clusters, built and managed for you — fast.</h1>
              <p className="lead">From 16 to 10,000+ nodes, deployed in weeks. Aurora designs, builds, and operates a dedicated GPU cluster for each customer — bare metal to Kubernetes handoff.</p>
              <div className="hero-cta">
                <span className="btn btn-primary" onClick={() => go('contact')}>Reserve GPUs →</span>
                <span className="btn btn-ghost" onClick={() => go('contact')}>Scope a build</span>
              </div>
            </div>
          </div>

          <section>
            <div className="wrap">
              <div className="sec-head"><div className="eyebrow">Why Aurora GPU</div><h2>Fast lead times. Reliable delivery.</h2><p>A managed new build, scoped to your workload and operated end to end — so your team runs models, not infrastructure.</p></div>
              <div className="grid g4">
                <div className="card"><div className="ic">⚡</div><h3>Fast lead times</h3><p>Clusters live in weeks: CPU ~8 wks, 8-node GPU ~12 wks, 32-node ~16 wks.</p></div>
                <div className="card"><div className="ic">◆</div><h3>Reliable delivery</h3><p>Aurora operates what it builds — 99.9% uptime, 24×7 operations.</p></div>
                <div className="card"><div className="ic">⛭</div><h3>Fully managed</h3><p>End to end, no DIY. From power and fabric to Kubernetes handoff.</p></div>
                <div className="card"><div className="ic">▤</div><h3>Latest hardware</h3><p>B200, B300, GB300 with 800G InfiniBand and GPU-aware Kubernetes.</p></div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="sec-head"><div className="eyebrow">Hardware &amp; rental</div><h2>Choose the right GPU for your workload.</h2></div>
              <div className="tbl-wrap">
                <table>
                  <thead>
                    <tr><th>Platform</th><th>GPU memory</th><th>Best for</th><th>Interconnect</th><th>Rate</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>B300</td><td>288 GB HBM3e</td><td>High-memory LLM training &amp; inference</td><td>800G IB XDR</td><td className="price">$4.00 / GPU-hr</td></tr>
                    <tr><td>GB300</td><td>NVL72 rack-scale</td><td>Frontier-scale training &amp; inference</td><td>NVLink + 800G IB</td><td className="price">$4.50 / GPU-hr</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="sec-head"><div className="eyebrow">What &quot;managed&quot; includes</div><h2>Operated end to end, 24×7.</h2><p>Every GPU engagement includes the full operational stack — not just the hardware.</p></div>
              <div className="grid g2">
                <div className="card"><h3>24×7 infrastructure operations</h3><p>Continuous monitoring, fault and alert management, incident triage, and escalation.</p></div>
                <div className="card"><h3>Onsite datacenter &amp; break/fix</h3><p>Hardware troubleshooting, FRU replacement, RMA coordination, and smart hands.</p></div>
                <div className="card"><h3>Cluster operations &amp; administration</h3><p>Health monitoring, bring-up and validation, firmware/driver, and patch coordination.</p></div>
                <div className="card"><h3>InfiniBand &amp; Ethernet fabric ops</h3><p>Fabric monitoring, fault isolation, and performance and stability management.</p></div>
                <div className="card"><h3>Incident &amp; problem management</h3><p>Severity process, root-cause analysis, and OEM/vendor escalation.</p></div>
                <div className="card"><h3>Readiness &amp; governance</h3><p>Runbooks, weekly/monthly reporting, and KPI/SLA service reviews.</p></div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="ctaband">
                <h2>Managed GPU infrastructure, ready to deploy.</h2>
                <p>Share your requirements and we&apos;ll scope the build.</p>
                <div className="hero-cta">
                  <span className="btn btn-primary" onClick={() => go('contact')}>Reserve GPUs →</span>
                  <span className="btn btn-ghost" onClick={() => go('contact')}>Scope a build</span>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* STORAGE */}
        <section className={pc('storage')} id="storage" style={{padding:0,border:'none'}}>
          <div className="hero">
            <div className="wrap">
              <div className="eyebrow">AI Storage</div>
              <h1>Storage built for AI workloads.</h1>
              <p className="lead">High performance to keep GPUs fed, high density to scale economically — one platform that places data automatically where it belongs.</p>
              <div className="hero-cta"><span className="btn btn-primary" onClick={() => go('contact')}>Talk to the storage team →</span></div>
            </div>
          </div>

          <section>
            <div className="wrap">
              <div className="sec-head"><div className="eyebrow">One platform, automatically tiered</div><h2>Fast for live workloads. Efficient at scale.</h2><p>One AI Storage platform places data on the right media on its own — high-performance media keeps GPUs fed, high-density media holds everything else economically.</p></div>
              <div className="grid g2">
                <div className="card">
                  <div className="ic">⚡</div><h3>High-performance</h3>
                  <p>Parallel, GPU-tuned file systems that keep clusters fed during training and inference — built on the platforms your workloads already trust.</p>
                  <div className="tags"><span className="pill">Weka</span><span className="pill">DDN</span><span className="pill">GPFS</span><span className="pill">VAST</span></div>
                </div>
                <div className="card">
                  <div className="ic">▤</div><h3>High-density</h3>
                  <p>Capacity-optimized storage for data lakes, checkpoints, and archives — at the lowest cost and power per terabyte.</p>
                  <div className="tags"><span className="pill">Lowest $/TB</span><span className="pill">Low watts/TB</span><span className="pill">Archive-ready</span></div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap split">
              <div>
                <div className="eyebrow">Why it matters</div>
                <h2>Idle GPUs are the most expensive thing in your data center.</h2>
                <p>Storage that can&apos;t keep up stalls training and drags down inference. Aurora AI Storage delivers predictable throughput under sustained load, then moves cold data to denser media automatically to control cost as datasets grow.</p>
                <p>A single namespace spans high-performance and high-density media, with lifecycle policies moving data between them — no manual migration, no second system to manage.</p>
              </div>
              <div className="panel-box">
                <div className="feat"><div className="tick">✓</div><div><h4>Single namespace</h4><p>Performance and density media, one address space.</p></div></div>
                <div className="feat"><div className="tick">✓</div><div><h4>Automatic lifecycle</h4><p>Data moves to the right media on policy.</p></div></div>
                <div className="feat"><div className="tick">✓</div><div><h4>File, block, and object</h4><p>Mount it the way your workload expects.</p></div></div>
                <div className="feat"><div className="tick">✓</div><div><h4>Managed &amp; monitored</h4><p>Performance tuning, capacity planning, SLA.</p></div></div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="sec-head center"><div className="eyebrow">Use cases</div><h2>What runs on Aurora AI Storage.</h2></div>
              <div className="grid g4">
                <div className="card"><h3>AI data lake</h3><p>Training datasets at scale, fed to GPUs without stalls.</p></div>
                <div className="card"><h3>Checkpoints</h3><p>Fast, frequent training checkpoints on high-performance media.</p></div>
                <div className="card"><h3>Inference memory</h3><p>Durable state and outputs behind stateful inference and agents.</p></div>
                <div className="card"><h3>Backup &amp; archive</h3><p>Cost-efficient long-term retention on high-density media.</p></div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="ctaband">
                <h2>Keep your GPUs fed.</h2>
                <p>Let&apos;s size the right storage for your workload.</p>
                <div className="hero-cta"><span className="btn btn-primary" onClick={() => go('contact')}>Talk to the storage team →</span></div>
              </div>
            </div>
          </section>
        </section>

        {/* EDGE */}
        <section className={pc('edge')} id="edge" style={{padding:0,border:'none'}}>
          <div className="hero">
            <div className="wrap">
              <div className="eyebrow">Edge Inference</div>
              <h1>Fast inference at the edge.</h1>
              <p className="lead">Milliseconds from your users, devices, and data. Aurora runs optimized models on distributed nodes close to where data is generated — then feeds back to the core for training and aggregation.</p>
              <div className="hero-cta"><span className="btn btn-primary" onClick={() => go('contact')}>Scope an edge deployment →</span></div>
            </div>
          </div>

          <section>
            <div className="wrap split">
              <div>
                <div className="eyebrow">The need</div>
                <h2>Some workloads can&apos;t wait for the round trip.</h2>
                <p>Real-time, latency-critical, and bandwidth-heavy workloads can&apos;t afford the trip to a centralized region. Edge inference puts the model next to the data — cutting latency, reducing backhaul, and staying responsive even when connectivity is intermittent.</p>
              </div>
              <div className="panel-box">
                <div className="feat"><div className="tick">✓</div><div><h4>Ultra-low latency</h4><p>Inference within milliseconds of the source.</p></div></div>
                <div className="feat"><div className="tick">✓</div><div><h4>Local processing</h4><p>Keep heavy data flows off the backhaul.</p></div></div>
                <div className="feat"><div className="tick">✓</div><div><h4>Resilient by design</h4><p>Keeps serving through intermittent connectivity.</p></div></div>
                <div className="feat"><div className="tick">✓</div><div><h4>Fleet management</h4><p>Operate many sites from one control plane.</p></div></div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="sec-head center"><div className="eyebrow">Workloads</div><h2>Built for real-time intelligence.</h2></div>
              <div className="grid g3">
                <div className="card"><h3>Vision &amp; video</h3><p>Real-time detection, analytics, and streaming inference.</p></div>
                <div className="card"><h3>Robotics &amp; IoT</h3><p>On-site decisioning for devices and autonomous systems.</p></div>
                <div className="card"><h3>Telco &amp; 5G</h3><p>Inference at the network edge for low-latency services.</p></div>
                <div className="card"><h3>Retail</h3><p>In-store intelligence without backhauling every frame.</p></div>
                <div className="card"><h3>Industrial</h3><p>Quality, safety, and predictive workloads on the floor.</p></div>
                <div className="card"><h3>Hub-and-spoke</h3><p>Edge nodes infer; the Aurora core trains and aggregates.</p></div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="sec-head"><div className="eyebrow">Deployment</div><h2>Run it where you need it.</h2></div>
              <div className="grid g3">
                <div className="card"><h3>Aurora micro-DC pods</h3><p>Compact, deployable inference pods placed close to demand.</p></div>
                <div className="card"><h3>Partner sites</h3><p>Edge capacity hosted across a partner footprint.</p></div>
                <div className="card"><h3>Customer premises</h3><p>On-site nodes within your own facilities.</p></div>
              </div>
            </div>
          </section>

          <section>
            <div className="wrap">
              <div className="ctaband">
                <h2>Bring inference to the edge.</h2>
                <p>Tell us where your latency lives — we&apos;ll scope it.</p>
                <div className="hero-cta"><span className="btn btn-primary" onClick={() => go('contact')}>Scope an edge deployment →</span></div>
              </div>
            </div>
          </section>
        </section>

        {/* RESOURCES */}
        <section className={pc('resources')} id="resources" style={{padding:0,border:'none'}}>
          <div className="hero">
            <div className="wrap">
              <div className="eyebrow">Resources</div>
              <h1>News, docs, and customer stories.</h1>
              <p className="lead">How teams build production AI infrastructure with Aurora.</p>
            </div>
          </div>
          <section>
            <div className="wrap">
              <div className="grid g3">
                <div className="card"><div className="eyebrow">Blog</div><h3>News &amp; insights</h3><p>Perspectives on GPU infrastructure, inference, and AI storage.</p><span className="more">Read the blog →</span></div>
                <div className="card"><div className="eyebrow">Docs</div><h3>Documentation</h3><p>Guides and API references for AI Cloud, GPU, and storage.</p><span className="more">Open docs →</span></div>
                <div className="card"><div className="eyebrow">Customers</div><h3>Case studies</h3><p>How teams deploy and scale production AI on Aurora.</p><span className="more">See customers →</span></div>
              </div>
            </div>
          </section>
        </section>

        {/* CONTACT */}
        <section className={pc('contact')} id="contact" style={{padding:0,border:'none'}}>
          <div className="hero">
            <div className="wrap">
              <div className="eyebrow">Contact</div>
              <h1>Let&apos;s scope your deployment.</h1>
              <p className="lead">Tell us what you&apos;re building — GPU clusters, inference, agents, storage, or edge — and Aurora&apos;s team will scope the right engagement and indicative plan.</p>
              <div className="grid g2" style={{marginTop:'30px'}}>
                <div className="panel-box">
                  <h3>Talk to Sales</h3>
                  <p>Share your requirements and we&apos;ll come back with a scoped plan.</p>
                  <span className="btn btn-primary" style={{marginTop:'6px'}}>Connect with Aurora →</span>
                </div>
                <div className="panel-box">
                  <h3>Reserve GPUs</h3>
                  <p>Current capacity is ready to deploy as fast as you are.</p>
                  <span className="btn btn-ghost" style={{marginTop:'6px'}}>Reserve GPUs →</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="wrap">
          <div className="foot">
            <div className="logo" onClick={() => go('home')}><span className="dot"></span> AURORA</div>
            <div className="foot-links">
              <a onClick={() => go('aicloud')}>AI Cloud</a>
              <a onClick={() => go('gpu')}>GPU</a>
              <a onClick={() => go('storage')}>Storage</a>
              <a onClick={() => go('edge')}>Edge</a>
              <a onClick={() => go('resources')}>Resources</a>
              <a onClick={() => go('contact')}>Contact</a>
            </div>
          </div>
          <div className="copyright">Aurora Infra delivers full-stack AI infrastructure — built, deployed, and operated for production. © 2026 Aurora Infra. <span className="note">Draft mockup for review.</span></div>
        </div>
      </footer>
    </>
  );
}
