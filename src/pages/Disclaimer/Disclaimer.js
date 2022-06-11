import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import "./Disclaimer.scss"
import SubHeader from '../../components/Header/SubHeader'
function Disclaimer() {
  return (
    <div>
        <Header />
<SubHeader />
        <div className="container Disclaimer">
            <h1 className="center my-4">Disclaimer</h1>
            <p className="l2">
            <b>Hellomitr Technology Private Limited</b> (“Hellomitr”) disclaims any proprietary right or interest in any slogan, tagline or any descriptive text mentioned herein above, including any copyright or other intellectual property right (if any) therein. All such rights, interests or property vest with the respective owners, who are not affiliated with, or connected to Hellomitr or its affiliates. Nothing contained herein should be construed as granting, by implication or otherwise, any license or right to use any slogan or tagline.
            </p>
            
            <ul>
                <li className="l2">
                You acknowledge that the site contains information, data, software, photographs, graphics, videos, text, images, typefaces, sounds, and other material (collectively “content”) that are protected by copyrights, trademarks, or other proprietary rights, and that these rights are valid and protected in all forms, media and technologies existing now or hereinafter developed.
                </li>

                <li className="l2">
                All content is copyrighted as a collective work under the Indian copyright laws and we own a copyright in the selection, coordination, arrangement, and enhancement of such content.
                </li>

                <li className="l2">
                You may not modify, remove, delete, augment, add to, publish, transmit, participate in the transfer or sale of, create derivative works from, or in any way exploit any of the content, in whole or in part. If no specific restrictions are displayed, you may make copies of select portions of the content, provided that the copies are made only for your personal, information and non-commercial use and that you do not alter or modify the content in any way, and maintain any notices contained in the content, such as all copyright notices, trademark legends, or other proprietary rights notices.
                </li>

                <li className="l2">
                In addition to the foregoing, use of any software content shall be governed by the software license agreement accompanying such software if any
                </li>

                <li className="l2">
                Our pricing and offers are valid for hellomitr customers only.
                </li>
            </ul>
            <p className="mb-5">
            contact us :- helpline@hellomitr.com for any further Inquiries
            </p>
        </div>
        <Footer/>
    </div>
  )
}

export default Disclaimer