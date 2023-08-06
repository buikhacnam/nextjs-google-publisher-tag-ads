import { Ad } from './Ad'

export const SiderAd = () => {
    const sizes = [
        [300, 500],
    ]

    const sizeMapping = [
        {
            viewport: [0, 0],
            sizes: []
        },
        {
            viewport: [768, 0],
            sizes: [[300, 500]]
        }
    ]
    return <div className='sticky top-5'>
        <Ad id='sis_large1' sizes={sizes} sizeMapping={sizeMapping} adUnit='27973503/Vnexpress/Desktop/Large1/Home_0__container__'/>
        <Ad id='sis_large2'sizes={sizes} sizeMapping={sizeMapping} adUnit='27973503/Vnexpress/Desktop/Large2/Home_0__container__'/>
    </div>
}