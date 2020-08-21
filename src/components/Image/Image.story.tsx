import React from 'react'
import Image from '.'
import { storiesOf } from '@storybook/react'
import { text, number, boolean } from '@storybook/addon-knobs'

const ImageSrc1 = require('../../../public/images/banner-1.jpg')
const ImageMobileSrc1 = require('../../../public/images/banner-1--mobile.jpg')
const ImageSrc2 = require('../../../public/images/banner-2.jpg')

storiesOf('📦 Components/Image', module)
    .add('Default', () => <Image alt={text('alt', 'Lorem')} src={text('src', ImageSrc1)} height={number('height', 400)} width={number('width', 600)} vignette={boolean('vignette', false)} />)
    .add('w/o Lazy', () => (
        <Image alt={text('alt', 'Lorem')} src={text('src', ImageSrc1)} height={number('height', 400)} width={number('width', 600)} vignette={boolean('vignette', false)} lazy={false} />
    ))
    .add('w/ srcSet', () => (
        <Image
            alt={text('alt', 'Lorem')}
            src={text('src', ImageMobileSrc1)}
            srcSet={text('srcSet', `${ImageMobileSrc1} 992w, ${ImageSrc1} 1920w`)}
            sizes={text('sizes', '(max-width: 991px) 100%, (min-width: 992px) 1920px')}
            width={number('width', 600)}
            height={number('height', 400)}
            vignette={boolean('vignette', false)}
        />
    ))
    .add('Broken URL', () => <Image alt={text('alt', 'Lorem')} src={text('src', 'notfound.jpeg')} height={number('height', 400)} width={number('width', 600)} vignette={boolean('vignette', false)} />)
    .add('Scroll', () => (
        <div style={{ display: 'grid', gridGap: '100vh', padding: '10rem' }}>
            <Image alt="" src={ImageSrc1} height={400} width={600} />
            <Image alt="" src={ImageSrc2} height={400} width={600} />
        </div>
    ))
