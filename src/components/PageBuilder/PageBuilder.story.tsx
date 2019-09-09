import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageBuilder } from './'
import { select } from '@storybook/addon-knobs'

export const PageBuilderBlockMock = `<div data-content-type=\"row\" data-appearance=\"full-width\" data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"main\" style=\"justify-content: center; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; min-height: 200px; margin: 0px; padding: 10px;\"><div class=\"row-full-width-inner\" data-element=\"inner\"><div data-content-type=\"block\" data-appearance=\"default\" data-element=\"main\" style=\"border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 0px;\"><div class=\"widget block block-static-block\">\n    <div class=\"contact-info cms-content\">\n   <p class=\"cms-content-important\">We love hearing from you, our Luma customers. Please contact us about anything at all. Your latest passion, unique health experience or request for a specific product. We’ll do everything we can to make your Luma experience unforgettable every time. Reach us however you like</p>\n   <div class=\"block block-contact-info\">\n       <div class=\"block-title\">\n           <strong>Contact Us Info</strong>\n       </div>\n       <div class=\"block-content\">\n           <div class=\"box box-phone\">\n               <strong class=\"box-title\">\n                   <span>Phone</span>\n               </strong>\n               <div class=\"box-content\">\n                   <span class=\"contact-info-number\">1-800-403-8838</span>\n                   <p>Call the Luma Helpline for concerns, product questions, or anything else. We’re here for you 24 hours a day - 365 days a year.</p>\n               </div>\n           </div>\n           <div class=\"box box-design-inquiries\">\n               <strong class=\"box-title\">\n                   <span>Apparel Design Inquiries</span>\n               </strong>\n               <div class=\"box-content\">\n                   <p>Are you an independent clothing designer? Feature your products on the Luma website! Please direct all inquiries via email to: <a href=\"mailto:cs@luma.com\">cs@luma.com</a></p>\n               </div>\n           </div>\n           <div class=\"box box-press-inquiries\">\n               <strong class=\"box-title\">\n                   <span>Press Inquiries</span>\n               </strong>\n               <div class=\"box-content\">\n                   <p>Please direct all media inquiries via email to: <a href=\"mailto:pr@luma.com\">pr@luma.com</a></p>\n               </div>\n           </div>\n       </div>\n   </div>\n</div>\n</div>\n</div></div></div>`
export const PageBuilderButtonsMock = `<div data-content-type=\"row\" data-appearance=\"full-width\" data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"main\" style=\"justify-content: center; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; min-height: 200px; margin: 0px; padding: 10px;\"><div class=\"row-full-width-inner\" data-element=\"inner\"><div data-content-type=\"buttons\" data-appearance=\"inline\" data-same-width=\"false\" data-element=\"main\" style=\"border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 10px 10px 0px;\"><div data-content-type=\"button-item\" data-appearance=\"default\" data-element=\"main\" style=\"display: inline-block;\"><div class=\"pagebuilder-button-primary\" data-element=\"empty_link\" style=\"text-align: center;\"><span data-element=\"link_text\">Primary Button</span></div></div><div data-content-type=\"button-item\" data-appearance=\"default\" data-element=\"main\" style=\"display: inline-block;\"><div class=\"pagebuilder-button-secondary\" data-element=\"empty_link\" style=\"text-align: center;\"><span data-element=\"link_text\">Secondary Button</span></div></div><div data-content-type=\"button-item\" data-appearance=\"default\" data-element=\"main\" style=\"display: inline-block;\"><a class=\"pagebuilder-button-link\" href=\"https://magento.com\" target=\"_blank\" data-link-type=\"default\" data-element=\"link\" style=\"text-align: center;\"><span data-element=\"link_text\">Magento.com&nbsp;</span></a></div></div></div></div>`
export const PageBuilderButtonsStackedMock = `<div data-content-type=\"row\" data-appearance=\"full-width\" data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"main\" style=\"justify-content: center; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; min-height: 200px; margin: 0px; padding: 10px;\"><div class=\"row-full-width-inner\" data-element=\"inner\"><div data-content-type=\"buttons\" data-appearance=\"stacked\" data-same-width=\"true\" data-element=\"main\" style=\"border-style: none; border-width: 1px; border-radius: 0px; display: flex; margin: 0px; padding: 10px 10px 0px; flex-direction: column;\"><div data-content-type=\"button-item\" data-appearance=\"default\" data-element=\"main\" style=\"display: inline-block;\"><div class=\"pagebuilder-button-primary\" data-element=\"empty_link\" style=\"text-align: center;\"><span data-element=\"link_text\">Primary Button</span></div></div><div data-content-type=\"button-item\" data-appearance=\"default\" data-element=\"main\" style=\"display: inline-block;\"><div class=\"pagebuilder-button-secondary\" data-element=\"empty_link\" style=\"text-align: center;\"><span data-element=\"link_text\">Secondary Button</span></div></div><div data-content-type=\"button-item\" data-appearance=\"default\" data-element=\"main\" style=\"display: inline-block;\"><a class=\"pagebuilder-button-link\" href=\"https://magento.com\" target=\"_blank\" data-link-type=\"default\" data-element=\"link\" style=\"text-align: center;\"><span data-element=\"link_text\">Magento.com&nbsp;</span></a></div></div></div></div>`
export const PageBuilderColumnMock = `<div data-content-type=\"row\" data-appearance=\"full-width\" data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"main\" style=\"justify-content: center; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 10px;\"><div class=\"row-full-width-inner\" data-element=\"inner\"><div class=\"pagebuilder-column-group\" style=\"display: flex;\" data-content-type=\"column-group\" data-grid-size=\"12\" data-element=\"main\"><div class=\"pagebuilder-column\" data-content-type=\"column\" data-appearance=\"full-height\" data-background-images=\"{\\&quot;desktop_image\\&quot;:\\&quot;${require('../../../public/images/banner-1.jpg')}\\&quot;}\" data-element=\"main\" style=\"justify-content: flex-start; display: flex; flex-direction: column; background-color: rgb(229, 199, 212); background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; min-height: 600px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;\"></div><div class=\"pagebuilder-column\" data-content-type=\"column\" data-appearance=\"full-height\" data-background-images=\"{\\&quot;desktop_image\\&quot;:\\&quot;${require('../../../public/images/banner-1.jpg')}\\&quot;}\" data-element=\"main\" style=\"justify-content: flex-start; display: flex; flex-direction: column; background-color: rgb(208, 200, 227); background-position: right top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch; min-height: 600px;\"></div></div></div></div>`
export const PageBuilderDividerMock = `<div data-content-type=\"row\" data-appearance=\"contained\" data-element=\"main\"><div data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"inner\" style=\"justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; margin: 0px 0px 10px; padding: 10px;\"><div data-content-type=\"divider\" data-appearance=\"default\" data-element=\"main\" style=\"border-style: none; border-color: rgb(252, 0, 9); border-width: 1px; margin: 0px; padding: 10px;\"><hr data-element=\"line\" style=\"width: 100%; border-width: 2px; border-color: rgb(135, 135, 135); display: inline-block;\"></div></div></div>`
export const PageBuilderHeadingMock = `<div data-content-type=\"row\" data-appearance=\"full-width\" data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"main\" style=\"justify-content: center; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; min-height: 200px; margin: 0px; padding: 10px;\"><div class=\"row-full-width-inner\" data-element=\"inner\"><h1 data-content-type=\"heading\" data-appearance=\"default\" data-element=\"main\" style=\"text-align: center; border-style: none; border-width: 1px; border-radius: 0px;\">Tsamina mina zangalewa</h1></div></div>`
export const PageBuilderHtmlMock = `<div data-content-type=\"row\" data-appearance=\"contained\" data-element=\"main\"><div data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"inner\" style=\"justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; margin: 0px 0px 10px; padding: 10px;\"><div data-content-type=\"html\" data-appearance=\"default\" data-element=\"main\" style=\"text-align: left; border-style: none; border-color: rgb(135, 135, 135); border-width: 1px; margin: 0px; padding: 0px;\">&lt;pre&gt;\r\n&lt;code&gt;\r\nimport React from 'react'\r\nimport { Component } from '../../../../lib'\r\nimport { Root } from './Html.styled'\r\n\r\nimport HtmlComponent, { HtmlProps as HtmlComponentProps } from '../../../Html'\r\n\r\nexport type HtmlProps = HtmlComponentProps\r\n\r\nexport export const PageBuilderHtmlMock: Component&lt;HtmlProps&gt; = ({ children, ...props }) =&gt; {\r\n    return &lt;Root as={HtmlComponent} {...props} /&gt;\r\n}\r\n&lt;/code&gt;\r\n&lt;/pre&gt;</div></div></div>`
export const PageBuilderImageMock = `<div data-content-type=\"row\" data-appearance=\"contained\" data-element=\"main\"><div data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"inner\" style=\"justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; margin: 0px 0px 10px; padding: 10px;\"><figure data-content-type=\"image\" data-appearance=\"full-width\" data-element=\"main\" style=\"margin: 0px; padding: 0px; border-style: none;\"><a href=\"https://magento.com\" target=\"_blank\" data-link-type=\"default\" title=\"Test Title\" data-element=\"link\"><img class=\"pagebuilder-mobile-hidden\" src=\"${require('../../../public/images/banner-1.jpg')}\" alt=\"Test Alt\" title=\"Test Title\" data-element=\"desktop_image\" style=\"border-style: none; border-width: 1px; border-radius: 10px; max-width: 100%; height: auto;\"><img class=\"pagebuilder-mobile-only\" src=\"${require('../../../public/images/banner-1--mobile.jpg')}\" alt=\"Test Alt\" title=\"Test Title\" data-element=\"mobile_image\" style=\"border-style: none; border-width: 1px; border-radius: 10px; max-width: 100%; height: auto;\"></a><figcaption data-element=\"caption\">An example of a caption is a descriptive title under a photograph. 🤓</figcaption></figure></div></div>`
export const PageBuilderRowMock = `<div data-content-type=\"row\" data-appearance=\"contained\" data-element=\"main\"><div data-enable-parallax=\"1\" data-parallax-speed=\"0.5\" data-background-images=\"{\\&quot;desktop_image\\&quot;:\\&quot;${require('../../../public/images/banner-1.jpg')}\\&quot;,\\&quot;mobile_image\\&quot;:\\&quot;${require('../../../public/images/banner-1--mobile.jpg')}\\&quot;}\" data-element=\"inner\" style=\"justify-content: flex-start; display: flex; flex-direction: column; background-color: rgb(251, 223, 194); background-position: center; background-size: cover; background-repeat: repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; margin: 0px 0px 10px; padding: 0px; min-height: 600px;\"></div></div>`
export const PageBuilderTabsMock = `<div data-content-type=\"row\" data-appearance=\"full-width\" data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"main\" style=\"justify-content: center; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 10px;\"><div class=\"row-full-width-inner\" data-element=\"inner\"><div class=\"tab-align-left\" data-content-type=\"tabs\" data-appearance=\"default\" data-active-tab=\"0\" data-element=\"main\" style=\"margin: 0px; padding: 0px;\"><ul role=\"tablist\" class=\"tabs-navigation\" data-element=\"navigation\" style=\"text-align: left;\"><li role=\"tab\" class=\"tab-header\" data-element=\"headers\" style=\"border-radius: 0px; border-width: 1px;\"><a href=\"#AY6DDI3\" class=\"tab-title\"><span class=\"tab-title\">One</span></a></li><li role=\"tab\" class=\"tab-header\" data-element=\"headers\" style=\"border-radius: 0px; border-width: 1px;\"><a href=\"#L472Q0V\" class=\"tab-title\"><span class=\"tab-title\">Two</span></a></li></ul><div class=\"tabs-content\" data-element=\"content\" style=\"border-width: 1px; border-radius: 0px;\"><div data-content-type=\"tab-item\" data-appearance=\"default\" data-tab-name=\"One\" data-background-images=\"{\\&quot;desktop_image\\&quot;:\\&quot;${require('../../../public/images/banner-1.jpg')}\\&quot;}\" data-element=\"main\" id=\"AY6DDI3\" style=\"justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-width: 1px; border-radius: 0px; margin: 0px; padding: 40px; min-height: 400px;\"></div><div data-content-type=\"tab-item\" data-appearance=\"default\" data-tab-name=\"Two\" data-background-images=\"{}\" data-element=\"main\" id=\"L472Q0V\" style=\"justify-content: flex-start; display: flex; flex-direction: column; background-color: rgb(234, 234, 234); background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-width: 1px; border-radius: 0px; margin: 0px; padding: 40px;\"><h2 data-content-type=\"heading\" data-appearance=\"default\" data-element=\"main\" style=\"border-style: none; border-width: 1px; border-radius: 0px;\">Test</h2></div></div></div></div></div>`
export const PageBuilderTextMock = `<div data-content-type=\"row\" data-appearance=\"full-width\" data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"main\" style=\"justify-content: center; display: flex; flex-direction: column; background-color: transparent; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; min-height: 200px; margin: 0px; padding: 0px;\"><div class=\"row-full-width-inner\" data-element=\"inner\"><div data-content-type=\"text\" data-appearance=\"default\" data-element=\"main\" style=\"border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 0px;\"><h1 style=\"text-align: center;\">Hola!</h1>\r\n<p id=\"output\" class=\"page-generator__lorem\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div></div></div>`
export const PageBuilderVideoVimeoMock = `<div data-content-type=\"row\" data-appearance=\"full-width\" data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"main\" style=\"justify-content: center; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; min-height: 200px; margin: 0px; padding: 10px;\"><div class=\"row-full-width-inner\" data-element=\"inner\"><div data-content-type=\"video\" data-appearance=\"default\" data-element=\"main\" style=\"margin: 0px;\"><div class=\"pagebuilder-video-inner\" data-element=\"inner\"><div class=\"pagebuilder-video-wrapper\" data-element=\"wrapper\" style=\"border-style: none; border-width: 1px; border-radius: 0px; padding: 0px;\"><div class=\"pagebuilder-video-container\"><iframe frameborder=\"0\" allowfullscreen=\"\" src=\"https://player.vimeo.com/video/1084537?title=0&amp;byline=0&amp;portrait=0\" data-element=\"video\"></iframe></div></div></div></div></div></div>`
export const PageBuilderVideoYouTubeMock = `<div data-content-type=\"row\" data-appearance=\"full-width\" data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"main\" style=\"justify-content: center; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; min-height: 200px; margin: 0px; padding: 10px;\"><div class=\"row-full-width-inner\" data-element=\"inner\"><div data-content-type=\"video\" data-appearance=\"default\" data-element=\"main\" style=\"margin: 0px;\"><div class=\"pagebuilder-video-inner\" data-element=\"inner\"><div class=\"pagebuilder-video-wrapper\" data-element=\"wrapper\" style=\"border-style: none; border-width: 1px; border-radius: 0px; padding: 0px;\"><div class=\"pagebuilder-video-container\"><iframe frameborder=\"0\" allowfullscreen=\"\" src=\"https://www.youtube.com/embed/aqz-KE-bpKQ\" data-element=\"video\"></iframe></div></div></div></div></div></div>`

storiesOf('📦 Components/PageBuilder', module).add('Default', () => {
    const html = select(
        'Content Type',
        {
            Block: PageBuilderBlockMock,
            Buttons: PageBuilderButtonsMock,
            'Buttons (stacked)': PageBuilderButtonsStackedMock,
            Column: PageBuilderColumnMock,
            Divider: PageBuilderDividerMock,
            Heading: PageBuilderHeadingMock,
            Html: PageBuilderHtmlMock,
            Image: PageBuilderImageMock,
            Row: PageBuilderRowMock,
            Tabs: PageBuilderTabsMock,
            Text: PageBuilderTextMock,
            'Video (Vimeo)': PageBuilderVideoVimeoMock,
            'Video (YouTube)': PageBuilderVideoYouTubeMock,
        },
        PageBuilderRowMock
    )

    return <PageBuilder html={html} />
})
