import { Ad } from './Ad'

export const HeadAd = () => {
    const sizes = [
        [970, 250],
    ]

    const sizeMapping = [
        {
            viewport: [0, 0],
            sizes: []
        },
        {
            viewport: [768, 0],
            sizes: [[970, 250]]
        }
    ]
    return <div className='flex justify-center mb-4'>
        <Ad id='sis_masthead' sizes={sizes} sizeMapping={sizeMapping} adUnit='27973503/Vnexpress/Desktop/Masthead/Thoisu/Thoisu.mekong.detail_0__container__'/>
    </div>

}