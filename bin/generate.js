#! /usr/bin/env node
const [_, _bin, command, name] = process.argv

const usage = `
🏗  \x1b[4mStorybook Generator\x1b[0m

    → yarn generate <action> <PascalName>

    Actions:
    –––––––––––––––––––––––––––––––––––––––––––––––––––––––––
    component: Generates a new UI Component
        ↳ yarn generate component <ComponentName>
`

switch (command) {
    case 'component':
        return require('./lib/new-component')(name, 'components')

    default:
        return console.log(usage)
}
