import React from 'react'
import Image from '.'
import { storiesOf } from '@storybook/react'
import { text, number, boolean } from '@storybook/addon-knobs'

const ImageSrc1 = require('../../../public/images/banner-1.jpg')

const ImageSrc2 = require('../../../public/images/banner-2.jpg')

const ImageSrc3 = require('../../../public/images/banner-2.1.jpg')

storiesOf('📦 Components/Image', module)
    .add('Default', () => <Image alt={text('alt', 'Lorem')} src={text('src', ImageSrc1)} height={number('height', 400)} width={number('width', 600)} vignette={boolean('vignette', false)} />)
    .add('w/ srcSet & sizes', () => (
        <Image
            alt={text('alt', 'Lorem')}
            src={ImageSrc1}
            srcSet={[
                `${require('../../../public/images/banner-660.png')} 559w`,
                `${require('../../../public/images/banner-992.png')} 992w`,
                `${require('../../../public/images/banner-1920.png')} 1920w`,
            ].join(',')}
            sizes="(max-width: 599px) 100%, (min-width: 600px) 992px, (min-width: 992px) 1920px"
            vignette={boolean('vignette', false)}
        />
    ))
    .add('Broken URL', () => <Image alt={text('alt', 'Lorem')} src={text('src', 'notfound.jpeg')} height={number('height', 400)} width={number('width', 600)} vignette={boolean('vignette', false)} />)
    .add('Scroll', () => (
        <div style={{ display: 'grid', gridGap: '100vh', padding: '10rem' }}>
            <Image alt="" src={ImageSrc1} width={600} height={400} />
            <Image alt="" src={ImageSrc2} width={600} height={400} />
            <Image alt="" src={ImageSrc3} width={600} height={400} />
        </div>
    ))
