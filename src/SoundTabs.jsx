import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { SoundCard } from './SoundCard';
import 'react-tabs/style/react-tabs.css';
import './SoundTabs.css';
import data from './SoundList.json';

const getDataBetweenLetters = (a, b) => {
  const retval = []

  data.forEach((item) => {
    if (item.name && item.name[0] >= a && item.name[0] <= b) {
      retval.push(item);
    }
  });

  return retval;
}

export const SoundTabs = () => {
  const tabNames = [
    'A-K',
    'L-O',
    'P-T',
    'Q-V',
    'W-Z'
  ];
  return (
    <Tabs>
      <TabList>
        {tabNames.map((name, i) => <Tab className="custom-tab-default" selectedClassName="custom-tab-selected">{name}</Tab>)}
      </TabList>

      <TabPanel>
        <div className='panelContent'>
          {getDataBetweenLetters('a', 'k').map((item) => <SoundCard name={item.name} soundName={item.fileName} />)}
        </div>
      </TabPanel>
      <TabPanel>
        <div className='panelContent'>
          {getDataBetweenLetters('l', 'o').map((item) => <SoundCard name={item.name} soundName={item.fileName} />)}
        </div>
      </TabPanel>
      <TabPanel>
        <div className='panelContent'>
          {getDataBetweenLetters('p', 't').map((item) => <SoundCard name={item.name} soundName={item.fileName} />)}
        </div>
      </TabPanel>
      <TabPanel>
        <div className='panelContent'>
          {getDataBetweenLetters('q', 'v').map((item) => <SoundCard name={item.name} soundName={item.fileName} />)}
        </div>
      </TabPanel>
      <TabPanel>
        <div className='panelContent'>
          {getDataBetweenLetters('w', 'z').map((item) => <SoundCard name={item.name} soundName={item.fileName} />)}
        </div>
      </TabPanel>
    </Tabs>);
};