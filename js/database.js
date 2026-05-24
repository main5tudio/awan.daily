/* =========================================
   DATABASE & AUTO-SAVE LOGIC
   ========================================= */

// Load existing data or set defaults
window.AppData = JSON.parse(localStorage.getItem('pratigahara_db')) || {
  projects: [ 
    { 
      id: 'p1', title: 'Tani App', color: '#2d9e6b', 
      desc: 'Project paragraph of descriptions...', 
      activeStepIndex: 0,
      stepsData: [{ title: "Sketsa Fungsi", tasks: [{desc: "Intro", done: true}] }],
      links: [], kanbans: [], shops: []
    },
    { 
      id: 'p2', title: 'TACLINE', color: '#5b4fcf', 
      desc: 'Tactical shooter 12v12 squad mechanics.', 
      activeStepIndex: 0,
      stepsData: [{ title: "Map Blockout", tasks: [] }],
      links: [], kanbans: [], shops: []
    } 
  ],
  cares: [
    { id: 'cg1', title: '>warm rice', items: [ {id: 'c1_1', label: 'today', max: 1} ] },
    { id: 'cg2', title: '>gaming', items: [ {id: 'c2_1', label: 'tacticool', max: 2} ] }
  ],
  userSettings: { pin: "2026", theme: "ghibli-pastel" }
};

// Global Save Function - Call this after any edit
window.saveSystem = () => {
  localStorage.setItem('pratigahara_db', JSON.stringify(window.AppData));
  console.log("System Sync: Done.");
};
window.saveLog = saveLog;
window.fetchUserLogs = fetchUserLogs;

