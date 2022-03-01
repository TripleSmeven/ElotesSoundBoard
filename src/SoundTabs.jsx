import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { SoundCard } from './SoundCard';
import 'react-tabs/style/react-tabs.css';
import './SoundTabs.css';

export const SoundTabs = () => (
    <Tabs>
        <TabList>
            <Tab className="custom-tab-default" selectedClassName="custom-tab-selected">Title 1</Tab>
            <Tab className="custom-tab-default" selectedClassName="custom-tab-selected">Title 2</Tab>
        </TabList>

        <TabPanel>
            <SoundCard name="Nani 1" soundName="anime_nani_1" />
            <SoundCard name="Omae wa 1" soundName="anime_omae_1" />
        </TabPanel>
        <TabPanel>
            <h2>Any content 2</h2>
        </TabPanel>
    </Tabs>
);