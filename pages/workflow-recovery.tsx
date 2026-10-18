import Head from "next/head";

export default function WorkflowRecovery() {
  const email = "main@clinopilot.com";
  const subject = "Workflow Recovery Sprint - scope request";
  const body = "Hello Clinopilot,\n\nOrganization:\nMy role:\nWorkflow to review:\nWhat is going wrong or taking too long:\nDesired start date:\nBudget owner:\n\nPlease send the written scope, service terms, and next steps.";
  const inquiry = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const checkout = "https://buy.stripe.com/bJe9ASbru0UP6f72Vg3oA0c";
  return <>
    <Head><title>Workflow Recovery Sprint | Clinopilot</title><meta name="description" content="A fixed-scope healthcare workflow review with prioritized risks and a practical 30-day improvement plan."/><meta name="viewport" content="width=device-width, initial-scale=1"/></Head>
    <main style={{background:"#f6f8fa",color:"#142333",minHeight:"100vh",fontFamily:"Arial, sans-serif"}}>
      <div style={{maxWidth:900,margin:"auto",padding:"44px 22px"}}>
        <header style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:20,flexWrap:"wrap"}}><strong style={{fontSize:22}}>Clinopilot</strong><a href="https://clinopilot.com/evidence/" style={{color:"#176e73"}}>Explore evidence portal</a></header>
        <section style={{padding:"75px 0 45px"}}>
          <p style={{color:"#176e73",fontWeight:700,letterSpacing:2}}>FIXED-SCOPE WORKFLOW REVIEW</p>
          <h1 style={{fontSize:"clamp(36px,6vw,64px)",lineHeight:1.06,maxWidth:760,margin:"16px 0"}}>One broken handoff. A clearer way forward.</h1>
          <p style={{fontSize:21,lineHeight:1.6,maxWidth:690}}>If your clinic or healthtech team keeps chasing the same referral, repeating the same task, or wondering who owns the next step, we'll review one workflow and give you a prioritized action plan.</p>
          <p style={{fontSize:32,fontWeight:700}}>US $1,500 <span style={{fontSize:15,fontWeight:400}}>plus applicable taxes</span></p>
          <a href={inquiry} style={{display:"inline-block",background:"#176e73",color:"white",padding:"17px 26px",borderRadius:8,textDecoration:"none",fontWeight:700}}>Request a fixed-scope review</a>
          <p style={{fontSize:14,color:"#52616b"}}>No patient records or production-system access required. Scope and terms agreed before payment.</p>
        </section>
        <section style={{background:"white",padding:28,borderRadius:14,marginBottom:25}}>
          <h2>What you receive</h2>
          <ul style={{fontSize:18,lineHeight:2}}><li>One current-state workflow map</li><li>Up to five prioritized handoff, ownership or rework risks</li><li>Evidence-informed recommendations</li><li>A practical 30-day action plan</li><li>One 45-minute handover</li></ul>
          <p><strong>Delivery target:</strong> five business days after written scope approval and receipt of agreed process-only inputs.</p>
        </section>
        <section style={{padding:"10px 0 25px"}}><h2>Example: referral follow-up</h2><p style={{fontSize:18,lineHeight:1.6}}>We trace referral created → owner assigned → receiving team confirms → patient contacted → next step documented. The review identifies where ownership or evidence of completion is unclear. This is an illustrative example, not a claim about a real client.</p></section>
        <section style={{background:"white",padding:28,borderRadius:14,marginBottom:25}}>
          <h2>How it works</h2><p>1. Email a short description of one operational problem.</p><p>2. We confirm the scope, dates, privacy boundary, applicable taxes, and cancellation terms in writing.</p><p>3. You approve the engagement and pay securely.</p><p>4. We review the agreed process inputs and deliver the report and handover.</p>
          <a href={inquiry} style={{display:"inline-block",background:"#176e73",color:"white",padding:"15px 23px",borderRadius:8,textDecoration:"none"}}>Request scope and terms</a>
        </section>
        <section style={{padding:"10px 0 25px"}}><h2>Frequently asked</h2><h3>Do you need patient data?</h3><p>No. We work from process descriptions, synthetic examples, and aggregate operational information.</p><h3>Will you fix our software?</h3><p>No. This is an assessment and prioritized plan, not implementation or integration.</p><h3>Can we pay now?</h3><p>First confirm written scope, delivery dates, applicable tax, and cancellation terms. After acceptance, use the secure payment link below.</p><a href={checkout} style={{color:"#176e73"}}>Secure Stripe payment (after written agreement)</a></section>
        <footer style={{borderTop:"1px solid #d4dce0",paddingTop:24,fontSize:14}}>Clinopilot Inc. · <a href="mailto:main@clinopilot.com">main@clinopilot.com</a> · Operational decision support, not clinical advice.</footer>
      </div>
    </main>
  </>;
}
