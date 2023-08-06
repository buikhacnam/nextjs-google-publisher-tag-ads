import { Ad } from './Ad'

export const InarticleAd = () => {
    const sizes = [
        [480, 270],
    ]

    const sizeMapping = [
        {
            viewport: [0, 0],
            sizes: []
        },
        {
            viewport: [768, 0],
            sizes: [[480, 270]]
        }
    ]
    return <div className='flex justify-center mb-4'>
        <Ad id='sis_inarticle' sizes={sizes} sizeMapping={sizeMapping} adUnit='27973503/Vnexpress/Desktop/Inarticle/Thoisu/Thoisu.mekong.detail_0__container__'/>
    </div>

}