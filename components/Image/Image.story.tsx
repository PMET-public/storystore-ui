import React from 'react'
import Image from '.'
import { storiesOf } from '@storybook/react'
import { text, number, boolean } from '@storybook/addon-knobs'

// @ts-ignore
import ImageSrc1 from '../../public/images/banner-1.jpg'
// @ts-ignore
import ImageMobileSrc1 from '../../public/images/banner-1--mobile.jpg'
// @ts-ignore
import ImageSrc2 from '../../public/images/banner-2.jpg'

storiesOf('📦 Components/Image', module)
    .add('Default', () => <Image alt={text('alt', 'Lorem')} src={text('src', ImageSrc1)} height={number('height', 400)} width={number('width', 600)} vignette={boolean('vignette', false)} />)
    .add('w/ Mobile Image', () => (
        <Image
            alt={text('alt', 'Lorem')}
            src={{
                mobile: ImageMobileSrc1,
                desktop: ImageSrc1,
            }}
            height={number('height', 400)}
            width={number('width', 600)}
            vignette={boolean('vignette', false)}
        />
    ))
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
