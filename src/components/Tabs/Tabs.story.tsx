import React from 'react'
import Tabs, { TabList, Tab, TabPanel } from '.'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/Tabs', module).add('Default', () => (
    <Tabs style={{ width: '70rem', maxWidth: '100%' }}>
        <TabList>
            <Tab>I&apos;m a tab</Tab>
            <Tab>and I&apos;m also a tab</Tab>
            <Tab>Guess who?</Tab>
            <Tab>Tab!</Tab>
            <Tab>yet another Tab 🙃</Tab>
        </TabList>

        <TabPanel>
            <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
            <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
            <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
            <h2>Any content 4</h2>
        </TabPanel>
        <TabPanel>
            <h2>Any content 5</h2>
        </TabPanel>
    </Tabs>
))
