import React from 'react'
import Image from '.'
import { storiesOf } from '@storybook/react'
import { text, number, boolean } from '@storybook/addon-knobs'

const ImageSrc1 = require('../../../public/images/banner-1.jpg')
const ImageSrc2 = require('../../../public/images/banner-2.jpg')
const DelayedImage = 'https://deelay.me/2000/https://vignette.wikia.nocookie.net/theoffice/images/c/c5/Dwight_.jpg/revision/latest/scale-to-width-down/700'
const DelayedImageSmall = 'https://deelay.me/2000/https://vignette.wikia.nocookie.net/theoffice/images/c/c5/Dwight_.jpg/revision/latest/scale-to-width-down/400'

storiesOf('📦 Components/Image', module)
    .add('Default', () => <Image alt={text('alt', 'Lorem')} src={text('src', DelayedImage)} width={number('width', 700)} height={number('height', 934)} vignette={boolean('vignette', false)} />)

    .add('w/o W & H', () => <Image alt="" src={text('src', DelayedImage)} />)

    .add('Eager', () => (
        <picture>
            <Image lazy={false} src={DelayedImage} alt="" width={700} height={934} />
        </picture>
    ))

    .add('Breakpoints', () => (
        <picture>
            <Image sources={[<source media="(max-width: 599px)" srcSet={DelayedImageSmall} />, <source media="(min-width: 600px)" srcSet={DelayedImage} />]} src="" alt="" width={700} height={934} />
        </picture>
    ))

    .add('Breakpoints (Eager)', () => (
        <picture>
            <Image sources={[<source media="(max-width: 599px)" srcSet={DelayedImageSmall} />, <source media="(min-width: 600px)" srcSet={DelayedImage} />]} src="" alt="" width={700} height={934} />
        </picture>
    ))

    .add('Full Width', () => <Image alt="" src={DelayedImage} width={700} height={934} style={{ width: '100%', height: 'auto' }} />)

    .add('Full Width (Eager)', () => <Image lazy={false} alt="" src={DelayedImage} width={700} height={934} style={{ width: '100%', height: 'auto' }} />)

    .add('Broken URL', () => <Image alt={text('alt', 'Lorem')} src={text('src', 'notfound.jpeg')} height={number('height', 400)} width={number('width', 600)} vignette={boolean('vignette', false)} />)

    .add('Scroll', () => (
        <div style={{ display: 'grid', gridGap: '200vh', padding: '10rem' }}>
            <Image alt="" src={ImageSrc1} height={400} width={600} />
            <Image alt="" src={ImageSrc2} height={400} width={600} />
        </div>
    ))
