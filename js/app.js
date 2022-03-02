const tabs = ['bulbasaur-tab', 'charmander-tab', 'squirtle-tab', 'pikachu-tab'];
const sections = ['bulbasaur', 'charmander', 'squirtle', 'pikachu'];

const sectRemove = (tab,sectKeep) => {
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i] !== tab) {
      document.getElementById(tabs[i]).style.background = 'rgb(110, 110, 110)';
    }
    if (sections[i] !== sectKeep) {
      document.getElementById(sections[i]).style.display = 'none';
    }
    
  }
}

const tabDisplay = (tab, sect, func) => {
  document.getElementById(tab).addEventListener('click', () => {
    document.getElementById(tab).style.backgroundColor = 'rgb(75, 75, 75)';
    document.getElementById(sect).style.display = 'flex';
    func(tab, sect);
  })
  
}

for (let i = 0; i < tabs.length; i++) {
  tabDisplay(tabs[i], sections[i], sectRemove)
}


