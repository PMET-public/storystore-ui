import React from 'react'
import Image from '.'
import { storiesOf } from '@storybook/react'
import { text, number, boolean } from '@storybook/addon-knobs'

const ImageSrc1 = require('../../../public/images/banner-1.jpg')
const ImageSrc2 = require('../../../public/images/banner-2.jpg')

storiesOf('📦 Components/Image', module)
    .add('Default', () => <Image alt={text('alt', 'Lorem')} src={text('src', ImageSrc1)} height={number('height', 400)} width={number('width', 600)} vignette={boolean('vignette', false)} />)
    .add('Broken URL', () => <Image alt={text('alt', 'Lorem')} src={text('src', 'notfound.jpeg')} height={number('height', 400)} width={number('width', 600)} vignette={boolean('vignette', false)} />)
    .add('Vertical Scroll', () => (
        <div style={{ display: 'grid', gridGap: '100vh', padding: '10rem' }}>
            <Image alt="" src={ImageSrc1} height={400} width={600} />
            <Image alt="" src={ImageSrc2} height={400} width={600} />
        </div>
    ))
    .add('Horizontal Scroll', () => (
        <div style={{ display: 'flex', width: '50%', overflow: 'scroll' }}>
            <Image alt="" src={ImageSrc1} height={400} width={600} />
            <Image alt="" src={ImageSrc2} height={400} width={600} style={{ marginLeft: '100vw' }} />
        </div>
    ))
