<template>
            <section class="section faq" id="faq" data-section="faq">
            <div class="section__wrap">
                <header class="sectionHeader">
                    <h2 class="sectionHeader__main">FAQ</h2>
                </header>
                <ul class="faq__list">
                    <li class="faq__item"><button class="faq__question" id="faq__question1" @click="qa1 = !qa1" :aria-expanded="qa1.toString()" aria-controls="faq__answer1"><i class="faq__icon">Q</i>
                            <div class="faq__question__wrap">
                                <p class="text">Fan Work Guidelines (Derivative Work Guidelines)</p>
                            </div>
                        </button>
                        <div class="faq__answer" id="faq__answer1" :aria-hidden="(!qa1).toString()"><i class="faq__icon">A</i>
                            <div class="faq__answer__wrap">
                                <p class="text">Illustrations, manga, cosplay, videos, and any kind of fan works are welcome.<br class="br">The distribution of doujinshi is permitted, but the sale of goods is not.<br class="br">You are allowed to produce goods for your
                                    personal enjoyment.<br class="br">If you are found selling goods without permission, we may take legal action against you.</p>
                            </div>
                        </div>
                    </li>
                    <li class="faq__item"><button class="faq__question" id="faq__question2" @click="qa2 = !qa2" :aria-expanded="qa2.toString()" aria-controls="faq__answer2"><i class="faq__icon">Q</i>
                            <div class="faq__question__wrap">
                                <p class="text">R-18 Fan Work Guidelines</p>
                            </div>
                        </button>
                        <div class="faq__answer" id="faq__answer2" :aria-hidden="(!qa2).toString()"><i class="faq__icon">A</i>
                            <div class="faq__answer__wrap">
                                <ul class="faq__answer__list">
                                    <li class="faq__answer__item">
                                        <p class="text">Age-restricted works should be kept out of the reach of minors.</p>
                                    </li>
                                    <li class="faq__answer__item">
                                        <p class="text">Please refrain from posting with official hashtags or posting in the replies of talents.</p>
                                    </li>
                                    <li class="faq__answer__item">
                                        <p class="text">Care must be taken to ensure that age-restricted works do not appear in searches.</p>
                                    </li>
                                    <li class="faq__answer__item">
                                        <p class="text">Creations that modify official illustrations or characters as material are not permitted.</p>
                                    </li>
                                    <li class="faq__answer__item">
                                        <p class="text">Creations that do not respect the character or make the character look pathetic are not allowed.</p>
                                    </li>
                                    <li class="faq__answer__item">
                                        <p class="text">Please use common sense in your creations, and please be considerate of the viewers.</p>
                                    </li>
                                    <li class="faq__answer__item">
                                        <p class="text">Inuyama Tamaki is a <i>otokonoko</i> character (male), so any feminization or hermaphroditism expression is prohibited.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="faq__item"><button class="faq__question" id="faq__question3" @click="qa3 = !qa3" :aria-expanded="qa3.toString()" aria-controls="faq__answer3"><i class="faq__icon">Q</i>
                            <div class="faq__question__wrap">
                                <p class="text">Video Repost and Clipping Guidelines</p>
                            </div>
                        </button>
                        <div class="faq__answer" id="faq__answer3" :aria-hidden="(!qa3).toString()"><i class="faq__icon">A</i>
                            <div class="faq__answer__wrap">
                                <p class="text">In order to prevent the deprivation of Youtube monetization, please observe the following rules for clips using videos from NoriPro's talents channel.</p>
                                <ul class="faq__answer__list">
                                    <li class="faq__answer__item">
                                        <p class="text">Don't monetize your clips.</p>
                                    </li>
                                    <li class="faq__answer__item">
                                        <p class="text">Be sure to include the source in the video summary section.</p>
                                    </li>
                                    <li class="faq__answer__item">
                                        <p class="text">
                                            Clips on YouTube must be edited to include subtitles, etc., so that they are not identical to the source video. This provision does not apply to postings on Twitter, Nicovideo, etc.<br class="br"><small class="text__small">You must adhere to this rule regardless of whether your channel is monetized or not.</small>
                                        </p>
                                    </li>
                                    <li class="faq__answer__item">
                                        <p class="text">For videos that violate the guidelines, we will give you a few days to request removal.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li class="faq__item"><button class="faq__question" id="faq__question4" @click="qa4 = !qa4" :aria-expanded="qa4.toString()" aria-controls="faq__answer4"><i class="faq__icon">Q</i>
                            <div class="faq__question__wrap">
                                <p class="text">About presents</p>
                            </div>
                        </button>
                        <div class="faq__answer" id="faq__answer4" :aria-hidden="(!qa4).toString()"><i class="faq__icon">A</i>
                            <div class="faq__answer__wrap">
                                <p class="text">We are currently not accepting fan letters or gifts to our talent.</p>
                            </div>
                        </div>
                    </li>
                    <li class="faq__item"><button class="faq__question" id="faq__question5" @click="qa5 = !qa5" :aria-expanded="qa5.toString()" aria-controls="faq__answer5"><i class="faq__icon">Q</i>
                            <div class="faq__question__wrap">
                                <p class="text">About "Idol Branch" and "Variety Branch"</p>
                            </div>
                        </button>
                        <div class="faq__answer" id="faq__answer4" :aria-hidden="(!qa5).toString()"><i class="faq__icon">A</i>
                            <div class="faq__answer__wrap">
                                <p class="text">Talents belonging to NoriPro are assigned to either the Idol Branch or the Variety Branch after discussing their activity policy.
                                    <br class="br">We recommend the Variety Branch if you want to see a funny live broadcast, and the Idol Branch if you want to see a cute and soothing live broadcast.</p>
                                <p class="text">Of course, idol-like activities such as singing and dancing are performed not only by the Idol Branch but also by the Variety Branch.
                                    <br class="br">However,<em class="text__em">Idol Branch talents are not allowed to collaborate with men.</em>
                                    <br class="br">The exception to this is Inuyama Tamaki can collaborate with the idol branch because he is <i>Otokonoko</i>. Kumagaya Takuma is not allowed to collaborate with idol branch because he is a male.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
</template>
<script>
export default {
    data() {
        return {
            qa1: false,
            qa2: false,
            qa3: false,
            qa4: false,
            qa5: false
        }
    },
}
</script>